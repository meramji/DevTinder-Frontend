import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appstore from "./Utils/appstore";

function App() {

  return (
    <>
    <Provider store={appstore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
