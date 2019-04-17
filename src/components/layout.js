import React, { useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import GlobalStyle from "../utils/globalStyle";
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import theme, { media } from "../utils/theme"
// import Overdrive from 'react-overdrive'
import { useSpring, useTrail, useChain, animated } from 'react-spring'

const Nav = styled.nav`
  z-index: 9;
  position: fixed;

  ${media.md`
    width: 94%;
  `}
`
const Logo = styled.h3`
  font-size: 3rem;

  a {
    box-shadow: none;
    text-decoration: none;
    color: #fff;
  }
`
const LogoSmall = styled(Logo)`
  font-size: 2rem;

  a {
    color: ${theme.colors.text01};
  }
`
const Dot = styled.span`
  color: ${theme.colors.primary};
`
const Footer = styled.footer`
  margin: 2rem 0;
`

const NavLinks = styled.a`
  color: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
  display: inline-block;
  text-decoration: none;
`

const FixedNav = styled(Col)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4.2rem;
  padding: 0.5rem 2rem;
  background: #fff;
  z-index: 1024;
  box-shadow: 0 -4px 16px 0 rgba(0,0,0,0.1);

  ${media.md`
    position: relative;
    background: transparent;
    box-shadow: none;
  `}
`

const navLinks = ['Tours', 'Hotel', 'Umrah', 'Sign In'];
const config = { mass: 5, tension: 2000, friction: 400 }

function NavLinksAnimation() {
  const navLinksChain = useRef()
  const navTrail = useTrail(navLinks.length, {
    ref: navLinksChain,
    config,
    opacity: 1,
    x: -2,
    from: { opacity: 0, x: 30 },
  });
  
  useChain([navLinksChain], [1])


  return <FixedNav xs={12} md={4}>
            <Row between="xs">
              {navTrail.map(({ x, ...rest }, index) => (
                <Col key={navLinks[index]}>
                  <NavLinks href="#" activeClassName="active">
                    <animated.div
                      style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        {navLinks[index]}
                    </animated.div>
                  </NavLinks>
                </Col>
                ))}
            </Row>
          </FixedNav>
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Row>
          <Col xs={12} md={8}>
            <Logo>
              <Link to={`/`}>
              {title}<Dot>.</Dot>
              </Link>
            </Logo>
          </Col>
          <NavLinksAnimation />
        </Row>

      )
    } else {
      header = (
        <Row>
        <Col xs={12} md={8}>
          <LogoSmall>
            <Link to={`/`}>
              {title}<Dot>.</Dot>
            </Link>
          </LogoSmall>
        </Col>
        <NavLinksAnimation />
      </Row>
      )
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <Grid fluid>
          <Nav>{header}</Nav>
        </Grid>
        <main>{children}</main>
        <Grid>  
          <Footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://tpfz.netlify.com">{title}<Dot>.</Dot></a>
          </Footer>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Layout
