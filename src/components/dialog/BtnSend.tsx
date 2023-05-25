import { RefObject, useContext, useRef, useState } from 'react';
import { Dialog, DialogContent, LinearProgress } from '@mui/material';
import { QuestionsContext, UIContext } from '@/context';
import { useNavigate } from 'react-router-dom';
import { BtnComponent } from '../BtnComponent';

const INITIAL_TEXT = 'Enviando cuestionario...';
export const BtnSend = () => {
	const [open, setOpen] = useState(false);
	const pRef: RefObject<HTMLParagraphElement> = useRef(null);
	const { questionsState, resetQuestionsState } = useContext(QuestionsContext);
	const { uiState } = useContext(UIContext);
	const navigate = useNavigate();
	const disabledBtn = () => questionsState.questions.some(({ done }) => done === false) || uiState.recording;
	const handleClickOpen = () => {
		setOpen(true);
		setTimeout(() => {
			if (pRef.current) pRef.current.textContent = 'Su cuestionario ha sido enviado con éxito';
			setTimeout(() => {
				setOpen(false);
				navigate('/');
				resetQuestionsState();
			}, 1000);
		}, 2500);
	};
	const handleOnClose = () => {
		if (pRef.current) pRef.current.textContent = INITIAL_TEXT;
	};

	return (
		<>
			<BtnComponent disabled={disabledBtn()} label='Enviar' onClick={handleClickOpen} />
			<Dialog
				open={open}
				aria-labelledby='alert-dialog-title'
				onClose={handleOnClose}
				aria-describedby='alert-dialog-description'
			>
				<DialogContent>
					<p ref={pRef}>{INITIAL_TEXT}</p>
					<LinearProgress />
				</DialogContent>
			</Dialog>
		</>
	);
};
