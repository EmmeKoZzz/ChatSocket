/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Typography } from '@material-tailwind/react';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { RoomState } from '../../models';

const validationSchema = object().shape({
	room: string().required(),
	username: string().required(),
});
type Fields = InferType<typeof validationSchema>;

type Props = {
	init: Dispatch<SetStateAction<RoomState>>;
};

// eslint-disable-next-line func-names
export default function ({ init }: Props) {
	const form = useForm<Fields>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = useCallback(
		(data: Fields) => {
			init({
				...data,
				initChat: true,
				url: `ws://localhost:8000/chat/${data.room}`,
			});
		},
		[init]
	);

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
