import { InvalidCPF } from '../../src/domain/student/error/invalid-cpf'
import { CPF } from '../../src/domain/student/cpf'

describe('Given CPF', () => {
  describe('When a valid digit is informed', () => {
    const digit = '971.322.382-99'
    const cpf = new CPF(digit)

    test('Then it should return an instance of CPF', () => {
      expect(cpf).toBeInstanceOf(CPF)
    })
  })

  describe('When an invalid digit is informed', () => {
    const digit = '97.132-238-299'

    test('Then it should thrown an error', () => {
      try {
        new CPF(digit)
      } catch (err: unknown) {
        expect(err).toBeInstanceOf(InvalidCPF)
      }
    })
  })
})
