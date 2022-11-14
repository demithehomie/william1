import './App.css';
import imagem from "../src/um.svg";
import simone from "../src/imgs/simone.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
/*


      <div className="navbar">
        <h5 className="navbar-items">O que é?</h5>
        <h5 className="navbar-items">Como funciona?</h5>
        <h5 className="navbar-items">Como adquirir?</h5>
      </div>

       <video className="video" src="movie.mp4" type="video/mp4" width="400" height="300" controls/>
*/
function App() {
  return (
    <div className="app">
     

    <div className="container-fluid">
    <div className="box2">
  <h2>O que o seu espelho tem te mostrado te agrada?</h2>
          
</div>
      <div className="header">
      <br/>
        <h1 className="xxl-text-title"><strong>Você conhece o Mais Vida?</strong></h1>
        <br/>
        <h3 className="subtitle1">Receitas 100% naturais, por uma vida mais saudável</h3>
        <br/>
        <h4 className="subtitle2">Você vai amar a praticidade desse produto! </h4> 
      <br/>
      <br/>
      
      <div className="newbox">
        
        <img className="img-book" onClick={() => window.open("https://pay.kiwify.com.br/zD2Vx51")} src={imagem} alt="ebook"/>
       
      </div>
      <br/>
      <br/>
        </div>

        <div>
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
        <button className="botao-de-compra" onClick={() => window.open("https://pay.kiwify.com.br/zD2Vx51")}>Comprar agora</button>
        <h6 className="subtitle3">Receba o seu produto instantaneamente</h6>
      </div>
      <br/>

    <div>
    </div>
        <h2 className="navbar-items-desc">O que é?</h2>
        <h5 className="navbar-items-desc-det">
          <p>
          Um ebook preparado por especialistas para te ajudar em todas as etapas do seu emagrecimento. Um guia para o emagrecimento na ponta dos seus dedos.</p></h5>
    </div>   

    <div>
        <h2 className="navbar-items-desc">Como funciona?</h2>
        <h5 className="navbar-items-desc-det">
          Por ser um produto digital, você pode consumir ele como quiser, pode ler no seu telefone, computador, televsão ou até imprimir ele se quiser. Confortável e maleável.
        </h5>
    </div> 
        <div>
          <h2 className="navbar-items-desc">Como adquirir?</h2>
            <h5 className="navbar-items-desc-det">
          Você pode baixar no seu computador ou celular e ler tranquilamente. Oferecemos atualizações gratuitas, então você não precisa se preocupar.
          </h5>

        </div>
    
        <div className="box1">
          <h2>A vida é agora e não dá pra deixar pra depois, por isso, comece já a mudar para um Estilo de Vida Saudável com essas deliciosas dicas de sucos e shakes 100% naturais.</h2>
        </div>

        <br/>
        <div>
        <button className="botao-de-compra" onClick={() => window.open("https://pay.kiwify.com.br/zD2Vx51")} >Comprar agora</button>
        <h6 className="subtitle3">Receba o seu produto instantaneamente</h6>
      </div>
      <br/>

        <h2 className="navbar-items-desc">Confira agora alguns cases de quem já desfrutou do ebook</h2>

        <img className="img-depo1" src={simone} alt="depoimento das mulheres"/>

        <div className="box1">
          
          <h3>
O seu bem-estar e qualidade de vida depende da sua atitude positiva em começar. Faça uso diariamente das receitas deste material, que foi especialmente feito para você!
Sabe por que? Porque você vai amar o que verá no seu espelho!</h3>
        </div>

       

<br/>

<h2 className="navbar-items-desc-t">Quem sou eu?</h2>
<div className="navbar-items-desc-quem">
  
 
  <h4 className="navbar-items-desc-det">E aí, beleza? Eu sou Willian Balduino e nos últimos 10 anos, antes da pandemia, trabalhei levando conteúdos para melhoria da qualidade de vida das pessoas em empresas, escolas, residências, tanto em palestras como em visitas. Os conteúdos sempre foram direcionados para o relacionamento, educação e cuidados com a saúde, portanto, voltado única e exclusivamente para o equilíbrio e busca de uma qualidade de vida melhor. Este conteúdo que está sendo disponibilizado aqui para você é para mudar a sua vida do antes e depois, Aproveite bem e tenha Mais Vida!</h4>
</div>
    

<br/>
 <div>
  <h3 className="pre-price">De R$ 177 para</h3>
  <h1 className="pos-price"><strong>R$ 77</strong></h1>


 </div>
<br/>
 <div>
        <button className="botao-de-compra" onClick={() => window.open("https://pay.kiwify.com.br/zD2Vx51")}>Comprar agora</button>
        <h6 className="subtitle3">Receba o seu produto instantaneamente</h6>

      </div>

<br/>


<div className="box1">
          
          <h3>
          Você tem uma usina capaz de te dar Mais Vida e bem-estar em sua casa. Agora é a hora de você usar mais o seu liquificador e a centrífuga, vá para a cozinha e mude seus hábitos, para colher melhores resultados hoje, amanhã e depois, depois...
          Você está feliz com o seu estilo de vida hoje? 
          Olhe no espelho agora e imagine-se no futuro. 

Gostou? Então comece já a executar as receitas para ter Mais Vida e bem-estar.</h3>
        </div>


      <div>
        <button className="botao-de-compra" onClick={() => window.open("https://pay.kiwify.com.br/zD2Vx51")}>Comprar agora</button>
        <h6 className="subtitle3">Receba o seu produto instantaneamente</h6>

      </div>

    <br/>
      <h2 className="navbar-items-desc">Alguma dúvida? Fale conosco agora mesmo</h2>
    <br/>
 
    <h4 className="botao-de-compra" onClick={() => window.open(" https://linkwhats.app/8ae376")}>Clique aqui e converse com o autor via WhatsApp</h4>

    <h6 className="footer-message">Makron Agência Digital (C) 2022. Todos os Direitos Reservados</h6>
    </div>
  );
}

export default App;
