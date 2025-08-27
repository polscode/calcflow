export function isNumber(valor: any) {
  return !isNaN(parseFloat(valor)) && isFinite(valor)
}