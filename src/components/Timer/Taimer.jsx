
// import styled from 'styled-components'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../ui/Card/Card'

const Taimer = () => {
  const [wewe,setwewe] = useState(1)
  const intervalRef = useRef()


  useEffect(() => {
   intervalRef.current =  setInterval(()=>{
      setwewe((prevstate)=>prevstate + 1 )
    },1000)
  return () => clearInterval(intervalRef.current)
  },[])
  useEffect(() => {
  if(wewe >= 60)clearInterval(intervalRef.current)
  },[wewe])
  return (
    <div>
        <Card> 
         <h1>Timer</h1>
         <p>{wewe}</p>
        </Card>
    </div>
  )
}

export default Taimer