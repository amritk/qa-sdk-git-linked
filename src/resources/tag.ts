// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Tag extends APIResource {
  /**
   * This endpoint is deprecated. Use GET /:account_id/events/tags/:tag_uuid/indicators with the optional datasetIds query parameter instead. Returns indicators associated with the provided tag UUID within a single dataset's indicator shards, with pagination.
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagListDatasetIndicatorsListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagListDatasetIndicatorsListResponse>} Returns a paginated list of indicators.
   *
   * @example
   * ```ts
   * const tag = await client.tag.listDatasetIndicatorsList('tagUuid', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   *
   * @deprecated
   */
  listDatasetIndicatorsList(
    tagUUID: string,
    params: TagListDatasetIndicatorsListParams,
    options?: RequestOptions,
  ): APIPromise<TagListDatasetIndicatorsListResponse> {
    const { account_id, dataset_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/tags/${tagUUID}/indicators`,
      { query, ...options },
    );
  }

  /**
   * Returns all Source-of-Truth tags for an account. Supports legacy free-text `search` on tag value and `categoryUuid` exact match, plus a structured `filters` JSON array for filtering by metadata fields (originCountryISO, actorCategory, motive, priority, etc.). Country values may be passed as alpha-2, alpha-3, name, or common alias.
   *
   * @param {string} accountID - Account ID.
   * @param {TagListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagListListResponse>} Returns a paginated list of tags.
   *
   * @example
   * ```ts
   * const tag = await client.tag.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: TagListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/tags`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new tag to be used accross threat events.
   *
   * @param {string} accountID - Account ID.
   * @param {TagCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagCreateResponse>} Returns the created tag.
   *
   * @example
   * ```ts
   * const tag = await client.tag.create('accountId', {
   *   value: 'APT28',
   * });
   * ```
   */
  create(accountID: string, body: TagCreateParams, options?: RequestOptions): APIPromise<TagCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a Source-of-Truth tag by UUID.
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagDeleteDeleteResponse>} Returns the uuid of the deleted tag.
   *
   * @example
   * ```ts
   * const tag = await client.tag.deleteDelete('tagUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteDelete(
    tagUUID: string,
    params: TagDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TagDeleteDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}`,
      options,
    );
  }

  /**
   * Returns a single Source-of-Truth tag by UUID, including custom fields (properties).
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagRetrieveDetailParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagRetrieveDetailResponse>} Returns the tag.
   *
   * @example
   * ```ts
   * const tag = await client.tag.retrieveDetail('tagUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveDetail(
    tagUUID: string,
    params: TagRetrieveDetailParams,
    options?: RequestOptions,
  ): APIPromise<TagRetrieveDetailResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}`,
      options,
    );
  }

  /**
   * Updates a Source-of-Truth tag by UUID.
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagPatchUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagPatchUpdateResponse>} Returns the updated tag.
   *
   * @example
   * ```ts
   * const tag = await client.tag.patchUpdate('tagUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  patchUpdate(
    tagUUID: string,
    params: TagPatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TagPatchUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns indicators associated with the provided tag UUID, with pagination. By default fans out across every indicator dataset the account can read; pass datasetIds to scope to UUIDs, analytics datasets, or operational datasets. Analytics datasets do not expose tag associations, so the analytics scope returns an empty result.
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagListIndicatorsListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagListIndicatorsListResponse>} Returns a paginated list of indicators.
   *
   * @example
   * ```ts
   * const tag = await client.tag.listIndicatorsList('tagUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listIndicatorsList(
    tagUUID: string,
    params: TagListIndicatorsListParams,
    options?: RequestOptions,
  ): APIPromise<TagListIndicatorsListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}/indicators`,
      { query, ...options },
    );
  }

  /**
   * Returns sparse relationship edges. Optionally hydrate related entities via `expand`. Fans out across all accessible indicator dataset shards. Analytics datasets do not expose tag associations, so the analytics scope returns an empty result.
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagListRelationshipsListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagListRelationshipsListResponse>} Returns edges, optional hydrated entities, counts, and pagination.
   *
   * @example
   * ```ts
   * const tag = await client.tag.listRelationshipsList('tagUuid', {
   *   account_id: 'accountId',
   *   pageSize: 25,
   * });
   * ```
   */
  listRelationshipsList(
    tagUUID: string,
    params: TagListRelationshipsListParams,
    options?: RequestOptions,
  ): APIPromise<TagListRelationshipsListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}/relationships`,
      { query, ...options },
    );
  }

  /**
   * Creates a new relationship with the tag as the source entity. Requires a datasetId to locate the Indicators DO.
   *
   * @param {string} tagUUID - Tag UUID.
   * @param {TagPostRelationshipCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagPostRelationshipCreateResponse>} Returns the created relationship.
   *
   * @example
   * ```ts
   * const tag = await client.tag.postRelationshipCreate('tagUuid', {
   *   account_id: 'accountId',
   *   datasetId: 'x',
   *   targetId: 'x',
   *   targetType: 'event',
   *   type: 'attributed-to',
   * });
   * ```
   */
  postRelationshipCreate(
    tagUUID: string,
    params: TagPostRelationshipCreateParams,
    options?: RequestOptions,
  ): APIPromise<TagPostRelationshipCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}/relationships`,
      { body, ...options },
    );
  }

  /**
   * Deletes a relationship by UUID. Idempotent: returns deleted=false if not found. Requires datasetId query param.
   *
   * @param {string} relUUID - Relationship UUID.
   * @param {TagDeleteRelationshipDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagDeleteRelationshipDeleteResponse>} Returns whether the relationship was deleted.
   *
   * @example
   * ```ts
   * const tag = await client.tag.deleteRelationshipDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   tag_uuid: 'tagUuid',
   *   datasetId: 'datasetId',
   * });
   * ```
   */
  deleteRelationshipDelete(
    relUUID: string,
    params: TagDeleteRelationshipDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TagDeleteRelationshipDeleteResponse> {
    const { account_id, tag_uuid, datasetId } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tag_uuid}/relationships/${relUUID}`,
      { query: { datasetId }, ...options },
    );
  }

  /**
   * Partially updates a relationship by UUID. Requires datasetId query param.
   *
   * @param {string} relUUID - Relationship UUID.
   * @param {TagPatchRelationshipUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagPatchRelationshipUpdateResponse>} Returns the updated relationship.
   *
   * @example
   * ```ts
   * const tag = await client.tag.patchRelationshipUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   tag_uuid: 'tagUuid',
   *   datasetId: 'datasetId',
   * });
   * ```
   */
  patchRelationshipUpdate(
    relUUID: string,
    params: TagPatchRelationshipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TagPatchRelationshipUpdateResponse> {
    const { account_id, tag_uuid, datasetId, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/${tag_uuid}/relationships/${relUUID}`,
      { body, query: { datasetId }, ...options },
    );
  }
}

export interface TagListDatasetIndicatorsListParams {
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
   * Query param
   */
  page?: number;
  /**
   * Query param
   */
  pageSize?: number;
  /**
   * Query param
   */
  indicatorType?: string;
  /**
   * Query param: Filter indicators by related event UUID(s). Multiple UUIDs can be provided by repeating the parameter.
   */
  relatedEvent?: Array<string>;
  /**
   * Query param: Structured search as a JSON array of {field, op, value} objects. Searchable fields: value, indicatorType. Multiple conditions are AND'd together. Max 10 conditions per request.
   */
  search?: Array<TagListDatasetIndicatorsListParams.Search>;
}

export namespace TagListDatasetIndicatorsListParams {
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
}

export interface TagListDatasetIndicatorsListResponse {
  indicators: Array<TagListDatasetIndicatorsListResponse.Indicator>;
  pagination: TagListDatasetIndicatorsListResponse.Pagination;
}

export namespace TagListDatasetIndicatorsListResponse {
  export interface Indicator {
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
    relatedEvents?: Array<Indicator.RelatedEvent>;
    tags?: Array<Indicator.Tag>;
    /**
     * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
     */
    tlp?: string | null;
  }

  export namespace Indicator {
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

export interface TagListListParams {
  page?: number;
  pageSize?: number;
  /**
   * Free-text substring match on tag value AND custom-field properties. Searches case-insensitively inside both `Tag.value` and the serialized `Tag.properties` JSON blob (keys, values, and annotation metadata like confidence/tlp are all searchable). Same serialized-text tradeoff as `aliasGroupNames` — substrings can cross JSON boundaries.
   */
  search?: string;
  categoryUuid?: string;
  /**
   * Structured filters as a JSON array of {field, op, value} objects. Searchable fields: uuid, value, categoryName, description, dateOfDiscovery, tlp, confidence, actorCategory, motive, attributionOrganization, originCountryISO, aliases, externalReferences, opsecLevel, sophisticationLevel, activeDuration, priority, lastSeen, aliasGroupNames. Operators: equals, not, contains, startsWith, endsWith, gt, lt, gte, lte, like, in, find. Use 'in' for bulk OR within a single field, e.g. filters=[{"field":"originCountryISO","op":"in","value":["IR","CN"]}]. Multiple entries are AND-joined. Max 10 entries per request, max 100 values per 'in'. Per-field notes: `uuid` accepts only 'equals' and 'in' (other operators throw ValidationError) — matched against the canonical lowercase storage but callers may pass either case (the server lowercases before comparison); index-backed by the column's UNIQUE constraint and intended for batched UUID → tag resolution. `originCountryISO` uses its B-tree index for equals/not/in. `priority` uses its B-tree index for numeric comparisons. Other string columns (`actorCategory`, `motive`, etc.) are case-insensitive and unindexed; current catalog size makes this a non-issue. `endsWith` and `aliasGroupNames` contains/like are leading-wildcard scans and slow on large result sets. `aliasGroupNames` matches on the JSON-encoded text, so substrings can cross alias boundaries (a search for "apt28" will also match "apt280" if both appear in the same tag's alias list).
   */
  filters?: Array<TagListListParams.Filter>;
  /**
   * Cache strategy. 'from-graph' serves results from the graph-node KV cache when all requested UUIDs are cached; falls back to normal path on partial/zero hit.
   */
  cache?: 'from-graph';
}

export namespace TagListListParams {
  export interface Filter {
    /**
     * Tag field to search on. Allowed first-class fields: uuid, value, categoryName, description, dateOfDiscovery, tlp, confidence, actorCategory, motive, attributionOrganization, originCountryISO, aliases, externalReferences, opsecLevel, sophisticationLevel, activeDuration, priority, lastSeen, aliasGroupNames. Also supports properties.<key> to filter on custom field values (matches both raw values and annotated {value,confidence,tlp} shapes via COALESCE), and properties.<key>.tlp / properties.<key>.confidence to filter directly on annotation sub-fields.
     */
    field: string;
    /**
     * Search operator. Use 'in' for bulk OR within a single field.
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
     * Search value. String or number for most operators. Array for 'in' (max 100 items).
     */
    value?: string | number | Array<string | number>;
  }
}

export interface TagListListResponse {
  pagination: TagListListResponse.Pagination;
  tags: Array<TagListListResponse.Tag>;
}

export namespace TagListListResponse {
  export interface Pagination {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  }

  export interface Tag {
    uuid: string;
    value: string;
    activeDuration?: string;
    activeDuration_annotated?: Tag.ActiveDurationAnnotated | null;
    actorCategory?: string;
    actorCategory_annotated?: Tag.ActorCategoryAnnotated | null;
    aliasGroupNames?: Array<string>;
    aliasGroupNamesInternal?: Array<string>;
    /**
     * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
     */
    aliases?: Array<Tag.Alias>;
    attributionOrganization?: string;
    attributionOrganization_annotated?: Tag.AttributionOrganizationAnnotated | null;
    categoryName?: string;
    categoryUuid?: string;
    /**
     * Overall tag confidence (1-10).
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    createdAt?: string;
    dateOfDiscovery?: string;
    description?: string;
    externalReferenceLinks?: Array<string>;
    /**
     * Structured external references ({ url, description }). Public: returned to all accounts.
     */
    externalReferences?: Array<Tag.ExternalReference>;
    externalReferences_annotated?: Array<Tag.ExternalReferencesAnnotated> | null;
    /**
     * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
     */
    internalAliases?: Array<Tag.InternalAlias>;
    internalDescription?: string;
    lastSeen?: string;
    motive?: string;
    motive_annotated?: Tag.MotiveAnnotated | null;
    opsecLevel?: string;
    opsecLevel_annotated?: Tag.OpsecLevelAnnotated | null;
    /**
     * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null when stored value is blank/whitespace.
     */
    originCountryISO?: string | null;
    originCountryISO_annotated?: Tag.OriginCountryIsoAnnotated | null;
    priority?: number;
    priority_annotated?: Tag.PriorityAnnotated | null;
    /**
     * Parsed custom field values. Null when the tag has no custom fields.
     */
    properties?: Record<string, unknown> | null;
    sophisticationLevel?: string;
    sophisticationLevel_annotated?: Tag.SophisticationLevelAnnotated | null;
    /**
     * Tag-level TLP handling marking.
     */
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
    updatedAt?: string;
    version?: number;
  }

  export namespace Tag {
    export interface ActiveDurationAnnotated {
      value: string;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface ActorCategoryAnnotated {
      value: string;
      confidence?: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface Alias {
      value: string;
      /**
       * @minimum 1
       * @maximum 10
       */
      confidence?: number | null;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
    }

    export interface AttributionOrganizationAnnotated {
      value: string;
      confidence?: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface ExternalReference {
      url: string;
      description?: string | null;
    }

    export interface ExternalReferencesAnnotated {
      value: string;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface InternalAlias {
      value: string;
      /**
       * @minimum 1
       * @maximum 10
       */
      confidence?: number | null;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
    }

    export interface MotiveAnnotated {
      value: string;
      confidence?: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface OpsecLevelAnnotated {
      value: string;
      confidence?: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface OriginCountryIsoAnnotated {
      value: string | null;
      confidence?: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface PriorityAnnotated {
      value: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface SophisticationLevelAnnotated {
      value: string;
      confidence?: number;
      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }
  }
}

export interface TagCreateParams {
  value: string;
  activeDuration?: string | TagCreateParams.ActiveDuration;
  actorCategory?: string | TagCreateParams.ActorCategory;
  aliasGroupNames?: Array<string>;
  aliasGroupNamesInternal?: Array<string>;
  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
   */
  aliases?: Array<TagCreateParams.Alias>;
  attributionOrganization?: string | TagCreateParams.AttributionOrganization;
  /**
   * Tag type (category) UUID. Optional — when present, `properties` is validated against this category's schema. When absent, the tag is typeless and properties are accepted free-form.
   */
  categoryUuid?: string;
  /**
   * Overall tag confidence (1-10). Optional.
   * @minimum 1
   * @maximum 10
   */
  confidence?: number;
  /**
   * Date of discovery (ISO YYYY-MM-DD). Optional.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dateOfDiscovery?: string;
  description?: string;
  externalReferenceLinks?: Array<string>;
  /**
   * Structured external references ({ url, description }). Public: returned to all accounts.
   */
  externalReferences?: Array<TagCreateParams.ExternalReference>;
  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagCreateParams.InternalAlias>;
  internalDescription?: string;
  lastSeen?: string;
  motive?: string | TagCreateParams.Motive;
  opsecLevel?: string | TagCreateParams.OpsecLevel;
  originCountryISO?: string | TagCreateParams.OriginCountryIso;
  priority?: number | TagCreateParams.Priority;
  /**
   * Structured metadata blob. Optional. When `categoryUuid` is given, validated against this category's schema on write. When typeless, accepted free-form. Use `{}` for a tag with no custom data.
   */
  properties?: Record<string, unknown>;
  sophisticationLevel?: string | TagCreateParams.SophisticationLevel;
  /**
   * Tag-level TLP handling marking. Optional. Allowed values: red, amber, amber-strict, green, clear, purple, amber+strict.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
}

export namespace TagCreateParams {
  export interface ActiveDuration {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategory {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganization {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;
    description?: string | null;
  }

  export interface InternalAlias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface Motive {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevel {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryIso {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Priority {
    value: number;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevel {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }
}

export interface TagCreateResponse {
  uuid: string;
  value: string;
  activeDuration?: string;
  activeDuration_annotated?: TagCreateResponse.ActiveDurationAnnotated | null;
  actorCategory?: string;
  actorCategory_annotated?: TagCreateResponse.ActorCategoryAnnotated | null;
  aliasGroupNames?: Array<string>;
  aliasGroupNamesInternal?: Array<string>;
  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
   */
  aliases?: Array<TagCreateResponse.Alias>;
  attributionOrganization?: string;
  attributionOrganization_annotated?: TagCreateResponse.AttributionOrganizationAnnotated | null;
  categoryName?: string;
  categoryUuid?: string;
  /**
   * Overall tag confidence (1-10).
   * @minimum 1
   * @maximum 10
   */
  confidence?: number | null;
  createdAt?: string;
  dateOfDiscovery?: string;
  description?: string;
  externalReferenceLinks?: Array<string>;
  /**
   * Structured external references ({ url, description }). Public: returned to all accounts.
   */
  externalReferences?: Array<TagCreateResponse.ExternalReference>;
  externalReferences_annotated?: Array<TagCreateResponse.ExternalReferencesAnnotated> | null;
  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagCreateResponse.InternalAlias>;
  internalDescription?: string;
  lastSeen?: string;
  motive?: string;
  motive_annotated?: TagCreateResponse.MotiveAnnotated | null;
  opsecLevel?: string;
  opsecLevel_annotated?: TagCreateResponse.OpsecLevelAnnotated | null;
  /**
   * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null when stored value is blank/whitespace.
   */
  originCountryISO?: string | null;
  originCountryISO_annotated?: TagCreateResponse.OriginCountryIsoAnnotated | null;
  priority?: number;
  priority_annotated?: TagCreateResponse.PriorityAnnotated | null;
  /**
   * Parsed custom field values. Null when the tag has no custom fields.
   */
  properties?: Record<string, unknown> | null;
  sophisticationLevel?: string;
  sophisticationLevel_annotated?: TagCreateResponse.SophisticationLevelAnnotated | null;
  /**
   * Tag-level TLP handling marking.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  updatedAt?: string;
  version?: number;
}

export namespace TagCreateResponse {
  export interface ActiveDurationAnnotated {
    value: string;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategoryAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganizationAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;
    description?: string | null;
  }

  export interface ExternalReferencesAnnotated {
    value: string;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface InternalAlias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface MotiveAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevelAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryIsoAnnotated {
    value: string | null;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevelAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }
}

export interface TagDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TagDeleteDeleteResponse {
  uuid: string;
}

export interface TagRetrieveDetailParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TagRetrieveDetailResponse {
  uuid: string;
  value: string;
  activeDuration?: string;
  activeDuration_annotated?: TagRetrieveDetailResponse.ActiveDurationAnnotated | null;
  actorCategory?: string;
  actorCategory_annotated?: TagRetrieveDetailResponse.ActorCategoryAnnotated | null;
  aliasGroupNames?: Array<string>;
  aliasGroupNamesInternal?: Array<string>;
  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
   */
  aliases?: Array<TagRetrieveDetailResponse.Alias>;
  attributionOrganization?: string;
  attributionOrganization_annotated?: TagRetrieveDetailResponse.AttributionOrganizationAnnotated | null;
  categoryName?: string;
  categoryUuid?: string;
  /**
   * Overall tag confidence (1-10).
   * @minimum 1
   * @maximum 10
   */
  confidence?: number | null;
  createdAt?: string;
  dateOfDiscovery?: string;
  description?: string;
  externalReferenceLinks?: Array<string>;
  /**
   * Structured external references ({ url, description }). Public: returned to all accounts.
   */
  externalReferences?: Array<TagRetrieveDetailResponse.ExternalReference>;
  externalReferences_annotated?: Array<TagRetrieveDetailResponse.ExternalReferencesAnnotated> | null;
  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagRetrieveDetailResponse.InternalAlias>;
  internalDescription?: string;
  lastSeen?: string;
  motive?: string;
  motive_annotated?: TagRetrieveDetailResponse.MotiveAnnotated | null;
  opsecLevel?: string;
  opsecLevel_annotated?: TagRetrieveDetailResponse.OpsecLevelAnnotated | null;
  /**
   * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null when stored value is blank/whitespace.
   */
  originCountryISO?: string | null;
  originCountryISO_annotated?: TagRetrieveDetailResponse.OriginCountryIsoAnnotated | null;
  priority?: number;
  priority_annotated?: TagRetrieveDetailResponse.PriorityAnnotated | null;
  /**
   * Parsed custom field values. Null when the tag has no custom fields.
   */
  properties?: Record<string, unknown> | null;
  sophisticationLevel?: string;
  sophisticationLevel_annotated?: TagRetrieveDetailResponse.SophisticationLevelAnnotated | null;
  /**
   * Tag-level TLP handling marking.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  updatedAt?: string;
  version?: number;
}

export namespace TagRetrieveDetailResponse {
  export interface ActiveDurationAnnotated {
    value: string;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategoryAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganizationAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;
    description?: string | null;
  }

  export interface ExternalReferencesAnnotated {
    value: string;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface InternalAlias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface MotiveAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevelAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryIsoAnnotated {
    value: string | null;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevelAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }
}

export interface TagPatchUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  activeDuration?: string | TagPatchUpdateParams.ActiveDuration;
  /**
   * Body param
   */
  actorCategory?: string | TagPatchUpdateParams.ActorCategory;
  /**
   * Body param
   */
  aliasGroupNames?: Array<string>;
  /**
   * Body param
   */
  aliasGroupNamesInternal?: Array<string>;
  /**
   * Body param: Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
   */
  aliases?: Array<TagPatchUpdateParams.Alias>;
  /**
   * Body param
   */
  attributionOrganization?: string | TagPatchUpdateParams.AttributionOrganization;
  /**
   * Body param: Tag type (category) UUID. When changed, existing `properties` are re-validated against the new category's schema (400 on mismatch). Set to null to unlink (typeless; properties stop being validated).
   */
  categoryUuid?: string;
  /**
   * Body param: Overall tag confidence (1-10). Omit to preserve existing.
   * @minimum 1
   * @maximum 10
   */
  confidence?: number;
  /**
   * Body param: Date of discovery (ISO YYYY-MM-DD). Omit to preserve existing.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dateOfDiscovery?: string;
  /**
   * Body param
   */
  description?: string;
  /**
   * Body param
   */
  externalReferenceLinks?: Array<string>;
  /**
   * Body param: Structured external references ({ url, description }). Public: returned to all accounts.
   */
  externalReferences?: Array<TagPatchUpdateParams.ExternalReference>;
  /**
   * Body param: Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagPatchUpdateParams.InternalAlias>;
  /**
   * Body param
   */
  internalDescription?: string;
  /**
   * Body param
   */
  lastSeen?: string;
  /**
   * Body param
   */
  motive?: string | TagPatchUpdateParams.Motive;
  /**
   * Body param
   */
  opsecLevel?: string | TagPatchUpdateParams.OpsecLevel;
  /**
   * Body param
   */
  originCountryISO?: string | TagPatchUpdateParams.OriginCountryIso;
  /**
   * Body param
   */
  priority?: number | TagPatchUpdateParams.Priority;
  /**
   * Body param: Custom field values blob. When omitted, the existing value is preserved. When provided, performs a shallow per-key merge over the stored value (unmentioned keys are retained). Setting an individual key to null deletes that key. Validation runs against the merged result, so a partial update may omit a schema-required key if the stored value supplies it.
   */
  properties?: Record<string, unknown>;
  /**
   * Body param
   */
  sophisticationLevel?: string | TagPatchUpdateParams.SophisticationLevel;
  /**
   * Body param: Tag-level TLP marking. Omit to preserve existing. Cannot be cleared to null.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  /**
   * Body param
   */
  value?: string;
}

export namespace TagPatchUpdateParams {
  export interface ActiveDuration {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategory {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganization {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;
    description?: string | null;
  }

  export interface InternalAlias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface Motive {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevel {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryIso {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Priority {
    value: number;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevel {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }
}

export interface TagPatchUpdateResponse {
  uuid: string;
  value: string;
  activeDuration?: string;
  activeDuration_annotated?: TagPatchUpdateResponse.ActiveDurationAnnotated | null;
  actorCategory?: string;
  actorCategory_annotated?: TagPatchUpdateResponse.ActorCategoryAnnotated | null;
  aliasGroupNames?: Array<string>;
  aliasGroupNamesInternal?: Array<string>;
  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
   */
  aliases?: Array<TagPatchUpdateResponse.Alias>;
  attributionOrganization?: string;
  attributionOrganization_annotated?: TagPatchUpdateResponse.AttributionOrganizationAnnotated | null;
  categoryName?: string;
  categoryUuid?: string;
  /**
   * Overall tag confidence (1-10).
   * @minimum 1
   * @maximum 10
   */
  confidence?: number | null;
  createdAt?: string;
  dateOfDiscovery?: string;
  description?: string;
  externalReferenceLinks?: Array<string>;
  /**
   * Structured external references ({ url, description }). Public: returned to all accounts.
   */
  externalReferences?: Array<TagPatchUpdateResponse.ExternalReference>;
  externalReferences_annotated?: Array<TagPatchUpdateResponse.ExternalReferencesAnnotated> | null;
  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagPatchUpdateResponse.InternalAlias>;
  internalDescription?: string;
  lastSeen?: string;
  motive?: string;
  motive_annotated?: TagPatchUpdateResponse.MotiveAnnotated | null;
  opsecLevel?: string;
  opsecLevel_annotated?: TagPatchUpdateResponse.OpsecLevelAnnotated | null;
  /**
   * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null when stored value is blank/whitespace.
   */
  originCountryISO?: string | null;
  originCountryISO_annotated?: TagPatchUpdateResponse.OriginCountryIsoAnnotated | null;
  priority?: number;
  priority_annotated?: TagPatchUpdateResponse.PriorityAnnotated | null;
  /**
   * Parsed custom field values. Null when the tag has no custom fields.
   */
  properties?: Record<string, unknown> | null;
  sophisticationLevel?: string;
  sophisticationLevel_annotated?: TagPatchUpdateResponse.SophisticationLevelAnnotated | null;
  /**
   * Tag-level TLP handling marking.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  updatedAt?: string;
  version?: number;
}

export namespace TagPatchUpdateResponse {
  export interface ActiveDurationAnnotated {
    value: string;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategoryAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganizationAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;
    description?: string | null;
  }

  export interface ExternalReferencesAnnotated {
    value: string;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface InternalAlias {
    value: string;
    /**
     * @minimum 1
     * @maximum 10
     */
    confidence?: number | null;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface MotiveAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevelAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryIsoAnnotated {
    value: string | null;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevelAnnotated {
    value: string;
    confidence?: number;
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }
}

export interface TagListIndicatorsListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: Dataset UUIDs to scope to (repeat the param for multiple), or one standalone scope: 'all'/'*', 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. Analytics datasets do not expose tag associations, so 'analytics' returns an empty result. Omit to search all readable datasets.
   */
  datasetIds?: Array<string>;
  /**
   * Query param
   */
  page?: number;
  /**
   * Query param
   */
  pageSize?: number;
  /**
   * Query param
   */
  indicatorType?: string;
  /**
   * Query param: Filter indicators by related event UUID(s). Multiple UUIDs can be provided by repeating the parameter.
   */
  relatedEvent?: Array<string>;
  /**
   * Query param: Structured search as a JSON array of {field, op, value} objects. Searchable fields: value, indicatorType. Multiple conditions are AND'd together. Max 10 conditions per request.
   */
  search?: Array<TagListIndicatorsListParams.Search>;
}

export namespace TagListIndicatorsListParams {
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
}

export interface TagListIndicatorsListResponse {
  indicators: Array<TagListIndicatorsListResponse.Indicator>;
  pagination: TagListIndicatorsListResponse.Pagination;
}

export namespace TagListIndicatorsListResponse {
  export interface Indicator {
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
    relatedEvents?: Array<Indicator.RelatedEvent>;
    tags?: Array<Indicator.Tag>;
    /**
     * Traffic Light Protocol designation. UPPERCASE. Possible values: CLEAR, GREEN, AMBER, AMBER-STRICT, RED, PURPLE. Null when not set.
     */
    tlp?: string | null;
  }

  export namespace Indicator {
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

export interface TagListRelationshipsListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: Comma-separated dataset UUIDs to scope to, or one standalone scope: 'all'/'*', 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. Analytics datasets do not expose tag associations, so 'analytics' returns an empty result. Omit for all.
   */
  datasets?: Array<string>;
  /**
   * Query param: JSON array of {field, op, value} filters (same as indicator list search).
   */
  search?: Array<TagListRelationshipsListParams.Search>;
  /**
   * Query param: Comma-separated entity types to hydrate (event, indicator, tag).
   */
  expand?: Array<string>;
  /**
   * Query param: Offset cursor from a previous page.
   */
  cursor?: string;
  /**
   * Query param: Page size (1–100, default 25).
   * @minimum 1
   * @maximum 100
   */
  pageSize?: number;
}

export namespace TagListRelationshipsListParams {
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

export interface TagListRelationshipsListResponse {
  result?: TagListRelationshipsListResponse.Result;
  success?: boolean;
}

export namespace TagListRelationshipsListResponse {
  export interface Result {
    counts?: Record<string, unknown>;
    cursor?: string | null;
    entities?: Array<unknown>;
    failedShardCount?: number;
    hasMore?: boolean;
    hydrationErrors?: Record<string, unknown>;
    partialResults?: boolean;
    relationships?: Array<unknown>;
  }
}

export interface TagPostRelationshipCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: Confidence score 0–100.
   * @minimum 0
   * @maximum 100
   */
  confidence?: number;
  /**
   * Body param: Dataset UUID where the relationship row will be stored (locates the Indicators DO).
   * @minLength 1
   */
  datasetId: string;
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
   * Body param: Target type. "tag" is not allowed (tag↔tag relationships are not supported).
   */
  targetType: 'event' | 'indicator';
  /**
   * Body param: Relationship type.
   * @minLength 1
   */
  type: string;
}

export interface TagPostRelationshipCreateResponse {
  result: Record<string, unknown>;
  success: boolean;
}

export interface TagDeleteRelationshipDeleteParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Tag UUID.
   */
  tag_uuid: string;
  /**
   * Query param: Dataset UUID containing the relationship.
   */
  datasetId: string;
}

export interface TagDeleteRelationshipDeleteResponse {
  result?: TagDeleteRelationshipDeleteResponse.Result;
  success?: boolean;
}

export namespace TagDeleteRelationshipDeleteResponse {
  export interface Result {
    deleted?: boolean;
  }
}

export interface TagPatchRelationshipUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Tag UUID.
   */
  tag_uuid: string;
  /**
   * Query param: Dataset UUID containing the relationship.
   */
  datasetId: string;
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

export interface TagPatchRelationshipUpdateResponse {
  result: Record<string, unknown>;
  success: boolean;
}
export declare namespace Tag {
  export {
    type TagListDatasetIndicatorsListResponse as TagListDatasetIndicatorsListResponse,
    type TagListListResponse as TagListListResponse,
    type TagCreateResponse as TagCreateResponse,
    type TagDeleteDeleteResponse as TagDeleteDeleteResponse,
    type TagRetrieveDetailResponse as TagRetrieveDetailResponse,
    type TagPatchUpdateResponse as TagPatchUpdateResponse,
    type TagListIndicatorsListResponse as TagListIndicatorsListResponse,
    type TagListRelationshipsListResponse as TagListRelationshipsListResponse,
    type TagPostRelationshipCreateResponse as TagPostRelationshipCreateResponse,
    type TagDeleteRelationshipDeleteResponse as TagDeleteRelationshipDeleteResponse,
    type TagPatchRelationshipUpdateResponse as TagPatchRelationshipUpdateResponse,
    type TagListDatasetIndicatorsListParams as TagListDatasetIndicatorsListParams,
    type TagListListParams as TagListListParams,
    type TagCreateParams as TagCreateParams,
    type TagDeleteDeleteParams as TagDeleteDeleteParams,
    type TagRetrieveDetailParams as TagRetrieveDetailParams,
    type TagPatchUpdateParams as TagPatchUpdateParams,
    type TagListIndicatorsListParams as TagListIndicatorsListParams,
    type TagListRelationshipsListParams as TagListRelationshipsListParams,
    type TagPostRelationshipCreateParams as TagPostRelationshipCreateParams,
    type TagDeleteRelationshipDeleteParams as TagDeleteRelationshipDeleteParams,
    type TagPatchRelationshipUpdateParams as TagPatchRelationshipUpdateParams,
  };
}
