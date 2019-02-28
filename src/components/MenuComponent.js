import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from "./Detail";


class Menu extends Component {

		constructor(props){
			super(props);

			this.state = {
            selectedDish: null
        }
   console.log('constructor is invoked');     
	} 

  componentDIdMount(){
  console.log('Menu componentDIdMount is invoked');

  }


 


     onDishSelect(dish){
      this.setState({selectedDish: dish});
  }


		render() {
         //console.log(' render method is invoked');
         const menu = this.props.dishes.map((dish) => {
            return (
                  <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={() => this.onDishSelect(dish)}>             
                        <CardImg width="100%" src={dish.image} alt={dish.image} />
                     <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                   </Card >
                  </div>
               );
         });
             

			return(
               <div className="container">
                  <div className="row">
                  {menu}
                  </div>
                  <div className="row">                  
                  <div className="col-12 col-md-5"> 
                      <DishDetail selectedDish={this.state.selectedDish} />
                  </div>
                  <div className="col-12 col-md-5">
                    
                  </div>
                  </div>
                </div>
            );
		}
}

export default Menu;