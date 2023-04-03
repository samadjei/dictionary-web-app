import ThemToggle from '../components/ThemToggle';
interface Meaning {
  partOfSpeech?: string;
  definitions: {
    definition?: string;
    example?: string;
  }[]
  synonyms?: string[];
}

interface Phonetics {
  audio?: string;
}

export interface DictionaryApi {
  word?: string;
  phonetic?: string;
  phonetics: Phonetics[];
  meanings?: Meaning[];
  sourceUrls?: string;
  updated?: string;
  meaning: string;
}


export interface Updated {
	updated: string
}

export interface HeaderProps {
  font: string;
  handleFontToggle: React.MouseEventHandler<HTMLInputElement>;
  handleThemeSwitch: () => void;
}

export interface Theme {
  modal: boolean;
} 

export interface InputProps {
  isValid: boolean;
	handleSearchClick: () => void;
	handleKeydown: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface ThemeToggleProps {
  handleThemeSwitch: React.MouseEventHandler<HTMLInputElement>;
}