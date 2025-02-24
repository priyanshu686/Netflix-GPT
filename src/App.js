import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Browser from "./Components/Browser";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="" index element={<Login/>}/>
          <Route path="Browser" element={<Browser/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
