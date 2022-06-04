import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDishDetail: this.props.dsdetail
        };


    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(coments){
        if (coments == null) {
            return (<div></div>)
        }
        const comments = coments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))
                    }
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        )
    }


    render(){
        const dish = this.props.dish

        console.log(dish);
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {dishItem}
                {dishComments}
            </div>
        )
    }

}
export default DishDetail;