import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../redux/blog/actions";
import styled from "styled-components";
import { containerCommonStyle } from "./Form/styles";
import { Link } from "react-router-dom";
import { dimensions } from "../../helper";
// https://pt.squarespace.com/templates/clove-fluid-demo-pt

const Container = styled.section`
    ${containerCommonStyle}
    margin-top: 150px;
    column-count: 2;
    column-gap: 50px;

    @media (max-width: ${dimensions.md}) {
        column-count: 1;
    }
`;

const BlogPost = styled.div`
    break-inside: avoid;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 50px;

    h3,
    span,
    a {
        text-align: center;
        margin: auto;
        display: block;
    }

    .readmore {
        color: ${({ theme }) => theme.primary};
        text-decoration: underline;
    }

    h3 {
        font-size: 40px;
        font-weight: 300;
        line-height: 100%;
        margin: 30px auto;
    }

    img {
        width: 100%;
        margin-bottom: 30px;
        border-radius: 20px;
    }

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 30px;
    }
`;

function Blogs(props) {
    const { data, loading } = props;

    useEffect(() => {
        props.fetchBlogs();
    }, []);
    console.log(data);
    return (
        <Container>
            {data.map((post) => (
                <BlogPost>
                    <Link to={`/blogs/${post.id}`}>
                        {" "}
                        <img src={post.image} alt={post.title} />
                    </Link>
                    <span>
                        {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <Link to={`/blogs/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>

                    <Link className="readmore" to={`/blogs/${post.id}`}>
                        Read more
                    </Link>
                </BlogPost>
            ))}
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogs: (data) => dispatch(fetchBlogs(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.blog.loading,
        data: state.blog.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
