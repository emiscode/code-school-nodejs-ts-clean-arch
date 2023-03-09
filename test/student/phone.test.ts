import {
  InvalidPhoneDDD,
  InvalidPhoneDigit,
} from '../../src/domain/student/error/invalid-phone'

import { Phone } from '../../src/domain/student/phone'

describe('Given Phone', () => {
  describe('When a valid phone is informed', () => {
    const phoneProps = { ddd: '35', digit: '999999999' }
    const phone = new Phone(phoneProps)

    test('Then it should return an instance of Phone', () => {
      expect(phone).toBeInstanceOf(Phone)
    })
  })

  describe('When an invalid phone is informed', () => {
    describe('And the error is due to invalid ddd', () => {
      const phoneProps = { ddd: '', digit: '999999999' }

      test('Then it should thrown an error', () => {
        try {
          new Phone(phoneProps)
        } catch (err: unknown) {
          expect(err).toBeInstanceOf(InvalidPhoneDDD)
        }
      })
    })

    describe('And the error is due to invalid digit', () => {
      const phoneProps = { ddd: '35', digit: '' }

      test('Then it should thrown an error', () => {
        try {
          new Phone(phoneProps)
        } catch (err: unknown) {
          expect(err).toBeInstanceOf(InvalidPhoneDigit)
        }
      })
    })
  })
})
