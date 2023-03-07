class Email {
  protected address: string

  #validator = new RegExp(/\S+@\S+\.\S+/)

  constructor(address: string) {
    if (!this.#validator.test(address)) {
      throw Error('Invalid Email')
    }

    this.address = address
  }
}

export { Email }
