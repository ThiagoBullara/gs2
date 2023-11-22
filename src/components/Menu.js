import {Link} from 'react-router-dom';

function Menu(){
    return(
        <header>
            <Link to='/' class="logo">Music for <span>Health</span></Link>
            <div class="menuToggle" onclick="toggleMenu();"></div>
            <ul class="navigation">
                <li><Link to='/' onclick="toggleMenu();">Home</Link></li>
                <li><Link to='/pagina2' onclick="toggleMenu();">Pagina2</Link></li>
                <li><Link to='/pagina3' onclick="toggleMenu();">Pagina3</Link></li>
                <li><Link to='/pagina4' onclick="toggleMenu();">Pagina4</Link></li>
                <li><Link to='/pagina5' onclick="toggleMenu();">Pagina5</Link></li>
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