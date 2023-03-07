import { Email } from '../../src/domain/value-object/email'

describe('Given Email', () => {
  let email: Email
  let address: string

  describe('When a valid address is informed', () => {
    address = 'emiscode@gmail.com'
    email = new Email(address)

    test('Then it should return an instance of Email', () => {
      expect(email).toBeInstanceOf(Email)
    })
  })

  describe('When an invalid address is informed', () => {
    address = 'emiscode@gmail'

    test('Then it should thrown an error', () => {
      try {
        email = new Email(address)
      } catch (err: unknown) {
        expect(err).toBeInstanceOf(Error)
        expect(Object(err).message).toBe('Invalid Email')
      }
    })
  })
})
