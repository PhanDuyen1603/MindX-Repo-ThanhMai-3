function randomString(length=6) {
    return Math.random().toString(36).substring(2, 2 + length);
}

function generateKey(customer) {
    const rand = randomString();
    return `web-${customer.id}$-${customer.email}-${rand}$`;
}

module.exports = generateKey;