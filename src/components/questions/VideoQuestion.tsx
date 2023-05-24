/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect } from 'react';
import { useWebRTC } from '@/hooks';
import { Fab, Typography } from '@mui/material';
import { QuestionsContext } from '@/context';
import { useParams } from 'react-router-dom';
import { ICON_STATUS } from '@/enums';
import { Icon } from './Icon';

interface VideoProps {
	videoSrc: string;
	controls: boolean;
}
export const VideoQuestion = ({ videoSrc, controls }: VideoProps) => {
	const { iconStatus, showVideoElement, videoRef, videoData, handleClick, setIconStatus, setShowVideoElement } =
		useWebRTC(videoSrc);
	const { questionId } = useParams();
	const { updateQuestion } = useContext(QuestionsContext);
	useEffect(() => {
		setShowVideoElement(!!videoSrc);
		if (videoRef.current) {
			videoRef.current.src = videoSrc || '';
			videoRef.current.controls = !!videoSrc;
			setIconStatus(ICON_STATUS[videoSrc ? 'RERECORD' : 'PLAY']);
		}
	}, [videoSrc]);

	useEffect(() => {
		if (videoData && questionId) updateQuestion({ id: questionId, videoRecorder: videoData });
	}, [videoData]);
	return (
		<>
			{showVideoElement && <video className='card__question-content-video' ref={videoRef} />}
			{!showVideoElement && (
				<div className='card__question-content-notVideo'>
					<Typography variant='h4' align='center'>
						No has grabado algún video aún
					</Typography>
				</div>
			)}
			{controls && (
				<Fab color='primary' className='card__question-content-btn' onClick={handleClick[iconStatus]}>
					<Icon iconStatus={iconStatus} />
				</Fab>
			)}
		</>
	);
};
