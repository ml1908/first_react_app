import logo from './logo.svg';
import './App.css';
import {List} from "./List";

function App() {
  return (
    <div className="App">
     <h1>This is my App</h1>
      <List key={"my-key"} title={"Servas"} subtitle={"Du"} >
        <h3>Ein Kind</h3>    
        <h3>Noch ein Kind</h3> 
        <h3>dsfg</h3>  
      </List>
    </div>
  );
}

export default App;
