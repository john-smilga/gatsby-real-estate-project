import React, { Component } from 'react'
import { ProductConsumer } from '../context'
export default class Properties extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => <h1>{data.properties[0].node.title}</h1>}
      </ProductConsumer>
    )
  }
}
