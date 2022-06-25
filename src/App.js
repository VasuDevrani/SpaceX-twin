import "./App.css";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Header from "./component/Header";
import { useStateValue } from "./component/StateProvider";
import Login from "./component/Login";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Content />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// {!user ? (
//   <Login/>
// ) : (
// <>
// <Header/>
//  <Content/>
//  <Footer/>
// </>
// )}
