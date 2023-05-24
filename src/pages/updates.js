import React from 'react';
import Layout from '../components/layout';
import BlogList from '../components/BlogList/BlogList';

const BlogPage = () => {
    return (
        <Layout>
            <h1>Masjid Updates:</h1>
            <BlogList />
        </Layout>
    );
};

export default BlogPage;


