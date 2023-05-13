const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/components/BlogPost/BlogPost.jsx`); // point to the template file

  const result = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog post pages.
  result.data.allContentfulBlog.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.id}`,
      component: blogPostTemplate,
      context: {
        id: edge.node.id,
      },
    });
  });
};
