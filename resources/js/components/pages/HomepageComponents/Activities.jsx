import React, { useContext } from 'react'
import SectionTitle from '../../common/SectionTitle'
import styled, { ThemeContext } from "styled-components";
import { dimensions } from '../../../helper';
import { Link } from 'react-router-dom';

const Container = styled.section`
    width: 100%;
    padding: 100px 0px;
    box-sizing: border-box;
`;

const ActivitiesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 2600px;
    margin: auto;

    h4 {
        color: ${props => props.titleColor};
    }
`;

const ActivityContainer = styled(Link)`
    width: 25%;
    padding: 30px;
    box-sizing: border-box;

    &:hover {
        .image-container {
            box-shadow: 0px 0px 15px 0px rgba(0,0,0,.3);
            scale: 1.01;
        }
        
    }
    @media (max-width: ${dimensions.lg}){
        width: 50%;
        margin-top: 0px !important;
    }

    @media (max-width: ${dimensions.md}){
        padding: 10px;
    }

    .image-container {
        position: relative;
        height: 0px;
        padding-top: 150%;
        background: ${props => "url(" + props.background + ")"};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all .3s ease;
        


        .overlay {
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
            position: absolute;
            top: 0px;bottom: 0px; left: 0px; right: 0px;
        }

        h4 {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translate(-50%, 0);
            text-transform: capitalize;
            font-size: 36px;

            @media (max-width: ${dimensions.md}){
                font-size: 28px;
            }
        }

        
    }
`;

const Activity = ({ title, spacingTop = false, code }) => {
    return (
        <ActivityContainer
            to={"/activities/" + code}
            background={"/image/homepage/" + code + ".jpg"}
            style={{ marginTop: spacingTop ? "50px" : "0px" }}
        >
            <div className='image-container'>
                <div className='overlay' />
                <h4>{title}</h4>
            </div>
        </ActivityContainer>
    )

}

function Activities({ text, showTitle = true }) {
    const themeContext = useContext(ThemeContext);

    return (
        <Container id="activities">
            {
                showTitle && <SectionTitle title={text.subtitle} subtitle={text.title} />
            }

            <ActivitiesContainer titleColor={themeContext.inverseText}>
                <Activity
                    title={text.items[0]}
                    code="canyoning"
                />
                <Activity
                    title={text.items[1]}
                    spacingTop
                    code="biking"
                />
                <Activity
                    title={text.items[2]}
                    code="coasteering"
                />
                <Activity
                    title={text.items[3]}
                    spacingTop
                    code="hiking"
                />
            </ActivitiesContainer>
        </Container>
    )
}

export default Activities