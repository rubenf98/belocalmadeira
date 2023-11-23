import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import PageHeader from '../../common/PageHeader';
import styled from 'styled-components'
import { dimensions, maxWidth } from '../../../helper';
import { Calendar, Col, Form, Input, Row } from 'antd';
import { connect } from "react-redux";
import { fetchDisabledDates } from "../../../redux/reservation/actions";
import { handleForm } from "../../../redux/application/actions";
import SimplifiedFaq from '../HomepageComponents/SimplifiedFaq';
import { CustomInput, CustomInputNumber, CustomPhoneSelect } from '../Form/styles';
import moment from "moment";



const Container = styled.div`
    max-width: calc(${maxWidth} - 200px);
    width: 100%;
    margin: auto;
    padding: 0px 20px 50px 20px;
    box-sizing: border-box;

    h3 {
        font-size: clamp(28px, 3vw, 36px);
        font-family: 'Playfair Display', serif;
        font-weight: bold;
    }
    
    @media (max-width: ${dimensions.md}) {
        padding: 0px 0px 50px 0px;
    }
`;

const DetailsContainer = styled(Row)`
    width: 100%;
    margin-bottom: 50px;

    h4 {
        text-transform: uppercase;
        margin-bottom: 0px;
    }

    p {
        opacity: .7;
        margin: 0px 0px 10px 0px;
    }
`;

const ParagraphContainer = styled.div`
    margin: 50px 0px;
    width: 100%;
    margin: auto;

    h2 {
        font-size: 40px;
        
    }

    p {
        font-size: 16px;
        opacity: .7;
    }
`;

const Content = styled.div`
    margin: auto;
    display: flex;
    align-items: flex-start;

    @media (max-width: ${dimensions.md}) {
        box-sizing: border-box;
        padding: 0px 20px;
        flex-wrap: wrap;
    }
`;

const FormContainer = styled.div`
    width: 40%;
    padding-left: 15px;
    box-sizing: border-box;
    
    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    .price-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0px;
        box-sizing: border-box;
        color: white;
        background-color: ${({ theme }) => theme.primary};

        span {
            font-size: clamp(24px, 2.5vw, 50px);
            margin-left: 5px;
        }
    }

    .form {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 20px;
        box-sizing: border-box;
    }
    
`;


const InfoContainer = styled.div`
    width: 60%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;



const ImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 100px;

    .m1 {
        width: 60%;
        height: 100%;
        object-fit: cover;
    }

    .vertical-container {
        width: 40%;
        display: flex;
        justify-content: space-between;
        gap: 30px;

        img {
            width: 50%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    padding: 20px 30px;
    transition: .4s;
    border-radius: 4px;
    background-size: 110%;
    text-transform: capitalize;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
`;

function Level({ handleForm, fetchDisabledDates, calendarMetadata, loading }) {
    // const [form, setForm] = useState({ name: undefined, email: undefined, phone: undefined, address: undefined, participants: undefined, date: undefined })

    var { index } = useParams();
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/activityCanyoning");
    // const faqText = require('../../../assets/' + localStorage.getItem('language') + "/homepage");
    const [form] = Form.useForm();
    useEffect(() => {
        fetchDisabledDates();
    }, []);


    useEffect(() => {
        var init = moment().add(1, 'days');
        var condition = true;
        while (condition) {
            if (!calendarMetadata.disabled.includes(moment(init).format("YYYY-MM-DD"))) {
                condition = false;
            } else {
                init.add(1, 'days');
            }
        }

        form.setFieldsValue({ date: init });


    }, [calendarMetadata])



    const onPanelChange = (value, mode) => {
        form.setFieldsValue({ date: value });
    };

    const handleSubmit = () => {
        form.validateFields().then((data) => {
            handleForm(true, { activity: [1, text.levels.items[index].index], ...data });
        })
    };

    return (
        <div>
            <PageHeader title={"Canyoning - " + text.levels.items[index].subtitle} subtitle={text.levels.subtitle} />
            <Container>
                <h2>{text.levels.items[index].subtitle}</h2>
                <ImageContainer>
                    <img className='m1' src={"/image/activities/levels/" + text.levels.items[index].images[0] + ".jpg"} />
                    <div className='vertical-container'>
                        <img className='v1' src={"/image/activities/levels/" + text.levels.items[index].images[1] + ".jpg"} />
                        <img className='v2' src={"/image/activities/levels/" + text.levels.items[index].images[2] + ".jpg"} />
                    </div>
                </ImageContainer>


                <Content>
                    <InfoContainer>

                        <h3>{text.levels.titles[0]}</h3>
                        <DetailsContainer type="flex" justify='space-between'>
                            {text.levels.details.items[index].map((detail, detailIndex) => (
                                <Col xs={12} md={12}>
                                    <h4>{text.levels.details.titles[detailIndex]}</h4>
                                    {detailIndex == 4 ? <a href='https://maps.app.goo.gl/QGif4UZZpUGJGnph7' target='__blank'>{detail}</a> : <p>{detail}</p>}


                                </Col>
                            ))}
                        </DetailsContainer>

                        <h3>{text.levels.titles[1]}</h3>
                        <ParagraphContainer>

                            <p>{text.levels.descriptions[index]}</p>
                            <p>{text.levels.items[index].paragraphs[0]}</p>

                            {text.levels.summary[index].map((summaryItem) => (
                                <p>{summaryItem}</p>
                            ))}
                        </ParagraphContainer>


                        {/* <SimplifiedFaq hasBackground={false} text={faqText.text.faq} /> */}

                    </InfoContainer>
                    <FormContainer xs={24} md={10}>
                        <div className='price-container'>
                            from <span>60€</span>
                        </div>
                        <div className='form'>
                            <Form
                                name="basic"
                                layout='vertical'
                                form={form}
                            >
                                <Row gutter={16}>

                                    <Col xs={24} md={24}>
                                        <Form.Item
                                            label={text.form.name.label}
                                            name="name"
                                        >
                                            <CustomInput
                                                light
                                                size='large'
                                                placeholder={text.form.name.placeholder}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={24}>
                                        <Form.Item
                                            label={text.form.email.label}
                                            name="email"
                                        >
                                            <CustomInput light size='large' placeholder={text.form.email.placeholder} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={text.form.phone.label}
                                            name="phone"
                                        >
                                            <CustomInputNumber
                                                light
                                                size="large"
                                                placeholder={text.form.phone.placeholder}
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={text.form.participants.label}
                                            name="participants"
                                        >
                                            <CustomInputNumber light max={15} min={1} controls={false} size='large' placeholder={text.form.participants.placeholder} />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={24}>
                                        <Form.Item
                                            label={text.form.address.label}
                                            name="address"
                                        >
                                            <CustomInput light size='large' placeholder={text.form.address.placeholder} />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={24}>
                                        <Form.Item
                                            name="date"
                                        >
                                            <Input style={{ display: "none" }} />
                                        </Form.Item>
                                    </Col>

                                    <br />

                                    <Col xs={24} md={24}>
                                        <Calendar
                                            disabledDate={(currentDate) => {
                                                return currentDate && (
                                                    (currentDate < moment())
                                                    || (calendarMetadata.disabled.includes(moment(currentDate).format("YYYY-MM-DD"))));
                                            }}
                                            fullscreen={false}
                                            onPanelChange={onPanelChange}
                                        />
                                        {/* <CustomInput size='large' placeholder="{text.form.address.placeholder}" /> */}
                                    </Col>

                                    <Col xs={24} md={24}>
                                        <OrderButton
                                            onClick={handleSubmit}
                                        >
                                            {localStorage.getItem('language') == "en" ? "Book now" : "Reservar já"}
                                        </OrderButton>
                                    </Col>

                                </Row>
                            </Form>
                        </div>

                    </FormContainer>
                </Content>

            </Container>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility, activity) => dispatch(handleForm(visibility, activity)),
        fetchDisabledDates: (participants) => dispatch(fetchDisabledDates(participants)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Level);