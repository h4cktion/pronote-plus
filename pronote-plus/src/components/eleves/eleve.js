import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { IoMdTrash,IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  deleteEleve } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import MyInput from '../communs/myInput';
import Select from '../communs/select';
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
        this.props.deleteEleve(e.currentTarget.id);
    }


    render() {
        return  <tr>    
                    <td><MyInput value={this.state.eleve.nom} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.prenom} type="text" placeholder="nom" className="small"/></td>
                    {/* <td><MyInput value={this.state.eleve.genre} type="text" placeholder="nom" className="small"/></td> */}
                    <td><Select   className="small"/></td>
                    <td><MyInput value={this.state.eleve.moyenne} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.comportement} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.travail} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.eleve.participation} type="text" placeholder="nom" className="small"/></td>           
                    <td><IoMdTrash className="red" id={this.state.eleve.id} onClick={this.delete} title="supprimer"/></td>           
                </tr>;

    }
}

Eleve.propTypes = {
    deleteEleve: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { deleteEleve })(Eleve);
