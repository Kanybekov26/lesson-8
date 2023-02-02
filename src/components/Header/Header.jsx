

import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const Header = ({isloggedIn, setisloggedIn,setPage}) => {
  return (
    <StyledHeader>
        <h1>A Typical </h1>
        {isloggedIn ? null : <Navigation setisloggedIn={setisloggedIn}setPage={setPage} /> }
       
    </StyledHeader>
  )
}

export default Header




const StyledHeader = styled.header`
    background-color:#700170;
    padding:20px 20px ;
    color:white;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`