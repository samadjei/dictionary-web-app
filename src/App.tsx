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

	const inputValueClick = () => {
		setUpdated(inputRef.current.value);
	};

	return (
		<div className="container w-main-width mx-auto mt-14">
			<Header />
			<Input ref={inputRef} inputValueClick={inputValueClick} />
			<UseAxios updated={updated} />
		</div>
	);
}

export default App;
