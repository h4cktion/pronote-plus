import React from 'react';
import { Table,Row, Col, Dropdown } from 'react-bootstrap';
import { IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import { loadEleves, addEleve } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import InputFile from '../communs/inputFile/inputFile';
import Eleve from './eleve';
import _ from'lodash';
import './eleves.scss';
import { v1 as uuidv1 } from 'uuid';



class Eleves extends React.Component {

    constructor() {
        super();
 
        this.state = {
            eleves: null,
            showImportFile : false,
        }

        this.navigateTo = this.navigateTo.bind(this);
        this.addEleve = this.addEleve.bind(this);
        this.showInputFile = this.showInputFile.bind(this);
    }

    navigateTo(e){
        this.props.goTo(e.currentTarget.id)
    }

   componentWillMount(){
       let self = this;
       if(this.state.eleves === null){
           this.setState({eleves : this.props.eleves});
       }
   }

    componentWillReceiveProps(nextProps){
        this.setState({eleves : nextProps.eleves});
    }

    addEleve(){
        let  newEleve = {
            id : uuidv1(),
            nom: '',
            prenom: '',
            genre : '',
            moyenne : 0,
            comportement : '',
            travail : '',
            participation : ''
        };
        this.props.addEleve(newEleve);
    }
    
    showInputFile(){
        this.setState({showImportFile : !this.state.showImportFile});
    }

    render() {
        return <div className="justify-content-md-center eleves">
           <Row>
               <Col md={{span: 4, offset : 8}}>
                    { !this.state.showImportFile && 
                        <div>
                            <button onClick={this.showInputFile}>Importer une liste d'élèves</button>
                            <button onClick={this.addEleve}>Ajouter un élève</button>    
                        </div>
                    }
                    { this.state.showImportFile && 
                        <div>
                            <button onClick={this.showInputFile}>Retour</button>
                        </div>
                    }
            
               </Col>
           </Row>
           { !this.state.showImportFile &&
            <Col md={{span:10 , offset : 1 }}>
                <Table responsive>
                <thead>
                    <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Genre</th>
                    <th>Moyenne</th>
                    <th>Comportement</th>
                    <th>Travail</th>
                    <th>Participation</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.eleves.map( (e,i) => 
                            <Eleve key={i} eleve={e} />
                        )
                }
                </tbody>
                   
                </Table>
            </Col>
           }
            
            { this.state.showImportFile &&
                <InputFile />
            }
            
           
                       
        </div>;

    }
}

Eleves.propTypes = {
    loadEleves : propTypes.func.isRequired,
    addEleve : propTypes.func.isRequired,
    
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu,
        eleves : state.pronote.eleves
    }
}


export default connect(mapStateToProps, {  loadEleves, addEleve })(Eleves);
