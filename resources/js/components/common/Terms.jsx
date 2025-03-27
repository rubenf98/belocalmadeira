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

    p {
        font-weight: 400;
    }
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
                <ul>
                    <li>Identity:Sociedade BE LOCAL</li>
                    <li>MADEIRA, UNIPESSOAL</li>
                    <li>NIPC - RNAAT - 1093/2024</li>
                    <li>NIF: PT518321142</li>
                    <li>
                        Postal Address: Avenida da Madalena 100 - Edifício
                        Madalenas Palace Bloco D 2 AC - 9020-330
                    </li>
                    <li>
                        TLF:{" "}
                        <a
                            href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                            target="_blank"
                        >
                            +351 935124260
                        </a>
                    </li>
                    <li>
                        E-mail:{" "}
                        <a href="mailto:belocalmadeira@gmail.com">
                            BeLocalMadeira@Gmail.com
                        </a>
                    </li>
                </ul>
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

                <h4>1. OPERATION:</h4>
                <p>
                    This information has contractual value. Each reservation is
                    recorded and numbered by customer and day. Each reservation
                    has an emergency plan in case of an accident, as well as
                    Civil Liability Insurance and Accident Insurance.
                </p>
                <p>
                    Therefore, each participant must be of legal age or have
                    express written authorization from their guardians or legal
                    representatives.
                </p>
                <p>
                    All data provided previously during or after the activities
                    must be true and written legibly. In any other way, Be Local
                    Madeira will not be held liable.
                </p>
                <p>
                    Explanations will be given in advance by technicians, guides
                    or instructors about rules and instructions, as well as
                    safety measures and obligations.
                </p>
                <p>
                    The measures will have to be followed as a rule, complying
                    with all safety measures, as well as any additional
                    instructions given to me by the guides or monitors during
                    the activity.
                </p>

                <h4>PT</h4>
                <div>
                    <p>
                        O presente texto tem valor contratual. Cada reserva é
                        registada e numerada por cliente e dia. Cada reserva tem
                        um plano de emergência em caso de acidente, bem como um
                        Seguro de Responsabilidade Civil e um Seguro de
                        Acidentes.
                    </p>
                    <p>
                        Assim sendo, cada participante deverá ser maior de idade
                        ou ter autorização expressa e por escrito dos seus
                        encarregados de educação ou representantes legais.
                    </p>
                    <p>
                        Todos os dados fornecidos previamente durante ou após as
                        actividades deveram ser verdadeiros e estar escritos de
                        forma legível. De qualquer outra forma alheira, irá ser
                        declinado qualquer responsabilidade por parte da empresa
                        Be Local Madeira.
                    </p>
                    <p>
                        Previamente serão dadas explicações dos técnicos, guias
                        ou instrutores sobre regras e instruções, bem como
                        medidas de segurança e obrigações.
                    </p>
                    <p>
                        As medidas terão que ser cumpridas a regra, cumprindo
                        todas as medidas de segurança, bem como quaisquer
                        instruções adicionais que me sejam dadas pelos guias ou
                        monitores durante a atividade.
                    </p>
                </div>
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
                    <strong>
                        To carry out the experiment we declare that:
                    </strong>
                </p>
                <p>
                    I do not suffer from any heart disease, epilepsy or any
                    disease, illness or disability that would make it
                    inadvisable for me to carry out the activity. I do not
                    suffer from any mental disorder or disability. I am not
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
                    I understand such risks simply cannot be eliminated without
                    jeopardizing the essential qualities of this outing and
                    associated activities.
                </p>
                <p>
                    If you need help or need further information, please feel
                    free to contact us.
                </p>
                <p>Come and discover the Island from another perspective.</p>

                <p>
                    Book now:{" "}
                    <a
                        href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                        target="_blank"
                    >
                        +351 935124260
                    </a>
                </p>
            </InfoContainer>
        </div>
    );
}

export default Terms;
