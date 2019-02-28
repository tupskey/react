import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Menu from "./MenuComponent";
//import {DISHES} from './shared/dishes';



class DishDetail extends Component{

  constructor(props){
    super(props);
       

       this.state ={
        
       }
    
    }


    renderComments(dish) {

      return(
                    (typeof(dish.comments)=='object')?
                    <div>
                    {
                      dish.comments.map((comm) => {
                        return (
                          <div key={dish.comm.id}><p>{dish.comm.author}</p></div>
                          );
                      })
                    }
                    </div>
                    :
                    null
     );              
    }


 renderDish(dish){
  console.log(JSON.stringify(dish));
  
      if(dish != null){
        return(
         
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.image} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>

          );
         }else{
        return(
          <div>hgrhjlllswwwweejsgk</div>
          );
      }
    }


  render(){


    return (
      <div>
          <div>
              {this.renderDish(this.props.selectedDish)}
              
          </div>
         
        </div>  
      )
  }

}

export default DishDetail;
