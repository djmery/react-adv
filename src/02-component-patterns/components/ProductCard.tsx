
import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    // children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
            maxCount

        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset

                })}
            </div>
        </Provider>


    )
}






