import { render } from 'react-dom';
import { Counter } from './components/Counter';
import './main.scss';

render(
	<div>
		<Counter />
	</div>,
	document.getElementById('root')
);
