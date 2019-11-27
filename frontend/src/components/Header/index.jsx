import React from 'react'
import styled from 'styled-components'

import {ReactComponent as Logo} from '../../common/assets/hotel.svg'
import { FaSearch } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 10px 10px 10px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > * + * {
    margin-left: 10px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  font-weight: bold;
  
  & > * + * {
    margin-top: 10px;
  }
`

const Input = styled.input`
  background: none;
	color: inherit;
	border: 2px solid #c7b0b067;
	padding: 0;
  width: 100%;
`

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
`

const Header = props => (
  <Wrapper>
    <LogoWrapper>
      <Logo height="90px" fill="grey"/>
      <p>ANTONY'S MOBI</p>
    </LogoWrapper>
    {/* <InputWrapper>
      <Input placeholder="Digite o endereço" />
      <Button><FaSearch color="grey"/></Button>
    </InputWrapper> */}
  </Wrapper>
)

export default Header
