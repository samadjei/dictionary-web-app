import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import ArrowDown from '../assets/images/icon-arrow-down.svg';
import Moon from '../assets/images/icon-moon.svg';
import Modal from '../ui/Modal';
import { HeaderProps } from '../interface/interface';
import ThemToggle from './ThemToggle';

const Header = ({ font, handleFontToggle, handleThemeSwitch }: HeaderProps) => {
	const [modal, setModal] = useState(false);

	const handleModalClick = () => {
		if (modal === false) {
			setModal(true);
		} else {
			setModal(false);
		}
	};

	return (
		<div className="flex justify-between items-center relative">
			<img src={Logo} alt="Dictionary Logo" />
			<div>
				<div className="flex cursor-pointer" aria-labelledby='font-filter-options'>
					<div onClick={handleModalClick} className="flex items-center">
						<span className="mr-5 font-bold dark:text-color-7">{font}</span>
						{modal ? <img className="w-3 h-3 rotate-180 ease-in duration-200" src={ArrowDown} alt="Arrow Down" /> : <img className="w-3 h-3 " src={ArrowDown} alt="Arrow Down" />}
					</div>
					<span className="ml-7 mr-7">|</span>
					<div className="flex">
						<div className="mr-5">
							<ThemToggle handleThemeSwitch={handleThemeSwitch} />
						</div>
						<img className="cursor-pointer" src={Moon} alt="Moon icon" />
					</div>
				</div>
			</div>
			{modal && <Modal font={font} handleFontToggle={handleFontToggle} />}
		</div>
	);
};

export default Header;
