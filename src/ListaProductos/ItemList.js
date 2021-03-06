import React from "react";
import "./ItemList.css";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = (props) => {
  return (
    <div className="listStyle">
      <Container>
        <Row>
          {props.items.map(({ id, image, name, price }) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={id}>
                <Item
                  key={id}
                  id={id}
                  title={name}
                  pictureUrl={image}
                  itemPrice={price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
