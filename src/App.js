import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Paint from "./components/painter/Paint";
import { AuthProvider } from "./components/Context/AuthContext";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import MyPage from "./components/MyPage/MyPage";

import Board from "./components/Board/Board";

import MuseumForm from "./components/museum/MuseumForm";
import MuseumMain from "./components/museum/MuseumMain";
import MuseumDatail from "./components/museum/MuseumDetail";
import MuseumUpdate from "./components/museum/MuseumUpdate";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/paint" element={<Paint />} />
            <Route path="/members/signup" element={<Signup />} />
            <Route path="/mypage/*" element={<MyPage />} />

            <Route path="/board" element={<Board />} />

            <Route path="/museum" element={<MuseumMain />} />
            <Route path="/apiMuseum" element={<MuseumForm />} />
            <Route path="/museum/:id" element={<MuseumDatail />} />
            <Route path="/museum/:id/edit" element={<MuseumUpdate />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
