import { useEffect, useState } from 'react';
import axios from 'axios';
import Play from '../assets/images/icon-play.svg';
import NewWindow from '../assets/images/icon-new-window.svg';

const useAxios = ({ updated }) => {
	const [dictionary, setDictionary] = useState({});

	useEffect(() => {
		axios
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${updated}`)
			.then((res) => {
				setDictionary(res.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [updated]);

	return (
		<div>
			{updated === undefined ? (
				<h1>Hello</h1>
			) : (
				<div className="mt-11">
					<div className="flex justify-between">
						<div className="flex flex-col">
							<h1 className="text-6xl font-bold">{dictionary.word}</h1>
							<span className="text-color-9 pt-2">{dictionary.phonetic}</span>
						</div>

						<img className="cursor-pointer" src={Play} alt="Play Button" />
					</div>
					{/* Meaning */}
					<div className="mt-10">
						{dictionary.meanings?.map((meaning) => (
							<div key={meaning.partOfSpeech}>
								<div className="flex items-center">
									<h2 className="font-bold text-2xl my-10 italic mr-5">{meaning.partOfSpeech}</h2>
									<hr className="h-1 mx-auto w-full bg-color-6 border-0 md:my-10 dark:bg-gray-700" />
								</div>
								<div className="text-xl text-color-5 mb-10">Meaning</div>
								{/* <ul> */}
								{meaning.definitions.map((definition) => (
									<li className="marker:text-color-9 text-lg" key={definition.definition}>
										{definition.definition}
										{definition.example && <p className="text-color-5 pt-1">"{definition.example}"</p>}
									</li>
								))}
								{/* </ul> */}
							</div>
						))}
					</div>
					<hr className="h-1 mx-auto w-full mt-10 mb-5 bg-color-6 border-0" />
					<div className="flex w-full">
						<span className="text-color-5 mr-5 underline">Source</span>
						<div className="flex items-center">
							<a className="underline mr-3 text-color-3" target="_blank" rel="noopener" href={dictionary.sourceUrls}>
								{dictionary.sourceUrls}
							</a>
							<img className="w-4 h-4" src={NewWindow} alt="New Window icon" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default useAxios;
