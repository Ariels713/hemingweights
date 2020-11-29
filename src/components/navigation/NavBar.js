import React from 'react'
import { Link } from 'react-router-dom'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink,
  Alert,
} from 'reactstrap'
// core components
import Logo from '../svg/Logo'
import Join from '../svg/Join'
import LogoInstagram from '../svg/LogoInstagram'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function NavBar() {
  const [bodyClick, setBodyClick] = React.useState(false)
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main'))
    // initialise
    headroom.init()
  })
  return (
    <>
      {bodyClick ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setBodyClick(false)
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar
        className='fixed-top'
        expand='lg'
        id='navbar-main'
        style={{ boxShadow: 'none' }}
      >
        <Container>
          <Alert color='warning'>This is a primary alert—check it out!</Alert>

          <div className='navbar-translate'>
            <NavbarBrand id='navbar-brand' to='/index' tag={Link}>
              <Logo /> Heming Weights
            </NavbarBrand>
            <UncontrolledTooltip placement='bottom' target='navbar-brand'>
              <Logo /> Heming Weights
            </UncontrolledTooltip>
            <button
              className='navbar-toggler'
              id='navigation'
              type='button'
              onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setBodyClick(true)
                setCollapseOpen(true)
              }}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className='ml-auto' navbar>
              <NavItem className='active'>
                <NavLink>
                  <AnchorLink
                    // offset='100'
                    href='#about'
                    style={{ fontWeight: 'bold', color: '#66615B' }}
                  >
                    About H.I.G.H <span className='sr-only'>(current)</span>
                  </AnchorLink>
                </NavLink>
              </NavItem>
              <NavItem className='active'>
                <NavLink>
                  <AnchorLink
                    // offset='100'
                    href='#plans'
                    style={{ fontWeight: 'bold', color: '#66615B' }}
                  >
                    Plans <span className='sr-only'>(current)</span>
                  </AnchorLink>
                </NavLink>
              </NavItem>
              <NavItem className='active'>
                <NavLink>
                  <AnchorLink
                    // offset='100'
                    href='#contact'
                    style={{ fontWeight: 'bold', color: '#66615B' }}
                  >
                    Contact <span className='sr-only'>(current)</span>
                  </AnchorLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className='btn-round'
                  color='danger'
                  href='https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-white-navbar'
                  target='_blank'
                >
                  <AnchorLink
                    // offset='100'
                    href='#contact'
                    style={{ color: '#fff', fontWeight: 'bold' }}
                  >
                    <Join /> Join Today
                  </AnchorLink>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
