/**
 * HeroImgSlider component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import styled from "styled-components"
import theme, { media } from "../utils/theme"
import { useSpring, useTrail, useChain, animated } from 'react-spring'

const SliderWrapper =styled(animated.div)`
    position: relative;
`
const ImgCaption = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-start;
    padding: 1rem;
    height: 6rem;
    background: rgba(0,0,0,0.2);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
`
const SliderLink = styled.a`
    visibility: hidden;
    opacity: 0;
    display: block;
    color: #fff;
    font-size: 1rem;
    text-align: right;
    text-decoration: none;
    line-height: 1.5rem;
    transform: translateY(8px);
    transition: ${theme.motion.steadyFx};

    ${SliderWrapper}:hover & {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
    }
`
const Small = styled.span`
    display: block;
    color: rgba(255,255,255,0.5);
    font-size: 0.875rem;
`

function HeroImgSlider() {
    const SlideDownAnimation = useSpring({
        from: { left: '0%', top: '0%', width: '40%', height: '0%' },
        to: { left: '0%', top: '0%', width: '100%', height: '100%' },
      });

  return (
    <StaticQuery
      query={heroImgSliderQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
        <animated.div style={SlideDownAnimation}>
          <SliderWrapper>
            <Image
              fluid={data.heroImg.childImageSharp.fluid}
              alt="Image of The Sultan Ahmed Mosque at dawn"
              style={{
                height: `100vh`,
              }}
              imgStyle={{
              }}
            />
            <ImgCaption>
                <SliderLink href="#">
                    <Small>Find a package to</Small>
                    — Sultanahmet, Turkey
                </SliderLink>
            </ImgCaption>
          </SliderWrapper>
          </animated.div>
        )
      }}
    />
  )
}

const heroImgSliderQuery = graphql`
  query HeroImgSliderQuery {
    heroImg: file(absolutePath: { regex: "/fatih-yurur-687107-unsplash.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default HeroImgSlider
