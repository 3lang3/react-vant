import Swiper from './Swiper';
import SwiperItem from './SwiperItem';
import './style/index.less';

export default Object.assign(Swiper, { Item: SwiperItem });
export type { SwiperInstance, SwiperProps } from './PropsType';
