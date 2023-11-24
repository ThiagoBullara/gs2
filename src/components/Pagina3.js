import img01 from '../assets/imgs/transmissiveis/img1.jpg';
import img02 from '../assets/imgs/transmissiveis/img2.jpg';
import img03 from '../assets/imgs/transmissiveis/img3.jpg';

import {Link} from 'react-router-dom';

import '../assets/css/transmissiveis.css';

function Pagina3() {

    return(
        <>

        <section class="banner banner-transmissiveis">
            <div class="content">
                <h2>Combate a doenças transmissíveis</h2>
                <p>Compreendendo o Problema e Contribuindo com Soluções.</p>
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
                    <h2 class="titleText"><span>O</span> que são as doenças transmissíveis</h2><br></br>
                    <p>
Doenças transmissíveis são aquelas causadas por agentes infecciosos, como bactérias, vírus, fungos ou parasitas, e podem ser transmitidas de uma pessoa para outra, ou por meio de vetores como mosquitos ou contato com animais infectados. Estas doenças, como HIV/AIDS, tuberculose, malária, hepatites virais e doenças respiratórias como a gripe, têm a capacidade de se espalhar rapidamente entre as populações. Estratégias de prevenção, como vacinação, medidas de higiene, tratamento adequado e campanhas de conscientização, são essenciais para controlar a propagação dessas doenças e reduzir sua incidência e impacto na saúde pública.</p>
                </div>
                <div class="col50">
                    <div class="img50">
                        <img src={img01} alt="Imagem sobre doenças transmissíveis" title='Imagem sobre doenças transmissíveis'/>
                    </div>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <div class="img50">
                        <img src={img02} alt="Imagem sobre doenças transmissíveis" title='Imagem sobre doenças transmissíveis'/>
                    </div>
                </div>
                <div class="col50">
                    <h2 class="titleText"><span>O</span> Impacto Global das Doenças Transmissíveis: Desafios e Estratégias Cruciais</h2><br></br>
                    <p>A Organização Mundial da Saúde (OMS) recentemente divulgou estatísticas impactantes sobre a saúde global em 2020, marcado pela pandemia de COVID-19. Os dados evidenciam como a crise afetou os sistemas de saúde, interrompendo o acesso a serviços essenciais e impactando negativamente a expectativa de vida. Embora investimentos anteriores em saúde tenham impulsionado melhorias na saúde materno-infantil e nos programas de doenças transmissíveis como HIV, tuberculose e malária, as interrupções nos serviços resultaram em aumentos preocupantes nas mortes por tuberculose e malária. As estatísticas destacam a necessidade crítica de fortalecer a atenção primária à saúde e investir na força de trabalho em saúde para mitigar os impactos negativos da pandemia e alcançar os Objetivos de Desenvolvimento Sustentável para a saúde até 2030.</p>
                    <br/>
                    <p>Leia mais <a class="redlink" href="https://www.paho.org/pt/noticias/20-5-2022-oms-divulga-novas-estatisticas-mundiais-saude" target="_blank" rel="noreferrer">clicando aqui</a></p>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>O</span> que podemos fazer para mudar essa realidade?</h2><br></br>
                    <p>A implementação de campanhas abrangentes de vacinação, direcionadas contra doenças como poliomielite, sarampo e tuberculose, é um pilar fundamental na prevenção de enfermidades infecciosas. O fortalecimento dos sistemas de saúde pública é essencial para monitorar, prevenir e responder prontamente a surtos de doenças, mitigando sua propagação. Além disso, a promoção da higiene pessoal e o acesso ao saneamento básico desempenham um papel crucial na redução da disseminação de doenças contagiosas, salvaguardando a saúde coletiva e promovendo um ambiente mais saudável para todos. Essas medidas são fundamentais para construir um futuro mais saudável e resiliente para comunidades em todo o mundo.</p>
                </div>
                <div class="col50">
                    <div class="img50">
                        <img src={img03} alt="Imagem sobre doenças transmissíveis" title='Imagem sobre doenças transmissíveis'/>
                    </div>
                </div>
            </div>
        </section>

        </>
    )

}

export default Pagina3