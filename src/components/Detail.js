import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb, Button,Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { LocalForm, Errors, Control} from 'react-redux-form';
import { Loading} from './LoadingComponent';


  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => (val) && (val.length >= len);

  function RenderDish({dish}){
  
        return(
         <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.image} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          </div>
         );
    }

    function RenderComments({comments, addComment, dishId}) {
      console.log(comments, JSON.stringify('comments'));
      if(comments != null) 
        return(
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
              <ul className="list-unstyled">
              {comments.map((comment) => {
              return(
                  <li key={comment.id}>
                  <p>---{comment.comment}-----</p>
                  <p>{comment.author} ,{new Intl.DateTimeFormat('en-Us',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                  </li>

                );
             })}
            </ul>
            <CommentForm addComment={addComment} dishId={dishId}/>
          </div>
          );
        else
          return(
            <div>kmll</div> 
            );
    }

    class CommentForm extends Component {

    constructor(props){
    super(props);


    
    this.state = {
      isNavOpen: false,
      isModalOpen: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.toggleModal  = this.toggleModal.bind(this);

    }

  toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
  }

    handleSubmit (values){
      this.toggleModal();
      this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    
  render(){
    return(
      <div>
      <Button outline-danger onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comments</Button>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
      <ModalBody>
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group" >
          <Col >
              <Label htmlFor="rating"> Rating</Label>
                <Control.select model=".rating" id="rating" name="rating"           
                className="form-control" >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="author">Your Name</Label>
                <Control.text model=".author" id="author" name="author" className="form-control"
                validators={{
                  minLength: minLength(3),
                  maxLength: maxLength(15)
                }} />
                <Errors 
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: 'Must be greater than 3 characters',
                    maxLength: 'Must be less than 15 characters'
                  }} />
              </Col>
            </Row>
            <Row className="form-group">
            <Col>
              <Label htmlFor="comment">Comment</Label>
              <Control.textarea model=".comment" id="comment" rows="12" className="form-control" />
            </Col>
            </Row>
            <Row className="form-group" >
              <Col md={{size:10}}>
              <Button type="submit" color="primary">Submit</Button>
              </Col>
            </Row>
      </LocalForm>
      </ModalBody>
      </Modal>
      </div>
      );
  }
}





     const DishDetail = (props) => {
      if (props.isLoading) {
        return(
            <div className="container">
              <div className="row">
                <Loading />
              </div>
            </div>
          );
      }
      else if (props.errMess) {
        return (
            <div className="container"> 
              <div className="row">
                <h4>{props.errMess}</h4>
              </div>
            </div>
          );
      }
      else if(props.dish != null)
        return(
          <div className="container">
            <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem> 
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 ">
                      <h3>{props.dish.name}</h3>
                      <hr />
                    </div>
                  </div>
          <div className="row">
          <RenderDish dish={props.dish}/> 
          <RenderComments comments={props.comments}
          addComment={props.addComment}
          dishId={props.dish.id}/>
          
          </div>
          </div>
          );
      else
        return(
          <div>ggggg</div>
          );
    }



export default DishDetail;
