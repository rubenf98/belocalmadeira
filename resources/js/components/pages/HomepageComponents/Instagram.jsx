import React from 'react'
import styled from 'styled-components'
import { maxWidth } from '../../../helper';
import SectionTitle from '../../common/SectionTitle'

const Container = styled.section`
    margin-bottom: 200px;
`;

const FlexContainer = styled.div`
    display: flex;
    max-width: ${maxWidth};
    margin: auto;

    div {
        padding: 10px;
        box-sizing: border-box;

      
    } 
`;

const VerticalFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    width: 30%;
    
    img {
        height: 50% !important;
        width: 100%;

        &:nth-child(1) {
            padding-bottom: 20px;
            box-sizing: border-box;
        }
    }
    
`;

const TwoItem = styled.div`
    width: ${props => props.width + "%"};
    height: auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const LinkContainer = styled.a`
    display: inline;
    position: relative;
    margin-left: 15px;
    color: black;

    &:hover {
        color: black;
    }
`;

const Link = styled.img`
    position: absolute;
    bottom: -25px;
    right: -30px;
    height: 35px;
    width: auto;
    
`;


const items = [
    { src: "instagram1.jpg" },
    { src: "instagram2.jpg" },
]

const items2 = [
    { src: "instagram3.jpg" },
    { src: "instagram4.jpg" },
    { src: "instagram5.jpg" },
]

const items3 = [
    { src: "instagram6.jpg" },
    { src: "instagram7.jpg" },
]


function Instagram() {
    return (
        <Container>
            <SectionTitle
                title={(
                    <>Follow us on
                        <LinkContainer href="https://www.instagram.com/belocalmadeira/" target="_blank">
                            <span>Instagram</span>
                            <Link src='/image/homepage/instagram_arrow.svg' />
                        </LinkContainer>
                    </>)}
                subtitle="Socials" />

            <FlexContainer>
                {items.map((item, index) => (
                    <TwoItem key={index} width={index == 0 ? 70 : 30}>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </TwoItem>
                ))}

            </FlexContainer>

            <FlexContainer>
                <TwoItem width={70}>
                    <img className='instagram-post' src={"/image/homepage/" + items2[0].src} alt="instagram post" />
                </TwoItem>
                <VerticalFlexContainer>
                    <img src={"/image/homepage/" + items2[1].src} alt="instagram post" />
                    <img src={"/image/homepage/" + items2[2].src} alt="instagram post" />
                </VerticalFlexContainer>


            </FlexContainer>

            <FlexContainer>
                {items3.map((item, index) => (
                    <TwoItem key={index} width={index == 0 ? 70 : 30}>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </TwoItem>
                ))}

            </FlexContainer>

        </Container>
    )
}

export default Instagram