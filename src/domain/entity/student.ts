import { CPF } from '../value-object/cpf'
import { Email } from '../value-object/email'
import { Entity } from './entity'

type StudentProps = {
  cpf: CPF
  name: string
  email: Email
}

class Student extends Entity {
  constructor(props: StudentProps) {
    super(props)
  }
}

export { Student, StudentProps }
