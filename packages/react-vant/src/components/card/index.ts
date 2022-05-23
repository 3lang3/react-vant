import './style/index.less';
import Card, { CardHeader, CardBody, CardFooter, CardCover } from './Card';

const CareNamespace = Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Cover: CardCover,
});

export { CareNamespace as Card };
