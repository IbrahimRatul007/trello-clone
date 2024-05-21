import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
