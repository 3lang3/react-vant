import Card, { CardHeader, CardBody, CardFooter, CardCover } from './Card';
import './style/index.less';

const CareNamespace = Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Cover: CardCover,
});

export { CareNamespace as Card };
