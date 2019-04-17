import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import styled from "styled-components"
// import Overdrive from 'react-overdrive'
import theme, { media } from "../utils/theme"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Overdrive from 'react-overdrive'


const BlogHero = styled.div`
  position: relative;
`
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  height: 100%;
  padding: 0 2rem;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Grid fluid style={{padding: `0`}}>
          <Row style={{padding: `0`, margin: `0`}}>
            <Col xs={12} md={8} style={{padding: `0`}}>
              <MainInfo>
                <Overdrive id="cardTitle">
                  <h1
                    style={{
                      ...scale(2),
                      display: `block`,
                      marginBottom: rhythm(1),
                      marginTop: rhythm(3),
                    }}
                  >{post.frontmatter.title}
                  </h1>
                </Overdrive>
                <Overdrive id="card*riceInfo">
                  <dt style={{
                  ...scale(1),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}>
                    <del style={{fontWeight: `normal`}}><small>{post.frontmatter.currency}</small>{post.frontmatter.originalPrice}</del> <span style={{fontWeight: `normal`}}>|</span> <small>{post.frontmatter.currency}</small>{post.frontmatter.finalPrice}
                  </dt>
                </Overdrive>
                  {/* <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                {post.frontmatter.date}
              </p> */}
              </MainInfo>
            </Col>
            <Col xs={12} md={4} style={{padding: `0`}}>
              <BlogHero>
                <Overdrive id="heroImg">
                  <Image
                    fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                    alt={post.frontmatter.title}
                    style={{
                      height: `100vh`,
                    }}
                    imgStyle={{
                    }}
                  />
                </Overdrive>
              </BlogHero>
              </Col>
              </Row>
              </Grid>
              <Grid>
              <Row>
                <Col xs={12} md={8}>
                  <div  style={{paddingTop: `4rem`}} dangerouslySetInnerHTML={{ __html: post.html }} />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <hr
                    style={{
                      marginBottom: rhythm(1),
                    }}
                  />
                  {/* <Bio /> */}

                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </Col>
            </Row>
          </Grid>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        days
        currency
        originalPrice
        finalPrice
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
