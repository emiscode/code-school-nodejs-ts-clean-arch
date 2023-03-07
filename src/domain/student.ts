import { Entity } from './entity'
import { Email } from './email'

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
