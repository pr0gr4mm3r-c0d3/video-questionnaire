import { BtnIconStatus, ReturnIconElement } from '@/types';
import { Autorenew, PlayArrow, Stop } from '@mui/icons-material';

interface IconProps {
	iconStatus: BtnIconStatus;
}
export const Icon = ({ iconStatus }: IconProps) => {
	const getIconToRender = (): ReturnIconElement => ({
		PLAY: <PlayArrow />,
		STOP: <Stop />,
		RERECORD: <Autorenew />,
	});
	return getIconToRender()[iconStatus];
};
