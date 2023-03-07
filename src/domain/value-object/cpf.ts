class CPF {
  protected digit: string

  #validator = new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)

  constructor(digit: string) {
    if (!this.#validator.test(digit)) {
      throw Error('Invalid CPF')
    }

    this.digit = digit
  }
}

export { CPF }
