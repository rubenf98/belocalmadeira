import React from 'react'
import styled from 'styled-components'
import { dimensions, maxWidth } from '../../helper';
import SectionTitle from './SectionTitle';

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
                font-family: 'Merienda One', cursive;
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

function Activity({ content }) {
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

            <SectionTitle title={content.gallery.title} subtitle={content.gallery.subtitle} />

            <Gallery>
                {content.gallery.images.map((column) => (
                    <div>
                        {column.map((image, index) => (
                            <picture key={index}>
                                <source srcSet={"/image/activities/gallery/" + image + ".jpg"} type="image/jpg" />
                                <img alt="canyoning" className='profile' src={"/image/activities/gallery/" + image + ".webp"} loading="lazy" />
                            </picture>

                        ))}
                    </div>
                ))}
            </Gallery>

        </div>
    )
}

export default Activity