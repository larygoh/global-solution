import React from 'react'
import Navbar from '../Navbar';

function Login() {
    return (
        <>
            <Navbar />

            <div class="container">
                <div class="card p-5">
                    <h2>Faça seu login!</h2>
                    <div class="form-group mb-2">
                        <label for="username">Usuário</label>
                        <input class="form-control" type="text"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Senha</label>
                        <input class="form-control" type="password"></input>
                    </div>

                    <a href="#" class="text-sm">Esqueci minha senha</a>

                    <button class="btn btn-sm btn-primary">Entrar</button>
                    <div class=" pt-5">
                        <h2>Não possui cadastro?</h2>
                        <button class="btn btn-sm btn-light style=background-color: #e3f2fd;">Criar conta</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Login