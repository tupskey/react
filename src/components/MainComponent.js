import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './Detail'; 
import { Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes';
//import './App.css';


class Main extends Component {

constructor(props) {
  super(props);

  this.state = {
    dishes: DISHES,
    selectedDish: null
  }
}

  onDishSelect(dishId){
      this.setState({selectedDish: dishId});
  }




  render() {
    return (
      <div>
        <Navbar dark color="primary">
         
            <div className="container">
              <NavbarBrand href="/">La Cuosine</NavbarBrand>
            </div>
        
        </Navbar>
        <Menu dishes={this.state.dishes}
         onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail />
      </div>

    );
  }
}

export default Main;
