import { CPF } from '@domain/student/cpf'
import { StudentExistsError } from '@domain/student/error/student.error'
import { Student } from '@domain/student/student'
import { StudentRepository } from '@domain/student/student.repository'

class InMemoryStudentRepository implements StudentRepository {
  #students: Array<Student> = []

  register(student: Student): void {
    if (!this.findByCPF(student.cpf)) {
      this.#students.push(student)
    } else {
      throw new StudentExistsError(student.cpf)
    }
  }

  findByCPF(cpf: CPF): Student | undefined {
    return this.#students.find((student) => student.cpf.digit === cpf.digit)
  }

  listAll(): Student[] {
    return this.#students
  }
}

export { InMemoryStudentRepository }
