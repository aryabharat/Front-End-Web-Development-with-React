import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComments({ comments }) {
    if (comments == null)
        return (<div></div>);
    const cmnt = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>{comment.author}</p>
                <p>{new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", days: "2-digit" }).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    });

    return (
        <>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnt}
            </ul>
        </>
    )
}
function RenderDish({ dish }) {
    if (dish == null)
        return (<div></div>);
    return (
        <>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        </>);
}

const DishDetail = (props) => {
    if (props.dish == null)
        return (<div>sasasa</div>);

    console.log("hello");

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;