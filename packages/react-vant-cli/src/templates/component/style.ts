import { SRC_DIR } from '../../common/constant';

export const STYLE_INDEX_LESS_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/style/index.less`;
export const STYLE_VAR_LESS_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/style/var.less`;
export const STYLE_INDEX_CONTENT = (HLComponent) => `\
@import './var.less';

:root {

}

.@{rv-prefix}-${HLComponent} {

}
`;

export const STYLE_VAR_CONTENT = () => `\
@import '../../styles/var.less';

`;
