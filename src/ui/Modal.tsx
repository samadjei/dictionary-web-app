import { ModalProps } from '../interface/interface';

const Modal = ({ handleFontToggle }: ModalProps) => {
	return (
		<ul aria-labelledby="font-options-container" className="w-48 bg-color-8 dark:bg-color-2 absolute drop-shadow-lg p-6 rounded-lg right-36 top-12 z-10">
			<li aria-label="Sans Serif" onClick={handleFontToggle} className="text-color-1 dark:text-color-8 font-Inter-Regular cursor-pointer font-bold text-lg pb-4 hover:text-color-9 dark:hover:text-color-9" value="Sans-Serif">
				Sans-Serif
			</li>
			<li aria-label="Serif" onClick={handleFontToggle} className="text-color-1 dark:text-color-8 font-Lora-Regular cursor-pointer font-bold text-lg pb-4 hover:text-color-9 dark:hover:text-color-9" value="Serif">
				Serif
			</li>
			<li aria-label="Mono" onClick={handleFontToggle} className="text-color-1 dark:text-color-8 font-Iconsolata-Regular cursor-pointer font-bold text-lg hover:text-color-9 dark:hover:text-color-9" value="Mono">
				Mono
			</li>
		</ul>
	);
};

export default Modal;
