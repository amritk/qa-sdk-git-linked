// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Event extends APIResource {
  /**
   * Use `datasetId=all` or `datasetId=*` for the legacy all-datasets scope, `datasetId=analytics` for datasets with `isAnalytics=true`, or `datasetId=operational` for datasets with `isAnalytics=false` (limited to 50). Scope values must be used alone. When `datasetId` is unspecified, events are listed from the default Cloudforce One Threat Events dataset. To list existing datasets, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.
   *
   * @param {string} accountID - Account ID.
   * @param {EventListListGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventListListGetResponse>} Returns a list of events.
   *
   * @example
   * ```ts
   * const event = await client.event.listListGet('accountId');
   * ```
   */
  listListGet(
    accountID: string,
    query: EventListListGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListListGetResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events`, {
      query,
      ...options,
    });
  }

  /**
   * Aggregate threat events by one or more columns (e.g., attacker, targetIndustry) with optional date filtering and daily grouping. Supports multi-dimensional aggregation for cross-analysis.
   *
   * @param {string} accountID - Account ID.
   * @param {EventListAggregateParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventListAggregateResponse>} Returns aggregated event data.
   *
   * @example
   * ```ts
   * const event = await client.event.listAggregate('accountId', {
   *   aggregateBy: 'aggregateBy',
   *   limit: 100,
   * });
   * ```
   */
  listAggregate(
    accountID: string,
    query: EventListAggregateParams,
    options?: RequestOptions,
  ): APIPromise<EventListAggregateResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/aggregate`, {
      query,
      ...options,
    });
  }

  /**
   * To create a dataset, see the [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint. When `datasetId` parameter is unspecified, it will be created in a default dataset named `Cloudforce One Threat Events`.
   *
   * @param {string} accountID - Account ID.
   * @param {EventCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventCreateResponse>} Returns the created event.
   *
   * @example
   * ```ts
   * const event = await client.event.create('accountId', {
   *   category: 'Domain Resolution',
   *   date: '2022-04-01T00:00:00Z',
   *   event: 'An attacker registered the domain domain.com',
   *   raw: {
   *     data: {},
   *   },
   *   tlp: 'amber',
   * });
   * ```
   */
  create(
    accountID: string,
    body: EventCreateParams,
    options?: RequestOptions,
  ): APIPromise<EventCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/create`, {
      body,
      ...options,
    });
  }

  /**
   * The `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.
   *
   * @param {string} accountID - Account ID.
   * @param {EventPostCreateBulkParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostCreateBulkResponse>} Accepted. Events created; indicators queued for async processing.
   *
   * @example
   * ```ts
   * const event = await client.event.postCreateBulk('accountId', {
   *   data: [
   *     {
   *       category: 'Domain Resolution',
   *       date: '2022-04-01T00:00:00Z',
   *       event: 'An attacker registered the domain domain.com',
   *       raw: {
   *         data: {},
   *       },
   *       tlp: 'amber',
   *     },
   *   ],
   *   datasetId: 'durableObjectName',
   * });
   * ```
   */
  postCreateBulk(
    accountID: string,
    body: EventPostCreateBulkParams,
    options?: RequestOptions,
  ): APIPromise<EventPostCreateBulkResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/create/bulk`, {
      body,
      ...options,
    });
  }

  /**
   * This method is deprecated. Please use `event_create_bulk` instead
   *
   * @param {string} accountID - Account ID.
   * @param {EventPostDosCreateBulkWithRelationshipsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostDosCreateBulkWithRelationshipsResponse>} Returns the number of created bulk events with relationships.
   *
   * @example
   * ```ts
   * const event = await client.event.postDosCreateBulkWithRelationships('accountId', {
   *   data: [
   *     {
   *       category: 'Domain Resolution',
   *       date: '2022-04-01T00:00:00Z',
   *       event: 'An attacker registered the domain domain.com',
   *       raw: {
   *         data: {},
   *       },
   *       tlp: 'amber',
   *     },
   *   ],
   *   datasetId: 'durableObjectName',
   * });
   * ```
   *
   * @deprecated
   */
  postDosCreateBulkWithRelationships(
    accountID: string,
    body: EventPostDosCreateBulkWithRelationshipsParams,
    options?: RequestOptions,
  ): APIPromise<EventPostDosCreateBulkWithRelationshipsResponse> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/create/bulk/relationships`,
      { body, ...options },
    );
  }

  /**
   * Copies specified events from one dataset to another dataset
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {EventPostCopyToNewDSParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostCopyToNewDSResponse>} Returns the number of copied events
   *
   * @example
   * ```ts
   * const event = await client.event.postCopyToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   destDatasetId: '12345678-1234-1234-1234-1234567890ab',
   *   eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
   * });
   * ```
   */
  postCopyToNewDS(
    datasetID: string,
    params: EventPostCopyToNewDSParams,
    options?: RequestOptions,
  ): APIPromise<EventPostCopyToNewDSResponse> {
    const { account_id, keepRawData, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/copy`,
      { body, query: { keepRawData }, ...options },
    );
  }

  /**
   * Retrieves a specific event by its UUID.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventRetrieveReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventRetrieveReadResponse>} Returns the event.
   *
   * @example
   * ```ts
   * const event = await client.event.retrieveRead('eventId', {
   *   account_id: 'accountId',
   *   dataset_id: 'datasetId',
   * });
   * ```
   */
  retrieveRead(
    eventID: string,
    params: EventRetrieveReadParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveReadResponse> {
    const { account_id, dataset_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/events/${eventID}`,
      options,
    );
  }

  /**
   * Moves specified events from one dataset to another dataset
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {EventPostMoveToNewDSParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostMoveToNewDSResponse>} Returns the number of moved events
   *
   * @example
   * ```ts
   * const event = await client.event.postMoveToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   destDatasetId: '12345678-1234-1234-1234-1234567890ab',
   *   eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
   * });
   * ```
   */
  postMoveToNewDS(
    datasetID: string,
    params: EventPostMoveToNewDSParams,
    options?: RequestOptions,
  ): APIPromise<EventPostMoveToNewDSResponse> {
    const { account_id, keepRawData, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/move`,
      { body, query: { keepRawData }, ...options },
    );
  }

  /**
   * Removes a tag from a threat event in Cloudforce One.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventDeleteTagDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventDeleteTagDeleteResponse>} Returns success if operation succeeded.
   *
   * @example
   * ```ts
   * const event = await client.event.deleteTagDelete('eventId', {
   *   account_id: 'accountId',
   *   tags: ['malware'],
   * });
   * ```
   */
  deleteTagDelete(
    eventID: string,
    params: EventDeleteTagDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EventDeleteTagDeleteResponse> {
    const { account_id, ...body } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/event_tag/${eventID}`,
      { body, ...options },
    );
  }

  /**
   * Adds a tag to a threat event in Cloudforce One for classification and filtering.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventCreate4Params} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventCreate4Response>} Returns success if operation succeeded.
   *
   * @example
   * ```ts
   * const event = await client.event.create4('eventId', {
   *   account_id: 'accountId',
   *   tags: ['botnet'],
   * });
   * ```
   */
  create4(
    eventID: string,
    params: EventCreate4Params,
    options?: RequestOptions,
  ): APIPromise<EventCreate4Response> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/event_tag/${eventID}/create`,
      { body, ...options },
    );
  }

  /**
   * Execute GraphQL aggregations over threat events. Supports multi-dimensional group-bys, optional date range filtering, and multi-dataset aggregation.
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostGraphQlResponse>} GraphQL response payload (data and errors).
   *
   * @example
   * ```ts
   * const event = await client.event.postGraphQl('accountId');
   * ```
   */
  postGraphQl(accountID: string, options?: RequestOptions): APIPromise<EventPostGraphQlResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/graphql`, options);
  }

  /**
   * Retrieve all saved event queries for the account
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventListQueryListResponse>} Returns a list of event queries.
   *
   * @example
   * ```ts
   * const event = await client.event.listQueryList('accountId');
   * ```
   */
  listQueryList(accountID: string, options?: RequestOptions): APIPromise<EventListQueryListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/queries`, options);
  }

  /**
   * Create a new saved event query for the account
   *
   * @param {string} accountID - Account ID.
   * @param {EventCreate2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventCreate2Response>} Returns the created event query.
   *
   * @example
   * ```ts
   * const event = await client.event.create2('accountId', {
   *   alert_enabled: false,
   *   alert_rollup_enabled: false,
   *   name: '',
   *   query_json: '',
   *   rule_enabled: false,
   * });
   * ```
   */
  create2(
    accountID: string,
    body: EventCreate2Params,
    options?: RequestOptions,
  ): APIPromise<EventCreate2Response> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/queries/create`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a saved event query by its ID
   *
   * @param {number} queryID - Event query ID
   * @param {EventDeleteQueryDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Event query deleted successfully.
   *
   * @example
   * ```ts
   * await client.event.deleteQueryDelete(1, {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteQueryDelete(
    queryID: number,
    params: EventDeleteQueryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieve a saved event query by its ID
   *
   * @param {number} queryID - Event query ID
   * @param {EventRetrieveQueryReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventRetrieveQueryReadResponse>} Returns the event query.
   *
   * @example
   * ```ts
   * const event = await client.event.retrieveQueryRead(1, {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveQueryRead(
    queryID: number,
    params: EventRetrieveQueryReadParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveQueryReadResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`,
      options,
    );
  }

  /**
   * Update an existing saved event query by its ID
   *
   * @param {number} queryID - Event query ID
   * @param {EventPatchQueryUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPatchQueryUpdateResponse>} Returns the updated event query.
   *
   * @example
   * ```ts
   * const event = await client.event.patchQueryUpdate(1, {
   *   account_id: 'accountId',
   * });
   * ```
   */
  patchQueryUpdate(
    queryID: number,
    params: EventPatchQueryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventPatchQueryUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`,
      { body, ...options },
    );
  }

  /**
   * Update an existing saved event query by its ID
   *
   * @param {number} queryID - Event query ID
   * @param {EventPostQueryUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostQueryUpdateResponse>} Returns the updated event query.
   *
   * @example
   * ```ts
   * const event = await client.event.postQueryUpdate(1, {
   *   account_id: 'accountId',
   * });
   * ```
   */
  postQueryUpdate(
    queryID: number,
    params: EventPostQueryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventPostQueryUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves the raw data associated with an event. Searches across all shards in the dataset.
   *
   * @param {string} eventID - Event ID.
   * @param {EventRetrieveRawReadDSParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventRetrieveRawReadDSResponse>} Returns the raw event data.
   *
   * @example
   * ```ts
   * const event = await client.event.retrieveRawReadDS('eventId', {
   *   account_id: 'accountId',
   *   dataset_id: 'datasetId',
   * });
   * ```
   */
  retrieveRawReadDS(
    eventID: string,
    params: EventRetrieveRawReadDSParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveRawReadDSResponse> {
    const { account_id, dataset_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/raw/${dataset_id}/${eventID}`,
      options,
    );
  }

  /**
   * Removes a reference link between related threat events in Cloudforce One.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventDeleteReferenceDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventDeleteReferenceDeleteResponse>} Returns success if operation succeeded.
   *
   * @example
   * ```ts
   * const event = await client.event.deleteReferenceDelete('eventId', {
   *   account_id: 'accountId',
   *   events: ['88888888-4444-4444-4444-121212121212'],
   * });
   * ```
   */
  deleteReferenceDelete(
    eventID: string,
    params: EventDeleteReferenceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EventDeleteReferenceDeleteResponse> {
    const { account_id, ...body } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/relate/${eventID}`,
      { body, ...options },
    );
  }

  /**
   * Creates event references for a event
   *
   * @param {string} eventID - Event UUID.
   * @param {EventCreate5Params} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventCreate5Response>} Returns success if operation succeeded.
   *
   * @example
   * ```ts
   * const event = await client.event.create5('eventId', {
   *   account_id: 'accountId',
   *   events: ['88888888-4444-4444-4444-121212121212'],
   * });
   * ```
   */
  create5(
    eventID: string,
    params: EventCreate5Params,
    options?: RequestOptions,
  ): APIPromise<EventCreate5Response> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/relate/${eventID}/create`,
      { body, ...options },
    );
  }

  /**
   * Creates a directed relationship between two events. The relationship is from parent to child with a specified type.
   *
   * @param {string} accountID - Account ID.
   * @param {EventCreate3Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventCreate3Response>} Relationship created successfully
   *
   * @example
   * ```ts
   * const event = await client.event.create3('accountId', {
   *   childIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
   *   datasetId: '',
   *   parentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   relationshipType: 'related_to',
   * });
   * ```
   */
  create3(
    accountID: string,
    body: EventCreate3Params,
    options?: RequestOptions,
  ): APIPromise<EventCreate3Response> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/relationships/create`,
      { body, ...options },
    );
  }

  /**
   * Updates multiple events with the same field values. Maximum 100 events per request.
   *
   * @param {string} accountID - Account ID.
   * @param {EventPatchUpdateBulkParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPatchUpdateBulkResponse>} Returns the count of updated events and any failures.
   *
   * @example
   * ```ts
   * const event = await client.event.patchUpdateBulk('accountId', {
   *   datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
   *   eventIds: ['uuid-1', 'uuid-2', 'uuid-3'],
   *   updates: {},
   * });
   * ```
   */
  patchUpdateBulk(
    accountID: string,
    body: EventPatchUpdateBulkParams,
    options?: RequestOptions,
  ): APIPromise<EventPatchUpdateBulkResponse> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/cloudforce-one/events/update/bulk`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes one or more events
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {EventDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventDeleteResponse>} Returns the number of deleted events.
   *
   * @example
   * ```ts
   * const response = await client.event.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   eventIds: ['eventId'],
   * });
   * ```
   */
  delete(
    datasetID: string,
    params: EventDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EventDeleteResponse> {
    const { account_id, eventIds } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/${datasetID}/delete`,
      { query: { eventIds }, ...options },
    );
  }

  /**
   * This Method is deprecated. Please use /events/dataset/:dataset_id/events/:event_id instead.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventRetrieveReadDeprecatedParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventRetrieveReadDeprecatedResponse>} Returns an event.
   *
   * @example
   * ```ts
   * const event = await client.event.retrieveReadDeprecated('eventId', {
   *   account_id: 'accountId',
   * });
   * ```
   *
   * @deprecated
   */
  retrieveReadDeprecated(
    eventID: string,
    params: EventRetrieveReadDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveReadDeprecatedResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/cloudforce-one/events/${eventID}`, options);
  }

  /**
   * Partially updates a threat event in Cloudforce One, modifying specific fields without replacing the entire event.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventPatchUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPatchUpdateResponse>} Returns the updated event.
   *
   * @example
   * ```ts
   * const event = await client.event.patchUpdate('eventId', {
   *   account_id: 'accountId',
   *   datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
   * });
   * ```
   */
  patchUpdate(
    eventID: string,
    params: EventPatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventPatchUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/cloudforce-one/events/${eventID}`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an event
   *
   * @param {string} eventID - Event UUID.
   * @param {EventPostUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostUpdateResponse>} Returns the updated event.
   *
   * @example
   * ```ts
   * const event = await client.event.postUpdate('eventId', {
   *   account_id: 'accountId',
   *   datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
   * });
   * ```
   */
  postUpdate(
    eventID: string,
    params: EventPostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventPostUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/cloudforce-one/events/${eventID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves raw threat event data for a specific event in Cloudforce One.
   *
   * @param {string} rawID - Raw Event UUID.
   * @param {EventRetrieveRawReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventRetrieveRawReadResponse>} Returns the raw event.
   *
   * @example
   * ```ts
   * const event = await client.event.retrieveRawRead('rawId', {
   *   account_id: 'accountId',
   *   event_id: 'eventId',
   * });
   * ```
   */
  retrieveRawRead(
    rawID: string,
    params: EventRetrieveRawReadParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveRawReadResponse> {
    const { account_id, event_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/${event_id}/raw/${rawID}`,
      options,
    );
  }

  /**
   * Partially updates raw threat event data in Cloudforce One, modifying specific fields of the event.
   *
   * @param {string} rawID - Raw Event UUID.
   * @param {EventPatchRawUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPatchRawUpdateResponse>} Returns the uuid of the updated raw event and its data.
   *
   * @example
   * ```ts
   * const event = await client.event.patchRawUpdate('rawId', {
   *   account_id: 'accountId',
   *   event_id: 'eventId',
   * });
   * ```
   */
  patchRawUpdate(
    rawID: string,
    params: EventPatchRawUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventPatchRawUpdateResponse> {
    const { account_id, event_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/${event_id}/raw/${rawID}`,
      { body, ...options },
    );
  }

  /**
   * Updates a raw event
   *
   * @param {string} rawID - Raw Event UUID.
   * @param {EventPostRawUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventPostRawUpdateResponse>} Returns the uuid of the updated raw event and its data.
   *
   * @example
   * ```ts
   * const event = await client.event.postRawUpdate('rawId', {
   *   account_id: 'accountId',
   *   event_id: 'eventId',
   * });
   * ```
   */
  postRawUpdate(
    rawID: string,
    params: EventPostRawUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventPostRawUpdateResponse> {
    const { account_id, event_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/${event_id}/raw/${rawID}`,
      { body, ...options },
    );
  }

  /**
   * The `event_id` must be defined (to list existing events (and their IDs), use the [`Filter and List Events`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/methods/list/) endpoint). Also, must provide query parameters.
   *
   * @param {string} eventID - Event UUID.
   * @param {EventListRelationshipsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventListRelationshipsResponse>} Returns a list of events related to the specified starting event.
   *
   * @example
   * ```ts
   * const event = await client.event.listRelationships('eventId', {
   *   account_id: 'accountId',
   *   direction: 'both',
   *   datasetId: 'datasetId',
   *   includeParent: true,
   * });
   * ```
   */
  listRelationships(
    eventID: string,
    params: EventListRelationshipsParams,
    options?: RequestOptions,
  ): APIPromise<EventListRelationshipsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/${eventID}/relationships`,
      { query, ...options },
    );
  }
}

export interface EventListListGetParams {
  /**
   * Cursor for pagination. When provided, filters are embedded in the cursor so you only need to pass cursor and pageSize. Returned in the previous response's result_info.cursor field. Use cursor-based pagination for deep pagination (beyond 100,000 records) or for optimal performance.
   */
  cursor?: string;
  /**
   * @maxItems 10
   */
  search?: Array<
    | EventListListGetParams.Search
    | EventListListGetParams.Search2
    | EventListListGetParams.Search3
    | EventListListGetParams.Search4
    | EventListListGetParams.Search5
    | EventListListGetParams.Search6
  >;
  /**
   * Page number (1-indexed) for offset-based pagination. Limited to offset of 100,000 records. For deep pagination, use cursor-based pagination instead.
   */
  page?: number;
  /**
   * Number of results per page. Maximum 25,000.
   */
  pageSize?: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
  /**
   * Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If not provided, uses the default dataset.
   */
  datasetId?: Array<string>;
  forceRefresh?: boolean;
  format?: 'json' | 'stix2' | 'taxii';
  /**
   * Cache strategy. 'from-graph' serves results from the graph-node KV cache when all requested UUIDs are cached; falls back to normal path on partial/zero hit.
   */
  cache?: 'from-graph';
}

export namespace EventListListGetParams {
  export interface Search {
    field:
      | 'attacker'
      | 'attackerCountry'
      | 'category'
      | 'createdAt'
      | 'date'
      | 'event'
      | 'indicator'
      | 'indicatorType'
      | 'mitreAttack'
      | 'mitreCapec'
      | 'tags'
      | 'targetCountry'
      | 'targetIndustry'
      | 'tlp'
      | 'uuid';
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
      | 'find';
    /**
     * @minLength 1
     * @maxLength 512
     */
    value: string;
  }

  export interface Search2 {
    field:
      | 'attacker'
      | 'attackerCountry'
      | 'category'
      | 'createdAt'
      | 'date'
      | 'event'
      | 'indicator'
      | 'indicatorType'
      | 'mitreAttack'
      | 'mitreCapec'
      | 'tags'
      | 'targetCountry'
      | 'targetIndustry'
      | 'tlp'
      | 'uuid';
    op: 'in';
    /**
     * @minItems 1
     * @maxItems 100
     */
    value: Array<string>;
  }

  export interface Search3 {
    field: 'killChain';
    op: 'equals' | 'not' | 'gt' | 'gte' | 'lt' | 'lte';
    value: number | string;
  }

  export interface Search4 {
    field: 'killChain';
    op: 'in';
    /**
     * @minItems 1
     * @maxItems 100
     */
    value: Array<number | string>;
  }

  export interface Search5 {
    field: 'hasChildren';
    op: 'equals' | 'not' | 'gt' | 'gte' | 'lt' | 'lte';
    value: boolean | 'true' | 'false' | 1 | 0 | '1' | '0';
  }

  export interface Search6 {
    field: 'hasChildren';
    op: 'in';
    /**
     * @minItems 1
     * @maxItems 100
     */
    value: Array<boolean | 'true' | 'false' | 1 | 0 | '1' | '0'>;
  }
}

export type EventListListGetResponse = Array<EventListListGetResponse.EventListListGetResponseItem>;

export namespace EventListListGetResponse {
  export interface EventListListGetResponseItem {
    attacker: string;
    attackerCountry: string;
    attackerCountryAlpha3: string;
    category: string;
    datasetId: string;
    date: string;
    event: string;
    hasChildren: boolean;
    indicator: string;
    indicatorType: string;
    indicatorTypeId: number;
    killChain: number;
    mitreAttack: Array<string>;
    mitreCapec: Array<string>;
    numReferenced: number;
    numReferences: number;
    rawId: string;
    referenced: Array<string>;
    referencedIds: Array<number>;
    references: Array<string>;
    referencesIds: Array<number>;
    tags: Array<string>;
    targetCountry: string;
    targetCountryAlpha3: string;
    targetIndustry: string;
    tlp: string;
    uuid: string;
    insight?: string;
    releasabilityId?: string;
  }
}

export interface EventListAggregateParams {
  /**
   * Column(s) to aggregate by - single column or comma-separated list (e.g., 'attacker', 'targetIndustry', 'attacker,targetIndustry')
   */
  aggregateBy: string;
  /**
   * Dataset UUIDs to filter by, or one standalone scope value: 'all'/'*' for all accessible non-analytics event datasets (analytics datasets are silently excluded), 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If not provided, uses the default dataset.
   */
  datasetId?: Array<string>;
  /**
   * Start date for filtering (ISO 8601 format, e.g., '2024-01-01')
   */
  startDate?: string;
  /**
   * End date for filtering (ISO 8601 format, e.g., '2024-12-31')
   */
  endDate?: string;
  /**
   * Whether to group results by date (daily aggregation)
   */
  groupByDate?: boolean;
  /**
   * Maximum number of results to return
   * @default 100
   */
  limit?: number;
}

export interface EventListAggregateResponse {
  /**
   * Column(s) that were aggregated by
   */
  aggregateBy: string;
  /**
   * Array of aggregation results with dynamic fields based on aggregateBy columns
   */
  aggregations: Array<Record<string, string | null> & EventListAggregateResponse.Aggregation>;
  /**
   * Total number of events in the aggregation
   */
  total: number;
  /**
   * Date range used for filtering
   */
  dateRange?: EventListAggregateResponse.DateRange;
}

export namespace EventListAggregateResponse {
  export interface Aggregation {
    /**
     * Number of events for this aggregation
     */
    count: number;
    /**
     * Date (if groupByDate is true)
     */
    date?: string;
  }

  export interface DateRange {
    endDate?: string;
    startDate?: string;
  }
}

export interface EventCreateParams {
  category: string;
  /**
   * @format date-time
   */
  date: string;
  event: string;
  raw: EventCreateParams.Raw;
  tlp: string;
  accountId?: number;
  attacker?: string | null;
  attackerCountry?: string;
  datasetId?: string;
  indicator?: string;
  indicatorType?: string;
  /**
   * Array of indicators for this event. Supports multiple indicators per event for complex scenarios.
   */
  indicators?: Array<EventCreateParams.Indicator>;
  insight?: string;
  /**
   * Controlled provenance for an event and its indicators derived from a Threat Signals article.
   */
  source?: EventCreateParams.Source;
  tags?: Array<string>;
  targetCountry?: string;
  targetIndustry?: string;
}

export namespace EventCreateParams {
  export interface Raw {
    data: Record<string, unknown> | null;
    source?: string;
    tlp?: string;
  }

  export interface Indicator {
    /**
     * The type of indicator (e.g., DOMAIN, IP, JA3, HASH)
     */
    indicatorType: string;
    /**
     * The indicator value (e.g., domain name, IP address, hash)
     */
    value: string;
  }

  export interface Source {
    /**
     * @format uuid
     */
    resourceId: string;
    resourceType: 'article';
    system: 'threat-signals';
  }
}

export interface EventCreateResponse {
  attacker: string;
  attackerCountry: string;
  attackerCountryAlpha3: string;
  category: string;
  datasetId: string;
  date: string;
  event: string;
  hasChildren: boolean;
  indicator: string;
  indicatorType: string;
  indicatorTypeId: number;
  killChain: number;
  mitreAttack: Array<string>;
  mitreCapec: Array<string>;
  numReferenced: number;
  numReferences: number;
  rawId: string;
  referenced: Array<string>;
  referencedIds: Array<number>;
  references: Array<string>;
  referencesIds: Array<number>;
  tags: Array<string>;
  targetCountry: string;
  targetCountryAlpha3: string;
  targetIndustry: string;
  tlp: string;
  uuid: string;
  insight?: string;
  releasabilityId?: string;
}

export interface EventPostCreateBulkParams {
  data: Array<EventPostCreateBulkParams.Data>;
  datasetId: string;
  /**
   * When true, response includes array of created event UUIDs and shard IDs. Useful for tracking which events were created and where.
   */
  includeCreatedEvents?: boolean;
}

export namespace EventPostCreateBulkParams {
  export interface Data {
    category: string;
    /**
     * @format date-time
     */
    date: string;
    event: string;
    raw: Data.Raw;
    tlp: string;
    accountId?: number;
    attacker?: string | null;
    attackerCountry?: string;
    datasetId?: string;
    indicator?: string;
    indicatorType?: string;
    /**
     * Array of indicators for this event. Supports multiple indicators per event for complex scenarios.
     */
    indicators?: Array<Data.Indicator>;
    insight?: string;
    tags?: Array<string>;
    targetCountry?: string;
    targetIndustry?: string;
  }

  export namespace Data {
    export interface Raw {
      data: Record<string, unknown> | null;
      source?: string;
      tlp?: string;
    }

    export interface Indicator {
      /**
       * The type of indicator (e.g., DOMAIN, IP, JA3, HASH)
       */
      indicatorType: string;
      /**
       * The indicator value (e.g., domain name, IP address, hash)
       */
      value: string;
    }
  }
}

export interface EventPostCreateBulkResponse {
  /**
   * Number of events created
   */
  createdEventsCount: number;
  /**
   * Number of new tags created in SoT
   */
  createdTagsCount: number;
  /**
   * Number of errors encountered
   */
  errorCount: number;
  /**
   * Number of indicators queued for async processing
   */
  queuedIndicatorsCount: number;
  /**
   * Correlation ID for async indicator processing
   * @format uuid
   */
  createBulkEventsRequestId?: string;
  /**
   * Array of created events with UUIDs and shard locations. Only present when includeCreatedEvents=true
   */
  createdEvents?: Array<EventPostCreateBulkResponse.CreatedEvent>;
  /**
   * Array of error details
   */
  errors?: Array<EventPostCreateBulkResponse.Error>;
}

export namespace EventPostCreateBulkResponse {
  export interface CreatedEvent {
    /**
     * Original index in the input data array
     */
    eventIndex: number;
    /**
     * Dataset ID of the shard where the event was created
     */
    shardId: string;
    /**
     * UUID of the created event
     * @format uuid
     */
    uuid: string;
  }

  export interface Error {
    /**
     * Error message
     */
    error: string;
    /**
     * Index of the event that caused the error
     */
    eventIndex: number;
  }
}

export interface EventPostDosCreateBulkWithRelationshipsParams {
  data: Array<EventPostDosCreateBulkWithRelationshipsParams.Data>;
  datasetId: string;
}

export namespace EventPostDosCreateBulkWithRelationshipsParams {
  export interface Data {
    category: string;
    /**
     * @format date-time
     */
    date: string;
    event: string;
    raw: Data.Raw;
    tlp: string;
    accountId?: number;
    attacker?: string | null;
    attackerCountry?: string;
    datasetId?: string;
    indicator?: string;
    indicatorType?: string;
    /**
     * Array of indicators for this event. Supports multiple indicators per event for complex scenarios.
     */
    indicators?: Array<Data.Indicator>;
    insight?: string;
    tags?: Array<string>;
    targetCountry?: string;
    targetIndustry?: string;
  }

  export namespace Data {
    export interface Raw {
      data: Record<string, unknown> | null;
      source?: string;
      tlp?: string;
    }

    export interface Indicator {
      /**
       * The type of indicator (e.g., DOMAIN, IP, JA3, HASH)
       */
      indicatorType: string;
      /**
       * The indicator value (e.g., domain name, IP address, hash)
       */
      value: string;
    }
  }
}

export interface EventPostDosCreateBulkWithRelationshipsResponse {
  /**
   * Number of events created
   */
  createdEventsCount: number;
  /**
   * Number of indicators created
   */
  createdIndicatorsCount: number;
  /**
   * Number of relationships created
   */
  createdRelationshipsCount: number;
  /**
   * Number of errors encountered
   */
  errorCount: number;
  /**
   * Array of error details
   */
  errors?: Array<EventPostDosCreateBulkWithRelationshipsResponse.Error>;
}

export namespace EventPostDosCreateBulkWithRelationshipsResponse {
  export interface Error {
    /**
     * Error message
     */
    error: string;
    /**
     * Index of the event that caused the error
     */
    eventIndex: number;
  }
}

export interface EventPostCopyToNewDSParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied).
   */
  keepRawData?: boolean;
  /**
   * Body param
   */
  destDatasetId: string;
  /**
   * Body param
   */
  eventIds: Array<string>;
}

export interface EventPostCopyToNewDSResponse {
  /**
   * Number of events successfully copied
   */
  copied: number;
  /**
   * Number of indicators successfully copied
   */
  indicatorsCopied: number;
  /**
   * Number of relationships successfully copied
   */
  relationshipsCopied: number;
  /**
   * Array of events that failed to insert into destination
   */
  insertFailures?: Array<EventPostCopyToNewDSResponse.InsertFailure>;
}

export namespace EventPostCopyToNewDSResponse {
  export interface InsertFailure {
    /**
     * Index of the event that failed to insert
     */
    index: number;
    /**
     * Reason for the failure
     */
    reason: string;
  }
}

export interface EventRetrieveReadParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Dataset ID.
   */
  dataset_id: string;
}

export interface EventRetrieveReadResponse {
  attacker: string;
  attackerCountry: string;
  attackerCountryAlpha3: string;
  category: string;
  datasetId: string;
  date: string;
  event: string;
  hasChildren: boolean;
  indicator: string;
  indicatorType: string;
  indicatorTypeId: number;
  killChain: number;
  mitreAttack: Array<string>;
  mitreCapec: Array<string>;
  numReferenced: number;
  numReferences: number;
  rawId: string;
  referenced: Array<string>;
  referencedIds: Array<number>;
  references: Array<string>;
  referencesIds: Array<number>;
  tags: Array<string>;
  targetCountry: string;
  targetCountryAlpha3: string;
  targetIndustry: string;
  tlp: string;
  uuid: string;
  insight?: string;
  releasabilityId?: string;
}

export interface EventPostMoveToNewDSParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied). Raw data is always deleted from the source.
   */
  keepRawData?: boolean;
  /**
   * Body param
   */
  destDatasetId: string;
  /**
   * Body param
   */
  eventIds: Array<string>;
}

export interface EventPostMoveToNewDSResponse {
  /**
   * Number of indicators successfully copied
   */
  indicatorsCopied: number;
  /**
   * Number of events successfully moved
   */
  moved: number;
  /**
   * Number of relationships successfully copied
   */
  relationshipsCopied: number;
  /**
   * Array of source datasets where deletion failed
   */
  deletionFailures?: Array<EventPostMoveToNewDSResponse.DeletionFailure>;
  /**
   * Array of events that failed to insert into destination
   */
  insertFailures?: Array<EventPostMoveToNewDSResponse.InsertFailure>;
}

export namespace EventPostMoveToNewDSResponse {
  export interface DeletionFailure {
    /**
     * Dataset ID where deletion failed
     */
    datasetId: string;
    /**
     * Reason for the deletion failure
     */
    reason: string;
  }

  export interface InsertFailure {
    /**
     * Index of the event that failed to insert
     */
    index: number;
    /**
     * Reason for the failure
     */
    reason: string;
  }
}

export interface EventDeleteTagDeleteParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  tags: Array<string>;
}

export interface EventDeleteTagDeleteResponse {
  result: EventDeleteTagDeleteResponse.Result;
  success: boolean;
}

export namespace EventDeleteTagDeleteResponse {
  export interface Result {
    success: boolean;
  }
}

export interface EventCreate4Params {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  tags: Array<string>;
}

export interface EventCreate4Response {
  result: EventCreate4Response.Result;
  success: boolean;
}

export namespace EventCreate4Response {
  export interface Result {
    success: boolean;
  }
}

export interface EventPostGraphQlResponse {
  data?: Record<string, unknown> | null;
  errors?: Array<Record<string, unknown>> | null;
}

export type EventListQueryListResponse = Array<EventListQueryListResponse.EventListQueryListResponseItem>;

export namespace EventListQueryListResponse {
  export interface EventListQueryListResponseItem {
    /**
     * Account ID
     */
    account_id: number;
    /**
     * Whether alerts are enabled
     */
    alert_enabled: boolean;
    /**
     * Whether alert rollup is enabled
     */
    alert_rollup_enabled: boolean;
    /**
     * Creation timestamp
     */
    created_at: string;
    /**
     * Unique identifier for the saved query
     */
    id: number;
    /**
     * Name of the saved query
     */
    name: string;
    /**
     * JSON string containing the query parameters
     */
    query_json: string;
    /**
     * Whether rule is enabled
     */
    rule_enabled: boolean;
    /**
     * Last update timestamp
     */
    updated_at: string;
    /**
     * Email of the user who created the query
     */
    user_email: string;
    /**
     * Intel Indicator Feed ID (numeric)
     */
    custom_threat_feed_id?: number | null;
    /**
     * WAF rules list ID for blocking
     */
    rule_list_id?: string;
    /**
     * Scope for the rule
     */
    rule_scope?: string;
  }
}

export interface EventCreate2Params {
  /**
   * Enable alerts for this query
   */
  alert_enabled: boolean;
  /**
   * Enable alert rollup for this query
   */
  alert_rollup_enabled: boolean;
  /**
   * Unique name for the saved query
   */
  name: string;
  /**
   * JSON string containing the query parameters
   */
  query_json: string;
  /**
   * Enable rule for this query
   */
  rule_enabled: boolean;
  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface EventCreate2Response {
  /**
   * Account ID
   */
  account_id: number;
  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;
  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;
  /**
   * Creation timestamp
   */
  created_at: string;
  /**
   * Unique identifier for the saved query
   */
  id: number;
  /**
   * Name of the saved query
   */
  name: string;
  /**
   * JSON string containing the query parameters
   */
  query_json: string;
  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;
  /**
   * Last update timestamp
   */
  updated_at: string;
  /**
   * Email of the user who created the query
   */
  user_email: string;
  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;
  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;
  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface EventDeleteQueryDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface EventRetrieveQueryReadParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface EventRetrieveQueryReadResponse {
  /**
   * Account ID
   */
  account_id: number;
  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;
  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;
  /**
   * Creation timestamp
   */
  created_at: string;
  /**
   * Unique identifier for the saved query
   */
  id: number;
  /**
   * Name of the saved query
   */
  name: string;
  /**
   * JSON string containing the query parameters
   */
  query_json: string;
  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;
  /**
   * Last update timestamp
   */
  updated_at: string;
  /**
   * Email of the user who created the query
   */
  user_email: string;
  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;
  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;
  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface EventPatchQueryUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: Enable alerts for this query
   */
  alert_enabled?: boolean;
  /**
   * Body param: Enable alert rollup for this query
   */
  alert_rollup_enabled?: boolean;
  /**
   * Body param: Unique name for the saved query
   */
  name?: string;
  /**
   * Body param: JSON string containing the query parameters
   */
  query_json?: string;
  /**
   * Body param: Enable rule for this query
   */
  rule_enabled?: boolean;
  /**
   * Body param: Scope for the rule
   */
  rule_scope?: string;
}

export interface EventPatchQueryUpdateResponse {
  /**
   * Account ID
   */
  account_id: number;
  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;
  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;
  /**
   * Creation timestamp
   */
  created_at: string;
  /**
   * Unique identifier for the saved query
   */
  id: number;
  /**
   * Name of the saved query
   */
  name: string;
  /**
   * JSON string containing the query parameters
   */
  query_json: string;
  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;
  /**
   * Last update timestamp
   */
  updated_at: string;
  /**
   * Email of the user who created the query
   */
  user_email: string;
  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;
  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;
  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface EventPostQueryUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: Enable alerts for this query
   */
  alert_enabled?: boolean;
  /**
   * Body param: Enable alert rollup for this query
   */
  alert_rollup_enabled?: boolean;
  /**
   * Body param: Unique name for the saved query
   */
  name?: string;
  /**
   * Body param: JSON string containing the query parameters
   */
  query_json?: string;
  /**
   * Body param: Enable rule for this query
   */
  rule_enabled?: boolean;
  /**
   * Body param: Scope for the rule
   */
  rule_scope?: string;
}

export interface EventPostQueryUpdateResponse {
  /**
   * Account ID
   */
  account_id: number;
  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;
  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;
  /**
   * Creation timestamp
   */
  created_at: string;
  /**
   * Unique identifier for the saved query
   */
  id: number;
  /**
   * Name of the saved query
   */
  name: string;
  /**
   * JSON string containing the query parameters
   */
  query_json: string;
  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;
  /**
   * Last update timestamp
   */
  updated_at: string;
  /**
   * Email of the user who created the query
   */
  user_email: string;
  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;
  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;
  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface EventRetrieveRawReadDSParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Dataset ID.
   */
  dataset_id: string;
}

export interface EventRetrieveRawReadDSResponse {
  accountId: number;
  created: string;
  data: string;
  id: number;
  source: string;
  tlp: string;
}

export interface EventDeleteReferenceDeleteParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  events: Array<string>;
}

export interface EventDeleteReferenceDeleteResponse {
  result: EventDeleteReferenceDeleteResponse.Result;
  success: boolean;
}

export namespace EventDeleteReferenceDeleteResponse {
  export interface Result {
    success: boolean;
  }
}

export interface EventCreate5Params {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  events: Array<string>;
}

export interface EventCreate5Response {
  result: EventCreate5Response.Result;
  success: boolean;
}

export namespace EventCreate5Response {
  export interface Result {
    success: boolean;
  }
}

export interface EventCreate3Params {
  /**
   * Array of UUIDs for child events. Single child = 1:1 relationship, multiple = 1:many relationships
   * @minItems 1
   */
  childIds: Array<string>;
  /**
   * Dataset identifier where the events are stored
   */
  datasetId: string;
  /**
   * UUID of the parent event that will be the source of the relationship
   * @format uuid
   */
  parentId: string;
  /**
   * Type of relationship to create between parent and child events
   */
  relationshipType: 'related_to' | 'caused_by' | 'attributed_to';
}

export interface EventCreate3Response {
  /**
   * Human-readable message describing the operation result
   */
  message: string;
  /**
   * Array of successfully created relationship objects
   */
  relationships: Array<EventCreate3Response.Relationship>;
  /**
   * Whether the relationship creation operation completed successfully
   */
  success: boolean;
  /**
   * Array of child event UUIDs that were processed
   */
  childIds?: Array<string>;
  /**
   * Array of errors for relationships that failed to be created (only present if some relationships failed)
   */
  errors?: Array<EventCreate3Response.Error>;
  /**
   * Number of relationships that were successfully created
   */
  relationshipsCreated?: number;
}

export namespace EventCreate3Response {
  export interface Relationship {
    /**
     * Dataset ID where the child event resides
     */
    childDatasetId: string;
    /**
     * UUID of the child event in the relationship
     * @format uuid
     */
    childId: string;
    /**
     * Dataset ID where the parent event resides
     */
    parentDatasetId: string;
    /**
     * UUID of the parent event in the relationship
     * @format uuid
     */
    parentId: string;
    /**
     * Type of relationship between the events
     */
    relationshipType: 'related_to' | 'caused_by' | 'attributed_to';
  }

  export interface Error {
    /**
     * UUID of the child event that failed to create a relationship
     * @format uuid
     */
    childId: string;
    /**
     * Error message describing why the relationship creation failed
     */
    error: string;
    /**
     * Type/category of the error that occurred
     */
    errorType?: string;
  }
}

export interface EventPatchUpdateBulkParams {
  /**
   * Dataset ID containing the events to update. Required to prevent cross-account modifications.
   */
  datasetId: string;
  /**
   * List of event UUIDs to update (1-100)
   * @minItems 1
   * @maxItems 100
   */
  eventIds: Array<string>;
  /**
   * Fields to update on all specified events. All fields including 'insight' are supported, except 'date' which requires shard migration.
   */
  updates: EventPatchUpdateBulkParams.Updates;
}

export namespace EventPatchUpdateBulkParams {
  export interface Updates {
    attacker?: string | null;
    attackerCountry?: string;
    category?: string;
    /**
     * @format date-time
     */
    createdAt?: string;
    event?: string;
    indicator?: string;
    indicatorType?: string;
    insight?: string;
    raw?: Updates.Raw;
    targetCountry?: string;
    targetIndustry?: string;
    tlp?: string;
  }

  export namespace Updates {
    export interface Raw {
      data?: Record<string, unknown> | null;
      source?: string;
      tlp?: string;
    }
  }
}

export interface EventPatchUpdateBulkResponse {
  failedCount: number;
  updatedCount: number;
  /**
   * List of events that failed to update with error messages
   */
  failures?: Array<EventPatchUpdateBulkResponse.Failure>;
}

export namespace EventPatchUpdateBulkResponse {
  export interface Failure {
    error: string;
    eventId: string;
  }
}

export interface EventDeleteParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: Array of Event IDs to delete.
   */
  eventIds: Array<string>;
}

export type EventDeleteResponse = number;

export interface EventRetrieveReadDeprecatedParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface EventRetrieveReadDeprecatedResponse {
  attacker: string;
  attackerCountry: string;
  attackerCountryAlpha3: string;
  category: string;
  datasetId: string;
  date: string;
  event: string;
  hasChildren: boolean;
  indicator: string;
  indicatorType: string;
  indicatorTypeId: number;
  killChain: number;
  mitreAttack: Array<string>;
  mitreCapec: Array<string>;
  numReferenced: number;
  numReferences: number;
  rawId: string;
  referenced: Array<string>;
  referencedIds: Array<number>;
  references: Array<string>;
  referencesIds: Array<number>;
  tags: Array<string>;
  targetCountry: string;
  targetCountryAlpha3: string;
  targetIndustry: string;
  tlp: string;
  uuid: string;
  insight?: string;
  releasabilityId?: string;
}

export interface EventPatchUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  attacker?: string | null;
  /**
   * Body param
   */
  attackerCountry?: string;
  /**
   * Body param
   */
  category?: string;
  /**
   * Body param
   * @format date-time
   */
  createdAt?: string;
  /**
   * Body param: Dataset ID containing the event to update.
   */
  datasetId: string;
  /**
   * Body param
   * @format date-time
   */
  date?: string;
  /**
   * Body param
   */
  event?: string;
  /**
   * Body param
   */
  indicator?: string;
  /**
   * Body param
   */
  indicatorType?: string;
  /**
   * Body param
   */
  insight?: string;
  /**
   * Body param
   */
  raw?: EventPatchUpdateParams.Raw;
  /**
   * Body param
   */
  targetCountry?: string;
  /**
   * Body param
   */
  targetIndustry?: string;
  /**
   * Body param
   */
  tlp?: string;
}

export namespace EventPatchUpdateParams {
  export interface Raw {
    data?: Record<string, unknown> | null;
    source?: string;
    tlp?: string;
  }
}

export interface EventPatchUpdateResponse {
  attacker: string;
  attackerCountry: string;
  attackerCountryAlpha3: string;
  category: string;
  datasetId: string;
  date: string;
  event: string;
  hasChildren: boolean;
  indicator: string;
  indicatorType: string;
  indicatorTypeId: number;
  killChain: number;
  mitreAttack: Array<string>;
  mitreCapec: Array<string>;
  numReferenced: number;
  numReferences: number;
  rawId: string;
  referenced: Array<string>;
  referencedIds: Array<number>;
  references: Array<string>;
  referencesIds: Array<number>;
  tags: Array<string>;
  targetCountry: string;
  targetCountryAlpha3: string;
  targetIndustry: string;
  tlp: string;
  uuid: string;
  insight?: string;
  releasabilityId?: string;
}

export interface EventPostUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  attacker?: string | null;
  /**
   * Body param
   */
  attackerCountry?: string;
  /**
   * Body param
   */
  category?: string;
  /**
   * Body param
   * @format date-time
   */
  createdAt?: string;
  /**
   * Body param: Dataset ID containing the event to update.
   */
  datasetId: string;
  /**
   * Body param
   * @format date-time
   */
  date?: string;
  /**
   * Body param
   */
  event?: string;
  /**
   * Body param
   */
  indicator?: string;
  /**
   * Body param
   */
  indicatorType?: string;
  /**
   * Body param
   */
  insight?: string;
  /**
   * Body param
   */
  raw?: EventPostUpdateParams.Raw;
  /**
   * Body param
   */
  targetCountry?: string;
  /**
   * Body param
   */
  targetIndustry?: string;
  /**
   * Body param
   */
  tlp?: string;
}

export namespace EventPostUpdateParams {
  export interface Raw {
    data?: Record<string, unknown> | null;
    source?: string;
    tlp?: string;
  }
}

export interface EventPostUpdateResponse {
  attacker: string;
  attackerCountry: string;
  attackerCountryAlpha3: string;
  category: string;
  datasetId: string;
  date: string;
  event: string;
  hasChildren: boolean;
  indicator: string;
  indicatorType: string;
  indicatorTypeId: number;
  killChain: number;
  mitreAttack: Array<string>;
  mitreCapec: Array<string>;
  numReferenced: number;
  numReferences: number;
  rawId: string;
  referenced: Array<string>;
  referencedIds: Array<number>;
  references: Array<string>;
  referencesIds: Array<number>;
  tags: Array<string>;
  targetCountry: string;
  targetCountryAlpha3: string;
  targetIndustry: string;
  tlp: string;
  uuid: string;
  insight?: string;
  releasabilityId?: string;
}

export interface EventRetrieveRawReadParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Event UUID.
   */
  event_id: string;
}

export interface EventRetrieveRawReadResponse {
  accountId: number;
  created: string;
  data: Record<string, unknown>;
  id: string;
  source: string;
  tlp: string;
}

export interface EventPatchRawUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Event UUID.
   */
  event_id: string;
  /**
   * Body param
   */
  data?: Record<string, unknown>;
  /**
   * Body param
   */
  source?: string;
  /**
   * Body param
   */
  tlp?: string;
}

export interface EventPatchRawUpdateResponse {
  data: Record<string, unknown>;
  id: string;
}

export interface EventPostRawUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Event UUID.
   */
  event_id: string;
  /**
   * Body param
   */
  data?: Record<string, unknown>;
  /**
   * Body param
   */
  source?: string;
  /**
   * Body param
   */
  tlp?: string;
}

export interface EventPostRawUpdateResponse {
  data: Record<string, unknown>;
  id: string;
}

export interface EventListRelationshipsParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: The direction to traverse the graph. Defaults to 'both' to search all.
   */
  direction?: 'ancestors' | 'descendants' | 'both';
  /**
   * Query param: The maximum depth to traverse. Defaults to 5.
   */
  maxDepth?: number;
  /**
   * Query param: An optional array of relationship types to filter by.
   */
  relationshipTypes?: string | Array<string>;
  /**
   * Query param: An optional array of indicator type IDs to filter the results by.
   */
  indicatorTypeIds?: Array<string>;
  /**
   * Query param: The dataset ID to search within.
   */
  datasetId: string;
  /**
   * Query param: Whether to include the starting event in the results. Defaults to true.
   */
  includeParent?: boolean;
  /**
   * Query param
   */
  page?: number;
  /**
   * Query param
   */
  pageSize?: number;
}

export type EventListRelationshipsResponse =
  Array<EventListRelationshipsResponse.EventListRelationshipsResponseItem>;

export namespace EventListRelationshipsResponse {
  export interface EventListRelationshipsResponseItem {
    attacker: string;
    attackerCountry: string;
    attackerCountryAlpha3: string;
    category: string;
    datasetId: string;
    date: string;
    event: string;
    hasChildren: boolean;
    indicator: string;
    indicatorType: string;
    indicatorTypeId: number;
    killChain: number;
    mitreAttack: Array<string>;
    mitreCapec: Array<string>;
    numReferenced: number;
    numReferences: number;
    rawId: string;
    referenced: Array<string>;
    referencedIds: Array<number>;
    references: Array<string>;
    referencesIds: Array<number>;
    tags: Array<string>;
    targetCountry: string;
    targetCountryAlpha3: string;
    targetIndustry: string;
    tlp: string;
    uuid: string;
    insight?: string;
    releasabilityId?: string;
  }
}
export declare namespace Event {
  export {
    type EventListListGetResponse as EventListListGetResponse,
    type EventListAggregateResponse as EventListAggregateResponse,
    type EventCreateResponse as EventCreateResponse,
    type EventPostCreateBulkResponse as EventPostCreateBulkResponse,
    type EventPostDosCreateBulkWithRelationshipsResponse as EventPostDosCreateBulkWithRelationshipsResponse,
    type EventPostCopyToNewDSResponse as EventPostCopyToNewDSResponse,
    type EventRetrieveReadResponse as EventRetrieveReadResponse,
    type EventPostMoveToNewDSResponse as EventPostMoveToNewDSResponse,
    type EventDeleteTagDeleteResponse as EventDeleteTagDeleteResponse,
    type EventCreate4Response as EventCreate4Response,
    type EventPostGraphQlResponse as EventPostGraphQlResponse,
    type EventListQueryListResponse as EventListQueryListResponse,
    type EventCreate2Response as EventCreate2Response,
    type EventRetrieveQueryReadResponse as EventRetrieveQueryReadResponse,
    type EventPatchQueryUpdateResponse as EventPatchQueryUpdateResponse,
    type EventPostQueryUpdateResponse as EventPostQueryUpdateResponse,
    type EventRetrieveRawReadDSResponse as EventRetrieveRawReadDSResponse,
    type EventDeleteReferenceDeleteResponse as EventDeleteReferenceDeleteResponse,
    type EventCreate5Response as EventCreate5Response,
    type EventCreate3Response as EventCreate3Response,
    type EventPatchUpdateBulkResponse as EventPatchUpdateBulkResponse,
    type EventDeleteResponse as EventDeleteResponse,
    type EventRetrieveReadDeprecatedResponse as EventRetrieveReadDeprecatedResponse,
    type EventPatchUpdateResponse as EventPatchUpdateResponse,
    type EventPostUpdateResponse as EventPostUpdateResponse,
    type EventRetrieveRawReadResponse as EventRetrieveRawReadResponse,
    type EventPatchRawUpdateResponse as EventPatchRawUpdateResponse,
    type EventPostRawUpdateResponse as EventPostRawUpdateResponse,
    type EventListRelationshipsResponse as EventListRelationshipsResponse,
    type EventListListGetParams as EventListListGetParams,
    type EventListAggregateParams as EventListAggregateParams,
    type EventCreateParams as EventCreateParams,
    type EventPostCreateBulkParams as EventPostCreateBulkParams,
    type EventPostDosCreateBulkWithRelationshipsParams as EventPostDosCreateBulkWithRelationshipsParams,
    type EventPostCopyToNewDSParams as EventPostCopyToNewDSParams,
    type EventRetrieveReadParams as EventRetrieveReadParams,
    type EventPostMoveToNewDSParams as EventPostMoveToNewDSParams,
    type EventDeleteTagDeleteParams as EventDeleteTagDeleteParams,
    type EventCreate4Params as EventCreate4Params,
    type EventCreate2Params as EventCreate2Params,
    type EventDeleteQueryDeleteParams as EventDeleteQueryDeleteParams,
    type EventRetrieveQueryReadParams as EventRetrieveQueryReadParams,
    type EventPatchQueryUpdateParams as EventPatchQueryUpdateParams,
    type EventPostQueryUpdateParams as EventPostQueryUpdateParams,
    type EventRetrieveRawReadDSParams as EventRetrieveRawReadDSParams,
    type EventDeleteReferenceDeleteParams as EventDeleteReferenceDeleteParams,
    type EventCreate5Params as EventCreate5Params,
    type EventCreate3Params as EventCreate3Params,
    type EventPatchUpdateBulkParams as EventPatchUpdateBulkParams,
    type EventDeleteParams as EventDeleteParams,
    type EventRetrieveReadDeprecatedParams as EventRetrieveReadDeprecatedParams,
    type EventPatchUpdateParams as EventPatchUpdateParams,
    type EventPostUpdateParams as EventPostUpdateParams,
    type EventRetrieveRawReadParams as EventRetrieveRawReadParams,
    type EventPatchRawUpdateParams as EventPatchRawUpdateParams,
    type EventPostRawUpdateParams as EventPostRawUpdateParams,
    type EventListRelationshipsParams as EventListRelationshipsParams,
  };
}
