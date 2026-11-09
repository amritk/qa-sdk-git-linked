// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayDynamicRoutes extends APIResource {
  /**
   * List all AI Gateway Dynamic Routes.
   *
   * @param {string} gatewayID
   * @param {AIGatewayDynamicRouteAigConfigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigListResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigList('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   * });
   * ```
   */
  aigConfigList(
    gatewayID: string,
    params: AIGatewayDynamicRouteAigConfigListParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/routes`, {
      query,
      ...options,
    });
  }

  /**
   * Create a new AI Gateway Dynamic Route.
   *
   * @param {string} gatewayID
   * @param {AIGatewayDynamicRouteAigConfigPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigPostResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPost('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   elements: [
   *     {
   *       id: '',
   *       outputs: {
   *         next: {
   *           elementId: '',
   *         },
   *       },
   *       type: 'start',
   *     },
   *   ],
   *   name: '',
   * });
   * ```
   */
  aigConfigPost(
    gatewayID: string,
    params: AIGatewayDynamicRouteAigConfigPostParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigPostResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/routes`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an AI Gateway Dynamic Route.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigDeleteResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigDelete('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   * });
   * ```
   */
  aigConfigDelete(
    id: string,
    params: AIGatewayDynamicRouteAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigDeleteResponse> {
    const { account_id, gateway_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}`,
      options,
    );
  }

  /**
   * Get an AI Gateway Dynamic Route.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigGetResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigGet('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   * });
   * ```
   */
  aigConfigGet(
    id: string,
    params: AIGatewayDynamicRouteAigConfigGetParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigGetResponse> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}`,
      options,
    );
  }

  /**
   * Update an AI Gateway Dynamic Route.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigUpdate('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   *   name: 'Route Name',
   * });
   * ```
   */
  aigConfigUpdate(
    id: string,
    params: AIGatewayDynamicRouteAigConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigUpdateResponse> {
    const { account_id, gateway_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}`,
      { body, ...options },
    );
  }

  /**
   * List all AI Gateway Dynamic Route Deployments.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigListDeploymentsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigListDeploymentsResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigListDeployments('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   * });
   * ```
   */
  aigConfigListDeployments(
    id: string,
    params: AIGatewayDynamicRouteAigConfigListDeploymentsParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigListDeploymentsResponse> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}/deployments`,
      options,
    );
  }

  /**
   * Create a new AI Gateway Dynamic Route Deployment.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigPostDeploymentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigPostDeploymentResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPostDeployment('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   *   version_id: '54442216',
   * });
   * ```
   */
  aigConfigPostDeployment(
    id: string,
    params: AIGatewayDynamicRouteAigConfigPostDeploymentParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigPostDeploymentResponse> {
    const { account_id, gateway_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}/deployments`,
      { body, ...options },
    );
  }

  /**
   * List all AI Gateway Dynamic Route Versions.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigListVersionsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigListVersionsResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigListVersions('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   * });
   * ```
   */
  aigConfigListVersions(
    id: string,
    params: AIGatewayDynamicRouteAigConfigListVersionsParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigListVersionsResponse> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}/versions`,
      options,
    );
  }

  /**
   * Create a new AI Gateway Dynamic Route Version.
   *
   * @param {string} id
   * @param {AIGatewayDynamicRouteAigConfigPostVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigPostVersionResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPostVersion('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   *   elements: [
   *     {
   *       id: '',
   *       outputs: {
   *         next: {
   *           elementId: '',
   *         },
   *       },
   *       type: 'start',
   *     },
   *   ],
   * });
   * ```
   */
  aigConfigPostVersion(
    id: string,
    params: AIGatewayDynamicRouteAigConfigPostVersionParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigPostVersionResponse> {
    const { account_id, gateway_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}/versions`,
      { body, ...options },
    );
  }

  /**
   * Get an AI Gateway Dynamic Route Version.
   *
   * @param {string} versionID
   * @param {AIGatewayDynamicRouteAigConfigGetVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDynamicRouteAigConfigGetVersionResponse>} Success
   *
   * @example
   * ```ts
   * const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigGetVersion('54442216', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: '54442216',
   *   id: '54442216',
   * });
   * ```
   */
  aigConfigGetVersion(
    versionID: string,
    params: AIGatewayDynamicRouteAigConfigGetVersionParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDynamicRouteAigConfigGetVersionResponse> {
    const { account_id, gateway_id, id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/routes/${id}/versions/${versionID}`,
      options,
    );
  }
}

export interface AIGatewayDynamicRouteAigConfigListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param: Page number
   */
  page?: number;
  /**
   * Query param: Number of routes per page
   */
  per_page?: number;
}

export interface AIGatewayDynamicRouteAigConfigListResponse {
  data: AIGatewayDynamicRouteAigConfigListResponse.Data;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigListResponse {
  export interface Data {
    order_by: string;
    order_by_direction: string;
    page: number;
    per_page: number;
    routes: Array<Data.Route>;
  }

  export namespace Data {
    export interface Route {
      account_tag: string;
      /**
       * @format date-time
       */
      created_at: string;
      deployment: Route.Deployment;
      elements: Array<
        Route.Element | Route.Element2 | Route.Element3 | Route.Element4 | Route.Element5 | Route.Element6
      >;
      gateway_id: string;
      id: string;
      /**
       * @format date-time
       */
      modified_at: string;
      name: string;
      version: Route.Version;
    }

    export namespace Route {
      export interface Deployment {
        created_at: string;
        deployment_id: string;
        version_id: string;
      }

      export interface Element {
        id: string;
        outputs: Element.Outputs;
        type: 'start';
      }

      export namespace Element {
        export interface Outputs {
          next: Outputs.Next;
        }

        export namespace Outputs {
          export interface Next {
            elementId: string;
          }
        }
      }

      export interface Element2 {
        id: string;
        outputs: Element2.Outputs;
        properties: Element2.Properties;
        type: 'conditional';
      }

      export namespace Element2 {
        export interface Outputs {
          false: Outputs.False;
          true: Outputs.True;
        }

        export namespace Outputs {
          export interface False {
            elementId: string;
          }

          export interface True {
            elementId: string;
          }
        }

        export interface Properties {
          conditions?: Record<string, unknown>;
        }
      }

      export interface Element3 {
        id: string;
        outputs: Record<string, Element3.Outputs>;
        type: 'percentage';
      }

      export namespace Element3 {
        export interface Outputs {
          elementId: string;
        }
      }

      export interface Element4 {
        id: string;
        outputs: Element4.Outputs;
        properties: Element4.Properties;
        type: 'rate';
      }

      export namespace Element4 {
        export interface Outputs {
          fallback: Outputs.Fallback;
          success: Outputs.Success;
        }

        export namespace Outputs {
          export interface Fallback {
            elementId: string;
          }

          export interface Success {
            elementId: string;
          }
        }

        export interface Properties {
          key: string;
          limit: number;
          limitType: 'count' | 'cost';
          window: number;
        }
      }

      export interface Element5 {
        id: string;
        outputs: Element5.Outputs;
        properties: Element5.Properties;
        type: 'model';
      }

      export namespace Element5 {
        export interface Outputs {
          fallback: Outputs.Fallback;
          success: Outputs.Success;
        }

        export namespace Outputs {
          export interface Fallback {
            elementId: string;
          }

          export interface Success {
            elementId: string;
          }
        }

        export interface Properties {
          model: string;
          provider: string;
          retries: number;
          timeout: number;
        }
      }

      export interface Element6 {
        id: string;
        outputs: Record<string, Element6.Outputs>;
        type: 'end';
      }

      export namespace Element6 {
        export interface Outputs {
          elementId: string;
        }
      }

      export interface Version {
        active: 'true' | 'false';
        created_at: string;
        data: string;
        version_id: string;
        is_valid?: boolean;
      }
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigPostParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  elements: Array<
    | AIGatewayDynamicRouteAigConfigPostParams.Element
    | AIGatewayDynamicRouteAigConfigPostParams.Element2
    | AIGatewayDynamicRouteAigConfigPostParams.Element3
    | AIGatewayDynamicRouteAigConfigPostParams.Element4
    | AIGatewayDynamicRouteAigConfigPostParams.Element5
    | AIGatewayDynamicRouteAigConfigPostParams.Element6
  >;
  /**
   * Body param
   */
  name: string;
}

export namespace AIGatewayDynamicRouteAigConfigPostParams {
  export interface Element {
    id: string;
    outputs: Element.Outputs;
    type: 'start';
  }

  export namespace Element {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface Element2 {
    id: string;
    outputs: Element2.Outputs;
    properties: Element2.Properties;
    type: 'conditional';
  }

  export namespace Element2 {
    export interface Outputs {
      false: Outputs.False;
      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: Record<string, unknown>;
    }
  }

  export interface Element3 {
    id: string;
    outputs: Record<string, Element3.Outputs>;
    type: 'percentage';
  }

  export namespace Element3 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface Element4 {
    id: string;
    outputs: Element4.Outputs;
    properties: Element4.Properties;
    type: 'rate';
  }

  export namespace Element4 {
    export interface Outputs {
      fallback: Outputs.Fallback;
      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;
      limit: number;
      limitType: 'count' | 'cost';
      window: number;
    }
  }

  export interface Element5 {
    id: string;
    outputs: Element5.Outputs;
    properties: Element5.Properties;
    type: 'model';
  }

  export namespace Element5 {
    export interface Outputs {
      fallback: Outputs.Fallback;
      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;
      provider: string;
      retries: number;
      timeout: number;
    }
  }

  export interface Element6 {
    id: string;
    outputs: Record<string, Element6.Outputs>;
    type: 'end';
  }

  export namespace Element6 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigPostResponse {
  result: AIGatewayDynamicRouteAigConfigPostResponse.Result;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigPostResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    deployment: Result.Deployment;
    elements: Array<
      Result.Element | Result.Element2 | Result.Element3 | Result.Element4 | Result.Element5 | Result.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    version: Result.Version;
  }

  export namespace Result {
    export interface Deployment {
      created_at: string;
      deployment_id: string;
      version_id: string;
    }

    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Version {
      active: 'true' | 'false';
      created_at: string;
      data: string;
      version_id: string;
      is_valid?: boolean;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigDeleteParams {
  account_id: string;
  gateway_id: string;
}

export interface AIGatewayDynamicRouteAigConfigDeleteResponse {
  result: AIGatewayDynamicRouteAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigDeleteResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    elements: Array<
      Result.Element | Result.Element2 | Result.Element3 | Result.Element4 | Result.Element5 | Result.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
  }

  export namespace Result {
    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigGetParams {
  account_id: string;
  gateway_id: string;
}

export interface AIGatewayDynamicRouteAigConfigGetResponse {
  result: AIGatewayDynamicRouteAigConfigGetResponse.Result;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigGetResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    deployment: Result.Deployment;
    elements: Array<
      Result.Element | Result.Element2 | Result.Element3 | Result.Element4 | Result.Element5 | Result.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    version: Result.Version;
  }

  export namespace Result {
    export interface Deployment {
      created_at: string;
      deployment_id: string;
      version_id: string;
    }

    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Version {
      active: 'true' | 'false';
      created_at: string;
      data: string;
      version_id: string;
      is_valid?: boolean;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  gateway_id: string;
  /**
   * Body param
   */
  name: string;
}

export interface AIGatewayDynamicRouteAigConfigUpdateResponse {
  route: AIGatewayDynamicRouteAigConfigUpdateResponse.Route;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigUpdateResponse {
  export interface Route {
    account_tag: string;
    /**
     * @format date-time
     */
    created_at: string;
    deployment: Route.Deployment;
    elements: Array<
      Route.Element | Route.Element2 | Route.Element3 | Route.Element4 | Route.Element5 | Route.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    version: Route.Version;
  }

  export namespace Route {
    export interface Deployment {
      created_at: string;
      deployment_id: string;
      version_id: string;
    }

    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Version {
      active: 'true' | 'false';
      created_at: string;
      data: string;
      version_id: string;
      is_valid?: boolean;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigListDeploymentsParams {
  account_id: string;
  gateway_id: string;
}

export interface AIGatewayDynamicRouteAigConfigListDeploymentsResponse {
  data: AIGatewayDynamicRouteAigConfigListDeploymentsResponse.Data;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigListDeploymentsResponse {
  export interface Data {
    deployments: Array<Data.Deployment>;
    order_by: string;
    order_by_direction: string;
    page: number;
    per_page: number;
  }

  export namespace Data {
    export interface Deployment {
      created_at: string;
      deployment_id: string;
      version_id: string;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigPostDeploymentParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  gateway_id: string;
  /**
   * Body param
   */
  version_id: string;
}

export interface AIGatewayDynamicRouteAigConfigPostDeploymentResponse {
  result: AIGatewayDynamicRouteAigConfigPostDeploymentResponse.Result;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigPostDeploymentResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    elements: Array<
      Result.Element | Result.Element2 | Result.Element3 | Result.Element4 | Result.Element5 | Result.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
  }

  export namespace Result {
    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigListVersionsParams {
  account_id: string;
  gateway_id: string;
}

export interface AIGatewayDynamicRouteAigConfigListVersionsResponse {
  data: AIGatewayDynamicRouteAigConfigListVersionsResponse.Data;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigListVersionsResponse {
  export interface Data {
    order_by: string;
    order_by_direction: string;
    page: number;
    per_page: number;
    versions: Array<Data.Version>;
  }

  export namespace Data {
    export interface Version {
      active: 'true' | 'false';
      created_at: string;
      data: string;
      version_id: string;
      is_valid?: boolean;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigPostVersionParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  gateway_id: string;
  /**
   * Body param
   */
  elements: Array<
    | AIGatewayDynamicRouteAigConfigPostVersionParams.Element
    | AIGatewayDynamicRouteAigConfigPostVersionParams.Element2
    | AIGatewayDynamicRouteAigConfigPostVersionParams.Element3
    | AIGatewayDynamicRouteAigConfigPostVersionParams.Element4
    | AIGatewayDynamicRouteAigConfigPostVersionParams.Element5
    | AIGatewayDynamicRouteAigConfigPostVersionParams.Element6
  >;
}

export namespace AIGatewayDynamicRouteAigConfigPostVersionParams {
  export interface Element {
    id: string;
    outputs: Element.Outputs;
    type: 'start';
  }

  export namespace Element {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface Element2 {
    id: string;
    outputs: Element2.Outputs;
    properties: Element2.Properties;
    type: 'conditional';
  }

  export namespace Element2 {
    export interface Outputs {
      false: Outputs.False;
      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: Record<string, unknown>;
    }
  }

  export interface Element3 {
    id: string;
    outputs: Record<string, Element3.Outputs>;
    type: 'percentage';
  }

  export namespace Element3 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface Element4 {
    id: string;
    outputs: Element4.Outputs;
    properties: Element4.Properties;
    type: 'rate';
  }

  export namespace Element4 {
    export interface Outputs {
      fallback: Outputs.Fallback;
      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;
      limit: number;
      limitType: 'count' | 'cost';
      window: number;
    }
  }

  export interface Element5 {
    id: string;
    outputs: Element5.Outputs;
    properties: Element5.Properties;
    type: 'model';
  }

  export namespace Element5 {
    export interface Outputs {
      fallback: Outputs.Fallback;
      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;
      provider: string;
      retries: number;
      timeout: number;
    }
  }

  export interface Element6 {
    id: string;
    outputs: Record<string, Element6.Outputs>;
    type: 'end';
  }

  export namespace Element6 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigPostVersionResponse {
  result: AIGatewayDynamicRouteAigConfigPostVersionResponse.Result;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigPostVersionResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    elements: Array<
      Result.Element | Result.Element2 | Result.Element3 | Result.Element4 | Result.Element5 | Result.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
  }

  export namespace Result {
    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }
  }
}

export interface AIGatewayDynamicRouteAigConfigGetVersionParams {
  account_id: string;
  gateway_id: string;
  id: string;
}

export interface AIGatewayDynamicRouteAigConfigGetVersionResponse {
  result: AIGatewayDynamicRouteAigConfigGetVersionResponse.Result;
  success: boolean;
}

export namespace AIGatewayDynamicRouteAigConfigGetVersionResponse {
  export interface Result {
    active: 'true' | 'false';
    created_at: string;
    data: string;
    elements: Array<
      Result.Element | Result.Element2 | Result.Element3 | Result.Element4 | Result.Element5 | Result.Element6
    >;
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    version_id: string;
    is_valid?: boolean;
  }

  export namespace Result {
    export interface Element {
      id: string;
      outputs: Element.Outputs;
      type: 'start';
    }

    export namespace Element {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface Element2 {
      id: string;
      outputs: Element2.Outputs;
      properties: Element2.Properties;
      type: 'conditional';
    }

    export namespace Element2 {
      export interface Outputs {
        false: Outputs.False;
        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: Record<string, unknown>;
      }
    }

    export interface Element3 {
      id: string;
      outputs: Record<string, Element3.Outputs>;
      type: 'percentage';
    }

    export namespace Element3 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Element4 {
      id: string;
      outputs: Element4.Outputs;
      properties: Element4.Properties;
      type: 'rate';
    }

    export namespace Element4 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;
        limit: number;
        limitType: 'count' | 'cost';
        window: number;
      }
    }

    export interface Element5 {
      id: string;
      outputs: Element5.Outputs;
      properties: Element5.Properties;
      type: 'model';
    }

    export namespace Element5 {
      export interface Outputs {
        fallback: Outputs.Fallback;
        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;
        provider: string;
        retries: number;
        timeout: number;
      }
    }

    export interface Element6 {
      id: string;
      outputs: Record<string, Element6.Outputs>;
      type: 'end';
    }

    export namespace Element6 {
      export interface Outputs {
        elementId: string;
      }
    }
  }
}
export declare namespace AIGatewayDynamicRoutes {
  export {
    type AIGatewayDynamicRouteAigConfigListResponse as AIGatewayDynamicRouteAigConfigListResponse,
    type AIGatewayDynamicRouteAigConfigPostResponse as AIGatewayDynamicRouteAigConfigPostResponse,
    type AIGatewayDynamicRouteAigConfigDeleteResponse as AIGatewayDynamicRouteAigConfigDeleteResponse,
    type AIGatewayDynamicRouteAigConfigGetResponse as AIGatewayDynamicRouteAigConfigGetResponse,
    type AIGatewayDynamicRouteAigConfigUpdateResponse as AIGatewayDynamicRouteAigConfigUpdateResponse,
    type AIGatewayDynamicRouteAigConfigListDeploymentsResponse as AIGatewayDynamicRouteAigConfigListDeploymentsResponse,
    type AIGatewayDynamicRouteAigConfigPostDeploymentResponse as AIGatewayDynamicRouteAigConfigPostDeploymentResponse,
    type AIGatewayDynamicRouteAigConfigListVersionsResponse as AIGatewayDynamicRouteAigConfigListVersionsResponse,
    type AIGatewayDynamicRouteAigConfigPostVersionResponse as AIGatewayDynamicRouteAigConfigPostVersionResponse,
    type AIGatewayDynamicRouteAigConfigGetVersionResponse as AIGatewayDynamicRouteAigConfigGetVersionResponse,
    type AIGatewayDynamicRouteAigConfigListParams as AIGatewayDynamicRouteAigConfigListParams,
    type AIGatewayDynamicRouteAigConfigPostParams as AIGatewayDynamicRouteAigConfigPostParams,
    type AIGatewayDynamicRouteAigConfigDeleteParams as AIGatewayDynamicRouteAigConfigDeleteParams,
    type AIGatewayDynamicRouteAigConfigGetParams as AIGatewayDynamicRouteAigConfigGetParams,
    type AIGatewayDynamicRouteAigConfigUpdateParams as AIGatewayDynamicRouteAigConfigUpdateParams,
    type AIGatewayDynamicRouteAigConfigListDeploymentsParams as AIGatewayDynamicRouteAigConfigListDeploymentsParams,
    type AIGatewayDynamicRouteAigConfigPostDeploymentParams as AIGatewayDynamicRouteAigConfigPostDeploymentParams,
    type AIGatewayDynamicRouteAigConfigListVersionsParams as AIGatewayDynamicRouteAigConfigListVersionsParams,
    type AIGatewayDynamicRouteAigConfigPostVersionParams as AIGatewayDynamicRouteAigConfigPostVersionParams,
    type AIGatewayDynamicRouteAigConfigGetVersionParams as AIGatewayDynamicRouteAigConfigGetVersionParams,
  };
}
