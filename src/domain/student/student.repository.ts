import { CPF } from './cpf'
import { Student } from './student'

interface StudentRepository {
  register(student: Student): void
  findByCPF(cpf: CPF): Student | undefined
  listAll(): Array<Student>
}

export { StudentRepository }
