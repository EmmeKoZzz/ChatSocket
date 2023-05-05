import { IconButton, Input } from '@material-tailwind/react';
import classNames from 'classnames';
import { RComponent } from '../../../models';
import { messageIcon } from '../assets';

/* eslint-disable func-names */
export default function ({ className }: RComponent) {
	return (
		<div className={classNames('flex mt-4', className)}>
			<Input variant="standard" label="Text me!!" />
			<IconButton variant="outlined" className="mx-2 px-10 hover:shadow-md">
				{messageIcon}
			</IconButton>
		</div>
	);
}
