import bcrypt from 'bcrypt';

//GERA O HASH
export async function gerarHash(senha) {
  return await bcrypt.hash(senha, 10);
}

//VALIDA O HASH
export async function verificarSenha(senhaDigitada, hashSalvo) {
  return await bcrypt.compare(senhaDigitada, hashSalvo);
}