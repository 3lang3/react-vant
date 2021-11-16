import React from 'react';
import { NavBar } from 'react-vant';
import { useRouter } from 'next/router';

interface IProps {
  title?: string;
  leftArrow?: boolean;
  fixed?: boolean;
}
const ENavBar: React.FC<IProps> = (props) => {
  const router = useRouter();

  return (
    <NavBar
      {...props}
      onClickLeft={() => {
        !!props.leftArrow && router.back();
      }}
    />
  );
};
ENavBar.defaultProps = {
  title: '八百方 正品药',
};
export default ENavBar;
