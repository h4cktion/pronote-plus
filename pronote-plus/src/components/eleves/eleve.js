import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { IoMdTrash,IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  deleteEleve, updateEleve } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import MyInput from '../communs/myInput';
import Select from '../communs/select';
import './eleves.scss';


class Eleve extends React.Component {

    constructor() {
        super();
 
        this.state = {
            id: '',
            nom: '',
            prenom: '',
            sexe: '',
            moyenne: '',
            comportement: '',
            travail: '',
            participation: '',
            
        }
        this.addEleve = this.addEleve.bind(this);
        this.delete = this.delete.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    createUpdatedEleve(){
        return {
            id: this.state.id,
            nom: this.state.nom,
            prenom: this.state.prenom,
            sexe: this.state.sexe,
            moyenne: this.state.moyenne,
            comportement: this.state.comportement,
            travail: this.state.travail,
            participation: this.state.participation
        }
    }

    onChange(e){
        let self = this;
        this.setState({ [e.id]: e.value },()=>{
                self.props.updateEleve(self.createUpdatedEleve());           
        });
        
    }

    feedField(eleve){
        this.setState({id: eleve.id});
        this.setState({nom: eleve.nom});
        this.setState({prenom: eleve.prenom});
        this.setState({sexe: eleve.sexe});
        this.setState({moyenne: eleve.moyenne});
        this.setState({comportement: eleve.comportement});
        this.setState({travail: eleve.travail});
        this.setState({participation: eleve.participation});
    }
   
    componentWillMount(){
        this.feedField(this.props.eleve);

    }

    componentWillReceiveProps(next){
        this.feedField(next.eleve);

    }

    addEleve(){

    }

    delete(e){
        this.props.deleteEleve(e.currentTarget.id);
    }


    render() {
        return  <tr>    
                    <td><MyInput id="nom" value={this.state.nom} change={this.onChange} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput id="prenom" value={this.state.prenom} change={this.onChange} type="text" placeholder="prenom" className="small"/></td>
                    <td><Select  id="sexe" options={this.props.sexe} value={this.state.sexe} change={this.onChange} className="small"/></td>
                    <td><MyInput id="moyenne" value={this.state.moyenne} type="text" placeholder="12" change={this.onChange} className="small"/></td>
                    <td><Select  id="comportement" options={this.props.comportement} value={this.state.comportement} change={this.onChange} className="small"/></td>
                    <td><Select  id="travail" options={this.props.travail} value={this.state.travail} change={this.onChange} className="small"/></td>
                    <td><Select  id="participation" options={this.props.participation} value={this.state.participation} change={this.onChange} className="small"/></td>        
                    <td><IoMdTrash className="red" id={this.state.id} onClick={this.delete} title="supprimer"/></td>           
                </tr>;

    }
}

Eleve.propTypes = {
    deleteEleve: propTypes.func.isRequired,
    updateEleve: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu,
        sexe : state.pronote.sexe,
        comportement : state.pronote.comportement,
        travail : state.pronote.travail,
        participation : state.pronote.participation
    }
}


export default connect(mapStateToProps, { deleteEleve, updateEleve })(Eleve);
