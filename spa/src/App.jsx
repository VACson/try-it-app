import React from 'react';

import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Search,
  Chat,
  Profile,
  Create,
  Register,
  RegisterUsername,
  Login,
  LoggedOut,
} from './components/pages';
import { Footer } from './components';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route>
          <Route path="loggedout" element={<LoggedOut />} />
          <Route path="register" element={<Register />} />
          <Route path="register/username" element={<RegisterUsername />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
