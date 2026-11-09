// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Events extends APIResource {
  /**
   * Expands the single-level relationship neighborhood of one or more seed nodes (event, indicator, or tag) from R2 Data Catalog. Seeds use compact id format (type:uuid), e.g. "event:550e8400-...". Multi-seed requests merge and deduplicate results server-side. Hydrates neighbor entities with summary data from Durable Objects. Supports filtering by relationship type and dataset scope.
   *
   * @param {string} accountID - Account ID.
   * @param {EventListGraphParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EventListGraphResponse>} Returns merged graph neighborhood from R2 Data Catalog
   *
   * @example
   * ```ts
   * const event = await client.events.listGraph('accountId');
   * ```
   */
  listGraph(
    accountID: string,
    query: EventListGraphParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListGraphResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/graph`, {
      query,
      ...options,
    });
  }
}

export interface EventListGraphParams {
  /**
   * Comma-separated compact seed ids (type:uuid). Example: seeds=event:550e8400-...,indicator:661fa920-... Provide 1–50 entries; omitting seeds returns 400.
   */
  seeds?: Array<string>;
  /**
   * Edge direction relative to each seed: out (seed→neighbors), in (neighbors→seed), both (default).
   */
  direction?: string;
  /**
   * Hydration strategy for neighbor nodes when expand=nodes is set. r2_join (default): use R2 JOIN query + DO fallback. do_only: use plain R2 query + hydrate all neighbors via Durable Objects.
   */
  hydration?: string;
  /**
   * Max neighbors per seed (default: 100, max: 1000). Values above 1000 return 400.
   */
  limit?: number;
  /**
   * Total accumulated node cap across all seeds (default: 500, max: 1000). Values above 1000 return 400.
   */
  max_nodes?: number;
  /**
   * Comma-separated relationship types to filter by. Allowed: tagged_with, appears_in, related_to, caused_by, attributed_to.
   */
  relationshipTypes?: Array<string>;
  /**
   * Comma-separated dataset UUIDs to restrict neighbor scope, or one standalone scope value: 'all'/'*', 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. Intersected with access grants.
   */
  datasetIds?: Array<string>;
  /**
   * Opaque pagination token. Only valid when seeds has exactly 1 entry; 400 otherwise.
   */
  cursor?: string;
  /**
   * Comma-separated list of response sections to expand (hydrate). Allowed: `nodes`. Omitting `expand` returns identifier-only nodes.
   */
  expand?: Array<string>;
}

export interface EventListGraphResponse {
  errors: Array<Record<string, unknown>>;
  messages: Array<Record<string, unknown>>;
  result: EventListGraphResponse.Result;
  success: boolean;
  result_info?: EventListGraphResponse.ResultInfo;
}

export namespace EventListGraphResponse {
  export interface Result {
    edges: Array<Result.Edge>;
    /**
     * Focal node object (legacy single-seed). Null when unavailable.
     */
    node: Record<string, unknown> | null;
    nodes: Array<Record<string, unknown>>;
  }

  export namespace Result {
    export interface Edge {
      /**
       * Deterministic composite edge id (source→target:relationshipType)
       */
      id: string;
      relationshipType: string;
      /**
       * Compact id of the source node (type:uuid)
       */
      source: string;
      sourceId: string;
      sourceType: string;
      /**
       * Compact id of the target node (type:uuid)
       */
      target: string;
      targetId: string;
      targetType: string;
    }
  }

  export interface ResultInfo {
    /**
     * Number of nodes in result.nodes (seeds + neighbors)
     */
    count: number;
    /**
     * Number of edges in result.edges
     */
    edge_count: number;
    /**
     * Total query time in milliseconds
     */
    query_time_ms: number;
    /**
     * Total count of nodes (same as count for this endpoint)
     */
    total_count: number;
    /**
     * Opaque pagination cursor for the next page; null when exhausted or for multi-seed requests (single-seed only)
     */
    cursor?: string | null;
    /**
     * Traversal depth reached (always 1 for single-level)
     */
    depth_reached?: number;
    /**
     * True when a cursor is available for the next page (single-seed only)
     */
    has_more?: boolean;
    /**
     * Composite ids of the seed node(s) (type:uuid). Always an array, even for one seed.
     */
    seeds?: Array<string>;
    /**
     * True when results were capped (per-seed limit or max_nodes)
     */
    truncated?: boolean;
  }
}
export declare namespace Events {
  export {
    type EventListGraphResponse as EventListGraphResponse,
    type EventListGraphParams as EventListGraphParams,
  };
}
