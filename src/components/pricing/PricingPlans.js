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
  Alert,
} from 'reactstrap'

// core components

function SectionPricing() {
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState('personal')
  const [visible, setVisible] = React.useState()

  return (
    <>
      <div className='section section-pricing cd-section' id='plans'>
        <Alert
          color='danger'
          isOpen={visible}
          toggle={() => setVisible(false)}
          className='text-center'
        >
          <b>Holy guacamole!</b> Book Today and get a free class!
        </Alert>
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
                        Health Plans
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
                            <CardTitle tag='h1'>$299</CardTitle>
                            <ul>
                              <li>
                                <b>5</b> Workouts
                              </li>
                              <li>
                                <b>1</b> Consoltation
                              </li>
                              <li>
                                <b>5</b> Recipes
                              </li>
                              <li>
                                <b>3</b> Lorem Ipsum
                              </li>
                            </ul>
                            {/* <Button
                              className='btn-round'
                              color='primary'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                              disabled
                            >
                              Free download
                            </Button> */}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='6'>
                        <Card className='card-pricing' data-color='orange'>
                          <CardBody>
                            <h6 className='card-category text-success'>
                              Group Workouts
                            </h6>
                            <CardTitle tag='h1'>$199</CardTitle>
                            <ul>
                              <li>
                                <b></b> Zoom Group Workouts
                              </li>
                              <li>
                                <b>5</b> Classes
                              </li>
                              <li>
                                <b>Group</b> Up to 5
                              </li>
                              <li>
                                <b>2</b> Lorem Ipsum
                              </li>
                            </ul>
                            {/* <Button
                              className='btn-neutral btn-round'
                              color='default'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              Free download
                            </Button> */}
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
                            <h6 className='card-category text-primary'>
                              Health Plan Silver
                            </h6>
                            <CardTitle tag='h1'>$199</CardTitle>
                            <ul>
                              <li>
                                <b>1</b> Health and Growth Plan
                              </li>
                              <li>
                                <b>2</b> Meal Prep Plans
                              </li>
                              <li>
                                <b>3 </b> Recipes
                              </li>
                            </ul>
                            {/* <Button
                              className='btn-round'
                              color='warning'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              Buy Now !
                            </Button> */}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='6'>
                        <Card className='card-pricing' data-color='orange'>
                          <CardBody>
                            <h6 className='card-category text-success'>
                              Health Plans <strong>Plus</strong>
                            </h6>
                            <CardTitle tag='h1'>$399</CardTitle>
                            <ul>
                              <li>
                                <b>1</b> Health and Growth Plan
                              </li>
                              <li>
                                <b>5</b> Meal Prep Plans
                              </li>
                              <li>
                                <b>5 </b> Recipes
                              </li>
                              <li>
                                <b>1 </b> Health Consultation
                              </li>
                              <li>
                                <b>1 </b> Lorem Ipsum
                              </li>
                            </ul>
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
