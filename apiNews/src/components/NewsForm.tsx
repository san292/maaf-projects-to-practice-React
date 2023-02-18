import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { fetchDataType } from '../interfaces/NewsTypes';

export default function NewsForm({ fetchData }: fetchDataType) {
	const [searchNews, setSearchnews] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchnews(e.target.value);
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!searchNews) return;

		fetchData(searchNews);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3'>
					<Form.Control
						type='text'
						placeholder='Tapez votre News'
						value={searchNews}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button
					variant='primary'
					type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
}
