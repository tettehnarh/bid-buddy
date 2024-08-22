export function convertToCedis(pesewas: number) {
  return `${Math.floor(pesewas / 100).toFixed(2)}`;
}
