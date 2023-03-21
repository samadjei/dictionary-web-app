const Modal = ({ font, handleFontClick }) => {
	return (
		<ul className="w-48 bg-color-8 absolute drop-shadow-lg p-6 rounded-lg right-36 top-12 z-10">
			<li onClick={handleFontClick} className="pb-4">
				<span className="text-color-1 font-Inter-Regular cursor-pointer font-bold text-lg pb-4 hover:text-color-9">Sans Serif</span>
			</li>
			<li onClick={handleFontClick} className="pb-4">
				<span className="text-color-1 font-Lora-Regular cursor-pointer font-bold text-lg pb-4 hover:text-color-9">Serif</span>
			</li>
			<li onClick={handleFontClick}>
				<span className="text-color-1 font-Iconsolata-Regular cursor-pointer font-bold text-lg hover:text-color-9">Mono</span>
			</li>
		</ul>
	);
};

export default Modal;
