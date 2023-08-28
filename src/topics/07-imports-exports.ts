import { Product, taxCalculation } from "./6-function-desestructuring";


    const shoppingCart: Product[] = [
        {
            description: 'Iphone',
            price: 100
        },
        {
            description: 'Samnsung galaxy10',
            price: 600
        },
    ];

    const [total, tax] = taxCalculation({
        products: shoppingCart,
        tax: 0.15
    })

    console.log('Total', total);
    console.log('Tax', tax);