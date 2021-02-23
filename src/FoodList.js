import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import "./FoodList.css";
import foods from "./foodData";

function CustomCard(props) {
  return (
    <Card className="text-center" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.photoUrl} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Button variant="primary" onClick={() => props.onClick()}>
          View description
        </Button>
      </Card.Body>
    </Card>
  );
}

export default class FoodList extends React.Component {
  renderCard(index, food) {
    return (
      <CustomCard
        name={food.name}
        photoUrl={food.photoUrl}
        onClick={() => this.props.onClick(index)}
      />
    );
  }

  render() {
    return (
      <div className="FoodList">
        <div className="Title">
          <h1>{this.props.name}</h1>
          <h2>Available foods</h2>
        </div>
        <div className="flexbox-container">
          {foods.map((food, index) => (
            <div key={index}>{this.renderCard(index, food)}</div>
          ))}
        </div>
      </div>
    );
  }
}
