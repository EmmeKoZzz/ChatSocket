import { useState } from 'react';
import { Lobby } from './pages';

export default function App() {
	const [socketUrl, setSocketUrl] = useState('');
	const [room, setRoom] = useState({
		initChat: false,
		room: '',
		username: '',
	});

	return <Lobby init={setRoom} liftSocketUrl={setSocketUrl} />;
}
