import './App.css';
import FlightSearch from './FlightSearch';
import logo from './logo.png'


function App() {
  return (
    <div className="App">
      <div className="logo">
      <img src={logo} alt="Jak's fitness app logo" height={100} /></div>
      <FlightSearch/>
    </div>
  );
}

export default App;
