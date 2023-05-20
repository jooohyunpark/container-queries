import React from 'react'
import { CardLayout, CardDiv, Img, Description } from './styles'

const Card = () => {
  const randomInteger = Math.floor(Math.random() * 1000)

  return (
    <CardLayout>
      <CardDiv>
        <Img src={`https://picsum.photos/1600?random=${randomInteger}`} />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
      </CardDiv>
    </CardLayout>
  )
}

export default Card
