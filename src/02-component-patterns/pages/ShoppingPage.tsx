
import { ProductButtons, ProductCard, ProductTitle, ProductImage } from "../components";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                {/* Se tiene que transformar en un HOC para que reciba hijos */}
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title={'Hola Mundo'} />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}
