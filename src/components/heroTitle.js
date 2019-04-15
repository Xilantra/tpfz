import React, { useRef } from "react"
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled, {keyframes} from "styled-components"
import { useSpring, useTrail, useChain, animated } from 'react-spring'
// import Overdrive from 'react-overdrive'
import { media } from "../utils/theme"
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

  ${media.md`
    padding: 1rem;
  `}
`
const HeroTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;

  ${media.md`
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
    height: 88px;
`
const AnimatedHeroTitle = styled(animated.div)`
  padding-right: 2rem;
    overflow: hidden;
`

  
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  animation: ${fadeIn} 2s linear;
  
  ${media.md`
    width: 504px;
  `}
`
const InputWrapper = styled.div`
 height: 44px;
  border-radius: 4px 0 0 4px;
  background-color: #EADECA;
`
const IconSearch = styled.div``
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
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
                            <IconSearch></IconSearch>
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
