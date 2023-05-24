export type BtnIconStatus = 'PLAY' | 'STOP' | 'RERECORD';

// eslint-disable-next-line prettier/prettier
export type HandleActionBtnVideo = { [key in BtnIconStatus]: () => void };

export type ReturnIconElement = { [key in BtnIconStatus]: JSX.Element };
