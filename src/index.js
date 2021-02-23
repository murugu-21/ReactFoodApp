import React from 'react';
import ReactDOM from 'react-dom';
import FoodList from './FoodList';
import FoodRecipe from './FoodRecipe'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEmptyState: true, isShowRecipeState: false, index: -1
        }
    }

    handleClick(i) {
        this.setState({
            isEmptyState: false, isShowRecipeState: true, index: i,
        });
    }

    handleClickBack() {
        this.setState({
            isEmptyState: true, isShowRecipeState: false, index: -1,
        });
    }

    render() {
        if (this.state.isShowRecipeState) { return <div><FoodRecipe index={this.state.index} onClick={() => this.handleClickBack()} /></div> }
        else {
            return (
                <FoodList name="Lakshmi-bhavan" onClick={(i) => this.handleClick(i)} />
            )
        }
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);