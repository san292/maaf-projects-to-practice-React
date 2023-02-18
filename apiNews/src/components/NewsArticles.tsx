import React, { FC, useEffect, useState } from 'react';
import { fetchNews } from '../api/fetchNews';
import { NewsData } from '../interfaces/NewsTypes';
import { NewsArticle } from './NewsArticle';
import { Row, Stack } from 'react-bootstrap';
import NewsForm from './NewsForm';
import { v4 as uuidv4 } from 'uuid';

export const NewsArticles = () => {
	const [news, setNews] = useState<NewsData>();

	const fetchData = (inputValue: string) => {
		fetchNews(inputValue).then((articles) => setNews(articles));
	};

	return (
		<>
			<NewsForm fetchData={fetchData} />
			<Stack
				direction='horizontal'
				gap={2}>
				{news?.articles.map((article) => {
					return (
						<Row key={uuidv4()}>
							<NewsArticle article={article} />
						</Row>
					);
				})}
			</Stack>
		</>
	);
};
