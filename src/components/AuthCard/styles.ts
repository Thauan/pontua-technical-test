import styled from "styled-components";

export const Card = styled.div`
    background-color: white;
    padding: 44px 36px;
    border-radius: 28px;

    .title {
        font-size: 36px;
        color: #081B4E;

        .highlight {
            color: #F43724;
        }
    }

    .description {
        color: #777777;
        font-size: 16px;
        margin-top: 16px;
    }

    .content {
        margin-top: 16px;
    }
`