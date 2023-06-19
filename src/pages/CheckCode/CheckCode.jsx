import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate, Navigate} from 'react-router-dom'
const CheckCode = () => {
    const userLocal = localStorage.getItem("user")
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [codeOk, setCodeOk] = useState()
    //falta traer el contexto

    const formSubmit = async (formData) => {
      if(userLocal==null){
        const customFormData = ({
          confirmationCode:"",
          email:""
        })
        setSend(true)
        //-----------------------setRes(await SERVICIO)
        setSend(false)
      }else{
        const parseUser = JSON.parse(userLocal)
        const customFormData=({
          confirmationCode:parseInt(formData.confirmationCode),
          email:parseUser.email
        })
      }
    }



  return (
    <div>CheckCode</div>
  )
}

export default CheckCode