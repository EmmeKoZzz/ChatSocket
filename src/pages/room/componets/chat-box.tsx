/* eslint-disable func-names */
import { Message } from '.';
import { ChatMessage } from '../../../models';

type Props = {
	name: string;
	messages: ChatMessage[];
};

export default function ({ name, messages }: Props) {
	return (
		<div className="h-full border border-blue-300 border-solid rounded-xl overflow-hidden flex flex-col justify-end">
			<Message info={{ self: false, own: 'tu', message: 'indeed' }} />
			<Message info={{ self: true, own: 'yo', message: 'awesome!' }} />
		</div>
	);
}
