import validator from 'validator'
import { EmailValidatorFn } from '../interfaces/email-validator'

const emailValidatorAdapter: EmailValidatorFn = (email: string): boolean =>
  validator.isEmail(email)

export { emailValidatorAdapter }
