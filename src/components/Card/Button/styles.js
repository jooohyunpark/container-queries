import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: orange;
  max-width: 100%;

  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;

  @container text-container (min-width: 500px) {
    background: lightblue;
  }

  @container text-container (min-width: 1000px) {
    background: pink;
  }
`

export const Icon = styled.div`
  margin-left: 10px;
  display: none;

  @container text-container (min-width: 500px) {
    display: block;
  }
`

export const Smile = styled.div`
  margin-left: 10px;
  display: none;

  @container text-container (min-width: 1000px) {
    display: block;
  }
`
