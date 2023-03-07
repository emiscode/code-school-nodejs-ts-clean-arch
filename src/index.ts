import { Student } from './domain/entity/student'
import { CPF } from './domain/value-object/cpf'
import { Email } from './domain/value-object/email'

interface App {
  status: string
}

const app: App = {
  status: 'RUNNING',
}

try {
  console.log(`INFO => ${JSON.stringify(app)}`)

  const email = new Email('emiscode@gmail.com')
  const cpf = new CPF('97.132238299')

  const student = new Student({
    cpf,
    name: 'emilio',
    email,
  })

  console.log(`STUDENT => ${JSON.stringify(student)}`)
} catch (err: unknown) {
  console.log(`ERROR => ${Object(err).message}`)
}

export default app
