import styled from "styled-components";
//import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup  from "@radix-ui/react-radio-group";


export const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vw;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }

        `;
        export const Button = styled.button`
            height: 48px;
            border: 0;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme["green-700"]};
                transitions: background-color 0.2s;
            }
        `;