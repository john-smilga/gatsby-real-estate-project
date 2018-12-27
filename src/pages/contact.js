import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'
import ContactForm from '../components/ContactPage/ContactForm'
export default function about() {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader img={img}>
        <Banner pageTitle="contact us" />
      </PageHeader>
      <ContactForm />
    </Layout>
  )
}
