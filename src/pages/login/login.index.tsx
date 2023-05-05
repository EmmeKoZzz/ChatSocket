/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Typography } from '@material-tailwind/react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { InferType, object, string } from 'yup';

const validationSchema = object().shape({
	room: string().required(),
	username: string().required(),
});
type Fields = InferType<typeof validationSchema>;

// eslint-disable-next-line func-names
export default function () {
	const [socketUrl, setSocketUrl] = useState('');
	const form = useForm<Fields>({
		resolver: yupResolver(validationSchema),
	});

	const { readyState } = useWebSocket(socketUrl, {
		onOpen(event) {
			console.log(event);
		},
	});

	console.log(readyState);

	const onSubmit = useCallback((data: Fields) => {
		setSocketUrl(`ws://localhost:8000/`);
	}, []);

	return (
		<div className="w-full h-full flex justify-center items-center">
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="container max-w-lg flex h-52 items-center select-none justify-between flex-wrap flex-col"
			>
				<Typography variant="h1" color="blue" textGradient>
					{"Let's Chat!"}
				</Typography>
				<Input
					label="room"
					{...form.register('room')}
					color={form.formState.errors.room && 'red'}
				/>
				<Input
					label="username"
					{...form.register('username')}
					color={form.formState.errors.room && 'red'}
				/>
				<Button
					color="light-blue"
					variant="outlined"
					fullWidth
					type="submit"
					className="uppercase"
				>
					enter
				</Button>
			</form>
		</div>
	);
}
