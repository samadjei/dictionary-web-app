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
  handleFontClick: ()=> void;
  toggleTheme: ()=> void;
  handleModalClick: () => void
  toggleDarkMode: () => void;
}

export interface Theme {
  modal: boolean;
} 

export interface ModalProps {
  handleFontClick: ()=> void;
} 