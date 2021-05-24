import {BrowserRouter,Route} from "react-router-dom"
import Home from "./components/Home"
import Universe from "./components/Universe"


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/universe" exact component={Universe}></Route>
    </BrowserRouter>
  );
}

export default App;
