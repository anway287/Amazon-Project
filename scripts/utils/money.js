export function formatCurrency(priceCents) {
    const priceDollars = priceCents / 100;
    return priceDollars.toFixed(2);
}

export default formatCurrency;