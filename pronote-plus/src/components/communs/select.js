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
            options:[],
            value: ''
        }
        this.onChange = this.onChange.bind(this);
    }


    onChange(e){
        e.preventDefault();
        //console.log("select onchange : ",e.currentTarget.value)
        //console.log("this.props.eleve[id]",this.props.eleve[this.props.id])
        let data = {    id : e.currentTarget.id,
                        value: e.currentTarget.value,
                        idEleve : this.props.eleve.id
                     }
        this.props.change(data);
    }
  

    componentWillMount(){
        if(this.props.eleve[this.props.id] != ''){
            this.setState({ value : this.props.eleve[this.props.id] })
        }  
       
    }


    componentWillReceiveProps(next){
      //  this.setState({options : next.options})
    }

    render() {
        return  <select id={this.props.id} onChange={this.onChange} value={this.state.value}>
                    {this.props.options.map(option =>
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


