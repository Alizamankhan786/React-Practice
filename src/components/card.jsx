import React from 'react'

const Card = ({title , description}) => {
  return (
    <>
    <div style={{
      border: "1px solid black",
      padding: "20px",
      margin: "20px",
      borderRadius: "20px",
      textAlign: "center"
    }}>
    <p>{title}</p>
    <p>{description}</p>
    </div>
    </>
  )
}

export default Card