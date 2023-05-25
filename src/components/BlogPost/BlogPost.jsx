import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from "../layout";

import './BlogPost.css';  // Assuming you save the CSS in BlogPost.css in the same directory

export const query = graphql`
  query($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      content {
        raw
      }
      image {
        gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const BlogPost = ({ data }) => {
    return (
        <Layout>

            <div className="blogPost-container">
                <h1 className="blogPost-title">{data.contentfulBlog.title}</h1>
                {data.contentfulBlog.image.map((img, index) => (
                    <GatsbyImage
                        key={index}
                        className="blogPost-image"
                        image={img.gatsbyImageData}
                        alt={data.contentfulBlog.title}
                    />
                ))}
                <div className="blogPost-content">
                    {documentToReactComponents(JSON.parse(data.contentfulBlog.content.raw))}
                </div>
            </div>
        </Layout>
    );
};

export default BlogPost;
