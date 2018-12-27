import React, { Component } from 'react'
import SingleProperty from '../components/SingleProperty'
import { ProductConsumer } from '../components/context'
import Layout from '../components/layout'
import { PageHeader, Banner } from '../utils'
export default class property extends Component {
  render() {
    return (
      <Layout>
        <SingleProperty />
      </Layout>
    )
  }
}
