import React from 'react';

import "./Input.css"

const InputArea = ({subject}) => {
    return ( 
        <div>
            <label className="input-label" htmlFor="input">{subject}</label>
            <input className="input-form" type={subject} name={subject} />
        </div>
     );
}
 
export default InputArea;