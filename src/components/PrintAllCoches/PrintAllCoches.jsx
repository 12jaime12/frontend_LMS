import React from 'react'

const PrintAllCoches = ({data}) => {
    console.log(data)
  return (
        <div>{data?.data?.map((elem)=>(
            <figure key={elem._id}>
              <img src={elem.image[0]} alt={elem.modelo}/>
              <div>
                <p>{elem.marca}</p>
                <p>{elem.modelo}</p>
              </div>
            </figure>
        ))
        
        }</div>
        
    
  )
}

export default PrintAllCoches