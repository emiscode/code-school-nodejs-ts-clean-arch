import { CPF } from '@domain/student/cpf'

class StudentExistsError extends Error {
  constructor(cpf: CPF) {
    super(`Student with CPF ${cpf.digit} is ALREADY REGISTERED`)
  }
}

class StudentNotFoundError extends Error {
  constructor(cpf: CPF) {
    super(`Student with CPF ${cpf.digit} is NOT FOUND`)
  }
}

export { StudentExistsError, StudentNotFoundError }
