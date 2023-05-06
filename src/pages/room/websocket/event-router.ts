/* eslint-disable func-names */
import { Dispatch, SetStateAction } from 'react';
import { ChatMessage, WebSocketEvent } from '../../../models';
import { wsChatMessage, wsOpen } from './events';

export default function (
	event: WebSocketEvent,
	chatHandler: Dispatch<SetStateAction<ChatMessage[]>>,
	username: string
) {
	switch (event.type) {
		case 'connected':
			wsOpen(event);
			break;
		case 'chatMessage':
			wsChatMessage(event, chatHandler, username);
			break;
		default:
	}
}
