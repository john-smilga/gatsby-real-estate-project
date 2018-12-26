import React, { Component } from 'react'

const ProductContext = React.createContext()

export default class ProductProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      properties: props.data.properties.edges,
    }
  }

  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
