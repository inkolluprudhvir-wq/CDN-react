import React from 'react'

function Protectedroute({islogin,children}) {
    if(islogin){
        return children
    }
  return (
    <h1>please login first</h1>
  )
}

export default Protectedroute


