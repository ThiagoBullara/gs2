import img00 from '../assets/imgs/00.jpg';

function Home() {
    return(
        <>



        <section class="banner" id="banner">
            <div class="content">
                <h2>Always Choose Good</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolor architecto 
                corporis non, quos sint vel facere corrupti reprehenderit illum commodi ea recusandae eligendi 
                nisi? Aspernatur obcaecati optio veritatis quos?</p>
            </div>
        </section>    



        <section class="about" id="about">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>S</span>obre nós</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corrupti repellat cupiditate 
                    lorem ipsum dolor sit, amet consectetur adipisicing elit. A corporis maxime dolorum cumque deserunt nostrum
                    tempore nemo sapiente, at sunt similique? Quod amet quaerat totam soluta laudantium ducimus voluptatum 
                    tempore ex, eaque cumque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum 
                    vel nihil natus quam sed iure in ducimus dolores, labore tempore Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Velit similique totam ipsam magni nobis. Eaque dolorum iure at in ullam 
                    eius, quos odio exercitationem doloribus inventore, placeat magni laborum natus.. 
                    Atque iure velit culpa dolor doloremque quo sunt vitae. m ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum 
                    vel nihil natus quam sed iure in ducimus dolores, labore tempore Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Velit similique totam ipsam magni nobis. Eaque dolorum iure at in ullam 
                    eius, quos odio exercitationem doloribus inventore, placeat magni laborum natus.. 
                    Atque iure velit culpa dolor doloremque quo sunt vitae.
                    m ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum 
                    vel nihil natus quam sed iure in ducimus dolores, labore tempore Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Velit similique totam ipsam magni nobis. Eaque dolorum iure at in ullam 
                    eius, quos odio exercitationem doloribus inventore, placeat magni laborum natus.. 
                    Atque iure velit culpa dolor doloremque quo sunt vitae. </p>
                </div>
                <div class="col50">
                    <div class="imgBx">
                        <img src={img00} alt="Imagem sobre Musicoterapia" title='Imagem sobre Musicoterapia'/>
                    </div>
                </div>
            </div>
        </section>



        <section class="about" id="about">
            <div class="row">
                <div class="col50">
                    <div class="imgBx">
                        <img src={img00} alt="Imagem da Equipe" title="Imagem da Equipe"/>
                    </div>
                </div>
                <div class="col50">
                    <h2 class="titleText"><span>E</span>quipe</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corrupti repellat cupiditate 
                    lorem ipsum dolor sit, amet consectetur adipisicing elit. A corporis maxime dolorum cumque deserunt nostrum
                    tempore nemo sapiente, at sunt similique? Quod amet quaerat totam soluta laudantium ducimus voluptatum 
                    tempore ex, eaque cumque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum 
                    vel nihil natus quam sed iure in ducimus dolores, labore tempore Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Velit similique totam ipsam magni nobis. Eaque dolorum iure at in ullam 
                    eius, quos odio exercitationem doloribus inventore, placeat magni laborum natus.. 
                    Atque iure velit culpa dolor doloremque quo sunt vitae.</p>
                </div>
            </div>
        </section>



        <section class="video" id="video">
            <div class="row rowVideo">
                <div class="col100">
                    <div class="titleTextVideo">
                        <h2 class="titleText"><span>V</span>ídeo Pitch</h2>
                        <p>Caso esteja com problemas para visualizar o vídeo por favor acesse o link: <a href="#">Link vídeo</a></p>
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
                        <input type="text" placeholder="Nome"/>
                    </div>
                    <div class="inputBox">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div class="inputBox">
                        <textarea placeholder="Mensagem"></textarea>
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