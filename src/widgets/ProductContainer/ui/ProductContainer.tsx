import {Product} from "entities/Product";
import {productAPI} from "shared/api/productService";
import cls from './ProductContainer.module.scss'
import React, {FC, forwardRef, Ref} from "react";

export enum ProductContainerTypes {
    BEST_SELLING = "best_selling",
    FLASH_SALES = "flash_sales",
}

type Status = ProductContainerTypes.BEST_SELLING | ProductContainerTypes.FLASH_SALES;

interface ProductContainerProps {
    types: Status;
    ref?: React.MutableRefObject<HTMLDivElement>
}

export const ProductContainer = forwardRef<HTMLDivElement, ProductContainerProps>((props, ref) => {
    const { types } = props;
    let method;

    switch (types) {
        case ProductContainerTypes.BEST_SELLING:
            method = productAPI.useFetchAllProductsQuery;
            break;
        case ProductContainerTypes.FLASH_SALES:
            method = productAPI.useFetchAllProductsQuery;
            break;
        default:
            method = productAPI.useFetchAllProductsQuery;
            break;
    }

    const {data: products, error, isLoading} = method(undefined);

    return (
        <div ref={ref} className={cls.productList}>
            {error && <h1>Error</h1>}
            {isLoading && <h1>Loading..</h1>}
            {products && products.map(product => {
                    const discount = Math.round(Math.random() * 50 + 5);

                    return (
                        <Product
                            item={product}
                            key={product.id}
                            addToCart={() => {
                            }}
                            addToWishlist={() => {
                            }}
                            discount={discount}
                        />
                    )
                }
            )}
        </div>
    )
})