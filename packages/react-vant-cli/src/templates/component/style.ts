import { SRC_DIR } from '../../common/constant';

export const STYLE_INDEX_LESS_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/style/index.less`;
export const STYLE_INDEX_CONTENT = (HLComponent) => `\
@import '../../styles/themes/default.less';
.rv-${HLComponent} {

}
`;
