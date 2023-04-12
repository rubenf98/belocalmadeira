import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';
import AnimationContainer from '../../common/AnimationContainer';

const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    max-width: ${maxWidth};
    margin: auto;
    padding: 100px 0px;
    box-sizing: border-box;
    align-items: center;
    flex-wrap: wrap;
`;

const Column = styled.div`
    box-sizing: border-box;
    width: 50%;
    padding: 0px 50px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 0px 0px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    order: ${props => props.reverseOrder ? 2 : 1};
    position: relative;

    video {
        width: 100%;
        height: auto;
        max-height: 700px;
        object-fit: cover;
        

        @media (max-width: ${dimensions.md}) {
            margin: auto;
            display: block;
        }
        
    }


    .full-width-video {
        border-right: 1px solid lightgray;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    margin-bottom: 50px;
    margin-top: 100px;

    

    h2 {
        font-size: 40px;
        font-weight: bold;
        font-family: 'Playfair Display', serif;
        line-height: 47px;
        
    }

    p {
        font-size: 16px;
        font-family: 'Playfair Display', serif;
        margin-bottom: 5px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;
        margin-top: 50px;

        h2 {
            font-size: 24px;
            line-height: 30px;
        }

        p {
            font-size: 14px;
        }
    }
`;

const Overlay = styled.div`
  z-index: 5;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, #000 0%, #38383830 100%);
  opacity: 0.2;
`;


function About({ text }) {
    const themeContext = useContext(ThemeContext);

    const Section = ({ video, thumbnail, title, descriptions }) => (
        <>
            <InfoContainer lightText={themeContext.lightText}>
                <AnimationContainer animateIn="fadeInRight">
                    <h2>{text.titles[title]}</h2>
                    {descriptions.map((index) => (
                        <p key={index}>{text.description[index]}</p>
                    ))}


                </AnimationContainer>
            </InfoContainer>
            <ImageContainer>
                <Overlay />
                <video preload='metadata' playsInline poster={"/image/homepage/" + thumbnail + ".jpg"} muted loop autoPlay controls={false}>
                    <source src={"/image/homepage/" + video + ".mp4"} type="video/mp4" />
                    <source src={"/image/homepage/" + video + ".webm"} type="video/webm" />
                    {text.videoError}
                </video>
            </ImageContainer>
        </>
    )

    return (
        <Container id="homepage-about-container">
            <Column >

                <Section
                    video="mobile_header"
                    thumbnail="timelapse_thumbnail"
                    title={0}
                    descriptions={[0]}
                />
                <Section
                    video="walking"
                    thumbnail="about_thumbnail"
                    title={2}
                    descriptions={[2]}
                />

            </Column>
            <Column className='last-section'>
                <Section
                    video="timelapse"
                    thumbnail="timelapse_thumbnail"
                    title={1}
                    descriptions={[1]}
                />
            </Column>


            <br />
        </Container>
    )
}

export default About