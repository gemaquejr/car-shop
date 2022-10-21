export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = {
  message: string;
  statusCode: number;
};

export type ErrorCatalogType = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalogType = {
  EntityNotFound: {
    message: 'EntityNotFound',
    statusCode: 404,
  },

  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    statusCode: 400,
  },
};
