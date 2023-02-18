import { NewsData } from '../interfaces/NewsTypes';

export async function fetchNews(newsName: string): Promise<NewsData> {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${newsName}&from=2023-02-16&to=2023-02-17&sortBy=popularity&apiKey=${
			import.meta.env.VITE_API_KEY
		}`
	);
	const data = await response.json();
	console.log('dataaaaaa', data);

	if (data.status !== 'ok') {
		throw new Error('dont find the data');
	}

	return data || [];
}
