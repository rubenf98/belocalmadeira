import React from 'react'
import styled, { withTheme } from 'styled-components'
import { dimensions, maxWidth } from '../../helper';
import SectionTitle from './SectionTitle';
import { handleForm } from "../../redux/application/actions";
import { Row } from 'antd'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const IntroContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    max-width: ${maxWidth};
    justify-content: space-around;
    align-items: flex-start;

    

    div {
        width: 50%;
        padding: 10px;
        box-sizing: border-box;

        .main-image {
            width: 70%;
            height: auto;
            margin: auto;
            display: block;
        }

        p   {
            width: 90%;
        }

        h2 {
            text-transform: uppercase;
            font-size: 16px;
        }

        h3 {
            font-size: 60px;
            line-height: 60px;
            font-family: 'Playfair Display', serif;
            margin-bottom: 50px;

            span {
                font-weight: bold;
                font-family: 'Merienda One', cursive;;
            }
        }

        p {
            font-size: 18px;
            font-weight: 300;
        }
    } 

    @media (max-width: ${dimensions.md}) {
        div {
            width: 100%;

            &:nth-child(2) {
                order: 1;
            }

            &:nth-child(1) {
                order: 2;
            }

            .main-image {
                width: 100%;
            }

            h2, h3 {
                text-align: center;
            }

            p {
                text-align: center;
                margin: 30px auto;

                &:nth-child(3) {
                    display: none;
                }
            }
        }
    }
`;

const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    max-width: ${maxWidth};
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 200px;

    div {
        width: 33%;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }

        img {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    } 
`;

const DetailsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 100px auto;
    max-width: ${maxWidth};
    justify-content: space-around;
    align-items: flex-start;

    div {
        width: 33%;
        padding: 0px 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            &:first-child {
                width: 100%;
            }

            &:nth-child(2), &:nth-child(3) {
                width: 50%;
            }
            span {
                display: none;
            }
        }

        @media (max-width: ${dimensions.sm}) {
            &:nth-child(2), &:nth-child(3) {
                width: 100%;
            }
        }

        h4 {
            width: 80%;
            font-size: 30px;

            @media (max-width: ${dimensions.md}) {
                width: 100%;
            }
        }
    } 
`;

const StepsContainer = styled.div`
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    max-width: ${maxWidth};
    width: 100%;
    margin: 50px auto 0px auto;
`;

const Step = styled.div`
    width: 33%;
    padding: 50px 15px;
    box-sizing: border-box;
   
    .content {
        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25); 
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .step-header {
        position: relative;
        //background-color: rgba(0,0,0,.2);
        background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0) 30%);

        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            z-index: -2;
            position: relative;

            @media (max-width: ${dimensions.md}) {
                max-height: 500px;
            }
        }

        p {
            z-index: 2;
            position: absolute;
            bottom: 0px;
            left: 15px;
            font-size: 18px;
            font-weight: bold;
            color: white;
        }
    }

    .step-content {
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 1;

        p {
            font-size: 16px;
            font-weight: 300;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }

        .title {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 20px;

            h3, .price {
                font-size: clamp(22px, 3vw, 32px);
                font-weight: bold;
                margin: 0px;
                line-height: 100%;

                span {
                    font-size: 18px;
                }
            }

            h3 {
                font-style: italic;
            }
        }

        
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;
        width: 50%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin: 30px 0px;
    }

    

    

    h4, h5 {
        margin: 0px;
        
    }

    

    h5 {
        font-size: 22px;
        font-weight: 300;
        letter-spacing: -0.06px;

        @media (max-width: ${dimensions.md}) {
            font-size: 20px;
        }
    }

    

    

`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${props => props.background};
    border: ${props => "1px solid " + props.border};
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    transition: .4s;
    border-radius: 4px;
    background-size: 110%;
    text-transform: capitalize;
    color: ${props => props.color};
    font-weight: bold;
    margin-top: 10px;
    min-width: 100px;
    text-transform: uppercase;

    &:hover {
        background: ${props => props.backgroundHover};
    } 
`;

function Activity({ content, theme, handleForm }) {
    return (
        <div>
            <IntroContainer>
                <div>
                    <img
                        className='main-image'
                        src={"/image/activities/" + content.images[0]}
                        alt="canyoning"
                        loading='eager'
                    />
                </div>
                <div>
                    <h2>{content.title}</h2>
                    <h3>{content.subtitle}</h3>
                    {content.info.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </IntroContainer>
            {!content.levels &&
                <DetailsContainer>
                    <div>
                        <h4>{content.section}</h4>

                    </div>
                    <div>
                        <h2>Includes</h2>

                        <ul>
                            {content.includes.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>{content.activities.title}</h2>

                        <ul>
                            {content.activities.items.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                </DetailsContainer>
            }
            {content.levels &&
                <>
                    <SectionTitle title={content.levels.subtitle} subtitle={content.levels.title} />

                    <StepsContainer>

                        {content.levels.items.map((level, index) => (
                            <Step key={"level-" + index}>
                                <div className='content'>

                                    <div className='step-header'>
                                        <img src={"/image/activities/levels/" + level.images[0] + ".jpg"} />
                                        <p>{level.title}</p>
                                    </div>

                                    <div className='step-content'>
                                        <div className='title'>
                                            <h3>{level.subtitle}</h3>
                                            <div className='price'>{level.price}<span>/p</span></div>
                                        </div>


                                        {level.paragraphs.map((paragraph, pIndex) => (
                                            <p style={{ flex: 1 }} key={"paragraph-" + index + pIndex}>{paragraph}</p>
                                        ))}

                                        <Row type="flex" align='bottom' justify='space-between'>
                                            <OrderButton
                                                onClick={() => handleForm(true, { activity_id: [1, level.index] })}
                                                color={theme.inverseText}
                                                border={theme.primary}
                                                background={theme.primary}
                                                backgroundHover={theme.primaryHover}>
                                                {localStorage.getItem('language') == "en" ? "Book now" : "Reservar"}
                                            </OrderButton>
                                            {level.visible ?
                                                <Link to={"/activities/canyoning/" + index}>
                                                    <OrderButton
                                                        marginLeft
                                                        color={theme.primary}
                                                        border={theme.primary}
                                                        background={theme.inverseText}
                                                        backgroundHover={theme.inverseText}>
                                                        {localStorage.getItem('language') == "en" ? "See more" : "Saber mais"}
                                                    </OrderButton>
                                                </Link> : <div></div>
                                            }

                                        </Row>
                                    </div>
                                </div>
                            </Step>
                        ))}

                    </StepsContainer>

                </>

            }


            <SectionTitle title={content.gallery.title} subtitle={content.gallery.subtitle} />

            <Gallery>
                {content.gallery.images.map((column) => (
                    <div>
                        {column.map((image, index) => (
                            <picture key={index}>
                                <source srcSet={"/image/activities/gallery/" + image + ".jpg"} type="image/jpg" />
                                <img alt="gallery image" className='profile' src={"/image/activities/gallery/" + image + ".webp"} loading="lazy" />
                            </picture>

                        ))}
                    </div>
                ))}
            </Gallery>

        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility, activity) => dispatch(handleForm(visibility, activity)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withTheme(Activity));