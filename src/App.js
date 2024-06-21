import ParentComponent from "./componenets/ParentComponent";
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <p>
          Amalan Kamal
          <ParentComponent name="Amalankamal" age={23} ismarried={true}/>
          <ParentComponent name="Vaishnavi" age={19} ismarried={true}/>
          <ParentComponent name="Aarathya" age={1} ismarried={false}/>
        </p>
      </header>
    </div>
  );
}

export default App;
