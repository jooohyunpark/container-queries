import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Card from '@/components/Card'
import '@/styles/main.css'

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Containter queries test</h1>
          </Col>

          <Col xs={12}>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
