import Header from './components/Header';
import Input from './components/Input';
import { useState, useRef } from 'react';
import UseAxios from './hooks/useAxios';

type Query = {
	query: string;
	inputValue: string;
};

function App() {
	const inputRef = useRef(null);
	const [updated, setUpdated] = useState('keyboard');
	const [font, setFont] = useState('Sans Serif');
	const handleFontClick = (e) => {
		setFont(e.target.value);
		console.log(e.target.value);
		console.log('clicked');
	};
	const handleSearchClick = (e) => {
		setUpdated(inputRef.current.value);
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			setUpdated(inputRef.current.value);
		}
	};

	return (
		<div className="custom_container mx-auto mt-14 mb-32 font-Iconsolata-Regular">
			<Header handleFontClick={handleFontClick} font={font} />
			<Input ref={inputRef} handleKeydown={handleKeydown} handleSearchClick={handleSearchClick} />
			<UseAxios updated={updated} />
		</div>
	);
}

export default App;
