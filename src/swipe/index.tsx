import { SwiperSlide } from 'swiper/react';
import Swipe from './Swipe';

/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-894053907
 */
const SwipeNamespace = Object.assign(Swipe, { Item: SwiperSlide });

export { SwiperSlide as SwipeItem };

export default SwipeNamespace;
