import React from 'react'
import { Button, Icon } from './styles'

export default function ({ children = null }) {
  return (
    <Button>
      {children} <Icon>🌴</Icon>
    </Button>
  )
}
