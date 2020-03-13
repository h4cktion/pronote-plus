import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { IoIosStats,IoMdSettings,IoMdHelpCircleOutline, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import './dashboard.scss';
import propTypes from 'prop-types';
import {  goTo } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import Eleves from '../eleves/eleves';



class DashBoard extends React.Component {

    constructor() {
        super();
 
        this.state = {
            dashActive: true,
            elevesActive: false,
            appreciationActive: false,
            aideActive: false
        }
        this.navigateTo = this.navigateTo.bind(this);
        this.changeMenu = this.changeMenu.bind(this);
    }

    navigateTo(e){
        this.props.goTo(e.currentTarget.id)
    }

    changeMenu(id){
        this.setState({ elevesActive: false });
        this.setState({ dashActive: false });
        this.setState({ appreciationActive: false });
        this.setState({ aideActive: false });
        
        switch (id) {
            case "DASHBOARD":
                this.setState({ dashActive: true});
                break;
            case "ELEVES":
                this.setState({ elevesActive: true});
                break;
            case "APPRECIATION":
                this.setState({ appreciationActive: true });
                break;
            case "AIDE":
                this.setState({ aideActive: true });
                break;
        
            default:
                break;
        }
    }


    componentWillReceiveProps(nextProps){
        if(this.props.menu != nextProps.menu){
            this.changeMenu(nextProps.menu);
        }
    }




    render() {
        return <div className="justify-content-md-center">
            <Row>
                <Col md={12} className="header"> 
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" >
                            <span className="icon" ><IoMdSettings /></span>  PRONOTE++
                            </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#" onClick={this.logOff}><IoIosPower /> En savoir plus </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Col>

            </Row>
            <Row>
                <Col md={2} className="menu">
                    <a href="#" onClick={this.navigateTo} id="DASHBOARD" > 
                        <div style={{ width: '105%' }} className={this.state.dashActive ? "selected" : ""}> 
                            <IoIosSpeedometer /> Tableau de bord
                        </div> 
                    </a>
                    <a href="#" onClick={this.navigateTo} id="ELEVES" > 
                        <div style={{ width: '105%' }} className={this.state.elevesActive ? "selected" : ""}> 
                            <IoIosPeople /> Elèves
                        </div> 
                    </a>
                    <a href="#" onClick={this.navigateTo} id="APPRECIATION" > 
                        <div style={{ width: '105%' }} className={this.state.appreciationActive ? "selected" : ""}> 
                            <IoIosStats /> Appréciations
                        </div> 
                    </a>
                    <a href="#" onClick={this.navigateTo} id="AIDE" > 
                        <div style={{ width: '105%' }} className={this.state.aideActive ? "selected" : ""}> 
                        <IoMdHelpCircleOutline /> Aide
                        </div> 
                    </a>
                    
                </Col>
                <Col md={10}>
                    {this.state.dashActive &&
                        <h2>DASHBOARD</h2>
                    }
                    {this.state.elevesActive &&
                        <Eleves />
                    }
                    {this.state.appreciationActive &&
                        <h2>APPRECIATIONS</h2>
                    }
                    {this.state.aideActive &&
                       <h2>AIDE</h2>
                    }
                    
                    
                </Col>
            </Row>

                       
        </div>;

    }
}

DashBoard.propTypes = {
    goTo: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo })(DashBoard);
