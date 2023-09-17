interface prices {

}

export const currencyFormatter = (price?: number, currency?: string) => {
  const selectedCurrency = currency || '$'
  return selectedCurrency + ' ' + price
}