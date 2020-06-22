import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderComments() {
        const comment = this.props.dish.comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author}</p>
                    <p>{comment.date}</p>
                </li>
            )
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comment}
                </ul>
            </div>
        )
    }
    renderDish() {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>
                            {this.props.dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>);
    }

    render() {
        if (this.props.dish === null)
            return (<div></div>)

        const dishItem = this.renderDish();
        const commentItem = this.renderComments();

        return (
            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
        );
    }
}

export default DishDetail;