import React from 'react';
import { graphql } from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';

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
        <div>
            <h1>{data.contentfulBlog.title}</h1>
            {data.contentfulBlog.image.map((img, index) => (
                <GatsbyImage
                    key={index}
                    image={img.gatsbyImageData}
                    alt={data.contentfulBlog.title}
                />
            ))}
            <div>
                {documentToReactComponents(JSON.parse(data.contentfulBlog.content.raw))}
            </div>
        </div>
    );
};

export default BlogPost;
