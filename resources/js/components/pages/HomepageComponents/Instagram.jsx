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

const ThreeItem = styled.div`
    width: 33%;
    height: auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;





const items = [
    { src: "instagram3.jpg" },
    { src: "instagram2.jpg" },
]

const items2 = [
    { src: "instagram7.jpg" },
    { src: "instagram1.jpg" },

]

const items3 = [
    { src: "instagram6.jpg" },
    { src: "instagram5.jpg" },
    { src: "instagram8.jpg" },
]


function Instagram({ text }) {
    return (
        <Container>
            <SectionTitle
                title={text.subtitle}
                subtitle={text.title} />

            <FlexContainer>
                {items.map((item, index) => (
                    <TwoItem key={index} width={index == 0 ? 70 : 30}>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </TwoItem>
                ))}

            </FlexContainer>

            <FlexContainer>
                {items3.map((item, index) => (
                    <ThreeItem key={index} width={index == 0 ? 70 : 30}>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </ThreeItem>
                ))}

            </FlexContainer>

            <FlexContainer>
                {items2.map((item, index) => (
                    <TwoItem key={index} width={index == 0 ? 30 : 70}>
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                    </TwoItem>
                ))}
            </FlexContainer>



        </Container>
    )
}

export default Instagram