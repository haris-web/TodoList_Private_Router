const responseService = {
    statusCodes: {
      ok: 200,
      created: 201,
      accepted: 202,
      noContent: 204,
      badRequest: 400,
      unauthorized: 401,
      forbidden: 403,
      notFound: 404,
      internalServerError: 500,
      serviceUnavailable: 503,
    },
  
    success(message, data,page,limit,total) {
      const response = {
        success: true,
        message,
        data,
        status: this.statusCodes.ok,
    };

    // If pagination details are provided, include them in the response
    if (page !== null && limit !== null && total !== null) {
        response.page = page;
        response.limit = limit;
        response.total = total;
    }
      return response;
    },
  
    error(message, error) {
      return {
        success: false,
        message,
        error,
        status: this.statusCodes.badRequest,
      };
    },
  
    unauthorizedError(message) {
      return {
        success: false,
        message,
        error: "Unauthorized",
        status: this.statusCodes.unauthorized,
      };
    },
  
    forbiddenError(message) {
      return {
        success: false,
        message,
        error: "Forbidden",
        status: this.statusCodes.forbidden,
      };
    },
  
    notFoundError(message) {
      return {
        success: false,
        message,
        error: "Not Found",
        status: this.statusCodes.notFound,
      };
    },
  
    internalServerError(message) {
      return {
        success: false,
        message,
        error: "Internal Server Error",
        status: this.statusCodes.internalServerError,
      };
    },
  
    serviceUnavailableError(message) {
      return {
        success: false,
        message,
        error: "Service Unavailable",
        status: this.statusCodes.serviceUnavailable,
      };
    },
  };
  
  export default responseService;