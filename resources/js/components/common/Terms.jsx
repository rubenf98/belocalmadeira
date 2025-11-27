import styled from "styled-components";
import { dimensions } from "../../helper";

const Container = styled.section`
    width: 100%;
    max-width: ${dimensions.custom};
    margin: 150px auto;
    padding: 0 20px;
    box-sizing: border-box;

    p {
        font-weight: 400;
    }
`;

function Terms() {
    return (
        <Container>
            <h2>LEGAL NOTICE:</h2>
            <p>
                Be Local Madeira operates strictly under the current Portuguese
                regulations for Tourism and Active Tourism, ensuring full legal
                compliance and a high standard of safety, professionalism, and
                transparency.
            </p>
            <h3>1. DATA OF THE DATA CONTROLLER </h3>
            <ul>
                <li>Identity:Sociedade BE LOCAL MADEIRA, UNIPESSOAL</li>
                <li>NIPC - RNAAT - 1093/2024</li>
                <li>NIF: PT518321142</li>
                <li>
                    Postal Address: Avenida da Madalena 100 - Edifício Madalenas
                    Palace Bloco D 2 AC - 9020-330
                </li>
                <li>
                    Phone:{" "}
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
            <h3>2. INCLUDED IN THE TOURS</h3>
            <ul>
                <li>Full Experience</li>
                <li>Safety Insurance (According to Portuguese legislation)</li>
                <li>Free Photos and Videos</li>
                <li>Technical Gear (Certified)</li>
                <ul>
                    <li>Neoprene suit</li>
                    <li>Canyoning shoes</li>
                    <li>Neoprene socks</li>
                    <li>Helmet</li>
                    <li>Harness</li>
                    <li>Life Jacket (if required)</li>
                </ul>
                <li>Certified Guides</li>
                <li>
                    Transfer from/to Funchal (other areas upon request – extra
                    charges may apply)
                </li>
                <li>
                    If no pickup is required, clients receive a 10% discount.
                    Coordinates for the direct meeting point are provided.
                </li>
            </ul>
            <h4>3. OPERATION:</h4>
            <p>
                This information has contractual value. Each reservation is
                recorded and numbered with an associated emergency plan, Civil
                Liability Insurance, and Accident Insurance.
            </p>
            <ul>
                <li>
                    Participants must be of legal age or have written
                    authorization from their legal guardians.
                </li>
                <li>
                    All personal data provided before, during, or after the
                    activity must be accurate and legible. Be Local Madeira is
                    not responsible for incorrect or incomplete information.
                </li>
                <li>
                    Prior to the activity, guides will provide full explanations
                    of safety rules, procedures, and obligations.
                </li>
                <li>
                    All participants must comply with safety instructions and
                    any additional guidance given by certified guides during the
                    activity.
                </li>
            </ul>
            <h3>4. SAFETY & DISCLAIMER OF LIABILITY:</h3>
            <p>By participating, clients declare that:</p>
            <ul>
                <li>
                    They do not suffer from heart disease, epilepsy, chronic
                    illness, disability, or any condition that makes
                    participation unsafe.
                </li>
                <li>
                    They do not suffer from any mental disorder or limitation
                    that affects the activity.
                </li>
                <li>They are not pregnant.</li>
                <li>
                    They are not under the influence of drugs, alcohol, or
                    narcotic substances.
                </li>
                <li>
                    Participants aged 55+ may be asked to present a medical
                    certificate confirming they can safely participate.
                </li>
            </ul>
            <p>
                Outdoor activities involve inherent risks (water activities,
                uneven terrain, falls, wind gusts, rock or tree falls, etc.).
                These risks cannot be fully eliminated without compromising the
                essential nature of the activity.
            </p>
            <h3>5. CANCELLATION POLICY:</h3>
            <p>If Be Local Madeira Cancels:</p>
            <ul>
                <li>
                    100% refund will be issued if the company cancels due to bad
                    weather or operational reasons.
                </li>
            </ul>
            <p>If the Participant Cancels:</p>
            <ul>
                <li>
                    100% refund if cancellation is made up to 48 hours before
                    the activity.
                </li>
                <li>
                    Participants may also change the date or choose another
                    activity (refund not applicable).
                </li>
            </ul>
            <p>Important:</p>
            <ul>
                <li>
                    Failure to comply with safety rules may result in immediate
                    cancellation without refund.
                </li>
                <li>
                    Failure to show up on the activity day results in no refund.
                </li>
                <li>
                    If weather conditions on the day or the previous day pose
                    safety risks, the company may:
                </li>
                <ul>
                    <li>Postpone the activity to a new date,</li>
                    <li>Offer an activity exchange, or</li>
                    <li>Provide a 100% refund.</li>
                </ul>
                <li>
                    If the activity must be modified or suspended after it has
                    started, due to reasons outside the company’s control, no
                    refund or substitution is applicable.
                </li>
            </ul>
            <h3>6. INSURANCE:</h3>
            <p>
                The person making the booking certifies that all participants
                (or their legal guardians, in case of minors) have read and
                accepted the following conditions:
            </p>
            <ul>
                <li>
                    Be Local Madeira has valid Civil Liability Insurance and
                    Accident Insurance, covering participants according to the
                    terms described in the company’s policy.
                </li>
            </ul>
            <p>Participants declare that:</p>
            <ul>
                <li>
                    They meet all health and safety requirements listed above.
                </li>
                <li>
                    They understand and accept the risks inherent to mountain
                    and outdoor activities (including falls, traumas,
                    dislocations, fractures, and environmental hazards).
                </li>
                <li>
                    They acknowledge that these risks are part of the nature of
                    canyoning and cannot be removed without altering the
                    activity itself.
                </li>
            </ul>
            <p>⸻</p>
            <p>
                <strong>Need Assistance?</strong>
            </p>

            <p>
                <a
                    href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                    target="_blank"
                >
                    📞 +351 935 124 260
                </a>
            </p>
            <p>
                <a href="mailto:belocalmadeira@gmail.com" target="_blank">
                    📧 belocalmadeira@gmail.com
                </a>
            </p>
        </Container>
    );
}

export default Terms;
