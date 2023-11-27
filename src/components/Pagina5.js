import img01 from "../assets/imgs/melhoriaNaSaude/01.jpg";
import img02 from "../assets/imgs/melhoriaNaSaude/02.jpg";
import img03 from "../assets/imgs/melhoriaNaSaude/03.png";

import {Link} from 'react-router-dom';
import React, { useState, useEffect  } from 'react';

import '../assets/css/melhoriaNaSaude.css';

function Pagina5() {
    
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calcularImc = () => {
        return (peso / (altura * altura)).toFixed(2);
    };

    useEffect(() => {
        setResultado(calcularImc());
    }, [altura, peso]);

    return(
        <>

        <section class="banner bannerMelhoriaNaSaude">
            <div class="content">
                <h2>Melhoria Geral da Saúde</h2>
                <p>Pequenos hábitos que podem melhorar sua Qualidade de Vida.</p>
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
                    <h2 class="titleText"><span>S</span>aúde e qualidade de vida</h2><br></br>
                    <p>Uma boa saúde e qualidade de vida são factores indissociável, não podemos ter uma boa qualidade de vida, 
                    sem que tenhamos uma boa saúde.</p><br></br>
                    <p>Mas o que é uma boa saúde? Para melhor percebermos o seu conceito, olhemos para a definição dada pela Organização Mundial de Saúde (OMS). 
                    Esta define saúde, como “o bem-estar físico, mental e social, mais do que a mera ausência de doença…”. Esta definição vai, 
                    por isso, contra os conceitos de saúde, muitas vezes, enraizados nos indivíduos, que assumem que estar saudável é apenas não 
                    apresentar qualquer doença. </p><br/>
                    <p>Neste sentido, a promoção de saúde deve ser encarada de uma forma ampla. Ou seja, 
                    promover a saúde é muito mais que efetuar a mera prevenção de doenças. Promover a saúde é não só melhorar 
                    a nossa condição de saúde, mas também melhorar a nossa qualidade de vida e o nosso bem-estar.</p><br></br>
                </div>
                <div class="col50">
                    <div class="imgBx img50">
                        <img  src={img01} alt="Imagem de uma pessoa caminhando em um parque" title='Imagem de uma pessoa caminhando em um parque'/>
                    </div>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <div class="imgBx img50">
                        <img src={img02} alt="Imagem de crianças brincando" title='Imagem de crianças brincando'/>
                    </div>
                </div>
                <div class="col50">
                    <h2 class="titleText"><span>C</span>omo podemos melhorar nossa saúde de forma geral?</h2><br></br>
                    <p>Com pequenas mudanças em nossos hábitos do dia a dia podemos melhorar nossa saúde e 
                    consequentemente nossa qualidade de vida, como por exemplo:</p><br/>
                    <ol>
                        <li><p>Busque realizar uma algum tipo de <strong>atividade física diariamente</strong>, algo que você goste para fixar na sua rotina, adicionar 30 minutos de atividade na sua rotina
                        diária pode trazer inúmeros benefícios para sua vida, dentre eles: fortalcer o seu sistema imunológico, melhorar a pressão
                        sanguínea, diminuir a pressão arterial, controlar a glicemia, controle de peso, melhoria no sono, melhoria para a saúde mental, 
                        melhora o humor e etc...</p></li><br/>
                        <li><p>Mantenha uma <strong>dieta saudável</strong>, além de ajudar a controlar o peso uma alimentação saudável
                        ajuda a prevenir diversas doenças além de melhorar seu sistema imunológico, disposição para o dia e até mesmo
                        pode melhorar sua vida financeira. Evite alimentos ultraprocessados e fast-foods.</p></li><br/>
                        <li><p>Busque uma <strong>boa noite de sono</strong>, tente dormir entre 7 e 9 horas diariamente, evite dormir tarde e 
                        mexer no celular antes de se deitar. Possuir uma boa rotina de sono melhorar significamente sua memória, raciocíno, humor e seu sistema imunológico, além
                        de rejuvenescer sua pele e controlar seu apetite.</p></li><br/>
                        <li><p>Invista na sua <strong>saúde mental</strong>, encontre alguma forma de exercitar seu cérebro diariamente 
                        seja lendo um livro, estudando, tocando algum instrumento, trabalhando seu lado criativo. Manter uma boa saúde mental
                        é essencial para evitar transtornos mentais e manter o bem-estar do seu organismo.</p></li><br/>
                        <li><p>Evite o <strong>tabagismo, bebidas alcoólicas e uso de drogas</strong>, esses hábitos estão associados a diversas doenças 
                        podem gerar vários malefícios ao organismo. Por isso, se você quer estabelecer hábitos saudáveis, busque evitá-los e até cortá-los da sua vida, 
                        assim, você terá melhoria na qualidade do sono e na saúde em geral.</p></li><br/>
                        <li><p>Cultive os <strong>relacionamentos</strong>, Os laços sociais são importantes, porque mantêm os vínculos afetivos. Somos animais sociais, 
                        portanto, mantenha a sua rede de contatos ativa. Fale com seus amigos e familiares, busque interagir com pessoas novas, converse e tenha momentos de lazer em grupo.</p></li>
                    </ol>
                </div>
            </div>
        </section>

        <section class="dados">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>IMC</span> uma forma de calcular o peso ideal.</h2><br></br>
                    <p> O IMC, índice de massa corporal, é uma medida internacional usada para calcular se uma pessoa está no peso ideal. 
                    <br/><br/>Desenvolvido pelo polímata Lambert Quételet no fim do século XIX, trata-se de um método fácil e rápido para a avaliação do 
                    nível de gordura de cada pessoa, sendo, por isso, um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS).</p><br/>
                    <p>Utilize a nossa calculadora de IMC para verificar se você está no peso ideal:</p><br/>
                    <div class="calculadoraImc">
                        <h3 class="titleText titleTextImc">Calculadora de IMC</h3><br/>
                        <label class="labelImc">Insira a sua altura (em Metros) </label>
                        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} min="0" class="inputImc"/><br/><br/>
                        <label class="labelImc">Insira o seu peso (em Kilos) </label>
                        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} min="0" class="inputImc"/><br/><br/>
                        <label class="labelResultado">Resultado: <span>{!isNaN(resultado) ? resultado : 0}</span></label>
                    </div>
                </div>
                <div class="col50">
                    <div class="imgBx img50">
                        <img src={img03} alt="Imagem de crianças brincando" title='Imagem de crianças brincando'/>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Pagina5