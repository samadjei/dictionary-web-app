import { useEffect, useState } from 'react';
import axios from 'axios';
import Play from '../assets/images/icon-play.svg';

const useAxios = ({ updated }) => {
	const [dictionary, setDictionary] = useState({});

	useEffect(() => {
		axios
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${updated}`)
			.then((res) => {
				setDictionary(res.data[0]);
				console.log(res.data[0]);
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
							<span className="text-color-9">{dictionary.phonetic}</span>
						</div>
						<img className="cursor-pointer" src={Play} alt="Play Button" />
					</div>
					<div>
						{/* {dictionary.meanings.map((meaning) => (
							<div key={meaning.partOfSpeech}>
								<h2>{meaning.partOfSpeech}</h2>
								{meaning.definitions.map((definition) => (
									<div key={definition.definition}>
										<p>{definition.definition}</p>
										<p>Example: {definition.example}</p>
									</div>
								))}
							</div>
						))} */}
					</div>
					<div>
						<span>Source</span>
						<a href={dictionary.sourceUrls}>{dictionary.sourceUrls}</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default useAxios;
