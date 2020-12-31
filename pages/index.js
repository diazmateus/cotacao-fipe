import styled from 'styled-components'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import InputSelect from '../components/Select'
import { mapOptionsToSelect } from '../utils'


export default function Home() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const getMarcas = async () => {
      let response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      let data = await response.json()
      data = mapOptionsToSelect(data)
      setBrands(data)
    }

    getMarcas()
  }, [])

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
        <InputSelect
          label="Selecione a marca"
          options={brands}
          placeholder="Audi, Honda, Toyota..."
        />
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

  @media (max-width: 768px) {
    padding: 32px;
  }
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  padding: 32px;
  color: #6a50c7;

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
  background-color: #26282F;
  padding: 48px;
  border-radius: 16px;
  height: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;

  }
`
