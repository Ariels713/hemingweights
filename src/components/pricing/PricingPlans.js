import React from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from 'reactstrap'

// core components

function SectionPricing() {
  const [activePill, setActivePill] = React.useState('1')
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState('personal')
  return (
    <>
      <div className='section section-pricing cd-section' id='pricing'>
        {/* ********* PRICING 5 ********* */}
        <Row className='section-gray'>
          <Col className='ml-auto mr-auto text-center' md='8'>
            <h2 className='title'>Find the right plan for you!</h2>
          </Col>
        </Row>
        <div className='pricing-5 section-gray'>
          <Container>
            <Row>
              <Col md='4'>
                <h2 className='title'>Choose a plan for your next project</h2>
                <div className='choose-plan'>
                  <Nav className='nav-pills-danger' pills role='tablist'>
                    <NavItem>
                      <NavLink
                        className={pillActive === 'personal' ? 'active' : ''}
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault()
                          setPillActive('personal')
                        }}
                      >
                        Workouts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pillActive === 'commercial' ? 'active' : ''}
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault()
                          setPillActive('commercial')
                        }}
                      >
                        Meal Plans
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <br />
                <p className='description text-gray'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className='description text-gray'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </Col>
              <Col className='ml-auto' md='7'>
                <TabContent className='text-center' activeTab={pillActive}>
                  <TabPane tabId='personal'>
                    <div className='space-top' />
                    <Row>
                      <Col md='6'>
                        <Card className='card-pricing'>
                          <CardBody>
                            <h6 className='card-category text-primary'>
                              One On One Workouts
                            </h6>
                            <CardTitle tag='h1'>$0</CardTitle>
                            <ul>
                              <li>
                                <b>5</b> Workouts
                              </li>
                              <li>
                                <b>99+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>14</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className='btn-round'
                              color='primary'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              Free download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='6'>
                        <Card className='card-pricing' data-color='orange'>
                          <CardBody>
                            <h6 className='card-category text-success'>
                              HTML Package
                            </h6>
                            <CardTitle tag='h1'>$59</CardTitle>
                            <ul>
                              <li>
                                <b>5</b> Developer
                              </li>
                              <li>
                                <b>129+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>24</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className='btn-neutral btn-round'
                              color='default'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              Free download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId='commercial'>
                    <div className='space-top' />
                    <Row>
                      <Col md='6'>
                        <Card className='card-pricing'>
                          <CardBody>
                            <h6 className='card-category text-warning'>
                              HTML Package
                            </h6>
                            <CardTitle tag='h1'>$159</CardTitle>
                            <ul>
                              <li>
                                <b>5+</b> Developers
                              </li>
                              <li>
                                <b>199+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>34</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className='btn-round'
                              color='warning'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              Buy Now !
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='6'>
                        <Card className='card-pricing' data-color='orange'>
                          <CardBody>
                            <h6 className='card-category text-success'>
                              HTML Package
                            </h6>
                            <CardTitle tag='h1'>$359</CardTitle>
                            <ul>
                              <li>
                                <b>15</b> Developer
                              </li>
                              <li>
                                <b>229+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>44</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className='btn-neutral btn-round'
                              color='default'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              Free download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 5 ********* */}
      </div>
    </>
  )
}

export default SectionPricing
