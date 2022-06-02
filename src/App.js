import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Search, Chat, Profile, Create, Register, Login, LoggedOut } from "./pages";
import { Footer } from "./components";



function App() {
  return (
    <div className="wrapper">
      <Routes >
          <Route path="/" element={<Footer />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="loggedout" element={<LoggedOut />} />
          
          </Route>
      </Routes>
    </div>
  );
}

export default App;
