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

const CardContainer = styled.div`
margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: auto;
`

const CardWrapper = styled.div`
  position: relative;
  margin: 0 1rem;
  width: 176px;
  height: 232px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.19);
  text-align: center;
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
const Del = styled.del`
  font-weight: normal;
  font-size: 0.85rem
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
        <Grid>
          <Row>
            <CardContainer>
            {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <CardWrapper key={node.fields.slug}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <Image
                    fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                    alt="img"
                    style={{
                    }}
                    imgStyle={{
                    }}
                  />
                  <ImgCaption>
                    <CardTitle>{title}</CardTitle>
                    <dt>
                      <Del>{node.frontmatter.pricing}</Del> | {node.frontmatter.pricing}
                    </dt>
                  </ImgCaption>
                  
                  {/* <small>{node.frontmatter.date}</small> */}
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  /> */}
              </Link>
            </CardWrapper>
          )
        })}
        
        </CardContainer>
          </Row>
        </Grid>
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
            pricing
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
