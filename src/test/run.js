var products = require("../assets/products.json");
const fs = require('fs');

const f = [];

for (const product of products) {
    if (!product.image || product.image.length === 0) continue;
    delete product.feature;
    delete product.tech1;
    f.push(product);
}

let data = JSON.stringify(f, null, 2);
fs.writeFileSync('student-2.json', data);