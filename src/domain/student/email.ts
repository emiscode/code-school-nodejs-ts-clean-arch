import { InvalidEmail } from '@domain/student/error/email.error'

class Email {
  protected address: string

  #validator = new RegExp(/\S+@\S+\.\S+/)

  constructor(address: string) {
    if (!this.#validator.test(address)) {
      throw new InvalidEmail()
    }

    this.address = address
  }
}

export { Email }
