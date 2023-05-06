/* eslint-disable react/jsx-key */
/* eslint-disable func-names */
import { Message } from '.';
import { ChatMessage } from '../../../models';

type Props = {
	messages: ChatMessage[];
};

export default function ({ messages }: Props) {
	return (
		<div className="h-full border border-blue-300 border-solid rounded-xl overflow-hidden flex flex-col justify-end">
			{messages.map((message) => (
				<Message info={message} />
			))}
		</div>
	);
}
