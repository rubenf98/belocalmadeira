import React from "react";
import PageHeader from "./PageHeader";
import styled from "styled-components";
import { maxWidth } from "../../helper";

const InfoContainer = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: 0px auto 50px auto;
    padding: 0 20px;
    box-sizing: border-box;
`;

function Terms() {
    return (
        <div>
            <PageHeader title="Terms and Conditions" subtitle="" />

            <InfoContainer>
                <h2>LEGAL NOTICE:</h2>
                <p>
                    Be Local Madeira is committed to provide services within the
                    legal framework of the current regulations of Tourism and
                    Active Tourism.
                </p>
                <h3>Data of the Data Controller </h3>
                <p>
                    Identity:Sociedade BE LOCAL MADEIRA, UNIPESSOAL NIPC - RNAAT
                    - 1093/2024, NIF: PT518321142, Postal Address: Avenida da
                    Madalena 100 - Edifício Madalenas Palace Bloco D 2 AC -
                    9020-330, TLF: +351 935124260, E-mail:
                    BeLocalMadeira@Gmail.com
                </p>
                <h3>What is included in the tours?</h3>
                <ul>
                    <li>Full Experience</li>
                    <li>
                        Safety Insurance (According to Portuguese legislation)
                    </li>
                    <li>Free Photos and Videos of the Activity</li>
                    <li>
                        All the gear (Certified Technical Gear: Neoprene suit;
                        Canyoning Shoes; Neoprene socks; Helmet; Harness and
                        lifejacket if necessary)
                    </li>
                    <li>Certified Guides</li>
                    <li>Snack (Chocolate)</li>
                    <li>
                        Transfer from/to Hotel Funchal (other areas on request,
                        an extra charge may apply)
                    </li>
                    <li>
                        In case you don’t need a pickup, you can get a 10%
                        Discount. (We send the coordinates from the place to go
                        directly to the meeting point.)
                    </li>
                </ul>
                <p>
                    If you need help or need further information, please feel
                    free to contact us on WhatsApp. Reservations department:
                    WhatsApp: (+ 351) 935124260
                </p>

                <h3>1. OPERATION:</h3>
                <p>
                    The present text has a contractual value. Each booking is
                    registered and numbered by client and day. Each booking has
                    an emergency plan in case of an accident, and Civil
                    Liability Insurance and Accident Insurance.
                </p>
                <p>
                    I am of legal age or I have the express written permission
                    of my guardians or legal representatives. All the data
                    provided in this form are truthful and are written legibly.
                    In any other way I decline any responsibility on the part of
                    Be Local Madeira company.
                </p>
                <p>
                    I have received explanations from the technicians, guides or
                    instructors regarding rules and instructions, as well as
                    safety measures and my obligations. I understand, accept and
                    will comply with all these rules and safety measures, as
                    well as any additional instructions given to me by the
                    guides or monitors during the activity.
                </p>
                <h3>2. SAFETY & DISCLAIMER OF LIABILITY:</h3>
                <p>
                    I do not suffer from any heart disease, epilepsy or any
                    disease, illness or disability that would make it
                    inadvisable for me to carry out the activity. I do not
                    suffer from any mental disorder or disability. I am not
                    pregnant. I have not consumed drugs nor am I under the
                    influence of any narcotic substance. In case I am over 55
                    years old, or if requested by Be Local Madeira, I have a
                    medical certificate that guarantees that I can carry out
                    this type of activity without any risk to my health.{" "}
                </p>
                <h3>3. CANCELLATION POLICY:</h3>
                <p>
                    If the company cancels due to bad weather or any other
                    reason, a 100% refund will be made. In the event that the
                    participant cancels their participation in an activity, they
                    will be reimbursed as follows:
                </p>
                <ul>
                    <li>
                        100% will be refunded if the cancellation is
                        communicated until 48h before the activity is due to
                        take place. You have the option to change the day or
                        activity without the option of a refund.
                    </li>
                </ul>

                <p>
                    Failure to comply with the above-mentioned points may lead
                    to the cancellation of the activity/event at any time
                    without the possibility of any refund.
                </p>
                <p>
                    Failure to show up on the day of the activity will not imply
                    any refund of the amount paid.
                </p>
                <p>
                    In the event that the same day of the activity or the day
                    before, the weather conditions pose a danger to the
                    integrity of the participants, the activity will be
                    postponed to another date at the proposal of the company, or
                    the customer giving also the option to exchange the activity
                    for another or to the refund of 100% of the cost of the
                    activity.
                </p>
                <p>
                    Any modification or suspension of the activity once it has
                    begun due to causes beyond the organisation’s control will
                    not imply the reimbursement of any amount or the
                    substitution of the activity, so we will try to start the
                    activity in the most favourable conditions possible.
                </p>

                <h3>4 - INSURANCE:</h3>
                <p>
                    The subscriber booking for other people certifies that all
                    participants, or legal guardians for minors, have read the
                    following insurance conditions and recommendations and that
                    each one accepts them individually.
                </p>
                <p>
                    The company - Be Local Madeira have taken out a civil
                    liability insurance policy. This insurance covers medical or
                    hospital care for risks according to the information
                    described in the company's insurance.
                </p>
                <p>
                    ‘I DECLARE that: I do not suffer from any heart disease,
                    epilepsy or any disease, illness or disability that would
                    make it inadvisable for me to carry out the activity. I do
                    not suffer from any mental disorder or disability. I am not
                    pregnant. I have not consumed drugs nor am I under the
                    influence of any narcotic substance.
                </p>
                <p>
                    I am aware of all the risks inherent to the activity,
                    especially those related to outdoor activities, water
                    activities, walking on uneven terrain, the possibility of
                    falls, gusts of wind, falling trees or rocks, among others;
                </p>
                <p>
                    I am aware of the risks of accidents in any activity carried
                    out in the mountains, especially those caused by falls, such
                    as trauma, dislocation of limbs, dislocations, fractures, as
                    well as others related to the open environment;
                </p>
                <p>
                    That I may be held responsible for actions taken by me or by
                    minors for whom I am responsible that may involve risks to
                    myself or third parties, as well as may violate
                    Environmental Legislation;
                </p>
                <p>
                    I declare that I am aware of and agree with the points
                    relating to the insurance represented by the company;
                </p>
                <p>
                    With nothing further to declare, and aware of the
                    responsibilities for the statements made, I sign this
                    document.‘
                </p>
            </InfoContainer>
        </div>
    );
}

export default Terms;
