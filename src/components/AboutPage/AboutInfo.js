import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaSistrix, FaCalculatorAlt, FaBullseye } from 'react-icons/fa'
export default class AboutInfo extends Component {
  render() {
    return (
      <InfoWrapper>
        <div className="info">
          <FaSistrix className="icon" />
          <h6>search by location</h6>
        </div>
        <div className="info">
          <FaCalculatorAlt className="icon" />
          <h6>mortgage calculator</h6>
        </div>
        <div className="info">
          <FaBullseye className="icon" />
          <h6>expert advice</h6>
        </div>
      </InfoWrapper>
    )
  }
}

const InfoWrapper = styled.article`
  .info {
    text-transform: uppercase;
    padding: 2rem 0;
    ${styles.transition({})};
    text-align: center;
  }
  .info:hover {
    background: ${styles.colors.mainPrimary};
    border-radius: 0.3rem;
    color: ${styles.colors.mainWhite};
  }
  .icon {
    font-size: 2.3rem;
    margin-bottom: 1rem;
  }
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 70%;
  justify-content: center;
  grid-row-gap: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
