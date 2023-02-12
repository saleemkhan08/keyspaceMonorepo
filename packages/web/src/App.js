import { testFunction } from '@keyspace/common/main';
import './App.css';

function App() {
	return <div className='App'>Test {testFunction()}</div>;
}

export default App;
