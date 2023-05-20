import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Card from '@/components/Card'
import '@/styles/main.scss'

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Containter queries test 🧠💡</h1>
          </Col>

          <Col xs={6} lg={6}>
            <Card />
          </Col>
          <Col xs={6} lg={3}>
            <Card />
          </Col>
          <Col xs={12} lg={3}>
            <Card />
          </Col>
          <Col xs={12} lg={4}>
            <Card />
          </Col>
          <Col xs={6} lg={8}>
            <Card />
          </Col>
          <Col xs={6} lg={12}>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
