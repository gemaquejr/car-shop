export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = {
  error: string;
  statusCode: number;
};

export type ErrorCatalogType = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalogType = {
  EntityNotFound: {
    error: 'Object not found',
    statusCode: 404,
  },

  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    statusCode: 400,
  },
};
