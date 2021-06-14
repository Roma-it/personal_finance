import React from 'react'
import {Link} from 'react-router-dom'

function Buttons(props) {
    return (
        <Link className="btn block link center" to={props.path}>{props.name}</Link>
    )
}

export default Buttons
