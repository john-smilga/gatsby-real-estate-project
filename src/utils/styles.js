export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainYellow: `#F2AF29`,
  mainGrey: `#474747`,
  mainPrimary: `#109648`,
  lightGrey: '#DFE0E2',
}
export const textSlanted = `font-family:'Caveat', cursive;`

export const transDefault = 'transition:all 0.5s ease-in-out'
export const transFunction = (
  property = 'all',
  time = '0.5s',
  type = 'linear'
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}

export const boxShadow = [
  'box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)',
  'box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75)',
]
