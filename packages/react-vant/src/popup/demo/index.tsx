/* eslint-disable no-console */
import React, { useState, useReducer } from 'react';
import { Button, Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import Popup from '..';
import './style.less';

const initialState = {
  showBasic: false,
  showTop: false,
  showBottom: false,
  showLeft: false,
  showRight: false,
  showCloseIcon: false,
  showCustomCloseIcon: false,
  showTitle: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { ...state, showBasic: !state.showBasic };
    case 'showTop':
      return { ...state, showTop: !state.showTop };
    case 'showBottom':
      return { ...state, showBottom: !state.showBottom };
    case 'showLeft':
      return { ...state, showLeft: !state.showLeft };
    case 'showRight':
      return { ...state, showRight: !state.showRight };
    case 'showCloseIcon':
      return { ...state, showCloseIcon: !state.showCloseIcon };
    case 'showCustomCloseIcon':
      return { ...state, showCustomCloseIcon: !state.showCustomCloseIcon };
    case 'showCustomIconPosition':
      return { ...state, showCustomIconPosition: !state.showCustomIconPosition };
    case 'showRoundCorner':
      return { ...state, showRoundCorner: !state.showRoundCorner };
    case 'showTitle':
      return { ...state, showTitle: !state.showTitle };
    default:
      throw new Error();
  }
}

export default (): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [outerPopupVisible, setOuterPopupVisible] = useState(false);
  const [innerPopupVisible, setInnerPopupVisible] = useState(false);
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell
          title="展示弹出层"
          isLink
          onClick={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        />
        <Button onClick={() => setOuterPopupVisible(true)}>Show Outer Popup</Button>
      </DemoBlock>
      <Popup
        title="Outer popup"
        visible={outerPopupVisible}
        position="bottom"
        style={{ height: '80%' }}
        onClose={() => setOuterPopupVisible(false)}
      >
        <Button onClick={() => setInnerPopupVisible(true)}>Show Inner Popup</Button>

        <Popup
          title="Inner popup"
          visible={innerPopupVisible}
          position="bottom"
          onClose={() => setInnerPopupVisible(false)}
          style={{ height: '60%' }}
        >
          asasaaas
        </Popup>
      </Popup>
    </DemoSection>
  );
};
