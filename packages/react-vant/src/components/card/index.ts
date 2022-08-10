import './style/index.less'
import _Card, { CardHeader, CardBody, CardFooter, CardCover } from './Card'

const Card = Object.assign(_Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Cover: CardCover,
})

export default Card
export { Card }
