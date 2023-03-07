import { Student } from './domain/entity/student'
import { Email } from './domain/value-object/email'

interface App {
  status: string
}

const app: App = {
  status: 'RUNNING',
}

try {
  console.log(`INFO => ${JSON.stringify(app)}`)

  const email = new Email('emiscod@gmail.com')

  const student = new Student({
    cpf: '07087733621',
    name: 'emilio',
    email,
  })

  console.log(`STUDENT => ${JSON.stringify(student)}`)
} catch (err: unknown) {
  console.log(`ERROR => ${Object(err).message}`)
}

export default app
