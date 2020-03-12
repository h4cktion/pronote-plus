import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { IoMdTrash,IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  goTo } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import MyInput from '../communs/myInput';
import './eleves.scss';


class Eleve extends React.Component {

    constructor() {
        super();
 
        this.state = {
            eleve: null,
            
        }
        this.addEleve = this.addEleve.bind(this);
        this.delete = this.delete.bind(this);
    }

    navigateTo(e){
        this.props.goTo(e.currentTarget.id)
    }

    feedField(eleve){
        let self =this;
        this.setState({eleve});
    }
   
    componentWillMount(){
        this.feedField(this.props.eleve);

    }

    componentWillReceiveProps(nextProps){
        this.feedField(nextProps.eleve);

    }

    addEleve(){

    }

    delete(e){
        this.props.delete(e.currentTarget.id);
    }


    render() {
        return  <tr>    
                    <td><MyInput value={this.state.eleve.nom} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.prenom} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.genre} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.moyenne} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.comportement} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.travail} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.participation} type="text" placeholder="nom" className="small"/></td>           
                    <td><IoMdTrash className="red" id={this.state.eleve.id} onClick={this.delete} title="supprimer"/></td>           
                </tr>;

    }
}

Eleve.propTypes = {
    goTo: propTypes.func.isRequired,
    delete: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo })(Eleve);
