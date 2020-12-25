import './App.css'
import Color from './components/Color'
import ButtonExample from './components/ButtonExample'
import JumbotronExample from './components/JumbotronExample'
function App() {
	return (
		<div className='App'>
			<JumbotronExample />
			<div className='container'>
				<ButtonExample />
				<Color />
			</div>
		</div>
	)
}

export default App
