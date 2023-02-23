import ListTask from "./components/ListTask.js";
import EnterTasks from "./components/EnterTask.js";
import "./App.css"
import Footer from "./components/Footer.js";

function App(children) {
  return (
    <div class = "App">
      <div class = "main">
      <EnterTasks></EnterTasks>
      <ListTask></ListTask>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
