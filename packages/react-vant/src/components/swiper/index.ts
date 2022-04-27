import Swiper from './Swiper';
import SwiperItem from './SwiperItem';
import './style/index.less';

const SwiperNamespace = Object.assign(Swiper, { Item: SwiperItem });

export default SwiperNamespace;

export { SwiperNamespace as Swiper };
export type { SwiperInstance, SwiperProps } from './PropsType';
