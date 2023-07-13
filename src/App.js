import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import EventDetailsPage from "./pages/EventDetailsPage/EventDetailsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventdetail/:id" element={<EventDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
