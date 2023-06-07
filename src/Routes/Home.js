import React from 'react';
import Navbar from '../Navbar';
import '../index.css';

function Home() {
    return (
        <>
            <Navbar />
            <section style={{ background: "linear-gradient(90deg, rgba(5,77,59,1) 1%, rgba(255,255,255,1) 100%)" }}>
                <div class="container pb-5">
                    <div class="row pt-5">
                        <div class="col-md-8 my-auto pt-4">
                            <h1 class="titulo"><strong>Agricultura Sustentável</strong></h1>
                            <h4 class="titulo">Colaborativa com o meio ambiente<br />além de reduzir custos!</h4>
                            <h3 class="titulo">Saiba mais!</h3>
                        </div>
                        <div class="col-md-4">
                            <img class="img-fluid rounded" src='images/alimentos.png' alt="Imagens Alimentos Diversos" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container mt-5">
                    <div class="text-center">
                        <h1>O que é o SIAZU?</h1>
                        <p>Somos o "Serviço de Incentivo do Agronegócio na Zona Urbana", isso significa que apoiamos e incentivamos o conhecimento do agronegócio em áreas urbanas. Utilizando a internet e a Inteligência Artificial para dar soluções de agricultura sustentável!</p>
                    </div>
                </div>
            </section>

            <div class="embed-responsive embed-responsive-21by9 pt-5">
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/7JCJbQ28DAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <section>
                <div class="container text-center pt-5 pb-3">
                    <div>
                        <h1>Nossa Missão</h1>
                        <p>Acreditamos que o consumo inconsicente de alimentos impacta não somente a alimentação, mas sim em todas as etapas da produção, como a água, o solo e o aquecimento global. Para ter um maior controle dos prejuízos, a chave é a conscientização, para que de fato vire um hábito no nosso dia-a-dia e assim diminiuir o impacto global. Entender sobre agricultura sustentável é mais fácil do que parece, pequenas alterações no no cotidiano já nos faz cuidar melhor do nosso planeta. </p>
                    </div>
                </div>
            </section>
            <hr></hr>
            <footer>
                Copyright 2023 © - SIAZU™
            </footer>
        </>
    )
}

export default Home