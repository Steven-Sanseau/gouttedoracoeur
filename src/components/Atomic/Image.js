import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

function renderImage(file) {
  console.log(file)
  if (!file) return

  return <Img fluid={file.node.childImageSharp.fluid} />
}

const Image = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { extension: { eq: "jpg" } }) {
            edges {
              node {
                extension
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === props.src)
        )
      }
    />
  )
}

export default Image
