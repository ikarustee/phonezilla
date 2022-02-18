import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "antd";
import { PostContext } from '../Contexts/PostContext';
import Hero from "./Hero"
import CardPost from "./CardPost"
// import Hero from "../nordwood-themes-q8U1YgBaRQk-unsplash_cropped.jpeg"


const Home = () => {
  const {post} = useContext(PostContext)
  // const {hero} = useContext(HeroContext)
  // const [spliceCount, setSpliceCount] = useState([0,3])
  return (
      <>
      <Hero />
      <main>
      <h1 className="divider">Welcome to phoneZILLA</h1>
        <Row gutter={[16, 16]}>
          {post.map((p, index) => {
            return (
              <CardPost p={p} key={index}/>
            );
          })
          .splice(0,3)
          }
        </Row>
      </main>
      </>
  );
};

export default Home;
