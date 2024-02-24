import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            // si el producto por el id existe entonces es el productIncart sino lo creará
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            //Borrar el producto, el artículo no existe, o la suma es 0 o menor a 0
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            console.log({ toDelete });
            return {
                ...rest
            }

            // if (count === 0) {
            //     //Eliminamos el objeto mediante desestructuración, el operador rest es como quiero que quede mi estado
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     console.log({ toDelete });
            //     console.log({ ...rest });
            //     return {
            //         ...rest
            //     }
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count }
            // }
        })
    }

    return {
        shoppingCart,
        onProductCountChange

    }
}

