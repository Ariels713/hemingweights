/*eslint-disable*/
import React from 'react'

// reactstrap components
import { Container, Row, Button } from 'reactstrap'

// core components

function FooterBlack() {
  return (
    <>
      <footer className='footer footer-black footer-white'>
        <Container>
          <Row>
            <div className='credits ml-auto'>
              <span>
                made with <i className='fa fa-heart heart' /> by
                <Button
                  className='btn-link'
                  type='button'
                  style={{ paddingLeft: '.5em' }}
                  onClick={() =>
                    window.open('https://arielrodriguez.me/', '_blank')
                  }
                >
                  Ariel Rodriguez
                </Button>
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default FooterBlack
