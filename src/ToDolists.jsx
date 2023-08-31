import React from 'react';

const ToDolists = (props) => {
    return (
        <>
            <div className='todo_style'>
            <i className="fas fa-times" 
            aria-hidden="true"
            onClick={()=>{
                props.onSelect(props.id);
            }}></i>

                <li> {props.text} </li>
            </div>
        </>
    )
}
export default ToDolists;