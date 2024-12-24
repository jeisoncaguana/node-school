// HTTP status constants
export const STATUS_HTTP_SUCCESS: string = "success";
export const STATUS_HTTP_ERROR: string = "error";
export const STATUS_HTTP_WARNING: string = "warning";
export const STATUS_HTTP_INFO: string = "info";

// Interface for HTTP request
let req: HttpRequestInterface;

/**
 * Function to create an error HTTP response
 * @param message - Error message
 * @param status - HTTP status code
 * @param errors - Error details
 * @returns HTTP request object with error details
 */
export function ErrorHttp(message: string = '', status: any, errors: any) {
    req = {
        message: message,
        status: status,
        data: null,
        errors: errors
    };
    return req;
}

/**
 * Function to create a success HTTP response
 * @param message - Success message
 * @param status - HTTP status code
 * @param data - Response data
 * @returns HTTP request object with success details
 */
export function SuccessHttp(message: string = '', status: any, data: any) {
    req = {
        message: message,
        status: status,
        data: data,
        errors: null
    };
    return req;
}