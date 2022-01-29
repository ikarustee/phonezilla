import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { Button } from "antd";

const Posts = () => {
    const {post} = useContext(PostContext)
    // console.log(post)
    
  return (
    <div>
      {post.map((p, index) => {
        let time = new Date(p.sys.createdAt);
        let month = time.toLocaleString("en-EN", { month: "long" });
        let day = time.getDate();
        let year = time.getFullYear();
        // console.log(day);
        // console.log(p.metadata.tags);
        // console.log(`Hello I am a ${p.fields.postImage.description}`)
        // console.log(p.sys.id)
        return (
          <article key={p.sys.id} id={p.sys.id}>
            <h4>{p.fields.teaser}</h4>
            <h1><Link to={`/posts/${p.fields.title}`}>{p.fields.title}</Link></h1>
            <p>{month} {day}, {year}</p>
            <span>
            <img
              src={p.fields.postImage.fields.file.url}
              alt="here"
              width="400"
            />
            <a className="imagecredits" href={p.fields.postImage.fields.description} target="_blank" rel="noreferrer">©{p.fields.postImage.fields.title}</a>
            </span>
            {documentToReactComponents(p.fields.postTextcontent, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return <p>{children}</p>;
                },
                [BLOCKS.HEADING_3]: (node, children) => {
                  return <h3>{children}</h3>;
                },
                [BLOCKS.UL_LIST]: (node, children) => {
                  return <ul>{children}</ul>;
                },
                [INLINES.HYPERLINK]: (node, children) => {
                  // console.log(node);
                  return (
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href={node.data.uri}
                    >
                      {children}
                    </a>
                  );
                }
              },
              renderMark: {
                [MARKS.CODE]: (text) => <code className="red">{text}</code>
              },
              renderText: (text) => {
                return text
                  .split("\n")
                  .map((i) => [i, <br />])
                  .flat();
              }
            })}
            <p>
              <em>
                {p.metadata.tags.map((t, index) => (
                  <span key={index} className="tags">{t.sys.id}</span>
                ))}
              </em>
            </p>
            <Button type="default" style={{ marginLeft: 8 }} danger="true">Primary Button</Button>
          </article>
        );
      })}
  </div>
  );
};

export default Posts;
