import { ICON_STATUS } from '@/enums';
import { BtnIconStatus, HandleActionBtnVideo } from '@/types';
import { RefObject, useRef, useState } from 'react';

const constraints: MediaStreamConstraints = {
	video: true,
	audio: true,
};

let recordedChunks: BlobPart[] = [];
let timeOutId: NodeJS.Timeout;
let mediaRecorder: MediaRecorder;
let stream: MediaStream;
export const useWebRTC = (videoSrc: string) => {
	const [iconStatus, setIconStatus] = useState<BtnIconStatus>(ICON_STATUS.PLAY);
	const [showVideoElement, setShowVideoElement] = useState<boolean>(!!videoSrc);
	const [videoData, setVideoData] = useState<string | null>(null);
	const videoRef: RefObject<HTMLVideoElement> = useRef(null);
	const limitTimeVideo = 120000;
	const initMediaRecorder = async (): Promise<void> => {
		setShowVideoElement(true);
		recordedChunks = [];
		stream = await navigator.mediaDevices.getUserMedia(constraints);
		if (!stream) throw new Error('Revisa los permisos de tu navegador');
		if (!videoRef.current) throw new Error('Revisa los permisos de tu navegador');
		videoRef.current.srcObject = stream;
		videoRef.current.controls = false;
		await videoRef.current.play();
		mediaRecorder = new MediaRecorder(stream);
	};

	const dataAvailableListener = () => {
		if (!mediaRecorder) return;
		mediaRecorder.ondataavailable = ({ data }) => {
			recordedChunks.push(data);
		};
	};
	const onStopListener = () => {
		if (!mediaRecorder) return;
		mediaRecorder.onstop = () => {
			if (stream) stream.getTracks().forEach((track) => track.stop());
			setIconStatus(ICON_STATUS.RERECORD);
			const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
			if (!videoRef.current) return;
			const srcVideo = URL.createObjectURL(recordedBlob);
			videoRef.current.src = srcVideo;
			videoRef.current.srcObject = null;
			videoRef.current.controls = true;
			setVideoData(srcVideo);
		};
	};

	const recorder = async () => {
		await initMediaRecorder();
		if (!mediaRecorder) return;
		dataAvailableListener();
		onStopListener();
		mediaRecorder.start();
		timeOutId = setTimeout(() => {
			mediaRecorder.stop();
		}, limitTimeVideo);
	};

	const handleStartRecord = () => {
		recorder().catch((err) => {
			console.log(err);
		});
		setIconStatus(ICON_STATUS.STOP);
	};
	const handleStopRecord = () => {
		clearTimeout(timeOutId);
		if (!mediaRecorder) return;
		onStopListener();
		mediaRecorder.stop();
		setIconStatus(ICON_STATUS.RERECORD);
	};
	const handleClick: HandleActionBtnVideo = {
		PLAY: handleStartRecord,
		STOP: handleStopRecord,
		RERECORD: handleStartRecord,
	};

	return { iconStatus, showVideoElement, videoRef, videoData, handleClick, setIconStatus, setShowVideoElement };
};
