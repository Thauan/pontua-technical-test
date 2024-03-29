import styled from "styled-components";

import { InputHTMLAttributes } from "react";


type InputProps = {
    hasIcon: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const InputWrapper = styled.div<InputProps>`
    width: 100%;
    height: 57px;
    border-radius: 10px;
    border: 0.7px solid #B7B7B7;

    display: grid;
    grid-template-columns: ${(props) => props.hasIcon ? '1fr 57px' : '1fr'};

    transition: all 400ms;

    &:focus-within {
        border: 1px solid #293D71;

        button {
            svg {
                fill: green;
                color: red;
            }
        }
    }

    input {
        width: 100%;
        padding: 20px 15px;
        padding-right: 0px;
        background: transparent;
        outline: none;
    }

    a {
        background: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error {
        color: red;
        padding-top: 5px;
    }
`

export const MessageError = styled.div`
    .error {
        color: red;
        margin-top: 2px;
    }
`