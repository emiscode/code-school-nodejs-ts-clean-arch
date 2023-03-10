import { StudentFactory } from '@domain/student/student.factory'
import { StudentRepository } from '@domain/student/student.repository'
import { StudentDTO } from './student.dto'

class RegisterStudent {
  constructor(private studentRepository: StudentRepository) {}

  execute(studentDTO: StudentDTO) {
    const student = new StudentFactory(
      studentDTO.name,
      studentDTO.cpf,
      studentDTO.email,
      studentDTO.password
    ).create()

    this.studentRepository.register(student)
  }
}

export { RegisterStudent }
