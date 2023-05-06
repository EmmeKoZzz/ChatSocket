/* eslint-disable func-names */
import { useState } from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { RoomState } from '../../models';
import { ChatMessage } from '../../models/message.model';
import { ChatBox, ChatInput } from './componets';
import { chatEventRouter } from './websocket';

type Props = { state: RoomState };

export default function ({ state }: Props) {
	const [messages, setMessages] = useState<ChatMessage[]>([]);

	function onMessage({ data }: MessageEvent) {
		chatEventRouter(JSON.parse(data), setMessages, state.username);
	}

	const { sendJsonMessage: send } = useWebSocket(state.url, { onMessage });

	return (
		<div className="w-full flex h-full justify-center items-center">
			<div className="w-4/5 h-full flex flex-col justify-end pb-16 pt-4 container max-w-lg">
				<ChatBox messages={messages} />
				<ChatInput send={send} user={state.username} />
			</div>
		</div>
	);
}
