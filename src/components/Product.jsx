import React from "react";

import { Card } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

export default function Product({ product, handleAddProductToCart }) {
  const { id, image, title, description } = product;

  return (
    <Card key={id} className="custom-card">
      <Card.Img src={image} alt={title} className="item-img" />
      <Card.Body style={{ border: "none" }} className="custom-card-body">
        <Card.Title style={{ border: "none" }} className="custom-card-title">
          {title}
        </Card.Title>
        <Card.Text style={{ border: "none" }} className="custom-card-text">
          {description}
        </Card.Text>
        <FaCartPlus
          className="add-icon"
          onClick={() => handleAddProductToCart(id)}
        />
      </Card.Body>
    </Card>
  );
}