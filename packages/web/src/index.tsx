import debug from 'debug';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import {Layout} from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const d = debug('hh.web');

d('Start Web');

root.render(
	<StrictMode>
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	</StrictMode>,
);
