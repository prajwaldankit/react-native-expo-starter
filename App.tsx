import React from 'react';

import './global.css';
// import HomePage from './src/Pages/Home';
import HomePage from '@Pages/Home';
import MyStatusBar from '@Components/MyStatusBar';

export default function App() {
	return (
		<>
			<HomePage />
			<MyStatusBar />
		</>
	);
}
