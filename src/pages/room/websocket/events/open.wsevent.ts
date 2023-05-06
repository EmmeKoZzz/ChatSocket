/* eslint-disable func-names */
import { WebSocketEvent } from '../../../../models';

export default function ({ payload: message }: WebSocketEvent) {
	console.log(message);
}
