interface PasswordService {
  encrypt(password: string): string
  validate(encryptedPassword: string, password: string): boolean
}

export { PasswordService }
