import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/propertiesBcg.jpeg'
import PropertiesList from '../components/PropertiesPage/PropertiesList'
export default function properties() {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader img={img}>
        <Banner pageTitle="our properties" />
      </PageHeader>
      <PropertiesList />
    </Layout>
  )
}
