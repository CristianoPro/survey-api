import { makeSignUpValidation } from './signup-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidation Factory', () => {
  it('Should call ValidationComposite with all validatations', () => {
    makeSignUpValidation()
    const fields = ['name', 'email', 'password', 'passwordConfirmation']
    const validations: Validation[] = fields.map((field) => new RequiredFieldValidation(field))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
