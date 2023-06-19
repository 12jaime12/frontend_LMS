import React from 'react'

const useCodeError = (res, setCodeOk) => {
    if(res?.status==200){
        setCodeOk(()=>true)
    }
}

export default useCodeError