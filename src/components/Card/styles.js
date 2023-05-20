import styled from 'styled-components'

export const CardLayout = styled.div`
  container-type: inline-size;
  container-name: card;
  background: #ccc;
`

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;

  @container card (min-width: 500px) {
    flex-direction: row;
  }
`

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-width: 150px;

  @container card (min-width: 500px) {
    aspect-ratio: 1 / 1;
    max-width: 200px;
  }

  @container card (min-width: 1000px) {
    aspect-ratio: 1 / 1;
    max-width: 200px;
  }
`

export const Description = styled.div``
