import styled, { keyframes } from 'styled-components'

export const Header = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    
    margin: 2.5em;
`

const LinkPulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

export const Link_Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 2em;
    font-weight: 800;

    img {
        width: 30px;
        height: 30px;

        &:hover {
            width: 35px;
            height: 35px;
            animation: ${LinkPulse} 3s ease-in-out infinite;
        }
    }

    a {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`;
