import React, { useState, useEffect, ReactNode } from 'react'

function useLazyRender(
  show: boolean
): (render: () => React.ReactNode) => () => ReactNode {
  const [inited, setInited] = useState<boolean>(false)

  useEffect(() => {
    if (show) {
      setInited(show)
    }
  }, [show])

  return render => () => inited ? render() : null
}

export default useLazyRender
