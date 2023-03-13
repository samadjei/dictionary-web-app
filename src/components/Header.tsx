import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import ArrowDown from '../assets/images/icon-arrow-down.svg';
import Moon from '../assets/images/icon-moon.svg';
import Modal from '../ui/Modal';

const Header = ({font}) => {
	const [modal, setModal] = useState(false);
	const toggleTheme = () => {
		setTheme(true);
	};
	

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
				<div className="flex cursor-pointer">
					<div onClick={handleModalClick} className="flex items-center">
						<span className="mr-5 font-bold">{font}</span>
						{modal ? <img className="w-3 h-3 rotate-180 ease-in duration-200" src={ArrowDown} alt="Arrow Down" /> : <img className="w-3 h-3 " src={ArrowDown} alt="Arrow Down" />}
					</div>
					<span className="ml-7 mr-7">|</span>
					<div className="flex">
						<div className="mr-5" onClick={toggleTheme}>
							<input type="checkbox" />
						</div>
						<img className="cursor-pointer" src={Moon} alt="Moon icon" />
					</div>
				</div>
			</div>
			{modal && <Modal />}
		</div>
	);
};

export default Header;
