import {Link} from 'react-router-dom';

function Menu(){
    return(
        <header>
            <Link to='/' class="logo">Music for <span>Health</span></Link>
            <div class="menuToggle" onclick="toggleMenu();"></div>
            <ul class="navigation">
                <li><Link to='/' onclick="toggleMenu();">Home |</Link></li>
                <li><Link to='/mortalidade-infantil' onclick="toggleMenu();">Mortalidade infantil |</Link></li>
                <li><Link to='/doencas-transmissiveis' onclick="toggleMenu();">Doenças transmissíveis |</Link></li>
                <li><Link to='/doencas-nao-transmissiveis' onclick="toggleMenu();">Doenças não transmissíveis |</Link></li>
                <li><Link to='/melhoria-da-saude' onclick="toggleMenu();">Melhoria da saúde |</Link></li>
            </ul>
        </header>
    )
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

export default Menu