import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../contexts/authContext'
import { createComentario } from '../../service/API_proyect/comentario.service'
import "./CreateComment.css"
const CreateComment = ({variable,id}) => {
    const [res, setRes] = useState()
    const [send, setSend] = useState(false)
    const {user} = useAuth()
    const refComent = useRef()
    const comentario = refComent?.current?.value
    const createComment = async (dataComment) => {

        const customData={
            content:dataComment,
            variable:variable,
            id:id
        }
        console.log("data comentario------->", customData)
        setRes(await createComentario(customData))
    }

    useEffect(()=>{
        console.log(res)
    },[res])
  return (
    <>
    <div className="divCreateComentario">

<input type="text" ref={refComent} className="inputComentario" />

<button onClick={()=>createComment(refComent.current.value)}>ENVIAR</button>
</div>
<div>

</div>
    </>
  )
}

export default CreateComment