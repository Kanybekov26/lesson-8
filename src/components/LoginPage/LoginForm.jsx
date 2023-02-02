
import styled from 'styled-components'
import React from 'react'
import Card from '../ui/Card/Card'
import Button from '../ui/Button/Button'
import { useState } from 'react'
import { useEffect } from 'react'

const LoginForm = ({loginHandler}) => {

 const [enteredEmail,setEnteredEmail] = useState('')
 const [enteredPassword,setEnteredPassword] = useState('')
 const [isEmailValid,setEmailValid] = useState(false)
 const [isPasswordValid,setPasswordValid] = useState(false)
 const [isFormValid,setFormValid] = useState(false)




const emailchangeHandler = (e) => {
  setEnteredEmail(e.target.value)
  setEmailValid(enteredEmail.includes('@'))
}
const passwordchangeHandler = (e) => {
  setEnteredPassword(e.target.value)
  setPasswordValid(enteredPassword.trim().length > 6)
}

useEffect(()=>{
setFormValid(isEmailValid && isPasswordValid)
},[isEmailValid,isPasswordValid])


 const  submitHandler = (e) => {
  e.preventDefault()
  loginHandler()
  localStorage.setItem('AUTH', JSON.stringify(false))
 }

  return (
    <Card>
    <form>
        <StyledInputContainer>
            <label htmlFor="">Email</label>
            <StyledInput type="email" onChange={emailchangeHandler} value={enteredEmail} />
        </StyledInputContainer>
        <StyledInputContainer>
            <label htmlFor="">Password</label>
            <StyledInput type="password" onChange={passwordchangeHandler} value={enteredPassword}  />
        </StyledInputContainer>
        <StyledButtonContainer>
        <Button bgColor={'success'} disabled={!isFormValid} onClick={submitHandler}>login</Button>
        </StyledButtonContainer>
    </form>
    </Card>
  )
}

export default LoginForm


const StyledInputContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content:space-between;
  margin-bottom:10px;
`

const StyledInput = styled.input`
  width: 300px;
  outline: none;
`

const StyledButtonContainer = styled.div`
  width:100%;
  text-align:center;
`