import "./App.css";
// import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Home from "./views/Home/home";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log("esto se ve?");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Home /> */}
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/property/:id" exact component={Detail} */}
      {/* <Route path="/post" exact component={Form} /> */}
    </div>
  );
}

export default App;
