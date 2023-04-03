import { useEffect, useState } from 'react';
import axios from 'axios';
import Play from '../assets/images/icon-play.svg';
import NewWindow from '../assets/images/icon-new-window.svg';
import { DictionaryApi, Updated } from '../interface/interface';


const useAxios = ({ updated }: Updated) => {
	const [dictionary, setDictionary] = useState<DictionaryApi | undefined>();
	const [noResponse, setNoResponse] = useState(false);
	
	const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${updated}`;

	useEffect(() => {
		axios
			.get(baseUrl)
			.then((response) => {
				setDictionary(response.data[0]);
				setNoResponse(false)
			})
			.catch((error) => {
				if (error.response.status === 404) {
					setNoResponse(true)
				} 
			});
	}, [updated]);

	// Filter the phonetic sound for dictionary word
	const filteredSound = dictionary?.phonetics.filter(sound => sound.audio !== '') || [];
	const phoneticAudio = filteredSound[0]?.audio;
	
	const audio = new Audio(phoneticAudio)
	const start = () => {
		audio.play();
	}
	return (
		<div className="mt-11">
			{!noResponse ? <>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<h1 className="text-6xl font-bold dark:text-color-7">{dictionary?.word}</h1>
					<span className="text-color-9 pt-2">{dictionary?.phonetic}</span>
				</div>
				<img className="cursor-pointer" onClick={start} src={Play} alt="Play Button" />
			</div>
			<div className="mt-10">
				{dictionary?.meanings?.map((meaning) => (
					<div key={meaning.partOfSpeech}>
						<div className="flex items-center">
							<h2 className="font-bold dark:text-color-7 text-2xl my-10 italic mr-5">{meaning?.partOfSpeech}</h2>
							<hr className="h-1 mx-auto w-full bg-color-6 dark:bg-color-12 border-0 md:my-10 dark:bg-gray-700" />
						</div>
						<div className="text-xl text-color-5 mb-10">Meaning</div>
						{meaning.definitions.map((definition) => (
							<li className="marker:text-color-9 text-lg dark:text-color-7" key={definition?.definition}>
								{definition?.definition}
								{definition?.example && <p className="text-color-5 pt-1">"{definition?.example}"</p>}
							</li>
						))}
					</div>
				))}
			</div>
			<hr className="h-1 mx-auto w-full mt-10 mb-5 bg-color-6 border-0" />
			<div className="flex w-full">
				<span className="text-color-5 mr-5 underline">Source</span>
				<div className="flex items-center">
					<a className="underline mr-3 text-color-3 dark:text-color-7" target="_blank" rel="noopener" href={dictionary?.sourceUrls}>
						{dictionary?.sourceUrls}
					</a>
					<img className="w-4 h-4" src={NewWindow} alt="New Window icon" />
				</div>
			</div>
			</> :
				<div className='text-center pt-20'>
					<span className='text-6xl'>😕</span>
					<h2 className='font-bold text-color-3 dark:text-color-8 text-xl pt-11 pb-6'>No Definitions Found</h2>
					<p className='text-color-5'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
			</div>}
			
		</div>
	);
};

export default useAxios;
