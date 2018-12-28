import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Property from '../PropertiesPage/Property'
import { Title, SectionButton } from '../../utils'
export default class FeaturedItems extends Component {
  render() {
    return (
      <React.Fragment>
        <FeaturedWrapper>
          <Title title="properties" message="featured" />
          <PropertiesWrapper>
            <ProductConsumer>
              {data => {
                return data.featuredProperties.map(item => (
                  <Property key={item.id} property={item} />
                ))
              }}
            </ProductConsumer>
          </PropertiesWrapper>
          <Link to="/properties/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '0 auto' }}>
              properties
            </SectionButton>
          </Link>
        </FeaturedWrapper>
      </React.Fragment>
    )
  }
}

const FeaturedWrapper = styled.div`
  padding: 4rem 0;
`
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
