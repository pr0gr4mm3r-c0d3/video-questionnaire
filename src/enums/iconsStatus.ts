import { BtnIconStatus } from '@/types';

// eslint-disable-next-line prettier/prettier
type EnumICon = { [key in BtnIconStatus]: key };

export const ICON_STATUS: Readonly<EnumICon> = {
	PLAY: 'PLAY',
	STOP: 'STOP',
	RERECORD: 'RERECORD',
} as const;
