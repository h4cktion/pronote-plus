import React from 'react';
import { IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  goTo } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import _ from'lodash';
import './myInput.scss';



class MyInput extends React.Component {

    constructor() {
        super();
 
        this.state = {
           
        }
    }


    onChange(e){
        e.preventDefault();
    }
  

    componentWillMount(){
        console.log("myInput", this.props)
    }



    render() {
        return <input 
                    value = {this.props.value}
                    onChange = {this.onChange}
                    placeholder = {this.props.placeholder} 
                    type = {this.props.type}
                    className = {this.props.className}
                    />;

    }
}

MyInput.propTypes = {
    goTo: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo })(MyInput);
