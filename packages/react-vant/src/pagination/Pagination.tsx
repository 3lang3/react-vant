import React, { useContext, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { PageItem, PaginationProps } from './PropsType';
import { BORDER } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

function makePage(number: number, text: string | number, active?: boolean): PageItem {
  return { number, text, active };
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('pagination', prefixCls);

  const count = useMemo(() => {
    const { pageCount, totalItems, itemsPerPage } = props;
    const innerCount = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
    return Math.max(1, innerCount);
  }, [props.pageCount, props.totalItems, props.itemsPerPage]);

  const pages = useMemo(() => {
    const items: PageItem[] = [];
    const pageCount = count;
    const showPageSize = +props.showPageSize;
    const { value, forceEllipses } = props;

    if (props.mode !== 'multi') {
      return items;
    }

    // Default page limits
    let startPage = 1;
    let endPage = pageCount;
    const isMaxSized = showPageSize < pageCount;

    // recompute if showPageSize
    if (isMaxSized) {
      // Current page is displayed in the middle of the visible ones
      startPage = Math.max(value - Math.floor(showPageSize / 2), 1);
      endPage = startPage + showPageSize - 1;

      // Adjust if limit is exceeded
      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = endPage - showPageSize + 1;
      }
    }

    // Add page number links
    // eslint-disable-next-line no-plusplus
    for (let number = startPage; number <= endPage; number++) {
      const page = makePage(number, number, number === value);
      items.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && showPageSize > 0 && forceEllipses) {
      if (startPage > 1) {
        const prevPages = makePage(startPage - 1, '...');
        items.unshift(prevPages);
      }

      if (endPage < pageCount) {
        const nextPages = makePage(endPage + 1, '...');
        items.push(nextPages);
      }
    }

    return items;
  }, [props.showPageSize, props.forceEllipses, props.value]);

  const select = (page: number, emitChange?: boolean) => {
    page = Math.min(count, Math.max(1, page));

    if (props.value !== page) {
      // emit('update:modelValue', page);

      if (emitChange) {
        props.onChange?.(page);
      }
    }
  };

  useEffect(() => {
    select(props.value);
  }, [props.value]);

  const renderDesc = () => {
    if (props.mode !== 'multi') {
      return (
        <li className={clsx(bem('page-desc'))}>
          {props.pageDesc ? props.pageDesc : `${props.value}/${count}`}
        </li>
      );
    }
    return null;
  };

  const simple = props.mode !== 'multi';

  const onSelect = (value: number) => () => select(value, true);
  const { value } = props;

  return (
    <ul className={clsx(bem({ simple }))}>
      <li
        className={clsx(bem('item', { disabled: value === 1 }), bem('prev'), BORDER)}
        onClick={onSelect(value - 1)}
      >
        {props.prevText}
      </li>
      {pages.map((page, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={clsx(bem('item', { active: page.active }), bem('page'), BORDER)}
          onClick={onSelect(page.number)}
        >
          {props.pageRender ? props.pageRender(page) : page.text}
        </li>
      ))}
      {renderDesc()}
      <li
        className={clsx(bem('item', { disabled: value === count }), bem('next'), BORDER)}
        onClick={onSelect(value + 1)}
      >
        {props.nextText}
      </li>
    </ul>
  );
};

Pagination.defaultProps = {
  mode: 'multi',
  pageCount: 0,
  totalItems: 0,
  itemsPerPage: 10,
  showPageSize: 5,
  prevText: '上一页',
  nextText: '下一页',
};

export default Pagination;
