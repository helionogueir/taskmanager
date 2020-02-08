import { ValidationPipe, BadRequestException, ValidationError, HttpStatus } from '@nestjs/common'

export class ValidatorHelper extends ValidationPipe {
  constructor () {
    super({
      exceptionFactory: (errors: ValidationError[]) =>
        new BadRequestException(this.mapValidationErrorsToStringArray(errors))
    })
  }

  private mapValidationErrorsToStringArray = (errors: ValidationError[]): string[] => {
    const mappedErrors: string[] = []

    errors.map(err => {
      if (err.children.length) {
        const childrenConstraints = err.children.map(err => Object.values(err.constraints))

        childrenConstraints.forEach(childrenError => {
          childrenError.forEach(error => mappedErrors.push(error))
        })
      }

      if (err.constraints !== undefined) {
        Object.values(err.constraints).forEach(error => {
          mappedErrors.push(error)
        })
      }
    })

    return mappedErrors
  }
}
