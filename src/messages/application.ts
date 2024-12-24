// Application status constants
export const STATUS_APPLICATION_OK: string = "STATUS_APPLICATION_OK";
export const STATUS_APPLICATION_ERROR: string = "STATUS_APPLICATION_ERROR";

// Success messages for database operations
export const INSERT_SUCCESS: string = "El registro se ha guardado correctamente en la base de datos";
export const UPDATE_SUCCESS: string = "El registro se ha modificado correctamente en la base de datos";
export const SELECT_SUCCESS: string = "Registros encontrados en la base de datos";

// Error messages for database operations
export const INSERT_ERROR: string = "INSERT_ERROR";
export const UPDATE_ERROR: string = "UPDATE_ERROR";
export const SELECT_ERROR: string = "SELECT_ERROR";

// Interface for application responses
let resp: ApplicationRequestInterface;

/**
 * Function to create an error response from the application layer
 * @param message - Error message
 * @param data - Error details
 * @returns Application response object with error details
 */
export const ErrorApplication = (message: string = '', data: any) => {
    const payload: any = JSON.parse(data);

    if (JSON.stringify(payload) == '{}') {
        resp = {
            message: `No se encontraron registros para mostrar`,
            status: 'STATUS_APPLICATION_ERROR',
            data: payload
        };
    } else if (payload.name === 'SequelizeConnectionError') {
        resp = {
            message: `Verifique sus accesos de VPN a la intranet`,
            status: 'STATUS_APPLICATION_ERROR',
            data: payload
        };
    } else {
        resp = {
            message: `Application: ${message}`,
            status: 'STATUS_APPLICATION_ERROR',
            data: data
        };
    }

    return resp;
};

/**
 * Function to create a success response from the application layer
 * @param message - Success message
 * @param data - Response data
 * @returns Application response object with success details
 */
export const SuccessApplication = (message: string = '', data: any) => {
    resp = {
        message: message,
        status: 'STATUS_APPLICATION_OK',
        data: data
    };
    return resp;
};
