  import React from 'react'
  import styled from 'styled-components'
  const Button = ({children,bgColor,disabled,onClick}) => {
    return (
      <StyledButton bgColor={bgColor}disabled={disabled} onClick={onClick}>{children}</StyledButton>
    )
  }
  
  export default Button


  const StyledButton = styled.button`
    padding:5px 15px;
    background-color:${(props)=> props.bgColor ? "#50015f": "violet"};
    border: none;
    border-radius:10px;
    color:white;
    :disabled {
        background-color:gray;
    }
  `