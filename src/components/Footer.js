import facebook from '../assets/imgs/footer/facebook.png';
import twitter from '../assets/imgs/footer/twitter.png';
import youtube from '../assets/imgs/footer/youtube.png';
import linkedin from '../assets/imgs/footer/linkedin.png';

function Footer() {
    return(
        <>
            <footer>
                <div class="footerContent">
                    <h3>Music for <span>Health</span></h3>
                    <p>Acesse nossas redes sociais para acompanhar novidades e nossa trajetória.</p>
                    <ul class="footerIcons">
                        <li><a href="#"><img src={facebook} width="30px" class="fa fa-facebook"/></a></li>
                        <li><a href="#"><img src={twitter} width="30px" class="fa fa-twitter"/></a></li>
                        <li><a href="#"><img src={youtube} width="30px" class="fa fa-youtube"/></a></li>
                        <li><a href="#"><img src={linkedin} width="30px" class="fa fa-linkedin-square"/></a></li>
                    </ul>
                </div>
                <div class="footerEnd">
                    <p>Copyright &copy; 2023 Music for <span>Health</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer