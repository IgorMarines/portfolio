import Home_Icon from '../../../assets/images/icons/home.svg'
const Home = () => {
    return (
        <a href='/' style={{ fontWeight: 800, color: '#fff', fontSize: '2em' }}>
            <img style={{ width: 35 }} src={Home_Icon} alt="Botão Home" />
        </a>
    )
}

export default Home