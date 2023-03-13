const Modal = ({ handleFontClick }) => {
	return (
		<div className="w-48 bg-color-8 absolute drop-shadow-lg p-6 rounded-lg right-36 top-12 z-10">
			<label onClick={handleFontClick} htmlFor="San Serif">
				<input type="radio" name="Sans Serif" value="Sans Serif" />
				Sans Serif
			</label>
			<div className="font-Inter-Regular cursor-pointer font-bold text-lg pb-4 hover:text-color-9">Sans Serif</div>
			<div className="font-Lora-Regular cursor-pointer font-bold text-lg pb-4 hover:text-color-9">Serif</div>
			<div className="font-Iconsolata-Regular cursor-pointer font-bold text-lg hover:text-color-9">Mono</div>
		</div>
	);
};

export default Modal;
