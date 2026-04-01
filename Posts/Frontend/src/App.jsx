import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path = '/' element={<h1>Home</h1>} />
          {/* <Route path = '/about' element={<h1>About Us</h1>} /> */}
          <Route path = '/post' element={<CreatePost />} />
          <Route path = '/feed' element={<Feed />} />
      </Routes>
    </Router>
);
}
