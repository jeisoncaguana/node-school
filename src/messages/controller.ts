// Controller status constants
export const STATUS_CONTROLLER_OK: string = "STATUS_CONTROLLER_OK";
export const STATUS_CONTROLLER_ERROR: string = "STATUS_CONTROLLER_ERROR";

// Interface for controller responses
let resp: ControllerRequestInterface;

/**
 * Function to create an error response from the controller layer
 * @param message - Error message
 * @param data - Error details
 * @returns Controller response object with error details
 */
export const ErrorController = (message: string = '', data: any) => {
    resp = {
        message: `${message}`,
        status: 'STATUS_CONTROLLER_ERROR',
        data: data
    };
    return resp;
};

/**
 * Function to create a success response from the controller layer
 * @param message - Success message
 * @param data - Response data
 * @returns Controller response object with success details
 */
export const SuccessController = (message: string = '', data: any) => {
    resp = {
        message: message,
        status: 'STATUS_CONTROLLER_OK',
        data: data
    };
    return resp;
};

/**
 * Function to handle specific Axios error cases in the controller layer
 * @param data - Error data from Axios
 * @returns Controller response object based on the error code
 */
export const CaseErrorAxioxController = (data: any) => {
    switch (data?.code) {
        case 'ERR_BAD_REQUEST':
            resp = {
                message: `${data.response.data.message}`,
                data: data?.response?.data?.errors
            };
            break;
        case 'ETIMEDOUT':
            resp = {
                message: `Verifique su conexión a la VPN`,
                data: {
                    url: data?.config?.url,
                    method: data?.config?.method
                }
            };
            break;
        default:
            resp = {
                message: `No hay información para mostrar`,
                data: {
                    error: "Error wss://, contacte a Soporte",
                    contact: "developer@grupocyt.es"
                }
            };
    }
    return resp;
};

/**
 * Function to create an error response from Axios in the controller layer
 * @param message - Error message
 * @param data - Error details from Axios
 * @returns Controller response object with error details
 */
export const ErrorAxiosController = (message: string = '', data: any) => {
    switch (data?.code) {
        case 'ERR_BAD_REQUEST':
            resp = {
                message: `${data.response.data.message}`,
                status: 'STATUS_CONTROLLER_ERROR',
                data: data?.response?.data?.errors
            };
            break;
        default:
            resp = {
                message: `${message}`,
                status: 'STATUS_CONTROLLER_ERROR',
                data: data
            };
    }
    return resp;
};

/**
 * Function to create a success response from Axios in the controller layer
 * @param message - Success message
 * @param data - Response data from Axios
 * @returns Controller response object with success details
 */
export const SuccessAxiosController = (message: string = '', data: any) => {
    resp = {
        message: message,
        status: 'STATUS_CONTROLLER_OK',
        data: data
    };
    return resp;
};
