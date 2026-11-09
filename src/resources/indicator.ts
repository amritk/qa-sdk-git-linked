// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Indicator extends APIResource {
  /**
   * This method is deprecated. Please use /events/indicators to retrieve a paginated list of indicators.
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {IndicatorListListLegacyParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorListListLegacyResponse>} Returns a list of indicators.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.listListLegacy('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   *
   * @deprecated
   */
  listListLegacy(
    datasetID: string,
    params: IndicatorListListLegacyParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorListListLegacyResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicators`,
      { query, ...options },
    );
  }

  /**
   * Creates multiple indicators at once with their respective types and related datasets.
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {IndicatorPostCreateBulkParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorPostCreateBulkResponse>} Returns the number of created indicators.
   *
   * @example
   * ```ts
   * const response = await client.indicator.postCreateBulk('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   indicators: [
   *     {
   *       indicatorType: 'domain',
   *       value: 'malicious-domain.com',
   *     },
   *   ],
   * });
   * ```
   */
  postCreateBulk(
    datasetID: string,
    params: IndicatorPostCreateBulkParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorPostCreateBulkResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicators/bulk`,
      { body, ...options },
    );
  }

  /**
   * Creates a new indicator with the specified type and related datasets.
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {IndicatorCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorCreateResponse>} Returns the created indicator.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   indicatorType: 'domain',
   *   value: 'malicious-domain.com',
   * });
   * ```
   */
  create(
    datasetID: string,
    params: IndicatorCreateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicators/create`,
      { body, ...options },
    );
  }

  /**
   * Returns all mirrored tags from the indicator dataset (DO mirror table). No pagination.
   *
   * @param {string} datasetID - Dataset ID.
   * @param {IndicatorListTagsListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorListTagsListResponse>} Returns an array of mirrored tags.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.listTagsList('datasetId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listTagsList(
    datasetID: string,
    params: IndicatorListTagsListParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorListTagsListResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicators/tags`,
      options,
    );
  }

  /**
   * Deletes a specific indicator by its UUID.
   *
   * @param {string} indicatorID - Indicator UUID.
   * @param {IndicatorDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorDeleteDeleteResponse>} Indicator deleted successfully.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.deleteDelete('indicatorId', {
   *   account_id: 'accountId',
   *   dataset_id: 'datasetId',
   * });
   * ```
   */
  deleteDelete(
    indicatorID: string,
    params: IndicatorDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorDeleteDeleteResponse> {
    const { account_id, dataset_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicatorID}`,
      options,
    );
  }

  /**
   * Retrieves a specific indicator by its UUID.
   *
   * @param {string} indicatorID - Indicator UUID.
   * @param {IndicatorRetrieveReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorRetrieveReadResponse>} Returns the indicator.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.retrieveRead('indicatorId', {
   *   account_id: 'accountId',
   *   dataset_id: 'datasetId',
   * });
   * ```
   */
  retrieveRead(
    indicatorID: string,
    params: IndicatorRetrieveReadParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorRetrieveReadResponse> {
    const { account_id, dataset_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicatorID}`,
      options,
    );
  }

  /**
   * Updates an existing indicator's properties.
   *
   * @param {string} indicatorID - Indicator UUID.
   * @param {IndicatorPatchUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorPatchUpdateResponse>} Returns the updated indicator.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.patchUpdate('indicatorId', {
   *   account_id: 'accountId',
   *   dataset_id: 'datasetId',
   * });
   * ```
   */
  patchUpdate(
    indicatorID: string,
    params: IndicatorPatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorPatchUpdateResponse> {
    const { account_id, dataset_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicatorID}`,
      { body, ...options },
    );
  }

  /**
   * Returns sparse relationship edges. Optionally hydrate related entities via `expand`.
   *
   * @param {string} indicatorID - Indicator UUID.
   * @param {IndicatorListRelationshipsListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorListRelationshipsListResponse>} Returns edges, optional hydrated entities, counts, and pagination.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.listRelationshipsList('indicatorId', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   pageSize: 25,
   * });
   * ```
   */
  listRelationshipsList(
    indicatorID: string,
    params: IndicatorListRelationshipsListParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorListRelationshipsListResponse> {
    const { account_id, dataset_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicatorID}/relationships`,
      { query, ...options },
    );
  }

  /**
   * Creates a new relationship with the indicator as the source entity. Indicator↔indicator relationships are not supported.
   *
   * @param {string} indicatorID - Indicator UUID.
   * @param {IndicatorPostRelationshipCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorPostRelationshipCreateResponse>} Returns the created relationship.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.postRelationshipCreate('indicatorId', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   targetId: 'x',
   *   targetType: 'event',
   *   type: 'related-to',
   * });
   * ```
   */
  postRelationshipCreate(
    indicatorID: string,
    params: IndicatorPostRelationshipCreateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorPostRelationshipCreateResponse> {
    const { account_id, dataset_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicatorID}/relationships`,
      { body, ...options },
    );
  }

  /**
   * Deletes a relationship by UUID. Idempotent: returns deleted=false if not found.
   *
   * @param {string} relUUID - Relationship UUID.
   * @param {IndicatorDeleteRelationshipDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorDeleteRelationshipDeleteResponse>} Returns whether the relationship was deleted.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.deleteRelationshipDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   indicator_id: 'indicatorId',
   * });
   * ```
   */
  deleteRelationshipDelete(
    relUUID: string,
    params: IndicatorDeleteRelationshipDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorDeleteRelationshipDeleteResponse> {
    const { account_id, dataset_id, indicator_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicator_id}/relationships/${relUUID}`,
      options,
    );
  }

  /**
   * Partially updates a relationship by UUID. Only provided fields are changed.
   *
   * @param {string} relUUID - Relationship UUID.
   * @param {IndicatorPatchRelationshipUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorPatchRelationshipUpdateResponse>} Returns the updated relationship.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.patchRelationshipUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   indicator_id: 'indicatorId',
   * });
   * ```
   */
  patchRelationshipUpdate(
    relUUID: string,
    params: IndicatorPatchRelationshipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorPatchRelationshipUpdateResponse> {
    const { account_id, dataset_id, indicator_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicator_id}/relationships/${relUUID}`,
      { body, ...options },
    );
  }

  /**
   * Retrieves indicators across specified datasets, ordered by createdAt descending then UUID, dataset ID, and shard ID ascending. Use the standalone datasetIds value 'all'/'*' for legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If no datasetIds are provided, uses the default dataset.
   *
   * @param {string} accountID - Account ID.
   * @param {IndicatorListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorListListResponse>} Returns a paginated list of indicators.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: IndicatorListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndicatorListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/indicators`, {
      query,
      ...options,
    });
  }

  /**
   * Aggregate threat indicators by one or more columns (e.g., indicatorType, value) across datasets. Returns top-N groups ordered by count.
   *
   * @param {string} accountID - Account ID.
   * @param {IndicatorListAggregateParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorListAggregateResponse>} Returns aggregated indicator data.
   *
   * @example
   * ```ts
   * const indicator = await client.indicator.listAggregate('accountId', {
   *   aggregateBy: 'aggregateBy',
   *   measure: 'indicators',
   *   limit: 10,
   * });
   * ```
   */
  listAggregate(
    accountID: string,
    query: IndicatorListAggregateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorListAggregateResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/indicators/aggregate`, {
      query,
      ...options,
    });
  }
}

export interface IndicatorListListLegacyParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param
   */
  page?: number;
  /**
   * Query param
   */
  pageSize?: number;
  /**
   * Query param: Filter by indicator value (substring match)
   */
  name?: string;
  /**
   * Query param
   */
  indicatorType?: string;
  /**
   * Query param: Filter indicators by related event UUID(s). Multiple UUIDs can be provided by repeating the parameter.
   */
  relatedEvent?: Array<string>;
}

export interface IndicatorListListLegacyResponse {
  indicators: Array<IndicatorListListLegacyResponse.Indicator>;
  pagination: IndicatorListListLegacyResponse.Pagination;
}

export namespace IndicatorListListLegacyResponse {
  export interface Indicator {
    /**
     * @format date-time
     */
    createdAt: string;
    indicatorType: string;
    /**
     * RSS article sources from which this indicator was extracted.
     */
    sources: Array<Indicator.Source>;
    /**
     * @format date-time
     */
    updatedAt: string;
    uuid: string;
    value: string;
    /**
     * The dataset ID this indicator belongs to. Included in list responses.
     */
    datasetId?: string;
    relatedEvents?: Array<Indicator.RelatedEvent>;
    tags?: Array<Indicator.Tag>;
    /**
     * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
     */
    tlp?: string | null;
  }

  export namespace Indicator {
    export interface Source {
      /**
       * @format uuid
       */
      resourceId: string;
      resourceType: 'article';
      system: 'threat-signals';
    }

    export interface RelatedEvent {
      datasetId: string;
      eventId: string;
      /**
       * ISO 8601 date of the related event. Null for legacy relationships created before event-date tracking was added.
       */
      eventDate?: string | null;
    }

    export interface Tag {
      /**
       * The UUID of the tag category, or null when the tag is uncategorized.
       */
      categoryId?: string | null;
      categoryName?: string;
      uuid?: string;
      value?: string;
    }
  }

  export interface Pagination {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  }
}

export interface IndicatorPostCreateBulkParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: Global flag to automatically create indicator types if they don't exist. Individual indicators can override this with their own autoCreateType flag.
   */
  autoCreateType?: boolean;
  /**
   * Body param
   */
  indicators: Array<IndicatorPostCreateBulkParams.Indicator>;
}

export namespace IndicatorPostCreateBulkParams {
  export interface Indicator {
    indicatorType: string;
    value: string;
    /**
     * If true, automatically create the indicator type if it doesn't exist. If false (default), throw an error when the indicator type doesn't exist.
     */
    autoCreateType?: boolean;
    relatedEvents?: Array<Indicator.RelatedEvent>;
    tags?: Array<string | Indicator.Tag>;
    /**
     * Traffic Light Protocol designation. Case-insensitive on input, stored and returned as UPPERCASE. Allowed values: clear, green, amber, amber-strict, red, purple.
     */
    tlp?: string;
  }

  export namespace Indicator {
    export interface RelatedEvent {
      datasetId: string;
      eventId: string;
    }

    export interface Tag {
      value: string;
      categoryName?: string;
    }
  }
}

export type IndicatorPostCreateBulkResponse = number;

export interface IndicatorCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: If true, automatically create the indicator type if it doesn't exist. If false (default), throw an error when the indicator type doesn't exist.
   */
  autoCreateType?: boolean;
  /**
   * Body param
   */
  indicatorType: string;
  /**
   * Body param
   */
  relatedEvents?: Array<IndicatorCreateParams.RelatedEvent>;
  /**
   * Body param
   */
  tags?: Array<string | IndicatorCreateParams.Tag>;
  /**
   * Body param: Traffic Light Protocol designation. Case-insensitive on input, stored and returned as UPPERCASE. Allowed values: clear, green, amber, amber-strict, red, purple.
   */
  tlp?: string;
  /**
   * Body param
   */
  value: string;
}

export namespace IndicatorCreateParams {
  export interface RelatedEvent {
    datasetId: string;
    eventId: string;
  }

  export interface Tag {
    value: string;
    categoryName?: string;
  }
}

export interface IndicatorCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  indicatorType: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
  value: string;
  /**
   * The dataset ID this indicator belongs to. Included in list responses.
   */
  datasetId?: string;
  relatedEvents?: Array<IndicatorCreateResponse.RelatedEvent>;
  tags?: Array<IndicatorCreateResponse.Tag>;
  /**
   * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
   */
  tlp?: string | null;
}

export namespace IndicatorCreateResponse {
  export interface RelatedEvent {
    datasetId: string;
    eventId: string;
    /**
     * ISO 8601 date of the related event. Null for legacy relationships created before event-date tracking was added.
     */
    eventDate?: string | null;
  }

  export interface Tag {
    /**
     * The UUID of the tag category, or null when the tag is uncategorized.
     */
    categoryId?: string | null;
    categoryName?: string;
    uuid?: string;
    value?: string;
  }
}

export interface IndicatorListTagsListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export type IndicatorListTagsListResponse = Array<Record<string, unknown>>;

export interface IndicatorDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Dataset ID.
   */
  dataset_id: string;
}

export interface IndicatorDeleteDeleteResponse {
  message?: string;
  success?: boolean;
}

export interface IndicatorRetrieveReadParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Dataset ID.
   */
  dataset_id: string;
}

export interface IndicatorRetrieveReadResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  indicatorType: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
  value: string;
  /**
   * The dataset ID this indicator belongs to. Included in list responses.
   */
  datasetId?: string;
  relatedEvents?: Array<IndicatorRetrieveReadResponse.RelatedEvent>;
  tags?: Array<IndicatorRetrieveReadResponse.Tag>;
  /**
   * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
   */
  tlp?: string | null;
}

export namespace IndicatorRetrieveReadResponse {
  export interface RelatedEvent {
    datasetId: string;
    eventId: string;
    /**
     * ISO 8601 date of the related event. Null for legacy relationships created before event-date tracking was added.
     */
    eventDate?: string | null;
  }

  export interface Tag {
    /**
     * The UUID of the tag category, or null when the tag is uncategorized.
     */
    categoryId?: string | null;
    categoryName?: string;
    uuid?: string;
    value?: string;
  }
}

export interface IndicatorPatchUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Dataset ID.
   */
  dataset_id: string;
  /**
   * Body param
   */
  indicatorType?: string;
  /**
   * Body param
   */
  relatedEvents?: Array<IndicatorPatchUpdateParams.RelatedEvent>;
  /**
   * Body param
   */
  tags?: Array<string | IndicatorPatchUpdateParams.Tag>;
  /**
   * Body param: Traffic Light Protocol designation. Case-insensitive on input, stored and returned as UPPERCASE. Allowed values: clear, green, amber, amber-strict, red, purple.
   */
  tlp?: string;
  /**
   * Body param
   */
  value?: string;
}

export namespace IndicatorPatchUpdateParams {
  export interface RelatedEvent {
    datasetId: string;
    eventId: string;
  }

  export interface Tag {
    value: string;
    categoryName?: string;
  }
}

export interface IndicatorPatchUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  indicatorType: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
  value: string;
  /**
   * The dataset ID this indicator belongs to. Included in list responses.
   */
  datasetId?: string;
  relatedEvents?: Array<IndicatorPatchUpdateResponse.RelatedEvent>;
  tags?: Array<IndicatorPatchUpdateResponse.Tag>;
  /**
   * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
   */
  tlp?: string | null;
}

export namespace IndicatorPatchUpdateResponse {
  export interface RelatedEvent {
    datasetId: string;
    eventId: string;
    /**
     * ISO 8601 date of the related event. Null for legacy relationships created before event-date tracking was added.
     */
    eventDate?: string | null;
  }

  export interface Tag {
    /**
     * The UUID of the tag category, or null when the tag is uncategorized.
     */
    categoryId?: string | null;
    categoryName?: string;
    uuid?: string;
    value?: string;
  }
}

export interface IndicatorListRelationshipsListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Dataset UUID.
   * @format uuid
   */
  dataset_id: string;
  /**
   * Query param: JSON array of {field, op, value} filters, AND-combined. Fields: entityType (other-end type), type (relationship type), confidence (0–100), metadata.<key>. Example: [{"field":"type","op":"equals","value":"appears_in"},{"field":"confidence","op":"gte","value":50}]
   */
  search?: Array<IndicatorListRelationshipsListParams.Search>;
  /**
   * Query param: Comma-separated entity types to hydrate (event, indicator, tag).
   */
  expand?: Array<string>;
  /**
   * Query param: Keyset cursor from a previous page.
   */
  cursor?: string;
  /**
   * Query param: Page size (1–100, default 25).
   * @minimum 1
   * @maximum 100
   */
  pageSize?: number;
}

export namespace IndicatorListRelationshipsListParams {
  export interface Search {
    /**
     * entityType | type | confidence | metadata.<key>
     */
    field: string;
    /**
     * Search operator. 'exists' only valid for metadata.<key> fields.
     */
    op:
      | 'equals'
      | 'not'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | 'like'
      | 'contains'
      | 'startsWith'
      | 'endsWith'
      | 'in'
      | 'find'
      | 'exists';
    /**
     * Value to compare against. Omit for 'exists' op.
     */
    value?: string | number | boolean | Array<string | number>;
  }
}

export interface IndicatorListRelationshipsListResponse {
  result?: IndicatorListRelationshipsListResponse.Result;
  success?: boolean;
}

export namespace IndicatorListRelationshipsListResponse {
  export interface Result {
    counts?: Record<string, unknown>;
    cursor?: string | null;
    entities?: Array<unknown>;
    hasMore?: boolean;
    hydrationErrors?: Record<string, unknown>;
    relationships?: Array<unknown>;
  }
}

export interface IndicatorPostRelationshipCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Dataset UUID.
   * @format uuid
   */
  dataset_id: string;
  /**
   * Body param: Confidence score 0–100.
   * @minimum 0
   * @maximum 100
   */
  confidence?: number;
  /**
   * Body param: Arbitrary JSON metadata.
   */
  metadata?: Record<string, unknown>;
  /**
   * Body param: UUID of the target entity.
   * @minLength 1
   */
  targetId: string;
  /**
   * Body param: Target type. "indicator" is not allowed (indicator↔indicator relationships are not supported).
   */
  targetType: 'event' | 'tag';
  /**
   * Body param: Relationship type.
   * @minLength 1
   */
  type: string;
}

export interface IndicatorPostRelationshipCreateResponse {
  result: Record<string, unknown>;
  success: boolean;
}

export interface IndicatorDeleteRelationshipDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Dataset UUID.
   * @format uuid
   */
  dataset_id: string;
  /**
   * Indicator UUID.
   */
  indicator_id: string;
}

export interface IndicatorDeleteRelationshipDeleteResponse {
  result?: IndicatorDeleteRelationshipDeleteResponse.Result;
  success?: boolean;
}

export namespace IndicatorDeleteRelationshipDeleteResponse {
  export interface Result {
    deleted?: boolean;
  }
}

export interface IndicatorPatchRelationshipUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Dataset UUID.
   * @format uuid
   */
  dataset_id: string;
  /**
   * Path param: Indicator UUID.
   */
  indicator_id: string;
  /**
   * Body param: Updated confidence. null clears it.
   * @minimum 0
   * @maximum 100
   */
  confidence?: number | null;
  /**
   * Body param: Updated metadata. null clears it.
   */
  metadata?: Record<string, unknown> | null;
  /**
   * Body param: Updated relationship type.
   * @minLength 1
   */
  type?: string;
}

export interface IndicatorPatchRelationshipUpdateResponse {
  result: Record<string, unknown>;
  success: boolean;
}

export interface IndicatorListListParams {
  /**
   * Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If not provided, uses the default dataset.
   */
  datasetIds?: Array<string>;
  page?: number;
  pageSize?: number;
  /**
   * Structured search as a JSON array of {field, op, value} objects. Searchable fields: value, indicatorType, uuid. Supports operators: equals, not, contains, startsWith, endsWith, gt, lt, gte, lte, like, in, find. Use the 'in' operator with an array value to bulk-check up to 100 indicators in a single request, e.g. search=[{"field":"value","op":"in","value":["evil.com","bad.org"]}]. Multiple conditions are AND'd together. Max 10 conditions per request.
   */
  search?: Array<IndicatorListListParams.Search>;
  /**
   * Filter indicators by value using substring match (LIKE). Legacy alternative to structured search.
   */
  name?: string;
  indicatorType?: string;
  /**
   * Filter by related event IDs
   */
  relatedEvents?: Array<string>;
  /**
   * Filter by tag values or UUIDs. Indicators must have at least one of the specified tags (OR logic). Supports both tag UUID and tag value.
   */
  tags?: Array<string>;
  /**
   * Structured tag-metadata filter as a JSON array of {field, op, value} objects. Operates against the per-dataset IndicatorTag mirror so you can find indicators by tag attributes (origin country, motive, sophistication, priority, etc.) without a separate Tags lookup. Common dashboard usage: drill from a country into indicators, e.g. tagSearch=[{"field":"originCountryISO","op":"in","value":["IR","CN"]}]. Country values may be passed as alpha-2, alpha-3, name, or alias (e.g. "iran"). Operators: equals, not, gt/gte/lt/lte (numeric only), contains/like/find/startsWith/endsWith (string only), in. AND-joined across entries; combined with `tags`, a matching tag must satisfy both. Max 10 entries per request, max 100 values per 'in'. Performance notes: `originCountryISO` uses its B-tree index for equals/not/in. `priority` uses its B-tree index for numeric comparisons. Other string columns (`actorCategory`, `motive`, etc.) are case-insensitive and unindexed; current catalog size makes this a non-issue. `endsWith` and `aliasGroupNames` contains/like are leading-wildcard scans and slow on large result sets. `aliasGroupNames` matches on the JSON-encoded text, so substrings can cross alias boundaries ("apt28" also matches "apt280" when both appear in the same tag's alias list).
   */
  tagSearch?: Array<IndicatorListListParams.TagSearch>;
  /**
   * Filter indicators created on or after this date. Must use ISO 8601 format (e.g., '2024-01-15T00:00:00Z').
   * @format date-time
   */
  createdAfter?: string;
  /**
   * Filter indicators created on or before this date. Must use ISO 8601 format (e.g., '2024-12-31T23:59:59Z').
   * @format date-time
   */
  createdBefore?: string;
  /**
   * Limit the number of related events returned per indicator. Default: 2. Set to 0 for none, -1 for all events.
   */
  relatedEventsLimit?: number;
  /**
   * Whether to include full tag details for each indicator. Defaults to true.
   */
  includeTags?: boolean;
  /**
   * Whether to compute total count via COUNT(*). Defaults to false for performance. total_count is null unless this is true and the complete fan-out succeeds.
   */
  includeTotalCount?: boolean;
  /**
   * Output format for indicator data. 'json' returns the default format, 'stix2' returns STIX 2.1 Indicator SDOs, 'taxii' returns a TAXII 2.1 Envelope with Content-Type application/taxii+json;version=2.1.
   */
  format?: 'json' | 'stix2' | 'taxii';
  /**
   * Cache strategy. 'from-graph' serves results from the graph-node KV cache when all requested UUIDs are cached; falls back to normal path on partial/zero hit. Cannot be combined with `cursor`.
   */
  cache?: 'from-graph';
  /**
   * Opaque cursor from a previous response's `pagination.cursor`. When provided, all filters, datasetIds, page, `pageSize`, `includeTags` and `relatedEventsLimit` come from the cursor — do not resend them. Sending any filter, `page`, `pageSize`, `includeTags`, `relatedEventsLimit`, `includeTotalCount=true`, or `cache=from-graph` alongside a cursor yields a 400 `CursorFilterConflictError`. A cursor issued for a different entity, an unsupported version, or a dataset that has since been reconfigured as analytics-only yields a 400 `InvalidCursorError`.
   */
  cursor?: string;
}

export namespace IndicatorListListParams {
  export interface Search {
    /**
     * The indicator field to search on. Allowed: value, indicatorType, uuid.
     */
    field: 'value' | 'indicatorType' | 'uuid';
    /**
     * Search operator. Use 'in' for bulk lookup of up to 100 values at once, e.g. {field:'value', op:'in', value:['evil.com','bad.org']}.
     */
    op:
      | 'equals'
      | 'not'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | 'like'
      | 'contains'
      | 'startsWith'
      | 'endsWith'
      | 'in'
      | 'find';
    /**
     * Search value. String for most operators. Array of strings for 'in' operator (max 100 items).
     */
    value: string | Array<string>;
  }

  export interface TagSearch {
    /**
     * Tag mirror field to filter on. Allowed: value, categoryId, actorCategory, aliasGroupNames, attributionConfidence, attributionOrganization, motive, opsecLevel, originCountryISO, sophisticationLevel, priority, analyticPriority. Filters operate against the per-dataset IndicatorTag mirror (which is kept in sync with the Tags SoT by the tag-propagation workflow).
     */
    field:
      | 'value'
      | 'categoryId'
      | 'actorCategory'
      | 'aliasGroupNames'
      | 'attributionConfidence'
      | 'attributionOrganization'
      | 'motive'
      | 'opsecLevel'
      | 'originCountryISO'
      | 'sophisticationLevel'
      | 'priority'
      | 'analyticPriority';
    /**
     * Search operator. Use 'in' for bulk OR within a single field, e.g. {field:"originCountryISO", op:"in", value:["IR","CN"]}.
     */
    op:
      | 'equals'
      | 'not'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | 'like'
      | 'contains'
      | 'startsWith'
      | 'endsWith'
      | 'in'
      | 'find';
    /**
     * Search value. String or number for most operators. Array for 'in' (max 100 items). Country values may be passed as alpha-2, alpha-3, name, or common alias (e.g. "iran", "IR", "IRN") and are normalized to alpha-2 server-side.
     */
    value?: string | number | Array<string | number>;
  }
}

export interface IndicatorListListResponse {
  properties: IndicatorListListResponse.Properties;
  type: string;
}

export namespace IndicatorListListResponse {
  export interface Properties {
    completeness: Properties.Completeness;
    indicators: Properties.Indicators;
    pagination: Properties.Pagination;
  }

  export namespace Properties {
    export interface Completeness {
      properties: Completeness.Properties;
      type: string;
    }

    export namespace Completeness {
      export interface Properties {
        complete: Properties.Complete;
        failedDatasets: Properties.FailedDatasets;
        failedShards: Properties.FailedShards;
        warnings: Properties.Warnings;
      }

      export namespace Properties {
        export interface Complete {
          type: string;
        }

        export interface FailedDatasets {
          items: FailedDatasets.Items;
          type: string;
        }

        export namespace FailedDatasets {
          export interface Items {
            type: string;
          }
        }

        export interface FailedShards {
          items: FailedShards.Items;
          type: string;
        }

        export namespace FailedShards {
          export interface Items {
            properties: Items.Properties;
            type: string;
          }

          export namespace Items {
            export interface Properties {
              datasetId: Properties.DatasetID;
              shardId: Properties.ShardID;
            }

            export namespace Properties {
              export interface DatasetID {
                type: string;
              }

              export interface ShardID {
                type: string;
              }
            }
          }
        }

        export interface Warnings {
          items: Warnings.Items;
          type: string;
        }

        export namespace Warnings {
          export interface Items {
            type: string;
          }
        }
      }
    }

    export interface Indicators {
      items: Indicators.Items;
      type: string;
    }

    export namespace Indicators {
      export interface Items {
        /**
         * @format date-time
         */
        createdAt: string;
        indicatorType: string;
        /**
         * RSS article sources from which this indicator was extracted.
         */
        sources: Array<Items.Source>;
        /**
         * @format date-time
         */
        updatedAt: string;
        uuid: string;
        value: string;
        /**
         * The dataset ID this indicator belongs to. Included in list responses.
         */
        datasetId?: string;
        relatedEvents?: Array<Items.RelatedEvent>;
        tags?: Array<Items.Tag>;
        /**
         * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
         */
        tlp?: string | null;
      }

      export namespace Items {
        export interface Source {
          /**
           * @format uuid
           */
          resourceId: string;
          resourceType: 'article';
          system: 'threat-signals';
        }

        export interface RelatedEvent {
          datasetId: string;
          eventId: string;
          /**
           * ISO 8601 date of the related event. Null for legacy relationships created before event-date tracking was added.
           */
          eventDate?: string | null;
        }

        export interface Tag {
          /**
           * The UUID of the tag category, or null when the tag is uncategorized.
           */
          categoryId?: string | null;
          categoryName?: string;
          uuid?: string;
          value?: string;
        }
      }
    }

    export interface Pagination {
      properties: Pagination.Properties;
      type: string;
    }

    export namespace Pagination {
      export interface Properties {
        count: Properties.Count;
        cursor: Properties.Cursor;
        has_more: Properties.HasMore;
        page: Properties.Page;
        per_page: Properties.PerPage;
        total_count: Properties.TotalCount;
        total_count_is_exact: Properties.TotalCountIsExact;
      }

      export namespace Properties {
        export interface Count {
          type: string;
        }

        export interface Cursor {
          description: string;
          nullable: boolean;
          type: string;
        }

        export interface HasMore {
          description: string;
          type: string;
        }

        export interface Page {
          type: string;
        }

        export interface PerPage {
          type: string;
        }

        export interface TotalCount {
          description: string;
          nullable: boolean;
          type: string;
        }

        export interface TotalCountIsExact {
          description: string;
          type: string;
        }
      }
    }
  }
}

export interface IndicatorListAggregateParams {
  /**
   * Column(s) to aggregate by - single column or comma-separated list (e.g., 'indicatorType', 'value', 'indicatorType,value')
   */
  aggregateBy: string;
  /**
   * What to count per group: 'indicators' (catalog rows, default) or 'relationships' (linked events per indicator). Use 'relationships' for 'top indicator by event activity'.
   * @default indicators
   */
  measure?: 'indicators' | 'relationships';
  /**
   * Scope to indicators associated with this tag/actor UUID. Combine with measure=relationships for 'top indicator for an actor'.
   */
  tagUuid?: string;
  /**
   * Dataset UUIDs to filter by, or one standalone scope value: 'all'/'*' for all accessible datasets, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If not provided, aggregates across all accessible datasets.
   */
  datasetIds?: Array<string>;
  /**
   * Filter indicators created after this date/datetime (ISO 8601, e.g., '2024-01-01' or '2024-01-01T00:00:00Z')
   */
  createdAfter?: string;
  /**
   * Filter indicators created before this date/datetime (ISO 8601, e.g., '2024-12-31' or '2024-12-31T23:59:59Z')
   */
  createdBefore?: string;
  /**
   * For measure=relationships: only count indicator→event links whose relationship was created/observed on or after this date (ISO 8601). Bounds the activity view to recently-observed links. Note: this filters by the relationship's createdAt (link-observation time), not the underlying event's business date.
   */
  eventDateAfter?: string;
  /**
   * For measure=relationships: only count indicator→event links whose relationship was created/observed on or before this date (ISO 8601). Bounds the activity view by the relationship's createdAt (link-observation time), not the underlying event's business date.
   */
  eventDateBefore?: string;
  /**
   * Maximum number of aggregation results to return (1-100)
   * @default 10
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface IndicatorListAggregateResponse {
  /**
   * Column(s) that were aggregated by
   */
  aggregateBy: string;
  /**
   * Array of aggregation results with dynamic fields based on aggregateBy columns
   */
  aggregations: Array<Record<string, string | null> & IndicatorListAggregateResponse.Aggregation>;
  /**
   * Number of datasets whose aggregation failed and were excluded from the result
   */
  failedDatasets: number;
  /**
   * Total count in the aggregation: indicator rows when measure=indicators, or linked-event rows when measure=relationships
   */
  total: number;
}

export namespace IndicatorListAggregateResponse {
  export interface Aggregation {
    /**
     * Number of indicators for this aggregation
     */
    count: number;
  }
}
export declare namespace Indicator {
  export {
    type IndicatorListListLegacyResponse as IndicatorListListLegacyResponse,
    type IndicatorPostCreateBulkResponse as IndicatorPostCreateBulkResponse,
    type IndicatorCreateResponse as IndicatorCreateResponse,
    type IndicatorListTagsListResponse as IndicatorListTagsListResponse,
    type IndicatorDeleteDeleteResponse as IndicatorDeleteDeleteResponse,
    type IndicatorRetrieveReadResponse as IndicatorRetrieveReadResponse,
    type IndicatorPatchUpdateResponse as IndicatorPatchUpdateResponse,
    type IndicatorListRelationshipsListResponse as IndicatorListRelationshipsListResponse,
    type IndicatorPostRelationshipCreateResponse as IndicatorPostRelationshipCreateResponse,
    type IndicatorDeleteRelationshipDeleteResponse as IndicatorDeleteRelationshipDeleteResponse,
    type IndicatorPatchRelationshipUpdateResponse as IndicatorPatchRelationshipUpdateResponse,
    type IndicatorListListResponse as IndicatorListListResponse,
    type IndicatorListAggregateResponse as IndicatorListAggregateResponse,
    type IndicatorListListLegacyParams as IndicatorListListLegacyParams,
    type IndicatorPostCreateBulkParams as IndicatorPostCreateBulkParams,
    type IndicatorCreateParams as IndicatorCreateParams,
    type IndicatorListTagsListParams as IndicatorListTagsListParams,
    type IndicatorDeleteDeleteParams as IndicatorDeleteDeleteParams,
    type IndicatorRetrieveReadParams as IndicatorRetrieveReadParams,
    type IndicatorPatchUpdateParams as IndicatorPatchUpdateParams,
    type IndicatorListRelationshipsListParams as IndicatorListRelationshipsListParams,
    type IndicatorPostRelationshipCreateParams as IndicatorPostRelationshipCreateParams,
    type IndicatorDeleteRelationshipDeleteParams as IndicatorDeleteRelationshipDeleteParams,
    type IndicatorPatchRelationshipUpdateParams as IndicatorPatchRelationshipUpdateParams,
    type IndicatorListListParams as IndicatorListListParams,
    type IndicatorListAggregateParams as IndicatorListAggregateParams,
  };
}
