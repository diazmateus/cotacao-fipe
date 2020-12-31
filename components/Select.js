import React, { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #eee',
    color: state.isSelected ? '#0E1115' : '#0E1115',
    padding: 12,
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '50px',
    fontSize: '16px',
    background: '#0E1115',
    borderColor: '#0E1115',
    color: '#c4c0ca',
    borderRadius: '4px',
    padding: '4px 8px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return {
      ...provided,
      opacity,
      transition,
      color: "#c4c0ca"
    }
  }
}

export default function InputSelect({label, options = [], placeholder}) {

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        styles={customStyles}
        options={options}
        placeholder={placeholder}
        isDisabled={!options || options.length === 0}
      />

    </Container>
  )
}

const Container = styled.div`
  display: block;
  text-align: left;
`

const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: block;
  padding: 8px 18px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Input = styled(Select)`
  color: #000;
  text-align: left;
`
