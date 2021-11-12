import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MasonryProps } from './PropsType';

const DEFAULT_COLUMNS = 2;

function getInitColumnCount(props) {
  let columnCount;
  if (props.breakpointCols && props.breakpointCols.default) {
    columnCount = props.breakpointCols.default;
  } else {
    columnCount = parseInt(props.breakpointCols, 10) || DEFAULT_COLUMNS;
  }

  return columnCount;
}

const Masonry = (props: MasonryProps): JSX.Element => {
  const [columnCount, setColumnCount] = useState<number>(() => getInitColumnCount(props));

  const lastRecalculateAnimationFrameRef = useRef<number>(null);

  const logDeprecated = useCallback((message) => {
    // eslint-disable-next-line no-console
    console.error('[Masonry]', message);
  }, []);

  const reCalculateColumnCount = useCallback(() => {
    const windowWidth = (window && window.innerWidth) || Infinity;
    let breakpointColsObject = props.breakpointCols;

    // Allow passing a single number to `breakpointCols` instead of an object
    if (typeof breakpointColsObject !== 'object') {
      breakpointColsObject = {
        default: parseInt(breakpointColsObject as unknown as string, 10) || DEFAULT_COLUMNS,
      };
    }

    let matchedBreakpoint = Infinity;
    let columns = breakpointColsObject.default || DEFAULT_COLUMNS;

    Object.entries(breakpointColsObject).forEach(([breakpoint, breakpointValue]) => {
      const optBreakpoint = parseInt(breakpoint, 10);
      const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint;

      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
        matchedBreakpoint = optBreakpoint;
        columns = breakpointValue;
      }
    });

    columns = Math.max(1, parseInt(columns as unknown as string, 10) || 1);
    if (columnCount !== columns) {
      setColumnCount(columns);
    }
  }, [columnCount, props.breakpointCols]);

  const reCalculateColumnCountDebounce = useCallback(() => {
    if (!window || !window.requestAnimationFrame) {
      // IE10+
      reCalculateColumnCount();
      return;
    }

    if (window.cancelAnimationFrame) {
      // IE10+
      window.cancelAnimationFrame(lastRecalculateAnimationFrameRef.current);
    }

    lastRecalculateAnimationFrameRef.current = window.requestAnimationFrame(() => {
      reCalculateColumnCount();
    });
  }, [reCalculateColumnCount]);

  const itemsInColumns = () => {
    const currentColumnCount = columnCount;
    const columns = Array.from<React.ReactNode[]>({ length: currentColumnCount });
    const items = React.Children.map(props.children, (child) => child).filter(Boolean);

    items.forEach((_, i) => {
      const columnIndex = i % currentColumnCount;

      if (!columns[columnIndex]) {
        columns[columnIndex] = [];
      }

      columns[columnIndex].push(items[i]);
    });

    return columns;
  };

  const renderColumns = () => {
    const { columnAttrs = {}, columnClassName: className } = props;
    const childrenInColumns = itemsInColumns();
    const columnWidth = `${100 / childrenInColumns.length}%`;

    if (typeof className !== 'string') {
      logDeprecated('The property "columnClassName" requires a string');
    }

    const columnAttributes = {
      ...columnAttrs,
      style: {
        ...columnAttrs.style,
        width: columnWidth,
      },
      className,
    };

    return childrenInColumns.map((items, i) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div {...columnAttributes} key={i}>
          {items}
        </div>
      );
    });
  };

  useEffect(() => {
    reCalculateColumnCount();

    // window may not be available in some environments
    if (window) {
      window.addEventListener('resize', reCalculateColumnCountDebounce);
    }
    return () => {
      if (window) {
        window.removeEventListener('resize', reCalculateColumnCountDebounce);
      }
    };
  }, []);

  const {
    // ignored
    children,
    breakpointCols,
    columnClassName,
    columnAttrs,
    // used
    className,
    ...rest
  } = props;

  if (typeof className !== 'string') {
    logDeprecated('The property "className" requires a string');
  }

  return (
    <div {...rest} className={className}>
      {renderColumns()}
    </div>
  );
};

export default Masonry;
