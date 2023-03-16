import './App.css';
import FlightSearch from './FlightSearch';
import logo from './logo.png'


function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Jak's fitness app logo" height={100} />
      <FlightSearch/>
    </div>
  );
}

export default App;
