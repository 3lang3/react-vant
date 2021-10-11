import { SRC_DIR } from '../../common/constant';

export const EXPORT_CONTENT = (ComponentName) => `\
import ${ComponentName} from './${ComponentName}';

export default ${ComponentName}
export { ${ComponentName} };

`;
export const EXPORT_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/index.ts`;
