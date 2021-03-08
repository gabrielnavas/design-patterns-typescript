import { emailValidatorAdapter } from '../implementation/email-validator-adapter'
import { EmailValidatorFn } from '../interfaces/email-validator'

const validateEmail = (isEmail: EmailValidatorFn, email: string): void =>
  isEmail(email)
    ? console.log('e-mail is right!!')
    : console.log('e-mail is wrong')

validateEmail(emailValidatorAdapter, 'gabriel@email.com') // e-mail right!!ls
validateEmail(emailValidatorAdapter, 'gabrielemail.com') // e-mail wrong
