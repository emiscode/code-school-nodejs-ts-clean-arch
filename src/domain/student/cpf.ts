import { InvalidCPF } from './error/cpf.error'

class CPF {
  protected digit: string

  #validator = new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)

  constructor(digit: string) {
    if (!this.#validator.test(digit)) {
      throw new InvalidCPF()
    }

    this.digit = digit
  }
}

export { CPF }
