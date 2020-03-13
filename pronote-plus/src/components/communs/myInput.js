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
           value:''
        }
        this.onChange = this.onChange.bind(this);
    }


    onChange(e){
        e.preventDefault();
        let self = this;
        let data = {    id : this.props.id,
            value: e.currentTarget.value,
            idEleve : this.props.idEleve
        }
        this.setState({value : e.currentTarget.value},()=>{
            self.props.change(data);
        });
       
        
    }
  

    componentWillMount(){
        this.setState({value : this.props.value})
    }


    componentWillReceiveProps(next){
        this.setState({value : next.value})
    }

    render() {
        return <input 
                    value = {this.state.value}
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
