import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './home.scss';


class Home extends React.Component {

    constructor() {
        super();

        this.start = this.start.bind(this);

    }

    start(e){
        e.preventDefault();
        this.props.history.push("/dashboard");

    }


    render() {
        return <div className="home">
            <Row>
                <Col md={{ span: 2, offset: 1 }}>
                    <img className="logo" src="https://www.index-education.com/contenu/img/commun/logo-pronote.png"/>
                </Col>
                <Col md={{ span: 2, offset: 6 }} style={{paddingTop : '2%'}}>
                    <a href="#" onClick={this.start}>Commencer</a>
                </Col>
                
            </Row>
            
            <h1>SIMPLIFIER VOUS LA VIE AVEC PRONOTE++.</h1>
        </div>;

    }
}



export default Home;
