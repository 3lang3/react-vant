import './style/index.less'
import _Swiper from './Swiper'
import SwiperItem from './SwiperItem'

const Swiper = Object.assign(_Swiper, { Item: SwiperItem })

export default Swiper
export { Swiper }
export type { SwiperInstance, SwiperProps } from './PropsType'
