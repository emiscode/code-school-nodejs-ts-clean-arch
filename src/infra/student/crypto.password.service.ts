import crypto from 'crypto'
import { PasswordService } from '../../domain/student/password.service'

class CryptoPasswordService implements PasswordService {
  #algorithm = 'aes-256-cbc'
  #key = crypto.randomBytes(32)
  #iv = crypto.randomBytes(16)

  encrypt(password: string): string {
    try {
      const cipher = crypto.createCipheriv(
        this.#algorithm,
        Buffer.from(this.#key),
        this.#iv
      )
      let encrypted = cipher.update(password)

      encrypted = Buffer.concat([encrypted, cipher.final()])

      return JSON.stringify({
        iv: this.#iv.toString('hex'),
        encryptedData: encrypted.toString('hex'),
      })
    } catch (err: unknown) {
      console.log(`Error => ${Object(err).message}`)
      return String(null)
    }
  }

  validate(encryptedPassword: string, password: string): boolean {
    try {
      const text = JSON.parse(encryptedPassword)
      const iv = Buffer.from(text.iv, 'hex')
      const encryptedText = Buffer.from(text.encryptedData, 'hex')

      const decipher = crypto.createDecipheriv(
        this.#algorithm,
        Buffer.from(this.#key),
        iv
      )

      let decrypted = decipher.update(encryptedText)
      decrypted = Buffer.concat([decrypted, decipher.final()])

      return decrypted.toString() === password
    } catch (err: unknown) {
      console.log(`Error => ${Object(err).message}`)
      return false
    }
  }
}

export { CryptoPasswordService }
