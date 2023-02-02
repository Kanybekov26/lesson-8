
import styled from 'styled-components'
import React from 'react'
import Button from '../ui/Button/Button'
// import Taimer from '../Timer/Taimer'

const Navigation = ({setisloggedIn,setPage}) => {

  const logoutHandler = () => {
    setisloggedIn(true)
    localStorage.clear()
  }

  const openUserPage = () => {
    setPage(true)
  }
  const openTimerPage = () => {
    setPage(false)
  }

  return (
    <Continer>
        <Button onClick={openUserPage}>User</Button>
        <Button onClick={openTimerPage}>Timer</Button>
        <Button onClick={logoutHandler}>logout</Button>

    </Continer>
  )
}

export default Navigation

const Continer = styled.div`
    width:250px;
    display: flex;
    justify-content: space-between;
`