import styled, { withTheme } from "styled-components";
import { dimensions } from "../../helper";
import { NavLink } from "react-router-dom";

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    margin: 20px auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 20px;

    ul {
        text-align: center;
        margin: 0 auto;
        display: block;
        padding: 0;

        li {
            display: inline-block;
            :last-child {
                div::after {
                    content: "";
                }
            }
        }

        .link--active {
            color: white;
            font-weight: bold;
            ::before {
                width: 105%;
            }
        }
    }
`;

const LinkWithSeparator = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2em;
    display: inline-block;
    padding: 0 10px;
    margin: auto 5px;
    position: relative;
    color: ${({ theme }) => theme.customWhite};
    cursor: pointer;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    margin: 0 20px;
    text-transform: uppercase;
    font-size: 1em;

    &:hover {
        color: white;
        ::before {
            width: 105%;
        }
    }

    @media (max-width: ${dimensions.sm}) {
        font-size: 0.9em;
        margin: 0 10px;
    }

    ::before {
        position: absolute;
        margin-left: -5px;
        content: "";
        width: ${(props) => (props.active ? "105%" : 0)};
        height: 8px;
        left: 0;
        bottom: 0px;
        background: ${({ theme }) => theme.customWhite};
        z-index: -1;
        transition: 0.3s;
    }

    ::after {
        position: absolute;
        content: "•";
        right: -25px;

        @media (max-width: ${dimensions.sm}) {
            right: -15px;
        }
    }

    :last-child {
        ::after {
            content: "";
        }
    }
`;

const pages = [
    { item: "", name: "painel" },
    { item: "reservas", name: "reservas" },
    { item: "transfers", name: "transfers" },
    { item: "contacto", name: "contacto" },
    { item: "bloqueado", name: "bloqueado" },
    { item: "blog", name: "blog" },
    { item: "newsletter", name: "newsletter" },
];

function NavBar() {
    return (
        <Container>
            <ul>
                <li>
                    {pages.map(({ item, name }) => (
                        <LinkWithSeparator
                            key={item}
                            activeClassName="link--active"
                            to={"/painel/" + item}
                        >
                            {name}
                        </LinkWithSeparator>
                    ))}
                </li>
            </ul>
        </Container>
    );
}

export default withTheme(NavBar);
