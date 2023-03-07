import { CPF } from '../value-object/cpf'
import { Phone } from '../value-object/phone'
import { Email } from '../value-object/email'
import { Entity } from './entity'

type StudentProps = {
  cpf: CPF
  name: string
  email: Email
  phones: Array<Phone>
}

class Student extends Entity {
  constructor(props: StudentProps) {
    super(props)
  }
}

export { Student, StudentProps }
