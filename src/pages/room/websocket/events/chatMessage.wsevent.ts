/* eslint-disable func-names */
import { Dispatch, SetStateAction } from 'react';
import { ChatMessage, WebSocketEvent } from '../../../../models';

export default function (
	event: WebSocketEvent,
	chatHandler: Dispatch<SetStateAction<ChatMessage[]>>,
	username: string
) {
	const { message, user } = event.payload as {
		message: string;
		user: string;
	};

	chatHandler((chat) => [
		...chat,
		{ self: username === user, own: user, message },
	]);
}
