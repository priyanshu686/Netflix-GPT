import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Browser from "./Components/Browser";
import { Provider } from "react-redux";
import CreateStore from "./Utils/CreateStore";

function App() {
  return (
    <Provider store={CreateStore}>
    <div >
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="" index element={<Login/>}/>
          <Route path="Browser" element={<Browser/>}/>
        </Route>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
