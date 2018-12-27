import React, { Component } from 'react'
import { MainSection, Title, SectionButton, styles } from '../../utils'
import styled from 'styled-components'
import inputData from './inputData'
import Input from './Input'
export default class ContactForm extends Component {
  state = {
    inputs: inputData,
    name: '',
    email: '',
    message: '',
    disabled: true,
  }
  handleChange = e => {
    const inputName = e.target.name
    const value = e.target.value

    this.setState(
      () => {
        return { [inputName]: value }
      },
      () => {
        const name = this.state.name
        const email = this.state.email
        const message = this.state.message
        if (!name || !email || !message) {
          this.setState(() => {
            return { disabled: true }
          })
        } else if (name && email && message) {
          this.setState(() => {
            return { disabled: false }
          })
        }
      }
    )
  }

  render() {
    return (
      <MainSection>
        <Title title="drop a line" message="let's get in touch" />
        <FormWrapper
          action="https://formspree.io/codingaddictla@gmail.com"
          method="POST"
        >
          {this.state.disabled && <p>please fill out all fields</p>}
          {this.state.inputs.map(item => {
            return (
              <Input
                key={item.id}
                type={item.type}
                name={item.name}
                value={this.state[item.name]}
                placeholder={item.placeholder}
                handleChange={this.handleChange}
                errors={this.state.errors}
              />
            )
          })}
          <input
            type="hidden"
            name="_next"
            value="https://gatsby-real-estate-project.netlify.com/"
          />
          <input type="hidden" name="_subject" value="New submission!" />
          <div style={{ marginTop: '1rem' }}>
            <label htmlFor="message" className="message-title">
              your message
            </label>
            <textarea
              name="message"
              className="message"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>

          <SectionButton
            disabled={this.state.disabled ? true : false}
            style={{ margin: '0 auto' }}
            type="submit"
          >
            {this.state.disabled ? 'disabled' : 'submit here'}
          </SectionButton>
        </FormWrapper>
      </MainSection>
    )
  }
}

const FormWrapper = styled.form`
  margin: 2rem auto;
  ${styles.border({ color: 'rgba(0,0,0,0.4)' })};
  padding: 4rem;
  border-radius: 0.5rem;
  ${styles.boxShadow[0]};
  ${styles.transition({})};
  &:hover {
    ${styles.boxShadow[1]};
  }

  p {
    color: red;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
  .message-title {
    color: ${styles.colors.mainGrey};
    text-transform: capitalize;
  }
  .message {
    width: 100%;
    border: 0.15rem solid ${styles.colors.mainGrey};
    background: transparent;
    color: ${styles.colors.mainGrey};
    font-size: 1.2rem;
    margin: 0.75rem 0 1.5rem 0;
  }
`
