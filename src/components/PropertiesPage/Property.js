import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import {
  FaBed,
  FaBath,
  FaCarAlt,
  FaArrowAltCircleRight,
  FaHome,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { styles } from '../../utils'
export default function Property({ property }) {
  const fluid = property.images[0].fluid
  const { bathrooms, bedrooms, garages, footage, id, price, city } = property
  return (
    <PropertyWrapper>
      <div className="img-container">
        <Img fluid={fluid} />
        <div className="property-info">
          <p>$ {price}</p>
        </div>
      </div>
      <div className="footer">
        <p className="city">
          <FaMapMarkerAlt className="map-icon" />
          {city}
        </p>
        <div className="property-footer">
          <div className="property-icons">
            <span className="icon-container">
              <FaBed className="icon" />
              {bedrooms}
            </span>
            <span className="icon-container">
              <FaBath className="icon" />
              {bathrooms}
            </span>
            <span className="icon-container">
              <FaCarAlt className="icon" />
              {garages}
            </span>
            <span className="icon-container">
              <FaHome className="icon" />
              {footage} sqft
            </span>
          </div>

          <Link to={`/properties/${id}`}>
            <FaArrowAltCircleRight className="property-link" />
          </Link>
        </div>
      </div>
    </PropertyWrapper>
  )
}

export const PropertyWrapper = styled.article`
  .img-container {
    position: relative;
  }

  .property-info {
    position: absolute;
    bottom: 0;
    right: 0;
    background: ${styles.colors.mainGrey};
    color: ${styles.colors.mainPrimary};
    padding: 0.5rem;
    border-radius: 1rem 0 0 0;
  }
  .property-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }
  .map-icon {
    color: ${styles.colors.mainPrimary};
    margin-right: 1rem;
  }
  .icon-container {
    display: flex;
    margin-right: 0.75rem;
    font-size: 1rem;
  }
  .icon {
    align-self: center;
    margin-right: 0.5rem;
    color: ${styles.colors.mainPrimary};
  }
  .property-icons {
    display: flex;
  }
  .property-link {
    font-size: 1.7rem;
    color: ${styles.colors.mainPrimary};
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainGrey};
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .footer {
    padding: 0.5rem;
  }
  .city {
    font-weight: bold;
    text-transform: capitalize;
  }
  margin: 1rem 0;
  ${styles.boxShadow[0]};
  ${styles.transition({})};
  &:hover {
    ${styles.boxShadow[1]};
  }
  ${styles.border({ color: 'rgba(0,0,0,0.1)' })};
  border-radius: 0.3rem;
`
