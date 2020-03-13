import React from 'react';
import { IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  goTo } from '../../../actions/pronoteActions';
import { connect } from 'react-redux';
import _ from'lodash';
import * as d3 from 'd3';
import './inputFile.scss';



class InputFile extends React.Component {

    constructor() {
        super();
 
        this.state = {
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        
    }

    componentWillMount(){
         
       
    }


    componentWillReceiveProps(next){
      
    }

    handleSubmit(e){
        e.preventDefault();
        let self = this;
        var file = this.fileInput.current.files[0];
        var fr = new FileReader();
        fr.onload = function (event) {
            d3.csv(event.target.result, function(data){
                     console.log("data",data)
             });
        };
        fr.readAsDataURL(file);

    }

   

    render() {
        return   <form onSubmit={this.handleSubmit}>
                    <label>
                    Envoyer un fichier :
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <br />
                    <button type="submit">Envoyer</button>
                </form>;

    }
}

InputFile.propTypes = {
    goTo: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo })(InputFile);


