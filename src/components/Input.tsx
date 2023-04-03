import SearchIcon from '../assets/images/icon-search.svg';
import { forwardRef } from 'react';
import { InputProps } from '../interface/interface';


const Input = forwardRef(({ isValid, handleSearchClick, handleKeydown }: InputProps, ref: React.LegacyRef<HTMLInputElement>) => {


	return (
		<div className="relative">
			<input ref={ref} onKeyDown={handleKeydown} className={`bg-color-7 dark:bg-color-2 ${!isValid ? 'border border-color-10': ''} placeholder:dark:text-color-7 placeholder:font-bold w-full mt-14 h-16 rounded-2xl py-6 px-6 hover:outline-dashed focus:outline-dashed outline-color-9`} type="text" placeholder="Search of any word..." />
			<div onClick={handleSearchClick} className="absolute right-6 bottom-5">
				<img className="cursor-pointer" src={SearchIcon} alt="Search Icon" />
			</div>
			{!isValid && <span className='absolute left-0 -bottom-8 text-color-10'>Whoops, can't be empty</span>}
		</div>
	);
});

export default Input;
