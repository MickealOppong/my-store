type TTokenDto = {
  accessToken: string,
  token: string,
  expiredAt: string
  issuedAt: string
}
export type TUser = {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
  isActive: boolean,
  telephone: string,
  tokenDto: TTokenDto
}