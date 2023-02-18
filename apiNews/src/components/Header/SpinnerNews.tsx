import Spinner from 'react-bootstrap/Spinner';

function SpinnerNews() {
	return (
		<Spinner
			animation='border'
			role='status'>
			<span className='visually-hidden'>Loading...</span>
		</Spinner>
	);
}

export default SpinnerNews;
