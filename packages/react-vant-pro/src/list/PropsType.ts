import { PullRefreshProps } from 'react-vant/es/pull-refresh/PropsType';
import { ListProps } from 'react-vant/es/list/PropsType';
import React from 'react';

export type ParamsType = Record<string, unknown>;

export type RequestData<T> = {
  data: T[] | undefined;
  success?: boolean;
  total?: number;
} & Record<string, unknown>;

export interface ProListProps<T, U extends ParamsType> extends Pick<ListProps, 'onLoad'> {
  /** @name 动态参数,变动会触发reload */
  params?: U;
  /** @name 一个获得listData的方法 */
  request?: (
    params: U & {
      pageSize?: number;
      current?: number;
    },
  ) => Promise<Partial<RequestData<T>>>;
  /** @name 下拉刷新 */
  pullRefresh?: boolean | PullRefreshProps;
  /** @name 瀑布流布局 */
  masonry?: boolean;
  initialPage?: number;
  row?: (record: T, index: number) => React.ReactNode;
}

export type ProListInstance = {
  reload: () => void;
};
