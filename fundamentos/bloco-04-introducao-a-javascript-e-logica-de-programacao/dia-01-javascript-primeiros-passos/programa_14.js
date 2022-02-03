const productCost = 57;
const sellPrice = 150;

let profit, totalCost;

totalCost = productCost + (productCost * 0.2);
profit = sellPrice - totalCost;

if (productCost<0 || sellPrice<0) {
    console.log("Erro");
} else {
    console.log("Lucro de R$",profit);
}