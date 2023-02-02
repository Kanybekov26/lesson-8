import styled from 'styled-components'

const Card = ({children}) => {
  return (
    <Continer>
        {children}
    </Continer>
  )
}

export default Card


const Continer = styled.div`
padding:2rem 1.5rem;
    box-shadow: -3px 4px 22px -4px rgba(0,0,0,0.75);
-webkit-box-shadow: -3px 4px 22px -4px rgba(0,0,0,0.75);
-moz-box-shadow: -3px 4px 22px -4px rgba(0,0,0,0.75);
width: 450px;
margin:10px auto;
border-radius:10px;
text-align: center;
`