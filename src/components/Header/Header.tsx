import { useMediaQuery } from '@mui/material';
import * as S from './styles';
import GithubIcon from '../../assets/images/icons/github.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin.svg';
import InstagramIcon from '../../assets/images/icons/instagraam.svg';

const Header = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const links_header = [
        {
            name: 'Linkedin',
            icon: LinkedinIcon,
            link: 'www.linkedin.com/in/igormarines/',
        },
        {
            name: 'Github',
            icon: GithubIcon,
            link: 'github.com/IgorMarines',
        },
        {
            name: 'Instagram',
            icon: InstagramIcon,
            link: 'instagram.com/igor.marines/',
        },
    ];

    return (
        <S.Header style={{ width: isMobile ? '80%' : '40%' }}>
            {links_header.map((link) => (
                <S.Link_Container key={link.name}>
                    <a href={`http://${link.link}`} target='_blank' rel='noopener noreferrer'>
                        <img src={link.icon} alt={link.name} />
                    </a>
                </S.Link_Container>
            ))}
            <div>
                <S.Link_Container>
                    <a rel='noopener noreferrer' style={{ textDecoration: 'none', color: '#fff' }} href='/portfolio'>
                        PROJETOS
                    </a>
                </S.Link_Container>
            </div>
        </S.Header>
    );
};

export default Header;
