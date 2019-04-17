import React, { useRef } from "react"
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled, {keyframes} from "styled-components"
import { useSpring, useTrail, useChain, animated } from 'react-spring'
// import Overdrive from 'react-overdrive'
import theme, { media } from "../utils/theme"
import HeroImgSlider from "../components/hero-img-slider"

const HeroWrapper = styled.div`
  overflow: hidden;
`
const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  height: 100%;
  padding: 1.5rem;
  margin-top: -50vh;

  ${media.md`
    padding: 1rem;
    margin-top: unset;
  `}
`
const HeroTitle = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  color: #fff;

  ${media.md`
    color: inherit;
    font-size: 4.5rem;
  `}
`
const AnimatedHeroTitleSmallWrapper = styled(animated.div)`
 display: inline-block; 
 height: 44px;
`
const AnimatedHeroTitleSmall = styled(animated.div)`
 display: inline-block;
  font-size: 2rem;
  padding-right: 1rem;
    overflow: hidden;
`
const AnimatedHeroTitleWrapper = styled(animated.div)`
  display: inline-block;
  height: 2.7rem !important;
  
  ${media.md`
    height: 88px !important;
`}
`
const AnimatedHeroTitle = styled(animated.div)`
  padding-right: 2rem;
  overflow: hidden;
  height: 2.7rem !important;
  
  ${media.md`
    height: 88px !important;
`}
`

  
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  animation: ${fadeIn} 0.3s linear;
  z-index: 9;
  
  ${media.md`
    width: 504px;
  `}
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-radius: 4px 0 0 4px;
  background-color: #EADECA;
`
const IconSearch = styled.svg`
  margin-left: 0.5rem;
  fill: currentColor;
`
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.5rem;
  background-color: #EADECA;
  border: none;
  border-radius: 4px;
  outline: none;

  ${media.md`
    width: 392px;
  `}
`
const Button = styled.button`
  padding: 0.75rem 3rem;
  height: 44px;
  background-color: #EE8422;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  line-height: 16px;
  letter-spacing: 0;
  cursor: pointer;
  user-select: none;
  border-style: solid;
  border: none;
  transition: all 250ms ease-in-out;
  border-radius: 0 4px 4px 0;
  outline: none;
  font-weight: bold;
  /* Only if using bold text */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: ${theme.motion.steadyFx};

  &:hover {
    background: #d0731d;
  }
`
const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`
  

const itemsOne = ['Book', 'a'];
const itemsTwo = ['Muslim-friendly', 'Tour'];
const itemsThree = ['for', 'Your', 'Next', 'Trip'];
const config = { mass: 5, tension: 2000, friction: 400 }


function HeroAnimation() {
  const heroTitleChainOne = useRef()
  const trailOne = useTrail(itemsOne.length, {
    ref: heroTitleChainOne,
    config,
    opacity: 1,
    x: 0,
    height: 32,
    from: { opacity: 0, x: 0, height: 0 },
  });

  const heroTitleChainTwo = useRef()
  const trailTwo = useTrail(itemsTwo.length, {
    ref: heroTitleChainTwo,
    config,
    opacity: 1,
    x: 0,
    height: 88,
    from: { opacity: 0, x: 88, height: 0 },
  });

  const heroTitleChainThree = useRef()
  const trailThree = useTrail(itemsThree.length, {
    ref: heroTitleChainThree,
    config,
    opacity: 1,
    x: 0,
    height: 72,
    from: { opacity: 0, x: 0, height: 0 },
  });

  useChain([heroTitleChainOne, heroTitleChainTwo, heroTitleChainThree], [0.3, 0.3, 0.3])

  return <HeroWrapper>
            <Row>
                <Col xs={12} md={4}>
                    <HeroImgSlider />
                </Col>
                <Col xs={12} md={8}>
                    <HeroTitleWrapper>
                        <HeroTitle>
                            {trailOne.map(({ x, height, ...rest }, index) => (
                                <AnimatedHeroTitleSmallWrapper
                                key={itemsOne[index]}
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                    <AnimatedHeroTitleSmall style={{ height }}>{itemsOne[index]}</AnimatedHeroTitleSmall>
                                </AnimatedHeroTitleSmallWrapper>
                            ))}
                            <div>
                            {trailTwo.map(({ x, height, ...rest }, index) => (
                                <AnimatedHeroTitleWrapper
                                key={itemsTwo[index]}
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                    <AnimatedHeroTitle style={{ height }}>{itemsTwo[index]}</AnimatedHeroTitle>
                                </AnimatedHeroTitleWrapper>
                            ))}
                            </div>
                            {trailThree.map(({ x, height, ...rest }, index) => (
                                <AnimatedHeroTitleSmallWrapper
                                key={itemsThree[index]}
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                    <AnimatedHeroTitleSmall style={{ height }}>{itemsThree[index]}</AnimatedHeroTitleSmall>
                                </AnimatedHeroTitleSmallWrapper>
                            ))}
                        </HeroTitle>
                        
                        <SearchBar>
                        <InputWrapper>
                          <IconSearch xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19.8 19.1l-4.4-4.4c-.2-.2-.6-.2-.8 0-1.1 1-2.5 1.6-4 1.6-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6c0 .5-.1.9-.2 1.4-.1.3.1.6.4.7.3.1.6-.1.7-.4.1-.5.2-1.1.2-1.6 0-3.7-3-6.7-6.7-6.7S4 7 4 10.7s3 6.7 6.7 6.7c1.6 0 3.1-.6 4.4-1.6l4 4c.1.1.2.2.4.2.1 0 .3-.1.4-.2.2-.2.2-.5-.1-.7z"/></IconSearch>
                            <Input type="text" placeholder="Anywhere..."/>
                        </InputWrapper>
                        <Button>Search</Button>
                        </SearchBar>
                    </HeroTitleWrapper>
                </Col>
            </Row>
        </HeroWrapper>
}

export default HeroAnimation
