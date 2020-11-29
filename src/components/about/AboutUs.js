import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components
import Butt from '../svg/Butt'
import Peas from '../svg/Peas'
import Health from '../svg/Health'
function AboutUs() {
  return (
    <>
      {/* <div className='section section-feature cd-section' id='features'> */}
      {/* ********* FEATURES 4 ********* */}
      <div className='features-4' id='about' style={{ marginTop: '24em' }}>
        <Container>
          <Row>
            <Col className='ml-auto mr-auto text-center' md='8'>
              <h2 className='title'>Is this what you are looking for?</h2>
              <h5 className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <div className='ipad-container'>
                <img
                  alt='...'
                  src='https://lh3.googleusercontent.com/RnauHws-lvowxBK8KKgC9NlBDMX5uUG3Eh3NGe5Mti81QHrLwwtiSvqK2vrgejVThFB1CfTJAAcOoYt15MHDsu4L1b7hTTPNArNPV0FRbTJmJePE9FRjnji9-lOPT0nnuZPavwD-J9PgIYq2wGHuZ22oMHXvsUnIjQADxOdZVKCZgBNIY_lao0cV21E15qYUaE8iK80cWbIYhWQp1FWt-Cs32zP1eL501-ocUxq7ucWOnY3n6Op8_YzLGlaf5Lss0_Xu5bgRRzG3BNbuqlsYI24rUa3P_RDzNN2981Tv9v6w6m4BunDOCF49vrSCzxg4k11EOzE6yMT22VjCABV3xlnNAYyMpW38DTKJGOpLabBqCirnlnqqRE-s_otKa3P1prp9hWDHdMAElVRcoiMDhFHN0TI1Ar_C6xOo0cVrRTBpLAd7AYU_NbUJ5oByW0jIcwfPgdqcDuBbfbSkKJpRMqMyqoJLYBiYQV_k-sJ-FoYGQXIwt-wZK2Z8nPxmnZ8TuJEmwj8ylhUrELREgN8wX_H1bDsy69rX-sGu7HJi5zycjQiFlBIRzBCm-tzCRKMi2HzFHjmCZ95VHw7sSJPMv5o137ui45-FiMQnNpGYZsvyU4APnQDb4nWqqQMLlNOnJbO4ysvdZMoo-vBXD2p5_oTT7VMZySZkXLf0Bf6GExsPo2Y8C1PlGyrJ0yxR9lg=w1122-h1118-no?authuser=0'
                />
              </div>
            </Col>
            <Col className='offset-1' md='4'>
              <div className='info info-horizontal'>
                <div className='icon icon-info'>
                  <Butt />
                </div>
                <div className='description'>
                  <h4 className='info-title'>Workout Types? </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div className='info info-horizontal'>
                <div className='icon icon-success'>
                  <Peas />
                </div>
                <div className='description'>
                  <h4 className='info-title'>Meal Plans</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div className='info info-horizontal'>
                <div className='icon icon-danger'>
                  <Health />
                </div>
                <div className='description'>
                  <h4 className='info-title'>Why H.I.G.H.</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ********* END FEATURES 4 ********* */}
      {/* </div> */}
    </>
  )
}

export default AboutUs
