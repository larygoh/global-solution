import React from 'react'
import Navbar from '../Navbar';

function Empreendedores() {
    return (
        <>
            <Navbar />
            <hr></hr>
            <div class="container">
                <div>
                    <div>
                        <h1 class="text-center pt-3">Empreendedores</h1>
                        <h3 class="text-center">Veja alguns empreendedores que usam a sustentabilidade como lema!</h3>
                        <div>
                            <div class=" card">
                                <img class="img-pp pt-3" src="images/pequenaprodutora.jpeg" alt="pequena produtora urbana "></img>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 pt-5">
                                <h2>Fazenda Nova Piratininga</h2>
                                <p>Benefícios alcançados pelo uso de IA:</p>
                                    <p>Ganho de tempo:  A utilização de visão computacional e IA reduziu significativamente o tempo necessário para completar a tarefa, mais precisamente, reduziu 70% do tempo de contagem da Nova Piratininga. Além disso, o processo é realizado de forma mais eficiente, sem a necessidade de equipes inteiras para percorrer as propriedades.</p>
                                    <p>Acuracidade na contagem: contagem automática usando visão computacional e IA é muito mais precisa, pois não há espaço para erros humanos, sendo assim, hoje eles comprovação de tudo que foi contado, os erros que aconteciam na contagem manual  já não existem mais.</p>
                                    <p>Economia de custos: Os custos foram reduzidos em 3 grandes áreas, no tempo da contagem, na equipe reduzida pela metade nos momentos de contagens e inventários, e nos erros que eram gerados pela contagem manual.</p>
                            </div>
                            <div class="col-6 pt-5 ">
                                <img class="img-fu" src="images/galpao.png" alt="Galpão - imagem gerada por IA"></img>
                            </div>
                        </div>
                        <div>
                            <p>A Fazenda Nova Piratininga não é considerada pequena, porém ela nos mostra com resultados, os benefícios de usar Inteliência Artificial na agropecuária.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Empreendedores