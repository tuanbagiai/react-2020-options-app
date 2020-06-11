import React from 'react';
import Option from './Option';
const Options = (props) =>
        (
            <div >
              <div className='widget-header'>
                <h3 className='widget-header__title'>Your Options</h3>
                <button className='button button--link'
                   onClick={props.eventDeleteOptions}>
                   Remove All
                </button>
              </div>
           {props.arrays.length===0 && <p className='widget__message'>Please add an option to get started</p>}
              {
              props.arrays.map((option, index) => (
                <Option
                 key={option} 
                 optionText= {option} 
                 count ={index+1}
                 eventDeleteOption ={props.eventDeleteOption}
                 />
              ))
              }
            </div>
        ); 
export default Options;