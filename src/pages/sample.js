import React, { Component } from 'react'
import Layout from '../components/layout'
import {
  PageHeader,
  Banner,
  styles,
  SectionButton,
  MainSection,
} from '../utils'
export default class sample extends Component {
  render() {
    return (
      <Layout>
        <PageHeader img={this.props.pageContext.src}>
          <Banner title={this.props.pageContext.title} />
        </PageHeader>
      </Layout>
    )
  }
}
