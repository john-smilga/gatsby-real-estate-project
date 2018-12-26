import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import FeaturedItems from '../components/HomePage/FeaturedItems'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="best real estate deals" subtitle="we are offering">
        <Link to="/properties/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>
            properties
          </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <FeaturedItems />
  </Layout>
)

export default IndexPage
