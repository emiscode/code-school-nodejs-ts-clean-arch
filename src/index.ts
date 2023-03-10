import { RegisterStudent } from '@application/student/register-student'
import { CPF } from '@domain/student/cpf'
import { CryptoPasswordService } from '@infra/student/crypto-password.service'
import { InMemoryStudentRepository } from '@infra/student/memory.repository'

interface App {
  status: string
}

const app: App = {
  status: 'RUNNING',
}

try {
  console.log(`INFO => ${JSON.stringify(app)}`)
  const studentRepository = new InMemoryStudentRepository()
  const registerStudent = new RegisterStudent(studentRepository)

  registerStudent.execute({
    name: 'Emilio',
    cpf: '070.877.336-21',
    email: 'emiscode@gmail.com',
    password: new CryptoPasswordService().encrypt('123'),
  })

  console.log(studentRepository.findByCPF(new CPF('070.877.336-21')))
} catch (err: unknown) {
  console.log(`ERROR => ${Object(err).message}`)
}

export default app
