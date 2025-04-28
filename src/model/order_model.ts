import { User } from "./user_model";
import { Product } from "./product_model";
import { Voucher } from "./voucher_model";
export interface Order {
    _id: string;
    uniqueKey?: string;
    userId: User;
    orderDetailId: OrderItem;
    amount: number;
    description?: string;
    voucherId?: Voucher;
    voucherValue?: number;
    address: string;
    paymentMethod: string;
    paymentStatus: 'Uncompleted' | 'Completed';
    shipping: number;
    shippingMethod?: string;
    status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    createdAt: Date;
    updatedAt: Date;
  }
  export interface OrderItem {
    _id: string;
  productId: Product;
  selectedColor: string;
  selectedSize: number;
  quantity?: number;
  price: number;
}

export interface OrderItemGroup  {
  _id: string;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}