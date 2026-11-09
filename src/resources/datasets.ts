// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Datasets extends APIResource {
  /**
   * Populate dataset-specific lookup tables from existing Events data with batch processing
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetPostPopulateResponse>} Returns population results with counts and any errors
   *
   * @example
   * ```ts
   * const dataset = await client.datasets.postPopulate('accountId');
   * ```
   */
  postPopulate(accountID: string, options?: RequestOptions): APIPromise<DatasetPostPopulateResponse> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/datasets/populate`,
      options,
    );
  }
}

export interface DatasetPostPopulateResponse {
  properties: DatasetPostPopulateResponse.Properties;
  type: string;
}

export namespace DatasetPostPopulateResponse {
  export interface Properties {
    accountId: Properties.AccountID;
    datasets: Properties.Datasets;
    errors: Properties.Errors;
    summary: Properties.Summary;
  }

  export namespace Properties {
    export interface AccountID {
      type: string;
    }

    export interface Datasets {
      items: Datasets.Items;
      type: string;
    }

    export namespace Datasets {
      export interface Items {
        properties: Items.Properties;
        type: string;
      }

      export namespace Items {
        export interface Properties {
          attackers: Properties.Attackers;
          categories: Properties.Categories;
          datasetId: Properties.DatasetID;
          indicatorTypes: Properties.IndicatorTypes;
          processingTimeMs: Properties.ProcessingTimeMs;
          targetIndustries: Properties.TargetIndustries;
          totalProcessed: Properties.TotalProcessed;
        }

        export namespace Properties {
          export interface Attackers {
            properties: Attackers.Properties;
            type: string;
          }

          export namespace Attackers {
            export interface Properties {
              created: Properties.Created;
              errors: Properties.Errors;
              found: Properties.Found;
            }

            export namespace Properties {
              export interface Created {
                type: string;
              }

              export interface Errors {
                items: Errors.Items;
                type: string;
              }

              export namespace Errors {
                export interface Items {
                  type: string;
                }
              }

              export interface Found {
                items: Found.Items;
                type: string;
              }

              export namespace Found {
                export interface Items {
                  type: string;
                }
              }
            }
          }

          export interface Categories {
            properties: Categories.Properties;
            type: string;
          }

          export namespace Categories {
            export interface Properties {
              created: Properties.Created;
              errors: Properties.Errors;
              found: Properties.Found;
            }

            export namespace Properties {
              export interface Created {
                type: string;
              }

              export interface Errors {
                items: Errors.Items;
                type: string;
              }

              export namespace Errors {
                export interface Items {
                  type: string;
                }
              }

              export interface Found {
                items: Found.Items;
                type: string;
              }

              export namespace Found {
                export interface Items {
                  type: string;
                }
              }
            }
          }

          export interface DatasetID {
            type: string;
          }

          export interface IndicatorTypes {
            properties: IndicatorTypes.Properties;
            type: string;
          }

          export namespace IndicatorTypes {
            export interface Properties {
              created: Properties.Created;
              errors: Properties.Errors;
              found: Properties.Found;
            }

            export namespace Properties {
              export interface Created {
                type: string;
              }

              export interface Errors {
                items: Errors.Items;
                type: string;
              }

              export namespace Errors {
                export interface Items {
                  type: string;
                }
              }

              export interface Found {
                items: Found.Items;
                type: string;
              }

              export namespace Found {
                export interface Items {
                  type: string;
                }
              }
            }
          }

          export interface ProcessingTimeMs {
            type: string;
          }

          export interface TargetIndustries {
            properties: TargetIndustries.Properties;
            type: string;
          }

          export namespace TargetIndustries {
            export interface Properties {
              created: Properties.Created;
              errors: Properties.Errors;
              found: Properties.Found;
            }

            export namespace Properties {
              export interface Created {
                type: string;
              }

              export interface Errors {
                items: Errors.Items;
                type: string;
              }

              export namespace Errors {
                export interface Items {
                  type: string;
                }
              }

              export interface Found {
                items: Found.Items;
                type: string;
              }

              export namespace Found {
                export interface Items {
                  type: string;
                }
              }
            }
          }

          export interface TotalProcessed {
            type: string;
          }
        }
      }
    }

    export interface Errors {
      items: Errors.Items;
      type: string;
    }

    export namespace Errors {
      export interface Items {
        type: string;
      }
    }

    export interface Summary {
      properties: Summary.Properties;
      type: string;
    }

    export namespace Summary {
      export interface Properties {
        failedDatasets: Properties.FailedDatasets;
        successfulDatasets: Properties.SuccessfulDatasets;
        totalDatasets: Properties.TotalDatasets;
        totalIndicatorTypes: Properties.TotalIndicatorTypes;
        totalProcessingTimeMs: Properties.TotalProcessingTimeMs;
      }

      export namespace Properties {
        export interface FailedDatasets {
          type: string;
        }

        export interface SuccessfulDatasets {
          type: string;
        }

        export interface TotalDatasets {
          type: string;
        }

        export interface TotalIndicatorTypes {
          type: string;
        }

        export interface TotalProcessingTimeMs {
          type: string;
        }
      }
    }
  }
}
export declare namespace Datasets {
  export { type DatasetPostPopulateResponse as DatasetPostPopulateResponse };
}
