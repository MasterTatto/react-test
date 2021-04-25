import './App.css';
import Accordion from './components/Accardion';
import Rating from './components/Rating';
import Title from './components/Title';
<input className='txt' type='text' />;
const App = () => {
	return (
		<div className='App'>
			{/* <Title title={'My friend'} />
			<Title title={'Users'} /> */}

			<Accordion titleValue={'Menu'} collapsed={true} />
			<Accordion titleValue={'User'} collapsed={false} />
			{/* <Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} /> */}
		</div>
	);
};

export default App;
