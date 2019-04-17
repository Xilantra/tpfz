import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { scale, rhythm } from "../utils/typography"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import {useTrail, animated} from 'react-spring'
import HeroAnimation from "../components/heroTitle"
import theme, { media } from "../utils/theme"

const StyledGrid = styled(Grid)`
  padding: 0;
  ${media.md`
    padding: 2rem;
  `}
`
const CardContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow-x: auto;

  ${media.md`
    overflow-x: unset;
  `}
`
const CardScroller = styled.div`
  padding: 0 2rem;
  width: 1380px;
  ${media.md`
    padding: unset;
    width: unset;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `}
`

const CardWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.5rem 1rem;
  width: 176px;
  height: 232px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.19);
  text-align: center;
  transition: all .25s ease-in-out;

  &:hover {
    transform: scale(1.1) ;
  }

  ${media.md`
    margin: 0.5rem;    
`}

  a {
    color: #fff;
    font-size: 1rem;
  }
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
    padding: 0 0 0.5rem;
    height: 6rem;
    background: rgba(0,0,0,0.2);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
`
const CardTitle = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`
const TopInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.25rem 0.5rem 0.5rem;
  height: 3rem;
  text-align: right;
`
const TopInfoText = styled.span`
  font-weight: normal;
  font-size: 0.85rem;
  text-shadow: 0 2px 2px rgba(0,0,0,0.2);;
`
const Del = styled.del`
  font-weight: normal;
  font-size: 0.85rem;
  opacity: 0.8;
`
const SectionTitle = styled.p`
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  padding: 0 2rem;
  font-size: 24px;
  font-weight: bold;

  ${media.md`
    padding: 0 1rem;
  `}

  small {
    display: block;
    font-weight: normal;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Muslim Friendly Tour"
          keywords={[`muslim`, `trip`, `tpfz`, `muslim-friendly tour`]}
        />
        <HeroAnimation />
        {/* <Bio /> */}
        <StyledGrid>
          <Row>
            <SectionTitle><small>Most Popular</small>Ground Packages</SectionTitle>
            <CardContainer>
              <CardScroller>
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <CardWrapper key={node.fields.slug}>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      <Image
                        fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                        alt={title}
                        style={{
                        }}
                        imgStyle={{
                        }}
                      />
                      <TopInfo>
                        <TopInfoText>{node.frontmatter.days}</TopInfoText>
                      </TopInfo>
                      <ImgCaption>
                        <CardTitle>{title}</CardTitle>
                        <dt>
                          <Del><small>{node.frontmatter.currency}</small>{node.frontmatter.originalPrice}</Del> <span style={{fontWeight: `normal`}}>|</span> <small>{node.frontmatter.currency}</small>{node.frontmatter.finalPrice}
                        </dt>
                      </ImgCaption>
                      
                      {/* <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      /> */}
                  </Link>
                </CardWrapper>
              )
            })}
          </CardScroller>
        </CardContainer>
          </Row>
        </StyledGrid>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            days
            currency
            originalPrice
            finalPrice
            featuredImage {
              childImageSharp {
                fixed(width: 176, height: 232) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
