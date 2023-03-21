import Header from './components/Header';
import Input from './components/Input';
import { useState, useRef } from 'react';
import UseAxios from './hooks/useAxios';

interface Value {}

function App() {
	const [updated, setUpdated] = useState('keyboard');
	const [font, setFont] = useState('Sans Serif');
	const inputRef = useRef<HTMLInputElement | null>(null);

	let fontToggle = 'font-Iconsolata-Regular';

	const handleFontClick = (e: React.FormEvent<HTMLFormElement>) => {
		const target = e.target.textContent;
		setFont(target.value);
		console.log(target.value);
	};

	const handleSearchClick = () => {
		// using type guard to make sure the current property on the ref does not store a `null` value
		if (inputRef.current != null) {
			setUpdated(inputRef.current.value);
		}
	};

	const handleKeydown = (e) => {
		if (e.key === 'Enter') {
			if (inputRef.current != null) {
				setUpdated(inputRef.current.value);
			}
		}
	};

	return (
		<div className={`custom_container mx-auto mt-14 mb-32 ${fontToggle}`}>
			<Header handleFontClick={handleFontClick} font={font} />
			<Input ref={inputRef} handleKeydown={handleKeydown} handleSearchClick={handleSearchClick} />
			<UseAxios updated={updated} />
		</div>
	);
}

export default App;
