import { CPF } from './cpf'
import { Email } from './email'
import { Phone } from './phone'
import { Student } from './student'

class StudentFactory {
  protected student: Student

  constructor(name: string, cpf: string, email: string) {
    this.student = new Student({
      cpf: new CPF(cpf),
      name,
      email: new Email(email),
    })
  }

  withPhone(ddd: string, digit: string): StudentFactory {
    this.student.addPhone(new Phone({ ddd, digit }))
    return this
  }

  create(): Student {
    return this.student
  }
}

export { StudentFactory }
