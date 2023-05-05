import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import { ChatMessage } from '../../../models';

type Props = {
	info: ChatMessage;
};

/* eslint-disable func-names */
export default function ({ info }: Props) {
	const { self, own, message } = info;

	const align = useMemo(() => (self ? 'justify-end' : 'justify-start'), [self]);
	const borderColor = useMemo(
		() => (self ? 'border-blue-300' : 'border-amber-900'),
		[self]
	);
	const ownColor = useMemo(() => (self ? 'blue' : 'amber'), [self]);

	return (
		<div className={`p-2 flex ${align}`}>
			<div className={`border w-fit py-2 px-4 rounded-lg ${borderColor}`}>
				<Typography variant="h6" className="text-xs" color={ownColor}>
					{`${own}:`}
				</Typography>
				<Typography>{message}</Typography>
			</div>
		</div>
	);
}
