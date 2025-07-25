import Swal from 'sweetalert2'

const ErrorApi = () => {
    Swal.fire({
        icon: 'error',
        title: 'Erro de Conexão',
        text: 'O sistema tem um erro na API. Por favor, entre em contato com o suporte e tente novamente mais tarde.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}
const CadastroSuccess = () => {
    Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso!',
        text: 'Seu cadastro foi concluído com sucesso.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}
const ErrorDados = () => {
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos do formulário.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}

const EmailDuplicado = () => {
    Swal.fire({
        icon: 'error',
        title: 'Email já cadastrado',
        text: 'O email informado já está cadastrado. Por favor, insira outro email.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}


const LoginError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Login mal sucedido',
        text: 'O email ou senha inseridos estão incorretos. Por favor, verifique suas credenciais e tente novamente.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}

const LoginSuccess = () => {
    Swal.fire({
        icon: 'success',
        title: 'Login bem-sucedido',
        text: 'Você foi autenticado com sucesso!',
        confirmButtonText: 'Continuar',
        timer: 3000,
        timerProgressBar: true
    });
};

const SenhaNaoConfere = () => {
    Swal.fire({
        icon: 'error',
        title: 'Senhas não conferem',
        text: 'As senhas digitadas são diferentes. Por favor, verifique.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
};

const EmailInvalido = ()=>{
    Swal.fire({
        icon: 'error',
        title: 'E-mail inválido',
        text: 'Por favor, insira um endereço de e-mail válido.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}

const SenhaFraca = ()=>{
    Swal.fire({
        icon: 'error',
        title: 'Senha fraca',
        text: 'A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula e número.',
        confirmButtonText: 'Corrigir',
        timer: 3000,
        timerProgressBar: true
    });
}

const TelefoneInvalido = ()=>{
    Swal.fire({
        icon: 'error',
        title: 'Telefone inválido',
        text: 'Por favor, insira um número de telefone válido com DDD.',
        confirmButtonText: 'Ok',
        timer: 3000,
        timerProgressBar: true
    });
}

const AtualizacaoSucesso = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Dados do usuário atualizados com sucesso.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
    });
}

export { ErrorApi, CadastroSuccess, ErrorDados, EmailDuplicado, LoginError, LoginSuccess, SenhaNaoConfere, EmailInvalido, SenhaFraca, TelefoneInvalido, AtualizacaoSucesso } 