import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle> {item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(porps) {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={porps.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={porps.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={porps.leader} />
                </div>
            </div>
        </div>
    )
}

export default Home;