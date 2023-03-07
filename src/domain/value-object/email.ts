class Email {
  protected address: string

  #validator = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'gm'
  )

  constructor(address: string) {
    if (!this.#validator.test(address)) {
      throw Error('Invalid Email')
    }

    this.address = address
  }
}

export { Email }
