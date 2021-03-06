
import { CategoryTypes } from "./filter";
import { processedProductTypes } from "./processedProducts";

export interface ProductItemTypes {
    name: string;
    category: Record<string,any>;
    price: number;
    currency: string;
    image: {
      src: string;
      alt: string;
    };
    bestseller: boolean;
    featured?: boolean;
    details?: {
      dimmentions: {
        width: number;
        height: number;
      };
      size: number;
      description: string;
      recommendations?: [
        {
          src: string;
          alt: string;
        }
      ];
    };
  }


export type ProductTypes = {
  products: Array<ProductItemTypes> | [];
  featuredProduct: Record<string,any>;
  processedProducts: Record<string,any> ;
};
