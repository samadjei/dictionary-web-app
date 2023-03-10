import Logo from '../assets/images/logo.svg';
import ArrowDown from '../assets/images/icon-arrow-down.svg';
import Sun from '../assets/images/icon-arrow-down.svg';
import Moon from '../assets/images/icon-moon.svg';
import { useState } from 'react';

const Header = () => {
	const [theme, setTheme] = useState(false);
	const toggleTheme = () => {
		setTheme(true);
	};
	return (
		<div className="flex justify-between items-center">
			<img src={Logo} alt="Dictionary Logo" />
			<div>
				<div className="flex cursor-pointer">
					<span className="mr-5 font-bold">Sans Serif</span>
					<img src={ArrowDown} alt="Arrow Down" />
					<span className="ml-7 mr-7">|</span>
					<div className="flex">
						<div className="mr-5" onClick={toggleTheme}>
							<input type="checkbox" />
						</div>
						<img className="cursor-pointer" src={Moon} alt="Moon icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
