import validator from 'validator'

import { EmailValidator } from '../interfaces/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
  isEmail (email: string): boolean {
    return validator.isEmail(email)
  }
}
