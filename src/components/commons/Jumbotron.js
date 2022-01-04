import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'


const Div = styled.div``

export const Jumbotron = ({ title, text, image }) => (
 <Div>
  <Jumbo bg={image}>
   <InnerDiv class="p-5">
    <h1 class="display-4 fw-bold">{title}</h1>
    <hr />
    <p>{text}</p>
   </InnerDiv>
  </Jumbo>
 </Div>
)

const Jumbo = styled.div`
${props =>
  props.bg ? `background-image: url(${props.bg})` : ''}; background-color: #e3e5e5 !important;
  background-size: cover;
  background-repeat: no-repeat;

  margin: auto;
  display: block;
  padding: 30px;
  box - shadow: 5px 10px #888888!important;
`

const InnerDiv = styled.div`
padding: 50px;
`