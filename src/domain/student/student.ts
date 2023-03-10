import { CPF } from '@domain/student/cpf'
import { Email } from '@domain/student/email'
import { Phone } from '@domain/student/phone'

type StudentProps = {
  cpf: CPF
  name: string
  email: Email
  password: string
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

  get name(): string {
    return this.props.name
  }

  get cpf(): CPF {
    return this.props.cpf
  }

  get email(): Email {
    return this.props.email
  }
}

export { Student, StudentProps }
