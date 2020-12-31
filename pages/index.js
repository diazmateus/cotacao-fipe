import styled from 'styled-components'
import Head from 'next/head'
import Select from 'react-select'
import fruits from '../components/frutas'
import React, { useState } from 'react'

const options = fruits.map((d, i) => ({
  value: d,
  label: d
}))

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #eee',
    color: state.isSelected ? '#fff' : '#242424',
    padding: 12
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '50px',
    fontSize: '16px',
    background: '#fff',
    borderColor: '#fff',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 8px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return {...provided, opacity, transition}
  }
}

export default function Home() {
  const [fruit, setFruit] = useState(options[0].value)

  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"/>
        <title>Cotação FIPE</title>
      </Head>

      <Title>COTAÇÃO FIPE</Title>

      <Form>
        <Input
          styles={customStyles}
          options={options}/>
      </Form>


    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 36px;
  color: #f0f0f0;
  font-weight: 400;
  padding: 32px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Flex = styled.div`
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-auto-rows: 100px;
  //grid-gap: 5px 8px;
  //padding: 20px 10px;
`

const Box = styled.div`
  padding: 32px;
  background: linear-gradient(45deg, #1E00F5, #7b00f5);
`

const Form = styled.form`
  width: auto;
  min-width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Input = styled(Select)`
  color: #000;
  text-align: left;
`
