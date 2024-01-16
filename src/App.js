import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Movies} />
        <Route path="/movies" Component={Movies} />
        <Route path="/movies/:id" Component={Movie} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
