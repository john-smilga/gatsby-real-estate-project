import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  PageHeader,
  Banner,
  styles,
  SectionButton,
  MainSection,
} from '../../utils'
export default class SingleProperty extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          if (value.propertyOpen === false) {
            return null
          } else {
            const property = value.detailProperty
            const src = property.images[0].fluid.src
            const {
              title,
              address,
              price,
              bedrooms,
              bathrooms,
              footage,
              description,
              neighborhood,
              features,
            } = property
            console.log(features)

            return (
              <PropertyWrapper>
                <PageHeader img={src}>
                  <Banner pageTitle={title} />
                </PageHeader>
                <MainSection style={{ padding: '2rem 2rem' }}>
                  <DetailsHeader>
                    <div>
                      <h2>{title}</h2>
                      <h3>{address}</h3>
                      <h4 className="details">
                        <span className="detail">{bedrooms} Beds</span>
                        <span className="detail">{bathrooms} Baths</span>
                        <span className="detail">{footage} Sqft</span>
                      </h4>
                    </div>
                    <h2 className="price">$ {price}</h2>
                  </DetailsHeader>
                  <ImagesWrapper>
                    <div className="img">
                      <Img fluid={property.images[1].fluid} />
                    </div>
                    <div className="img">
                      <Img fluid={property.images[2].fluid} />
                    </div>
                    <div className="img">
                      <Img fluid={property.images[3].fluid} />
                    </div>
                  </ImagesWrapper>
                  <AboutProperty>
                    <h3>About the Property :</h3>
                    <p>{description.description}</p>
                  </AboutProperty>
                  <AboutProperty>
                    <h3>Neighborhood :</h3>
                    <p>{neighborhood.neighborhood}</p>
                  </AboutProperty>
                  <FeatureWrapper>
                    <h3>Extra Features</h3>
                    {features.map((item, index) => (
                      <li key={item.index}>{item.content}</li>
                    ))}
                  </FeatureWrapper>
                  <SectionButton
                    onClick={value.closeProperty}
                    style={{ margin: '2rem auto' }}
                  >
                    close details
                  </SectionButton>
                </MainSection>
              </PropertyWrapper>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const PropertyWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${styles.colors.lightGrey};
  overflow: scroll;
`
const DetailsHeader = styled.div`
  text-transform: capitalize;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price {
    color: ${styles.colors.mainPrimary};
  }
  .details {
    margin-top: 0.1rem;
  }
  .detail {
    margin-right: 0.3rem;
    color: ${styles.colors.mainGrey};
  }
`
const ImagesWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 776px) {
    width: 70%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const AboutProperty = styled.div`
  margin: 2rem 0;
  @media (min-width: 576px) {
    width: 80%;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5em;
    color: ${styles.colors.mainGrey};
  }
`
const FeatureWrapper = styled.ul`
  h3 {
    margin-bottom: 0.5rem;
  }
`
