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
            genre: '',
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
            genre: this.state.genre,
            moyenne: this.state.moyenne,
            comportement: this.state.comportement,
            travail: this.state.travail,
            participation: this.state.participation
        }
    }

    onChange(e){
        let self = this;
        console.log("[e.id]",e.id)
        console.log("e.value",e.value)
        this.setState({ [e.id]: e.value },()=>{
            console.log(self.state.genre)
            this.props.updateEleve(self.createUpdatedEleve());
        });
        
    }

    feedField(eleve){
        this.setState({id: this.props.eleve.id});
        this.setState({nom: this.props.eleve.nom});
        this.setState({prenom: this.props.eleve.prenom});
        this.setState({genre: this.props.eleve.genre});
        this.setState({moyenne: this.props.eleve.moyenne});
        this.setState({comportement: this.props.eleve.comportement});
        this.setState({travail: this.props.eleve.travail});
        this.setState({participation: this.props.eleve.participation});
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
                    <td><MyInput value={this.state.nom} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.prenom} type="text" placeholder="nom" className="small"/></td>
                    {/* <td><MyInput value={this.state.eleve.genre} type="text" placeholder="nom" className="small"/></td> */}
                    <td><Select  id="genre" options={this.props.genre} eleve={this.props.eleve} change={this.onChange} className="small"/></td>
                    <td><MyInput value={this.state.moyenne} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.comportement} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.travail} type="text" placeholder="nom" className="small"/></td>
                    <td><MyInput value={this.state.participation} type="text" placeholder="nom" className="small"/></td>           
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
        genre : state.pronote.genre
    }
}


export default connect(mapStateToProps, { deleteEleve, updateEleve })(Eleve);
