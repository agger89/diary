
import React, { FunctionComponent, SyntheticEvent, FormEvent, ChangeEvent, useCallback } from 'react'
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  padding: 20px;
  border: 1px solid #999;
  input {
    border: 1px solid #999;
  }
`

const Input: FunctionComponent = () => {

  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    console.log("submit")
  }, [])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log("input", e.target.value)
    },
    [],
  )
  
  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="값을 넣어주세요" onChange={handleChange} />
      <button type="submit">
        login
      </button>
    </Form>
  )
}

export default Input
