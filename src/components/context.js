import React, { Component } from 'react'

const ProductContext = React.createContext()

const converter = edges => {
  let tempProperties = []

  edges.forEach(item => {
    const property = { ...item.node }
    tempProperties = [...tempProperties, property]
  })
  return tempProperties
}

export default class ProductProvider extends Component {
  constructor(props) {
    super(props)
    const properties = converter(this.props.data.properties.edges)
    const featuredProperties = properties.filter(item => item.featured === true)
    this.state = {
      properties: properties,
      tempProperties: properties,
      featuredProperties: featuredProperties,
    }
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
