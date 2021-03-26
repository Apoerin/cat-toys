import React from "react";
import { Image, ListGroupItem } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export default function CartProduct({ product, handleRemoveFromCart }) {
  const { id, title, image } = product;

  return (
    <ListGroupItem className="custom-list-group-item">
      <Image src={image} alt={title} style={{ width: "100px", border: "1px solid rgba(0,0,0,.125)" }} className="custom-image"/>
      <h5>{title}</h5>
      <FaTrash
          className="remove-icon"
          onClick={() => handleRemoveFromCart(id)}
        />
    </ListGroupItem>
  );
}