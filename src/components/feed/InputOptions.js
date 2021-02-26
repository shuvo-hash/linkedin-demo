import React from 'react'
import './InputOptions.css'

function InputOptions({ Icon, title, color}) {
    return (
        <div className="inputOption">
            { Icon && <Icon className="inputOptionIcon" style={{ color }} />}
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
