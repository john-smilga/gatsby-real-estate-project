import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner, MainSection, Title } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'
import AboutInfo from '../components/AboutPage/AboutInfo'
export default function about() {
  return (
    <Layout>
      <SEO title="About" />
      <PageHeader img={img}>
        <Banner pageTitle="about us" />
      </PageHeader>
      <MainSection>
        <Title message="how it" title="works" />
        <AboutInfo />
      </MainSection>
    </Layout>
  )
}
