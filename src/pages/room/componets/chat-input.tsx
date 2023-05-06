import { IconButton, Input } from '@material-tailwind/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SendJsonMessage } from 'react-use-websocket/dist/lib/types';
import { ChatMessage } from '../../../models';
import { messageIcon } from '../assets';

type Props = {
	user: string;
	send: SendJsonMessage;
};

/* eslint-disable func-names */
export default function ({ send, user }: Props) {
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		send({
			type: 'chatMessage',
			payload: { message, user },
		});

		const input = document.querySelector('#ChatInput') as HTMLInputElement;
		input.value = '';
		setMessage('');
	};

	return (
		<div className="flex mt-4">
			<Input
				id="ChatInput"
				variant="standard"
				label="Text me!!"
				onChange={({ target }) => setMessage(target.value)}
				onKeyDown={({ key }) => {
					if (key === 'Enter' && message !== '') sendMessage();
				}}
			/>
			<IconButton
				variant="outlined"
				className="ml-2 px-10 hover:shadow-md"
				onClick={sendMessage}
				disabled={message === ''}
			>
				{messageIcon}
			</IconButton>
		</div>
	);
}
