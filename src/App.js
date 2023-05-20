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
            <h1>Containter queries test</h1>
          </Col>

          {Array.from({ length: 9 }).map((d, i) => (
            <Col xs={12} lg={6} key={i}>
              <Card index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
