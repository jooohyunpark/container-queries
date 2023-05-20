import styled from 'styled-components'

export const CardLayout = styled.div`
  container-type: inline-size;
  container-name: card;
  margin: 20px 0;
  border-radius: 10px;
  background: #edeef5;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
`

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;

  @container card (min-width: 500px) {
    flex-direction: row;
  }
`

export const ImgContainer = styled.div`
  @container card (min-width: 500px) {
    max-width: 200px;
  }

  @container card (min-width: 1000px) {
    max-width: 400px;
  }
`

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 3;

  @container card (min-width: 500px) {
    aspect-ratio: 1 / 1;
  }

  @container card (min-width: 1000px) {
    aspect-ratio: 16 / 9;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  container-type: inline-size;
  container-name: text-container;
  text-wrap: balance;
  padding: 15px;

  @container card (min-width: 500px) {
    padding: 20px;
  }
`

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;

  @container card (min-width: 500px) {
    font-size: 16px;
  }
`
