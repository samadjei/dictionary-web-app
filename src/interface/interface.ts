interface Meanings {
  partOfSpeech?: string;
  definitions?: {
    definition?: string;
    example?: string;
  }[]
  synonyms?: string[];
}

export interface DictionaryApi {
    word?: string;
    phonetic?: string;
    meanings?: Meanings;
    sourceUrls?: string;
    updated?: string;
}


export interface Updated {
	updated: string
}

export interface HeaderProps {
  font: string;
  handleFontClick: ()=> void;
  toggleTheme: ()=> void;
  handleModalClick: () => void
}

export interface Theme {
  modal: boolean;
} 

export interface ModalProps {
  handleFontClick: ()=> void;
} 