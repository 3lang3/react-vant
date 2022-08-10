import { version as _reactVersion } from 'react'
import { version as _reactDomVersion } from 'react-dom'

export const reactVersion = Number((_reactVersion || '').split('.')[0])
export const reactDomVersion = Number((_reactDomVersion || '').split('.')[0])
