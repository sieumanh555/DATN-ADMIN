export interface User {
  _id: string;
  kyc_id: string;
  name: string;
  firstname: string;
  lastname: string;
  phone: string;
  password: string;
  email: string;
  address: string;
  gender: string;
  birthday: string;
  image: string;
  zipcode: number;
  status: string;
  role: number;
  createdAt: Date;
  updatedAt: Date;
}
