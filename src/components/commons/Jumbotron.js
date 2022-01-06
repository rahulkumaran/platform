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
    props.bg ? `background-image: url(${props.bg})` : ''}; background-color: rgba(86, 194, 50, .3)!important;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px !important;
  border-radius: 20px;

  margin-top: 50px !important;
  margin-bottom: 50px !important;
  display: block;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`

const InnerDiv = styled.div`
padding: 50px;
`