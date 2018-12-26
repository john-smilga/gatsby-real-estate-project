import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import Property from './Property'
export default class PropertiesList extends Component {
  render() {
    return (
      <PropertiesWrapper>
        <ProductConsumer>
          {data => {
            return data.tempProperties.map(item => (
              <Property
                key={item.id}
                property={item}
                handleProperty={data.handleProperty}
              />
            ))
          }}
        </ProductConsumer>
      </PropertiesWrapper>
    )
  }
}

const PropertiesWrapper = styled.div`
  width: 75vw;
  margin: 2rem auto;
  @media (min-width: 576px) {
    width: 55vw;
  }
  @media (min-width: 768px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 992px) {
    width: 92vw;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5rem;
  }
  @media (min-width: 1200px) {
    width: 80vw;
    grid-column-gap: 2rem;
  }
`
