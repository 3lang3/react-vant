import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { CardProps } from './PropsType';
import { Tag } from '../tag';
import { Image } from '../image';
import { isDef } from '../utils';

function isStringOrNumber(target) {
  return typeof target === 'string' || typeof target === 'number';
}

const Card: React.FC<CardProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card', prefixCls);

  const renderTitle = () => {
    if (props.title) {
      return <div className={cls(bem('title'), 'rv-multi-ellipsis--l2')}>{props.title}</div>;
    }
    return null;
  };

  const renderThumbTag = () => {
    if (props.tag) {
      return (
        <div className={cls(bem('tag'))}>
          {isStringOrNumber(props.tag) ? (
            <Tag mark type="danger">
              {props.tag}
            </Tag>
          ) : (
            props.tag
          )}
        </div>
      );
    }
    return null;
  };

  const renderThumbImage = () => {
    if (!props.thumb) return null;
    if (typeof props.thumb === 'string') {
      return (
        <Image src={props.thumb} fit="cover" width="100%" height="100%" lazyload={props.lazyload} />
      );
    }
    return props.thumb;
  };

  const renderThumb = () => {
    if (props.thumb) {
      return (
        <a href={props.thumbLink} className={cls(bem('thumb'))} onClick={props.onClickThumb}>
          {renderThumbImage()}
          {renderThumbTag()}
        </a>
      );
    }
    return null;
  };

  const renderDesc = () => {
    if (props.desc) {
      return <div className={cls(bem('desc'), 'rv-ellipsis')}>{props.desc}</div>;
    }
    return null;
  };

  const renderPriceText = () => {
    if (isStringOrNumber(props.price)) {
      const priceArr = props.price!.toString().split('.');
      return (
        <div>
          <span className={cls(bem('price-currency'))}>{props.currency}</span>
          <span className={cls(bem('price-integer'))}>{priceArr[0]}</span>
          {props.decimal && (
            <>
              .<span className={cls(bem('price-decimal'))}>{priceArr[1] || '00'}</span>
            </>
          )}
        </div>
      );
    }
    return props.price;
  };

  const renderOriginalPrice = () => {
    return (
      <div className={cls(bem('origin-price'))}>
        {isStringOrNumber(props.originPrice)
          ? `${props.currency} ${props.originPrice}`
          : props.originPrice}
      </div>
    );
  };
  const showNum = isDef(props.num);
  const showPrice = isDef(props.price);
  const showOriginPrice = isDef(props.originPrice);
  const showBottom = showNum || showPrice || showOriginPrice || props.bottom;

  const Price = showPrice && <div className={cls(bem('price'))}>{renderPriceText()}</div>;

  const OriginPrice = showOriginPrice && renderOriginalPrice();

  const Num = showNum && (
    <div className={cls(bem('num'))}>
      {isStringOrNumber(props.num) ? `x${props.num}` : props.num}
    </div>
  );

  const Footer = props.footer && <div className={cls(bem('footer'))}>{props.footer}</div>;

  const Bottom = showBottom && (
    <div className={cls(bem('bottom'))}>
      {props.priceTop}
      {Price}
      {OriginPrice}
      {Num}
      {props.bottom}
    </div>
  );

  return (
    <div className={cls(bem(), props.className)} style={props.style} onClick={props.onClick}>
      <div className={cls(bem('header'))}>
        {renderThumb()}
        <div className={cls(bem('content', { centered: props.centered }))}>
          <div>
            {renderTitle()}
            {renderDesc()}
            {props.tags}
          </div>
          {Bottom}
        </div>
      </div>
      {Footer}
    </div>
  );
};

// defaultProps defined if need
Card.defaultProps = {
  currency: '¥',
  decimal: true,
};

export default Card;
