import { ERROR_MESSAGES, ICON_STATUS } from '@/enums';
import { BtnIconStatus, HandleActionBtnVideo } from '@/types';
import { RefObject, useContext, useRef, useState } from 'react';
import { UIContext } from '@/context';
import { useHandleError } from './useHanldeError';

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
	const { handleError } = useHandleError();
	const { setRecording } = useContext(UIContext);
	const videoRef: RefObject<HTMLVideoElement> = useRef(null);
	const limitTimeVideo = 120000;
	const initMediaRecorder = async (): Promise<void> => {
		try {
			setShowVideoElement(true);
			recordedChunks = [];
			stream = await navigator.mediaDevices.getUserMedia(constraints);
			if (!stream) throw Error(ERROR_MESSAGES.NOT_PERMISSIONS);
			if (!videoRef.current) throw Error(ERROR_MESSAGES.VIDEO_REF);
			videoRef.current.srcObject = stream;
			videoRef.current.controls = false;
			await videoRef.current.play();
			mediaRecorder = new MediaRecorder(stream);
		} catch (err: unknown) {
			setShowVideoElement(false);
			handleError({ message: ERROR_MESSAGES.NOT_PERMISSIONS });
		}
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
			setRecording(false);
		};
	};

	const recorder = async (): Promise<boolean> => {
		await initMediaRecorder();
		if (!mediaRecorder) return false;
		setRecording(true);
		dataAvailableListener();
		onStopListener();
		mediaRecorder.start();
		timeOutId = setTimeout(() => {
			mediaRecorder.stop();
		}, limitTimeVideo);
		return true;
	};

	const handleStartRecord = () => {
		recorder()
			.then((success) => {
				if (success) setIconStatus(ICON_STATUS.STOP);
			})
			.catch((err) => handleError(err));
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
