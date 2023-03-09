import { CPF } from './cpf'
import { Email } from './email'
import { Phone } from './phone'

type StudentProps = {
  cpf: CPF
  name: string
  email: Email
  phones?: Array<Phone>
}

class Student {
  constructor(protected props: StudentProps) {}

  addPhone(phone: Phone): void {
    if (!this.props.phones) {
      this.props.phones = []
    }

    this.props.phones.push(phone)
  }
}

export { Student, StudentProps }
