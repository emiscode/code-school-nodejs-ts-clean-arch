import { InvalidCPF } from '../../src/domain/error/invalid-cpf'
import { CPF } from '../../src/domain/value-object/cpf'

describe('Given CPF', () => {
  let cpf: CPF
  let digit: string

  describe('When a valid digit is informed', () => {
    digit = '971.322.382-99'
    cpf = new CPF(digit)

    test('Then it should return an instance of CPF', () => {
      expect(cpf).toBeInstanceOf(CPF)
    })
  })

  describe('When an invalid digit is informed', () => {
    digit = '97.132-238-299'

    test('Then it should thrown an error', () => {
      try {
        cpf = new CPF(digit)
      } catch (err: unknown) {
        expect(err).toBeInstanceOf(InvalidCPF)
      }
    })
  })
})
