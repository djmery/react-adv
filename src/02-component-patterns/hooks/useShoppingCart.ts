import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {
                //Eliminamos el objeto mediante desestructuración, el operador rest es como quiero que quede mi estado
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log({ toDelete });
                console.log({ ...rest });
                return {
                    ...rest
                }
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange

    }
}

