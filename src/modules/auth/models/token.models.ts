export interface PayloadToken {
  role: string;
  sub: number;
}

export interface JwtUser extends PayloadToken {
  iat: number;
  exp: number;
}
