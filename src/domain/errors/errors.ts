interface IErrorsDescription {
  title: string;
  status: number;
  message: string;
}

enum Errors {
  INVALID_USER_DATA = "INVALID_USER_DATA",
}

const errorsDescription: IErrorsDescription[] = [
  {
    title: "INVALID_USER_DATA",
    status: 400,
    message: "The data provided is not valid to create an account.",
  },

  {
    title: "INTERNAL_SERVER_ERROR",
    status: 500,
    message: "Internal Server Error.",
  },
];

export { IErrorsDescription, Errors, errorsDescription };
