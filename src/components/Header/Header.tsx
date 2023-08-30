import * as S from './styles'
import GithubIcon from '../../assets/images/icons/github.svg'
import LinkedinIcon from '../../assets/images/icons/linkedin.svg'
import InstagramIcon from '../../assets/images/icons/instagraam.svg'
import { useMediaQuery } from '@mui/material';

const Header = () => {
    const isMobile = useMediaQuery('(max-width:600px)');


    const links_header = [
        {
            name: 'Linkedin',
            icon: LinkedinIcon,
            link: 'https://www.linkedin.com/in/igormarines/',
        },
        {
            name: 'Github',
            icon: GithubIcon,
            link: 'https://github.com/IgorMarines',
        },
        {
            name: 'Instagram',
            icon: InstagramIcon,
            link: 'https://www.instagram.com/igor.marines/',
        },
    ]


    return (
        <S.Header style={{ width: isMobile ? '80%' : '40%' }}>
            {links_header.map((link) => {
                return (
                    <S.Link_Container>

                        <a href={link.link}>
                            <img src={link.icon} />
                        </a>
                    </S.Link_Container>
                )
            })}
            <div>
                <S.Link_Container>
                    <a style={{textDecoration: 'none', color: '#fff'}} href='/portfolio'>Works</a>
                </S.Link_Container>
            </div>
        </S.Header>
    );
};

export default Header;
