import React from 'react'
// react plugin used to create google maps

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Select,
} from 'reactstrap'

// core components
import Phone from '../svg/Phone'

function SectionContactUs() {
  return (
    <>
      <div className='section section-contactus cd-section' id='contact-us'>
        <div
          className='contactus-1 section-image'
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/wi9CGwivHi2TUk7Om8I-GgZJLTEnvgCvRRmdwKg3ebk6JobrPstUUxZm83oW799Xxi3_jG4v_71kagO1wBmcP8XnOmFzajNYi6srD9AIXM6BQC8ZkZngAQumzP8luiZYijzokt7_kI-cI8iktCG_292QdLKUFSRFhEzwGN7p_RLNhTaxY_myjppF1EBtEFMmsiuAbKblrBhNtyiWqRDyO2wuKuUsJpZl-CJ5GlvBIwMiyqRMBkkfRHQk_zYQmsctDMqFh3f5K4-h41VtE-9gV6idJPylWTTaJV9oPMN5EjEln3R0kItO61MqjWyunMQrsrzu8Xw_A3d0NLGirJ1KHMVU8oyA38rPnpwLXiNJIrKC7MKnOx6IX-udkmB1Ibhnl_EMpedAE5MmHynBBVFB_MEi6LZ9JPQTwmfw2ILvGL3e-E5gtyJ8cXrPsBJiw9vw5X451hsRBBYTXT3lSgc3Tiejo2kRaNct4GhfIJRxYIqam0tAapESvMcfjO1nQJyKiAitVwqzs4Wbfd41Z_pUwhCZLbu0T47Uui0nX9n-eUgqDaEZCMn8waXtuFewiFsXvneNpbZO5QeBG9gZwujEUB3hIv5IQaMstEDjUTslqlvTbaEKce-yxAwlSTJE4PTC22qXYCG3B6lZLzXkJoBeS3nIIf8_-YsIhRC1IHlhVuuY74oOx0hpMKn0_P_7pHE=w2736-h1824-no?authuser=0')`,
          }}
        >
          <Container id='contact'>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>Let's Get You Signed up!</h2>
              </Col>
            </Row>
            <Row>
              <Col className='ml-auto mr-auto' md='10'>
                <Card className='card-contact no-transition'>
                  <CardTitle className='text-center' tag='h3'>
                    Contact H.I.G.H.
                  </CardTitle>
                  <Row>
                    <Col className='ml-auto' md='5'>
                      <CardBody>
                        <div className='info info-horizontal'>
                          <div className='icon icon-danger'>
                            <Phone />
                          </div>
                          <div className='description'>
                            <h4 className='info-title'>Give us a ring</h4>
                            <p>
                              Geoff Hemingway <br />
                              212-555-5555 <br />
                              Mon - Fri, 8:00-22:00
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Col>
                    <Col className='mr-auto' md='5'>
                      <Form id='contact-form' method='post' role='form'>
                        <CardBody>
                          <Row>
                            <Col md='6'>
                              <FormGroup className='label-floating'>
                                <label className='control-label'>
                                  First name
                                </label>
                                <Input
                                  name='name'
                                  placeholder='First Name'
                                  type='text'
                                />
                              </FormGroup>
                            </Col>
                            <Col md='6'>
                              <FormGroup className='label-floating'>
                                <label className='control-label'>
                                  Last name
                                </label>
                                <Input
                                  name='name'
                                  placeholder='Last Name'
                                  type='text'
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup className='label-floating'>
                            <label className='control-label'>
                              Email address
                            </label>
                            <Input
                              name='email'
                              placeholder='Email'
                              type='email'
                            />
                          </FormGroup>
                          <FormGroup className='label-floating'>
                            <label for='planType'>Pick A Plan</label>
                            <select class='form-control' id='planType'>
                              <option>One on One</option>
                              <option>Group Workout</option>
                              <option>Health Plan Silver</option>
                              <option>Health Plan Plus</option>
                            </select>
                          </FormGroup>
                          <FormGroup className='label-floating'>
                            <label className='control-label'>
                              Have a question?
                            </label>
                            <Input
                              id='message'
                              name='message'
                              placeholder='Message'
                              type='textarea'
                              rows='6'
                            />
                          </FormGroup>

                          <Row>
                            <Col md='6'>
                              <Button
                                className='pull-right'
                                color='danger'
                                type='submit'
                              >
                                Send Message
                              </Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Form>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SectionContactUs
