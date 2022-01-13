import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import useCodeSandbox from './useCodeSandbox';
import useCopy from './useCopy';
import csbIcon from './csb.svg';
import copyIcon from './copy.svg';
import './index.less';
import 'prismjs/themes/prism.css';

const DefaultRender = (props) => (
  <Highlight
    {...defaultProps}
    code={props.code}
    language={props.language as Language}
    theme={undefined}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

const ActionsRender = (props) => {
  const openCsb = useCodeSandbox(props);
  const [copy] = useCopy();
  return (
    <div className="local-previewer">
      <DefaultRender {...props} />
      <button title="在codesandbox上尝试" className="csb-btn" onClick={openCsb}>
        <img src={csbIcon} />
      </button>
      <button title="复制" className="copy-btn" onClick={() => copy(props.code)}>
        <img src={copyIcon} />
      </button>
    </div>
  );
};

export default (props) => {
  return props.dependencies ? <ActionsRender {...props} /> : <DefaultRender {...props} />;
};
