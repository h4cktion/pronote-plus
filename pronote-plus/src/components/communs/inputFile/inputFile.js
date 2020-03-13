import React from 'react';
import { IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  goTo,loadEleves } from '../../../actions/pronoteActions';
import { connect } from 'react-redux';
import _ from'lodash';
import * as d3 from 'd3';
import { v1 as uuidv1 } from 'uuid';
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
        let eleves = [];
        var file = this.fileInput.current.files[0];
        var fr = new FileReader();
        fr.onload = function (event) {
            d3.csv(event.target.result, function(data){
                data.id = uuidv1();
                eleves.push(data)
             });
        };
        fr.readAsDataURL(file);
        this.props.loadEleves(eleves);
        setTimeout(()=>{
            self.props.showInputFile();
        },1000)
        
    }

   

    render() {
        return   <form onSubmit={this.handleSubmit}>
                    <input type="file" ref={this.fileInput} onChange={this.handleSubmit} /> 
                </form>;

    }
}

InputFile.propTypes = {
    loadEleves: propTypes.func.isRequired,
    goTo: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo, loadEleves })(InputFile);


