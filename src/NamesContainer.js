import React from 'react';
import Name from './Name'

const NamesContainer = props => {
    return (
        <div>
           {props.names.map((name,i)=>{
            return   <Name name={name} id={i} key={i}/>
           })}
        </div>
    );
};


export default NamesContainer;