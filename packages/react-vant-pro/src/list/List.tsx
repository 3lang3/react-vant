import React from 'react';
import { PullRefresh, List, useSetState } from 'react-vant';
import type { ListInstance } from 'react-vant/es/list/PropsType';
import useRequest from '@ahooksjs/use-request';
import Masonry from './Masonry';
import { ParamsType, ProListProps, ProListInstance } from './PropsType';

const ProList = React.forwardRef(
  <DataType extends Record<string, unknown>, Params extends ParamsType = ParamsType>(
    props: ProListProps<DataType, Params>,
    ref: React.Ref<ProListInstance>,
  ) => {
    const listRef = React.useRef<ListInstance>(null);
    const isRefresh = React.useRef(false);
    const pagi = React.useRef({ pageSize: 10, current: props.initialPage ?? 1 });
    const req = useRequest(props.request, { manual: !props.request });
    const [state, updateState] = useSetState({
      loading: false,
      done: false,
      error: false,
      list: [],
    });
    const stateRef = React.useRef<typeof state>();

    stateRef.current = state;

    const loadmore = async () => {
      if (stateRef.current.loading) return;
      try {
        updateState({ loading: true, done: false, error: false });
        const { data, success, total } = await req.run({ ...props.params, ...pagi.current });
        if (!success) throw new Error();
        const done = stateRef.current.list.length + data.length >= total;
        const list = isRefresh.current ? data : [...stateRef.current.list, ...data];
        updateState({ done, list, loading: false });
      } catch (error) {
        updateState({ loading: false, error: true });
      }
    };

    const reload = () => {
      const newState = { loading: false, done: false, error: false } as typeof state;
      if (!isRefresh.current) newState.list = [];
      updateState(newState);
      pagi.current = { pageSize: 10, current: props.initialPage ?? 1 };
      loadmore();
    };

    const renderListData = React.useCallback(
      () => (state.list.length ? state.list.map(props.row) : null),
      [state.list, props.row],
    );

    const renderList = React.useCallback(
      () => (
        <List ref={listRef} finished={state.done} onLoad={loadmore}>
          {props.masonry ? (
            <Masonry {...props.masonry}>{renderListData()}</Masonry>
          ) : (
            renderListData()
          )}
        </List>
      ),
      [state.done, loadmore, renderListData],
    );

    const renderPullRefresh = React.useCallback(() => {
      if (!props.pullRefresh) return renderList();
      return (
        <PullRefresh
          onRefresh={() => {
            isRefresh.current = true;
            reload();
          }}
          {...props.pullRefresh}
        >
          {renderList()}
        </PullRefresh>
      );
    }, [props.pullRefresh, renderList, reload]);

    React.useEffect(() => {
      reload();
    }, [props.params]);

    React.useImperativeHandle(ref, () => ({
      reload: () => null,
    }));

    return renderPullRefresh();
  },
);

export default ProList;
