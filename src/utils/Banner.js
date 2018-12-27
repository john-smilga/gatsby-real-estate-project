import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'
export const Banner = ({ title, subtitle, pageTitle, children }) => {
  return (
    <BannerWrapper>
      <h3 className="subtitle">{subtitle}</h3>
      <h1 className="title">{title}</h1>
      <h3 className="pageTitle">{pageTitle}</h3>
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

  .title {
    color: ${styles.colors.mainPrimary};
    font-size: 2rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.75rem' })};
  }
  .subtitle {
    color: ${styles.colors.mainPrimary};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.15rem' })};
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .pageTitle {
    color: ${styles.colors.mainPrimary};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.15rem' })};
    font-size: 3.5rem;
    text-transform: capitalize;
  }
`
