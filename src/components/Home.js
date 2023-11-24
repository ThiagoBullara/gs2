import img01 from '../assets/imgs/home/01.jpg';

function Home() {
    return(
        <>

        <section class="banner">
            <div class="content">
                <h2>A Musicoterapia</h2>
                <p>Um híbrido entre a arte e a saúde, uma forma alternativa de tratamento.</p>
            </div>
        </section>
        
        <section class="about dados">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>O</span> que é Musicoterapia?</h2><br></br>
                    <p>A origem da musicoterapia contemporânea tem suas raízes na segunda guerra, 
                    a música era usada em hospitais americanos para ajudar na recuperação de pacientes 
                    com transtornos mentais e emocionais.</p><br></br>
                    <p>Trata-se de um híbrido entre arte e saúde que serve para 
                    promover a comunicação, tratamento, expressão e aprendizado dos pacientes. Não é uma técnica
                    nova porém investigações mais científicas começaram apenas a partir do século XX, 
                    e apresentaram um grande potencial terapêutico. Além disso, busca facilitar a 
                    organização e a forma de se relacionar dos seus pacientes. Trabalha no tratamento 
                    de doenças através da música, seja escutando, dançando, cantando e até mesmo tocando 
                    algum instrumento.</p><br></br>
                    <p>Podendo agir em diversas áreas médicas como Hospitalar, Educacional, Organizacional 
                    e principalmente na Saúde Mental e na Gerontologia. Melhorando a qualidade de vida, 
                    incentivando o aprendizado musical e ajudando a tratar e prevenir transtornos mentais.</p>
                </div>
                <div class="col50">
                    <div class="imgBx img50">
                        <img src={img01} alt="Imagem sobre Musicoterapia" title='Imagem sobre Musicoterapia'/>
                    </div>
                </div>
            </div>
        </section>

        <section class="team dados">
            <div class="row">
                <div class="col100">
                    <h2 class="titleText"><span>N</span>osso projeto e <span>E</span>quipe</h2><br></br>
                    <p>A Music for Health é uma solução criada para a Global Solution 2 da FIAP do ano de 2023,
                    <i> Global Solution - inovação e tecnologia criando o futuro da sáude - prevenção, automação e precisão</i>
                    , proposta pela empresa Hapvida Notredame Intermédica.</p><br></br>
                    <p>Nosso objetivo é o desenvolvimento de um sistema para realizar, acompanhar, gerenciar e 
                    desenvolver um tratamento de musicoterapia para a área da saúde mental e gerontologia. Nele o usuário tem 
                    acesso ao tratamento prescrito por seu médico pelo seu celular ou computador podendo ser realizado a distância 
                    ou presencialmente. O sistema utilizaria da IOT (Internet of Things) para proporcionar uma melhor experiência ao usuário, seja ele 
                    situando-se em sua casa, no seu carro ou em seu trabalho. O sistema também usaria Machine Learnig para aperfeiçoar 
                    o tratamento, a sua interatividade e a jornada do paciente.</p><br></br>
                </div>
            </div>
            <div class="row rowCards">
                <div class="col100">
                    <div class="row">
                        <div class="col50">
                            <div class="card">
                                <div class="content">
                                    <div class="imgCard">
                                        <img src={img01} alt="Imagem de um membro da equipe" title='Imagem de um membro da equipe'/>
                                    </div>
                                    <div class="contentCard">
                                        <h4>Nome</h4>
                                        <h5>Cargo de desenvolvimento</h5>
                                        <h5>RM: 111111</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col50">
                            <div class="card">
                                <div class="content">
                                    <div class="imgCard">
                                        <img src={img01} alt="Imagem de um membro da equipe" title='Imagem de um membro da equipe'/>
                                    </div>
                                    <div class="contentCard">
                                        <h4>Nome</h4>
                                        <h5>Cargo de desenvolvimento</h5>
                                        <h5>RM: 111111</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="video dados" id="video">
            <div class="row rowVideo">
                <div class="col100">
                    <div class="titleTextVideo">
                        <h2 class="titleText"><span>V</span>ídeo Pitch</h2>
                        <p>Caso esteja com problemas para visualizar o vídeo por favor acesse o link: <a class="redlink" href="#">Link vídeo</a></p>
                    </div>
                    <div class="videoBx">
                        <iframe width="100%" height="585" src="https://www.youtube.com/embed/fHFM-xgU5hk" title="a light academia classical study playlist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="contact" id="contact">
            <div class="title">
                <h2 class="titleText"><span>F</span>ale conosco</h2>
                <p>Busca um tratamento ou se interessou pelo nossa idéia? Por favor, nos envie uma mensagem.</p>
            </div>
            <div class="contactForm">
                <h3>Envie uma mensagem</h3>
                <form action="#" method="#">
                    <div class="inputBox">
                        <input required type="text" placeholder="Nome"/>
                    </div>
                    <div class="inputBox">
                        <input required type="email" placeholder="Email"/>
                    </div>
                    <div class="inputBox">
                        <textarea required placeholder="Mensagem"></textarea>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        </section>

        </>
    )
}

export default Home