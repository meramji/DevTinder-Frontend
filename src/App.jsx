import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appstore from "./Utils/appstore";
import Feed from "./components/Feed";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Provider store={appstore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body></Body>}>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/feed" element={<Feed></Feed>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
            </Route>
            <Route path="/error" element={<Error></Error>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
