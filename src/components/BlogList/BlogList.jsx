import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
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
              gatsbyImageData(width: 400, height: 400, layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

    return (
        <div className="container">
        <div className="blog-list">
            {data.allContentfulBlog.edges.map(({node}) => {
                return (
                    <Link className="links" to={`/blog/${node.id}`}>
                            <div key={node.id} className="blog-list__item">
                                {node.image && node.image[0] && node.image[0].gatsbyImageData ? (
                                    <div className="blog-list__image">
                                        <GatsbyImage
                                            className="image"
                                            image={node.image[0].gatsbyImageData}
                                            alt={node.title}
                                            placeholder="blurred"
                                        />
                                    </div>
                                ) : <h1>NULL</h1>}
                                <h2 className="blog-list__title">
                                    {node.title}
                                </h2>
                            </div>
                    </Link>
                );
            })}
        </div>

        </div>
    );
};

export default BlogList;
