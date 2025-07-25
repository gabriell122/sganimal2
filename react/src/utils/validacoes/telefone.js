export default function validarTelefone(numero) {
  const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  return regex.test(numero);
}
