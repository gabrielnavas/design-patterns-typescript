import { ValidationComponent } from '../interfaces/validation-component'

export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = []

  validate (value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value)
      if (!validation) return false
    }

    return true
  }

  add (...validations: ValidationComponent[]) {
    validations.forEach(validate => this.children.push(validate))
  }
}
