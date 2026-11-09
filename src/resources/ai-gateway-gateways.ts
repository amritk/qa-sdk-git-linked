// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayGateways extends APIResource {
  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} accountID
   * @param {AIGatewayGatewayAigConfigListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayGatewayAigConfigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayGateway = await client.aiGatewayGateways.aigConfigList('3ebbcb006d4d46d7bb6a8c7f14676cb0', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  aigConfigList(
    accountID: string,
    query: AIGatewayGatewayAigConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIGatewayGatewayAigConfigListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/gateways`, { query, ...options });
  }

  /**
   * Creates a new AI Gateway.
   *
   * @param {string} accountID
   * @param {AIGatewayGatewayAigConfigCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayGatewayAigConfigCreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const aiGatewayGateway = await client.aiGatewayGateways.aigConfigCreate('3ebbcb006d4d46d7bb6a8c7f14676cb0', {
   *   cache_invalidate_on_update: false,
   *   cache_ttl: 0,
   *   collect_logs: false,
   *   id: 'my-gateway',
   *   rate_limiting_interval: 0,
   *   rate_limiting_limit: 0,
   *   workers_ai_billing_mode: 'postpaid',
   * });
   * ```
   */
  aigConfigCreate(
    accountID: string,
    body: AIGatewayGatewayAigConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayGatewayAigConfigCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/gateways`, { body, ...options });
  }

  /**
   * Retrieves the endpoint URL for an AI Gateway.
   *
   * @param {string} provider
   * @param {AIGatewayGatewayAigConfigGetURLParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayGatewayAigConfigGetURLResponse>} Returns the log details
   *
   * @example
   * ```ts
   * const aiGatewayGateway = await client.aiGatewayGateways.aigConfigGetURL('workers-ai', {
   *   gateway_id: 'my-gateway',
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   * });
   * ```
   */
  aigConfigGetURL(
    provider: string,
    params: AIGatewayGatewayAigConfigGetURLParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayGatewayAigConfigGetURLResponse> {
    const { gateway_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/url/${provider}`,
      options,
    );
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} id - gateway id
   * @param {AIGatewayGatewayAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayGatewayAigConfigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayGateway = await client.aiGatewayGateways.aigConfigDelete('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   * });
   * ```
   */
  aigConfigDelete(
    id: string,
    params: AIGatewayGatewayAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayGatewayAigConfigDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${id}`, options);
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @param {string} id - gateway id
   * @param {AIGatewayGatewayAigConfigFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayGatewayAigConfigFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const aiGatewayGateway = await client.aiGatewayGateways.aigConfigFetch('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   * });
   * ```
   */
  aigConfigFetch(
    id: string,
    params: AIGatewayGatewayAigConfigFetchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayGatewayAigConfigFetchResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${id}`, options);
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @param {string} id - gateway id
   * @param {AIGatewayGatewayAigConfigUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayGatewayAigConfigUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const aiGatewayGateway = await client.aiGatewayGateways.aigConfigUpdate('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   cache_invalidate_on_update: false,
   *   cache_ttl: 0,
   *   collect_logs: false,
   *   rate_limiting_interval: 0,
   *   rate_limiting_limit: 0,
   *   workers_ai_billing_mode: 'postpaid',
   * });
   * ```
   */
  aigConfigUpdate(
    id: string,
    params: AIGatewayGatewayAigConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayGatewayAigConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${id}`, {
      body,
      ...options,
    });
  }
}

export interface AIGatewayGatewayAigConfigListParams {
  /**
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
  /**
   * Search by id
   */
  search?: string;
}

export interface AIGatewayGatewayAigConfigListResponse {
  result: Array<AIGatewayGatewayAigConfigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayGatewayAigConfigListResponse {
  export interface Result {
    cache_invalidate_on_update: boolean;
    /**
     * @minimum 0
     */
    cache_ttl: number | null;
    collect_logs: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @minimum 0
     */
    rate_limiting_interval: number | null;
    /**
     * @minimum 0
     */
    rate_limiting_limit: number | null;
    authentication?: boolean;
    /**
     * Requires customer-provided provider credentials and prevents fallback to Unified Billing.
     */
    byok_only?: boolean;
    dlp?: Result.Dlp | Result.Dlp2;
    guardrails?: Result.Guardrails | null;
    is_default?: boolean;
    log_classification?: boolean;
    /**
     * @minimum 10000
     * @maximum 10000000
     */
    log_management?: number | null;
    log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
    logpush?: boolean;
    /**
     * @minLength 16
     * @maxLength 1024
     */
    logpush_public_key?: string | null;
    /**
     * @maxItems 5
     */
    otel?: Array<Result.Otel> | null;
    rate_limiting_technique?: 'fixed' | 'sliding' | null;
    /**
     * Backoff strategy for retry delays
     */
    retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
    /**
     * Delay between retry attempts in milliseconds (0-60000)
     * @minimum 0
     * @maximum 60000
     */
    retry_delay?: number | null;
    /**
     * Maximum number of retry attempts for failed requests (1-5)
     * @minimum 1
     * @maximum 5
     */
    retry_max_attempts?: number | null;
    spend_limits?: Result.SpendLimits | null;
    store_id?: string | null;
    stripe?: Result.Stripe | null;
    /**
     * Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
     * @default postpaid
     */
    workers_ai_billing_mode?: 'postpaid' | 'unified';
    zdr?: boolean;
  }

  export namespace Result {
    export interface Dlp {
      action: 'BLOCK' | 'FLAG';
      enabled: boolean;
      profiles: Array<string>;
    }

    export interface Dlp2 {
      enabled: boolean;
      policies: Array<Dlp2.Policy>;
    }

    export namespace Dlp2 {
      export interface Policy {
        action: 'FLAG' | 'BLOCK';
        check: Array<'REQUEST' | 'RESPONSE'>;
        enabled: boolean;
        id: string;
        profiles: Array<string>;
      }
    }

    export interface Guardrails {
      prompt: Guardrails.Prompt;
      response: Guardrails.Response;
    }

    export namespace Guardrails {
      export interface Prompt {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }

      export interface Response {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }
    }

    export interface Otel {
      headers: Record<string, string>;
      /**
       * @format uri
       * @maxLength 2048
       */
      url: string;
      /**
       * @maxLength 256
       */
      authorization?: string;
      /**
       * @default json
       */
      content_type?: 'json' | 'protobuf';
    }

    export interface SpendLimits {
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * @default []
       * @maxItems 20
       */
      rules?: Array<SpendLimits.Rule>;
    }

    export namespace SpendLimits {
      export interface Rule {
        /**
         * @exclusiveMinimum 0
         */
        limit: number;
        limitType: 'cost';
        /**
         * @exclusiveMinimum 0
         */
        window: number;
        /**
         * @default true
         */
        enabled?: boolean;
        /**
         * @default 906d8b20
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        id?: string;
        metadata?: Record<string, Rule.Metadata | Rule.Metadata2>;
        model?: Rule.Model;
        provider?: Rule.Provider;
        /**
         * @default sliding
         */
        technique?: 'fixed' | 'sliding';
      }

      export namespace Rule {
        export interface Metadata {
          mode: 'partition';
        }

        export interface Metadata2 {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Model {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Provider {
          mode: 'filter';
          values: Array<string>;
        }
      }
    }

    export interface Stripe {
      authorization: string;
      usage_events: Array<Stripe.UsageEvent>;
    }

    export namespace Stripe {
      export interface UsageEvent {
        payload: string;
      }
    }
  }
}

export interface AIGatewayGatewayAigConfigCreateParams {
  cache_invalidate_on_update: boolean;
  /**
   * @minimum 0
   */
  cache_ttl: number | null;
  collect_logs: boolean;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  /**
   * @minimum 0
   */
  rate_limiting_interval: number | null;
  /**
   * @minimum 0
   */
  rate_limiting_limit: number | null;
  authentication?: boolean;
  /**
   * Requires customer-provided provider credentials and prevents fallback to Unified Billing.
   */
  byok_only?: boolean;
  /**
   * @minimum 10000
   * @maximum 10000000
   */
  log_management?: number | null;
  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
  logpush?: boolean;
  /**
   * @minLength 16
   * @maxLength 1024
   */
  logpush_public_key?: string | null;
  rate_limiting_technique?: 'fixed' | 'sliding' | null;
  /**
   * Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
  /**
   * Delay between retry attempts in milliseconds (0-60000)
   * @minimum 0
   * @maximum 60000
   */
  retry_delay?: number | null;
  /**
   * Maximum number of retry attempts for failed requests (1-5)
   * @minimum 1
   * @maximum 5
   */
  retry_max_attempts?: number | null;
  store_id?: string | null;
  /**
   * Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
   * @default postpaid
   */
  workers_ai_billing_mode?: 'postpaid' | 'unified';
  zdr?: boolean;
}

export interface AIGatewayGatewayAigConfigCreateResponse {
  result: AIGatewayGatewayAigConfigCreateResponse.Result;
  success: boolean;
}

export namespace AIGatewayGatewayAigConfigCreateResponse {
  export interface Result {
    cache_invalidate_on_update: boolean;
    /**
     * @minimum 0
     */
    cache_ttl: number | null;
    collect_logs: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @minimum 0
     */
    rate_limiting_interval: number | null;
    /**
     * @minimum 0
     */
    rate_limiting_limit: number | null;
    authentication?: boolean;
    /**
     * Requires customer-provided provider credentials and prevents fallback to Unified Billing.
     */
    byok_only?: boolean;
    dlp?: Result.Dlp | Result.Dlp2;
    guardrails?: Result.Guardrails | null;
    is_default?: boolean;
    log_classification?: boolean;
    /**
     * @minimum 10000
     * @maximum 10000000
     */
    log_management?: number | null;
    log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
    logpush?: boolean;
    /**
     * @minLength 16
     * @maxLength 1024
     */
    logpush_public_key?: string | null;
    /**
     * @maxItems 5
     */
    otel?: Array<Result.Otel> | null;
    rate_limiting_technique?: 'fixed' | 'sliding' | null;
    /**
     * Backoff strategy for retry delays
     */
    retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
    /**
     * Delay between retry attempts in milliseconds (0-60000)
     * @minimum 0
     * @maximum 60000
     */
    retry_delay?: number | null;
    /**
     * Maximum number of retry attempts for failed requests (1-5)
     * @minimum 1
     * @maximum 5
     */
    retry_max_attempts?: number | null;
    spend_limits?: Result.SpendLimits | null;
    store_id?: string | null;
    stripe?: Result.Stripe | null;
    /**
     * Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
     * @default postpaid
     */
    workers_ai_billing_mode?: 'postpaid' | 'unified';
    zdr?: boolean;
  }

  export namespace Result {
    export interface Dlp {
      action: 'BLOCK' | 'FLAG';
      enabled: boolean;
      profiles: Array<string>;
    }

    export interface Dlp2 {
      enabled: boolean;
      policies: Array<Dlp2.Policy>;
    }

    export namespace Dlp2 {
      export interface Policy {
        action: 'FLAG' | 'BLOCK';
        check: Array<'REQUEST' | 'RESPONSE'>;
        enabled: boolean;
        id: string;
        profiles: Array<string>;
      }
    }

    export interface Guardrails {
      prompt: Guardrails.Prompt;
      response: Guardrails.Response;
    }

    export namespace Guardrails {
      export interface Prompt {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }

      export interface Response {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }
    }

    export interface Otel {
      headers: Record<string, string>;
      /**
       * @format uri
       * @maxLength 2048
       */
      url: string;
      /**
       * @maxLength 256
       */
      authorization?: string;
      /**
       * @default json
       */
      content_type?: 'json' | 'protobuf';
    }

    export interface SpendLimits {
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * @default []
       * @maxItems 20
       */
      rules?: Array<SpendLimits.Rule>;
    }

    export namespace SpendLimits {
      export interface Rule {
        /**
         * @exclusiveMinimum 0
         */
        limit: number;
        limitType: 'cost';
        /**
         * @exclusiveMinimum 0
         */
        window: number;
        /**
         * @default true
         */
        enabled?: boolean;
        /**
         * @default 915d6b52
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        id?: string;
        metadata?: Record<string, Rule.Metadata | Rule.Metadata2>;
        model?: Rule.Model;
        provider?: Rule.Provider;
        /**
         * @default sliding
         */
        technique?: 'fixed' | 'sliding';
      }

      export namespace Rule {
        export interface Metadata {
          mode: 'partition';
        }

        export interface Metadata2 {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Model {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Provider {
          mode: 'filter';
          values: Array<string>;
        }
      }
    }

    export interface Stripe {
      authorization: string;
      usage_events: Array<Stripe.UsageEvent>;
    }

    export namespace Stripe {
      export interface UsageEvent {
        payload: string;
      }
    }
  }
}

export interface AIGatewayGatewayAigConfigGetURLParams {
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
  account_id: string;
}

export interface AIGatewayGatewayAigConfigGetURLResponse {
  result: string;
  success: boolean;
}

export interface AIGatewayGatewayAigConfigDeleteParams {
  account_id: string;
}

export interface AIGatewayGatewayAigConfigDeleteResponse {
  result: AIGatewayGatewayAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayGatewayAigConfigDeleteResponse {
  export interface Result {
    cache_invalidate_on_update: boolean;
    /**
     * @minimum 0
     */
    cache_ttl: number | null;
    collect_logs: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @minimum 0
     */
    rate_limiting_interval: number | null;
    /**
     * @minimum 0
     */
    rate_limiting_limit: number | null;
    authentication?: boolean;
    /**
     * Requires customer-provided provider credentials and prevents fallback to Unified Billing.
     */
    byok_only?: boolean;
    dlp?: Result.Dlp | Result.Dlp2;
    guardrails?: Result.Guardrails | null;
    is_default?: boolean;
    log_classification?: boolean;
    /**
     * @minimum 10000
     * @maximum 10000000
     */
    log_management?: number | null;
    log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
    logpush?: boolean;
    /**
     * @minLength 16
     * @maxLength 1024
     */
    logpush_public_key?: string | null;
    /**
     * @maxItems 5
     */
    otel?: Array<Result.Otel> | null;
    rate_limiting_technique?: 'fixed' | 'sliding' | null;
    /**
     * Backoff strategy for retry delays
     */
    retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
    /**
     * Delay between retry attempts in milliseconds (0-60000)
     * @minimum 0
     * @maximum 60000
     */
    retry_delay?: number | null;
    /**
     * Maximum number of retry attempts for failed requests (1-5)
     * @minimum 1
     * @maximum 5
     */
    retry_max_attempts?: number | null;
    spend_limits?: Result.SpendLimits | null;
    store_id?: string | null;
    stripe?: Result.Stripe | null;
    /**
     * Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
     * @default postpaid
     */
    workers_ai_billing_mode?: 'postpaid' | 'unified';
    zdr?: boolean;
  }

  export namespace Result {
    export interface Dlp {
      action: 'BLOCK' | 'FLAG';
      enabled: boolean;
      profiles: Array<string>;
    }

    export interface Dlp2 {
      enabled: boolean;
      policies: Array<Dlp2.Policy>;
    }

    export namespace Dlp2 {
      export interface Policy {
        action: 'FLAG' | 'BLOCK';
        check: Array<'REQUEST' | 'RESPONSE'>;
        enabled: boolean;
        id: string;
        profiles: Array<string>;
      }
    }

    export interface Guardrails {
      prompt: Guardrails.Prompt;
      response: Guardrails.Response;
    }

    export namespace Guardrails {
      export interface Prompt {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }

      export interface Response {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }
    }

    export interface Otel {
      headers: Record<string, string>;
      /**
       * @format uri
       * @maxLength 2048
       */
      url: string;
      /**
       * @maxLength 256
       */
      authorization?: string;
      /**
       * @default json
       */
      content_type?: 'json' | 'protobuf';
    }

    export interface SpendLimits {
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * @default []
       * @maxItems 20
       */
      rules?: Array<SpendLimits.Rule>;
    }

    export namespace SpendLimits {
      export interface Rule {
        /**
         * @exclusiveMinimum 0
         */
        limit: number;
        limitType: 'cost';
        /**
         * @exclusiveMinimum 0
         */
        window: number;
        /**
         * @default true
         */
        enabled?: boolean;
        /**
         * @default 606973a2
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        id?: string;
        metadata?: Record<string, Rule.Metadata | Rule.Metadata2>;
        model?: Rule.Model;
        provider?: Rule.Provider;
        /**
         * @default sliding
         */
        technique?: 'fixed' | 'sliding';
      }

      export namespace Rule {
        export interface Metadata {
          mode: 'partition';
        }

        export interface Metadata2 {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Model {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Provider {
          mode: 'filter';
          values: Array<string>;
        }
      }
    }

    export interface Stripe {
      authorization: string;
      usage_events: Array<Stripe.UsageEvent>;
    }

    export namespace Stripe {
      export interface UsageEvent {
        payload: string;
      }
    }
  }
}

export interface AIGatewayGatewayAigConfigFetchParams {
  account_id: string;
}

export interface AIGatewayGatewayAigConfigFetchResponse {
  result: AIGatewayGatewayAigConfigFetchResponse.Result;
  success: boolean;
}

export namespace AIGatewayGatewayAigConfigFetchResponse {
  export interface Result {
    cache_invalidate_on_update: boolean;
    /**
     * @minimum 0
     */
    cache_ttl: number | null;
    collect_logs: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @minimum 0
     */
    rate_limiting_interval: number | null;
    /**
     * @minimum 0
     */
    rate_limiting_limit: number | null;
    authentication?: boolean;
    /**
     * Requires customer-provided provider credentials and prevents fallback to Unified Billing.
     */
    byok_only?: boolean;
    dlp?: Result.Dlp | Result.Dlp2;
    guardrails?: Result.Guardrails | null;
    is_default?: boolean;
    log_classification?: boolean;
    /**
     * @minimum 10000
     * @maximum 10000000
     */
    log_management?: number | null;
    log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
    logpush?: boolean;
    /**
     * @minLength 16
     * @maxLength 1024
     */
    logpush_public_key?: string | null;
    /**
     * @maxItems 5
     */
    otel?: Array<Result.Otel> | null;
    rate_limiting_technique?: 'fixed' | 'sliding' | null;
    /**
     * Backoff strategy for retry delays
     */
    retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
    /**
     * Delay between retry attempts in milliseconds (0-60000)
     * @minimum 0
     * @maximum 60000
     */
    retry_delay?: number | null;
    /**
     * Maximum number of retry attempts for failed requests (1-5)
     * @minimum 1
     * @maximum 5
     */
    retry_max_attempts?: number | null;
    spend_limits?: Result.SpendLimits | null;
    store_id?: string | null;
    stripe?: Result.Stripe | null;
    /**
     * Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
     * @default postpaid
     */
    workers_ai_billing_mode?: 'postpaid' | 'unified';
    zdr?: boolean;
  }

  export namespace Result {
    export interface Dlp {
      action: 'BLOCK' | 'FLAG';
      enabled: boolean;
      profiles: Array<string>;
    }

    export interface Dlp2 {
      enabled: boolean;
      policies: Array<Dlp2.Policy>;
    }

    export namespace Dlp2 {
      export interface Policy {
        action: 'FLAG' | 'BLOCK';
        check: Array<'REQUEST' | 'RESPONSE'>;
        enabled: boolean;
        id: string;
        profiles: Array<string>;
      }
    }

    export interface Guardrails {
      prompt: Guardrails.Prompt;
      response: Guardrails.Response;
    }

    export namespace Guardrails {
      export interface Prompt {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }

      export interface Response {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }
    }

    export interface Otel {
      headers: Record<string, string>;
      /**
       * @format uri
       * @maxLength 2048
       */
      url: string;
      /**
       * @maxLength 256
       */
      authorization?: string;
      /**
       * @default json
       */
      content_type?: 'json' | 'protobuf';
    }

    export interface SpendLimits {
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * @default []
       * @maxItems 20
       */
      rules?: Array<SpendLimits.Rule>;
    }

    export namespace SpendLimits {
      export interface Rule {
        /**
         * @exclusiveMinimum 0
         */
        limit: number;
        limitType: 'cost';
        /**
         * @exclusiveMinimum 0
         */
        window: number;
        /**
         * @default true
         */
        enabled?: boolean;
        /**
         * @default 0621f3c6
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        id?: string;
        metadata?: Record<string, Rule.Metadata | Rule.Metadata2>;
        model?: Rule.Model;
        provider?: Rule.Provider;
        /**
         * @default sliding
         */
        technique?: 'fixed' | 'sliding';
      }

      export namespace Rule {
        export interface Metadata {
          mode: 'partition';
        }

        export interface Metadata2 {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Model {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Provider {
          mode: 'filter';
          values: Array<string>;
        }
      }
    }

    export interface Stripe {
      authorization: string;
      usage_events: Array<Stripe.UsageEvent>;
    }

    export namespace Stripe {
      export interface UsageEvent {
        payload: string;
      }
    }
  }
}

export interface AIGatewayGatewayAigConfigUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  authentication?: boolean;
  /**
   * Body param: Requires customer-provided provider credentials and prevents fallback to Unified Billing.
   */
  byok_only?: boolean;
  /**
   * Body param
   */
  cache_invalidate_on_update: boolean;
  /**
   * Body param
   * @minimum 0
   */
  cache_ttl: number | null;
  /**
   * Body param
   */
  collect_logs: boolean;
  /**
   * Body param
   */
  dlp?: AIGatewayGatewayAigConfigUpdateParams.Dlp | AIGatewayGatewayAigConfigUpdateParams.Dlp2;
  /**
   * Body param
   */
  guardrails?: AIGatewayGatewayAigConfigUpdateParams.Guardrails | null;
  /**
   * Body param
   */
  log_classification?: boolean;
  /**
   * Body param
   * @minimum 10000
   * @maximum 10000000
   */
  log_management?: number | null;
  /**
   * Body param
   */
  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
  /**
   * Body param
   */
  logpush?: boolean;
  /**
   * Body param
   * @minLength 16
   * @maxLength 1024
   */
  logpush_public_key?: string | null;
  /**
   * Body param
   * @maxItems 5
   */
  otel?: Array<AIGatewayGatewayAigConfigUpdateParams.Otel> | null;
  /**
   * Body param
   * @minimum 0
   */
  rate_limiting_interval: number | null;
  /**
   * Body param
   * @minimum 0
   */
  rate_limiting_limit: number | null;
  /**
   * Body param
   */
  rate_limiting_technique?: 'fixed' | 'sliding' | null;
  /**
   * Body param: Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
  /**
   * Body param: Delay between retry attempts in milliseconds (0-60000)
   * @minimum 0
   * @maximum 60000
   */
  retry_delay?: number | null;
  /**
   * Body param: Maximum number of retry attempts for failed requests (1-5)
   * @minimum 1
   * @maximum 5
   */
  retry_max_attempts?: number | null;
  /**
   * Body param
   */
  spend_limits?: AIGatewayGatewayAigConfigUpdateParams.SpendLimits | null;
  /**
   * Body param
   */
  store_id?: string | null;
  /**
   * Body param
   */
  stripe?: AIGatewayGatewayAigConfigUpdateParams.Stripe | null;
  /**
   * Body param: Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
   * @default postpaid
   */
  workers_ai_billing_mode?: 'postpaid' | 'unified';
  /**
   * Body param
   */
  zdr?: boolean;
}

export namespace AIGatewayGatewayAigConfigUpdateParams {
  export interface Dlp {
    action: 'BLOCK' | 'FLAG';
    enabled: boolean;
    profiles: Array<string>;
  }

  export interface Dlp2 {
    enabled: boolean;
    policies: Array<Dlp2.Policy>;
  }

  export namespace Dlp2 {
    export interface Policy {
      action: 'FLAG' | 'BLOCK';
      check: Array<'REQUEST' | 'RESPONSE'>;
      enabled: boolean;
      id: string;
      profiles: Array<string>;
    }
  }

  export interface Guardrails {
    prompt: Guardrails.Prompt;
    response: Guardrails.Response;
  }

  export namespace Guardrails {
    export interface Prompt {
      P1?: 'FLAG' | 'BLOCK';
      S1?: 'FLAG' | 'BLOCK';
      S10?: 'FLAG' | 'BLOCK';
      S11?: 'FLAG' | 'BLOCK';
      S12?: 'FLAG' | 'BLOCK';
      S13?: 'FLAG' | 'BLOCK';
      S2?: 'FLAG' | 'BLOCK';
      S3?: 'FLAG' | 'BLOCK';
      S4?: 'FLAG' | 'BLOCK';
      S5?: 'FLAG' | 'BLOCK';
      S6?: 'FLAG' | 'BLOCK';
      S7?: 'FLAG' | 'BLOCK';
      S8?: 'FLAG' | 'BLOCK';
      S9?: 'FLAG' | 'BLOCK';
    }

    export interface Response {
      P1?: 'FLAG' | 'BLOCK';
      S1?: 'FLAG' | 'BLOCK';
      S10?: 'FLAG' | 'BLOCK';
      S11?: 'FLAG' | 'BLOCK';
      S12?: 'FLAG' | 'BLOCK';
      S13?: 'FLAG' | 'BLOCK';
      S2?: 'FLAG' | 'BLOCK';
      S3?: 'FLAG' | 'BLOCK';
      S4?: 'FLAG' | 'BLOCK';
      S5?: 'FLAG' | 'BLOCK';
      S6?: 'FLAG' | 'BLOCK';
      S7?: 'FLAG' | 'BLOCK';
      S8?: 'FLAG' | 'BLOCK';
      S9?: 'FLAG' | 'BLOCK';
    }
  }

  export interface Otel {
    headers: Record<string, string>;
    /**
     * @format uri
     * @maxLength 2048
     */
    url: string;
    /**
     * @maxLength 256
     */
    authorization?: string;
    /**
     * @default json
     */
    content_type?: 'json' | 'protobuf';
  }

  export interface SpendLimits {
    /**
     * @default false
     */
    enabled?: boolean;
    /**
     * @default []
     * @maxItems 20
     */
    rules?: Array<SpendLimits.Rule>;
  }

  export namespace SpendLimits {
    export interface Rule {
      /**
       * @exclusiveMinimum 0
       */
      limit: number;
      limitType: 'cost';
      /**
       * @exclusiveMinimum 0
       */
      window: number;
      /**
       * @default true
       */
      enabled?: boolean;
      /**
       * @default 91caa4d5
       * @minLength 1
       * @pattern ^[a-zA-Z0-9_-]+$
       */
      id?: string;
      metadata?: Record<string, Rule.Metadata | Rule.Metadata2>;
      model?: Rule.Model;
      provider?: Rule.Provider;
      /**
       * @default sliding
       */
      technique?: 'fixed' | 'sliding';
    }

    export namespace Rule {
      export interface Metadata {
        mode: 'partition';
      }

      export interface Metadata2 {
        mode: 'filter';
        values: Array<string>;
      }

      export interface Model {
        mode: 'filter';
        values: Array<string>;
      }

      export interface Provider {
        mode: 'filter';
        values: Array<string>;
      }
    }
  }

  export interface Stripe {
    authorization: string;
    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
}

export interface AIGatewayGatewayAigConfigUpdateResponse {
  result: AIGatewayGatewayAigConfigUpdateResponse.Result;
  success: boolean;
}

export namespace AIGatewayGatewayAigConfigUpdateResponse {
  export interface Result {
    cache_invalidate_on_update: boolean;
    /**
     * @minimum 0
     */
    cache_ttl: number | null;
    collect_logs: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @minimum 0
     */
    rate_limiting_interval: number | null;
    /**
     * @minimum 0
     */
    rate_limiting_limit: number | null;
    authentication?: boolean;
    /**
     * Requires customer-provided provider credentials and prevents fallback to Unified Billing.
     */
    byok_only?: boolean;
    dlp?: Result.Dlp | Result.Dlp2;
    guardrails?: Result.Guardrails | null;
    is_default?: boolean;
    log_classification?: boolean;
    /**
     * @minimum 10000
     * @maximum 10000000
     */
    log_management?: number | null;
    log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;
    logpush?: boolean;
    /**
     * @minLength 16
     * @maxLength 1024
     */
    logpush_public_key?: string | null;
    /**
     * @maxItems 5
     */
    otel?: Array<Result.Otel> | null;
    rate_limiting_technique?: 'fixed' | 'sliding' | null;
    /**
     * Backoff strategy for retry delays
     */
    retry_backoff?: 'constant' | 'linear' | 'exponential' | null;
    /**
     * Delay between retry attempts in milliseconds (0-60000)
     * @minimum 0
     * @maximum 60000
     */
    retry_delay?: number | null;
    /**
     * Maximum number of retry attempts for failed requests (1-5)
     * @minimum 1
     * @maximum 5
     */
    retry_max_attempts?: number | null;
    spend_limits?: Result.SpendLimits | null;
    store_id?: string | null;
    stripe?: Result.Stripe | null;
    /**
     * Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.
     * @default postpaid
     */
    workers_ai_billing_mode?: 'postpaid' | 'unified';
    zdr?: boolean;
  }

  export namespace Result {
    export interface Dlp {
      action: 'BLOCK' | 'FLAG';
      enabled: boolean;
      profiles: Array<string>;
    }

    export interface Dlp2 {
      enabled: boolean;
      policies: Array<Dlp2.Policy>;
    }

    export namespace Dlp2 {
      export interface Policy {
        action: 'FLAG' | 'BLOCK';
        check: Array<'REQUEST' | 'RESPONSE'>;
        enabled: boolean;
        id: string;
        profiles: Array<string>;
      }
    }

    export interface Guardrails {
      prompt: Guardrails.Prompt;
      response: Guardrails.Response;
    }

    export namespace Guardrails {
      export interface Prompt {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }

      export interface Response {
        P1?: 'FLAG' | 'BLOCK';
        S1?: 'FLAG' | 'BLOCK';
        S10?: 'FLAG' | 'BLOCK';
        S11?: 'FLAG' | 'BLOCK';
        S12?: 'FLAG' | 'BLOCK';
        S13?: 'FLAG' | 'BLOCK';
        S2?: 'FLAG' | 'BLOCK';
        S3?: 'FLAG' | 'BLOCK';
        S4?: 'FLAG' | 'BLOCK';
        S5?: 'FLAG' | 'BLOCK';
        S6?: 'FLAG' | 'BLOCK';
        S7?: 'FLAG' | 'BLOCK';
        S8?: 'FLAG' | 'BLOCK';
        S9?: 'FLAG' | 'BLOCK';
      }
    }

    export interface Otel {
      headers: Record<string, string>;
      /**
       * @format uri
       * @maxLength 2048
       */
      url: string;
      /**
       * @maxLength 256
       */
      authorization?: string;
      /**
       * @default json
       */
      content_type?: 'json' | 'protobuf';
    }

    export interface SpendLimits {
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * @default []
       * @maxItems 20
       */
      rules?: Array<SpendLimits.Rule>;
    }

    export namespace SpendLimits {
      export interface Rule {
        /**
         * @exclusiveMinimum 0
         */
        limit: number;
        limitType: 'cost';
        /**
         * @exclusiveMinimum 0
         */
        window: number;
        /**
         * @default true
         */
        enabled?: boolean;
        /**
         * @default e5855234
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        id?: string;
        metadata?: Record<string, Rule.Metadata | Rule.Metadata2>;
        model?: Rule.Model;
        provider?: Rule.Provider;
        /**
         * @default sliding
         */
        technique?: 'fixed' | 'sliding';
      }

      export namespace Rule {
        export interface Metadata {
          mode: 'partition';
        }

        export interface Metadata2 {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Model {
          mode: 'filter';
          values: Array<string>;
        }

        export interface Provider {
          mode: 'filter';
          values: Array<string>;
        }
      }
    }

    export interface Stripe {
      authorization: string;
      usage_events: Array<Stripe.UsageEvent>;
    }

    export namespace Stripe {
      export interface UsageEvent {
        payload: string;
      }
    }
  }
}
export declare namespace AIGatewayGateways {
  export {
    type AIGatewayGatewayAigConfigListResponse as AIGatewayGatewayAigConfigListResponse,
    type AIGatewayGatewayAigConfigCreateResponse as AIGatewayGatewayAigConfigCreateResponse,
    type AIGatewayGatewayAigConfigGetURLResponse as AIGatewayGatewayAigConfigGetURLResponse,
    type AIGatewayGatewayAigConfigDeleteResponse as AIGatewayGatewayAigConfigDeleteResponse,
    type AIGatewayGatewayAigConfigFetchResponse as AIGatewayGatewayAigConfigFetchResponse,
    type AIGatewayGatewayAigConfigUpdateResponse as AIGatewayGatewayAigConfigUpdateResponse,
    type AIGatewayGatewayAigConfigListParams as AIGatewayGatewayAigConfigListParams,
    type AIGatewayGatewayAigConfigCreateParams as AIGatewayGatewayAigConfigCreateParams,
    type AIGatewayGatewayAigConfigGetURLParams as AIGatewayGatewayAigConfigGetURLParams,
    type AIGatewayGatewayAigConfigDeleteParams as AIGatewayGatewayAigConfigDeleteParams,
    type AIGatewayGatewayAigConfigFetchParams as AIGatewayGatewayAigConfigFetchParams,
    type AIGatewayGatewayAigConfigUpdateParams as AIGatewayGatewayAigConfigUpdateParams,
  };
}
