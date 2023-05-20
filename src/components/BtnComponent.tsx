/* eslint-disable react/require-default-props */
import Button from '@mui/material/Button';

interface IBtnProps {
	label: string;
	variant?: 'contained' | 'outlined';
	color?: 'error' | 'primary' | 'success';
}

export const BtnComponent = ({
	label,
	variant = 'contained',
	color = 'error',
}: IBtnProps) => {
	return (
		<Button variant={variant} color={color} size='large'>
			{label}
		</Button>
	);
};
