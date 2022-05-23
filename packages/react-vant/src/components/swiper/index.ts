import './style/index.less';
import Swiper from './Swiper';
import SwiperItem from './SwiperItem';

const SwiperNamespace = Object.assign(Swiper, { Item: SwiperItem });
export { SwiperNamespace as Swiper };
export type { SwiperInstance, SwiperProps } from './PropsType';
