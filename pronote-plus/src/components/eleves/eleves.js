import React from 'react';
import { Table,Row, Col, Dropdown } from 'react-bootstrap';
import { IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  goTo } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import Eleve from './eleve';
import _ from'lodash';
import './eleves.scss';



class Eleves extends React.Component {

    constructor() {
        super();
 
        this.state = {
            eleves:[],
           
        }
        this.navigateTo = this.navigateTo.bind(this);
        this.addEleve = this.addEleve.bind(this);
        this.delete = this.delete.bind(this);
    }

    navigateTo(e){
        this.props.goTo(e.currentTarget.id)
    }

   
    initEleve(){
        let elevesTest = [
            {nom: 'ANDERSON', prenom : 'Annetya',genre: true, moyenne: 15, comportement: 'calme', travail : 'serieux', participation: 'effort à faire'},
            {nom: 'BERTOLAMI', prenom : 'Nathan',genre: false, moyenne: 13, comportement: 'calme', travail : 'serieux', participation: 'pertinente'},
            {nom: 'BUQUET', prenom : 'Loukas',genre: false, moyenne: 15, comportement: 'bavardage', travail : 'serieux', participation: 'aucune'},
        ]
        this.setState({eleves : elevesTest});
    }

    componentWillMount(){
        this.initEleve();
    }

    addEleve(){
        let  newEleve = {
            nom: '',
            prenom: '',
            genre : '',
            moyenne : 0,
            comportement : '',
            travail : '',
            participation : ''
        };
        let eleves = _.cloneDeep(this.state.eleves);
        eleves.push(newEleve);
        this.setState({eleves})
    }

    delete(e){
        let eleves = _.cloneDeep(this.state.eleves);
        
        let newEleves = eleves.filter(eleve =>  {
          console.log("in filter : ", eleve.nom , "  ",e, " = ",eleve.nom != e)
            return eleve.nom != e
        })
        console.log("new : ", newEleves)
        this.setState({eleves : newEleves});
    }

    render() {
        return <div className="justify-content-md-center eleves">
           <Row>
               <Col md={{span: 4, offset : 8}}>
                   <button>Importer une liste d'élèves</button>
                    <button onClick={this.addEleve}>Ajouter un élève</button>
               </Col>
           </Row>
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
                            <Eleve key={i} eleve={e} delete={this.delete} />
                        )
                }
                </tbody>
                   
                </Table>
            </Col>
            
           
                       
        </div>;

    }
}

Eleves.propTypes = {
    goTo: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo })(Eleves);
