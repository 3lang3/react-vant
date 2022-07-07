import clsx from 'clsx';
import React, { FC, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks';
import { useResizeEffect } from '../hooks/use-resize-effect';
import { withStopPropagation } from '../utils/dom/event';
import { EllipsisProps } from './PropsType';

type EllipsisedValue = {
  leading?: string;
  tailing?: string;
};

const Ellipsis: FC<EllipsisProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({});
  const [expanded, setExpanded] = useState(false);
  const [exceeded, setExceeded] = useState(false);

  function calcEllipsised() {
    const root = rootRef.current;
    if (!root) return;
    const originStyle = window.getComputedStyle(root);
    const container = document.createElement('div');
    const styleNames: string[] = Array.prototype.slice.apply(originStyle);
    styleNames.forEach((name) => {
      container.style.setProperty(name, originStyle.getPropertyValue(name));
    });
    container.style.position = 'fixed';
    container.style.left = '999999px';
    container.style.top = '999999px';
    container.style.zIndex = '-1000';
    container.style.height = 'auto';
    container.style.minHeight = 'auto';
    container.style.maxHeight = 'auto';
    container.style.textOverflow = 'clip';
    container.style.whiteSpace = 'normal';
    container.style.webkitLineClamp = 'unset';
    container.style.display = 'block';
    const lineHeight = pxToNumber(originStyle.lineHeight);
    const maxHeight = Math.floor(
      lineHeight * (props.rows + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom),
    );

    container.innerText = props.children;
    document.body.appendChild(container);

    if (container.offsetHeight <= maxHeight) {
      setExceeded(false);
    } else {
      setExceeded(true);
      const end = props.children.length;
      const actionText = expanded ? props.collapseText : props.expandText;
      // eslint-disable-next-line no-inner-declarations
      function check(left: number, right: number): EllipsisedValue {
        if (right - left <= 1) {
          if (props.direction === 'end') {
            return {
              leading: props.children.slice(0, left) + '...',
            };
          } else {
            return {
              tailing: '...' + props.children.slice(right, end),
            };
          }
        }
        const middle = Math.round((left + right) / 2);
        if (props.direction === 'end') {
          container.innerText = props.children.slice(0, middle) + '...' + actionText;
        } else {
          container.innerText = actionText + '...' + props.children.slice(middle, end);
        }
        if (container.offsetHeight <= maxHeight) {
          if (props.direction === 'end') {
            return check(middle, right);
          } else {
            return check(left, middle);
          }
        } else {
          if (props.direction === 'end') {
            return check(left, middle);
          } else {
            return check(middle, right);
          }
        }
      }

      // eslint-disable-next-line no-inner-declarations
      function checkMiddle(
        leftPart: [number, number],
        rightPart: [number, number],
      ): EllipsisedValue {
        if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
          return {
            leading: props.children.slice(0, leftPart[0]) + '...',
            tailing: '...' + props.children.slice(rightPart[1], end),
          };
        }
        const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
        const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
        container.innerText =
          props.children.slice(0, leftPartMiddle) +
          '...' +
          actionText +
          '...' +
          props.children.slice(rightPartMiddle, end);
        if (container.offsetHeight <= maxHeight) {
          return checkMiddle([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
        } else {
          return checkMiddle([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
        }
      }

      const middle = Math.floor((0 + end) / 2);
      const ellipsised =
        props.direction === 'middle' ? checkMiddle([0, middle], [middle, end]) : check(0, end);
      setEllipsised(ellipsised);
    }
    document.body.removeChild(container);
  }

  useResizeEffect(calcEllipsised, rootRef);
  useIsomorphicLayoutEffect(() => {
    calcEllipsised();
  }, [props.children, props.direction, props.rows, props.expandText, props.collapseText]);

  const expandActionElement =
    exceeded && props.expandText
      ? withStopPropagation(
          props.stopPropagationForActionButtons,
          <a
            onClick={() => {
              setExpanded(true);
            }}
          >
            {props.expandText}
          </a>,
        )
      : null;

  const collapseActionElement =
    exceeded && props.expandText
      ? withStopPropagation(
          props.stopPropagationForActionButtons,
          <a
            onClick={() => {
              setExpanded(false);
            }}
          >
            {props.collapseText}
          </a>,
        )
      : null;

  const renderContent = () => {
    if (!exceeded) {
      return props.children;
    }
    if (expanded) {
      return (
        <>
          {props.children}
          {collapseActionElement}
        </>
      );
    } else {
      return (
        <>
          {ellipsised.leading}
          {expandActionElement}
          {ellipsised.tailing}
        </>
      );
    }
  };

  return (
    <div
      ref={rootRef}
      className={clsx('rv-typography--ellipsis', props.className)}
      style={props.style}
    >
      {renderContent()}
    </div>
  );
};

function pxToNumber(value: string | null): number {
  if (!value) return 0;
  const match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}

Ellipsis.defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
};

export default Ellipsis;
