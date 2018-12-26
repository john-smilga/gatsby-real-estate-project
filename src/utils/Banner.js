import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'
export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  h1 {
    color: ${styles.colors.mainWhite};
    font-size: 2rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.75rem' })};
  }
  h3 {
    color: ${styles.colors.mainPrimary};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.15rem' })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
Banner.defaultProps = {
  title: 'default title',
}
