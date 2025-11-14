import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBlog } from "../../redux/blog/actions";
import styled from "styled-components";
import { containerCommonStyle } from "./Form/styles";
import { Link, useParams } from "react-router-dom";

const Container = styled.section`
    ${containerCommonStyle}
    margin-top: 150px;
`;

const Content = styled.section`
    max-width: 720px;
    margin: auto;

    .header {
        h2 {
            font-size: 60px;
            font-weight: 300;
            line-height: 100%;
        }
        p {
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 18px;
            line-height: 150%;
        }
        img {
            width: 100%;
            border-radius: 20px;
        }
    }

    .body {
        margin: 50px 0px;
        font-weight: 300;
        font-size: clamp(16px, 2vw, 18px);
        text-align: justify;
    }
`;

const OtherPosts = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

    a {
        color: black;
        font-size: clamp(16px, 3vw, 24px);
        font-weight: 300;
    }

    .link {
        max-width: 50%;
    }
`;

function Blog(props) {
    const { current, loading } = props;
    var { id } = useParams();

    useEffect(() => {
        props.fetchBlog(id);
    }, [id]);

    return (
        <Container>
            <Content>
                <div className="header">
                    <h2>{current.title}</h2>

                    <p>{new Date(current.created_at).toLocaleDateString()}</p>
                    <img src={current.image} alt="" />
                </div>

                <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: current.body }}
                />
            </Content>
            <OtherPosts>
                <div className="link">
                    {current.previous && (
                        <Link to={`/blogs/${current.previous.id}`}>
                            &larr; {current.previous.title}
                        </Link>
                    )}
                </div>
                <div className="link">
                    {current.next && (
                        <Link to={`/blogs/${current.next.id}`}>
                            {current.next.title} &rarr;
                        </Link>
                    )}
                </div>
            </OtherPosts>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlog: (id) => dispatch(fetchBlog(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.blog.loading,
        current: state.blog.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
