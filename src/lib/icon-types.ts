import type { ComponentType, CSSProperties } from 'react'

export type IconComponent = ComponentType<{
  className?: string
  size?: number | string
  style?: CSSProperties
}>
