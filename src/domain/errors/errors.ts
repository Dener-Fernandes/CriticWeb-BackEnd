interface IErrorsDescription {
  title: string;
  status: number;
  message: string;
}

enum Errors {
  INVALID_USER_DATA = "INVALID_USER_DATA",
  INVALID_EMAIL_OR_PASSWORD = "INVALID_EMAIL_OR_PASSWORD",
  NO_MOVIE_FOUND = "NO_MOVIE_FOUND",
}

const errorsDescription: IErrorsDescription[] = [
  {
    title: "INVALID_USER_DATA",
    status: 400,
    message: "The data provided is not valid to create an account.",
  },
  {
    title: "INVALID_EMAIL_OR_PASSWORD",
    status: 400,
    message: "Email or password incorrect.",
  },
  {
    title: "NO_MOVIE_FOUND",
    status: 404,
    message: "No movie found.",
  },
  {
    title: "INTERNAL_SERVER_ERROR",
    status: 500,
    message: "Internal Server Error.",
  },
];

export { IErrorsDescription, Errors, errorsDescription };
