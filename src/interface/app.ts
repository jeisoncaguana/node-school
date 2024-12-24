/**
 * Interface for application request responses
 */
interface ApplicationRequestInterface {
    status?: 'STATUS_APPLICATION_OK' | 'STATUS_APPLICATION_ERROR';
    message: string;
    data?: any;
}

/**
 * Interface for controller request responses
 */
interface ControllerRequestInterface {
    status?: 'STATUS_CONTROLLER_OK' | 'STATUS_CONTROLLER_ERROR';
    message: string;
    data?: any; 
}

/**
 * Interface for HTTP request responses
 */
interface HttpRequestInterface {
    status?: 'success' | 'error' | 'warning' | 'info';
    message: string;
    data?: any;
    errors?: any; 
} 