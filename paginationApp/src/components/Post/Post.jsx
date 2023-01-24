import Card from 'react-bootstrap/Card';
import Button from '../Button';

const Post = ({ post }) => {
  const { title, body } = post;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
