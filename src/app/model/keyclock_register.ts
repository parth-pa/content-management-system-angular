export class KeyclockRegisterModel {
  username: string | undefined
  email?: string
  firstName?: string
  lastName?: string
  enabled: boolean = true
  attributes?: Attributes
  credentials?: Credential[]
}

export class Attributes {
  prefrence_id?: string
}

export class Credential {
  type: string = "password"
  value?: string
}
