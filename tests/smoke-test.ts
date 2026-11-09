// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import UnderGateMultiSection from '@qa-switch-test/under-gate-multi-section';

// One shared client runs every case.
const client = new UnderGateMultiSection({ maxRetries: 2, timeout: 10_000 });

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/accounts',
    label: 'required params',
    run: async () => {
      const response = await client.accounts.list({
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts',
    label: 'all params',
    run: async () => {
      const response = await client.accounts.list({
        name: 'example.com',
        page: 1,
        per_page: 20,
        direction: 'desc',
      });
    },
  },

  {
    operation: 'creation',
    method: 'POST',
    path: '/accounts',
    run: async () => {
      const response = await client.accounts.creation({});
    },
  },

  {
    operation: 'batchMove',
    method: 'POST',
    path: '/accounts/move',
    run: async () => {
      const account = await client.accounts.batchMove({
        account_ids: [''],
        destination_organization_id: '',
      });
    },
  },

  {
    operation: 'deletion',
    method: 'DELETE',
    path: '/accounts/{account_id}',
    run: async () => {
      const response = await client.accounts.deletion('accountId');
    },
  },

  {
    operation: 'details',
    method: 'GET',
    path: '/accounts/{account_id}',
    run: async () => {
      const response = await client.accounts.details('accountId');
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}',
    run: async () => {
      const response = await client.accounts.update('accountId', {});
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{accountId}/v1/images',
    label: 'required params',
    run: async () => {
      const image = await client.images.listList('accountId', {
        per_page: 1000,
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{accountId}/v1/images',
    label: 'all params',
    run: async () => {
      const image = await client.images.listList('accountId', {
        per_page: 1000,
        continuation_token: 'continuationToken',
        creator: 'creator',
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'postUpload',
    method: 'POST',
    path: '/accounts/{accountId}/v1/images',
    label: 'required params',
    run: async () => {
      const image = await client.images.postUpload('accountId');
    },
  },

  {
    operation: 'postUpload',
    method: 'POST',
    path: '/accounts/{accountId}/v1/images',
    label: 'all params',
    run: async () => {
      const image = await client.images.postUpload('accountId', {
        creator: '',
        file: new File(['file'], 'file'),
        id: '',
        metadata: {},
        requireSignedURLs: false,
        url: '',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{accountId}/v1/images/{imageId}',
    run: async () => {
      const image = await client.images.deleteDelete('imageId', {
        accountId: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveGet',
    method: 'GET',
    path: '/accounts/{accountId}/v1/images/{imageId}',
    run: async () => {
      const image = await client.images.retrieveGet('imageId', {
        accountId: 'accountId',
      });
    },
  },

  {
    operation: 'patchEdit',
    method: 'PATCH',
    path: '/accounts/{accountId}/v1/images/{imageId}',
    label: 'required params',
    run: async () => {
      const image = await client.images.patchEdit('imageId', {
        accountId: 'accountId',
      });
    },
  },

  {
    operation: 'patchEdit',
    method: 'PATCH',
    path: '/accounts/{accountId}/v1/images/{imageId}',
    label: 'all params',
    run: async () => {
      const image = await client.images.patchEdit('imageId', {
        accountId: 'accountId',
        creator: '',
        metadata: {},
        requireSignedURLs: false,
      });
    },
  },

  {
    operation: 'putDirectUpload',
    method: 'PUT',
    path: '/accounts/{accountId}/v1/images/{imageId}',
    label: 'required params',
    run: async () => {
      const image = await client.images.putDirectUpload('imageId', {
        accountId: 'accountId',
      });
    },
  },

  {
    operation: 'putDirectUpload',
    method: 'PUT',
    path: '/accounts/{accountId}/v1/images/{imageId}',
    label: 'all params',
    run: async () => {
      const image = await client.images.putDirectUpload('imageId', {
        accountId: 'accountId',
        file: new File(['file'], 'file'),
        url: '',
      });
    },
  },

  {
    operation: 'listGetBlob',
    method: 'GET',
    path: '/accounts/{accountId}/v1/images/{imageId}/blob',
    run: async () => {
      const response = await client.images.listGetBlob('imageId', {
        accountId: 'accountId',
      });
    },
  },

  {
    operation: 'listAccountsAccountV2',
    method: 'GET',
    path: '/accounts/{accountId}/v2/images',
    label: 'required params',
    run: async () => {
      const image = await client.images.listAccountsAccountV2('accountId', {
        per_page: 1000,
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'listAccountsAccountV2',
    method: 'GET',
    path: '/accounts/{accountId}/v2/images',
    label: 'all params',
    run: async () => {
      const image = await client.images.listAccountsAccountV2('accountId', {
        per_page: 1000,
        continuation_token: 'continuationToken',
        creator: 'creator',
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'postDirectUploadLink',
    method: 'POST',
    path: '/accounts/{accountId}/v2/images/direct_upload',
    label: 'required params',
    run: async () => {
      const image = await client.images.postDirectUploadLink('accountId');
    },
  },

  {
    operation: 'postDirectUploadLink',
    method: 'POST',
    path: '/accounts/{accountId}/v2/images/direct_upload',
    label: 'all params',
    run: async () => {
      const image = await client.images.postDirectUploadLink('accountId', {
        expiry: '',
        id: '',
        metadata: {},
        requireSignedURLs: false,
      });
    },
  },

  {
    operation: 'listFlowsGet',
    method: 'GET',
    path: '/accounts/{accountId}/zones/{zoneId}/v1/images/flows',
    run: async () => {
      const image = await client.images.listFlowsGet('zoneId', {
        accountId: 'accountId',
      });
    },
  },

  {
    operation: 'putFlowsUpdate',
    method: 'PUT',
    path: '/accounts/{accountId}/zones/{zoneId}/v1/images/flows',
    label: 'required params',
    run: async () => {
      const image = await client.images.putFlowsUpdate('zoneId', {
        accountId: 'accountId',
        flows: [
          {
            enabled: false,
            provider: 'fastly',
            type: 'provider',
            version: 0,
          },
        ],
        version: 2,
      });
    },
  },

  {
    operation: 'putFlowsUpdate',
    method: 'PUT',
    path: '/accounts/{accountId}/zones/{zoneId}/v1/images/flows',
    label: 'all params',
    run: async () => {
      const image = await client.images.putFlowsUpdate('zoneId', {
        accountId: 'accountId',
        etag: '',
        flows: [
          {
            enabled: false,
            provider: 'fastly',
            type: 'provider',
            version: 0,
          },
        ],
        version: 2,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_identifier}/custom_pages',
    run: async () => {
      const response = await client.customPagesForAnAccount.list('accountIdentifier');
    },
  },

  {
    operation: 'createPreviewToken',
    method: 'POST',
    path: '/accounts/{account_identifier}/custom_pages/preview_tokens',
    run: async () => {
      const response = await client.customPagesForAnAccount.createPreviewToken('accountIdentifier', {});
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_identifier}/custom_pages/{identifier}',
    run: async () => {
      const response = await client.customPagesForAnAccount.retrieveA('identifier', {
        account_identifier: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_identifier}/custom_pages/{identifier}',
    run: async () => {
      const response = await client.customPagesForAnAccount.updateA('identifier', {
        account_identifier: {},
        state: {},
        url: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_identifier}/custom_pages/assets',
    run: async () => {
      const response = await client.customAssetsForAnAccount.list('accountIdentifier', {
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_identifier}/custom_pages/assets',
    run: async () => {
      const response = await client.customAssetsForAnAccount.createA('accountIdentifier', {
        description: {},
        name: {},
        url: {},
      });
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_identifier}/custom_pages/assets/{asset_name}',
    run: async () => {
      await client.customAssetsForAnAccount.deleteA('assetName', {
        account_identifier: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_identifier}/custom_pages/assets/{asset_name}',
    run: async () => {
      const response = await client.customAssetsForAnAccount.retrieveA('assetName', {
        account_identifier: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_identifier}/custom_pages/assets/{asset_name}',
    run: async () => {
      const response = await client.customAssetsForAnAccount.updateA('assetName', {
        account_identifier: {},
        description: {},
        url: {},
      });
    },
  },

  {
    operation: 'listReports',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports',
    label: 'required params',
    run: async () => {
      const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listReports(
        '023e105f4ecef8ad9ca31a8372d0c353',
      );
    },
  },

  {
    operation: 'listReports',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports',
    label: 'all params',
    run: async () => {
      const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listReports(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          page: 1,
          per_page: 1,
          sort: 'sort',
          domain: 'domain',
          created_before: '2009-11-10T23:00:00Z',
          created_after: '2009-11-10T23:00:00Z',
          status: {},
          type: {},
          mitigation_status: {},
        },
      );
    },
  },

  {
    operation: 'listSubmittedReports',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/submitted',
    label: 'required params',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReports(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          page: 1,
          per_page: 100,
        },
      );
    },
  },

  {
    operation: 'listSubmittedReports',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/submitted',
    label: 'all params',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReports(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          page: 1,
          per_page: 100,
          sort: 'sort',
          id: 'id',
          domain: ['domain'],
          created_before: '2024-01-01T00:00:00.000Z',
          created_after: '2024-01-01T00:00:00.000Z',
          status: [{}],
          type: [{}],
        },
      );
    },
  },

  {
    operation: 'retrieveSubmittedReport',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/submitted/{report_id}',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.retrieveSubmittedReport('reportId', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      });
    },
  },

  {
    operation: 'listSubmittedReportEmails',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/submitted/{report_id}/emails',
    label: 'required params',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReportEmails('reportId', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      });
    },
  },

  {
    operation: 'listSubmittedReportEmails',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/submitted/{report_id}/emails',
    label: 'all params',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReportEmails('reportId', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        page: 1,
        per_page: 1,
      });
    },
  },

  {
    operation: 'checkAppealEligibility',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/{report_id}/appeals/eligibility',
    run: async () => {
      const tsengAbuseComplaintProcessorOther =
        await client.tsengAbuseComplaintProcessorOther.checkAppealEligibility('reportId', {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        });
    },
  },

  {
    operation: 'listEmails',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/{report_id}/emails',
    label: 'required params',
    run: async () => {
      const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listEmails(
        'reportId',
        {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        },
      );
    },
  },

  {
    operation: 'listEmails',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/{report_id}/emails',
    label: 'all params',
    run: async () => {
      const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listEmails(
        'reportId',
        {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
          page: 1,
          per_page: 1,
        },
      );
    },
  },

  {
    operation: 'listMitigations',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/{report_id}/mitigations',
    label: 'required params',
    run: async () => {
      const tsengAbuseComplaintProcessorOther =
        await client.tsengAbuseComplaintProcessorOther.listMitigations('reportId', {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        });
    },
  },

  {
    operation: 'listMitigations',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/{report_id}/mitigations',
    label: 'all params',
    run: async () => {
      const tsengAbuseComplaintProcessorOther =
        await client.tsengAbuseComplaintProcessorOther.listMitigations('reportId', {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
          page: 1,
          per_page: 1,
          sort: 'type,asc',
          type: {},
          effective_before: '2009-11-10T23:00:00Z',
          effective_after: '2009-11-10T23:00:00Z',
          status: {},
          entity_type: {},
        });
    },
  },

  {
    operation: 'requestReview',
    method: 'POST',
    path: '/accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.requestReview('reportId', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        body: {},
      });
    },
  },

  {
    operation: 'retrieveReport',
    method: 'GET',
    path: '/accounts/{account_id}/abuse-reports/{report_param}',
    run: async () => {
      const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.retrieveReport(
        'reportParam',
        {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        },
      );
    },
  },

  {
    operation: 'submitReport',
    method: 'POST',
    path: '/accounts/{account_id}/abuse-reports/{report_param}',
    run: async () => {
      const response = await client.tsengAbuseComplaintProcessorOther.submitReport('reportParam', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        body: {},
      });
    },
  },

  {
    operation: 'apiToolCallTimeseries',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/analytics/portals/{portal_id}/tool-calls/timeseries',
    label: 'required params',
    run: async () => {
      const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiToolCallTimeseries('portalId', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        granularity: 'daily',
        aggregate: 'false',
        tz: 'utc',
      });
    },
  },

  {
    operation: 'apiToolCallTimeseries',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/analytics/portals/{portal_id}/tool-calls/timeseries',
    label: 'all params',
    run: async () => {
      const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiToolCallTimeseries('portalId', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        granularity: 'daily',
        aggregate: 'false',
        tz: 'utc',
        days: 1,
      });
    },
  },

  {
    operation: 'apiServerToolCallTimeseries',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/analytics/servers/{server_id}/tool-calls/timeseries',
    label: 'required params',
    run: async () => {
      const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiServerToolCallTimeseries('serverId', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        granularity: 'daily',
        aggregate: 'false',
        tz: 'utc',
      });
    },
  },

  {
    operation: 'apiServerToolCallTimeseries',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/analytics/servers/{server_id}/tool-calls/timeseries',
    label: 'all params',
    run: async () => {
      const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiServerToolCallTimeseries('serverId', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        granularity: 'daily',
        aggregate: 'false',
        tz: 'utc',
        days: 1,
      });
    },
  },

  {
    operation: 'apiAccountToolCallTimeseries',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/analytics/tool-calls/timeseries',
    label: 'required params',
    run: async () => {
      const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiAccountToolCallTimeseries(
        'a86a8f5c339544d7bdc89926de14fb8c',
        {
          granularity: 'daily',
          aggregate: 'false',
          tz: 'utc',
        },
      );
    },
  },

  {
    operation: 'apiAccountToolCallTimeseries',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/analytics/tool-calls/timeseries',
    label: 'all params',
    run: async () => {
      const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiAccountToolCallTimeseries(
        'a86a8f5c339544d7bdc89926de14fb8c',
        {
          granularity: 'daily',
          aggregate: 'false',
          tz: 'utc',
          days: 1,
        },
      );
    },
  },

  {
    operation: 'apiList',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals',
    label: 'required params',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'apiList',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals',
    label: 'all params',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
        page: 1,
        per_page: 20,
        search: 'search',
      });
    },
  },

  {
    operation: 'apiCreate',
    method: 'POST',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals',
    label: 'required params',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
        hostname: 'example.com',
        id: 'my-mcp-portal',
        name: 'My MCP Portal',
        secure_web_gateway: false,
      });
    },
  },

  {
    operation: 'apiCreate',
    method: 'POST',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals',
    label: 'all params',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
        allow_code_mode: true,
        code_mode: 'opt_in',
        description: 'This is my custom MCP Portal',
        hostname: 'example.com',
        id: 'my-mcp-portal',
        name: 'My MCP Portal',
        secure_web_gateway: false,
        servers: [
          {
            server_id: 'my-mcp-server',
          },
        ],
      });
    },
  },

  {
    operation: 'apiDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiDelete('my-mcp-portal', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      });
    },
  },

  {
    operation: 'apiFetchGateways',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiFetchGateways('my-mcp-portal', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      });
    },
  },

  {
    operation: 'apiUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}',
    label: 'required params',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiUpdate('my-mcp-portal', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        secure_web_gateway: false,
      });
    },
  },

  {
    operation: 'apiUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}',
    label: 'all params',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiUpdate('my-mcp-portal', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        allow_code_mode: true,
        code_mode: 'opt_in',
        description: 'This is my custom MCP Portal',
        hostname: 'example.com',
        name: 'My MCP Portal',
        secure_web_gateway: false,
        servers: [
          {
            server_id: 'my-mcp-server',
          },
        ],
      });
    },
  },

  {
    operation: 'apiEffectiveRedirectUri',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/portals/{portal_id}/servers/{server_id}/effective-redirect-uri',
    run: async () => {
      const mcpPortal = await client.mcpPortal.apiEffectiveRedirectURI('my-mcp-server', {
        portal_id: 'my-mcp-portal',
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      });
    },
  },

  {
    operation: 'apiList',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers',
    label: 'required params',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'apiList',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers',
    label: 'all params',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
        page: 1,
        per_page: 20,
        search: 'search',
      });
    },
  },

  {
    operation: 'apiCreate',
    method: 'POST',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers',
    label: 'required params',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
        auth_type: 'unauthenticated',
        hostname: 'https://example.com/mcp',
        id: 'my-mcp-server',
        is_shared_oauth_callback_enabled: false,
        name: 'My MCP Server',
        secure_web_gateway: false,
      });
    },
  },

  {
    operation: 'apiCreate',
    method: 'POST',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers',
    label: 'all params',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
        auth_credentials: 'sk-my-bearer-token',
        auth_type: 'unauthenticated',
        client_secret: '',
        description: 'This is one remote MCP server',
        hostname: 'https://example.com/mcp',
        id: 'my-mcp-server',
        is_shared_oauth_callback_enabled: false,
        name: 'My MCP Server',
        secure_web_gateway: false,
        updated_prompts: [
          {
            name: '',
          },
        ],
        updated_tools: [
          {
            name: '',
          },
        ],
      });
    },
  },

  {
    operation: 'apiDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiDelete('my-mcp-server', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      });
    },
  },

  {
    operation: 'apiFetch',
    method: 'GET',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiFetch('my-mcp-server', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      });
    },
  },

  {
    operation: 'apiUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}',
    label: 'required params',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiUpdate('my-mcp-server', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        is_shared_oauth_callback_enabled: false,
        secure_web_gateway: false,
      });
    },
  },

  {
    operation: 'apiUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}',
    label: 'all params',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiUpdate('my-mcp-server', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
        auth_credentials: 'sk-my-bearer-token',
        client_secret: '',
        description: 'This is one remote MCP server',
        is_shared_oauth_callback_enabled: false,
        name: 'My MCP Server',
        secure_web_gateway: false,
        updated_prompts: [
          {
            name: '',
          },
        ],
        updated_tools: [
          {
            name: '',
          },
        ],
      });
    },
  },

  {
    operation: 'apiSync',
    method: 'POST',
    path: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync',
    run: async () => {
      const mcpPortalServer = await client.mcpPortalServers.apiSync('my-mcp-server', {
        account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps',
    label: 'required params',
    run: async () => {
      const response = await client.accessApplications.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps',
    label: 'all params',
    run: async () => {
      const response = await client.accessApplications.list('accountId', {
        name: 'name',
        domain: 'domain',
        aud: 'aud',
        target_attributes: 'targetAttributes',
        exact: true,
        search: 'search',
      });
    },
  },

  {
    operation: 'createAn',
    method: 'POST',
    path: '/accounts/{account_id}/access/apps',
    run: async () => {
      const accessApplication = await client.accessApplications.createAn('accountId', {});
    },
  },

  {
    operation: 'deleteAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/apps/{app_id}',
    run: async () => {
      const response = await client.accessApplications.deleteAn('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveAn',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps/{app_id}',
    run: async () => {
      const response = await client.accessApplications.retrieveAn('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateAn',
    method: 'PUT',
    path: '/accounts/{account_id}/access/apps/{app_id}',
    run: async () => {
      const accessApplication = await client.accessApplications.updateAn('appId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'revokeServiceTokens',
    method: 'POST',
    path: '/accounts/{account_id}/access/apps/{app_id}/revoke_tokens',
    run: async () => {
      const response = await client.accessApplications.revokeServiceTokens('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'patchUpdateSettings',
    method: 'PATCH',
    path: '/accounts/{account_id}/access/apps/{app_id}/settings',
    run: async () => {
      const response = await client.accessApplications.patchUpdateSettings('appId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'putUpdateSettings',
    method: 'PUT',
    path: '/accounts/{account_id}/access/apps/{app_id}/settings',
    run: async () => {
      const response = await client.accessApplications.putUpdateSettings('appId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'testPolicies',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps/{app_id}/user_policy_checks',
    run: async () => {
      const response = await client.accessApplications.testPolicies('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cAsListCAs',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps/ca',
    run: async () => {
      const response = await client.accessShortLivedCertificateCas.cAsListCas('accountId', {
        per_page: 100,
      });
    },
  },

  {
    operation: 'cAsDeleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/apps/{app_id}/ca',
    run: async () => {
      const response = await client.accessShortLivedCertificateCas.cAsDeleteA('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cAsGetA',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps/{app_id}/ca',
    run: async () => {
      const response = await client.accessShortLivedCertificateCas.cAsGetA('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cAsCreateA',
    method: 'POST',
    path: '/accounts/{account_id}/access/apps/{app_id}/ca',
    run: async () => {
      const response = await client.accessShortLivedCertificateCas.cAsCreateA('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listApp',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps/{app_id}/policies',
    run: async () => {
      const response = await client.accessApplicationScopedPolicies.listApp('appId', {
        account_id: {},
        per_page: 200,
      });
    },
  },

  {
    operation: 'createAn',
    method: 'POST',
    path: '/accounts/{account_id}/access/apps/{app_id}/policies',
    run: async () => {
      const response = await client.accessApplicationScopedPolicies.createAn('appId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'deleteAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}',
    run: async () => {
      const response = await client.accessApplicationScopedPolicies.deleteAn('policyId', {
        app_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveAn',
    method: 'GET',
    path: '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}',
    run: async () => {
      const response = await client.accessApplicationScopedPolicies.retrieveAn('policyId', {
        app_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'updateAn',
    method: 'PUT',
    path: '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}',
    run: async () => {
      const response = await client.accessApplicationScopedPolicies.updateAn('policyId', {
        app_id: {},
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'convertReusable',
    method: 'PUT',
    path: '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}/make_reusable',
    run: async () => {
      const response = await client.accessApplicationScopedPolicies.convertReusable('policyId', {
        app_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/authenticator_device_aaguids',
    run: async () => {
      const response = await client.accessAuthenticatorDeviceAaguids.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/bookmarks',
    run: async () => {
      const response = await client.accessBookmarkApplicationsDeprecated.list('accountId');
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/bookmarks/{bookmark_id}',
    run: async () => {
      const response = await client.accessBookmarkApplicationsDeprecated.deleteA('bookmarkId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/access/bookmarks/{bookmark_id}',
    run: async () => {
      const response = await client.accessBookmarkApplicationsDeprecated.retrieveA('bookmarkId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/access/bookmarks/{bookmark_id}',
    run: async () => {
      const response = await client.accessBookmarkApplicationsDeprecated.createA('bookmarkId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/bookmarks/{bookmark_id}',
    run: async () => {
      const response = await client.accessBookmarkApplicationsDeprecated.updateA('bookmarkId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'mtlsListMtlsCertificates',
    method: 'GET',
    path: '/accounts/{account_id}/access/certificates',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsListMTLSCertificates('accountId', {
        per_page: 50,
      });
    },
  },

  {
    operation: 'mtlsAddAnMtlsCertificate',
    method: 'POST',
    path: '/accounts/{account_id}/access/certificates',
    label: 'required params',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsAddAnMTLSCertificate('accountId', {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIGAjCCA+qgAwIBAgIJAI7kymlF7CWT...N4RI7KKB7nikiuUf8vhULKy5IX10\nDrUtmu/B\n-----END CERTIFICATE-----',
        name: {},
      });
    },
  },

  {
    operation: 'mtlsAddAnMtlsCertificate',
    method: 'POST',
    path: '/accounts/{account_id}/access/certificates',
    label: 'all params',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsAddAnMTLSCertificate('accountId', {
        associated_hostnames: {},
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIGAjCCA+qgAwIBAgIJAI7kymlF7CWT...N4RI7KKB7nikiuUf8vhULKy5IX10\nDrUtmu/B\n-----END CERTIFICATE-----',
        name: {},
      });
    },
  },

  {
    operation: 'mtlsListMtlsCertificatesHostnameSettings',
    method: 'GET',
    path: '/accounts/{account_id}/access/certificates/settings',
    run: async () => {
      const response =
        await client.accessMTLSAuthentication.mtlsListMTLSCertificatesHostnameSettings('accountId');
    },
  },

  {
    operation: 'mtlsUpdateAnMtlsCertificateSettings',
    method: 'PUT',
    path: '/accounts/{account_id}/access/certificates/settings',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificateSettings(
        'accountId',
        {
          settings: [{}],
        },
      );
    },
  },

  {
    operation: 'mtlsDeleteAnMtlsCertificate',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/certificates/{certificate_id}',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsDeleteAnMTLSCertificate('certificateId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'mtlsGetAnMtlsCertificate',
    method: 'GET',
    path: '/accounts/{account_id}/access/certificates/{certificate_id}',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsGetAnMTLSCertificate('certificateId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'mtlsUpdateAnMtlsCertificate',
    method: 'PUT',
    path: '/accounts/{account_id}/access/certificates/{certificate_id}',
    label: 'required params',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificate('certificateId', {
        account_id: {},
        associated_hostnames: {},
      });
    },
  },

  {
    operation: 'mtlsUpdateAnMtlsCertificate',
    method: 'PUT',
    path: '/accounts/{account_id}/access/certificates/{certificate_id}',
    label: 'all params',
    run: async () => {
      const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificate('certificateId', {
        account_id: {},
        associated_hostnames: {},
        name: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/custom_pages',
    run: async () => {
      const response = await client.accessCustomPages.list('accountId', {
        per_page: 50,
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/access/custom_pages',
    label: 'required params',
    run: async () => {
      const response = await client.accessCustomPages.createA('accountId');
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/access/custom_pages',
    label: 'all params',
    run: async () => {
      const response = await client.accessCustomPages.createA('accountId', {});
    },
  },

  {
    operation: 'validateATemplate',
    method: 'POST',
    path: '/accounts/{account_id}/access/custom_pages/validate',
    label: 'required params',
    run: async () => {
      const response = await client.accessCustomPages.validateATemplate('accountId');
    },
  },

  {
    operation: 'validateATemplate',
    method: 'POST',
    path: '/accounts/{account_id}/access/custom_pages/validate',
    label: 'all params',
    run: async () => {
      const response = await client.accessCustomPages.validateATemplate('accountId', {});
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/custom_pages/{custom_page_id}',
    run: async () => {
      const response = await client.accessCustomPages.deleteA('customPageId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/access/custom_pages/{custom_page_id}',
    run: async () => {
      const response = await client.accessCustomPages.retrieveA('customPageId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/custom_pages/{custom_page_id}',
    label: 'required params',
    run: async () => {
      const response = await client.accessCustomPages.updateA('customPageId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/custom_pages/{custom_page_id}',
    label: 'all params',
    run: async () => {
      const response = await client.accessCustomPages.updateA('customPageId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'accessListSsh',
    method: 'GET',
    path: '/accounts/{account_id}/access/gateway_ca',
    run: async () => {
      const response = await client.gatewayCa.accessListSSH('accountId');
    },
  },

  {
    operation: 'accessAddAnSsh',
    method: 'POST',
    path: '/accounts/{account_id}/access/gateway_ca',
    run: async () => {
      const response = await client.gatewayCa.accessAddAnSSH('accountId');
    },
  },

  {
    operation: 'accessDeleteAnSsh',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/gateway_ca/{certificate_id}',
    run: async () => {
      const response = await client.gatewayCa.accessDeleteAnSSH('certificateId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/groups',
    label: 'required params',
    run: async () => {
      const response = await client.accessGroups.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/groups',
    label: 'all params',
    run: async () => {
      const response = await client.accessGroups.list('accountId', {
        name: 'name',
        search: 'search',
      });
    },
  },

  {
    operation: 'createAn',
    method: 'POST',
    path: '/accounts/{account_id}/access/groups',
    label: 'required params',
    run: async () => {
      const response = await client.accessGroups.createAn('accountId', {
        include: {},
        name: {},
      });
    },
  },

  {
    operation: 'createAn',
    method: 'POST',
    path: '/accounts/{account_id}/access/groups',
    label: 'all params',
    run: async () => {
      const response = await client.accessGroups.createAn('accountId', {
        exclude: {},
        include: {},
        is_default: {},
        name: {},
        require: {},
      });
    },
  },

  {
    operation: 'deleteAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/groups/{group_id}',
    run: async () => {
      const response = await client.accessGroups.deleteAn('groupId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveAn',
    method: 'GET',
    path: '/accounts/{account_id}/access/groups/{group_id}',
    run: async () => {
      const response = await client.accessGroups.retrieveAn('groupId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateAn',
    method: 'PUT',
    path: '/accounts/{account_id}/access/groups/{group_id}',
    label: 'required params',
    run: async () => {
      const response = await client.accessGroups.updateAn('groupId', {
        account_id: {},
        include: {},
        name: {},
      });
    },
  },

  {
    operation: 'updateAn',
    method: 'PUT',
    path: '/accounts/{account_id}/access/groups/{group_id}',
    label: 'all params',
    run: async () => {
      const response = await client.accessGroups.updateAn('groupId', {
        account_id: {},
        exclude: {},
        include: {},
        is_default: {},
        name: {},
        require: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers',
    label: 'required params',
    run: async () => {
      const response = await client.accessIdentityProviders.list('accountId', {
        per_page: 200,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers',
    label: 'all params',
    run: async () => {
      const response = await client.accessIdentityProviders.list('accountId', {
        scim_enabled: 'scimEnabled',
        per_page: 200,
      });
    },
  },

  {
    operation: 'createAn',
    method: 'POST',
    path: '/accounts/{account_id}/access/identity_providers',
    run: async () => {
      const response = await client.accessIdentityProviders.createAn('accountId', {});
    },
  },

  {
    operation: 'deleteAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}',
    run: async () => {
      const response = await client.accessIdentityProviders.deleteAn('identityProviderId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveAn',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}',
    run: async () => {
      const response = await client.accessIdentityProviders.retrieveAn('identityProviderId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateAn',
    method: 'PUT',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}',
    run: async () => {
      const response = await client.accessIdentityProviders.updateAn('identityProviderId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'createSamlCertificateFor',
    method: 'POST',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/saml_certificate',
    run: async () => {
      const response = await client.accessIdentityProviders.createSamlCertificateFor('identityProviderId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listScimGroupResources',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups',
    label: 'required params',
    run: async () => {
      const response = await client.accessIdentityProviders.listScimGroupResources('identityProviderId', {
        account_id: {},
        per_page: 100,
      });
    },
  },

  {
    operation: 'listScimGroupResources',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups',
    label: 'all params',
    run: async () => {
      const response = await client.accessIdentityProviders.listScimGroupResources('identityProviderId', {
        account_id: {},
        cf_resource_id: {},
        idp_resource_id: {},
        name: {},
        per_page: 100,
      });
    },
  },

  {
    operation: 'listScimUserResources',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users',
    label: 'required params',
    run: async () => {
      const response = await client.accessIdentityProviders.listScimUserResources('identityProviderId', {
        account_id: {},
        per_page: 100,
      });
    },
  },

  {
    operation: 'listScimUserResources',
    method: 'GET',
    path: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users',
    label: 'all params',
    run: async () => {
      const response = await client.accessIdentityProviders.listScimUserResources('identityProviderId', {
        account_id: {},
        cf_resource_id: {},
        idp_resource_id: {},
        username: {},
        email: {},
        name: {},
        per_page: 100,
      });
    },
  },

  {
    operation: 'idpList',
    method: 'GET',
    path: '/accounts/{account_id}/access/idp_federation_grants',
    run: async () => {
      const response = await client.accessIdPFederationGrants.idpList('accountId');
    },
  },

  {
    operation: 'idpCreate',
    method: 'POST',
    path: '/accounts/{account_id}/access/idp_federation_grants',
    run: async () => {
      const response = await client.accessIdPFederationGrants.idpCreate('accountId', {});
    },
  },

  {
    operation: 'idpDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/idp_federation_grants/{grant_id}',
    run: async () => {
      const response = await client.accessIdPFederationGrants.idpDelete('grantId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'idpGet',
    method: 'GET',
    path: '/accounts/{account_id}/access/idp_federation_grants/{grant_id}',
    run: async () => {
      const response = await client.accessIdPFederationGrants.idpGet('grantId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listThe',
    method: 'GET',
    path: '/accounts/{account_id}/access/keys',
    run: async () => {
      const response = await client.accessKeyConfiguration.listThe('accountId');
    },
  },

  {
    operation: 'updateThe',
    method: 'PUT',
    path: '/accounts/{account_id}/access/keys',
    run: async () => {
      const response = await client.accessKeyConfiguration.updateThe('accountId', {
        key_rotation_interval_days: {},
      });
    },
  },

  {
    operation: 'rotate',
    method: 'POST',
    path: '/accounts/{account_id}/access/keys/rotate',
    run: async () => {
      const response = await client.accessKeyConfiguration.rotate('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/access_requests',
    label: 'required params',
    run: async () => {
      const response = await client.accessAuthenticationLogs.list('accountId', {
        limit: 25,
        direction: 'desc',
        per_page: 25,
        email_exact: false,
        allowedOp: 'eq',
        country_codeOp: 'eq',
        app_typeOp: 'eq',
        app_uidOp: 'eq',
        ray_idOp: 'eq',
        emailOp: 'eq',
        idpOp: 'eq',
        non_identityOp: 'eq',
        user_idOp: 'eq',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/access_requests',
    label: 'all params',
    run: async () => {
      const response = await client.accessAuthenticationLogs.list('accountId', {
        limit: 25,
        direction: 'desc',
        since: '2020-07-01T05:20:00Z',
        until: '2020-10-01T05:20:00Z',
        per_page: 25,
        email: {},
        email_exact: false,
        user_id: {},
        allowedOp: 'eq',
        country_codeOp: 'eq',
        app_typeOp: 'eq',
        app_uidOp: 'eq',
        ray_idOp: 'eq',
        emailOp: 'eq',
        idpOp: 'eq',
        non_identityOp: 'eq',
        user_idOp: 'eq',
        fields: 'fields',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/jit_requests',
    label: 'required params',
    run: async () => {
      const response = await client.accessJitRequestLogs.list('accountId', {
        per_page: 25,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/jit_requests',
    label: 'all params',
    run: async () => {
      const response = await client.accessJitRequestLogs.list('accountId', {
        per_page: 25,
        status: {},
        search: 'search',
        since: '2024-01-01T00:00:00.000Z',
        until: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/jit_requests/{knock_request_id}',
    run: async () => {
      const response = await client.accessJitRequestLogs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/scim/updates',
    label: 'required params',
    run: async () => {
      const response = await client.accessScimUpdateLogs.list('accountId', {
        idp_id: {},
        per_page: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/logs/scim/updates',
    label: 'all params',
    run: async () => {
      const response = await client.accessScimUpdateLogs.list('accountId', {
        limit: {},
        direction: {},
        since: {},
        until: {},
        idp_id: {},
        status: {},
        resource_type: {},
        request_method: {},
        resource_user_email: {},
        resource_group_name: {},
        cf_resource_id: {},
        idp_resource_id: {},
        per_page: 20,
      });
    },
  },

  {
    operation: 'listYour',
    method: 'GET',
    path: '/accounts/{account_id}/access/organizations',
    run: async () => {
      const response = await client.zeroTrustOrganization.listYour('accountId');
    },
  },

  {
    operation: 'createYour',
    method: 'POST',
    path: '/accounts/{account_id}/access/organizations',
    label: 'required params',
    run: async () => {
      const response = await client.zeroTrustOrganization.createYour('accountId', {
        auth_domain: {},
        name: {},
      });
    },
  },

  {
    operation: 'createYour',
    method: 'POST',
    path: '/accounts/{account_id}/access/organizations',
    label: 'all params',
    run: async () => {
      const response = await client.zeroTrustOrganization.createYour('accountId', {
        allow_authenticate_via_warp: {},
        auth_domain: {},
        auto_redirect_to_identity: {},
        deny_unmatched_requests: {},
        deny_unmatched_requests_exempted_zone_names: {},
        is_ui_read_only: {},
        login_design: {},
        mfa_config: {},
        mfa_piv_key_requirements: {},
        mfa_required_for_all_apps: {},
        name: {},
        session_duration: {},
        ui_read_only_toggle_reason: {},
        user_seat_expiration_inactive_time: {},
        warp_auth_non_browser_401: {},
        warp_auth_session_duration: {},
      });
    },
  },

  {
    operation: 'updateYour',
    method: 'PUT',
    path: '/accounts/{account_id}/access/organizations',
    label: 'required params',
    run: async () => {
      const response = await client.zeroTrustOrganization.updateYour('accountId', {});
    },
  },

  {
    operation: 'updateYour',
    method: 'PUT',
    path: '/accounts/{account_id}/access/organizations',
    label: 'all params',
    run: async () => {
      const response = await client.zeroTrustOrganization.updateYour('accountId', {
        allow_authenticate_via_warp: {},
        auth_domain: {},
        auto_redirect_to_identity: {},
        custom_pages: {},
        deny_unmatched_requests: {},
        deny_unmatched_requests_exempted_zone_names: {},
        is_ui_read_only: {},
        login_design: {},
        mfa_config: {},
        mfa_piv_key_requirements: {},
        mfa_required_for_all_apps: {},
        name: {},
        session_duration: {},
        ui_read_only_toggle_reason: {},
        user_seat_expiration_inactive_time: {},
        warp_auth_non_browser_401: {},
        warp_auth_session_duration: {},
      });
    },
  },

  {
    operation: 'listYourDohSettings',
    method: 'GET',
    path: '/accounts/{account_id}/access/organizations/doh',
    run: async () => {
      const zeroTrustOrganization = await client.zeroTrustOrganization.listYourDohSettings('accountId');
    },
  },

  {
    operation: 'updateYourDohSettings',
    method: 'PUT',
    path: '/accounts/{account_id}/access/organizations/doh',
    label: 'required params',
    run: async () => {
      const zeroTrustOrganization = await client.zeroTrustOrganization.updateYourDohSettings('accountId');
    },
  },

  {
    operation: 'updateYourDohSettings',
    method: 'PUT',
    path: '/accounts/{account_id}/access/organizations/doh',
    label: 'all params',
    run: async () => {
      const zeroTrustOrganization = await client.zeroTrustOrganization.updateYourDohSettings('accountId', {
        doh_jwt_duration: {},
        service_token_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      });
    },
  },

  {
    operation: 'revokeAllAccessTokensForAUser',
    method: 'POST',
    path: '/accounts/{account_id}/access/organizations/revoke_user',
    label: 'required params',
    run: async () => {
      const response = await client.zeroTrustOrganization.revokeAllAccessTokensForAUser('accountId', {
        email: 'test@example.com',
      });
    },
  },

  {
    operation: 'revokeAllAccessTokensForAUser',
    method: 'POST',
    path: '/accounts/{account_id}/access/organizations/revoke_user',
    label: 'all params',
    run: async () => {
      const response = await client.zeroTrustOrganization.revokeAllAccessTokensForAUser('accountId', {
        devices: true,
        email: 'test@example.com',
        user_uid: '699d98642c564d2e855e9661899b7252',
        warp_session_reauth: true,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/policies',
    run: async () => {
      const response = await client.accessReusablePolicies.list('accountId', {
        per_page: 100,
      });
    },
  },

  {
    operation: 'createAn',
    method: 'POST',
    path: '/accounts/{account_id}/access/policies',
    run: async () => {
      const response = await client.accessReusablePolicies.createAn('accountId', {});
    },
  },

  {
    operation: 'deleteAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/policies/{policy_id}',
    run: async () => {
      const response = await client.accessReusablePolicies.deleteAn('policyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveAn',
    method: 'GET',
    path: '/accounts/{account_id}/access/policies/{policy_id}',
    run: async () => {
      const response = await client.accessReusablePolicies.retrieveAn('policyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateAn',
    method: 'PUT',
    path: '/accounts/{account_id}/access/policies/{policy_id}',
    run: async () => {
      const response = await client.accessReusablePolicies.updateAn('policyId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'tests',
    method: 'POST',
    path: '/accounts/{account_id}/access/policy-tests',
    run: async () => {
      const response = await client.accessPolicyTester.tests('accountId', {});
    },
  },

  {
    operation: 'testsGetAnUpdate',
    method: 'GET',
    path: '/accounts/{account_id}/access/policy-tests/{policy_test_id}',
    run: async () => {
      const response = await client.accessPolicyTester.testsGetAnUpdate('policyTestId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'testsGetAUserPage',
    method: 'GET',
    path: '/accounts/{account_id}/access/policy-tests/{policy_test_id}/users',
    label: 'required params',
    run: async () => {
      const response = await client.accessPolicyTester.testsGetAUserPage('policyTestId', {
        account_id: {},
        per_page: 25,
      });
    },
  },

  {
    operation: 'testsGetAUserPage',
    method: 'GET',
    path: '/accounts/{account_id}/access/policy-tests/{policy_test_id}/users',
    label: 'all params',
    run: async () => {
      const response = await client.accessPolicyTester.testsGetAUserPage('policyTestId', {
        account_id: {},
        per_page: 25,
        status: 'success',
      });
    },
  },

  {
    operation: 'listSets',
    method: 'GET',
    path: '/accounts/{account_id}/access/saml_certificates',
    label: 'required params',
    run: async () => {
      const response = await client.accessSamlEncryptionCertificates.listSets('accountId', {
        page: 1,
        per_page: 25,
      });
    },
  },

  {
    operation: 'listSets',
    method: 'GET',
    path: '/accounts/{account_id}/access/saml_certificates',
    label: 'all params',
    run: async () => {
      const response = await client.accessSamlEncryptionCertificates.listSets('accountId', {
        page: 1,
        per_page: 25,
        id: 'a5bb4b3f-c2d1-4e6a-8f9b-1d3e4f5a6b7c,f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      });
    },
  },

  {
    operation: 'retrieveSet',
    method: 'GET',
    path: '/accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}',
    run: async () => {
      const response = await client.accessSamlEncryptionCertificates.retrieveSet('samlCertSetId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listPem',
    method: 'GET',
    path: '/accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}/pem',
    run: async () => {
      const response = await client.accessSamlEncryptionCertificates.listPem('samlCertSetId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'rotate',
    method: 'POST',
    path: '/accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}/rotate',
    run: async () => {
      const response = await client.accessSamlEncryptionCertificates.rotate('samlCertSetId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateAUser',
    method: 'PATCH',
    path: '/accounts/{account_id}/access/seats',
    run: async () => {
      const response = await client.zeroTrustSeats.updateAUser('accountId', {});
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/service_tokens',
    label: 'required params',
    run: async () => {
      const response = await client.accessServiceTokens.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/service_tokens',
    label: 'all params',
    run: async () => {
      const response = await client.accessServiceTokens.list('accountId', {
        name: 'name',
        search: 'search',
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/access/service_tokens',
    label: 'required params',
    run: async () => {
      const response = await client.accessServiceTokens.createA('accountId', {
        name: {},
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/access/service_tokens',
    label: 'all params',
    run: async () => {
      const response = await client.accessServiceTokens.createA('accountId', {
        client_secret_version: {},
        duration: {},
        enabled: {},
        name: {},
        previous_client_secret_expires_at: {},
      });
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}',
    run: async () => {
      const response = await client.accessServiceTokens.deleteA('serviceTokenId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}',
    run: async () => {
      const response = await client.accessServiceTokens.retrieveA('serviceTokenId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}',
    label: 'required params',
    run: async () => {
      const response = await client.accessServiceTokens.updateA('serviceTokenId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}',
    label: 'all params',
    run: async () => {
      const response = await client.accessServiceTokens.updateA('serviceTokenId', {
        account_id: {},
        client_secret_version: {},
        duration: {},
        enabled: {},
        name: {},
        previous_client_secret_expires_at: {},
      });
    },
  },

  {
    operation: 'refreshA',
    method: 'POST',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}/refresh',
    run: async () => {
      const response = await client.accessServiceTokens.refreshA('serviceTokenId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'rotateA',
    method: 'POST',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}/rotate',
    label: 'required params',
    run: async () => {
      const response = await client.accessServiceTokens.rotateA('serviceTokenId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'rotateA',
    method: 'POST',
    path: '/accounts/{account_id}/access/service_tokens/{service_token_id}/rotate',
    label: 'all params',
    run: async () => {
      const response = await client.accessServiceTokens.rotateA('serviceTokenId', {
        account_id: {},
        previous_client_secret_expires_at: '2014-01-01T05:20:00.12345Z',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/tags',
    run: async () => {
      const response = await client.accessTags.list('accountId', {
        per_page: 50,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/access/tags',
    label: 'required params',
    run: async () => {
      const response = await client.accessTags.create('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/access/tags',
    label: 'all params',
    run: async () => {
      const response = await client.accessTags.create('accountId', {
        name: {},
      });
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/tags/{tag_name}',
    run: async () => {
      const response = await client.accessTags.deleteA('tagName', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/access/tags/{tag_name}',
    run: async () => {
      const response = await client.accessTags.retrieveA('tagName', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/tags/{tag_name}',
    label: 'required params',
    run: async () => {
      const response = await client.accessTags.updateA('tagName', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/access/tags/{tag_name}',
    label: 'all params',
    run: async () => {
      const response = await client.accessTags.updateA('tagName', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/users',
    label: 'required params',
    run: async () => {
      const response = await client.zeroTrustUsers.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/access/users',
    label: 'all params',
    run: async () => {
      const response = await client.zeroTrustUsers.list('accountId', {
        name: 'name',
        email: 'email',
        search: 'search',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/access/users',
    label: 'required params',
    run: async () => {
      const response = await client.zeroTrustUsers.create('accountId', {
        email: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/access/users',
    label: 'all params',
    run: async () => {
      const response = await client.zeroTrustUsers.create('accountId', {
        email: {},
        name: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/users/{user_id}',
    run: async () => {
      const response = await client.zeroTrustUsers.delete('userId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/access/users/{user_id}',
    run: async () => {
      const response = await client.zeroTrustUsers.retrieve('userId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/access/users/{user_id}',
    run: async () => {
      const response = await client.zeroTrustUsers.update('userId', {
        account_id: {},
        email: {},
        name: {},
      });
    },
  },

  {
    operation: 'listActiveSessions',
    method: 'GET',
    path: '/accounts/{account_id}/access/users/{user_id}/active_sessions',
    run: async () => {
      const response = await client.zeroTrustUsers.listActiveSessions('userId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveActiveSession',
    method: 'GET',
    path: '/accounts/{account_id}/access/users/{user_id}/active_sessions/{nonce}',
    run: async () => {
      const response = await client.zeroTrustUsers.retrieveActiveSession('nonce', {
        user_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'listFailedLogins',
    method: 'GET',
    path: '/accounts/{account_id}/access/users/{user_id}/failed_logins',
    run: async () => {
      const response = await client.zeroTrustUsers.listFailedLogins('userId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listLastSeenIdentity',
    method: 'GET',
    path: '/accounts/{account_id}/access/users/{user_id}/last_seen_identity',
    run: async () => {
      const response = await client.zeroTrustUsers.listLastSeenIdentity('userId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'deleteMfaAuthenticator',
    method: 'DELETE',
    path: '/accounts/{account_id}/access/users/{user_id}/mfa_authenticators/{authenticator_id}',
    run: async () => {
      const response = await client.zeroTrustUsers.deleteMfaAuthenticator('authenticatorId', {
        user_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/address_maps',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.list('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/address_maps',
    label: 'required params',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.create('accountId', {});
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/address_maps',
    label: 'all params',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.create('accountId', {
        description: {},
        enabled: {},
        ips: ['192.0.2.1'],
        memberships: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.delete('addressMapId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'details',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.details('addressMapId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
    label: 'required params',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.update('addressMapId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
    label: 'all params',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.update('addressMapId', {
        account_id: {},
        default_sni: {},
        description: {},
        enabled: {},
      });
    },
  },

  {
    operation: 'deleteAnAccountMembershipFromAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{member_account_id}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.deleteAnAccountMembershipFromAn(
        'memberAccountId',
        {
          account_id: {},
          address_map_id: {},
        },
      );
    },
  },

  {
    operation: 'createAnAccountMembershipToAn',
    method: 'PUT',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{member_account_id}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.createAnAccountMembershipToAn(
        'memberAccountId',
        {
          account_id: {},
          address_map_id: {},
        },
      );
    },
  },

  {
    operation: 'deleteAnFromAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.deleteAnFromAn('ipAddress', {
        address_map_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'createAnToAn',
    method: 'PUT',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.createAnToAn('ipAddress', {
        address_map_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'deleteAZoneMembershipFromAn',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.deleteAZoneMembershipFromAn('zoneId', {
        address_map_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'createAZoneMembershipToAn',
    method: 'PUT',
    path: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}',
    run: async () => {
      const response = await client.ipAddressManagementAddressMaps.createAZoneMembershipToAn('zoneId', {
        address_map_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/leases',
    run: async () => {
      const response = await client.ipAddressManagementLeases.list('accountId');
    },
  },

  {
    operation: 'uploadLoaDocument',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/loa_documents',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.uploadLoaDocument('accountId', {
        loa_document: '@document.pdf',
      });
    },
  },

  {
    operation: 'downloadLoaDocument',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.downloadLoaDocument('loaDocumentId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.list('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes',
    label: 'required params',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.create('accountId', {
        asn: {},
        cidr: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes',
    label: 'all params',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.create('accountId', {
        asn: {},
        cidr: {},
        delegate_loa_creation: {},
        description: {},
        loa_document_id: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.delete('prefixId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'details',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.details('prefixId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateDescription',
    method: 'PATCH',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.updateDescription('prefixId', {
        account_id: {},
        description: {},
      });
    },
  },

  {
    operation: 'validate',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/validate',
    run: async () => {
      const response = await client.ipAddressManagementPrefixes.validate('prefixId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes',
    run: async () => {
      const response = await client.ipAddressManagementBGPPrefixes.list('prefixId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes',
    run: async () => {
      const response = await client.ipAddressManagementBGPPrefixes.create('prefixId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}',
    run: async () => {
      const response = await client.ipAddressManagementBGPPrefixes.delete('bgpPrefixId', {
        account_id: {},
        prefix_id: {},
      });
    },
  },

  {
    operation: 'fetch',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}',
    run: async () => {
      const response = await client.ipAddressManagementBGPPrefixes.fetch('bgpPrefixId', {
        account_id: {},
        prefix_id: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}',
    run: async () => {
      const response = await client.ipAddressManagementBGPPrefixes.update('bgpPrefixId', {
        account_id: {},
        prefix_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'listStatus',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status',
    run: async () => {
      const response = await client.ipAddressManagementDynamicAdvertisement.listStatus('prefixId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updatePrefixStatus',
    method: 'PATCH',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status',
    run: async () => {
      const response = await client.ipAddressManagementDynamicAdvertisement.updatePrefixStatus('prefixId', {
        account_id: {},
        advertised: {},
      });
    },
  },

  {
    operation: 'list2',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings',
    run: async () => {
      const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.list2(
        'prefixId',
        {
          account_id: {},
        },
      );
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings',
    label: 'required params',
    run: async () => {
      const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.create(
        'prefixId',
        {
          account_id: {},
        },
      );
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings',
    label: 'all params',
    run: async () => {
      const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.create(
        'prefixId',
        {
          account_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}',
    run: async () => {
      const response = await client.ipAddressManagementServiceBindings.delete('bindingId', {
        account_id: {},
        prefix_id: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}',
    run: async () => {
      const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.retrieve(
        'bindingId',
        {
          account_id: {},
          prefix_id: {},
        },
      );
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/services',
    run: async () => {
      const ipAddressManagementServiceBinding =
        await client.ipAddressManagementServiceBindings.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations',
    run: async () => {
      const response = await client.ipAddressManagementPrefixDelegation.list('prefixId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations',
    run: async () => {
      const response = await client.ipAddressManagementPrefixDelegation.create('prefixId', {
        account_id: {},
        cidr: {},
        delegated_account_id: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}',
    run: async () => {
      const response = await client.ipAddressManagementPrefixDelegation.delete('delegationId', {
        prefix_id: {},
        account_id: {},
      });
    },
  },

  {
    operation: 'accountHostnamesListRegions',
    method: 'GET',
    path: '/accounts/{account_id}/addressing/regional_hostnames/regions',
    run: async () => {
      const dlsRegionalService = await client.dlsRegionalServices.accountHostnamesListRegions('accountId');
    },
  },

  {
    operation: 'agentMemoryList',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces',
    label: 'required params',
    run: async () => {
      const response = await client.namespaces.agentMemoryList('accountId');
    },
  },

  {
    operation: 'agentMemoryList',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces',
    label: 'all params',
    run: async () => {
      const response = await client.namespaces.agentMemoryList('accountId', {
        per_page: 20,
        order: 'id',
        direction: 'asc',
        cursor: 'cursor',
      });
    },
  },

  {
    operation: 'agentMemoryCreate',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces',
    run: async () => {
      const response = await client.namespaces.agentMemoryCreate('accountId', {
        name: 'support-agent',
      });
    },
  },

  {
    operation: 'agentMemoryDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}',
    run: async () => {
      const response = await client.namespaces.agentMemoryDelete('support-agent', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'agentMemoryGet',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}',
    run: async () => {
      const response = await client.namespaces.agentMemoryGet('support-agent', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'agentProfileList',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles',
    label: 'required params',
    run: async () => {
      const memory = await client.memory.agentProfileList('support-agent', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'agentProfileList',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles',
    label: 'all params',
    run: async () => {
      const memory = await client.memory.agentProfileList('support-agent', {
        account_id: 'accountId',
        per_page: 20,
        cursor: 'eyJ2IjoxLCJuIjoibXktcHJvZmlsZSJ9',
      });
    },
  },

  {
    operation: 'agentProfileDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}',
    run: async () => {
      const memory = await client.memory.agentProfileDelete('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
      });
    },
  },

  {
    operation: 'agentIngest',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest',
    label: 'required params',
    run: async () => {
      const memory = await client.memory.agentIngest('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        messages: [
          {
            content: 'I really prefer dark mode in the dashboard.',
            role: 'user',
          },
        ],
      });
    },
  },

  {
    operation: 'agentIngest',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest',
    label: 'all params',
    run: async () => {
      const memory = await client.memory.agentIngest('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        messages: [
          {
            content: 'I really prefer dark mode in the dashboard.',
            role: 'user',
          },
        ],
        sessionId: 'chat-session-42',
      });
    },
  },

  {
    operation: 'agentList',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories',
    label: 'required params',
    run: async () => {
      const memory = await client.memory.agentList('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
      });
    },
  },

  {
    operation: 'agentList',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories',
    label: 'all params',
    run: async () => {
      const memory = await client.memory.agentList('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        per_page: 20,
        cursor: '01JSGCEXAMP1E0000000000000',
        session_id: 'chat-session-42',
        type: 'fact',
      });
    },
  },

  {
    operation: 'agentDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}',
    run: async () => {
      const memory = await client.memory.agentDelete('01JSGCEXAMP1E0000000000000', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        profile_name: 'my-profile',
      });
    },
  },

  {
    operation: 'agentGet',
    method: 'GET',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}',
    run: async () => {
      const memory = await client.memory.agentGet('01JSGCEXAMP1E0000000000000', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        profile_name: 'my-profile',
      });
    },
  },

  {
    operation: 'agentRecall',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall',
    label: 'required params',
    run: async () => {
      const memory = await client.memory.agentRecall('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        query: 'What are my UI preferences?',
      });
    },
  },

  {
    operation: 'agentRecall',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall',
    label: 'all params',
    run: async () => {
      const memory = await client.memory.agentRecall('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        query: 'What are my UI preferences?',
        referenceDate: '2025-09-21T00:00:00Z',
        responseLength: 'short',
        thinkingLevel: 'medium',
      });
    },
  },

  {
    operation: 'agentRemember',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember',
    label: 'required params',
    run: async () => {
      const memory = await client.memory.agentRemember('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        content: 'I prefer dark mode in the dashboard.',
      });
    },
  },

  {
    operation: 'agentRemember',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember',
    label: 'all params',
    run: async () => {
      const memory = await client.memory.agentRemember('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        content: 'I prefer dark mode in the dashboard.',
        sessionId: 'chat-session-42',
      });
    },
  },

  {
    operation: 'agentSessionDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/sessions/{session_id}',
    run: async () => {
      const memory = await client.memory.agentSessionDelete('chat-session-44', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        profile_name: 'my-profile',
      });
    },
  },

  {
    operation: 'agentSummary',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary',
    label: 'required params',
    run: async () => {
      const memory = await client.memory.agentSummary('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
      });
    },
  },

  {
    operation: 'agentSummary',
    method: 'POST',
    path: '/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary',
    label: 'all params',
    run: async () => {
      const memory = await client.memory.agentSummary('my-profile', {
        account_id: 'accountId',
        namespace_name: 'support-agent',
        sessionId: 'chat-session-42',
      });
    },
  },

  {
    operation: 'aigBillingGetCreditBalance',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/credit-balance',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetCreditBalance('accountId');
    },
  },

  {
    operation: 'aigBillingGetInvoiceHistory',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/invoice-history',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetInvoiceHistory('accountId', {
        type: 'all',
      });
    },
  },

  {
    operation: 'aigBillingGetInvoicePreview',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/invoice-preview',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetInvoicePreview('accountId');
    },
  },

  {
    operation: 'aigBillingDeleteSpendingLimit',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/billing/spending-limit',
    run: async () => {
      const response = await client.aiGateway.aigBillingDeleteSpendingLimit('accountId');
    },
  },

  {
    operation: 'aigBillingGetSpendingLimit',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/spending-limit',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetSpendingLimit('accountId');
    },
  },

  {
    operation: 'aigBillingSetSpendingLimit',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/billing/spending-limit',
    run: async () => {
      const response = await client.aiGateway.aigBillingSetSpendingLimit('accountId', {
        amount: 10000,
        duration: 'monthly',
        strategy: 'fixed',
      });
    },
  },

  {
    operation: 'aigBillingCreateTopup',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/billing/topup',
    run: async () => {
      const response = await client.aiGateway.aigBillingCreateTopup('accountId', {
        amount: 5000,
      });
    },
  },

  {
    operation: 'aigBillingDeleteTopupConfig',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/config',
    run: async () => {
      const response = await client.aiGateway.aigBillingDeleteTopupConfig('accountId');
    },
  },

  {
    operation: 'aigBillingGetTopupConfig',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/config',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetTopupConfig('accountId');
    },
  },

  {
    operation: 'aigBillingSetTopupConfig',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/config',
    run: async () => {
      const response = await client.aiGateway.aigBillingSetTopupConfig('accountId', {
        amount: 5000,
        threshold: 500,
      });
    },
  },

  {
    operation: 'aigBillingTopupEligibility',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/eligibility',
    label: 'required params',
    run: async () => {
      const response = await client.aiGateway.aigBillingTopupEligibility('accountId');
    },
  },

  {
    operation: 'aigBillingTopupEligibility',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/eligibility',
    label: 'all params',
    run: async () => {
      const response = await client.aiGateway.aigBillingTopupEligibility('accountId', {
        payment_methods: [{}],
      });
    },
  },

  {
    operation: 'aigBillingGetTopupLimits',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/limits',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetTopupLimits('accountId');
    },
  },

  {
    operation: 'aigBillingCheckTopupStatus',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/billing/topup/status',
    run: async () => {
      const response = await client.aiGateway.aigBillingCheckTopupStatus('accountId', {
        payment_intent_id: 'in_1abc',
      });
    },
  },

  {
    operation: 'aigBillingGetUsageHistory',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/usage-history',
    label: 'required params',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetUsageHistory('accountId', {
        value_grouping_window: 'day',
      });
    },
  },

  {
    operation: 'aigBillingGetUsageHistory',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/billing/usage-history',
    label: 'all params',
    run: async () => {
      const response = await client.aiGateway.aigBillingGetUsageHistory('accountId', {
        value_grouping_window: 'day',
        start_time: 1700000000000,
        end_time: 1700086400000,
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/custom-providers',
    label: 'required params',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigList(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          page: 1,
          per_page: 20,
        },
      );
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/custom-providers',
    label: 'all params',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigList(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          page: 1,
          per_page: 20,
          beta: true,
          enable: true,
          search: 'search',
        },
      );
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/custom-providers',
    label: 'required params',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigCreate(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          base_url: 'https://example.com',
          name: '',
          slug: '',
        },
      );
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/custom-providers',
    label: 'all params',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigCreate(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          base_url: 'https://example.com',
          beta: false,
          curl_example: '',
          description: '',
          enable: false,
          headers: '',
          js_example: '',
          link: '',
          name: '',
          position: 0,
          slug: '',
        },
      );
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/{id}',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigDelete(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        },
      );
    },
  },

  {
    operation: 'aigConfigFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/{id}',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigFetch(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        },
      );
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/{id}',
    label: 'required params',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigUpdate(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        },
      );
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/{id}',
    label: 'all params',
    run: async () => {
      const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigUpdate(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
          base_url: 'https://example.com',
          beta: false,
          curl_example: '',
          description: '',
          enable: false,
          headers: '',
          js_example: '',
          link: '',
          logo: '',
          name: '',
          position: 0,
          slug: '',
        },
      );
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs',
    label: 'required params',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigList(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          page: 1,
          per_page: 20,
          model_rule: 'equals',
          cost_type: 'tokens',
        },
      );
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs',
    label: 'all params',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigList(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          page: 1,
          per_page: 20,
          enable: true,
          account_provider_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          model_rule: 'equals',
          cost_type: 'tokens',
          search: 'search',
        },
      );
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs',
    label: 'required params',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigCreate(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          account_provider_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          cost_type: 'tokens',
          model: '',
          model_rule: 'equals',
        },
      );
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs',
    label: 'all params',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigCreate(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          account_provider_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          cost_in: 0,
          cost_out: 0,
          cost_type: 'tokens',
          enable: false,
          model: '',
          model_rule: 'equals',
          token_pricing: {},
        },
      );
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigDelete(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        },
      );
    },
  },

  {
    operation: 'aigConfigFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigFetch(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        },
      );
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}',
    label: 'required params',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigUpdate(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
          cost_type: 'tokens',
          model_rule: 'equals',
        },
      );
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}',
    label: 'all params',
    run: async () => {
      const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigUpdate(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
          cost_in: 0,
          cost_out: 0,
          cost_type: 'tokens',
          enable: false,
          model: '',
          model_rule: 'equals',
          token_pricing: {
            input_audio_tokens: 0,
            input_cache_creation_tokens: 0,
            input_cached_tokens: 0,
            input_image_count: 0,
            input_image_tokens: 0,
            input_text_tokens: 0,
            input_tokens: 0,
            input_video_tokens: 0,
            output_image_count: 0,
            output_reasoning_tokens: 0,
            output_tokens: 0,
            total_tokens: 0,
          },
        },
      );
    },
  },

  {
    operation: 'aigConfigListEvaluators',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/evaluation-types',
    run: async () => {
      const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigListEvaluators(
        '0d37909e38d3e99c29fa2cd343ac421a',
        {
          page: 1,
          per_page: 20,
          order_by: 'mandatory',
          order_by_direction: 'desc',
        },
      );
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations',
    label: 'required params',
    run: async () => {
      const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations',
    label: 'all params',
    run: async () => {
      const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
        name: 'name',
        processed: true,
        search: 'search',
      });
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations',
    run: async () => {
      const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigCreate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        dataset_ids: [''],
        evaluation_type_ids: [''],
        name: '',
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}',
    run: async () => {
      const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigDelete('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigConfigFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}',
    run: async () => {
      const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigFetch('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways',
    label: 'required params',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigList(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          page: 1,
          per_page: 20,
        },
      );
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways',
    label: 'all params',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigList(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          page: 1,
          per_page: 20,
          search: 'search',
        },
      );
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways',
    label: 'required params',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigCreate(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          cache_invalidate_on_update: false,
          cache_ttl: 0,
          collect_logs: false,
          id: 'my-gateway',
          rate_limiting_interval: 0,
          rate_limiting_limit: 0,
          workers_ai_billing_mode: 'postpaid',
        },
      );
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways',
    label: 'all params',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigCreate(
        '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        {
          authentication: false,
          byok_only: false,
          cache_invalidate_on_update: false,
          cache_ttl: 0,
          collect_logs: false,
          id: 'my-gateway',
          log_management: 10000,
          log_management_strategy: 'STOP_INSERTING',
          logpush: false,
          logpush_public_key: 'xxxxxxxxxxxxxxxx',
          rate_limiting_interval: 0,
          rate_limiting_limit: 0,
          rate_limiting_technique: 'fixed',
          retry_backoff: 'constant',
          retry_delay: 0,
          retry_max_attempts: 1,
          store_id: '',
          workers_ai_billing_mode: 'postpaid',
          zdr: false,
        },
      );
    },
  },

  {
    operation: 'aigConfigGetUrl',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigGetURL('workers-ai', {
        gateway_id: 'my-gateway',
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{id}',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigDelete('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      });
    },
  },

  {
    operation: 'aigConfigFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{id}',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigFetch('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      });
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-gateway/gateways/{id}',
    label: 'required params',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigUpdate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        cache_invalidate_on_update: false,
        cache_ttl: 0,
        collect_logs: false,
        rate_limiting_interval: 0,
        rate_limiting_limit: 0,
        workers_ai_billing_mode: 'postpaid',
      });
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-gateway/gateways/{id}',
    label: 'all params',
    run: async () => {
      const aiGatewayGateway = await client.aiGatewayGateways.aigConfigUpdate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        authentication: false,
        byok_only: false,
        cache_invalidate_on_update: false,
        cache_ttl: 0,
        collect_logs: false,
        dlp: {
          action: 'BLOCK',
          enabled: false,
          profiles: [''],
        },
        guardrails: {
          prompt: {},
          response: {},
        },
        log_classification: false,
        log_management: 10000,
        log_management_strategy: 'STOP_INSERTING',
        logpush: false,
        logpush_public_key: 'xxxxxxxxxxxxxxxx',
        otel: [
          {
            content_type: 'json',
            headers: {},
            url: 'https://example.com',
          },
        ],
        rate_limiting_interval: 0,
        rate_limiting_limit: 0,
        rate_limiting_technique: 'fixed',
        retry_backoff: 'constant',
        retry_delay: 0,
        retry_max_attempts: 1,
        spend_limits: {
          enabled: false,
          rules: [],
        },
        store_id: '',
        stripe: {
          authorization: '',
          usage_events: [
            {
              payload: '',
            },
          ],
        },
        workers_ai_billing_mode: 'postpaid',
        zdr: false,
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains',
    label: 'required params',
    run: async () => {
      const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains',
    label: 'all params',
    run: async () => {
      const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
        status: 'initializing',
        search: 'search',
      });
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains',
    label: 'required params',
    run: async () => {
      const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigCreate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        domain: 'ai.acme.com',
        zone_id: '395566f4c8a5b9d2a5fc0d457b007c44',
      });
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains',
    label: 'all params',
    run: async () => {
      const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigCreate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        domain: 'ai.acme.com',
        minTLS: '1.0',
        zone_id: '395566f4c8a5b9d2a5fc0d457b007c44',
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}',
    run: async () => {
      const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigDelete('ai.acme.com', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigConfigFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}',
    run: async () => {
      const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigFetch('ai.acme.com', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets',
    label: 'required params',
    run: async () => {
      const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets',
    label: 'all params',
    run: async () => {
      const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
        name: 'name',
        enable: true,
        search: 'search',
      });
    },
  },

  {
    operation: 'aigConfigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets',
    run: async () => {
      const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigCreate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        enable: false,
        filters: [
          {
            key: 'created_at',
            operator: 'eq',
            value: [''],
          },
        ],
        name: '',
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}',
    run: async () => {
      const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigDelete('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigConfigFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}',
    run: async () => {
      const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigFetch('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}',
    run: async () => {
      const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigUpdate('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
        enable: false,
        filters: [
          {
            key: 'created_at',
            operator: 'eq',
            value: [''],
          },
        ],
        name: '',
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs',
    label: 'required params',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigDelete('my-gateway', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        order_by: 'created_at',
        order_by_direction: 'asc',
        limit: 10000,
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs',
    label: 'all params',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigDelete('my-gateway', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        order_by: 'created_at',
        order_by_direction: 'asc',
        filters: [
          {
            key: 'id',
            operator: 'eq',
            value: [''],
          },
        ],
        limit: 10000,
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs',
    label: 'required params',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigList('my-gateway', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        page: 1,
        per_page: 20,
        order_by: 'created_at',
        order_by_direction: 'desc',
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs',
    label: 'all params',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigList('my-gateway', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        search: 'search',
        page: 1,
        per_page: 20,
        order_by: 'created_at',
        order_by_direction: 'desc',
        filters: [
          {
            key: 'id',
            operator: 'eq',
            value: [''],
          },
        ],
        meta_info: true,
        direction: 'asc',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        min_cost: 1,
        max_cost: 1,
        min_tokens_in: 1,
        max_tokens_in: 1,
        min_tokens_out: 1,
        max_tokens_out: 1,
        min_total_tokens: 1,
        max_total_tokens: 1,
        min_duration: 1,
        max_duration: 1,
        feedback: -1,
        success: true,
        cached: true,
        model: 'model',
        model_type: 'modelType',
        provider: 'provider',
        request_content_type: 'requestContentType',
        response_content_type: 'responseContentType',
      });
    },
  },

  {
    operation: 'aigConfigGetDetail',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetDetail('id', {
        gateway_id: 'my-gateway',
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      });
    },
  },

  {
    operation: 'aigConfigPatch',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}',
    label: 'required params',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigPatch('id', {
        gateway_id: 'my-gateway',
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      });
    },
  },

  {
    operation: 'aigConfigPatch',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}',
    label: 'all params',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigPatch('id', {
        gateway_id: 'my-gateway',
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        feedback: 0,
        metadata: {},
        score: 0,
      });
    },
  },

  {
    operation: 'aigConfigGetRequest',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetRequest('id', {
        gateway_id: 'my-gateway',
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      });
    },
  },

  {
    operation: 'aigConfigGetResponse',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response',
    run: async () => {
      const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetResponse('id', {
        gateway_id: 'my-gateway',
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      });
    },
  },

  {
    operation: 'aigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs',
    run: async () => {
      const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigList('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'aigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs',
    label: 'required params',
    run: async () => {
      const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigCreate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        alias: '',
        default_config: false,
        provider_slug: '',
        rate_limit_period: 60,
      });
    },
  },

  {
    operation: 'aigCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs',
    label: 'all params',
    run: async () => {
      const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigCreate('my-gateway', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        alias: '',
        default_config: false,
        provider_slug: '',
        rate_limit: 0,
        rate_limit_period: 60,
        secret: '',
        secret_id: '',
      });
    },
  },

  {
    operation: 'aigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}',
    run: async () => {
      const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigDelete('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
      });
    },
  },

  {
    operation: 'aigUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}',
    run: async () => {
      const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigUpdate('id', {
        account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
        gateway_id: 'my-gateway',
        secret: '',
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes',
    label: 'required params',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigList('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      });
    },
  },

  {
    operation: 'aigConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes',
    label: 'all params',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigList('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'aigConfigPost',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPost('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        elements: [
          {
            id: '',
            outputs: {
              next: {
                elementId: '',
              },
            },
            type: 'start',
          },
        ],
        name: '',
      });
    },
  },

  {
    operation: 'aigConfigDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigDelete('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
      });
    },
  },

  {
    operation: 'aigConfigGet',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigGet('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
      });
    },
  },

  {
    operation: 'aigConfigUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigUpdate('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
        name: 'Route Name',
      });
    },
  },

  {
    operation: 'aigConfigListDeployments',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigListDeployments('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
      });
    },
  },

  {
    operation: 'aigConfigPostDeployment',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPostDeployment('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
        version_id: '54442216',
      });
    },
  },

  {
    operation: 'aigConfigListVersions',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigListVersions('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
      });
    },
  },

  {
    operation: 'aigConfigPostVersion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPostVersion('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
        elements: [
          {
            id: '',
            outputs: {
              next: {
                elementId: '',
              },
            },
            type: 'start',
          },
        ],
      });
    },
  },

  {
    operation: 'aigConfigGetVersion',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}',
    run: async () => {
      const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigGetVersion('54442216', {
        account_id: '0d37909e38d3e99c29fa2cd343ac421a',
        gateway_id: '54442216',
        id: '54442216',
      });
    },
  },

  {
    operation: 'aigConfigGetLoggingState',
    method: 'GET',
    path: '/accounts/{account_id}/ai-gateway/logging-state',
    run: async () => {
      const account = await client.account.aigConfigGetLoggingState('accountId');
    },
  },

  {
    operation: 'aigConfigPatchLoggingState',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-gateway/logging-state',
    run: async () => {
      const account = await client.account.aigConfigPatchLoggingState('accountId');
    },
  },

  {
    operation: 'listLimits',
    method: 'GET',
    path: '/accounts/{account_id}/builds/account/limits',
    run: async () => {
      const account = await client.account.listLimits('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        page: 1,
        per_page: 20,
        order_by: 'created_at',
        order_by_direction: 'desc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        page: 1,
        per_page: 20,
        search: 'search',
        namespace: 'namespace',
        order_by: 'created_at',
        order_by_direction: 'desc',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        fusion_method: 'rrf',
        hybrid_search_enabled: false,
        id: 'my-ai-search',
        index_method: { keyword: false, vector: true },
        max_num_results: 10,
        reranking: false,
        rewrite_query: false,
        score_threshold: 0.4,
        sync_interval: 21600,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        ai_gateway_id: '',
        ai_search_model: '',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        chunk_size: 64,
        custom_metadata: [
          {
            data_type: 'text',
            field_name: 'x',
          },
        ],
        embedding_model: '',
        fusion_method: 'rrf',
        hybrid_search_enabled: false,
        id: 'my-ai-search',
        index_method: { keyword: false, vector: true },
        indexing_options: {
          keyword_tokenizer: 'porter',
          use_ocr: false,
        },
        max_num_results: 10,
        metadata: {},
        public_endpoint_params: {
          default_domain_enabled: true,
          enabled: false,
        },
        reranking: false,
        reranking_model: '',
        retrieval_options: {},
        rewrite_model: '',
        rewrite_query: false,
        score_threshold: 0.4,
        source: '',
        source_params: {
          r2_jurisdiction: 'default',
          web_crawler: { parse_type: 'sitemap' },
        },
        sync_interval: 21600,
        token_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        type: 'r2',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-search/instances/{id}',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.delete('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'fetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances/{id}',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.fetch('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/instances/{id}',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.update('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        fusion_method: 'rrf',
        index_method: { keyword: false, vector: true },
        max_num_results: 10,
        paused: false,
        reranking: false,
        rewrite_query: false,
        score_threshold: 0.4,
        summarization: false,
        sync_interval: 21600,
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/instances/{id}',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.update('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        ai_gateway_id: '',
        ai_search_model: '',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        chunk_size: 64,
        custom_metadata: [
          {
            data_type: 'text',
            field_name: 'x',
          },
        ],
        embedding_model: '',
        fusion_method: 'rrf',
        index_method: { keyword: false, vector: true },
        indexing_options: {
          keyword_tokenizer: 'porter',
          use_ocr: false,
        },
        max_num_results: 10,
        metadata: {
          created_from_aisearch_wizard: false,
          worker_domain: '',
        },
        paused: false,
        public_endpoint_params: {
          authorized_hosts: [''],
          chat_completions_endpoint: {
            disabled: false,
          },
          custom_domains: ['search.example.com'],
          default_domain_enabled: true,
          enabled: false,
          mcp: {
            description: "Finds exactly what you're looking for",
            disabled: false,
          },
          rate_limit: {},
          search_endpoint: {
            disabled: false,
          },
        },
        reranking: false,
        reranking_model: '',
        retrieval_options: {
          boost_by: [{ direction: 'desc', field: 'timestamp' }],
          keyword_match_mode: 'and',
        },
        rewrite_model: '',
        rewrite_query: false,
        score_threshold: 0.4,
        source: '',
        source_params: {
          exclude_items: ['/admin/**', '/private/**', '**\\temp\\**'],
          include_items: ['/blog/**', '/docs/**/*.html', '**\\blog\\**.html'],
          prefix: '',
          r2_jurisdiction: 'default',
          web_crawler: { parse_type: 'sitemap' },
        },
        summarization: false,
        summarization_model: '',
        sync_interval: 21600,
        system_prompt_ai_search: '',
        system_prompt_index_summarization: '',
        system_prompt_rewrite_query: '',
        token_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'chatCompletion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances/{id}/chat/completions',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.chatCompletion('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
      });
    },
  },

  {
    operation: 'chatCompletion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances/{id}/chat/completions',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.chatCompletion('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        ai_search_options: {
          cache: {},
          custom_metadata: { test: true, user_id: 'user-123' },
          query_rewrite: {},
          reranking: {
            match_threshold: 0.4,
          },
          retrieval: {
            context_expansion: 0,
            match_threshold: 0.4,
            max_num_results: 10,
            return_on_failure: true,
          },
        },
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
        model: '',
        stream: false,
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances/{id}/search',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.search('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances/{id}/search',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.search('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        ai_search_options: {
          cache: {},
          custom_metadata: { test: true, user_id: 'user-123' },
          query_rewrite: {},
          reranking: {
            match_threshold: 0.4,
          },
          retrieval: {
            context_expansion: 0,
            match_threshold: 0.4,
            max_num_results: 10,
            return_on_failure: true,
          },
        },
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
        query: 'x',
      });
    },
  },

  {
    operation: 'stats',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances/{id}/stats',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.stats('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'namespaceList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceList('name', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
        order_by: 'created_at',
        order_by_direction: 'desc',
      });
    },
  },

  {
    operation: 'namespaceList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceList('name', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
        search: 'search',
        namespace: 'namespace',
        order_by: 'created_at',
        order_by_direction: 'desc',
      });
    },
  },

  {
    operation: 'namespaceCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceCreate('name', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        fusion_method: 'rrf',
        hybrid_search_enabled: false,
        id: 'my-ai-search',
        index_method: { keyword: false, vector: true },
        max_num_results: 10,
        reranking: false,
        rewrite_query: false,
        score_threshold: 0.4,
        sync_interval: 21600,
      });
    },
  },

  {
    operation: 'namespaceCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceCreate('name', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        ai_gateway_id: '',
        ai_search_model: '',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        chunk_size: 64,
        custom_metadata: [
          {
            data_type: 'text',
            field_name: 'x',
          },
        ],
        embedding_model: '',
        fusion_method: 'rrf',
        hybrid_search_enabled: false,
        id: 'my-ai-search',
        index_method: { keyword: false, vector: true },
        indexing_options: {
          keyword_tokenizer: 'porter',
          use_ocr: false,
        },
        max_num_results: 10,
        metadata: {
          created_from_aisearch_wizard: false,
          worker_domain: '',
        },
        public_endpoint_params: {
          authorized_hosts: [''],
          chat_completions_endpoint: {
            disabled: false,
          },
          custom_domains: ['search.example.com'],
          default_domain_enabled: true,
          enabled: false,
          mcp: {
            description: "Finds exactly what you're looking for",
            disabled: false,
          },
          rate_limit: {},
          search_endpoint: {
            disabled: false,
          },
        },
        reranking: false,
        reranking_model: '',
        retrieval_options: {
          boost_by: [{ direction: 'desc', field: 'timestamp' }],
          keyword_match_mode: 'and',
        },
        rewrite_model: '',
        rewrite_query: false,
        score_threshold: 0.4,
        source: '',
        source_params: {
          exclude_items: ['/admin/**', '/private/**', '**\\temp\\**'],
          include_items: ['/blog/**', '/docs/**/*.html', '**\\blog\\**.html'],
          prefix: '',
          r2_jurisdiction: 'default',
          web_crawler: { parse_type: 'sitemap' },
        },
        sync_interval: 21600,
        token_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        type: 'r2',
      });
    },
  },

  {
    operation: 'namespaceDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceDelete('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceFetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceFetch('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceUpdate('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        fusion_method: 'rrf',
        index_method: { keyword: false, vector: true },
        max_num_results: 10,
        paused: false,
        reranking: false,
        rewrite_query: false,
        score_threshold: 0.4,
        summarization: false,
        sync_interval: 21600,
      });
    },
  },

  {
    operation: 'namespaceUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceUpdate('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        ai_gateway_id: '',
        ai_search_model: '',
        cache: true,
        cache_threshold: 'close_enough',
        cache_ttl: 172800,
        chunk: true,
        chunk_overlap: 10,
        chunk_size: 64,
        custom_metadata: [
          {
            data_type: 'text',
            field_name: 'x',
          },
        ],
        embedding_model: '',
        fusion_method: 'rrf',
        index_method: { keyword: false, vector: true },
        indexing_options: {
          keyword_tokenizer: 'porter',
          use_ocr: false,
        },
        max_num_results: 10,
        metadata: {
          created_from_aisearch_wizard: false,
          worker_domain: '',
        },
        paused: false,
        public_endpoint_params: {
          authorized_hosts: [''],
          chat_completions_endpoint: {
            disabled: false,
          },
          custom_domains: ['search.example.com'],
          default_domain_enabled: true,
          enabled: false,
          mcp: {
            description: "Finds exactly what you're looking for",
            disabled: false,
          },
          rate_limit: {},
          search_endpoint: {
            disabled: false,
          },
        },
        reranking: false,
        reranking_model: '',
        retrieval_options: {
          boost_by: [{ direction: 'desc', field: 'timestamp' }],
          keyword_match_mode: 'and',
        },
        rewrite_model: '',
        rewrite_query: false,
        score_threshold: 0.4,
        source: '',
        source_params: {
          exclude_items: ['/admin/**', '/private/**', '**\\temp\\**'],
          include_items: ['/blog/**', '/docs/**/*.html', '**\\blog\\**.html'],
          prefix: '',
          r2_jurisdiction: 'default',
          web_crawler: { parse_type: 'sitemap' },
        },
        summarization: false,
        summarization_model: '',
        sync_interval: 21600,
        system_prompt_ai_search: '',
        system_prompt_index_summarization: '',
        system_prompt_rewrite_query: '',
        token_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'namespaceChatCompletion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceChatCompletion('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
      });
    },
  },

  {
    operation: 'namespaceChatCompletion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceChatCompletion('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        ai_search_options: {
          cache: {},
          custom_metadata: { test: true, user_id: 'user-123' },
          query_rewrite: {},
          reranking: {
            match_threshold: 0.4,
          },
          retrieval: {
            context_expansion: 0,
            match_threshold: 0.4,
            max_num_results: 10,
            return_on_failure: true,
          },
        },
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
        model: '',
        stream: false,
      });
    },
  },

  {
    operation: 'namespacePurgeCache',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/purge_cache',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespacePurgeCache('my-ai-search', {
        account_id: 'accountId',
        name: 'name',
      });
    },
  },

  {
    operation: 'search2',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search',
    label: 'required params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.search2('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'search2',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search',
    label: 'all params',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.search2('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        ai_search_options: {
          cache: {},
          custom_metadata: { test: true, user_id: 'user-123' },
          query_rewrite: {},
          reranking: {
            match_threshold: 0.4,
          },
          retrieval: {
            context_expansion: 0,
            match_threshold: 0.4,
            max_num_results: 10,
            return_on_failure: true,
          },
        },
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
        query: 'x',
      });
    },
  },

  {
    operation: 'namespaceStats',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats',
    run: async () => {
      const aiSearchInstance = await client.aiSearchInstances.namespaceStats('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances/{id}/jobs',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.list('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances/{id}/jobs',
    label: 'required params',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.create('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/instances/{id}/jobs',
    label: 'all params',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.create('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        description: '',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.retrieve('jobId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'changeStatus',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.changeStatus('jobId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        action: 'cancel',
      });
    },
  },

  {
    operation: 'listLogs',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.listLogs('jobId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'namespaceList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceList('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'namespaceCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs',
    label: 'required params',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceCreate('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceCreate',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs',
    label: 'all params',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceCreate('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        description: '',
      });
    },
  },

  {
    operation: 'namespaceGet',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceGet('jobId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceChangeStatus',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceChangeStatus('jobId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        action: 'cancel',
      });
    },
  },

  {
    operation: 'namespaceListLogs',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs',
    run: async () => {
      const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceListLogs('jobId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces',
    label: 'required params',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces',
    label: 'all params',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        page: 1,
        per_page: 20,
        search: 'prod',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces',
    label: 'required params',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        name: '',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces',
    label: 'all params',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        description: 'Production environment',
        name: '',
        public_endpoint_params: {
          default_domain_enabled: true,
          enabled: false,
          instances_allowed: [],
        },
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.delete('production', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'fetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.fetch('production', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}',
    label: 'required params',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.update('production', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}',
    label: 'all params',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.update('production', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        description: 'Production environment',
        public_endpoint_params: {
          authorized_hosts: [''],
          chat_completions_endpoint: {
            disabled: false,
          },
          custom_domains: ['search.example.com'],
          default_domain_enabled: true,
          enabled: false,
          instances_allowed: [],
          mcp: {
            description: "Finds exactly what you're looking for",
            disabled: false,
          },
          rate_limit: {},
          search_endpoint: {
            disabled: false,
          },
        },
      });
    },
  },

  {
    operation: 'moveInstance',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}',
    run: async () => {
      const aiSearchNamespace = await client.aiSearchNamespaces.moveInstance('my-blog', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'production',
        new_namespace: 'staging',
      });
    },
  },

  {
    operation: 'namespaceMultiInstanceChatCompletion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/chat/completions',
    label: 'required params',
    run: async () => {
      const aiSearchAccountSearch = await client.aiSearchAccountSearch.namespaceMultiInstanceChatCompletion(
        'name',
        {
          account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
          ai_search_options: {
            instance_ids: ['my-ai-search'],
          },
          messages: [
            {
              content: '',
              role: 'system',
            },
          ],
        },
      );
    },
  },

  {
    operation: 'namespaceMultiInstanceChatCompletion',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/chat/completions',
    label: 'all params',
    run: async () => {
      const aiSearchAccountSearch = await client.aiSearchAccountSearch.namespaceMultiInstanceChatCompletion(
        'name',
        {
          account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
          ai_search_options: {
            cache: {},
            custom_metadata: { test: true, user_id: 'user-123' },
            instance_ids: ['my-ai-search'],
            query_rewrite: {},
            reranking: {
              match_threshold: 0.4,
            },
            retrieval: {
              context_expansion: 0,
              match_threshold: 0.4,
              max_num_results: 10,
              return_on_failure: true,
            },
          },
          messages: [
            {
              content: '',
              role: 'system',
            },
          ],
          model: '',
          stream: false,
        },
      );
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/search',
    label: 'required params',
    run: async () => {
      const aiSearchAccountSearch = await client.aiSearchAccountSearch.search('name', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        ai_search_options: {
          instance_ids: ['my-ai-search'],
        },
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/search',
    label: 'all params',
    run: async () => {
      const aiSearchAccountSearch = await client.aiSearchAccountSearch.search('name', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        ai_search_options: {
          cache: {},
          custom_metadata: { test: true, user_id: 'user-123' },
          instance_ids: ['my-ai-search'],
          query_rewrite: {},
          reranking: {
            match_threshold: 0.4,
          },
          retrieval: {
            context_expansion: 0,
            match_threshold: 0.4,
            max_num_results: 10,
            return_on_failure: true,
          },
        },
        messages: [
          {
            content: '',
            role: 'system',
          },
        ],
        query: 'x',
      });
    },
  },

  {
    operation: 'namespaceList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items',
    label: 'required params',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceList('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        page: 1,
        per_page: 20,
        sort_by: 'status',
      });
    },
  },

  {
    operation: 'namespaceList',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items',
    label: 'all params',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceList('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        page: 1,
        per_page: 20,
        search: 'search',
        sort_by: 'status',
        status: 'queued',
        source: 'source',
        metadata_filter: 'metadataFilter',
        item_id: 'itemId',
        key: 'key',
      });
    },
  },

  {
    operation: 'namespaceUpload',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items',
    label: 'required params',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceUpload('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        file: new File(['file'], 'file'),
        wait_for_completion: false,
      });
    },
  },

  {
    operation: 'namespaceUpload',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items',
    label: 'all params',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceUpload('my-ai-search', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        file: new File(['file'], 'file'),
        metadata: '',
        wait_for_completion: false,
      });
    },
  },

  {
    operation: 'namespaceCreateOrUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceCreateOrUpdate(
        'my-ai-search',
        {
          account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
          name: 'name',
          key: '',
          next_action: 'INDEX',
          wait_for_completion: false,
        },
      );
    },
  },

  {
    operation: 'namespaceDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceDelete('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceGet',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceGet('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceSync',
    method: 'PATCH',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceSync('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        next_action: 'INDEX',
        wait_for_completion: false,
      });
    },
  },

  {
    operation: 'namespaceListChunks',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceListChunks('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        limit: 20,
        offset: 0,
      });
    },
  },

  {
    operation: 'namespaceGetContent',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download',
    run: async () => {
      const response = await client.aiSearchInstancesItems.namespaceGetContent('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
      });
    },
  },

  {
    operation: 'namespaceLogs',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs',
    label: 'required params',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceLogs('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        limit: 50,
      });
    },
  },

  {
    operation: 'namespaceLogs',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs',
    label: 'all params',
    run: async () => {
      const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceLogs('itemId', {
        id: 'my-ai-search',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        name: 'name',
        limit: 50,
        cursor: 'cursor',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/tokens',
    label: 'required params',
    run: async () => {
      const aiSearchToken = await client.aiSearchTokens.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/tokens',
    label: 'all params',
    run: async () => {
      const aiSearchToken = await client.aiSearchTokens.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        page: 1,
        per_page: 20,
        search: 'my-token',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai-search/tokens',
    run: async () => {
      const aiSearchToken = await client.aiSearchTokens.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
        cf_api_id: 'a1b2c3d4e5f6',
        cf_api_key: 'abc123',
        legacy: true,
        name: 'my-token',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai-search/tokens/{id}',
    run: async () => {
      const aiSearchToken = await client.aiSearchTokens.delete('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'fetch',
    method: 'GET',
    path: '/accounts/{account_id}/ai-search/tokens/{id}',
    run: async () => {
      const aiSearchToken = await client.aiSearchTokens.fetch('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/ai-search/tokens/{id}',
    run: async () => {
      const aiSearchToken = await client.aiSearchTokens.update('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        cf_api_id: 'a1b2c3d4e5f6',
        cf_api_key: 'abc123',
        legacy: true,
        name: 'my-token',
      });
    },
  },

  {
    operation: 'search',
    method: 'GET',
    path: '/accounts/{account_id}/ai/authors/search',
    run: async () => {
      const workersAI = await client.workersAI.search('023e105f4ecef8ad9ca31a8372d0c353');
    },
  },

  {
    operation: 'listModelSchema',
    method: 'GET',
    path: '/accounts/{account_id}/ai/models/schema',
    run: async () => {
      const workersAI = await client.workersAI.listModelSchema('023e105f4ecef8ad9ca31a8372d0c353', {
        model: 'model',
      });
    },
  },

  {
    operation: 'search2',
    method: 'GET',
    path: '/accounts/{account_id}/ai/models/search',
    label: 'required params',
    run: async () => {
      const workersAI = await client.workersAI.search2('023e105f4ecef8ad9ca31a8372d0c353', {
        per_page: 100,
        page: 1,
        task: '',
        author: '',
        hide_experimental: false,
        search: '',
        include_deprecated: false,
      });
    },
  },

  {
    operation: 'search2',
    method: 'GET',
    path: '/accounts/{account_id}/ai/models/search',
    label: 'all params',
    run: async () => {
      const workersAI = await client.workersAI.search2('023e105f4ecef8ad9ca31a8372d0c353', {
        per_page: 100,
        page: 1,
        task: '',
        author: '',
        source: 1,
        hide_experimental: false,
        search: '',
        include_deprecated: false,
        format: 'openrouter',
      });
    },
  },

  {
    operation: 'postRunGeneric',
    method: 'POST',
    path: '/accounts/{account_id}/ai/run',
    label: 'required params',
    run: async () => {
      const workersAI = await client.workersAI.postRunGeneric('023e105f4ecef8ad9ca31a8372d0c353', {
        input: { prompt: 'Tell me a joke' },
        model: 'openai/gpt-5.5',
      });
    },
  },

  {
    operation: 'postRunGeneric',
    method: 'POST',
    path: '/accounts/{account_id}/ai/run',
    label: 'all params',
    run: async () => {
      const workersAI = await client.workersAI.postRunGeneric('023e105f4ecef8ad9ca31a8372d0c353', {
        input: { prompt: 'Tell me a joke' },
        model: 'openai/gpt-5.5',
        options: {},
      });
    },
  },

  {
    operation: 'postRunModel',
    method: 'POST',
    path: '/accounts/{account_id}/ai/run/{model_name}',
    label: 'required params',
    run: async () => {
      const workersAI = await client.workersAI.postRunModel('modelName', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      });
    },
  },

  {
    operation: 'postRunModel',
    method: 'POST',
    path: '/accounts/{account_id}/ai/run/{model_name}',
    label: 'all params',
    run: async () => {
      const workersAI = await client.workersAI.postRunModel('modelName', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        body: {
          text: 'x',
        },
      });
    },
  },

  {
    operation: 'search3',
    method: 'GET',
    path: '/accounts/{account_id}/ai/tasks/search',
    run: async () => {
      const workersAI = await client.workersAI.search3('023e105f4ecef8ad9ca31a8372d0c353');
    },
  },

  {
    operation: 'postToMarkdown',
    method: 'POST',
    path: '/accounts/{account_id}/ai/tomarkdown',
    run: async () => {
      const workersAI = await client.workersAI.postToMarkdown('023e105f4ecef8ad9ca31a8372d0c353', {
        files: [new File(['file'], 'file')],
      });
    },
  },

  {
    operation: 'listToMarkdownSupported',
    method: 'GET',
    path: '/accounts/{account_id}/ai/tomarkdown/supported',
    run: async () => {
      const workersAI = await client.workersAI.listToMarkdownSupported('023e105f4ecef8ad9ca31a8372d0c353');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/ai/finetunes',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.list('023e105f4ecef8ad9ca31a8372d0c353');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai/finetunes',
    label: 'required params',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.create('023e105f4ecef8ad9ca31a8372d0c353', {
        model: '',
        name: '',
        public: false,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/ai/finetunes',
    label: 'all params',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.create('023e105f4ecef8ad9ca31a8372d0c353', {
        description: '',
        model: '',
        name: '',
        public: false,
      });
    },
  },

  {
    operation: 'listPublic',
    method: 'GET',
    path: '/accounts/{account_id}/ai/finetunes/public',
    label: 'required params',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.listPublic(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          limit: 20,
          offset: 0,
        },
      );
    },
  },

  {
    operation: 'listPublic',
    method: 'GET',
    path: '/accounts/{account_id}/ai/finetunes/public',
    label: 'all params',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.listPublic(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          limit: 20,
          offset: 0,
          orderBy: 'orderBy',
        },
      );
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/ai/finetunes/{finetune_id}',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.delete(
        'bc451aef-f723-4b26-a6b2-901afd2e7a8a',
        {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        },
      );
    },
  },

  {
    operation: 'uploadAsset',
    method: 'POST',
    path: '/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets',
    run: async () => {
      const workersAIFinetune = await client.workersAIFinetune.uploadAsset(
        'bc451aef-f723-4b26-a6b2-901afd2e7a8a',
        {
          account_id: '023e105f4ecef8ad9ca31a8372d0c353',
          file: new File(['file'], 'file'),
          file_name: '',
        },
      );
    },
  },

  {
    operation: 'workersAiDownload',
    method: 'GET',
    path: '/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}',
    run: async () => {
      const finetuneAsset = await client.finetuneAsset.workersAIDownload('adapter_model.safetensors', {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        finetune_id: 'bc451aef-f723-4b26-a6b2-901afd2e7a8a',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/available_alerts',
    run: async () => {
      const response = await client.notificationAlertTypes.list('accountId');
    },
  },

  {
    operation: 'listDelivery',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/destinations/eligible',
    run: async () => {
      const response = await client.notificationMechanismEligibility.listDelivery('accountId');
    },
  },

  {
    operation: 'deleteServices',
    method: 'DELETE',
    path: '/accounts/{account_id}/alerting/v3/destinations/pagerduty',
    run: async () => {
      const response = await client.notificationDestinationsWithPagerDuty.deleteServices('accountId');
    },
  },

  {
    operation: 'listServices',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/destinations/pagerduty',
    run: async () => {
      const response = await client.notificationDestinationsWithPagerDuty.listServices('accountId');
    },
  },

  {
    operation: 'connect',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/destinations/pagerduty/connect',
    run: async () => {
      const response = await client.notificationDestinationsWithPagerDuty.connect('accountId');
    },
  },

  {
    operation: 'connectToken',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}',
    run: async () => {
      const response = await client.notificationDestinationsWithPagerDuty.connectToken('tokenId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks',
    run: async () => {
      const response = await client.notificationWebhooks.list('accountId');
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks',
    label: 'required params',
    run: async () => {
      const response = await client.notificationWebhooks.createA('accountId', {
        name: {},
        url: {},
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks',
    label: 'all params',
    run: async () => {
      const response = await client.notificationWebhooks.createA('accountId', {
        name: {},
        secret: {},
        url: {},
      });
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}',
    run: async () => {
      const response = await client.notificationWebhooks.deleteA('webhookId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}',
    run: async () => {
      const response = await client.notificationWebhooks.retrieveA('webhookId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}',
    label: 'required params',
    run: async () => {
      const response = await client.notificationWebhooks.updateA('webhookId', {
        account_id: {},
        name: {},
        url: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}',
    label: 'all params',
    run: async () => {
      const response = await client.notificationWebhooks.updateA('webhookId', {
        account_id: {},
        name: {},
        secret: {},
        url: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/history',
    label: 'required params',
    run: async () => {
      const response = await client.notificationHistory.list('accountId', {
        page: 1,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/history',
    label: 'all params',
    run: async () => {
      const response = await client.notificationHistory.list('accountId', {
        per_page: {},
        before: {},
        page: 1,
        since: '2022-05-19T20:29:58.679897Z',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/policies',
    run: async () => {
      const response = await client.notificationPolicies.list('accountId');
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/policies',
    label: 'required params',
    run: async () => {
      const response = await client.notificationPolicies.createA('accountId', {
        alert_type: {},
        enabled: {},
        mechanisms: {},
        name: {},
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/policies',
    label: 'all params',
    run: async () => {
      const response = await client.notificationPolicies.createA('accountId', {
        alert_interval: {},
        alert_type: {},
        description: {},
        enabled: {},
        filters: {},
        mechanisms: {},
        name: {},
      });
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}',
    run: async () => {
      const response = await client.notificationPolicies.deleteA('policyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}',
    run: async () => {
      const response = await client.notificationPolicies.retrieveA('policyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}',
    label: 'required params',
    run: async () => {
      const response = await client.notificationPolicies.updateA('policyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PUT',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}',
    label: 'all params',
    run: async () => {
      const response = await client.notificationPolicies.updateA('policyId', {
        account_id: {},
        alert_interval: {},
        alert_type: {},
        description: {},
        enabled: {},
        filters: {},
        mechanisms: {},
        name: {},
      });
    },
  },

  {
    operation: 'showEmailUnsubscribeDetails',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}/email/unsubscribe',
    run: async () => {
      const response = await client.notificationPolicies.showEmailUnsubscribeDetails('policyId', {
        account_id: {},
        email: 'user@example.com',
        token: 'token',
      });
    },
  },

  {
    operation: 'unsubscribeEmailFrom',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}/email/unsubscribe',
    run: async () => {
      const response = await client.notificationPolicies.unsubscribeEmailFrom('policyId', {
        account_id: {},
        email: 'user@example.com',
        token: 'token',
      });
    },
  },

  {
    operation: 'testA',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}/test',
    label: 'required params',
    run: async () => {
      const response = await client.notificationPolicies.testA('policyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'testA',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/policies/{policy_id}/test',
    label: 'all params',
    run: async () => {
      const response = await client.notificationPolicies.testA('policyId', {
        account_id: {},
        severity: 1,
        source: '',
        state_correlation_id: '',
        state_event: 0,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/silences',
    run: async () => {
      const response = await client.notificationSilences.list('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/alerting/v3/silences',
    run: async () => {
      const response = await client.notificationSilences.create('accountId', {
        body: [{}],
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/alerting/v3/silences',
    run: async () => {
      const response = await client.notificationSilences.update('accountId', {
        body: [{}],
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/alerting/v3/silences/{silence_id}',
    run: async () => {
      const response = await client.notificationSilences.delete('silenceId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/alerting/v3/silences/{silence_id}',
    run: async () => {
      const response = await client.notificationSilences.retrieve('silenceId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'contentFindingsTopN',
    method: 'POST',
    path: '/accounts/{account_id}/analytics/query/data-security/content-findings/top-n',
    run: async () => {
      const response = await client.dataSecurity.contentFindingsTopN('accountId', {
        filters: [],
        from: '2024-11-01T00:00:00Z',
        n: 10,
        to: '2024-11-08T00:00:00Z',
      });
    },
  },

  {
    operation: 'findingsSummary',
    method: 'POST',
    path: '/accounts/{account_id}/analytics/query/data-security/findings/summary',
    run: async () => {
      const response = await client.dataSecurity.findingsSummary('accountId', {
        filters: [],
        from: '2024-11-01T00:00:00Z',
        to: '2024-11-08T00:00:00Z',
      });
    },
  },

  {
    operation: 'findingsTimeseries',
    method: 'POST',
    path: '/accounts/{account_id}/analytics/query/data-security/findings/timeseries',
    run: async () => {
      const response = await client.dataSecurity.findingsTimeseries('accountId', {
        filters: [],
        from: '2024-11-01T00:00:00Z',
        to: '2024-11-08T00:00:00Z',
      });
    },
  },

  {
    operation: 'querySummary',
    method: 'POST',
    path: '/accounts/{account_id}/analytics/query/{dataset}/summary',
    run: async () => {
      const response = await client.artAnalytics.querySummary('access-logins', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'queryTimeseries',
    method: 'POST',
    path: '/accounts/{account_id}/analytics/query/{dataset}/timeseries',
    run: async () => {
      const response = await client.artAnalytics.queryTimeseries('shadow_it', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'queryTopN',
    method: 'POST',
    path: '/accounts/{account_id}/analytics/query/{dataset}/top-n',
    run: async () => {
      const response = await client.artAnalytics.queryTopN('gateway-http', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'sqlQueryGet',
    method: 'GET',
    path: '/accounts/{account_id}/analytics_engine/sql',
    label: 'required params',
    run: async () => {
      await client.analyticsEngine.sqlQueryGet('accountId', {
        query:
          "SELECT blob1, count() FROM my_dataset WHERE timestamp > NOW() - INTERVAL '1' DAY GROUP BY blob1 ORDER BY count() DESC LIMIT 10",
      });
    },
  },

  {
    operation: 'sqlQueryGet',
    method: 'GET',
    path: '/accounts/{account_id}/analytics_engine/sql',
    label: 'all params',
    run: async () => {
      await client.analyticsEngine.sqlQueryGet('accountId', {
        '': '_',
        query:
          "SELECT blob1, count() FROM my_dataset WHERE timestamp > NOW() - INTERVAL '1' DAY GROUP BY blob1 ORDER BY count() DESC LIMIT 10",
      });
    },
  },

  {
    operation: 'sqlQueryPost',
    method: 'POST',
    path: '/accounts/{account_id}/analytics_engine/sql',
    label: 'required params',
    run: async () => {
      await client.analyticsEngine.sqlQueryPost('accountId', {
        body: 'body',
      });
    },
  },

  {
    operation: 'sqlQueryPost',
    method: 'POST',
    path: '/accounts/{account_id}/analytics_engine/sql',
    label: 'all params',
    run: async () => {
      await client.analyticsEngine.sqlQueryPost('accountId', {
        '': '_',
        body: 'body',
      });
    },
  },

  {
    operation: 'namespacesList',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.namespacesList('accountId', {
        limit: 100,
      });
    },
  },

  {
    operation: 'namespacesList',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.namespacesList('accountId', {
        limit: 100,
        cursor: 'cursor',
      });
    },
  },

  {
    operation: 'namespacesGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}',
    run: async () => {
      const artifact = await client.artifacts.namespacesGet('namespace', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'reposList',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.reposList('namespace', {
        account_id: 'accountId',
        limit: 50,
        sort: 'created_at',
        direction: 'desc',
      });
    },
  },

  {
    operation: 'reposList',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.reposList('namespace', {
        account_id: 'accountId',
        limit: 50,
        cursor: 'cursor',
        search: 'search',
        sort: 'created_at',
        direction: 'desc',
      });
    },
  },

  {
    operation: 'reposCreate',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.reposCreate('namespace', {
        account_id: 'accountId',
        name: '',
      });
    },
  },

  {
    operation: 'reposCreate',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.reposCreate('namespace', {
        account_id: 'accountId',
        default_branch: 'x',
        description: '',
        name: '',
        read_only: false,
      });
    },
  },

  {
    operation: 'reposDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}',
    run: async () => {
      const artifact = await client.artifacts.reposDelete('name', {
        account_id: 'accountId',
        namespace: 'namespace',
      });
    },
  },

  {
    operation: 'reposGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}',
    run: async () => {
      const artifact = await client.artifacts.reposGet('name', {
        account_id: 'accountId',
        namespace: 'namespace',
      });
    },
  },

  {
    operation: 'reposBlobGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/blob/{hash}',
    run: async () => {
      const response = await client.artifacts.reposBlobGet('hash', {
        account_id: 'accountId',
        namespace: 'namespace',
        name: 'name',
      });
    },
  },

  {
    operation: 'reposCommitGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/commit/{hash}',
    run: async () => {
      const artifact = await client.artifacts.reposCommitGet('hash', {
        account_id: 'accountId',
        namespace: 'namespace',
        name: 'name',
      });
    },
  },

  {
    operation: 'reposFileGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/file',
    run: async () => {
      const response = await client.artifacts.reposFileGet('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        ref: 'ref',
        path: 'path',
      });
    },
  },

  {
    operation: 'reposFork',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.reposFork('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        name: '',
      });
    },
  },

  {
    operation: 'reposFork',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.reposFork('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        default_branch_only: false,
        description: '',
        name: '',
        read_only: false,
      });
    },
  },

  {
    operation: 'reposImport',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.reposImport('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        url: 'https://example.com',
      });
    },
  },

  {
    operation: 'reposImport',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.reposImport('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        branch: 'x',
        depth: 1,
        read_only: false,
        url: 'https://example.com',
      });
    },
  },

  {
    operation: 'reposLogGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/log',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.reposLogGet('name', {
        account_id: 'accountId',
        namespace: 'namespace',
      });
    },
  },

  {
    operation: 'reposLogGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/log',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.reposLogGet('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        ref: 'ref',
        limit: 1,
        offset: 1,
      });
    },
  },

  {
    operation: 'reposRawGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/raw/{ref}/{path}',
    run: async () => {
      const response = await client.artifacts.reposRawGet('path', {
        account_id: 'accountId',
        namespace: 'namespace',
        name: 'name',
        ref: 'ref',
      });
    },
  },

  {
    operation: 'repoTokensList',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tokens',
    run: async () => {
      const artifact = await client.artifacts.repoTokensList('name', {
        account_id: 'accountId',
        namespace: 'namespace',
        state: 'active',
        page: 1,
        per_page: 30,
      });
    },
  },

  {
    operation: 'reposTreeGet',
    method: 'GET',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tree/{hash}',
    run: async () => {
      const artifact = await client.artifacts.reposTreeGet('hash', {
        account_id: 'accountId',
        namespace: 'namespace',
        name: 'name',
      });
    },
  },

  {
    operation: 'tokensCreate',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.tokensCreate('namespace', {
        account_id: 'accountId',
        repo: '',
      });
    },
  },

  {
    operation: 'tokensCreate',
    method: 'POST',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.tokensCreate('namespace', {
        account_id: 'accountId',
        repo: '',
        scope: 'read',
        ttl: 60,
      });
    },
  },

  {
    operation: 'tokensRevoke',
    method: 'DELETE',
    path: '/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens/{id}',
    run: async () => {
      const artifact = await client.artifacts.tokensRevoke('id', {
        account_id: 'accountId',
        namespace: 'namespace',
      });
    },
  },

  {
    operation: 'listAccount',
    method: 'GET',
    path: '/accounts/{account_id}/audit_logs',
    label: 'required params',
    run: async () => {
      const response = await client.auditLogs.listAccount('accountId', {
        direction: 'desc',
        per_page: 100,
        page: 1,
        hide_user_logs: false,
      });
    },
  },

  {
    operation: 'listAccount',
    method: 'GET',
    path: '/accounts/{account_id}/audit_logs',
    label: 'all params',
    run: async () => {
      const response = await client.auditLogs.listAccount('accountId', {
        id: 'f174be97-19b1-40d6-954d-70cd5fbd52db',
        export: true,
        'action.type': 'add',
        'actor.ip': '17.168.228.63',
        'actor.email': 'alice@example.com',
        since: '2019-04-30',
        before: '2019-04-30',
        'zone.name': 'example.com',
        direction: 'desc',
        per_page: 100,
        page: 1,
        hide_user_logs: false,
      });
    },
  },

  {
    operation: 'autoragConfigAi',
    method: 'POST',
    path: '/accounts/{account_id}/autorag/rags/{id}/ai-search',
    label: 'required params',
    run: async () => {
      const autoRagRagSearch = await client.autoRagRagSearch.autoragConfigAI('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        max_num_results: 10,
        query: '',
        ranking_options: {},
        rewrite_query: false,
        stream: false,
      });
    },
  },

  {
    operation: 'autoragConfigAi',
    method: 'POST',
    path: '/accounts/{account_id}/autorag/rags/{id}/ai-search',
    label: 'all params',
    run: async () => {
      const autoRagRagSearch = await client.autoRagRagSearch.autoragConfigAI('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        filters: {
          key: '',
          type: 'eq',
          value: '',
        },
        max_num_results: 10,
        model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        query: '',
        ranking_options: {},
        reranking: {
          enabled: false,
          model: '@cf/baai/bge-reranker-base',
        },
        rewrite_query: false,
        stream: false,
        system_prompt: '',
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/autorag/rags/{id}/search',
    label: 'required params',
    run: async () => {
      const autoRagRagSearch = await client.autoRagRagSearch.search('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        max_num_results: 10,
        query: '',
        ranking_options: {},
        rewrite_query: false,
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/autorag/rags/{id}/search',
    label: 'all params',
    run: async () => {
      const autoRagRagSearch = await client.autoRagRagSearch.search('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        filters: {
          key: '',
          type: 'eq',
          value: '',
        },
        max_num_results: 10,
        query: '',
        ranking_options: {},
        reranking: {
          enabled: false,
          model: '@cf/baai/bge-reranker-base',
        },
        rewrite_query: false,
      });
    },
  },

  {
    operation: 'autoragConfigFiles',
    method: 'GET',
    path: '/accounts/{account_id}/autorag/rags/{id}/files',
    label: 'required params',
    run: async () => {
      const autoRagRag = await client.autoRagRag.autoragConfigFiles('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'autoragConfigFiles',
    method: 'GET',
    path: '/accounts/{account_id}/autorag/rags/{id}/files',
    label: 'all params',
    run: async () => {
      const autoRagRag = await client.autoRagRag.autoragConfigFiles('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
        search: 'search',
        status: 'completed',
      });
    },
  },

  {
    operation: 'autoragConfigSync',
    method: 'PATCH',
    path: '/accounts/{account_id}/autorag/rags/{id}/sync',
    run: async () => {
      const autoRagRag = await client.autoRagRag.autoragConfigSync('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'autoragConfigList',
    method: 'GET',
    path: '/accounts/{account_id}/autorag/rags/{id}/jobs',
    run: async () => {
      const autoRagJob = await client.autoRagJobs.autoragConfigList('my-rag', {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'autoragConfigGet',
    method: 'GET',
    path: '/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}',
    run: async () => {
      const autoRagJob = await client.autoRagJobs.autoragConfigGet('jobId', {
        id: 'my-rag',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      });
    },
  },

  {
    operation: 'autoragConfigListLogs',
    method: 'GET',
    path: '/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs',
    run: async () => {
      const autoRagJob = await client.autoRagJobs.autoragConfigListLogs('jobId', {
        id: 'my-rag',
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'listV1Account',
    method: 'GET',
    path: '/accounts/{account_id}/billable-usage',
    run: async () => {
      const response = await client.billableUsage.listV1Account('accountId');
    },
  },

  {
    operation: 'listV1AccountInfo',
    method: 'GET',
    path: '/accounts/{account_id}/billable-usage/info',
    run: async () => {
      const response = await client.billableUsage.listV1AccountInfo('accountId');
    },
  },

  {
    operation: 'listAccount',
    method: 'GET',
    path: '/accounts/{account_id}/billable/usage',
    run: async () => {
      const response = await client.billableUsageV2.listAccount('accountId');
    },
  },

  {
    operation: 'queryAccount',
    method: 'POST',
    path: '/accounts/{account_id}/billable/usage',
    label: 'required params',
    run: async () => {
      const response = await client.billableUsageV2.queryAccount('accountId');
    },
  },

  {
    operation: 'queryAccount',
    method: 'POST',
    path: '/accounts/{account_id}/billable/usage',
    label: 'all params',
    run: async () => {
      const response = await client.billableUsageV2.queryAccount('accountId', {});
    },
  },

  {
    operation: 'listBadDebt',
    method: 'GET',
    path: '/accounts/{account_id}/billing/bad-debt',
    run: async () => {
      const response = await client.accountBilling.listBadDebt('accountId');
    },
  },

  {
    operation: 'listCredits',
    method: 'GET',
    path: '/accounts/{account_id}/billing/credits',
    run: async () => {
      const response = await client.accountBilling.listCredits('accountId');
    },
  },

  {
    operation: 'createPaymentIntent',
    method: 'POST',
    path: '/accounts/{account_id}/billing/profile/payment-method',
    run: async () => {
      const response = await client.accountBilling.createPaymentIntent('accountId');
    },
  },

  {
    operation: 'listUnpaidInvoices',
    method: 'GET',
    path: '/accounts/{account_id}/billing/unpaid-invoice',
    run: async () => {
      const response = await client.accountBilling.listUnpaidInvoices('accountId');
    },
  },

  {
    operation: 'createSetupIntent',
    method: 'POST',
    path: '/accounts/{account_id}/client-secret',
    run: async () => {
      const response = await client.accountBilling.createSetupIntent('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/billing/history',
    label: 'required params',
    run: async () => {
      const response = await client.accountBillingHistory.list('accountId', {
        page: 1,
        per_page: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/billing/history',
    label: 'all params',
    run: async () => {
      const response = await client.accountBillingHistory.list('accountId', {
        page: 1,
        per_page: 20,
        status: 'status',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/billing/profile',
    run: async () => {
      await client.accountBillingProfile.delete('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/billing/profile',
    run: async () => {
      const response = await client.accountBillingProfile.list('accountId');
    },
  },

  {
    operation: 'updateEmail',
    method: 'PATCH',
    path: '/accounts/{account_id}/billing/profile',
    label: 'required params',
    run: async () => {
      const response = await client.accountBillingProfile.updateEmail('accountId', {});
    },
  },

  {
    operation: 'updateEmail',
    method: 'PATCH',
    path: '/accounts/{account_id}/billing/profile',
    label: 'all params',
    run: async () => {
      const response = await client.accountBillingProfile.updateEmail('accountId', {
        billing_email: 'billing@example.com',
        preferred_locale: 'en-US',
        secondary_billing_email: 'secondary@example.com',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/billing/profile',
    run: async () => {
      const response = await client.accountBillingProfile.create('accountId', {});
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/billing/profile',
    run: async () => {
      const response = await client.accountBillingProfile.update('accountId', {});
    },
  },

  {
    operation: 'listAccountBilling',
    method: 'GET',
    path: '/accounts/{account_id}/billing/usage',
    run: async () => {
      const response = await client.usageAnalytics.listAccountBilling('accountId');
    },
  },

  {
    operation: 'listDayReport',
    method: 'GET',
    path: '/accounts/{account_id}/botnet_feed/asn/{asn_id}/day_report',
    label: 'required params',
    run: async () => {
      const botnetThreatFeed = await client.botnetThreatFeed.listDayReport('asnId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listDayReport',
    method: 'GET',
    path: '/accounts/{account_id}/botnet_feed/asn/{asn_id}/day_report',
    label: 'all params',
    run: async () => {
      const botnetThreatFeed = await client.botnetThreatFeed.listDayReport('asnId', {
        account_id: {},
        date: {},
      });
    },
  },

  {
    operation: 'listFullReport',
    method: 'GET',
    path: '/accounts/{account_id}/botnet_feed/asn/{asn_id}/full_report',
    run: async () => {
      const botnetThreatFeed = await client.botnetThreatFeed.listFullReport('asnId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listAsn',
    method: 'GET',
    path: '/accounts/{account_id}/botnet_feed/configs/asn',
    run: async () => {
      const botnetThreatFeed = await client.botnetThreatFeed.listASN('accountId');
    },
  },

  {
    operation: 'deleteAsn',
    method: 'DELETE',
    path: '/accounts/{account_id}/botnet_feed/configs/asn/{asn_id}',
    run: async () => {
      const botnetThreatFeed = await client.botnetThreatFeed.deleteASN('asnId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'listAccountsAccountAlerts',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/alerts',
    run: async () => {
      await client.brandProtection.listAccountsAccountAlerts('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdAlerts',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/alerts',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDAlerts('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdAlertsClear',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/alerts/clear',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDAlertsClear('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdAlertsRefute',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/alerts/refute',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDAlertsRefute('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdAlertsVerify',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/alerts/verify',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDAlertsVerify('accountId');
    },
  },

  {
    operation: 'deleteAccountsAccountId',
    method: 'DELETE',
    path: '/accounts/{account_id}/brand-protection/brands',
    run: async () => {
      await client.brandProtection.deleteAccountsAccountID('accountId');
    },
  },

  {
    operation: 'listAccountsAccount',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/brands',
    run: async () => {
      await client.brandProtection.listAccountsAccount('accountId');
    },
  },

  {
    operation: 'postAccountsAccountId',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/brands',
    run: async () => {
      await client.brandProtection.postAccountsAccountID('accountId');
    },
  },

  {
    operation: 'deleteAccountsAccountIdPatterns',
    method: 'DELETE',
    path: '/accounts/{account_id}/brand-protection/brands/patterns',
    run: async () => {
      await client.brandProtection.deleteAccountsAccountIDPatterns('accountId');
    },
  },

  {
    operation: 'listAccountsAccountPatterns',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/brands/patterns',
    run: async () => {
      await client.brandProtection.listAccountsAccountPatterns('accountId');
    },
  },

  {
    operation: 'postAccountsAccountIdPatterns',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/brands/patterns',
    run: async () => {
      await client.brandProtection.postAccountsAccountIDPatterns('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdClear',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/clear',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDClear('accountId');
    },
  },

  {
    operation: 'listAccountsAccountDomainInfo',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/domain-info',
    run: async () => {
      await client.brandProtection.listAccountsAccountDomainInfo('accountId');
    },
  },

  {
    operation: 'listAccountsAccountRecentSubmissions',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/recent-submissions',
    run: async () => {
      await client.brandProtection.listAccountsAccountRecentSubmissions('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdRefute',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/refute',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDRefute('accountId');
    },
  },

  {
    operation: 'listAccountsAccountSubmissionInfo',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/submission-info',
    run: async () => {
      await client.brandProtection.listAccountsAccountSubmissionInfo('accountId');
    },
  },

  {
    operation: 'postAccountsAccountIdSubmit',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/submit',
    run: async () => {
      const response = await client.brandProtection.postAccountsAccountIDSubmit('accountId');
    },
  },

  {
    operation: 'listAccountsAccountTrackedDomains',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/tracked-domains',
    run: async () => {
      await client.brandProtection.listAccountsAccountTrackedDomains('accountId');
    },
  },

  {
    operation: 'listAccountsAccountUrlInfo',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/url-info',
    run: async () => {
      const response = await client.brandProtection.listAccountsAccountURLInfo('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdVerify',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/verify',
    run: async () => {
      await client.brandProtection.patchAccountsAccountIDVerify('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatches',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/logo-matches',
    label: 'required params',
    run: async () => {
      const response = await client.logoMatch.listAccountsAccountBrandProtectionMatches('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatches',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/logo-matches',
    label: 'all params',
    run: async () => {
      const response = await client.logoMatch.listAccountsAccountBrandProtectionMatches('accountId', {
        logo_id: ['logoId'],
        offset: 'offset',
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatchesDownload',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/logo-matches/download',
    label: 'required params',
    run: async () => {
      const response = await client.logoMatch.listAccountsAccountBrandProtectionMatchesDownload('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatchesDownload',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/logo-matches/download',
    label: 'all params',
    run: async () => {
      const response = await client.logoMatch.listAccountsAccountBrandProtectionMatchesDownload('accountId', {
        logo_id: ['logoId'],
        offset: 'offset',
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listAccountsAccountBrandProtection',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/logos',
    run: async () => {
      await client.logoMatch.listAccountsAccountBrandProtection('accountId');
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtection',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/logos',
    label: 'required params',
    run: async () => {
      const response = await client.logoMatch.postAccountsAccountIDBrandProtection('accountId', {
        body: {},
      });
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtection',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/logos',
    label: 'all params',
    run: async () => {
      const response = await client.logoMatch.postAccountsAccountIDBrandProtection('accountId', {
        tag: 'tag',
        match_type: 'matchType',
        threshold: 1,
        body: {},
      });
    },
  },

  {
    operation: 'deleteAccountsAccountIdBrandProtectionId',
    method: 'DELETE',
    path: '/accounts/{account_id}/brand-protection/logos/{logo_id}',
    run: async () => {
      await client.logoMatch.deleteAccountsAccountIDBrandProtectionID('logoId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveAccountsAccountBrandProtection',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/logos/{logo_id}',
    run: async () => {
      await client.logoMatch.retrieveAccountsAccountBrandProtection('logoId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionScan',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/scan-logo',
    run: async () => {
      await client.logoMatch.postAccountsAccountIDBrandProtectionScan('accountId');
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionScanPage',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/scan-page',
    run: async () => {
      await client.logoMatch.postAccountsAccountIDBrandProtectionScanPage('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatches',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/matches',
    label: 'required params',
    run: async () => {
      const response = await client.domainSearch.listAccountsAccountBrandProtectionMatches('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatches',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/matches',
    label: 'all params',
    run: async () => {
      const response = await client.domainSearch.listAccountsAccountBrandProtectionMatches('accountId', {
        id: 'id',
        offset: 1,
        limit: 1,
        include_domain_id: true,
        include_dismissed: true,
      });
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatchesDownload',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/matches/download',
    label: 'required params',
    run: async () => {
      const response =
        await client.domainSearch.listAccountsAccountBrandProtectionMatchesDownload('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionMatchesDownload',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/matches/download',
    label: 'all params',
    run: async () => {
      const response = await client.domainSearch.listAccountsAccountBrandProtectionMatchesDownload(
        'accountId',
        {
          id: 'id',
          offset: 1,
          limit: 1,
          include_domain_id: true,
          include_dismissed: true,
        },
      );
    },
  },

  {
    operation: 'deleteAccountsAccountIdBrandProtectionQueries',
    method: 'DELETE',
    path: '/accounts/{account_id}/brand-protection/queries',
    label: 'required params',
    run: async () => {
      await client.domainSearch.deleteAccountsAccountIDBrandProtectionQueries('accountId');
    },
  },

  {
    operation: 'deleteAccountsAccountIdBrandProtectionQueries',
    method: 'DELETE',
    path: '/accounts/{account_id}/brand-protection/queries',
    label: 'all params',
    run: async () => {
      await client.domainSearch.deleteAccountsAccountIDBrandProtectionQueries('accountId', {
        id: 'id',
        tag: 'tag',
        scan: true,
      });
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionQueries',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/queries',
    run: async () => {
      await client.domainSearch.listAccountsAccountBrandProtectionQueries('accountId');
    },
  },

  {
    operation: 'patchAccountsAccountIdBrandProtectionQueries',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/queries',
    label: 'required params',
    run: async () => {
      await client.domainSearch.patchAccountsAccountIDBrandProtectionQueries('accountId', {});
    },
  },

  {
    operation: 'patchAccountsAccountIdBrandProtectionQueries',
    method: 'PATCH',
    path: '/accounts/{account_id}/brand-protection/queries',
    label: 'all params',
    run: async () => {
      await client.domainSearch.patchAccountsAccountIDBrandProtectionQueries('accountId', {
        id: 0,
        scan: false,
        string_matches: [
          {
            pattern: '',
          },
        ],
        tag: '',
      });
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionQueries',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/queries',
    label: 'required params',
    run: async () => {
      await client.domainSearch.postAccountsAccountIDBrandProtectionQueries('accountId', {
        body: {},
      });
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionQueries',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/queries',
    label: 'all params',
    run: async () => {
      await client.domainSearch.postAccountsAccountIDBrandProtectionQueries('accountId', {
        id: 'id',
        tag: 'tag',
        scan: true,
        body: {},
      });
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionQueriesBulk',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/queries/bulk',
    run: async () => {
      await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesBulk('accountId', {});
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionQueriesQueryIdMatchesIdDismiss',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/queries/{query_id}/matches/{domain_id}/dismiss',
    run: async () => {
      await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismiss(1, {
        account_id: 'accountId',
        query_id: 1,
      });
    },
  },

  {
    operation: 'postAccountsAccountIdBrandProtectionQueriesQueryIdMatchesIdUndismiss',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/queries/{query_id}/matches/{domain_id}/undismiss',
    run: async () => {
      await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismiss(1, {
        account_id: 'accountId',
        query_id: 1,
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/accounts/{account_id}/brand-protection/search',
    run: async () => {
      await client.domainSearch.search('accountId');
    },
  },

  {
    operation: 'listAccountsAccountBrandProtectionTotalQueries',
    method: 'GET',
    path: '/accounts/{account_id}/brand-protection/total-queries',
    run: async () => {
      await client.domainSearch.listAccountsAccountBrandProtectionTotalQueries('accountId');
    },
  },

  {
    operation: 'accountsDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'required params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsDelete('accountId');
    },
  },

  {
    operation: 'accountsDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'all params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsDelete('accountId', {
        '': '_',
      });
    },
  },

  {
    operation: 'accountsGet',
    method: 'GET',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'required params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsGet('accountId');
    },
  },

  {
    operation: 'accountsGet',
    method: 'GET',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'all params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsGet('accountId', {
        '': '_',
      });
    },
  },

  {
    operation: 'accountsPost',
    method: 'POST',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'required params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsPost('accountId', {
        body: {},
      });
    },
  },

  {
    operation: 'accountsPost',
    method: 'POST',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'all params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsPost('accountId', {
        '': '_',
        body: {},
      });
    },
  },

  {
    operation: 'accountsPut',
    method: 'PUT',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'required params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsPut('accountId', {
        body: {},
      });
    },
  },

  {
    operation: 'accountsPut',
    method: 'PUT',
    path: '/accounts/{account_id}/browser-extension/config',
    label: 'all params',
    run: async () => {
      const response = await client.browserExtensionConfig.accountsPut('accountId', {
        '': '_',
        body: {},
      });
    },
  },

  {
    operation: 'accountsList',
    method: 'GET',
    path: '/accounts/{account_id}/browser-extension/config/inventories',
    label: 'required params',
    run: async () => {
      const response = await client.browserExtensionInventories.accountsList('accountId', {
        per_page: 50,
      });
    },
  },

  {
    operation: 'accountsList',
    method: 'GET',
    path: '/accounts/{account_id}/browser-extension/config/inventories',
    label: 'all params',
    run: async () => {
      const response = await client.browserExtensionInventories.accountsList('accountId', {
        '': '_',
        cursor: 'cursor',
        per_page: 50,
      });
    },
  },

  {
    operation: 'accountsGet',
    method: 'GET',
    path: '/accounts/{account_id}/browser-extension/config/inventories/{registration_id}',
    label: 'required params',
    run: async () => {
      const response = await client.browserExtensionInventories.accountsGet('registrationId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'accountsGet',
    method: 'GET',
    path: '/accounts/{account_id}/browser-extension/config/inventories/{registration_id}',
    label: 'all params',
    run: async () => {
      const response = await client.browserExtensionInventories.accountsGet('registrationId', {
        account_id: 'accountId',
        '': '_',
      });
    },
  },

  {
    operation: 'postAccessibilityTree',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/accessibilityTree',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postAccessibilityTree('accountId', {
        cacheTTL: 5,
        gotoOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postAccessibilityTree',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/accessibilityTree',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postAccessibilityTree('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        interestingOnly: false,
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        root: '',
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postContent',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/content',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postContent('accountId', {
        cacheTTL: 5,
        gotoOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postContent',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/content',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postContent('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postCrawl',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/crawl',
    run: async () => {
      const brapi = await client.brapi.postCrawl('accountId', {
        cacheTTL: 5,
      });
    },
  },

  {
    operation: 'deleteCancelCrawl',
    method: 'DELETE',
    path: '/accounts/{account_id}/browser-rendering/crawl/{job_id}',
    run: async () => {
      const brapi = await client.brapi.deleteCancelCrawl('jobId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveCrawlResult',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/crawl/{job_id}',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.retrieveCrawlResult('jobId', {
        account_id: 'accountId',
        cacheTTL: 5,
        cursor: 0,
        limit: 50,
      });
    },
  },

  {
    operation: 'retrieveCrawlResult',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/crawl/{job_id}',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.retrieveCrawlResult('jobId', {
        account_id: 'accountId',
        cacheTTL: 5,
        status: 'queued',
        cursor: 0,
        limit: 50,
      });
    },
  },

  {
    operation: 'listDevtoolsBrowserAcquire',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser',
    label: 'required params',
    run: async () => {
      const socket = client.brapi.listDevtoolsBrowserAcquire('accountId', {
        keep_alive: 60000,
        lab: false,
        recording: false,
      });
      try {
        // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
        // payload (`message`/`raw`). Leaving the socket open would keep the process alive.
        for await (const message of socket) {
          if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
        }
      } finally {
        socket.close();
      }
    },
  },

  {
    operation: 'listDevtoolsBrowserAcquire',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser',
    label: 'all params',
    run: async () => {
      const socket = client.brapi.listDevtoolsBrowserAcquire('accountId', {
        keep_alive: 60000,
        lab: false,
        recording: false,
        'cf-brapi-guardrails': 'eyJhbGxvd2VkRG9tYWlucyI6WyIqLmV4YW1wbGUuY29tIl19',
      });
      try {
        // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
        // payload (`message`/`raw`). Leaving the socket open would keep the process alive.
        for await (const message of socket) {
          if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
        }
      } finally {
        socket.close();
      }
    },
  },

  {
    operation: 'postDevtoolsAcquire',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postDevtoolsAcquire('accountId', {
        keep_alive: 60000,
        lab: false,
        targets: false,
        liveViewUrlExpiresInMs: 300000,
        recording: false,
      });
    },
  },

  {
    operation: 'postDevtoolsAcquire',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postDevtoolsAcquire('accountId', {
        keep_alive: 60000,
        lab: false,
        targets: false,
        liveViewUrlExpiresInMs: 300000,
        recording: false,
        guardrails: {
          allowedDomainSets: [''],
          allowedDomains: [''],
        },
      });
    },
  },

  {
    operation: 'deleteDevtoolsBrowserDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}',
    run: async () => {
      const brapi = await client.brapi.deleteDevtoolsBrowserDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveDevtoolsBrowser',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}',
    label: 'required params',
    run: async () => {
      const socket = client.brapi.retrieveDevtoolsBrowser('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        keep_alive: 60000,
        lab: false,
        recording: false,
      });
      try {
        // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
        // payload (`message`/`raw`). Leaving the socket open would keep the process alive.
        for await (const message of socket) {
          if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
        }
      } finally {
        socket.close();
      }
    },
  },

  {
    operation: 'retrieveDevtoolsBrowser',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}',
    label: 'all params',
    run: async () => {
      const socket = client.brapi.retrieveDevtoolsBrowser('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        keep_alive: 60000,
        lab: false,
        recording: false,
        'cf-brapi-guardrails': 'eyJtb2RlIjoicmVhZG9ubHkifQ',
      });
      try {
        // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
        // payload (`message`/`raw`). Leaving the socket open would keep the process alive.
        for await (const message of socket) {
          if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
        }
      } finally {
        socket.close();
      }
    },
  },

  {
    operation: 'listDevtoolsJson',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json',
    run: async () => {
      const brapi = await client.brapi.listDevtoolsJson('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        liveViewUrlExpiresInMs: 300000,
      });
    },
  },

  {
    operation: 'retrieveDevtoolsJsonActivate',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/activate/{target_id}',
    run: async () => {
      const brapi = await client.brapi.retrieveDevtoolsJsonActivate('targetId', {
        session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveDevtoolsJsonClose',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/close/{target_id}',
    run: async () => {
      const brapi = await client.brapi.retrieveDevtoolsJsonClose('targetId', {
        session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listDevtoolsJsonList',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/list',
    run: async () => {
      const brapi = await client.brapi.listDevtoolsJsonList('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        liveViewUrlExpiresInMs: 300000,
      });
    },
  },

  {
    operation: 'retrieveDevtoolsJsonTarget',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/list/{target_id}',
    run: async () => {
      const brapi = await client.brapi.retrieveDevtoolsJsonTarget('targetId', {
        account_id: 'accountId',
        session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'putDevtoolsJsonNew',
    method: 'PUT',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/new',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.putDevtoolsJsonNew('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        liveViewUrlExpiresInMs: 300000,
      });
    },
  },

  {
    operation: 'putDevtoolsJsonNew',
    method: 'PUT',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/new',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.putDevtoolsJsonNew('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        url: 'https://example.com',
        liveViewUrlExpiresInMs: 300000,
      });
    },
  },

  {
    operation: 'listDevtoolsJsonProtocol',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/protocol',
    run: async () => {
      const brapi = await client.brapi.listDevtoolsJsonProtocol('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listDevtoolsJsonVersion',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/version',
    run: async () => {
      const brapi = await client.brapi.listDevtoolsJsonVersion('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postDevtoolsLiveView',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/live_view',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postDevtoolsLiveView('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        expiresInMs: 300000,
        mode: 'devtools',
      });
    },
  },

  {
    operation: 'postDevtoolsLiveView',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/live_view',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postDevtoolsLiveView('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        expiresInMs: 300000,
        guardrails: {
          mode: 'readonly',
        },
        mode: 'devtools',
        targetId: '',
      });
    },
  },

  {
    operation: 'retrieveDevtoolsPage',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/page/{target_id}',
    label: 'required params',
    run: async () => {
      const socket = client.brapi.retrieveDevtoolsPage('targetId', {
        account_id: 'accountId',
        session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
      try {
        // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
        // payload (`message`/`raw`). Leaving the socket open would keep the process alive.
        for await (const message of socket) {
          if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
        }
      } finally {
        socket.close();
      }
    },
  },

  {
    operation: 'retrieveDevtoolsPage',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/page/{target_id}',
    label: 'all params',
    run: async () => {
      const socket = client.brapi.retrieveDevtoolsPage('targetId', {
        account_id: 'accountId',
        session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'cf-brapi-guardrails': 'eyJtb2RlIjoicmVhZG9ubHkifQ',
      });
      try {
        // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
        // payload (`message`/`raw`). Leaving the socket open would keep the process alive.
        for await (const message of socket) {
          if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
        }
      } finally {
        socket.close();
      }
    },
  },

  {
    operation: 'listDevtoolsSessionList',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/session',
    run: async () => {
      const brapi = await client.brapi.listDevtoolsSessionList('accountId', {
        limit: 200,
        offset: 0,
      });
    },
  },

  {
    operation: 'retrieveDevtoolsSessionDetails',
    method: 'GET',
    path: '/accounts/{account_id}/browser-rendering/devtools/session/{session_id}',
    run: async () => {
      const brapi = await client.brapi.retrieveDevtoolsSessionDetails(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: 'accountId',
        },
      );
    },
  },

  {
    operation: 'postJson',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/json',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postJson('accountId', {
        cacheTTL: 5,
        gotoOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postJson',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/json',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postJson('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        custom_ai: [
          {
            model: '',
          },
        ],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        prompt: '',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        response_format: {
          json_schema: {},
          type: '',
        },
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postLinks',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/links',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postLinks('accountId', {
        cacheTTL: 5,
        excludeExternalLinks: false,
        gotoOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        visibleLinksOnly: false,
      });
    },
  },

  {
    operation: 'postLinks',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/links',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postLinks('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        excludeExternalLinks: false,
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        visibleLinksOnly: false,
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postMarkdown',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/markdown',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postMarkdown('accountId', {
        cacheTTL: 5,
        gotoOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postMarkdown',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/markdown',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postMarkdown('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postPdf',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/pdf',
    label: 'required params',
    run: async () => {
      const response = await client.brapi.postPdf('accountId', {
        cacheTTL: 5,
        gotoOptions: {},
        pdfOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postPdf',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/pdf',
    label: 'all params',
    run: async () => {
      const response = await client.brapi.postPdf('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        pdfOptions: {},
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postScrape',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/scrape',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postScrape('accountId', {
        cacheTTL: 5,
        elements: [{ selector: 'h1' }],
        gotoOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postScrape',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/scrape',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postScrape('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        elements: [{ selector: 'h1' }],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postScreenshot',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/screenshot',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postScreenshot('accountId', {
        cacheTTL: 5,
        gotoOptions: {},
        screenshotOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postScreenshot',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/screenshot',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postScreenshot('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        screenshotOptions: {},
        scrollPage: false,
        selector: '',
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'postSnapshot',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/snapshot',
    label: 'required params',
    run: async () => {
      const brapi = await client.brapi.postSnapshot('accountId', {
        cacheTTL: 5,
        formats: ['content', 'screenshot'],
        gotoOptions: {},
        screenshotOptions: {},
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
      });
    },
  },

  {
    operation: 'postSnapshot',
    method: 'POST',
    path: '/accounts/{account_id}/browser-rendering/snapshot',
    label: 'all params',
    run: async () => {
      const brapi = await client.brapi.postSnapshot('accountId', {
        cacheTTL: 5,
        actionTimeout: 0,
        addScriptTag: [{}],
        addStyleTag: [{}],
        allowRequestPattern: [''],
        allowResourceTypes: ['document'],
        authenticate: {
          password: 'x',
          username: 'x',
        },
        bestAttempt: false,
        cookies: [
          {
            name: '',
            value: '',
          },
        ],
        emulateMediaType: '',
        formats: ['content', 'screenshot'],
        gotoOptions: {},
        html: '<h1>Hello World!</h1>',
        rejectRequestPattern: [''],
        rejectResourceTypes: ['document'],
        screenshotOptions: {},
        setExtraHTTPHeaders: {},
        setJavaScriptEnabled: false,
        url: 'https://www.example.com/',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        viewport: { height: 1080, width: 1920 },
        waitForSelector: {
          hidden: true,
          selector: '',
          timeout: 0,
          visible: true,
        },
        waitForTimeout: 0,
      });
    },
  },

  {
    operation: 'listVersion',
    method: 'GET',
    path: '/accounts/{account_id}/builds/builds',
    run: async () => {
      const build = await client.builds.listVersion('accountId', {
        version_ids: {},
      });
    },
  },

  {
    operation: 'listLatestScripts',
    method: 'GET',
    path: '/accounts/{account_id}/builds/builds/latest',
    run: async () => {
      const build = await client.builds.listLatestScripts('accountId', {
        external_script_ids: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/builds/builds/{build_uuid}',
    run: async () => {
      const build = await client.builds.retrieve('buildUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'cancelByUuid',
    method: 'PUT',
    path: '/accounts/{account_id}/builds/builds/{build_uuid}/cancel',
    run: async () => {
      const build = await client.builds.cancelByUUID('buildUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listLogs',
    method: 'GET',
    path: '/accounts/{account_id}/builds/builds/{build_uuid}/logs',
    label: 'required params',
    run: async () => {
      const build = await client.builds.listLogs('buildUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listLogs',
    method: 'GET',
    path: '/accounts/{account_id}/builds/builds/{build_uuid}/logs',
    label: 'all params',
    run: async () => {
      const build = await client.builds.listLogs('buildUuid', {
        account_id: 'accountId',
        cursor: {},
      });
    },
  },

  {
    operation: 'upsertRepo',
    method: 'PUT',
    path: '/accounts/{account_id}/builds/repos/connections',
    run: async () => {
      const repositoryConnection = await client.repositoryConnections.upsertRepo('accountId', {});
    },
  },

  {
    operation: 'deleteRepo',
    method: 'DELETE',
    path: '/accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}',
    run: async () => {
      await client.repositoryConnections.deleteRepo('repoConnectionUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listWorkerConfigAutofill',
    method: 'GET',
    path: '/accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill',
    label: 'required params',
    run: async () => {
      const gitHubIntegration = await client.gitHubIntegration.listWorkerConfigAutofill('repoId', {
        provider_type: {},
        provider_account_id: {},
        account_id: 'accountId',
        branch: {},
      });
    },
  },

  {
    operation: 'listWorkerConfigAutofill',
    method: 'GET',
    path: '/accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill',
    label: 'all params',
    run: async () => {
      const gitHubIntegration = await client.gitHubIntegration.listWorkerConfigAutofill('repoId', {
        provider_type: {},
        provider_account_id: {},
        account_id: 'accountId',
        branch: {},
        root_directory: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/builds/tokens',
    run: async () => {
      const buildToken = await client.buildTokens.list('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/builds/tokens',
    run: async () => {
      const buildToken = await client.buildTokens.create('accountId', {});
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/builds/tokens/{build_token_uuid}',
    run: async () => {
      await client.buildTokens.delete('buildTokenUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/builds/triggers',
    run: async () => {
      const trigger = await client.triggers.create('accountId', {});
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}',
    run: async () => {
      await client.triggers.delete('triggerUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}',
    run: async () => {
      const trigger = await client.triggers.update('triggerUuid', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'createManualBuild',
    method: 'POST',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}/builds',
    run: async () => {
      const trigger = await client.triggers.createManualBuild('triggerUuid', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'purgeBuildCache',
    method: 'POST',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache',
    run: async () => {
      await client.triggers.purgeBuildCache('triggerUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables',
    run: async () => {
      const environmentVariable = await client.environmentVariables.list('triggerUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'upsert',
    method: 'PATCH',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables',
    run: async () => {
      const environmentVariable = await client.environmentVariables.upsert('triggerUuid', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}',
    run: async () => {
      await client.environmentVariables.delete('environmentVariableKey', {
        account_id: 'accountId',
        trigger_uuid: 'triggerUuid',
      });
    },
  },

  {
    operation: 'createBuild',
    method: 'POST',
    path: '/accounts/{account_id}/builds/workers',
    run: async () => {
      const worker = await client.workers.createBuild('accountId', {
        git_repository: {
          branch: 'main',
          provider_account_id: 'cloudflare',
          provider_account_name: 'Cloudflare',
          provider_type: 'github',
          repo_id: 'workers-sdk',
          repo_name: 'workers-sdk',
        },
        production_settings: {
          build_caching_enabled: true,
          build_command: 'npm run build',
          build_token_uuid: '4b1e4d0f-6f2a-4c9d-9a3b-7c5e2f8a1d64',
          deploy_command: 'npx wrangler deploy',
          environment_variables: {},
          path_excludes: ['*.md'],
          path_includes: ['*'],
          root_directory: '/',
        },
        script_tag: 'my-worker',
      });
    },
  },

  {
    operation: 'listBuildsByScript',
    method: 'GET',
    path: '/accounts/{account_id}/builds/workers/{external_script_id}/builds',
    run: async () => {
      const worker = await client.workers.listBuildsByScript('externalScriptId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listTriggersByScript',
    method: 'GET',
    path: '/accounts/{account_id}/builds/workers/{external_script_id}/triggers',
    run: async () => {
      const worker = await client.workers.listTriggersByScript('externalScriptId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'deleteBuild',
    method: 'DELETE',
    path: '/accounts/{account_id}/builds/workers/{script_tag}',
    run: async () => {
      const worker = await client.workers.deleteBuild('scriptTag', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveBuild',
    method: 'GET',
    path: '/accounts/{account_id}/builds/workers/{script_tag}',
    run: async () => {
      const worker = await client.workers.retrieveBuild('scriptTag', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'updateBuild',
    method: 'PATCH',
    path: '/accounts/{account_id}/builds/workers/{script_tag}',
    run: async () => {
      const worker = await client.workers.updateBuild('scriptTag', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks',
    run: async () => {
      const deployHook = await client.deployHooks.list('scriptName', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks',
    run: async () => {
      const deployHook = await client.deployHooks.create('scriptName', {
        account_id: 'accountId',
        body: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}',
    run: async () => {
      const deployHook = await client.deployHooks.delete('deployHookUuid', {
        account_id: 'accountId',
        script_name: 'scriptName',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}',
    run: async () => {
      const deployHook = await client.deployHooks.retrieve('deployHookUuid', {
        account_id: 'accountId',
        script_name: 'scriptName',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}',
    run: async () => {
      const deployHook = await client.deployHooks.update('deployHookUuid', {
        account_id: 'accountId',
        script_name: 'scriptName',
        body: {},
      });
    },
  },

  {
    operation: 'bulkCreate',
    method: 'POST',
    path: '/accounts/{account_id}/bulk/subscriptions',
    label: 'required params',
    run: async () => {
      const response = await client.accountSubscriptions.bulkCreate('accountId', {});
    },
  },

  {
    operation: 'bulkCreate',
    method: 'POST',
    path: '/accounts/{account_id}/bulk/subscriptions',
    label: 'all params',
    run: async () => {
      const response = await client.accountSubscriptions.bulkCreate('accountId', {
        idemp_key: 'idempKey',
        coupon_code: '',
        payment_hold_id: 0,
        subscriptions: [{}],
        user_is_on_session: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/calls/apps',
    run: async () => {
      const response = await client.callsApps.list('accountId');
    },
  },

  {
    operation: 'createANew',
    method: 'POST',
    path: '/accounts/{account_id}/calls/apps',
    run: async () => {
      const response = await client.callsApps.createANew('accountId', {});
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/calls/apps/{app_id}',
    run: async () => {
      const response = await client.callsApps.delete('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveDetails',
    method: 'GET',
    path: '/accounts/{account_id}/calls/apps/{app_id}',
    run: async () => {
      const response = await client.callsApps.retrieveDetails('appId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateDetails',
    method: 'PUT',
    path: '/accounts/{account_id}/calls/apps/{app_id}',
    run: async () => {
      const response = await client.callsApps.updateDetails('appId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/calls/turn_keys',
    run: async () => {
      const response = await client.callsTurnKeys.list('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/calls/turn_keys',
    run: async () => {
      const response = await client.callsTurnKeys.create('accountId', {});
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/calls/turn_keys/{key_id}',
    run: async () => {
      const response = await client.callsTurnKeys.delete('keyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveDetails',
    method: 'GET',
    path: '/accounts/{account_id}/calls/turn_keys/{key_id}',
    run: async () => {
      const response = await client.callsTurnKeys.retrieveDetails('keyId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/accounts/{account_id}/calls/turn_keys/{key_id}',
    run: async () => {
      const response = await client.callsTurnKeys.update('keyId', {
        account_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel',
    label: 'required params',
    run: async () => {
      const response = await client.cloudflareTunnel.list('accountId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel',
    label: 'all params',
    run: async () => {
      const response = await client.cloudflareTunnel.list('accountId', {
        name: {},
        is_deleted: true,
        existed_at: {},
        uuid: {},
        was_active_at: '2009-11-10T23:00:00Z',
        was_inactive_at: '2009-11-10T23:00:00Z',
        include_prefix: 'vpc1-',
        exclude_prefix: 'vpc1-',
        status: {},
        per_page: {},
        page: {},
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/cfd_tunnel',
    label: 'required params',
    run: async () => {
      const response = await client.cloudflareTunnel.createA('accountId', {
        name: {},
      });
    },
  },

  {
    operation: 'createA',
    method: 'POST',
    path: '/accounts/{account_id}/cfd_tunnel',
    label: 'all params',
    run: async () => {
      const response = await client.cloudflareTunnel.createA('accountId', {
        config_src: {},
        name: {},
        tunnel_secret: {},
      });
    },
  },

  {
    operation: 'deleteA',
    method: 'DELETE',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
    run: async () => {
      const response = await client.cloudflareTunnel.deleteA('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveA',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
    run: async () => {
      const response = await client.cloudflareTunnel.retrieveA('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PATCH',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
    label: 'required params',
    run: async () => {
      const response = await client.cloudflareTunnel.updateA('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'updateA',
    method: 'PATCH',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
    label: 'all params',
    run: async () => {
      const response = await client.cloudflareTunnel.updateA('tunnelId', {
        account_id: {},
        name: {},
        tunnel_secret: {},
      });
    },
  },

  {
    operation: 'cleanUpConnections',
    method: 'DELETE',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections',
    label: 'required params',
    run: async () => {
      const response = await client.cloudflareTunnel.cleanUpConnections('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cleanUpConnections',
    method: 'DELETE',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections',
    label: 'all params',
    run: async () => {
      const response = await client.cloudflareTunnel.cleanUpConnections('tunnelId', {
        account_id: {},
        client_id: {},
      });
    },
  },

  {
    operation: 'listConnections',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections',
    run: async () => {
      const response = await client.cloudflareTunnel.listConnections('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'retrieveConnector',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}',
    run: async () => {
      const response = await client.cloudflareTunnel.retrieveConnector('connectorId', {
        account_id: {},
        tunnel_id: {},
      });
    },
  },

  {
    operation: 'createAManagementToken',
    method: 'POST',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management',
    run: async () => {
      const response = await client.cloudflareTunnel.createAManagementToken('tunnelId', {
        account_id: {},
        resources: [{}],
      });
    },
  },

  {
    operation: 'listAToken',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/token',
    run: async () => {
      const response = await client.cloudflareTunnel.listAToken('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations',
    run: async () => {
      const response = await client.cloudflareTunnelConfiguration.list('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'put',
    method: 'PUT',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations',
    label: 'required params',
    run: async () => {
      const response = await client.cloudflareTunnelConfiguration.put('tunnelId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'put',
    method: 'PUT',
    path: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations',
    label: 'all params',
    run: async () => {
      const response = await client.cloudflareTunnelConfiguration.put('tunnelId', {
        account_id: {},
        config: {},
      });
    },
  },

  {
    operation: 'accountsWidgetsList',
    method: 'GET',
    path: '/accounts/{account_id}/challenges/widgets',
    label: 'required params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetsList('accountId', {
        page: 1,
        per_page: 25,
      });
    },
  },

  {
    operation: 'accountsWidgetsList',
    method: 'GET',
    path: '/accounts/{account_id}/challenges/widgets',
    label: 'all params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetsList('accountId', {
        page: 1,
        per_page: 25,
        order: 'id',
        direction: 'asc',
        filter: 'name:my-widget',
      });
    },
  },

  {
    operation: 'accountsWidgetCreate',
    method: 'POST',
    path: '/accounts/{account_id}/challenges/widgets',
    label: 'required params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetCreate('accountId', {
        page: 1,
        per_page: 25,
        domains: {},
        mode: {},
        name: {},
      });
    },
  },

  {
    operation: 'accountsWidgetCreate',
    method: 'POST',
    path: '/accounts/{account_id}/challenges/widgets',
    label: 'all params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetCreate('accountId', {
        page: 1,
        per_page: 25,
        order: 'id',
        direction: 'asc',
        filter: 'name:my-widget',
        bot_fight_mode: {},
        clearance_level: {},
        domains: {},
        ephemeral_id: {},
        mode: {},
        name: {},
        offlabel: {},
        region: {},
      });
    },
  },

  {
    operation: 'accountsWidgetDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/challenges/widgets/{sitekey}',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetDelete('sitekey', {
        account_id: {},
      });
    },
  },

  {
    operation: 'accountsWidgetGet',
    method: 'GET',
    path: '/accounts/{account_id}/challenges/widgets/{sitekey}',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetGet('sitekey', {
        account_id: {},
      });
    },
  },

  {
    operation: 'accountsWidgetUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/challenges/widgets/{sitekey}',
    label: 'required params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetUpdate('sitekey', {
        account_id: {},
        domains: {},
        mode: {},
        name: {},
      });
    },
  },

  {
    operation: 'accountsWidgetUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/challenges/widgets/{sitekey}',
    label: 'all params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetUpdate('sitekey', {
        account_id: {},
        bot_fight_mode: {},
        clearance_level: {},
        domains: {},
        ephemeral_id: {},
        mode: {},
        name: {},
        offlabel: {},
        region: {},
      });
    },
  },

  {
    operation: 'accountsWidgetRotateSecret',
    method: 'POST',
    path: '/accounts/{account_id}/challenges/widgets/{sitekey}/rotate_secret',
    label: 'required params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetRotateSecret('sitekey', {
        account_id: {},
      });
    },
  },

  {
    operation: 'accountsWidgetRotateSecret',
    method: 'POST',
    path: '/accounts/{account_id}/challenges/widgets/{sitekey}/rotate_secret',
    label: 'all params',
    run: async () => {
      const turnstile = await client.turnstile.accountsWidgetRotateSecret('sitekey', {
        account_id: {},
        invalidate_immediately: {},
      });
    },
  },

  {
    operation: 'retrieveGetBanners',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/banner/{config_id}',
    run: async () => {
      const scan = await client.scans.retrieveGetBanners('configId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postPost',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/binary',
    run: async () => {
      const binDB = await client.binDB.postPost('accountId', {
        file: new File(['file'], 'file'),
      });
    },
  },

  {
    operation: 'retrieveGetBinary',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/binary/{hash}',
    run: async () => {
      await client.binDB.retrieveGetBinary('hash', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listListGet',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events',
    label: 'required params',
    run: async () => {
      const event = await client.event.listListGet('accountId');
    },
  },

  {
    operation: 'listListGet',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events',
    label: 'all params',
    run: async () => {
      const event = await client.event.listListGet('accountId', {
        cursor:
          'eyJ2ZXJzaW9uIjoxLCJwb3NpdGlvbiI6eyJkYXRlIjoiMjAyNC0wMS0xMlQxMDowMDowMFoiLCJ1dWlkIjoiYWJjMTIzIn19',
        search: [
          {
            field: 'attacker',
            op: 'equals',
            value: 'x',
          },
        ],
        page: 1,
        pageSize: 1,
        orderBy: 'orderBy',
        order: 'asc',
        datasetId: ['datasetId'],
        forceRefresh: true,
        format: 'json',
        cache: 'from-graph',
      });
    },
  },

  {
    operation: 'listAggregate',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/aggregate',
    label: 'required params',
    run: async () => {
      const event = await client.event.listAggregate('accountId', {
        aggregateBy: 'aggregateBy',
        limit: 100,
      });
    },
  },

  {
    operation: 'listAggregate',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/aggregate',
    label: 'all params',
    run: async () => {
      const event = await client.event.listAggregate('accountId', {
        aggregateBy: 'aggregateBy',
        datasetId: ['datasetId'],
        startDate: 'startDate',
        endDate: 'endDate',
        groupByDate: true,
        limit: 100,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/create',
    label: 'required params',
    run: async () => {
      const event = await client.event.create('accountId', {
        category: 'Domain Resolution',
        date: '2022-04-01T00:00:00Z',
        event: 'An attacker registered the domain domain.com',
        raw: {
          data: {},
        },
        tlp: 'amber',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/create',
    label: 'all params',
    run: async () => {
      const event = await client.event.create('accountId', {
        accountId: 123456,
        attacker: 'Flying Yeti',
        attackerCountry: 'CN',
        category: 'Domain Resolution',
        datasetId: 'durableObjectName',
        date: '2022-04-01T00:00:00Z',
        event: 'An attacker registered the domain domain.com',
        indicator: 'domain.com',
        indicatorType: 'domain',
        indicators: [
          {
            indicatorType: 'domain',
            value: 'malicious.com',
          },
        ],
        insight: 'This domain was likely registered for phishing purposes',
        raw: {
          data: {},
        },
        source: {
          resourceId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          resourceType: 'article',
          system: 'threat-signals',
        },
        tags: ['malware'],
        targetCountry: 'US',
        targetIndustry: 'Agriculture',
        tlp: 'amber',
      });
    },
  },

  {
    operation: 'postCreateBulk',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/create/bulk',
    label: 'required params',
    run: async () => {
      const event = await client.event.postCreateBulk('accountId', {
        data: [
          {
            category: 'Domain Resolution',
            date: '2022-04-01T00:00:00Z',
            event: 'An attacker registered the domain domain.com',
            raw: {
              data: {},
            },
            tlp: 'amber',
          },
        ],
        datasetId: 'durableObjectName',
      });
    },
  },

  {
    operation: 'postCreateBulk',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/create/bulk',
    label: 'all params',
    run: async () => {
      const event = await client.event.postCreateBulk('accountId', {
        data: [
          {
            category: 'Domain Resolution',
            date: '2022-04-01T00:00:00Z',
            event: 'An attacker registered the domain domain.com',
            raw: {
              data: {},
            },
            tlp: 'amber',
          },
        ],
        datasetId: 'durableObjectName',
        includeCreatedEvents: false,
      });
    },
  },

  {
    operation: 'postDosCreateBulkWithRelationships',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/create/bulk/relationships',
    run: async () => {
      const event = await client.event.postDosCreateBulkWithRelationships('accountId', {
        data: [
          {
            category: 'Domain Resolution',
            date: '2022-04-01T00:00:00Z',
            event: 'An attacker registered the domain domain.com',
            raw: {
              data: {},
            },
            tlp: 'amber',
          },
        ],
        datasetId: 'durableObjectName',
      });
    },
  },

  {
    operation: 'postCopyToNewDs',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy',
    label: 'required params',
    run: async () => {
      const event = await client.event.postCopyToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        destDatasetId: '12345678-1234-1234-1234-1234567890ab',
        eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
      });
    },
  },

  {
    operation: 'postCopyToNewDs',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy',
    label: 'all params',
    run: async () => {
      const event = await client.event.postCopyToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        keepRawData: true,
        destDatasetId: '12345678-1234-1234-1234-1234567890ab',
        eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
      });
    },
  },

  {
    operation: 'retrieveRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/events/{event_id}',
    run: async () => {
      const event = await client.event.retrieveRead('eventId', {
        account_id: 'accountId',
        dataset_id: 'datasetId',
      });
    },
  },

  {
    operation: 'postMoveToNewDs',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move',
    label: 'required params',
    run: async () => {
      const event = await client.event.postMoveToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        destDatasetId: '12345678-1234-1234-1234-1234567890ab',
        eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
      });
    },
  },

  {
    operation: 'postMoveToNewDs',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move',
    label: 'all params',
    run: async () => {
      const event = await client.event.postMoveToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        keepRawData: true,
        destDatasetId: '12345678-1234-1234-1234-1234567890ab',
        eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
      });
    },
  },

  {
    operation: 'deleteTagDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}',
    run: async () => {
      const event = await client.event.deleteTagDelete('eventId', {
        account_id: 'accountId',
        tags: ['malware'],
      });
    },
  },

  {
    operation: 'create4',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}/create',
    run: async () => {
      const event = await client.event.create4('eventId', {
        account_id: 'accountId',
        tags: ['botnet'],
      });
    },
  },

  {
    operation: 'postGraphQl',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/graphql',
    run: async () => {
      const event = await client.event.postGraphQl('accountId');
    },
  },

  {
    operation: 'listQueryList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/queries',
    run: async () => {
      const event = await client.event.listQueryList('accountId');
    },
  },

  {
    operation: 'create2',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/create',
    label: 'required params',
    run: async () => {
      const event = await client.event.create2('accountId', {
        alert_enabled: false,
        alert_rollup_enabled: false,
        name: '',
        query_json: '',
        rule_enabled: false,
      });
    },
  },

  {
    operation: 'create2',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/create',
    label: 'all params',
    run: async () => {
      const event = await client.event.create2('accountId', {
        alert_enabled: false,
        alert_rollup_enabled: false,
        name: '',
        query_json: '',
        rule_enabled: false,
        rule_scope: '',
      });
    },
  },

  {
    operation: 'deleteQueryDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/{query_id}',
    run: async () => {
      await client.event.deleteQueryDelete(1, {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveQueryRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/{query_id}',
    run: async () => {
      const event = await client.event.retrieveQueryRead(1, {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchQueryUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/{query_id}',
    label: 'required params',
    run: async () => {
      const event = await client.event.patchQueryUpdate(1, {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchQueryUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/{query_id}',
    label: 'all params',
    run: async () => {
      const event = await client.event.patchQueryUpdate(1, {
        account_id: 'accountId',
        alert_enabled: false,
        alert_rollup_enabled: false,
        name: '',
        query_json: '',
        rule_enabled: false,
        rule_scope: '',
      });
    },
  },

  {
    operation: 'postQueryUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/{query_id}',
    label: 'required params',
    run: async () => {
      const event = await client.event.postQueryUpdate(1, {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postQueryUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/queries/{query_id}',
    label: 'all params',
    run: async () => {
      const event = await client.event.postQueryUpdate(1, {
        account_id: 'accountId',
        alert_enabled: false,
        alert_rollup_enabled: false,
        name: '',
        query_json: '',
        rule_enabled: false,
        rule_scope: '',
      });
    },
  },

  {
    operation: 'retrieveRawReadDs',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}',
    run: async () => {
      const event = await client.event.retrieveRawReadDS('eventId', {
        account_id: 'accountId',
        dataset_id: 'datasetId',
      });
    },
  },

  {
    operation: 'deleteReferenceDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/relate/{event_id}',
    run: async () => {
      const event = await client.event.deleteReferenceDelete('eventId', {
        account_id: 'accountId',
        events: ['88888888-4444-4444-4444-121212121212'],
      });
    },
  },

  {
    operation: 'create5',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/relate/{event_id}/create',
    run: async () => {
      const event = await client.event.create5('eventId', {
        account_id: 'accountId',
        events: ['88888888-4444-4444-4444-121212121212'],
      });
    },
  },

  {
    operation: 'create3',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/relationships/create',
    run: async () => {
      const event = await client.event.create3('accountId', {
        childIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        datasetId: '',
        parentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        relationshipType: 'related_to',
      });
    },
  },

  {
    operation: 'patchUpdateBulk',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/update/bulk',
    run: async () => {
      const event = await client.event.patchUpdateBulk('accountId', {
        datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
        eventIds: ['uuid-1', 'uuid-2', 'uuid-3'],
        updates: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/{dataset_id}/delete',
    run: async () => {
      const response = await client.event.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        eventIds: ['eventId'],
      });
    },
  },

  {
    operation: 'retrieveReadDeprecated',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}',
    run: async () => {
      const event = await client.event.retrieveReadDeprecated('eventId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}',
    label: 'required params',
    run: async () => {
      const event = await client.event.patchUpdate('eventId', {
        account_id: 'accountId',
        datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}',
    label: 'all params',
    run: async () => {
      const event = await client.event.patchUpdate('eventId', {
        account_id: 'accountId',
        attacker: 'Flying Yeti',
        attackerCountry: 'CN',
        category: 'Domain Resolution',
        createdAt: '2025-12-19T00:00:00Z',
        datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
        date: '2022-04-01T00:00:00Z',
        event: 'An attacker registered the domain domain.com',
        indicator: 'domain2.com',
        indicatorType: 'domain',
        insight: 'new insight',
        raw: {
          data: {},
          source: 'example.com',
          tlp: 'amber',
        },
        targetCountry: 'US',
        targetIndustry: 'Insurance',
        tlp: 'amber',
      });
    },
  },

  {
    operation: 'postUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}',
    label: 'required params',
    run: async () => {
      const event = await client.event.postUpdate('eventId', {
        account_id: 'accountId',
        datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
      });
    },
  },

  {
    operation: 'postUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}',
    label: 'all params',
    run: async () => {
      const event = await client.event.postUpdate('eventId', {
        account_id: 'accountId',
        attacker: 'Flying Yeti',
        attackerCountry: 'CN',
        category: 'Domain Resolution',
        createdAt: '2025-12-19T00:00:00Z',
        datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
        date: '2022-04-01T00:00:00Z',
        event: 'An attacker registered the domain domain.com',
        indicator: 'domain2.com',
        indicatorType: 'domain',
        insight: 'new insight',
        raw: {
          data: {},
          source: 'example.com',
          tlp: 'amber',
        },
        targetCountry: 'US',
        targetIndustry: 'Insurance',
        tlp: 'amber',
      });
    },
  },

  {
    operation: 'retrieveRawRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
    run: async () => {
      const event = await client.event.retrieveRawRead('rawId', {
        account_id: 'accountId',
        event_id: 'eventId',
      });
    },
  },

  {
    operation: 'patchRawUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
    label: 'required params',
    run: async () => {
      const event = await client.event.patchRawUpdate('rawId', {
        account_id: 'accountId',
        event_id: 'eventId',
      });
    },
  },

  {
    operation: 'patchRawUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
    label: 'all params',
    run: async () => {
      const event = await client.event.patchRawUpdate('rawId', {
        account_id: 'accountId',
        event_id: 'eventId',
        data: {},
        source: 'example.com',
        tlp: 'amber',
      });
    },
  },

  {
    operation: 'postRawUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
    label: 'required params',
    run: async () => {
      const event = await client.event.postRawUpdate('rawId', {
        account_id: 'accountId',
        event_id: 'eventId',
      });
    },
  },

  {
    operation: 'postRawUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
    label: 'all params',
    run: async () => {
      const event = await client.event.postRawUpdate('rawId', {
        account_id: 'accountId',
        event_id: 'eventId',
        data: {},
        source: 'example.com',
        tlp: 'amber',
      });
    },
  },

  {
    operation: 'listRelationships',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/relationships',
    label: 'required params',
    run: async () => {
      const event = await client.event.listRelationships('eventId', {
        account_id: 'accountId',
        direction: 'both',
        datasetId: 'datasetId',
        includeParent: true,
      });
    },
  },

  {
    operation: 'listRelationships',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/{event_id}/relationships',
    label: 'all params',
    run: async () => {
      const event = await client.event.listRelationships('eventId', {
        account_id: 'accountId',
        direction: 'both',
        maxDepth: 1,
        relationshipTypes: 'relationshipTypes',
        indicatorTypeIds: ['indicatorTypeId'],
        datasetId: 'datasetId',
        includeParent: true,
        page: 1,
        pageSize: 1,
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/attackers',
    label: 'required params',
    run: async () => {
      const attacker = await client.attacker.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/attackers',
    label: 'all params',
    run: async () => {
      const attacker = await client.attacker.listList('accountId', {
        datasetIds: ['datasetId'],
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/categories',
    label: 'required params',
    run: async () => {
      const category = await client.category.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/categories',
    label: 'all params',
    run: async () => {
      const category = await client.category.listList('accountId', {
        datasetIds: ['datasetId'],
      });
    },
  },

  {
    operation: 'listListComplete',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/catalog',
    run: async () => {
      const category = await client.category.listListComplete('accountId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/create',
    label: 'required params',
    run: async () => {
      const category = await client.category.create('accountId', {
        killChain: 0,
        name: 'name',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/create',
    label: 'all params',
    run: async () => {
      const category = await client.category.create('accountId', {
        killChain: 0,
        mitreAttack: ['T1234'],
        mitreCapec: ['123'],
        name: 'name',
        shortname: 'shortname',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
    run: async () => {
      const category = await client.category.deleteDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
    run: async () => {
      const category = await client.category.retrieveRead('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
    label: 'required params',
    run: async () => {
      const category = await client.category.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
    label: 'all params',
    run: async () => {
      const category = await client.category.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        killChain: 0,
        mitreAttack: ['T1234'],
        mitreCapec: ['123'],
        name: 'name',
        shortname: 'shortname',
      });
    },
  },

  {
    operation: 'postUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
    label: 'required params',
    run: async () => {
      const category = await client.category.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
    label: 'all params',
    run: async () => {
      const category = await client.category.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        killChain: 0,
        mitreAttack: ['T1234'],
        mitreCapec: ['123'],
        name: 'name',
        shortname: 'shortname',
      });
    },
  },

  {
    operation: 'listRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/countries',
    run: async () => {
      const country = await client.country.listRead('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset',
    label: 'required params',
    run: async () => {
      const dataset = await client.dataset.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset',
    label: 'all params',
    run: async () => {
      const dataset = await client.dataset.listList('accountId', {
        includeDeleted: true,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/create',
    run: async () => {
      const dataset = await client.dataset.create('accountId', {
        isPublic: false,
        name: 'x',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}',
    run: async () => {
      const dataset = await client.dataset.deleteDelete('datasetId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}',
    run: async () => {
      const dataset = await client.dataset.retrieveRead('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}',
    run: async () => {
      const dataset = await client.dataset.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        isPublic: false,
        name: 'x',
      });
    },
  },

  {
    operation: 'postUpdate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}',
    run: async () => {
      const dataset = await client.dataset.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        isPublic: false,
        name: 'x',
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups',
    run: async () => {
      const group = await client.groups.listList('accountId');
    },
  },

  {
    operation: 'postCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups',
    run: async () => {
      const group = await client.groups.postCreate('accountId', {
        description: 'Cloudforce subscribers',
        name: 'cloudforce-subscribers',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}',
    run: async () => {
      const group = await client.groups.deleteDelete('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}',
    run: async () => {
      const group = await client.groups.retrieveRead('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'putUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}',
    run: async () => {
      const group = await client.groups.putUpdate('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
        description: 'Cloudforce subscribers',
        name: 'cloudforce-subscribers',
      });
    },
  },

  {
    operation: 'listMemberList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members',
    run: async () => {
      const group = await client.groups.listMemberList('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postMemberCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members',
    label: 'required params',
    run: async () => {
      const group = await client.groups.postMemberCreate('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postMemberCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members',
    label: 'all params',
    run: async () => {
      const group = await client.groups.postMemberCreate('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
        accountId: '123',
        accountTag: '5e785ae7a11e4c3c8df4bce13f1b9c02',
      });
    },
  },

  {
    operation: 'deleteMemberDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members/{member_id}',
    run: async () => {
      const group = await client.groups.deleteMemberDelete('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
        group_id: '12345678-1234-1234-1234-1234567890ab',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicatorTypes/create',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicators.create('datasetId', {
        account_id: 'accountId',
        indicatorType: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicatorTypes/create',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicators.create('datasetId', {
        account_id: 'accountId',
        description: '',
        indicatorType: 'x',
      });
    },
  },

  {
    operation: 'listListLegacy',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.listListLegacy('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listListLegacy',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.listListLegacy('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        page: 1,
        pageSize: 1,
        name: 'name',
        indicatorType: 'indicatorType',
        relatedEvent: ['relatedEvent'],
      });
    },
  },

  {
    operation: 'postCreateBulk',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/bulk',
    label: 'required params',
    run: async () => {
      const response = await client.indicator.postCreateBulk('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        indicators: [
          {
            indicatorType: 'domain',
            value: 'malicious-domain.com',
          },
        ],
      });
    },
  },

  {
    operation: 'postCreateBulk',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/bulk',
    label: 'all params',
    run: async () => {
      const response = await client.indicator.postCreateBulk('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        autoCreateType: false,
        indicators: [
          {
            indicatorType: 'domain',
            value: 'malicious-domain.com',
          },
        ],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/create',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        indicatorType: 'domain',
        value: 'malicious-domain.com',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/create',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        autoCreateType: false,
        indicatorType: 'domain',
        relatedEvents: [
          {
            datasetId: 'dataset-uuid-123',
            eventId: 'event-uuid-456',
          },
        ],
        tags: [''],
        tlp: 'AMBER',
        value: 'malicious-domain.com',
      });
    },
  },

  {
    operation: 'listTagsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/tags',
    run: async () => {
      const indicator = await client.indicator.listTagsList('datasetId', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}',
    run: async () => {
      const indicator = await client.indicator.deleteDelete('indicatorId', {
        account_id: 'accountId',
        dataset_id: 'datasetId',
      });
    },
  },

  {
    operation: 'retrieveRead',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}',
    run: async () => {
      const indicator = await client.indicator.retrieveRead('indicatorId', {
        account_id: 'accountId',
        dataset_id: 'datasetId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.patchUpdate('indicatorId', {
        account_id: 'accountId',
        dataset_id: 'datasetId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.patchUpdate('indicatorId', {
        account_id: 'accountId',
        dataset_id: 'datasetId',
        indicatorType: 'domain',
        relatedEvents: [
          {
            datasetId: 'dataset-uuid-123',
            eventId: 'event-uuid-456',
          },
        ],
        tags: [''],
        tlp: 'RED',
        value: 'updated-domain.com',
      });
    },
  },

  {
    operation: 'listRelationshipsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.listRelationshipsList('indicatorId', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        pageSize: 25,
      });
    },
  },

  {
    operation: 'listRelationshipsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.listRelationshipsList('indicatorId', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search: [
          {
            field: '',
            op: 'equals',
          },
        ],
        expand: ['expand'],
        cursor: 'cursor',
        pageSize: 25,
      });
    },
  },

  {
    operation: 'postRelationshipCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.postRelationshipCreate('indicatorId', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        targetId: 'x',
        targetType: 'event',
        type: 'related-to',
      });
    },
  },

  {
    operation: 'postRelationshipCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.postRelationshipCreate('indicatorId', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        confidence: 0,
        metadata: {},
        targetId: 'x',
        targetType: 'event',
        type: 'related-to',
      });
    },
  },

  {
    operation: 'deleteRelationshipDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships/{rel_uuid}',
    run: async () => {
      const indicator = await client.indicator.deleteRelationshipDelete(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: 'accountId',
          dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          indicator_id: 'indicatorId',
        },
      );
    },
  },

  {
    operation: 'patchRelationshipUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships/{rel_uuid}',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.patchRelationshipUpdate(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: 'accountId',
          dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          indicator_id: 'indicatorId',
        },
      );
    },
  },

  {
    operation: 'patchRelationshipUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships/{rel_uuid}',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.patchRelationshipUpdate(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: 'accountId',
          dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          indicator_id: 'indicatorId',
          confidence: 0,
          metadata: {},
          type: 'x',
        },
      );
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicators',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicators',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.listList('accountId', {
        datasetIds: ['datasetId'],
        page: 1,
        pageSize: 1,
        search: [
          {
            field: 'value',
            op: 'contains',
            value: 'malicious',
          },
        ],
        name: 'name',
        indicatorType: 'indicatorType',
        relatedEvents: ['relatedEvent'],
        tags: ['tag'],
        tagSearch: [
          {
            field: 'originCountryISO',
            op: 'in',
          },
        ],
        createdAfter: '2024-01-01T00:00:00.000Z',
        createdBefore: '2024-01-01T00:00:00.000Z',
        relatedEventsLimit: 2,
        includeTags: true,
        includeTotalCount: true,
        format: 'json',
        cache: 'from-graph',
        cursor: 'cursor',
      });
    },
  },

  {
    operation: 'listAggregate',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicators/aggregate',
    label: 'required params',
    run: async () => {
      const indicator = await client.indicator.listAggregate('accountId', {
        aggregateBy: 'aggregateBy',
        measure: 'indicators',
        limit: 10,
      });
    },
  },

  {
    operation: 'listAggregate',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicators/aggregate',
    label: 'all params',
    run: async () => {
      const indicator = await client.indicator.listAggregate('accountId', {
        aggregateBy: 'aggregateBy',
        measure: 'indicators',
        tagUuid: 'tagUuid',
        datasetIds: ['datasetId'],
        createdAfter: '2024-01-01T00:00:00.000Z',
        createdBefore: '2024-01-01T00:00:00.000Z',
        eventDateAfter: 'eventDateAfter',
        eventDateBefore: 'eventDateBefore',
        limit: 10,
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions',
    run: async () => {
      const permission = await client.permissions.listList('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'postCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions',
    run: async () => {
      const permission = await client.permissions.postCreate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        role: 'read',
        subjectId: '123',
        subjectType: 'account',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}',
    run: async () => {
      const permission = await client.permissions.deleteDelete('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'putUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}',
    run: async () => {
      const permission = await client.permissions.putUpdate('12345678-1234-1234-1234-1234567890ab', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        role: 'read',
      });
    },
  },

  {
    operation: 'listDatasetIndicatorsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.listDatasetIndicatorsList('tagUuid', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'listDatasetIndicatorsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.listDatasetIndicatorsList('tagUuid', {
        account_id: 'accountId',
        dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        page: 1,
        pageSize: 1,
        indicatorType: 'indicatorType',
        relatedEvent: ['relatedEvent'],
        search: [
          {
            field: 'value',
            op: 'contains',
            value: 'malicious',
          },
        ],
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.listList('accountId', {
        page: 1,
        pageSize: 1,
        search: 'search',
        categoryUuid: 'categoryUuid',
        filters: [
          {
            field: 'value',
            op: 'in',
          },
        ],
        cache: 'from-graph',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/create',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.create('accountId', {
        value: 'APT28',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/create',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.create('accountId', {
        activeDuration: '',
        actorCategory: '',
        aliasGroupNames: [''],
        aliasGroupNamesInternal: [''],
        aliases: [
          {
            value: 'Fancy Bear',
          },
        ],
        attributionOrganization: '',
        categoryUuid: '12345678-1234-1234-1234-1234567890ab',
        confidence: 8,
        dateOfDiscovery: '2024-01-15T00:00:00Z',
        description: 'A suspected state-sponsored group.',
        externalReferenceLinks: [''],
        externalReferences: [
          {
            url: 'https://example.com/report',
          },
        ],
        internalAliases: [
          {
            value: 'Fancy Bear',
          },
        ],
        internalDescription: '',
        lastSeen: '',
        motive: '',
        opsecLevel: '',
        originCountryISO: '',
        priority: 0,
        properties: {},
        sophisticationLevel: '',
        tlp: 'amber',
        value: 'APT28',
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}',
    run: async () => {
      const tag = await client.tag.deleteDelete('tagUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveDetail',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}',
    run: async () => {
      const tag = await client.tag.retrieveDetail('tagUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.patchUpdate('tagUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.patchUpdate('tagUuid', {
        account_id: 'accountId',
        activeDuration: '',
        actorCategory: '',
        aliasGroupNames: [''],
        aliasGroupNamesInternal: [''],
        aliases: [
          {
            value: 'Fancy Bear',
          },
        ],
        attributionOrganization: '',
        categoryUuid: '12345678-1234-1234-1234-1234567890ab',
        confidence: 8,
        dateOfDiscovery: '2024-01-15T00:00:00Z',
        description: '',
        externalReferenceLinks: [''],
        externalReferences: [
          {
            url: 'https://example.com/report',
          },
        ],
        internalAliases: [
          {
            value: 'Fancy Bear',
          },
        ],
        internalDescription: '',
        lastSeen: '',
        motive: '',
        opsecLevel: '',
        originCountryISO: '',
        priority: 0,
        properties: {},
        sophisticationLevel: '',
        tlp: 'amber',
        value: 'APT28',
      });
    },
  },

  {
    operation: 'listIndicatorsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.listIndicatorsList('tagUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'listIndicatorsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.listIndicatorsList('tagUuid', {
        account_id: 'accountId',
        datasetIds: ['datasetId'],
        page: 1,
        pageSize: 1,
        indicatorType: 'indicatorType',
        relatedEvent: ['relatedEvent'],
        search: [
          {
            field: 'value',
            op: 'contains',
            value: 'malicious',
          },
        ],
      });
    },
  },

  {
    operation: 'listRelationshipsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.listRelationshipsList('tagUuid', {
        account_id: 'accountId',
        pageSize: 25,
      });
    },
  },

  {
    operation: 'listRelationshipsList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.listRelationshipsList('tagUuid', {
        account_id: 'accountId',
        datasets: ['dataset'],
        search: [
          {
            field: '',
            op: 'equals',
          },
        ],
        expand: ['expand'],
        cursor: 'cursor',
        pageSize: 25,
      });
    },
  },

  {
    operation: 'postRelationshipCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.postRelationshipCreate('tagUuid', {
        account_id: 'accountId',
        datasetId: 'x',
        targetId: 'x',
        targetType: 'event',
        type: 'attributed-to',
      });
    },
  },

  {
    operation: 'postRelationshipCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.postRelationshipCreate('tagUuid', {
        account_id: 'accountId',
        confidence: 0,
        datasetId: 'x',
        metadata: {},
        targetId: 'x',
        targetType: 'event',
        type: 'attributed-to',
      });
    },
  },

  {
    operation: 'deleteRelationshipDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships/{rel_uuid}',
    run: async () => {
      const tag = await client.tag.deleteRelationshipDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        tag_uuid: 'tagUuid',
        datasetId: 'datasetId',
      });
    },
  },

  {
    operation: 'patchRelationshipUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships/{rel_uuid}',
    label: 'required params',
    run: async () => {
      const tag = await client.tag.patchRelationshipUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        tag_uuid: 'tagUuid',
        datasetId: 'datasetId',
      });
    },
  },

  {
    operation: 'patchRelationshipUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships/{rel_uuid}',
    label: 'all params',
    run: async () => {
      const tag = await client.tag.patchRelationshipUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        account_id: 'accountId',
        tag_uuid: 'tagUuid',
        datasetId: 'datasetId',
        confidence: 0,
        metadata: {},
        type: 'x',
      });
    },
  },

  {
    operation: 'listListDataset',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries',
    run: async () => {
      const targetIndustry = await client.targetIndustry.listListDataset(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          account_id: 'accountId',
        },
      );
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/targetIndustries',
    label: 'required params',
    run: async () => {
      const targetIndustry = await client.targetIndustry.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/targetIndustries',
    label: 'all params',
    run: async () => {
      const targetIndustry = await client.targetIndustry.listList('accountId', {
        datasetIds: ['datasetId'],
      });
    },
  },

  {
    operation: 'listListComplete',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog',
    run: async () => {
      const targetIndustry = await client.targetIndustry.listListComplete('accountId');
    },
  },

  {
    operation: 'postPopulate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/datasets/populate',
    run: async () => {
      const dataset = await client.datasets.postPopulate('accountId');
    },
  },

  {
    operation: 'listGraph',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/graph',
    label: 'required params',
    run: async () => {
      const event = await client.events.listGraph('accountId');
    },
  },

  {
    operation: 'listGraph',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/graph',
    label: 'all params',
    run: async () => {
      const event = await client.events.listGraph('accountId', {
        seeds: ['seed'],
        direction: 'direction',
        hydration: 'hydration',
        limit: 1,
        max_nodes: 1,
        relationshipTypes: ['relationshipType'],
        datasetIds: ['datasetId'],
        cursor: 'cursor',
        expand: ['expand'],
      });
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicator-types',
    label: 'required params',
    run: async () => {
      const indicatorType = await client.indicatorTypes.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicator-types',
    label: 'all params',
    run: async () => {
      const indicatorType = await client.indicatorTypes.listList('accountId', {
        datasetIds: ['datasetId'],
      });
    },
  },

  {
    operation: 'listLegacyList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/indicatorTypes',
    run: async () => {
      const indicatorType = await client.indicatorTypes.listLegacyList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories',
    label: 'required params',
    run: async () => {
      const tagCategory = await client.tagCategory.listList('accountId');
    },
  },

  {
    operation: 'listList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories',
    label: 'all params',
    run: async () => {
      const tagCategory = await client.tagCategory.listList('accountId', {
        search: 'search',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories/create',
    label: 'required params',
    run: async () => {
      const tagCategory = await client.tagCategory.create('accountId', {
        name: 'Actor',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories/create',
    label: 'all params',
    run: async () => {
      const tagCategory = await client.tagCategory.create('accountId', {
        description: '',
        name: 'Actor',
        schema: [{}],
      });
    },
  },

  {
    operation: 'deleteDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}',
    run: async () => {
      const tagCategory = await client.tagCategory.deleteDelete('categoryUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'retrieveDetail',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}',
    run: async () => {
      const tagCategory = await client.tagCategory.retrieveDetail('categoryUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}',
    label: 'required params',
    run: async () => {
      const tagCategory = await client.tagCategory.patchUpdate('categoryUuid', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'patchUpdate',
    method: 'PATCH',
    path: '/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}',
    label: 'all params',
    run: async () => {
      const tagCategory = await client.tagCategory.patchUpdate('categoryUuid', {
        account_id: 'accountId',
        description: '',
        name: '',
        schema: [{}],
      });
    },
  },

  {
    operation: 'cloudforceOneList',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneList(
        'accountId',
        {},
      );
    },
  },

  {
    operation: 'cloudforceOneConstants',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/constants',
    run: async () => {
      const requestForInformationRfi =
        await client.requestForInformationRfi.cloudforceOneConstants('accountId');
    },
  },

  {
    operation: 'cloudforceOneNew',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/new',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneNew(
        'accountId',
        {},
      );
    },
  },

  {
    operation: 'cloudforceOneQuota',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/quota',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneQuota('accountId');
    },
  },

  {
    operation: 'cloudforceOneTypes',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/types',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneTypes('accountId');
    },
  },

  {
    operation: 'cloudforceOneDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}',
    run: async () => {
      const response = await client.requestForInformationRfi.cloudforceOneDelete('requestId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cloudforceOneGet',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneGet('requestId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cloudforceOneUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneUpdate(
        'requestId',
        {
          account_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneAssetList',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetList(
        'requestId',
        {
          account_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneAssetNew',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/new',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetNew(
        'requestId',
        {
          account_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneAssetDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}',
    run: async () => {
      const response = await client.requestForInformationRfi.cloudforceOneAssetDelete('assetId', {
        account_id: {},
        request_id: {},
      });
    },
  },

  {
    operation: 'cloudforceOneAssetGet',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetGet(
        'assetId',
        {
          account_id: {},
          request_id: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneAssetUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetUpdate(
        'assetId',
        {
          account_id: {},
          request_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneMessageList',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/message',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageList(
        'requestId',
        {
          account_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneMessageNew',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageNew(
        'requestId',
        {
          account_id: {},
          body: {},
        },
      );
    },
  },

  {
    operation: 'cloudforceOneMessageDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}',
    run: async () => {
      const response = await client.requestForInformationRfi.cloudforceOneMessageDelete(1, {
        account_id: {},
        request_id: {},
      });
    },
  },

  {
    operation: 'cloudforceOneMessageUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}',
    run: async () => {
      const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageUpdate(1, {
        account_id: {},
        request_id: {},
        body: {},
      });
    },
  },

  {
    operation: 'cloudforceOneList',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/priority',
    run: async () => {
      const priorityIntelligenceRequirementsPir =
        await client.priorityIntelligenceRequirementsPir.cloudforceOneList('accountId', {});
    },
  },

  {
    operation: 'cloudforceOneNew',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/requests/priority/new',
    run: async () => {
      const priorityIntelligenceRequirementsPir =
        await client.priorityIntelligenceRequirementsPir.cloudforceOneNew('accountId', {});
    },
  },

  {
    operation: 'cloudforceOneQuota',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/priority/quota',
    run: async () => {
      const priorityIntelligenceRequirementsPir =
        await client.priorityIntelligenceRequirementsPir.cloudforceOneQuota('accountId');
    },
  },

  {
    operation: 'cloudforceOneDelete',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}',
    run: async () => {
      const response = await client.priorityIntelligenceRequirementsPir.cloudforceOneDelete('priorityId', {
        account_id: {},
      });
    },
  },

  {
    operation: 'cloudforceOneGet',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}',
    run: async () => {
      const priorityIntelligenceRequirementsPir =
        await client.priorityIntelligenceRequirementsPir.cloudforceOneGet('priorityId', {
          account_id: {},
        });
    },
  },

  {
    operation: 'cloudforceOneUpdate',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}',
    run: async () => {
      const priorityIntelligenceRequirementsPir =
        await client.priorityIntelligenceRequirementsPir.cloudforceOneUpdate('priorityId', {
          account_id: {},
          body: {},
        });
    },
  },

  {
    operation: 'cloudforceOneDeleteAll',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/rules',
    run: async () => {
      const response = await client.rules.cloudforceOneDeleteAll('accountId');
    },
  },

  {
    operation: 'cloudforceOneList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneList('accountId', {
        limit: 50,
        offset: 0,
      });
    },
  },

  {
    operation: 'cloudforceOneList',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneList('accountId', {
        namespace: 'namespace',
        path: 'path',
        recursive: 'true',
        search: 'malicious',
        is_public: 'true',
        limit: 50,
        offset: 0,
      });
    },
  },

  {
    operation: 'cloudforceOneCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneCreate('accountId');
    },
  },

  {
    operation: 'cloudforceOneCreate',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneCreate('accountId', {});
    },
  },

  {
    operation: 'cloudforceOneRemoveAccountExemptions',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneRemoveAccountExemptions('accountId');
    },
  },

  {
    operation: 'cloudforceOneRemoveAccountExemptions',
    method: 'DELETE',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneRemoveAccountExemptions('accountId', {});
    },
  },

  {
    operation: 'cloudforceOneGetExemptions',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    run: async () => {
      const response = await client.rules.cloudforceOneGetExemptions('accountId');
    },
  },

  {
    operation: 'cloudforceOneAddAccountExemptions',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneAddAccountExemptions('accountId');
    },
  },

  {
    operation: 'cloudforceOneAddAccountExemptions',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneAddAccountExemptions('accountId', {});
    },
  },

  {
    operation: 'cloudforceOneUpdateAccountExemptions',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneUpdateAccountExemptions('accountId');
    },
  },

  {
    operation: 'cloudforceOneUpdateAccountExemptions',
    method: 'PUT',
    path: '/accounts/{account_id}/cloudforce-one/rules/exemptions',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneUpdateAccountExemptions('accountId', {});
    },
  },

  {
    operation: 'cloudforceOneGetManaged',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/managed',
    run: async () => {
      const rule = await client.rules.cloudforceOneGetManaged('accountId');
    },
  },

  {
    operation: 'search',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/search',
    label: 'required params',
    run: async () => {
      const response = await client.rules.search('accountId', {
        limit: 50,
        offset: 0,
        query: 'obfuscated proxy worker',
        mode: 'hybrid',
      });
    },
  },

  {
    operation: 'search',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/search',
    label: 'all params',
    run: async () => {
      const response = await client.rules.search('accountId', {
        namespace: 'namespace',
        path: 'path',
        recursive: 'true',
        search: 'malicious',
        is_public: 'true',
        limit: 50,
        offset: 0,
        query: 'obfuscated proxy worker',
        mode: 'hybrid',
        language: 'yara',
      });
    },
  },

  {
    operation: 'cloudforceOneGetStats',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/stats',
    run: async () => {
      const response = await client.rules.cloudforceOneGetStats('accountId');
    },
  },

  {
    operation: 'cloudforceOneListEmail',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/structured',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneListEmail('accountId', {
        limit: 50,
        offset: 0,
      });
    },
  },

  {
    operation: 'cloudforceOneListEmail',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/structured',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneListEmail('accountId', {
        limit: 50,
        offset: 0,
        search: 'search',
      });
    },
  },

  {
    operation: 'cloudforceOneCreateEmail',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/structured',
    label: 'required params',
    run: async () => {
      const response = await client.rules.cloudforceOneCreateEmail('accountId', {
        condition: {},
        enabled: true,
        name: 'x',
        strings: [],
      });
    },
  },

  {
    operation: 'cloudforceOneCreateEmail',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/structured',
    label: 'all params',
    run: async () => {
      const response = await client.rules.cloudforceOneCreateEmail('accountId', {
        condition: {},
        description: '',
        enabled: true,
        meta: [{}],
        name: 'x',
        strings: [],
      });
    },
  },

  {
    operation: 'cloudforceOneListRule',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/approvals',
    label: 'required params',
    run: async () => {
      const response = await client.approvals.cloudforceOneListRule('accountId', {
        status: 'pending',
        latest_only: 'false',
        limit: 50,
        offset: 0,
      });
    },
  },

  {
    operation: 'cloudforceOneListRule',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/approvals',
    label: 'all params',
    run: async () => {
      const response = await client.approvals.cloudforceOneListRule('accountId', {
        status: 'pending',
        latest_only: 'false',
        limit: 50,
        offset: 0,
        reviewer_scope: 'email',
        change_type: 'create',
        rule_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'cloudforceOneGetRule',
    method: 'GET',
    path: '/accounts/{account_id}/cloudforce-one/rules/approvals/{id}',
    run: async () => {
      const response = await client.approvals.cloudforceOneGetRule('1', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'cloudforceOneCancelRule',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/cancel',
    run: async () => {
      const response = await client.approvals.cloudforceOneCancelRule('1', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'cloudforceOneResubmitRule',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit',
    label: 'required params',
    run: async () => {
      const response = await client.approvals.cloudforceOneResubmitRule('1', {
        account_id: 'accountId',
      });
    },
  },

  {
    operation: 'cloudforceOneResubmitRule',
    method: 'POST',
    path: '/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit',
    label: 'all params',
    run: async () => {
      const response = await client.approvals.cloudforceOneResubmitRule('1', {
        account_id: 'accountId',
        body: {},
      });
    },
  },
];

/**
 * How many cases run at once, capped at the number of cases there are.
 *
 * SCALAR_SMOKE_CONCURRENCY overrides the default; anything unparseable falls back to it.
 */
const smokeConcurrency = (caseCount: number): number => {
  const override = Number.parseInt(process.env['SCALAR_SMOKE_CONCURRENCY'] ?? '', 10);
  const limit = Number.isInteger(override) && override > 0 ? override : 32;
  return Math.min(limit, caseCount);
};

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run the selected cases under a bounded worker pool rather than all at once. A large SDK has
  // hundreds of operations, and firing every request together exceeds what the client's transport
  // keeps connections for while the runner is already busy with other targets. Each worker pulls
  // the next index off a shared cursor and writes into a pre-sized array, so results stay in case
  // order however the workers interleave. The per-case body catches everything and never rejects,
  // so one failing operation still cannot block the others.
  const results: SmokeResult[] = new Array<SmokeResult>(selected.length);
  let cursor = 0;
  const runNext = async (): Promise<void> => {
    for (let index = cursor++; index < selected.length; index = cursor++) {
      const testCase = selected[index];
      if (!testCase) continue;
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        results[index] = { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        results[index] = {
          ...identity,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
      }
    }
  };
  await Promise.all(Array.from({ length: smokeConcurrency(selected.length) }, runNext));
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
