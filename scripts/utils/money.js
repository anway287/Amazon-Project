export function formatCurrency(priceCents) {
    priceCents = priceCents / 100;
    return priceCents.toFixed(2);
}

export default formatCurrency;