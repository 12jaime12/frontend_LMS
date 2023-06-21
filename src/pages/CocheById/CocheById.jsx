import React, { useEffect, useState } from 'react'
import { getCocheById } from '../../service/API_proyect/coche.service'
import { useParams } from 'react-router'
import PrintInfoCoche from '../../components/PrintInfoCoche/PrintInfoCoche'


const CocheById = () => {
    const {id} = useParams()
    const [res, setRes] = useState({})
    const [send, setSend] = useState(false)
    
    const callService = async () => {
        try {
        setSend(true)
        setRes(await getCocheById(id))
        setSend(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        callService()
    },[])
  return (
    <div>
        

        <PrintInfoCoche data={res}/>
    </div>
  )
}

export default CocheById