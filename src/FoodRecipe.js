import React from 'react';
import foods from './foodData';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
export default class FoodRecipe extends React.Component {
    render() {
        if (this.props.index !== -1) {
            return <div class="flexbox">
                <img width="500" height="500" object-fit="cover" src={foods[this.props.index].photoUrl} object-fit="cover" />
                <h1>{foods[this.props.index].name}</h1>
                <p>{foods[this.props.index].description}</p>
                <p>Price: {foods[this.props.index].price}</p>
                <Button variant="primary"
                    onClick={() => this.props.onClick()}>Back to List</Button>
            </div>
        }
        return <h1>Problem</h1>
    }
}