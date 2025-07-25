import Navbar from "../components/navbar"

const Sobre = ()=>{
    return(
        <div className="body pr bcb">
            <div className="w1 h1 pr  df ac jcc fdc">
                <Navbar/>
                <div class=" c10 h075 cinza br10 p10 mt010">
                    <h2 className="fs15 p10">O que é o SGA?</h2>
                    <p>O <strong>SGA - Sistema de Gerenciamento de Animais</strong> é uma aplicação desenvolvida com o objetivo de facilitar o controle e gerenciamento de informações relacionadas a animais.</p>

                    <h2 className="fs15 p10">Funcionalidades</h2>
                    <p>Entre os principais recursos do sistema, estão:</p>
                    <ul>
                    <li>Cadastro de animais com dados detalhados</li>
                    <li>Histórico de atendimentos e tratamentos</li>
                    <li>Relatórios de saúde e controle de vacinação</li>
                    <li>Gerenciamento de usuários e permissões</li>
                    </ul>

                    <h2 className="fs15 p10">Tecnologias utilizadas</h2>
                    <p>O sistema foi desenvolvido utilizando tecnologias modernas, incluindo:</p>
                    <ul>
                    <li><strong>Node.js</strong> com Express para a API REST</li>
                    <li><strong>MySQL</strong> como banco de dados</li>
                    <li><strong>React</strong> no front-end (quando aplicável)</li>
                    </ul>

                    <h2 className="fs15 p10">Objetivo</h2>
                    <p>O objetivo principal do SGA é fornecer uma ferramenta ágil, intuitiva e segura para o gerenciamento de dados animais, otimizando processos e melhorando o acompanhamento dos animais.</p>
                </div>
            </div>
        </div>
        
    )
}
export default Sobre