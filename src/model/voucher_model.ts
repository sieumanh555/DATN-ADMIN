export interface Voucher {
  _id: string;
  sku_id: string;
  name: string;
  code?: string;
  type?: string;
  value?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Disvoucher {
  _id?: string;
  nameCre: string;
  discountLimit?: string;
  createdAt: Date;
  updatedAt: Date;
}
