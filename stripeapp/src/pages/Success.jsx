import React from 'react'

const Success = () => {
  return (
    <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <button style={{
        border:"none",
        width:120,
        borderRadius:5,
        padding:"20px",
        backgroundColor:"teal",
        color:"white",
        fontWeight:"600",
         }}>
        Success
      </button>
      <p>Your  payment succesfully get</p>
    </div>
  )
}

export default Success;