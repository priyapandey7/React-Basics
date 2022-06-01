import logo from './logo.svg';
import './App.css';
//functional component import
import Greet from './components/Greet';
//class component import
import Welcome from './components/Welcome'
//
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet  />
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
