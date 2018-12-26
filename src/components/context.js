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

    this.state = {
      properties: [],
      tempProperties: [],
      singleProperty: {},
      featuredProperties: [],
    }
  }
  componentDidMount = () => {
    const properties = converter(this.props.data.properties.edges)
    const singleProperty = properties[0]
    const featuredProperties = properties.filter(item => item.featured === true)

    this.setState(() => {
      return {
        properties: properties,
        singleProperty: singleProperty,
        tempProperties: properties,
        featuredProperties: featuredProperties,
      }
    })
  }
  handleProperty = id => {
    const property = this.state.properties.filter(item => item.id === id)
    this.setState(() => {
      return { singleProperty: property }
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, handleProperty: this.handleProperty }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
