import { CPF } from '../value-object/cpf'
import { Phone } from '../value-object/phone'
import { Email } from '../value-object/email'

type StudentProps = {
  cpf: CPF
  name: string
  email: Email
  phones: Array<Phone>
}

class Student {
  constructor(protected props: StudentProps) {}

  addPhone(phone: Phone): void {
    this.props.phones.push(phone)
  }
}

export { Student, StudentProps }
