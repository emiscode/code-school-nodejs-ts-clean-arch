import { InvalidPhoneDDD, InvalidPhoneDigit } from '../error/invalid-phone'

type PhoneProps = {
  ddd: string
  digit: string
}

class Phone {
  protected ddd: string
  protected digit: string

  constructor(props: PhoneProps) {
    if (!props.ddd) {
      throw new InvalidPhoneDDD()
    }

    if (!props.digit) {
      throw new InvalidPhoneDigit()
    }

    this.ddd = props.ddd
    this.digit = props.digit
  }
}

export { Phone }
