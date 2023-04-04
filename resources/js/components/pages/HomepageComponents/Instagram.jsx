import React from 'react'
import styled, { keyframes } from 'styled-components'
import { dimensions, maxWidth } from '../../../helper';
import AnimationContainer from '../../common/AnimationContainer';
import SectionTitle from '../../common/SectionTitle'


const showImage = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;


const Container = styled.section`
    margin-bottom: 200px;
`;

const FlexContainer = styled.div`
    display: flex;
    max-width: ${maxWidth};
    margin: auto;
    flex-wrap: wrap;
`;



const Item = styled.div`
    width: ${props => props.width + "%"};
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;

    &:hover {
        .instagram-logo {
            display: block;
        }

        .overlay {
            opacity: .5;
        }

    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    .fadeIn {
        animation: ${showImage} .8s ease-in-out forwards;
        height: 500px;
        width: 100%; 
        padding: 0px;
        
        
        @media (max-width: ${dimensions.md}) {
            height: ${props => props.height + "px"};
        }
    }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        

        @media (max-width: ${dimensions.md}) {
            object-fit: none;
        }
    }

    .overlay {
        background: black;
        opacity: 0;
        position: absolute;
        top: 10px;bottom: 10px; left: 10px; right: 10px;
        transition: opacity .3s ease;
    }

    .instagram-logo {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: none;
        z-index: 5;
    }
`;





const items = [
    { src: "01", width: 30, height: 500 },
    { src: "02", width: 70, height: 600 },
    { src: "03", width: 33, height: 400 },
    { src: "04", width: 33, height: 750 },
    { src: "24", width: 33, height: 500 },
    { src: "06", width: 70, height: 400 },
    { src: "08", width: 30, height: 500 },
    { src: "07", width: 60, height: 600 },
    { src: "09", width: 40, height: 650 },
    { src: "10", width: 70, height: 300 },
    { src: "11", width: 30, height: 700 },
    { src: "12", width: 30, height: 500 },
    { src: "13", width: 70, height: 300 },
    { src: "17", width: 70, height: 600 },
    { src: "15", width: 30, height: 600 },
    { src: "16", width: 30, height: 300 },
    { src: "14", width: 70, height: 500 },
    { src: "18", width: 80, height: 450 },
    { src: "20", width: 20, height: 600 },
    { src: "25", width: 60, height: 500 },
    { src: "21", width: 40, height: 300 },
    { src: "22", width: 33, height: 700 },
    { src: "23", width: 33, height: 550 },
    { src: "05", width: 33, height: 600 },
    { src: "19", width: 100, height: 600 },
]


function Instagram({ text }) {
    return (
        <Container>
            <SectionTitle
                title={text.subtitle}
                subtitle={text.title} />

            <FlexContainer>
                {items.map((item, index) => (

                    <Item key={index} width={item.width} height={item.height}>
                        <AnimationContainer animateIn="fadeIn">
                            <a href="https://www.instagram.com/belocalmadeira/" target="_blank" rel="noreferrer">
                                <picture loading='lazy'>
                                    <source srcSet={"/image/instagram/" + item.src + ".jpg"} />

                                    <img
                                        className='instagram-post' src={"/image/homepage/instagram/" + item.src + ".webp"}
                                        alt="instagram post"
                                        loading='lazy'
                                    />
                                </picture>
                                <img className='instagram-logo' src="/icon/instagram.png" alt="" />
                                <div className='overlay' />
                            </a>
                        </AnimationContainer>
                    </Item>
                ))}

            </FlexContainer>


        </Container>
    )
}

export default Instagram