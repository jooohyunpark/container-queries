import React from 'react'
import Button from './Button'
import {
  CardLayout,
  CardDiv,
  ImgContainer,
  Img,
  TextContainer,
  Description
} from './styles'

const Card = () => {
  const randomInteger = Math.floor(Math.random() * 1000)

  return (
    <CardLayout>
      <CardDiv>
        <ImgContainer>
          <Img src={`https://picsum.photos/1600?random=${randomInteger}`} />
        </ImgContainer>

        <TextContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Button>Some random button</Button>
        </TextContainer>
      </CardDiv>
    </CardLayout>
  )
}

export default Card
