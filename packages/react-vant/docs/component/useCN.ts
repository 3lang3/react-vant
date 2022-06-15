import React from 'react';
import { MdocSiteContext } from '@rcdoc/theme'

export const useCN = () => {
  const { locale } = React.useContext(MdocSiteContext);
  if (!locale) return true
  return locale.current[0] === 'zh';
}
