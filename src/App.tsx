import { Button, input, Input, Typography } from '@material-tailwind/react';
import { useState } from 'react';

export default function App() {
	const [inputs, setInputs] = useState({
		room: '',
		username: '',
	});

	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="container max-w-lg flex h-52 items-center justify-between flex-wrap flex-col">
				<Typography variant="h1" color="blue" textGradient>
					Wellcome!
				</Typography>
				<Input
					label="room"
					onChange={(e) =>
						setInputs({ ...inputs, room: e.currentTarget.value })
					}
				/>
				<Input
					label="username"
					onChange={(e) =>
						setInputs({ ...inputs, username: e.currentTarget.value })
					}
				/>
				<Button color="light-blue" variant="outlined" fullWidth>
					enter
				</Button>
			</div>
		</div>
	);
}
