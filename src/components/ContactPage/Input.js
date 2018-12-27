import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'

export default function Input({
  type,
  name,
  value,
  placeholder,
  handleChange,
}) {
  return (
    <React.Fragment>
      <InputWrapper
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </React.Fragment>
  )
}

const InputWrapper = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0.75rem auto;
  text-transform: capitalize;
  width: 100%;
  display: block;
  border: none;
  border-bottom: 0.15rem solid ${styles.colors.mainGrey};
  border-radius: 0;
  color: ${styles.colors.mainGrey};
  background: transparent;
`
