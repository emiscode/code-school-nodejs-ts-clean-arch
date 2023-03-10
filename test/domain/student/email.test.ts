import { InvalidEmail } from '@domain/student/error/email.error'
import { Email } from '@domain/student/email'

describe('Given Email', () => {
  describe('When a valid address is informed', () => {
    const address = 'emiscode@gmail.com'
    const email = new Email(address)

    test('Then it should return an instance of Email', () => {
      expect(email).toBeInstanceOf(Email)
    })
  })

  describe('When an invalid address is informed', () => {
    const address = 'emiscode@gmail'

    test('Then it should thrown an error', () => {
      try {
        new Email(address)
      } catch (err: unknown) {
        expect(err).toBeInstanceOf(InvalidEmail)
      }
    })
  })
})
