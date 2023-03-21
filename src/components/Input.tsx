import SearchIcon from '../assets/images/icon-search.svg';
import { forwardRef } from 'react';

interface InputProps {
	handleSearchClick: () => void;
	handleKeydown: () => void;
}

const Input = forwardRef(({ handleSearchClick, handleKeydown }: InputProps, ref) => {
	return (
		<div className="relative">
			<input ref={ref} onKeyDown={handleKeydown} className="bg-color-7 w-full mt-14 h-16 rounded-2xl py-6 px-6 hover:outline-dashed focus:outline-dashed outline-color-9" type="text" placeholder="Search of any word..." />
			<div onClick={handleSearchClick} className="absolute right-6 bottom-5">
				<img className="cursor-pointer" src={SearchIcon} alt="Search Icon" />
			</div>
		</div>
	);
});

export default Input;
