import { CPF } from '@domain/student/cpf'
import { Student } from '@domain/student/student'

interface StudentRepository {
  register(student: Student): void
  findByCPF(cpf: CPF): Student | undefined
  listAll(): Array<Student>
}

export { StudentRepository }
