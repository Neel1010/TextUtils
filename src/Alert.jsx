import React from 'react'

function Alert(props) {
  return (
    props.alert && 
    <div className="container">
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <b><h3>{props.alert.type}</h3></b> {props.alert.message}
    </div>
    </div>
  )
}
export default Alert