import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner, MainSection, Title } from '../utils'
import img from '../images/bcg/propertiesBcg.jpeg'
import PropertiesSection from '../components/PropertiesPage/PropertiesSection'
export default function properties() {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader img={img}>
        <Banner title="our properties" subtitle="let's explore" />
      </PageHeader>
      <MainSection>
        <Title title="our properties" message="be amazed " />
        <PropertiesSection />
      </MainSection>
    </Layout>
  )
}
