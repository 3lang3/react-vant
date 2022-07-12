import { createContext, Context } from 'react'

export interface FloatingBallItemState {
  close?: () => void
}

const FloatingBallItem: Context<FloatingBallItemState> = createContext({})

export default FloatingBallItem
