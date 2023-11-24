import React, { useState, useEffect  } from 'react';

import img01 from '../assets/imgs/mortalidade/infantil.jpg';
import img02 from '../assets/imgs/mortalidade/map.png';
import borda from '../assets/imgs/mortalidade/sangue.avif';
import kid from '../assets/imgs/mortalidade/kid.jpg';

import {Link} from 'react-router-dom';

import '../assets/css/mortalidade.css';

function Pagina2() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 4400);

        return () => clearInterval(interval);
    }, [count]);

    return(
        <>

        <section class="banner banner-mortalidade">
            <div class="content">
                <h2>Redução da Mortalidade Infantil</h2>
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
                    <h2 class="titleText"><span>O</span> que é Mortalidade Infantil</h2><br></br>
                    <p>A mortalidade infantil refere-se ao número de crianças que morrem antes de atingir os cinco anos de idade. Segundo as últimas estimativas divulgadas pelo Grupo Interagencial das Nações Unidas para Estimativa da Mortalidade Infantil (UN IGME), cerca de 5 milhões de crianças perderam a vida globalmente antes de seu quinto aniversário em 2021. Além disso, aproximadamente 2,1 milhões de crianças, adolescentes e jovens entre 5 e 24 anos também faleceram no mesmo período.</p>
                </div>
                <div class="col50">
                    <div class="img50">
                        <img src={img02} alt="Imagem sobre mortalidade infantil" title='Imagem sobre mortalidade infantil'/>
                    </div>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <div class="img50">
                        <img src={img01} alt="Imagem sobre mortalidade infantil" title='Imagem sobre mortalidade infantil'/>
                    </div>
                </div>
                <div class="col50">
                    <h2 class="titleText"><span>U</span>ma Triste Realidade: Mortes Infantis a Cada 4,4 Segundos</h2><br></br>
                    <p>Em 2021, uma criança, um adolescente ou um jovem perdeu a vida a cada 4,4 segundos, conforme revelado no alarmante relatório da ONU. Esta estatística perturbadora ecoa a urgência de agir rapidamente para conter a tragédia da mortalidade prematura. Cada segundo é crucial, e é imperativo que a sociedade se una para implementar medidas significativas e direcionadas, visando proteger as vidas vulneráveis dos jovens. Juntos, podemos transformar essa realidade e garantir um futuro mais promissor para as gerações vindouras.</p>
                </div>
            </div>
        </section>

        <section class="mortalidade">
            <img src={borda} class="borda" alt="Imagem de sangue" title='Imagem de sangue'/>
            <div class="row">
                <div class="col100">
                    <h2 class="titleText space"><span>{count}</span> crianças morreram no tempo em que você está lendo essa página</h2><br></br>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>O</span> que podemos fazer para mudar essa realidade?</h2><br></br>
                    <p>Oferecer programas acessíveis de cuidados pré e pós-natais é fundamental para garantir um início saudável para gestantes e mães. Facilitar o acesso a vacinas e cuidados médicos vitais para recém-nascidos e lactentes é uma prioridade para proteger os mais jovens. Além disso, a educação e conscientização da comunidade sobre práticas cruciais de saúde infantil, como a importância do aleitamento materno, nutrição adequada e medidas de prevenção de acidentes, desempenham um papel crucial na promoção do bem-estar e na redução da mortalidade infantil. Essas iniciativas são fundamentais para construir um futuro saudável para as gerações futuras.</p>
                </div>
                <div class="col50">
                    <div class="img50">
                        <img src={kid} alt="Imagem sobre mortalidade infantil" title='Imagem sobre mortalidade infantil'/>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Pagina2