/* eslint-disable func-names */
import { useState } from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { RoomState } from '../../models';
import { ChatMessage } from '../../models/message.model';
import { ChatBox, ChatInput } from './componets';
import { eventRouter } from './websocket';

type Props = { state: RoomState };

export default function ({ state }: Props) {
	const [messages, setMessages] = useState<ChatMessage[]>([]);

	function onMessage({ data }: MessageEvent) {
		eventRouter(JSON.parse(data));
	}

	const ws = useWebSocket(state.url, { onMessage });

	return (
		<div className="w-full flex h-full justify-center items-center">
			<div className="w-4/5 h-4/5 flex flex-col justify-end py-6 container">
				{/* <ChatBox name={state.room} messages={messages} />
				<ChatInput send={setMessages} /> */}
			</div>
		</div>
	);
}
