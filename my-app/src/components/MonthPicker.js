import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {padLeft} from '../utility';
class MothPicker extends Component{

    render(){
        const {year,month} =this.props;
        return(
            <div className='dropdown month-picker-component'>
                <h4>选择月份</h4>
                <button className='btn btn-lg  btn-secondary dropdown-toggler'>
                {`${year}年 ${padLeft(month)} 月`}
                </button>
            </div>
        )
    }
    
}

export default MothPicker;