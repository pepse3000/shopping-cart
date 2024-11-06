export interface ICartItem {
    readonly id: number;
    readonly title: string;
    readonly images?: string[];
    readonly price: number;
    quantity: number;
}