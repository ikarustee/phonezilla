import "./App.css";
import "../src/fonts/fonts.css"
import { useState, useEffect, useContext } from "react";
import Posts from "./Components/Posts"
import { Routes, Route } from 'react-router-dom';
import { PostContext } from "./Contexts/PostContext";
import {Row} from "antd"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SinglePost from "./Components/SinglePost"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";



/*
        const date = new Date(p.sys.createdAt)
        date.toISOString().substring(0, 10);
*/

// let time = new Date("2010-01-13T18:31:16Z");
// let month = time.toLocaleString("en-EN", { month: "long" });
// console.log(month)

export default function App() {
  const {post} = useContext(PostContext)
  // console.log(post)
  // const [posts, setPosts] = useState([]);

  // const {post} = useContext(PostContext)

  // useEffect(() => {
  //   getArticles().then((res) => setPosts(res.items));
  // }, []);

  // useEffect(() => {
  //   post.length && console.log(post);
  // }, [post]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/posts/" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<SinglePost key={post.map((p) => p.id)}/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    <Footer />
    </div>
  );
}
