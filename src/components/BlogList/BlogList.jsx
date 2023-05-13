import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {GatsbyImage} from 'gatsby-plugin-image';
import '../BlogList/BlogList.css';

const BlogList = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        edges {
          node {
            id
            title
            content {
              raw
            }
            image {
              gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

    return (
        <div className="blog-list">
            {data.allContentfulBlog.edges.map(({node}) => {
                return (
                    <div key={node.id} className="blog-list__item">
                        <h2 className="blog-list__title">
                            <Link to={`/blog/${node.id}`}>{node.title}</Link>
                        </h2>
                        {node.image && node.image[0] && node.image[0].gatsbyImageData ? (
                            <div className="blog-list__image">
                                <GatsbyImage
                                    image={node.image[0].gatsbyImageData}
                                    alt={node.title}
                                    placeholder="blurred"
                                />
                            </div>
                        ) : <h1>NULL</h1>}
                    </div>
                );
            })}
        </div>
    );
};

export default BlogList;
