import React from 'react'
import styled from 'styled-components'
import { maxWidth } from '../../../helper';
import SectionTitle from '../../common/SectionTitle'

const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    margin: 50px auto;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    max-width: ${maxWidth};

    div {
        padding: 10px;
        box-sizing: border-box;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    } 
`;

const FiveItem = styled.div`
    width: 20%;
    height: auto;
`;

const ThreeItem = styled.div`
    width: ${props => props.centerImage ? "60%" : "20%"};
    height: auto;
`;

const items2 = [
    { src: "instagram1.jpg", url: "https://www.instagram.com/p/CZkhqsQKliS/" },
    { src: "instagram2.jpg", url: "https://www.instagram.com/p/CZSTQ7AKY0T/" },
    { src: "instagram3.jpg", url: "https://www.instagram.com/p/CYB9Fq7KzdE/" },
    { src: "instagram4.jpg", url: "https://www.instagram.com/p/CYoiGbjKdFV/" },
    { src: "instagram5.jpg", url: "https://www.instagram.com/p/CX3jkZ8qZWC/" },
]

const items = [
    { src: "instagram6.jpg", centerImage: false },
    { src: "instagram7.jpg", centerImage: true },
    { src: "instagram8.jpg", centerImage: false },
]


function Instagram() {
    return (
        <section>
            <SectionTitle title={(<>Follow us on <span>Instagram</span></>)} subtitle="Socials" />

            <FlexContainer>
                {items.map((item) => (
                    <ThreeItem centerImage={item.centerImage}>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </ThreeItem>
                ))}
            </FlexContainer>

            <FlexContainer>
                {items2.map((item) => (
                    <FiveItem>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </FiveItem>
                ))}

            </FlexContainer>
        </section>
    )
}

export default Instagram