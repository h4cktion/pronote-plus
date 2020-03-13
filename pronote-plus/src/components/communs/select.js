import React from 'react';
import { IoMdPaperPlane,IoMdSettings, IoIosSpeedometer, IoIosPower, IoIosPerson, IoIosPeople } from 'react-icons/io';
import propTypes from 'prop-types';
import {  goTo } from '../../actions/pronoteActions';
import { connect } from 'react-redux';
import _ from'lodash';
import './select.scss';



class Select extends React.Component {

    constructor() {
        super();
 
        this.state = {
            options:[{id: 0,value:"selectionner "},{id: 1,value:"H"}, {id:2,value : "F"}],
            value: ''
        }
        this.onChange = this.onChange.bind(this);
    }


    onChange(e){
        e.preventDefault();
        console.log("select change",e.currentTarget)
        this.setState({value : e.currentTarget.value})
    }
  

    componentWillMount(){
       // this.setState({value : this.props.value})
    }


    componentWillReceiveProps(next){
      //  this.setState({options : next.options})
    }

    render() {
        return  <select id="genre" onChange={this.onChange} >
                    {this.state.options.map(option =>
                        <option key={option.id}   value={option.value}>{option.value}</option>    
                    )}
                </select>;

    }
}

Select.propTypes = {
    goTo: propTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        menu : state.pronote.menu
    }
}


export default connect(mapStateToProps, { goTo })(Select);


