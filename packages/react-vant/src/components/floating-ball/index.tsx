import FloatingBall from './FloatingBall';
import FloatingBallItem from './FloatingBallItem';
import './style/index.less';

const FloatingBallNamespace = Object.assign(FloatingBall, { Item: FloatingBallItem });

export default FloatingBallNamespace;
export { FloatingBallNamespace as FloatingBall };

export type { FloatingBallInstance, FloatingBallProps } from './PropsType';
