import React from 'react'
import Navbar from '../Navbar';

function EdInfantil() {
    return (
        <>
            <Navbar />
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-carousel" src="images/edinf1.jpg" alt="Primeiro slide" height="400px"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-carousel" src="images/edinf2.jpg" alt="Segundo slide" height="400px"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-carousel" src="images/edinf3.jpg" alt="Terceiro slide" height="400px"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="container mt-5">
                <div>
                    <h1 class="text-center">Educação Infantil</h1>
                    <p>A educação sobre agricultura sustentável desde a infância é extremamente importante, pois ajuda a criar uma consciência ambiental nas crianças e a desenvolver valores que priorizam a preservação do meio ambiente e a produção de alimentos de forma responsável.

                        Ao ensinar as crianças sobre os princípios da agricultura sustentável, como a conservação do solo, o uso de técnicas de cultivo que reduzem o desperdício de água e a utilização de práticas agrícolas que preservam a biodiversidade, elas se tornam mais conscientes do impacto de suas escolhas alimentares e mais responsáveis em relação à conservação do meio ambiente.

                        Além disso, a educação sobre agricultura sustentável pode ajudar a fomentar o empreendedorismo e a geração de renda nas comunidades rurais, por meio da produção de alimentos orgânicos e da diversificação das culturas.

                        Consequentemente, a educação sobre agricultura sustentável desde a infância pode contribuir diretamente para a construção de um futuro mais sustentável e para o fortalecimento da agricultura familiar, gerando benefícios para a sociedade como um todo.</p>
                </div>
            </div>

            <div class="container">
                <div class="card p-5">
                    <form class="row g-3">
                        <h3>Quer a equipe de instrutores do SIAZU na sua escola? Preencha o formulário! </h3>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Nome</label>
                            <input type="email" class="form-control" id="inputEmail4"></input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Sobrenome</label>
                            <input type="password" class="form-control" id="inputPassword4"></input>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Nome da Escola</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder=""></input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Cidade</label>
                            <input type="text" class="form-control" id="inputCity"></input>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Estado</label>
                            <select id="inputState" class="form-select">
                                <option selected>Escolha...</option>
                                <option>São Paulo</option>
                                <option>Rio de Janeiro</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Telefone</label>
                            <input type="text" class="form-control" id="inputZip"></input>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    Avise-me
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EdInfantil