import { CPF } from '@domain/student/cpf'
import { Email } from '@domain/student/email'
import { Phone } from '@domain/student/phone'
import { Student } from '@domain/student/student'

class StudentFactory {
  protected student: Student

  constructor(name: string, cpf: string, email: string, password: string) {
    this.student = new Student({
      cpf: new CPF(cpf),
      name,
      email: new Email(email),
      password,
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
