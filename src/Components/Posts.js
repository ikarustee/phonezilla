import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "antd";
import { PostContext } from "../Contexts/PostContext";
import CardPost from "./CardPost"

const Posts = () => {
    const {post} = useContext(PostContext)
    // console.log(post)
    
  return (
    <main>
    <h1>Posts</h1>
      <Row gutter={[16, 16]}>
        {post.map((p, index) => {
          return (
            <CardPost p={p} key={index}/>
          );
        })
        }
    </Row>
  </main>
  );
};

export default Posts;

/* Initial code backup 

  <article key={p.id} id={p.id}>
    <h4>{p.teaser}</h4>
    <h2><Link to={`/posts/${p.title.toLowerCase().split(/[ ']/).join('-')}`}>{p.title}</Link></h2>
    <p>{month} {day}, {year}</p>
    <span>
      <img
        src={p.img}
        alt="here"
        width="400"
        className="postimg"
      />
      <a className="imagecredits" href={p.imagecreditURL} target="_blank" rel="noreferrer">©{p.imagecredit}</a>
    </span>
    {documentToReactComponents(p.text)}
    <p>
      <em>
        {p.metadata.tags.map((t, index) => (
          <span key={index} className="tags">{t.sys.id}</span>
        ))}
      </em>
    </p>
    <Button type="default" style={{ marginLeft: 8 }} danger="true">Primary Button</Button>
  </article>


*/
