import { ValidationComposite } from '../entities/validate-composite'
import { ValidateEmail, ValidateNumber, ValidateString } from '../entities/validate-email'

const validateNumber = new ValidateNumber()
const validateString = new ValidateString()
const validateEmail = new ValidateEmail()

const validationComposite = new ValidationComposite()
validationComposite.add(validateNumber)
const isValid = validationComposite.validate(1)
// validationComposite.add(validateString)
// validationComposite.add(validateEmail)
console.log(isValid)
