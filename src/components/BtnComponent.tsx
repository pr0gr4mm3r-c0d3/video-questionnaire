/* eslint-disable react/require-default-props */
import Button from '@mui/material/Button';

interface IBtnProps {
	label: string;
	variant?: 'contained' | 'outlined';
	color?: 'error' | 'primary' | 'success';
	[key: string]: unknown;
}

export const BtnComponent = ({ label, variant = 'contained', color = 'error', ...props }: IBtnProps) => {
	return (
		// eslint-disable-next-line prettier/prettier
		<Button
			size='large'
			variant={variant}
			color={color}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		>
			{label}
		</Button>
	);
};
