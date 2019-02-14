import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {padLeft, range} from '../utility';
class MothPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            isopen:false,
            selectYear:this.props.year,
            selectMonth:this.props.month
        }
    }
    toggleDropdown=(event)=>{
        event.preventDefault();
        this.setState({
            isopen:!this.state.isopen
        })
    }
    selectYear=(event,yearnumber)=>{
        event.preventDefault();
        this.setState({
            selectYear:yearnumber
        })
        console.log(this.state.selectYear);

    }
    render(){
        const {year,month} =this.props;
        const isopen=this.state.isopen;
        const monthRange=range(12,1);
        const yearRange=range(9,-4).map(number=>number+year)
        const selectyear=this.state;
        return(
            <div className='dropdown month-picker-component'>
                <h4>选择月份</h4>
                <button className='btn btn-lg  btn-secondary dropdown-toggler' onClick={this.toggleDropdown}>
                {`${year}年 ${padLeft(month)} 月`}
                </button>
                {isopen&&
                    <div className='dropdown-menu' style={{display:'block'}}>
                    <div className='row'>
                    <div className='col border-right'>
                   {yearRange.map((yearnumber,index)=>(
                       <a className={(yearnumber===selectyear)?'dropdown-item active':'dropdown-item'} href='#' onClick={(event)=>{this.selectYear(event,yearnumber)}} key={index}>
                        {yearnumber}
                       </a>
                   ))}
                    </div>  
                    <div className='col'>
                    {monthRange.map((monthnumber,index)=>(
                       <a className={(monthnumber==month)?'dropdown-item active':'dropdown-item'} href='#'
                       onClick={}
                       key={index}>
                        {padLeft(monthnumber)}月
                       </a>
                   ))}    
                    </div>
                    </div>
                    </div>
                }
            </div>
        )
    }
    
}

export default MothPicker;