import { Email } from '../value-object/email'
import { Entity } from './entity'

type StudentProps = {
  cpf: string
  name: string
  email: Email
}

class Student extends Entity {
  constructor(props: StudentProps) {
    super(props)
  }
}

export { Student, StudentProps }
