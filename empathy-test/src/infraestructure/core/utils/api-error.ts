export class ApiError extends Error {
  public response;
  public parsedBody;
  public isBackendError;
  constructor(response, parsedBody) {
    super(response.statusText);
    this.name = "ApiError";
    this.response = response;
    this.parsedBody = parsedBody;

    this.isBackendError = true;
  }
}
