import {
  InvalidPhoneDDD,
  InvalidPhoneDigit,
} from '@domain/student/error/phone.error'

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
