import { ValidationError } from "class-validator";

interface ConstraintError {
  error: string;
}

function extractConstraintErrors(errors: ValidationError[]): ConstraintError[] {
  const constraintErrors: ConstraintError[] = [];

  errors.forEach((obj) => {
    const { constraints } = obj;
    if (constraints) {
      const errorKeys = Object.keys(constraints);
      errorKeys.forEach((key) => {
        constraintErrors.push({ error: constraints[key] });
      });
    }
  });

  return constraintErrors;
}

export { extractConstraintErrors, ConstraintError };
