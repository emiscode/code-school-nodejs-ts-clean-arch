import { Student } from '../entity/student'
import { CPF } from '../value-object/cpf'
import { Email } from '../value-object/email'
import { Phone } from '../value-object/phone'

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
}

export { StudentFactory }
