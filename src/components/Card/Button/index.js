import React from 'react'
import { Button, Icon, Smile } from './styles'

export default function ({ children = null }) {
  return (
    <Button>
      {children} <Icon>🌴🥑🥥</Icon> <Smile>:)</Smile>
    </Button>
  )
}
