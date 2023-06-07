import React from 'react'
import Navbar from '../Navbar';

function FazendasUrbanas() {
    return (
        <>
            <Navbar />
            <hr></hr>
            <div class="container">
                <div>
                    <div>
                        <h1 class="text-center pt-3">Fazendas urbanas</h1>
                        <h3 class="text-center">Você sabe a importância delas?</h3>
                        <div class="row">
                            <div class="col-6 pt-4">
                                <p>Agricultores e produtores agrícolas muitas vezes enfrentam dificuldades significativas para encontrar espaços disponíveis para produção dentro das cidades. O rápido crescimento urbano, a expansão das áreas residenciais e comerciais, bem como a falta de áreas verdes, têm reduzido os espaços disponíveis para atividades agrícolas nas áreas urbanas. Esse problema é ainda mais acentuado em cidades densamente povoadas.<br></br> A falta de espaços para a produção agrícola urbana apresenta diversos desafios para os produtores. Eles precisam encontrar terrenos ou imóveis que sejam adequados para a agricultura, levando em consideração fatores como tamanho, acesso à água, qualidade do solo e proximidade dos mercados consumidores.<br></br>Além disso, questões legais, como zonas de uso restrito e regulamentações municipais, podem dificultar ainda mais a localização de áreas apropriadas para a produção agrícola. <br></br>É por isso que o SIAZU te ajuda a encontrar o espaço ideal para o seu negócio!</p>
                            </div>
                            <div class="col-6 pt-4 ">
                                <img class="img-fu" src="images/Mulher.png" alt="produtora urbana - imagem gerada por IA"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FazendasUrbanas