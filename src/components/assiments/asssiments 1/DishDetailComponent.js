import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './MenuComponent.css';

class DishDetailComponent extends Component {

    render() {

        const comments = this.props.dish.comments.map((comment) => {
            
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author} , {comment.date} </p>
                </div>
            );
        });


        if (this.props.dish !== null ) { 
            return (      
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card key={this.props.dish.id}>
                                { <CardImg top src={this.props.dish.image} alt={this.props.dish.label} /> }
                                <CardBody>
                                <CardTitle>{this.props.dish.label}</CardTitle>
                                { <CardText>{this.props.dish.description}</CardText> }
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                            <h4>Comments</h4>
                            {comments}
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div>

                </div>
            );
        }

    }
}

export default DishDetailComponent;