import {Link} from 'react-router-dom';

function Menu(){
    return(
        <header>
            <Link to='/' class="logo">Music for <span>Health</span></Link>
            <ul class="navigation navDefault">
                <li><Link to='/'>Home |</Link></li>
                <li><Link to='/mortalidade-infantil'>Mortalidade infantil |</Link></li>
                <li><Link to='/doencas-transmissiveis'>Doenças transmissíveis |</Link></li>
                <li><Link to='/doencas-nao-transmissiveis'>Doenças não transmissíveis |</Link></li>
                <li><Link to='/melhoria-da-saude'>Melhoria da saúde |</Link></li>
            </ul>
        </header>
    )
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});

export default Menu