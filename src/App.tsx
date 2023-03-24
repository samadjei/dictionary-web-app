import Header from './components/Header';
import Input from './components/Input';
import { useState, useRef } from 'react';
import UseAxios from './hooks/useAxios';

function App() {
	const [updated, setUpdated] = useState('keyboard');
	const [font, setFont] = useState('Sans-Serif');
	const [darkMode, setDarkMode] = useState(true)
	const inputRef = useRef<HTMLInputElement | null>(null);

	const toggleDarkMode = () => {
		setDarkMode(prevDarkMode => !prevDarkMode)
	}

	const handleFontClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		const target = e.target;
		setFont(target.innerHTML);
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
		<div className={`min-h-screen font-${font}`}>
			<div className="custom_container mx-auto mt-14 mb-32">
			<Header toggleDarkMode={toggleDarkMode} handleFontClick={handleFontClick} font={font} />
			<Input ref={inputRef} handleKeydown={handleKeydown} handleSearchClick={handleSearchClick} />
			<UseAxios updated={updated} />
			</div>
		</div>
	);
}

export default App;
