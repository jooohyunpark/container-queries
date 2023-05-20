import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;

  @container text-container (min-width: 500px) {
  }
`

export const Icon = styled.div`
  margin-left: 10px;
  display: none;

  @container text-container (min-width: 500px) {
    display: block;
  }
`
