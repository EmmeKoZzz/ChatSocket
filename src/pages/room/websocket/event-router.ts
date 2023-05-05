import { WebSocketEvent } from '../../../models';
import { wsOpen } from './events';

export default function (event: WebSocketEvent) {
	switch (event.type) {
		case 'connected':
			wsOpen(event);
			break;
		default:
	}
}
