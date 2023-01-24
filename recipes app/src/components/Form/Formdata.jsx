import { Form, Col, Row, Stack } from 'react-bootstrap';

const FormData = ({ onChange, query, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className="row mr-2">
      {/* <input
          type="text"
          value={query}
          placeholder="Tapez votre recette"
          onChange={onChange}
        /> */}
      <Stack direction="horizontal" gap={4}>
        <Form.Control
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Tapez votre recette"
          style={{ width: '30rem' }}
          className="row mr-2"
        />

        <Form.Control type="submit" style={{ width: '6rem' }} />
      </Stack>
    </Form>
  );
};

export default FormData;
