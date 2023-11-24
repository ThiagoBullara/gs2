import img01 from '../assets/imgs/doencaNaoTransmissivel/01.jpg';
import img02 from '../assets/imgs/doencaNaoTransmissivel/02.jpg';

import {Link} from 'react-router-dom';

import '../assets/css/doencaNaoTransmissivel.css';

function Pagina4() {
    return(
        <>

        <section class="banner bannerDoencaNaoTransmissivel">
            <div class="content">
                <h2>Combate a Doenças Não Transmissíveis</h2>
                <p>Cuidados na saúde pessoal para evitar doenças.</p>
            </div>
        </section>
        <div>
            <ul class="navigation navResponsivo">
                <h3 class="titleText"><span>N</span>avegação</h3>
                <li><Link to='/'>Home |</Link></li>
                <li><Link to='/mortalidade-infantil'>Mortalidade infantil |</Link></li>
                <li><Link to='/doencas-transmissiveis'>Doenças transmissíveis |</Link></li>
                <li><Link to='/doencas-nao-transmissiveis'>Doenças não transmissíveis |</Link></li>
                <li><Link to='/melhoria-da-saude'>Melhoria da saúde |</Link></li>
            </ul>
        </div>
        <section class="dados">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>O</span> que são as doenças não transmissíveis?</h2><br></br>
                    <p>São doenças que são caracteristicamente não-infecciosas na sua origem e que não se transmitem de 
                    um indivíduo afetado a outros. Os cinco tipos principais de doenças não transmissíveis são as <strong>doenças cardiovasculares</strong>,  
                    <strong> câncer</strong>, <strong>transtornos mentais</strong>, <strong>doenças respiratórias crônicas</strong> e <strong>diabetes</strong>.</p><br></br>
                    <p>Esse tipo de doenças se tornaram a principal causa de morte no mundo. A Organização Mundial da Saúde (OMS) 
                    alerta que estas e outras doenças crônicas não transmissíveis (DCNTs) ultrapassaram as doenças infecciosas e 
                    causam quase três quartos das mortes globais, com 41 milhões de vítimas a cada ano.</p><br></br>
                    <p>No Brasil, as DCNTs são responsáveis por cerca de 75% das mortes, de acordo com as estimativas da OMS. 
                    As estatísticas apontam que a distribuição das causas de óbito se dividem no país entre: doenças cardiovasculares 
                    (28%), câncer (18%), condições transmissíveis, maternas, perinatais e nutricionais (14%), doenças respiratórias crônicas 
                    (7%), diabetes (5%) e outras DCNTs (17%).</p><br/><br/>
                </div>
                <div class="col50">
                    <div class="imgBx img50">
                        <img src={img01} alt="Imagem de um paciente com cancer" title='Imagem de um paciente com cancer'/>
                    </div>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <div class="imgBx img50">
                        <img src={img02} alt="Imagem de uma médica" title='Imagem de uma médica'/>
                    </div>
                </div>
                <div class="col50">
                    <h2 class="titleText"><span>C</span>omo podemos prevenir e tratar essas doenças?</h2><br></br>
                    <p>Cuidar da saúde e evitar doenças crônicas é um processo contínuo que envolve diversos aspectos da vida, 
                    algumas dicas para promover uma vida saudável e prevenir doenças crônicas incluem:</p><br/>
                    <p>1 - Manter uma dieta saudável e equilibrada, com alimentos variados e ricos em nutrientes essenciais, 
                    como frutas, verduras, legumes, grãos integrais, proteínas magras e gorduras saudáveis.<br/>
                    2 - Praticar exercícios físicos regularmente, de acordo com as orientações médicas e suas capacidades físicas.<br/>
                    3 - Controlar o estresse e a ansiedade, por meio de técnicas como meditação, yoga ou outras atividades que ajudem a relaxar.<br/>
                    4 - Dormir o suficiente, em média 7 a 8 horas por noite, para permitir a recuperação do corpo e da mente.<br/>
                    5 - Evitar o uso de substâncias prejudiciais à saúde, como tabaco, álcool e drogas ilícitas.<br/>
                    6 - Realizar exames médicos regulares e seguir as orientações do médico em relação à prevenção e tratamento de doenças crônicas.<br/>
                    7 - Manter um peso saudável e controlar a pressão arterial e os níveis de colesterol e açúcar no sangue.<br/>
                    8 - Proteger-se de doenças infecciosas por meio da vacinação e da adoção de medidas de higiene, como lavar as mãos frequentemente.<br/>
                    9 - Evitar exposição excessiva à luz solar e usar protetor solar para prevenir o câncer de pele.<br/>
                    10 - Manter relacionamentos saudáveis e uma rede de apoio social para lidar com desafios e estressores da vida.<br/></p>
                </div>
            </div>
        </section>

        </>
    )
}

export default Pagina4