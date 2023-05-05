import { useState } from 'react';
import { Lobby, Room } from './pages';

export default function App() {
	const [room, setRoom] = useState({
		initChat: false,
		url: '',
		room: '',
		username: '',
	});

	return room.initChat ? <Room state={room} /> : <Lobby init={setRoom} />;
}
