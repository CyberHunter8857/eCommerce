import { FileHandle } from "./file-handle.model";

export interface Product{
	productId:number,
	productName:string,
	productDiscription:string,
	productDiscountedPrice:number,
	productActualPrice:number,
	productImages: FileHandle[]
}