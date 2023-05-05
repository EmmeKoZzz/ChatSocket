import { IconButton, Input } from '@material-tailwind/react';
import classNames from 'classnames';
import { Dispatch, SetStateAction, useState } from 'react';
import { SendJsonMessage } from 'react-use-websocket/dist/lib/types';
import { ChatMessage, RComponent } from '../../../models';
import { messageIcon } from '../assets';

type Props = {
	send: SendJsonMessage;
	updateChat: Dispatch<SetStateAction<ChatMessage[]>>;
};

/* eslint-disable func-names */
export default function ({ updateChat, send }: Props) {
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		updateChat((chat) => [...chat, { self: true, own: 'me', message }]);

		const input = document.querySelector('#ChatInput') as HTMLInputElement;
		input.value = '';

		setMessage('');

		send({
			type: 'chatMessage',
			payload: message,
		});
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
