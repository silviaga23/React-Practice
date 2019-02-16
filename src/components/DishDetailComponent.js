import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './MenuComponent.css';

function RenderComments ({comments}) {

    return comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p> -- {comment.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
            </div>
        );
    });
}

function RenderDish ({dish}){
    return(
        <Card key={dish.id}>
            { <CardImg top src={dish.image} alt={dish.label} /> }
            <CardBody>
            <CardTitle>{dish.label}</CardTitle>
            { <CardText>{dish.description}</CardText> }
            </CardBody>
        </Card>
    );
}

const DishDetail = (props) => {
    if (props.dish !== null ) { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments}/> 
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div>

            </div>
        );
    }
}

export default DishDetail;
