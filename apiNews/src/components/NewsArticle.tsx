import { Button, Card, Col } from 'react-bootstrap'
import { Article } from '../interfaces/NewsTypes'
type ArticleProps = {
	article: Article
}

export const NewsArticle = ({ article }: ArticleProps) => {
	const {
		author,
		content,
		description,
		publishedAt,
		title,
		url,
		urlToImage,
	} = article

	return (
		<Col>
			<Card style={{ width: '25rem', margin: '0.3rem' }}>
				<Card.Img
					variant='top'
					src={urlToImage}
				/>
				<Card.Body>
					<Card.Title>Titre : {title}</Card.Title>
					<Card.Text>Description : {description}</Card.Text>
					<Card.Text>Content : {content}</Card.Text>
					<Card.Subtitle className='mb-2 text-muted'>
						author : {author}
					</Card.Subtitle>
					<Card.Text> Date de publication :{publishedAt}</Card.Text>
					<Card.Link href={url}>Card Link</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	)
}
