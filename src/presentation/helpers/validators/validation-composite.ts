import { Validation } from './validation'

export class ValidationComposite implements Validation {
  constructor (private readonly validations: Validation[]) {}

  validate (input: any): Error {
    const error = this.validations.map((validation) => validation.validate(input))
    if (error) {
      return error[input]
    }
  }
}
