import Header from './components/Header';
import Input from './components/Input';
import { useState, useRef, useEffect } from 'react';
import UseAxios from './hooks/useAxios';

function App() {
	const [updated, setUpdated] = useState('keyboard');
	const [font, setFont] = useState('Sans-Serif');
	const [theme, setTheme] = useState('light');
	const [isValid, setIsValid] = useState(true);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme])
	

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	const handleFontToggle: React.MouseEventHandler<HTMLInputElement> = (e) => {
		const target = e.target as HTMLElement;
		setFont(target.innerHTML);
	};

	const handleSearchClick = () => {		
		if (inputRef && inputRef.current) {
			setUpdated(inputRef.current.value);
		}
		if (inputRef?.current?.value === '') {
			setIsValid(false);
		} else if (inputRef.current != null && inputRef.current?.value !== '') {
			setUpdated(inputRef.current.value);
			setIsValid(true);
		}
	};

	const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			if (inputRef && inputRef.current) {
				setUpdated(inputRef.current.value);
			}
		}
		if (e.key === 'Enter' && inputRef.current?.value === '') {
			setIsValid(false);
		} else if (e.key === 'Enter' && inputRef.current?.value !== '') {
			setIsValid(true)
		}
	};

	return (
		<div className={`min-h-screen dark:bg-color-1 font-${font}`}>
			<div className="custom_container px-10 mx-auto pt-14 pb-32">
			<Header handleThemeSwitch={handleThemeSwitch} handleFontToggle={handleFontToggle} font={font} />
			<Input isValid={isValid} ref={inputRef} handleKeydown={handleKeydown} handleSearchClick={handleSearchClick} />
			<UseAxios updated={updated} />
			</div>
		</div>
	);
}

export default App;
