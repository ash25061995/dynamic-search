import React from 'react';

const Name = props => {
    return (
        <div key={props.id}>
            {props.name}
        </div>
    );
};


export default Name;