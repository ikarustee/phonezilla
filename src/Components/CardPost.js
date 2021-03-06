import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from "antd";


const CardPost = ({p}) => {
  const excerpt = Object.values(p.text.content[0].content[0].value)

  return (
      <Col key={p.id} span={8} xs={12} sm={12} md={12} lg={8} xl={8}>
      <Link to={`/posts/${p.title.toLowerCase().split(/[ ']/).join('-')}`} className="card__link">
        <Card 
        className="card"
        key={p.id} 
        hoverable
        cover={<img src={p.img} alt="here" width="400" className="card__cover__img"/>}
        >
        <span className="card__body teaser">{p.teaser}</span>
        <span className="card__body title">{p.title}</span>
        <span className="card__body excerpt">{excerpt.join('').split(' ').slice(0,25).join(' ')} ...</span>
        <Button className="card__body button" type="primary">Read more</Button>
        </Card>
      </Link>
    </Col>
  );
};

export default CardPost;
