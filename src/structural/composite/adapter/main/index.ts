import { EmailValidatorAdapter } from '../implementation/email-validator-adapter'
import { EmailValidator } from '../interfaces/email-validator'

// example usage

const validateEmail = (emailValidator: EmailValidator, email: string): void => {
  if (emailValidator.isEmail(email)) {
    return console.log('e-mail is right!!')
  }
  console.log('e-mail is wrong')
}

const emailValidatorAdapter = new EmailValidatorAdapter()
validateEmail(emailValidatorAdapter, 'gabriel@email.com') // e-mail right!!
validateEmail(emailValidatorAdapter, 'gabrielemail.com') // e-mail wrong
