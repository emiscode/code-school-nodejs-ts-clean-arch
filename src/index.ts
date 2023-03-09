import { Student } from './domain/entity/student'
import { StudentFactory } from './domain/factory/student-factory'
import { CPF } from './domain/value-object/cpf'
import { Email } from './domain/value-object/email'
import { Phone } from './domain/value-object/phone'

interface App {
  status: string
}

const app: App = {
  status: 'RUNNING',
}

try {
  console.log(`INFO => ${JSON.stringify(app)}`)

  const email = new Email('emiscode@gmail.com')
  const cpf = new CPF('070.877.336-21')
  const phone = new Phone({ ddd: '35', digit: '999999999' })
  const phones: Array<Phone> = [phone]

  const student = new Student({
    cpf,
    name: 'emilio',
    email,
    phones,
  })

  student.addPhone(new Phone({ ddd: '35', digit: '888888888' }))

  const factory = new StudentFactory(
    'emilio',
    '070.877.336-21',
    'emiscode@gmail.com'
  )

  factory.withPhone('35', '99238-8229').withPhone('35', '99876-7777')

  console.log(`STUDENT => ${JSON.stringify(factory)}`)
} catch (err: unknown) {
  console.log(`ERROR => ${Object(err).message}`)
}

export default app
