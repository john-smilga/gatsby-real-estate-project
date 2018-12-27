import React, { Component } from 'react'

const ProductContext = React.createContext()

const converter = edges => {
  let tempProperties = []

  edges.forEach(item => {
    const property = { ...item.node }
    let tempPrice = property.price.toString().split('')
    tempPrice.splice(3, 0, ',')
    property.price = tempPrice
    tempProperties = [...tempProperties, property]
  })
  return tempProperties
}

export default class ProductProvider extends Component {
  constructor(props) {
    super(props)
    const properties = converter(this.props.data.properties.edges)
    const detailProperty = properties[0]
    const featuredProperties = properties.filter(item => item.featured === true)
    this.state = {
      properties: properties,
      tempProperties: properties,
      detailProperty: detailProperty,
      featuredProperties: featuredProperties,
      propertyOpen: false,
    }
  }

  openProperty = id => {
    // console.log(id)

    const property = this.state.properties.find(item => item.id === id)
    this.setState(
      () => {
        return { detailProperty: property, propertyOpen: true }
      },
      () => console.log(this.state.detailProperty.id)
    )
  }
  closeProperty = () => {
    this.setState(() => {
      return { propertyOpen: false }
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openProperty: this.openProperty,
          closeProperty: this.closeProperty,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
