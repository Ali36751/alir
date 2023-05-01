import React from 'react'

function Alerts(props) {
    const captilize=(word)=>
    {
     const lower= word.toLowerCase();
     return lower.charAt(0).toUpperCase()+lower.slice(1);   
    }
    return (
    

   props.alerts&& <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
    <strong>{captilize(props.alerts.type)}</strong>:{props.alerts.msg}
    
  </div>    
  
  )
}

export default Alerts
