import { PaymentMethod } from "../types/general";
import { customFetch, getFromLocalStorage } from "./util";

export async function fetchPaymentMethods(): Promise<PaymentMethod[]> {
  const response = await customFetch.get('/payment-method', {
    headers: {
      Authorization: `Bearer ${getFromLocalStorage('uat')}`,
      "Content-Type": 'multipart/form-data'
    }
  })
  const paymentMethodList: PaymentMethod[] = response.data;
  return paymentMethodList
}