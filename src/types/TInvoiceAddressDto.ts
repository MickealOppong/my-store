export type TInvoiceAddressDto = {
  id?: number,
  companyNIP?: string,
  companyName?: string,
  lastName?: string,
  firstName?: string,
  street: string,
  houseNumber: string,
  apartmentNumber: string,
  postCode: string,
  city: string,
}