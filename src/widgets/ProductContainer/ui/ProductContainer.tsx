import {Product} from "entities/Product";
import cls from './ProductContainer.module.scss'
import React, {forwardRef} from "react";
import {IItem} from "entities/Product/model/types/itemInterface";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

interface ProductContainerProps {
    ref?: React.MutableRefObject<HTMLDivElement>
    products?: IItem[],
    error?: FetchBaseQueryError | SerializedError;
    isLoading?: boolean;
    disc?: boolean;
}

export const ProductContainer = forwardRef<HTMLDivElement, ProductContainerProps>((props, ref) => {
    const {
        products,
        error,
        isLoading,
        disc
    } = props;

    return (
        <div ref={ref} className={cls.productList}>
            {error && <h1>Error</h1>}
            {isLoading && <h1>Loading..</h1>}
            {products && products.map(product => {
                    let discount;
                    if (disc) discount = Math.round(Math.random() * 50 + 5);

                    return (
                        <Product
                            item={product}
                            key={product.id}
                            discount={discount}
                        />
                    )
                }
            )}
        </div>
    )
})