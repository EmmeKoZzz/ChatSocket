import { WebSocketEvent } from '../../../../models';

export default function ({ payload: message }: WebSocketEvent) {
	console.log(message);
}
