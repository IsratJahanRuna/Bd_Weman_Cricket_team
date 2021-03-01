import logo from './logo.svg';
import './App.css';
import Team from './components/Team/Team';
import Player from './components/Team/Player/Player';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1 className='heading'><u>Bangladesh Female Cricket Team</u></h1>
     <Team></Team>
    </div>
  );
}

export default App;
