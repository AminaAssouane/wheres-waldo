import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header className="header" />
        <main className="main">
          <Outlet />
        </main>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;

{
  /* characters
---------
id
name
x_min
x_max
y_min
y_max

scores
------
id
username
time
created_at*/
}
