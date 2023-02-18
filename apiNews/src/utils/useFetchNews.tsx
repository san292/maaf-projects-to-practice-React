import { useState } from 'react';
import { NewsData } from '../interfaces/NewsTypes';

export async function useFetchNews(newsName: string): Promise<NewsData> {
	const [newsData, setNews] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	try {
		setLoading(true);
		const response = await fetch(
			`https://newsapi.org/v2/everything?q=${newsName}&from=2023-02-16&to=2023-02-17&sortBy=popularity&apiKey=${
				import.meta.env.VITE_API_KEY
			}`
		);
		const data = await response.json();
		setNews(data);
		setLoading(false);
	} catch (error) {
		setError('Erruer fetchData', error);
	}
	return {
		newsData,
		Loading,
		error,
	};
}
