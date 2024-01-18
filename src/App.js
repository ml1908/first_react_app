import logo from './logo.svg';
import './App.css';
import {List} from "./List";
import {NumberInput} from "./NumberInput";

function App() {
  return (
    <div className="App">
     <h1>This is my App</h1>
        <NumberInput/>
      <List key={"my-key"} title={"My List"} >
        <h3>Ein Kind</h3>    
        <h3>Noch ein Kind</h3>
      </List>
    </div>
  );
}

export default App;
