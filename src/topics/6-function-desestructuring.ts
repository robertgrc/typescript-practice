
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 77
}

const tablet: Product = {
    description: "iPad Air",
    price: 700
}   

interface TaxCalculationOptions{
    tax: number;
    products: Product[]
}

function taxCalculation(options:TaxCalculationOptions): [number, number]{
    let total = 0;
    options.products.forEach( ({price})=>{
        // total = total + product.price
        total += price;
    });
    return [total, total*options.tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;
const [total, resultTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', total);
console.log('resultTax', resultTax);

export{}