abstract class InvalidPhone extends Error {
  constructor(err: string) {
    super(`Invalid Phone => ${err}`)
  }
}

class InvalidPhoneDDD extends InvalidPhone {
  constructor() {
    super('ddd')
  }
}

class InvalidPhoneDigit extends InvalidPhone {
  constructor() {
    super('digit')
  }
}

export { InvalidPhoneDDD, InvalidPhoneDigit }
