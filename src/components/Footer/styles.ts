import styled from 'styled-components'

export const Footer = styled.footer<{ $primary?: boolean; }>`
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    width: 100%;
    a {
        color: #000;
        font-weight: 700;
        font-size: 32px;
        text-decoration: none;
        padding: 0 15px;
        border-radius: 5px 5px 0 0;

        &:hover {
            color: #fff;
            border: 2px solid #000;
        }
    }
`