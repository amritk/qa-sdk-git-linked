// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import * as Errors from './error';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON, isEmptyObj } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { castToError, isAbortError } from './internal/errors';
import { MAX_ERROR_BODY_BYTES, holdDeadline, readBodyText } from './internal/utils/body';
import { getPlatformHeaders, isRunningInBrowser } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
  redactHeaders,
  redactUrl,
  type LogLevel,
  type Logger,
} from './internal/utils/log';
export type { Logger, LogLevel } from './internal/utils/log';
import type { RequestInit, RequestInfo, BodyInit, Fetch } from './internal/builtin-types';
import { buildHeaders, type HeadersLike, type NullableHeaders } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { HTTPMethod, FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { stringifyQuery } from './internal/utils/query';
import { toFile } from './core/uploads';
import { VERSION } from './version';
import {
  Accounts,
  type AccountBatchMoveResponse,
  type AccountListParams,
  type AccountCreationParams,
  type AccountBatchMoveParams,
  type AccountUpdateParams,
} from './resources/accounts';
import {
  Images,
  type ImageListListResponse,
  type ImagePostUploadResponse,
  type ImageDeleteDeleteResponse,
  type ImageRetrieveGetResponse,
  type ImagePatchEditResponse,
  type ImagePutDirectUploadResponse,
  type ImageListAccountsAccountV2Response,
  type ImagePostDirectUploadLinkResponse,
  type ImageListFlowsGetResponse,
  type ImagePutFlowsUpdateResponse,
  type ImageListListParams,
  type ImagePostUploadParams,
  type ImageDeleteDeleteParams,
  type ImageRetrieveGetParams,
  type ImagePatchEditParams,
  type ImagePutDirectUploadParams,
  type ImageListGetBlobParams,
  type ImageListAccountsAccountV2Params,
  type ImagePostDirectUploadLinkParams,
  type ImageListFlowsGetParams,
  type ImagePutFlowsUpdateParams,
} from './resources/images';
import {
  CustomPagesForAnAccount,
  type CustomPagesForAnAccountCreatePreviewTokenParams,
  type CustomPagesForAnAccountRetrieveAParams,
  type CustomPagesForAnAccountUpdateAParams,
} from './resources/custom-pages-for-an-account';
import {
  CustomAssetsForAnAccount,
  type CustomAssetsForAnAccountListParams,
  type CustomAssetsForAnAccountCreateAParams,
  type CustomAssetsForAnAccountDeleteAParams,
  type CustomAssetsForAnAccountRetrieveAParams,
  type CustomAssetsForAnAccountUpdateAParams,
} from './resources/custom-assets-for-an-account';
import {
  TsengAbuseComplaintProcessorOther,
  type TsengAbuseComplaintProcessorOtherListReportsResponse,
  type TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse,
  type TsengAbuseComplaintProcessorOtherListEmailsResponse,
  type TsengAbuseComplaintProcessorOtherListMitigationsResponse,
  type TsengAbuseComplaintProcessorOtherRetrieveReportResponse,
  type TsengAbuseComplaintProcessorOtherListReportsParams,
  type TsengAbuseComplaintProcessorOtherListSubmittedReportsParams,
  type TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams,
  type TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams,
  type TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams,
  type TsengAbuseComplaintProcessorOtherListEmailsParams,
  type TsengAbuseComplaintProcessorOtherListMitigationsParams,
  type TsengAbuseComplaintProcessorOtherRequestReviewParams,
  type TsengAbuseComplaintProcessorOtherRetrieveReportParams,
  type TsengAbuseComplaintProcessorOtherSubmitReportParams,
} from './resources/tseng-abuse-complaint-processor-other';
import {
  McpPortalAnalytics,
  type McpPortalAnalyticAPIToolCallTimeseriesResponse,
  type McpPortalAnalyticAPIServerToolCallTimeseriesResponse,
  type McpPortalAnalyticAPIAccountToolCallTimeseriesResponse,
  type McpPortalAnalyticAPIToolCallTimeseriesParams,
  type McpPortalAnalyticAPIServerToolCallTimeseriesParams,
  type McpPortalAnalyticAPIAccountToolCallTimeseriesParams,
} from './resources/mcp-portal-analytics';
import {
  McpPortal,
  type McpPortalAPIListResponse,
  type McpPortalAPICreateResponse,
  type McpPortalAPIDeleteResponse,
  type McpPortalAPIFetchGatewaysResponse,
  type McpPortalAPIUpdateResponse,
  type McpPortalAPIEffectiveRedirectURIResponse,
  type McpPortalAPIListParams,
  type McpPortalAPICreateParams,
  type McpPortalAPIDeleteParams,
  type McpPortalAPIFetchGatewaysParams,
  type McpPortalAPIUpdateParams,
  type McpPortalAPIEffectiveRedirectURIParams,
} from './resources/mcp-portal';
import {
  McpPortalServers,
  type McpPortalServerAPIListResponse,
  type McpPortalServerAPICreateResponse,
  type McpPortalServerAPIDeleteResponse,
  type McpPortalServerAPIFetchResponse,
  type McpPortalServerAPIUpdateResponse,
  type McpPortalServerAPISyncResponse,
  type McpPortalServerAPIListParams,
  type McpPortalServerAPICreateParams,
  type McpPortalServerAPIDeleteParams,
  type McpPortalServerAPIFetchParams,
  type McpPortalServerAPIUpdateParams,
  type McpPortalServerAPISyncParams,
} from './resources/mcp-portal-servers';
import {
  AccessApplications,
  type AccessApplicationCreateAnResponse,
  type AccessApplicationUpdateAnResponse,
  type AccessApplicationListParams,
  type AccessApplicationCreateAnParams,
  type AccessApplicationDeleteAnParams,
  type AccessApplicationRetrieveAnParams,
  type AccessApplicationUpdateAnParams,
  type AccessApplicationRevokeServiceTokensParams,
  type AccessApplicationPatchUpdateSettingsParams,
  type AccessApplicationPutUpdateSettingsParams,
  type AccessApplicationTestPoliciesParams,
} from './resources/access-applications';
import {
  AccessShortLivedCertificateCas,
  type AccessShortLivedCertificateCaCAsListCasParams,
  type AccessShortLivedCertificateCaCAsDeleteAParams,
  type AccessShortLivedCertificateCaCAsGetAParams,
  type AccessShortLivedCertificateCaCAsCreateAParams,
} from './resources/access-short-lived-certificate-cas';
import {
  AccessApplicationScopedPolicies,
  type AccessApplicationScopedPolicyListAppParams,
  type AccessApplicationScopedPolicyCreateAnParams,
  type AccessApplicationScopedPolicyDeleteAnParams,
  type AccessApplicationScopedPolicyRetrieveAnParams,
  type AccessApplicationScopedPolicyUpdateAnParams,
  type AccessApplicationScopedPolicyConvertReusableParams,
} from './resources/access-application-scoped-policies';
import { AccessAuthenticatorDeviceAaguids } from './resources/access-authenticator-device-aaguids';
import {
  AccessBookmarkApplicationsDeprecated,
  type AccessBookmarkApplicationsDeprecatedDeleteAParams,
  type AccessBookmarkApplicationsDeprecatedRetrieveAParams,
  type AccessBookmarkApplicationsDeprecatedCreateAParams,
  type AccessBookmarkApplicationsDeprecatedUpdateAParams,
} from './resources/access-bookmark-applications-deprecated';
import {
  AccessMTLSAuthentication,
  type AccessMTLSAuthenticationMTLSListMTLSCertificatesParams,
  type AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams,
  type AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams,
  type AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams,
  type AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams,
  type AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams,
} from './resources/access-m-tls-authentication';
import {
  AccessCustomPages,
  type AccessCustomPageListParams,
  type AccessCustomPageCreateAParams,
  type AccessCustomPageValidateATemplateParams,
  type AccessCustomPageDeleteAParams,
  type AccessCustomPageRetrieveAParams,
  type AccessCustomPageUpdateAParams,
} from './resources/access-custom-pages';
import { GatewayCa, type GatewayCaAccessDeleteAnSSHParams } from './resources/gateway-ca';
import {
  AccessGroups,
  type AccessGroupListParams,
  type AccessGroupCreateAnParams,
  type AccessGroupDeleteAnParams,
  type AccessGroupRetrieveAnParams,
  type AccessGroupUpdateAnParams,
} from './resources/access-groups';
import {
  AccessIdentityProviders,
  type AccessIdentityProviderListParams,
  type AccessIdentityProviderCreateAnParams,
  type AccessIdentityProviderDeleteAnParams,
  type AccessIdentityProviderRetrieveAnParams,
  type AccessIdentityProviderUpdateAnParams,
  type AccessIdentityProviderCreateSamlCertificateForParams,
  type AccessIdentityProviderListScimGroupResourcesParams,
  type AccessIdentityProviderListScimUserResourcesParams,
} from './resources/access-identity-providers';
import {
  AccessIdPFederationGrants,
  type AccessIdPFederationGrantIdPCreateParams,
  type AccessIdPFederationGrantIdPDeleteParams,
  type AccessIdPFederationGrantIdPGetParams,
} from './resources/access-idp-federation-grants';
import {
  AccessKeyConfiguration,
  type AccessKeyConfigurationUpdateTheParams,
} from './resources/access-key-configuration';
import {
  AccessAuthenticationLogs,
  type AccessAuthenticationLogListParams,
} from './resources/access-authentication-logs';
import {
  AccessJitRequestLogs,
  type AccessJitRequestLogListParams,
  type AccessJitRequestLogRetrieveParams,
} from './resources/access-jit-request-logs';
import {
  AccessScimUpdateLogs,
  type AccessScimUpdateLogListParams,
} from './resources/access-scim-update-logs';
import {
  ZeroTrustOrganization,
  type ZeroTrustOrganizationListYourDohSettingsResponse,
  type ZeroTrustOrganizationUpdateYourDohSettingsResponse,
  type ZeroTrustOrganizationCreateYourParams,
  type ZeroTrustOrganizationUpdateYourParams,
  type ZeroTrustOrganizationUpdateYourDohSettingsParams,
  type ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams,
} from './resources/zero-trust-organization';
import {
  AccessReusablePolicies,
  type AccessReusablePolicyListParams,
  type AccessReusablePolicyCreateAnParams,
  type AccessReusablePolicyDeleteAnParams,
  type AccessReusablePolicyRetrieveAnParams,
  type AccessReusablePolicyUpdateAnParams,
} from './resources/access-reusable-policies';
import {
  AccessPolicyTester,
  type AccessPolicyTesterTestsParams,
  type AccessPolicyTesterTestsGetAnUpdateParams,
  type AccessPolicyTesterTestsGetAUserPageParams,
} from './resources/access-policy-tester';
import {
  AccessSamlEncryptionCertificates,
  type AccessSamlEncryptionCertificateListSetsParams,
  type AccessSamlEncryptionCertificateRetrieveSetParams,
  type AccessSamlEncryptionCertificateListPemParams,
  type AccessSamlEncryptionCertificateRotateParams,
} from './resources/access-saml-encryption-certificates';
import { ZeroTrustSeats, type ZeroTrustSeatUpdateAUserParams } from './resources/zero-trust-seats';
import {
  AccessServiceTokens,
  type AccessServiceTokenListParams,
  type AccessServiceTokenCreateAParams,
  type AccessServiceTokenDeleteAParams,
  type AccessServiceTokenRetrieveAParams,
  type AccessServiceTokenUpdateAParams,
  type AccessServiceTokenRefreshAParams,
  type AccessServiceTokenRotateAParams,
} from './resources/access-service-tokens';
import {
  AccessTags,
  type AccessTagListParams,
  type AccessTagCreateParams,
  type AccessTagDeleteAParams,
  type AccessTagRetrieveAParams,
  type AccessTagUpdateAParams,
} from './resources/access-tags';
import {
  ZeroTrustUsers,
  type ZeroTrustUserListParams,
  type ZeroTrustUserCreateParams,
  type ZeroTrustUserDeleteParams,
  type ZeroTrustUserRetrieveParams,
  type ZeroTrustUserUpdateParams,
  type ZeroTrustUserListActiveSessionsParams,
  type ZeroTrustUserRetrieveActiveSessionParams,
  type ZeroTrustUserListFailedLoginsParams,
  type ZeroTrustUserListLastSeenIdentityParams,
  type ZeroTrustUserDeleteMfaAuthenticatorParams,
} from './resources/zero-trust-users';
import {
  IPAddressManagementAddressMaps,
  type IPAddressManagementAddressMapCreateParams,
  type IPAddressManagementAddressMapDeleteParams,
  type IPAddressManagementAddressMapDetailsParams,
  type IPAddressManagementAddressMapUpdateParams,
  type IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams,
  type IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams,
  type IPAddressManagementAddressMapDeleteAnFromAnParams,
  type IPAddressManagementAddressMapCreateAnToAnParams,
  type IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams,
  type IPAddressManagementAddressMapCreateAZoneMembershipToAnParams,
} from './resources/ip-address-management-address-maps';
import { IPAddressManagementLeases } from './resources/ip-address-management-leases';
import {
  IPAddressManagementPrefixes,
  type IPAddressManagementPrefixUploadLoaDocumentParams,
  type IPAddressManagementPrefixDownloadLoaDocumentParams,
  type IPAddressManagementPrefixCreateParams,
  type IPAddressManagementPrefixDeleteParams,
  type IPAddressManagementPrefixDetailsParams,
  type IPAddressManagementPrefixUpdateDescriptionParams,
  type IPAddressManagementPrefixValidateParams,
} from './resources/ip-address-management-prefixes';
import {
  IPAddressManagementBGPPrefixes,
  type IPAddressManagementBGPPrefixListParams,
  type IPAddressManagementBGPPrefixCreateParams,
  type IPAddressManagementBGPPrefixDeleteParams,
  type IPAddressManagementBGPPrefixFetchParams,
  type IPAddressManagementBGPPrefixUpdateParams,
} from './resources/ip-address-management-bgp-prefixes';
import {
  IPAddressManagementDynamicAdvertisement,
  type IPAddressManagementDynamicAdvertisementListStatusParams,
  type IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams,
} from './resources/ip-address-management-dynamic-advertisement';
import {
  IPAddressManagementServiceBindings,
  type IPAddressManagementServiceBindingList2Response,
  type IPAddressManagementServiceBindingCreateResponse,
  type IPAddressManagementServiceBindingRetrieveResponse,
  type IPAddressManagementServiceBindingListResponse,
  type IPAddressManagementServiceBindingList2Params,
  type IPAddressManagementServiceBindingCreateParams,
  type IPAddressManagementServiceBindingDeleteParams,
  type IPAddressManagementServiceBindingRetrieveParams,
} from './resources/ip-address-management-service-bindings';
import {
  IPAddressManagementPrefixDelegation,
  type IPAddressManagementPrefixDelegationListParams,
  type IPAddressManagementPrefixDelegationCreateParams,
  type IPAddressManagementPrefixDelegationDeleteParams,
} from './resources/ip-address-management-prefix-delegation';
import {
  DlsRegionalServices,
  type DlsRegionalServiceAccountHostnamesListRegionsResponse,
} from './resources/dls-regional-services';
import {
  Namespaces,
  type NamespaceAgentMemoryListResponse,
  type NamespaceAgentMemoryCreateResponse,
  type NamespaceAgentMemoryDeleteResponse,
  type NamespaceAgentMemoryGetResponse,
  type NamespaceAgentMemoryListParams,
  type NamespaceAgentMemoryCreateParams,
  type NamespaceAgentMemoryDeleteParams,
  type NamespaceAgentMemoryGetParams,
} from './resources/namespaces';
import {
  Memory,
  type MemoryAgentProfileListResponse,
  type MemoryAgentProfileDeleteResponse,
  type MemoryAgentIngestResponse,
  type MemoryAgentListResponse,
  type MemoryAgentDeleteResponse,
  type MemoryAgentGetResponse,
  type MemoryAgentRecallResponse,
  type MemoryAgentRememberResponse,
  type MemoryAgentSessionDeleteResponse,
  type MemoryAgentSummaryResponse,
  type MemoryAgentProfileListParams,
  type MemoryAgentProfileDeleteParams,
  type MemoryAgentIngestParams,
  type MemoryAgentListParams,
  type MemoryAgentDeleteParams,
  type MemoryAgentGetParams,
  type MemoryAgentRecallParams,
  type MemoryAgentRememberParams,
  type MemoryAgentSessionDeleteParams,
  type MemoryAgentSummaryParams,
} from './resources/memory';
import {
  AIGateway,
  type AIGatewayAigBillingGetInvoiceHistoryParams,
  type AIGatewayAigBillingSetSpendingLimitParams,
  type AIGatewayAigBillingCreateTopupParams,
  type AIGatewayAigBillingSetTopupConfigParams,
  type AIGatewayAigBillingTopupEligibilityParams,
  type AIGatewayAigBillingCheckTopupStatusParams,
  type AIGatewayAigBillingGetUsageHistoryParams,
} from './resources/ai-gateway';
import {
  AIGatewayAccountProviders,
  type AIGatewayAccountProviderAigConfigListResponse,
  type AIGatewayAccountProviderAigConfigCreateResponse,
  type AIGatewayAccountProviderAigConfigDeleteResponse,
  type AIGatewayAccountProviderAigConfigFetchResponse,
  type AIGatewayAccountProviderAigConfigUpdateResponse,
  type AIGatewayAccountProviderAigConfigListParams,
  type AIGatewayAccountProviderAigConfigCreateParams,
  type AIGatewayAccountProviderAigConfigDeleteParams,
  type AIGatewayAccountProviderAigConfigFetchParams,
  type AIGatewayAccountProviderAigConfigUpdateParams,
} from './resources/ai-gateway-account-providers';
import {
  AIGatewayAccountProviderCosts,
  type AIGatewayAccountProviderCostAigConfigListResponse,
  type AIGatewayAccountProviderCostAigConfigCreateResponse,
  type AIGatewayAccountProviderCostAigConfigDeleteResponse,
  type AIGatewayAccountProviderCostAigConfigFetchResponse,
  type AIGatewayAccountProviderCostAigConfigUpdateResponse,
  type AIGatewayAccountProviderCostAigConfigListParams,
  type AIGatewayAccountProviderCostAigConfigCreateParams,
  type AIGatewayAccountProviderCostAigConfigDeleteParams,
  type AIGatewayAccountProviderCostAigConfigFetchParams,
  type AIGatewayAccountProviderCostAigConfigUpdateParams,
} from './resources/ai-gateway-account-provider-costs';
import {
  AIGatewayEvaluations,
  type AIGatewayEvaluationAigConfigListEvaluatorsResponse,
  type AIGatewayEvaluationAigConfigListResponse,
  type AIGatewayEvaluationAigConfigCreateResponse,
  type AIGatewayEvaluationAigConfigDeleteResponse,
  type AIGatewayEvaluationAigConfigFetchResponse,
  type AIGatewayEvaluationAigConfigListEvaluatorsParams,
  type AIGatewayEvaluationAigConfigListParams,
  type AIGatewayEvaluationAigConfigCreateParams,
  type AIGatewayEvaluationAigConfigDeleteParams,
  type AIGatewayEvaluationAigConfigFetchParams,
} from './resources/ai-gateway-evaluations';
import {
  AIGatewayGateways,
  type AIGatewayGatewayAigConfigListResponse,
  type AIGatewayGatewayAigConfigCreateResponse,
  type AIGatewayGatewayAigConfigGetURLResponse,
  type AIGatewayGatewayAigConfigDeleteResponse,
  type AIGatewayGatewayAigConfigFetchResponse,
  type AIGatewayGatewayAigConfigUpdateResponse,
  type AIGatewayGatewayAigConfigListParams,
  type AIGatewayGatewayAigConfigCreateParams,
  type AIGatewayGatewayAigConfigGetURLParams,
  type AIGatewayGatewayAigConfigDeleteParams,
  type AIGatewayGatewayAigConfigFetchParams,
  type AIGatewayGatewayAigConfigUpdateParams,
} from './resources/ai-gateway-gateways';
import {
  AIGatewayCustomDomains,
  type AIGatewayCustomDomainAigConfigListResponse,
  type AIGatewayCustomDomainAigConfigCreateResponse,
  type AIGatewayCustomDomainAigConfigDeleteResponse,
  type AIGatewayCustomDomainAigConfigFetchResponse,
  type AIGatewayCustomDomainAigConfigListParams,
  type AIGatewayCustomDomainAigConfigCreateParams,
  type AIGatewayCustomDomainAigConfigDeleteParams,
  type AIGatewayCustomDomainAigConfigFetchParams,
} from './resources/ai-gateway-custom-domains';
import {
  AIGatewayDatasets,
  type AIGatewayDatasetAigConfigListResponse,
  type AIGatewayDatasetAigConfigCreateResponse,
  type AIGatewayDatasetAigConfigDeleteResponse,
  type AIGatewayDatasetAigConfigFetchResponse,
  type AIGatewayDatasetAigConfigUpdateResponse,
  type AIGatewayDatasetAigConfigListParams,
  type AIGatewayDatasetAigConfigCreateParams,
  type AIGatewayDatasetAigConfigDeleteParams,
  type AIGatewayDatasetAigConfigFetchParams,
  type AIGatewayDatasetAigConfigUpdateParams,
} from './resources/ai-gateway-datasets';
import {
  AIGatewayLogs,
  type AIGatewayLogAigConfigDeleteResponse,
  type AIGatewayLogAigConfigListResponse,
  type AIGatewayLogAigConfigGetDetailResponse,
  type AIGatewayLogAigConfigPatchResponse,
  type AIGatewayLogAigConfigGetRequestResponse,
  type AIGatewayLogAigConfigGetResponseResponse,
  type AIGatewayLogAigConfigDeleteParams,
  type AIGatewayLogAigConfigListParams,
  type AIGatewayLogAigConfigGetDetailParams,
  type AIGatewayLogAigConfigPatchParams,
  type AIGatewayLogAigConfigGetRequestParams,
  type AIGatewayLogAigConfigGetResponseParams,
} from './resources/ai-gateway-logs';
import {
  AIGatewayProviderConfigs,
  type AIGatewayProviderConfigAigListResponse,
  type AIGatewayProviderConfigAigCreateResponse,
  type AIGatewayProviderConfigAigDeleteResponse,
  type AIGatewayProviderConfigAigUpdateResponse,
  type AIGatewayProviderConfigAigListParams,
  type AIGatewayProviderConfigAigCreateParams,
  type AIGatewayProviderConfigAigDeleteParams,
  type AIGatewayProviderConfigAigUpdateParams,
} from './resources/ai-gateway-provider-configs';
import {
  AIGatewayDynamicRoutes,
  type AIGatewayDynamicRouteAigConfigListResponse,
  type AIGatewayDynamicRouteAigConfigPostResponse,
  type AIGatewayDynamicRouteAigConfigDeleteResponse,
  type AIGatewayDynamicRouteAigConfigGetResponse,
  type AIGatewayDynamicRouteAigConfigUpdateResponse,
  type AIGatewayDynamicRouteAigConfigListDeploymentsResponse,
  type AIGatewayDynamicRouteAigConfigPostDeploymentResponse,
  type AIGatewayDynamicRouteAigConfigListVersionsResponse,
  type AIGatewayDynamicRouteAigConfigPostVersionResponse,
  type AIGatewayDynamicRouteAigConfigGetVersionResponse,
  type AIGatewayDynamicRouteAigConfigListParams,
  type AIGatewayDynamicRouteAigConfigPostParams,
  type AIGatewayDynamicRouteAigConfigDeleteParams,
  type AIGatewayDynamicRouteAigConfigGetParams,
  type AIGatewayDynamicRouteAigConfigUpdateParams,
  type AIGatewayDynamicRouteAigConfigListDeploymentsParams,
  type AIGatewayDynamicRouteAigConfigPostDeploymentParams,
  type AIGatewayDynamicRouteAigConfigListVersionsParams,
  type AIGatewayDynamicRouteAigConfigPostVersionParams,
  type AIGatewayDynamicRouteAigConfigGetVersionParams,
} from './resources/ai-gateway-dynamic-routes';
import {
  Account,
  type AccountAigConfigGetLoggingStateResponse,
  type AccountAigConfigPatchLoggingStateResponse,
  type AccountListLimitsResponse,
} from './resources/account';
import {
  AISearchInstances,
  type AISearchInstanceListResponse,
  type AISearchInstanceCreateResponse,
  type AISearchInstanceDeleteResponse,
  type AISearchInstanceFetchResponse,
  type AISearchInstanceUpdateResponse,
  type AISearchInstanceChatCompletionResponse,
  type AISearchInstanceSearchResponse,
  type AISearchInstanceStatsResponse,
  type AISearchInstanceNamespaceListResponse,
  type AISearchInstanceNamespaceCreateResponse,
  type AISearchInstanceNamespaceDeleteResponse,
  type AISearchInstanceNamespaceFetchResponse,
  type AISearchInstanceNamespaceUpdateResponse,
  type AISearchInstanceNamespaceChatCompletionResponse,
  type AISearchInstanceNamespacePurgeCacheResponse,
  type AISearchInstanceSearch2Response,
  type AISearchInstanceNamespaceStatsResponse,
  type AISearchInstanceListParams,
  type AISearchInstanceCreateParams,
  type AISearchInstanceDeleteParams,
  type AISearchInstanceFetchParams,
  type AISearchInstanceUpdateParams,
  type AISearchInstanceChatCompletionParams,
  type AISearchInstanceSearchParams,
  type AISearchInstanceStatsParams,
  type AISearchInstanceNamespaceListParams,
  type AISearchInstanceNamespaceCreateParams,
  type AISearchInstanceNamespaceDeleteParams,
  type AISearchInstanceNamespaceFetchParams,
  type AISearchInstanceNamespaceUpdateParams,
  type AISearchInstanceNamespaceChatCompletionParams,
  type AISearchInstanceNamespacePurgeCacheParams,
  type AISearchInstanceSearch2Params,
  type AISearchInstanceNamespaceStatsParams,
} from './resources/ai-search-instances';
import {
  AISearchInstancesJobs,
  type AISearchInstancesJobListResponse,
  type AISearchInstancesJobCreateResponse,
  type AISearchInstancesJobRetrieveResponse,
  type AISearchInstancesJobChangeStatusResponse,
  type AISearchInstancesJobListLogsResponse,
  type AISearchInstancesJobNamespaceListResponse,
  type AISearchInstancesJobNamespaceCreateResponse,
  type AISearchInstancesJobNamespaceGetResponse,
  type AISearchInstancesJobNamespaceChangeStatusResponse,
  type AISearchInstancesJobNamespaceListLogsResponse,
  type AISearchInstancesJobListParams,
  type AISearchInstancesJobCreateParams,
  type AISearchInstancesJobRetrieveParams,
  type AISearchInstancesJobChangeStatusParams,
  type AISearchInstancesJobListLogsParams,
  type AISearchInstancesJobNamespaceListParams,
  type AISearchInstancesJobNamespaceCreateParams,
  type AISearchInstancesJobNamespaceGetParams,
  type AISearchInstancesJobNamespaceChangeStatusParams,
  type AISearchInstancesJobNamespaceListLogsParams,
} from './resources/ai-search-instances-jobs';
import {
  AISearchNamespaces,
  type AISearchNamespaceListResponse,
  type AISearchNamespaceCreateResponse,
  type AISearchNamespaceDeleteResponse,
  type AISearchNamespaceFetchResponse,
  type AISearchNamespaceUpdateResponse,
  type AISearchNamespaceMoveInstanceResponse,
  type AISearchNamespaceListParams,
  type AISearchNamespaceCreateParams,
  type AISearchNamespaceDeleteParams,
  type AISearchNamespaceFetchParams,
  type AISearchNamespaceUpdateParams,
  type AISearchNamespaceMoveInstanceParams,
} from './resources/ai-search-namespaces';
import {
  AISearchAccountSearch,
  type AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse,
  type AISearchAccountSearchSearchResponse,
  type AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams,
  type AISearchAccountSearchSearchParams,
} from './resources/ai-search-account-search';
import {
  AISearchInstancesItems,
  type AISearchInstancesItemNamespaceListResponse,
  type AISearchInstancesItemNamespaceUploadResponse,
  type AISearchInstancesItemNamespaceCreateOrUpdateResponse,
  type AISearchInstancesItemNamespaceDeleteResponse,
  type AISearchInstancesItemNamespaceGetResponse,
  type AISearchInstancesItemNamespaceSyncResponse,
  type AISearchInstancesItemNamespaceListChunksResponse,
  type AISearchInstancesItemNamespaceLogsResponse,
  type AISearchInstancesItemNamespaceListParams,
  type AISearchInstancesItemNamespaceUploadParams,
  type AISearchInstancesItemNamespaceCreateOrUpdateParams,
  type AISearchInstancesItemNamespaceDeleteParams,
  type AISearchInstancesItemNamespaceGetParams,
  type AISearchInstancesItemNamespaceSyncParams,
  type AISearchInstancesItemNamespaceListChunksParams,
  type AISearchInstancesItemNamespaceGetContentParams,
  type AISearchInstancesItemNamespaceLogsParams,
} from './resources/ai-search-instances-items';
import {
  AISearchTokens,
  type AISearchTokenListResponse,
  type AISearchTokenCreateResponse,
  type AISearchTokenDeleteResponse,
  type AISearchTokenFetchResponse,
  type AISearchTokenUpdateResponse,
  type AISearchTokenListParams,
  type AISearchTokenCreateParams,
  type AISearchTokenDeleteParams,
  type AISearchTokenFetchParams,
  type AISearchTokenUpdateParams,
} from './resources/ai-search-tokens';
import {
  WorkersAI,
  type WorkersAISearchResponse,
  type WorkersAIListModelSchemaResponse,
  type WorkersAISearch2Response,
  type WorkersAIPostRunGenericResponse,
  type WorkersAIPostRunModelResponse,
  type WorkersAISearch3Response,
  type WorkersAIPostToMarkdownResponse,
  type WorkersAIListToMarkdownSupportedResponse,
  type WorkersAIListModelSchemaParams,
  type WorkersAISearch2Params,
  type WorkersAIPostRunGenericParams,
  type WorkersAIPostRunModelParams,
  type WorkersAIPostToMarkdownParams,
} from './resources/workers-ai';
import {
  WorkersAIFinetune,
  type WorkersAIFinetuneListResponse,
  type WorkersAIFinetuneCreateResponse,
  type WorkersAIFinetuneListPublicResponse,
  type WorkersAIFinetuneDeleteResponse,
  type WorkersAIFinetuneUploadAssetResponse,
  type WorkersAIFinetuneCreateParams,
  type WorkersAIFinetuneListPublicParams,
  type WorkersAIFinetuneDeleteParams,
  type WorkersAIFinetuneUploadAssetParams,
} from './resources/workers-ai-finetune';
import {
  FinetuneAsset,
  type FinetuneAssetWorkersAIDownloadResponse,
  type FinetuneAssetWorkersAIDownloadParams,
} from './resources/finetune-asset';
import { NotificationAlertTypes } from './resources/notification-alert-types';
import { NotificationMechanismEligibility } from './resources/notification-mechanism-eligibility';
import {
  NotificationDestinationsWithPagerDuty,
  type NotificationDestinationsWithPagerDutyConnectTokenParams,
} from './resources/notification-destinations-with-pager-duty';
import {
  NotificationWebhooks,
  type NotificationWebhookCreateAParams,
  type NotificationWebhookDeleteAParams,
  type NotificationWebhookRetrieveAParams,
  type NotificationWebhookUpdateAParams,
} from './resources/notification-webhooks';
import { NotificationHistory, type NotificationHistoryListParams } from './resources/notification-history';
import {
  NotificationPolicies,
  type NotificationPolicyCreateAParams,
  type NotificationPolicyDeleteAParams,
  type NotificationPolicyRetrieveAParams,
  type NotificationPolicyUpdateAParams,
  type NotificationPolicyShowEmailUnsubscribeDetailsParams,
  type NotificationPolicyUnsubscribeEmailFromParams,
  type NotificationPolicyTestAParams,
} from './resources/notification-policies';
import {
  NotificationSilences,
  type NotificationSilenceCreateParams,
  type NotificationSilenceUpdateParams,
  type NotificationSilenceDeleteParams,
  type NotificationSilenceRetrieveParams,
} from './resources/notification-silences';
import {
  DataSecurity,
  type DataSecurityContentFindingsTopNParams,
  type DataSecurityFindingsSummaryParams,
  type DataSecurityFindingsTimeseriesParams,
} from './resources/data-security';
import {
  ArtAnalytics,
  type ArtAnalyticQuerySummaryParams,
  type ArtAnalyticQueryTimeseriesParams,
  type ArtAnalyticQueryTopNParams,
} from './resources/art-analytics';
import {
  AnalyticsEngine,
  type AnalyticsEngineSQLQueryGetParams,
  type AnalyticsEngineSQLQueryPostParams,
} from './resources/analytics-engine';
import {
  Artifacts,
  type ArtifactNamespacesListResponse,
  type ArtifactNamespacesGetResponse,
  type ArtifactReposListResponse,
  type ArtifactReposCreateResponse,
  type ArtifactReposDeleteResponse,
  type ArtifactReposGetResponse,
  type ArtifactReposCommitGetResponse,
  type ArtifactReposForkResponse,
  type ArtifactReposImportResponse,
  type ArtifactReposLogGetResponse,
  type ArtifactReposRawGetResponse,
  type ArtifactRepoTokensListResponse,
  type ArtifactReposTreeGetResponse,
  type ArtifactTokensCreateResponse,
  type ArtifactTokensRevokeResponse,
  type ArtifactNamespacesListParams,
  type ArtifactNamespacesGetParams,
  type ArtifactReposListParams,
  type ArtifactReposCreateParams,
  type ArtifactReposDeleteParams,
  type ArtifactReposGetParams,
  type ArtifactReposBlobGetParams,
  type ArtifactReposCommitGetParams,
  type ArtifactReposFileGetParams,
  type ArtifactReposForkParams,
  type ArtifactReposImportParams,
  type ArtifactReposLogGetParams,
  type ArtifactReposRawGetParams,
  type ArtifactRepoTokensListParams,
  type ArtifactReposTreeGetParams,
  type ArtifactTokensCreateParams,
  type ArtifactTokensRevokeParams,
} from './resources/artifacts';
import { AuditLogs, type AuditLogListAccountParams } from './resources/audit-logs';
import {
  AutoRagRagSearch,
  type AutoRagRagSearchAutoragConfigAIResponse,
  type AutoRagRagSearchSearchResponse,
  type AutoRagRagSearchAutoragConfigAIParams,
  type AutoRagRagSearchSearchParams,
} from './resources/auto-rag-rag-search';
import {
  AutoRagRag,
  type AutoRagRagAutoragConfigFilesResponse,
  type AutoRagRagAutoragConfigSyncResponse,
  type AutoRagRagAutoragConfigFilesParams,
  type AutoRagRagAutoragConfigSyncParams,
} from './resources/auto-rag-rag';
import {
  AutoRagJobs,
  type AutoRagJobAutoragConfigListResponse,
  type AutoRagJobAutoragConfigGetResponse,
  type AutoRagJobAutoragConfigListLogsResponse,
  type AutoRagJobAutoragConfigListParams,
  type AutoRagJobAutoragConfigGetParams,
  type AutoRagJobAutoragConfigListLogsParams,
} from './resources/auto-rag-jobs';
import { BillableUsage } from './resources/billable-usage';
import { BillableUsageV2, type BillableUsageV2QueryAccountParams } from './resources/billable-usage-v2';
import { AccountBilling } from './resources/account-billing';
import {
  AccountBillingHistory,
  type AccountBillingHistoryListParams,
} from './resources/account-billing-history';
import {
  AccountBillingProfile,
  type AccountBillingProfileUpdateEmailParams,
  type AccountBillingProfileCreateParams,
  type AccountBillingProfileUpdateParams,
} from './resources/account-billing-profile';
import { UsageAnalytics } from './resources/usage-analytics';
import {
  BotnetThreatFeed,
  type BotnetThreatFeedListDayReportResponse,
  type BotnetThreatFeedListFullReportResponse,
  type BotnetThreatFeedListASNResponse,
  type BotnetThreatFeedDeleteASNResponse,
  type BotnetThreatFeedListDayReportParams,
  type BotnetThreatFeedListFullReportParams,
  type BotnetThreatFeedDeleteASNParams,
} from './resources/botnet-threat-feed';
import { BrandProtection } from './resources/brand-protection';
import {
  LogoMatch,
  type LogoMatchListAccountsAccountBrandProtectionMatchesParams,
  type LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams,
  type LogoMatchPostAccountsAccountIDBrandProtectionParams,
  type LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams,
  type LogoMatchRetrieveAccountsAccountBrandProtectionParams,
} from './resources/logo-match';
import {
  DomainSearch,
  type DomainSearchListAccountsAccountBrandProtectionMatchesParams,
  type DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams,
  type DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams,
  type DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams,
  type DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams,
  type DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams,
  type DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams,
  type DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams,
} from './resources/domain-search';
import {
  BrowserExtensionConfig,
  type BrowserExtensionConfigAccountsDeleteParams,
  type BrowserExtensionConfigAccountsGetParams,
  type BrowserExtensionConfigAccountsPostParams,
  type BrowserExtensionConfigAccountsPutParams,
} from './resources/browser-extension-config';
import {
  BrowserExtensionInventories,
  type BrowserExtensionInventoryAccountsListParams,
  type BrowserExtensionInventoryAccountsGetParams,
} from './resources/browser-extension-inventories';
import {
  Brapi,
  type BrapiPostAccessibilityTreeResponse,
  type BrapiPostContentResponse,
  type BrapiPostCrawlResponse,
  type BrapiDeleteCancelCrawlResponse,
  type BrapiRetrieveCrawlResultResponse,
  type BrapiPostDevtoolsAcquireResponse,
  type BrapiDeleteDevtoolsBrowserDeleteResponse,
  type BrapiListDevtoolsJsonResponse,
  type BrapiRetrieveDevtoolsJsonActivateResponse,
  type BrapiRetrieveDevtoolsJsonCloseResponse,
  type BrapiListDevtoolsJsonListResponse,
  type BrapiRetrieveDevtoolsJsonTargetResponse,
  type BrapiPutDevtoolsJsonNewResponse,
  type BrapiListDevtoolsJsonProtocolResponse,
  type BrapiListDevtoolsJsonVersionResponse,
  type BrapiPostDevtoolsLiveViewResponse,
  type BrapiListDevtoolsSessionListResponse,
  type BrapiRetrieveDevtoolsSessionDetailsResponse,
  type BrapiPostJsonResponse,
  type BrapiPostLinksResponse,
  type BrapiPostMarkdownResponse,
  type BrapiPostScrapeResponse,
  type BrapiPostScreenshotResponse,
  type BrapiPostSnapshotResponse,
  type BrapiPostAccessibilityTreeParams,
  type BrapiPostContentParams,
  type BrapiPostCrawlParams,
  type BrapiDeleteCancelCrawlParams,
  type BrapiRetrieveCrawlResultParams,
  type BrapiListDevtoolsBrowserAcquireParams,
  type BrapiPostDevtoolsAcquireParams,
  type BrapiDeleteDevtoolsBrowserDeleteParams,
  type BrapiRetrieveDevtoolsBrowserParams,
  type BrapiListDevtoolsJsonParams,
  type BrapiRetrieveDevtoolsJsonActivateParams,
  type BrapiRetrieveDevtoolsJsonCloseParams,
  type BrapiListDevtoolsJsonListParams,
  type BrapiRetrieveDevtoolsJsonTargetParams,
  type BrapiPutDevtoolsJsonNewParams,
  type BrapiListDevtoolsJsonProtocolParams,
  type BrapiListDevtoolsJsonVersionParams,
  type BrapiPostDevtoolsLiveViewParams,
  type BrapiRetrieveDevtoolsPageParams,
  type BrapiListDevtoolsSessionListParams,
  type BrapiRetrieveDevtoolsSessionDetailsParams,
  type BrapiPostJsonParams,
  type BrapiPostLinksParams,
  type BrapiPostMarkdownParams,
  type BrapiPostPdfParams,
  type BrapiPostScrapeParams,
  type BrapiPostScreenshotParams,
  type BrapiPostSnapshotParams,
} from './resources/brapi/brapi';
import {
  Builds,
  type BuildListVersionResponse,
  type BuildListLatestScriptsResponse,
  type BuildRetrieveResponse,
  type BuildCancelByUUIDResponse,
  type BuildListLogsResponse,
  type BuildListVersionParams,
  type BuildListLatestScriptsParams,
  type BuildRetrieveParams,
  type BuildCancelByUUIDParams,
  type BuildListLogsParams,
} from './resources/builds';
import {
  RepositoryConnections,
  type RepositoryConnectionUpsertRepoResponse,
  type RepositoryConnectionUpsertRepoParams,
  type RepositoryConnectionDeleteRepoParams,
} from './resources/repository-connections';
import {
  GitHubIntegration,
  type GitHubIntegrationListWorkerConfigAutofillResponse,
  type GitHubIntegrationListWorkerConfigAutofillParams,
} from './resources/git-hub-integration';
import {
  BuildTokens,
  type BuildTokenListResponse,
  type BuildTokenCreateResponse,
  type BuildTokenCreateParams,
  type BuildTokenDeleteParams,
} from './resources/build-tokens';
import {
  Triggers,
  type TriggerCreateResponse,
  type TriggerUpdateResponse,
  type TriggerCreateManualBuildResponse,
  type TriggerCreateParams,
  type TriggerDeleteParams,
  type TriggerUpdateParams,
  type TriggerCreateManualBuildParams,
  type TriggerPurgeBuildCacheParams,
} from './resources/triggers';
import {
  EnvironmentVariables,
  type EnvironmentVariableListResponse,
  type EnvironmentVariableUpsertResponse,
  type EnvironmentVariableListParams,
  type EnvironmentVariableUpsertParams,
  type EnvironmentVariableDeleteParams,
} from './resources/environment-variables';
import {
  Workers,
  type WorkerCreateBuildResponse,
  type WorkerListBuildsByScriptResponse,
  type WorkerListTriggersByScriptResponse,
  type WorkerDeleteBuildResponse,
  type WorkerRetrieveBuildResponse,
  type WorkerUpdateBuildResponse,
  type WorkerCreateBuildParams,
  type WorkerListBuildsByScriptParams,
  type WorkerListTriggersByScriptParams,
  type WorkerDeleteBuildParams,
  type WorkerRetrieveBuildParams,
  type WorkerUpdateBuildParams,
} from './resources/workers';
import {
  DeployHooks,
  type DeployHookListResponse,
  type DeployHookCreateResponse,
  type DeployHookDeleteResponse,
  type DeployHookRetrieveResponse,
  type DeployHookUpdateResponse,
  type DeployHookListParams,
  type DeployHookCreateParams,
  type DeployHookDeleteParams,
  type DeployHookRetrieveParams,
  type DeployHookUpdateParams,
} from './resources/deploy-hooks';
import {
  AccountSubscriptions,
  type AccountSubscriptionBulkCreateParams,
} from './resources/account-subscriptions';
import {
  CallsApps,
  type CallsAppCreateANewParams,
  type CallsAppDeleteParams,
  type CallsAppRetrieveDetailsParams,
  type CallsAppUpdateDetailsParams,
} from './resources/calls-apps';
import {
  CallsTurnKeys,
  type CallsTurnKeyCreateParams,
  type CallsTurnKeyDeleteParams,
  type CallsTurnKeyRetrieveDetailsParams,
  type CallsTurnKeyUpdateParams,
} from './resources/calls-turn-keys';
import {
  CloudflareTunnel,
  type CloudflareTunnelListParams,
  type CloudflareTunnelCreateAParams,
  type CloudflareTunnelDeleteAParams,
  type CloudflareTunnelRetrieveAParams,
  type CloudflareTunnelUpdateAParams,
  type CloudflareTunnelCleanUpConnectionsParams,
  type CloudflareTunnelListConnectionsParams,
  type CloudflareTunnelRetrieveConnectorParams,
  type CloudflareTunnelCreateAManagementTokenParams,
  type CloudflareTunnelListATokenParams,
} from './resources/cloudflare-tunnel';
import {
  CloudflareTunnelConfiguration,
  type CloudflareTunnelConfigurationListParams,
  type CloudflareTunnelConfigurationPutParams,
} from './resources/cloudflare-tunnel-configuration';
import {
  Turnstile,
  type TurnstileAccountsWidgetsListResponse,
  type TurnstileAccountsWidgetCreateResponse,
  type TurnstileAccountsWidgetDeleteResponse,
  type TurnstileAccountsWidgetGetResponse,
  type TurnstileAccountsWidgetUpdateResponse,
  type TurnstileAccountsWidgetRotateSecretResponse,
  type TurnstileAccountsWidgetsListParams,
  type TurnstileAccountsWidgetCreateParams,
  type TurnstileAccountsWidgetDeleteParams,
  type TurnstileAccountsWidgetGetParams,
  type TurnstileAccountsWidgetUpdateParams,
  type TurnstileAccountsWidgetRotateSecretParams,
} from './resources/turnstile';
import {
  Scans,
  type ScanRetrieveGetBannersResponse,
  type ScanRetrieveGetBannersParams,
} from './resources/scans';
import {
  BinDB,
  type BinDBPostPostResponse,
  type BinDBPostPostParams,
  type BinDBRetrieveGetBinaryParams,
} from './resources/bin-db';
import {
  Event,
  type EventListListGetResponse,
  type EventListAggregateResponse,
  type EventCreateResponse,
  type EventPostCreateBulkResponse,
  type EventPostDosCreateBulkWithRelationshipsResponse,
  type EventPostCopyToNewDSResponse,
  type EventRetrieveReadResponse,
  type EventPostMoveToNewDSResponse,
  type EventDeleteTagDeleteResponse,
  type EventCreate4Response,
  type EventPostGraphQlResponse,
  type EventListQueryListResponse,
  type EventCreate2Response,
  type EventRetrieveQueryReadResponse,
  type EventPatchQueryUpdateResponse,
  type EventPostQueryUpdateResponse,
  type EventRetrieveRawReadDSResponse,
  type EventDeleteReferenceDeleteResponse,
  type EventCreate5Response,
  type EventCreate3Response,
  type EventPatchUpdateBulkResponse,
  type EventDeleteResponse,
  type EventRetrieveReadDeprecatedResponse,
  type EventPatchUpdateResponse,
  type EventPostUpdateResponse,
  type EventRetrieveRawReadResponse,
  type EventPatchRawUpdateResponse,
  type EventPostRawUpdateResponse,
  type EventListRelationshipsResponse,
  type EventListListGetParams,
  type EventListAggregateParams,
  type EventCreateParams,
  type EventPostCreateBulkParams,
  type EventPostDosCreateBulkWithRelationshipsParams,
  type EventPostCopyToNewDSParams,
  type EventRetrieveReadParams,
  type EventPostMoveToNewDSParams,
  type EventDeleteTagDeleteParams,
  type EventCreate4Params,
  type EventCreate2Params,
  type EventDeleteQueryDeleteParams,
  type EventRetrieveQueryReadParams,
  type EventPatchQueryUpdateParams,
  type EventPostQueryUpdateParams,
  type EventRetrieveRawReadDSParams,
  type EventDeleteReferenceDeleteParams,
  type EventCreate5Params,
  type EventCreate3Params,
  type EventPatchUpdateBulkParams,
  type EventDeleteParams,
  type EventRetrieveReadDeprecatedParams,
  type EventPatchUpdateParams,
  type EventPostUpdateParams,
  type EventRetrieveRawReadParams,
  type EventPatchRawUpdateParams,
  type EventPostRawUpdateParams,
  type EventListRelationshipsParams,
} from './resources/event';
import { Attacker, type AttackerListListResponse, type AttackerListListParams } from './resources/attacker';
import {
  Category,
  type CategoryListListResponse,
  type CategoryListListCompleteResponse,
  type CategoryCreateResponse,
  type CategoryDeleteDeleteResponse,
  type CategoryRetrieveReadResponse,
  type CategoryPatchUpdateResponse,
  type CategoryPostUpdateResponse,
  type CategoryListListParams,
  type CategoryCreateParams,
  type CategoryDeleteDeleteParams,
  type CategoryRetrieveReadParams,
  type CategoryPatchUpdateParams,
  type CategoryPostUpdateParams,
} from './resources/category';
import { Country, type CountryListReadResponse } from './resources/country';
import {
  Dataset,
  type DatasetListListResponse,
  type DatasetCreateResponse,
  type DatasetDeleteDeleteResponse,
  type DatasetRetrieveReadResponse,
  type DatasetPatchUpdateResponse,
  type DatasetPostUpdateResponse,
  type DatasetListListParams,
  type DatasetCreateParams,
  type DatasetDeleteDeleteParams,
  type DatasetRetrieveReadParams,
  type DatasetPatchUpdateParams,
  type DatasetPostUpdateParams,
} from './resources/dataset';
import {
  Groups,
  type GroupListListResponse,
  type GroupPostCreateResponse,
  type GroupDeleteDeleteResponse,
  type GroupRetrieveReadResponse,
  type GroupPutUpdateResponse,
  type GroupListMemberListResponse,
  type GroupPostMemberCreateResponse,
  type GroupDeleteMemberDeleteResponse,
  type GroupPostCreateParams,
  type GroupDeleteDeleteParams,
  type GroupRetrieveReadParams,
  type GroupPutUpdateParams,
  type GroupListMemberListParams,
  type GroupPostMemberCreateParams,
  type GroupDeleteMemberDeleteParams,
} from './resources/groups';
import { Indicators, type IndicatorCreateResponse, type IndicatorCreateParams } from './resources/indicators';
import {
  Indicator,
  type IndicatorListListLegacyResponse,
  type IndicatorPostCreateBulkResponse,
  type IndicatorCreateResponse as IndicatorIndicatorCreateResponse,
  type IndicatorListTagsListResponse,
  type IndicatorDeleteDeleteResponse,
  type IndicatorRetrieveReadResponse,
  type IndicatorPatchUpdateResponse,
  type IndicatorListRelationshipsListResponse,
  type IndicatorPostRelationshipCreateResponse,
  type IndicatorDeleteRelationshipDeleteResponse,
  type IndicatorPatchRelationshipUpdateResponse,
  type IndicatorListListResponse,
  type IndicatorListAggregateResponse,
  type IndicatorListListLegacyParams,
  type IndicatorPostCreateBulkParams,
  type IndicatorCreateParams as IndicatorIndicatorCreateParams,
  type IndicatorListTagsListParams,
  type IndicatorDeleteDeleteParams,
  type IndicatorRetrieveReadParams,
  type IndicatorPatchUpdateParams,
  type IndicatorListRelationshipsListParams,
  type IndicatorPostRelationshipCreateParams,
  type IndicatorDeleteRelationshipDeleteParams,
  type IndicatorPatchRelationshipUpdateParams,
  type IndicatorListListParams,
  type IndicatorListAggregateParams,
} from './resources/indicator';
import {
  Permissions,
  type PermissionListListResponse,
  type PermissionPostCreateResponse,
  type PermissionDeleteDeleteResponse,
  type PermissionPutUpdateResponse,
  type PermissionListListParams,
  type PermissionPostCreateParams,
  type PermissionDeleteDeleteParams,
  type PermissionPutUpdateParams,
} from './resources/permissions';
import {
  Tag,
  type TagListDatasetIndicatorsListResponse,
  type TagListListResponse,
  type TagCreateResponse,
  type TagDeleteDeleteResponse,
  type TagRetrieveDetailResponse,
  type TagPatchUpdateResponse,
  type TagListIndicatorsListResponse,
  type TagListRelationshipsListResponse,
  type TagPostRelationshipCreateResponse,
  type TagDeleteRelationshipDeleteResponse,
  type TagPatchRelationshipUpdateResponse,
  type TagListDatasetIndicatorsListParams,
  type TagListListParams,
  type TagCreateParams,
  type TagDeleteDeleteParams,
  type TagRetrieveDetailParams,
  type TagPatchUpdateParams,
  type TagListIndicatorsListParams,
  type TagListRelationshipsListParams,
  type TagPostRelationshipCreateParams,
  type TagDeleteRelationshipDeleteParams,
  type TagPatchRelationshipUpdateParams,
} from './resources/tag';
import {
  TargetIndustry,
  type TargetIndustryListListDatasetResponse,
  type TargetIndustryListListResponse,
  type TargetIndustryListListCompleteResponse,
  type TargetIndustryListListDatasetParams,
  type TargetIndustryListListParams,
} from './resources/target-industry';
import { Datasets, type DatasetPostPopulateResponse } from './resources/datasets';
import { Events, type EventListGraphResponse, type EventListGraphParams } from './resources/events';
import {
  IndicatorTypes,
  type IndicatorTypeListListResponse,
  type IndicatorTypeListLegacyListResponse,
  type IndicatorTypeListListParams,
} from './resources/indicator-types';
import {
  TagCategory,
  type TagCategoryListListResponse,
  type TagCategoryCreateResponse,
  type TagCategoryDeleteDeleteResponse,
  type TagCategoryRetrieveDetailResponse,
  type TagCategoryPatchUpdateResponse,
  type TagCategoryListListParams,
  type TagCategoryCreateParams,
  type TagCategoryDeleteDeleteParams,
  type TagCategoryRetrieveDetailParams,
  type TagCategoryPatchUpdateParams,
} from './resources/tag-category';
import {
  RequestForInformationRfi,
  type RequestForInformationRfiCloudforceOneListResponse,
  type RequestForInformationRfiCloudforceOneConstantsResponse,
  type RequestForInformationRfiCloudforceOneNewResponse,
  type RequestForInformationRfiCloudforceOneQuotaResponse,
  type RequestForInformationRfiCloudforceOneTypesResponse,
  type RequestForInformationRfiCloudforceOneGetResponse,
  type RequestForInformationRfiCloudforceOneUpdateResponse,
  type RequestForInformationRfiCloudforceOneAssetListResponse,
  type RequestForInformationRfiCloudforceOneAssetNewResponse,
  type RequestForInformationRfiCloudforceOneAssetGetResponse,
  type RequestForInformationRfiCloudforceOneAssetUpdateResponse,
  type RequestForInformationRfiCloudforceOneMessageListResponse,
  type RequestForInformationRfiCloudforceOneMessageNewResponse,
  type RequestForInformationRfiCloudforceOneMessageUpdateResponse,
  type RequestForInformationRfiCloudforceOneListParams,
  type RequestForInformationRfiCloudforceOneNewParams,
  type RequestForInformationRfiCloudforceOneDeleteParams,
  type RequestForInformationRfiCloudforceOneGetParams,
  type RequestForInformationRfiCloudforceOneUpdateParams,
  type RequestForInformationRfiCloudforceOneAssetListParams,
  type RequestForInformationRfiCloudforceOneAssetNewParams,
  type RequestForInformationRfiCloudforceOneAssetDeleteParams,
  type RequestForInformationRfiCloudforceOneAssetGetParams,
  type RequestForInformationRfiCloudforceOneAssetUpdateParams,
  type RequestForInformationRfiCloudforceOneMessageListParams,
  type RequestForInformationRfiCloudforceOneMessageNewParams,
  type RequestForInformationRfiCloudforceOneMessageDeleteParams,
  type RequestForInformationRfiCloudforceOneMessageUpdateParams,
} from './resources/request-for-information-rfi';
import {
  PriorityIntelligenceRequirementsPir,
  type PriorityIntelligenceRequirementsPirCloudforceOneListResponse,
  type PriorityIntelligenceRequirementsPirCloudforceOneNewResponse,
  type PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse,
  type PriorityIntelligenceRequirementsPirCloudforceOneGetResponse,
  type PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse,
  type PriorityIntelligenceRequirementsPirCloudforceOneListParams,
  type PriorityIntelligenceRequirementsPirCloudforceOneNewParams,
  type PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams,
  type PriorityIntelligenceRequirementsPirCloudforceOneGetParams,
  type PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams,
} from './resources/priority-intelligence-requirements-pir';
import {
  Rules,
  type RuleCloudforceOneGetManagedResponse,
  type RuleCloudforceOneListParams,
  type RuleCloudforceOneCreateParams,
  type RuleCloudforceOneRemoveAccountExemptionsParams,
  type RuleCloudforceOneAddAccountExemptionsParams,
  type RuleCloudforceOneUpdateAccountExemptionsParams,
  type RuleSearchParams,
  type RuleCloudforceOneListEmailParams,
  type RuleCloudforceOneCreateEmailParams,
} from './resources/rules';
import {
  Approvals,
  type ApprovalCloudforceOneListRuleParams,
  type ApprovalCloudforceOneGetRuleParams,
  type ApprovalCloudforceOneCancelRuleParams,
  type ApprovalCloudforceOneResubmitRuleParams,
} from './resources/approvals';

export type AuthTokenProvider = () => string | Promise<string>;

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env["QA_SWITCH_TEST_BASE_URL"].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   *
   * The client passes `redirect: 'manual'` and follows redirects itself, dropping credentials when
   * a redirect leaves the API's origin. A custom `fetch` must honor that option: one that follows
   * redirects on its own would re-send API keys and cookies to whatever host a redirect names, and
   * a response it reports as `redirected` is refused for that reason. Every hop of a redirect goes
   * through this function, so a wrapper that adds a credential itself must add it only for the
   * API's own origin. A request whose `fetchOptions` set `redirect: 'manual'` gets its 3xx answer
   * back unfollowed, so a caller can read a signed URL from `Location`; `'error'` is kept too.
   *
   * In a browser or a browser worker, which hide a manual redirect's target, a request whose only
   * credentials are ones the browser itself keeps on the origin (`Authorization`, cookies) is sent
   * with `redirect: 'follow'`. A request carrying an API key header is not, so a redirect it meets
   * fails with an `APIConnectionError` rather than handing that key to another host.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["QA_SWITCH_TEST_LOG"] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

export type UnderGateMultiSectionQaOptions = ClientOptions;

/**
 * API Client for interfacing with the UnderGateMultiSectionQa API (hand-edited on scalar-next for QA).
 */
export class UnderGateMultiSectionQa {
  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  /**
   * The `fetch` implementation every request is sent through: the `fetch` client option, or the
   * platform default. A replacement must honor the same contract as that option.
   */
  fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _baseURLOverridden: boolean;
  private _defaultBaseURL: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the UnderGateMultiSectionQa API.
   *
   * @param {string} [opts.baseURL=process.env["QA_SWITCH_TEST_BASE_URL"] ?? https://api.cloudflare.com/client/v4] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = readEnv('QA_SWITCH_TEST_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || 'https://api.cloudflare.com/client/v4',
    };
    const baseURLOverridden = baseURL !== null && baseURL !== undefined && baseURL !== '';
    const defaultBaseURL = 'https://api.cloudflare.com/client/v4';
    this.baseURL = options.baseURL || defaultBaseURL;
    this.timeout = options.timeout ?? UnderGateMultiSectionQa.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('QA_SWITCH_TEST_LOG'), 'process.env["QA_SWITCH_TEST_LOG"]', this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('QA_SWITCH_TEST_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = { ...options, baseURL: baseURLOverridden ? this.baseURL : undefined };
    this._baseURLOverridden = baseURLOverridden;
    this._defaultBaseURL = defaultBaseURL;
  }

  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this._options,
      ...(this.#baseURLOverridden() ? { baseURL: this.baseURL } : {}),
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      ...options,
    });
    return client;
  }

  #baseURLOverridden(): boolean {
    // A named environment selects a default URL; only explicit overrides should bypass per-request defaults.
    return this._baseURLOverridden || this.baseURL !== this._defaultBaseURL;
  }

  /**
   * The client as `JSON.stringify` sees it: every credential masked, and the resource accessors,
   * which point back at the client, left out.
   */
  toJSON(): Record<string, unknown> {
    const view: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(this)) {
      if (typeof value === 'object' && value !== null && (value as { _client?: unknown })._client === this)
        continue;
      view[key] = redactClientField(key, value);
    }
    return view;
  }

  /** What `console.log` and `util.inspect` print for the client: the masked view `toJSON` builds. */
  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `UnderGateMultiSectionQa/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `scalar-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: object | undefined,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    // Guarantee exactly one "/" between baseURL and path so that bases without a trailing slash
    // and paths without a leading slash do not fuse into a malformed URL (e.g. ".../v1" + "widgets").
    const url = isAbsoluteURL(path)
      ? new URL(path)
      : new URL(
          (baseURL.endsWith('/') ? baseURL : baseURL + '/') + (path.startsWith('/') ? path.slice(1) : path),
        );

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts } as FinalRequestOptions;
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    // The deadline stays armed until the body is read, not just until headers arrive, so a server
    // that answers quickly and then trickles its body is still cut off at `timeout`.
    const { release: releaseDeadline, unref: unrefDeadline } = this.#armDeadline(
      req.signal,
      timeout,
      controller,
    );
    // A subclass's own `fetchWithTimeout` sends the request; the deadline above still covers the body.
    const viaOverride = this.fetchWithTimeout !== UnderGateMultiSectionQa.prototype.fetchWithTimeout;
    const response = await (viaOverride
      ? Promise.resolve().then(() => this.fetchWithTimeout(url, req, timeout, controller))
      : this.#fetchFollowingRedirects(url, req, controller)
    ).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      releaseDeadline();
      // A redirect the SDK refused to follow fails the same way on every attempt, so it is not retried.
      if (isRefusedRedirect(response)) throw response;
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      // The signal the request was sent with, so an aborted `fetchOptions.signal` reads as a cancel too.
      if (req.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID, req.signal);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${redactUrl(url)} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        releaseDeadline();
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          req.signal,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      // Only the first 64 KiB of an error body is read: enough for any message, and a hostile or
      // broken server cannot make the client buffer more. The read still runs under the deadline.
      const errText = await readBodyText(response, MAX_ERROR_BODY_BYTES, 'truncate').catch(
        (err: any) => castToError(err).message,
      );
      releaseDeadline();
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    // A streamed or binary body is the caller's to read at its own pace, so the deadline ends with
    // the headers there; a buffered body keeps it until `defaultParseResponse` has read it.
    if (options.stream || options.__binaryResponse) releaseDeadline();
    else {
      // Unreferenced so a response nobody parses (a call never awaited) cannot hold the process
      // open until the deadline; a body being read keeps it alive through its own socket.
      unrefDeadline();
      holdDeadline(controller, releaseDeadline);
    }

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  /**
   * Sends one request with a deadline on its response headers, following redirects as the client
   * does.
   *
   * Override it in a subclass to wrap every HTTP request this client sends to its API, retries included;
   * call `super.fetchWithTimeout` to send, which keeps the client's redirect handling. When a redirect
   * leaves the origin that drops the client's own credential headers, but a header an override adds
   * goes on to the redirect target, so a secret belongs in a client option rather than added here.
   * A client that does not override it skips this method and sends directly.
   *
   * The SDK's own deadline aborts `controller` and stays armed until a buffered body is read, so it
   * cuts off an override that sends through `super` or passes `controller.signal` on; a larger `ms`
   * passed to `super` cannot extend it, so set the `timeout` option instead.
   */
  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const deadline = this.#armDeadline(init?.signal, ms, controller);
    try {
      return await this.#fetchFollowingRedirects(url, init, controller);
    } finally {
      deadline.release();
    }
  }

  /**
   * Starts the request deadline on `controller` and forwards the caller's abort signal to it.
   *
   * `release` disarms the deadline. `unref` stops it alone from keeping a Node process alive, for
   * the stretch where it waits on a body nobody may ever read.
   */
  #armDeadline(
    signal: RequestInit['signal'],
    ms: number,
    controller: AbortController,
  ): { release: () => void; unref: () => void } {
    const abort = this._makeAbort(controller);
    if (signal?.aborted) abort();
    else if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);
    return {
      release: () => clearTimeout(timeout),
      unref: () => (timeout as { unref?: () => void } | undefined)?.unref?.(),
    };
  }

  /**
   * Sends one request, following its redirects here rather than in `fetch`.
   *
   * Platform `fetch` strips only `Authorization` when a redirect leaves the origin, so it would hand
   * a header API key, cookies and a 307 body to whatever host the API names. Following here, where
   * the client knows which headers carry credentials, keeps them on the API's own origin.
   */
  async #fetchFollowingRedirects(
    url: RequestInfo,
    init: RequestInit | undefined,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const isReadableBody = isOneShotBody(options.body);
    const request = typeof url === 'string' || url instanceof URL ? undefined : url;
    const carriesUnguardedCredential = [...new Headers(options.headers ?? request?.headers).keys()].some(
      (name) => CREDENTIAL_HEADERS.includes(name) && !BROWSER_GUARDED_HEADERS.includes(name),
    );
    const browserFollows = hidesRedirectTargets() && !carriesUnguardedCredential;
    const callerRedirect =
      options.redirect === 'error' || options.redirect === 'manual' ? options.redirect : undefined;

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
      redirect: callerRedirect ?? (browserFollows ? 'follow' : 'manual'),
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    // use undefined this binding; fetch errors if bound to something else in browsers and edge runtimes / workers
    let response = await this.fetch.call(undefined, url, fetchOptions);
    let current = request ? request.url : String(url);
    let hop: RequestInit = {
      ...fetchOptions,
      headers: new Headers(fetchOptions.headers ?? request?.headers),
    };
    // Once a hop leaves the origin, credentials stay dropped for the rest of the chain, even if a
    // later hop comes back: the foreign host chose where that hop goes.
    let leftOrigin = false;
    for (let redirects = 0; ; redirects++) {
      if (callerRedirect) return response;
      if (hop.redirect === 'manual' && response.redirected) {
        throw refuseRedirect(
          "The fetch implementation followed a redirect itself although the client asked it not to, so its response was not used. A custom fetch must honor redirect: 'manual'.",
        );
      }
      if (response.type === 'opaqueredirect') {
        // Browsers answer a manual redirect with an opaque response that hides its target, so there
        // is nothing safe to follow; it is refused rather than mistaken for the API's answer.
        throw refuseRedirect(
          carriesUnguardedCredential
            ? 'The server answered with a redirect, which this request does not follow: the platform hides the target from the SDK, and the request carries an API key header that could reach another host. Call the redirect target directly, or send the request from a server.'
            : 'The server answered with a redirect whose target this platform hides from the SDK, so it was not followed. Call the redirect target directly, or send the request from a server.',
        );
      }
      const location = REDIRECT_STATUSES.includes(response.status)
        ? response.headers.get('location')?.trim()
        : undefined;
      if (!location) return response;
      await Shims.CancelReadableStream(response.body);
      if (redirects >= MAX_REDIRECTS) throw refuseRedirect(`Maximum redirects exceeded (${MAX_REDIRECTS}).`);

      const from = new URL(current);
      let target: URL;
      try {
        target = new URL(location, from);
      } catch {
        throw refuseRedirect('The server redirected to a URL that cannot be parsed.');
      }
      if (target.protocol !== 'https:' && target.protocol !== 'http:') {
        throw refuseRedirect(`Refusing to follow a redirect to a ${target.protocol} URL.`);
      }
      if (from.protocol === 'https:' && target.protocol === 'http:') {
        throw refuseRedirect('Refusing to follow a redirect from https to http.');
      }

      const headers = new Headers(hop.headers);
      let nextMethod = hop.method ?? 'GET';
      let body = hop.body ?? request?.body ?? undefined;
      // A 303 (but for HEAD), and a 301 or 302 answering a POST, re-ask with a bodiless GET, as
      // browsers do. Every other redirect repeats the request, so its body has to be sent again.
      if (
        (response.status === 303 && nextMethod !== 'HEAD') ||
        ((response.status === 301 || response.status === 302) && nextMethod === 'POST')
      ) {
        nextMethod = 'GET';
        body = undefined;
        for (const name of [...headers.keys()]) if (name.startsWith('content-')) headers.delete(name);
      } else if (body != null && isOneShotBody(body)) {
        throw refuseRedirect(
          `Refusing to follow a ${response.status} redirect: the request body was a stream, which cannot be sent again.`,
        );
      }

      if (target.origin !== from.origin) leftOrigin = true;
      if (leftOrigin) {
        for (const name of CREDENTIAL_HEADERS) headers.delete(name);
      } else {
        // A `Location` the server spelled does not repeat our query credentials, so a same-origin
        // hop carries them over; appended rather than set so the target's own query keeps its bytes.
        for (const name of CREDENTIAL_QUERY) {
          const value = from.searchParams.get(name);
          if (value === null || target.searchParams.has(name)) continue;
          target.search =
            (target.search ? target.search + '&' : '?') +
            encodeURIComponent(name) +
            '=' +
            encodeURIComponent(value);
        }
      }

      hop = { ...hop, method: nextMethod, headers };
      if (body == null) {
        delete hop.body;
        delete (hop as { duplex?: unknown }).duplex;
      } else {
        hop.body = body;
      }
      current = target.href;
      response = await this.fetch.call(undefined, current, hop);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    signal: RequestInit['signal'],
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it says,
    // but cap server-provided delays at 60s so an oversized or malformed Retry-After
    // (e.g. `retry-after-ms: 999999999`, a past HTTP-date, or a value that Date.parse
    // failed on) cannot block retries for an unbounded amount of time. Otherwise fall
    // back to the default exponential-backoff calculation.
    const maxRetryAfterMillis = 60 * 1000;
    if (
      timeoutMillis === undefined ||
      !Number.isFinite(timeoutMillis) ||
      timeoutMillis <= 0 ||
      timeoutMillis > maxRetryAfterMillis
    ) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    // Cancelling during the backoff ends the call now, rather than after the delay and one more request.
    await sleep(timeoutMillis, signal);
    if (signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    // Headers read the caller's own options, not the copy defaulted above: `X-Scalar-Timeout`
    // reports an explicit per-request timeout, and the idempotency key written back here has to
    // land where the retry can see it.
    const reqHeaders = await this.buildHeaders({
      options: inputOptions,
      method,
      bodyHeaders,
      retryCount,
      url,
    });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      // `buildBody` already collapses no-body into `undefined`; here we only need to drop that
      // sentinel. A truthiness spread would also strip an intentional empty-string body.
      ...(body !== undefined && { body }),
      ...((this.fetchOptions as any) ?? {}),
      // The call's own signal beats the client's `fetchOptions.signal`; the call's `fetchOptions` beats both.
      ...(options.signal && { signal: options.signal }),
      ...((options.fetchOptions as any) ?? {}),
    };
    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
    url,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
    url: string;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Scalar-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Scalar-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);
    appendAuthCookies(headers.values, await this.authCookiesAsync());

    this.validateAuth(url, headers.values, options);
    // Last, so a subclass sees the headers as they leave here, after the SDK has checked the auth.
    await this.validateHeaders(headers);

    return headers.values;
  }

  /**
   * Runs once for every HTTP request built from the client's headers, at the end of header building,
   * with the headers it will be sent with: `values` holds them and `nulls` the names the call removed
   * with a `null`.
   * Throwing, or rejecting from an `async` override, which is awaited, rejects the request before it
   * is sent. Does nothing unless a subclass overrides it.
   * `fetchOptions.headers` and `prepareRequest` are applied afterwards, so the hook does not see them.
   */
  protected validateHeaders({ values, nulls }: NullableHeaders): void {}

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `#armDeadline()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    // Skip only `null`/`undefined` so an intentional empty-string (or 0/false) payload still
    // reaches the encoder. A plain `!body` check would silently drop those falsy-but-valid bodies,
    // and `null` must be excluded here too because the iterator check below uses `in`, which
    // throws on null.
    if (body == null) {
      return { bodyHeaders: undefined, body: undefined };
    }
    // A `content-type` from either header bag says how the body is already encoded; the request's
    // own wins over the client-wide default, as it does on the wire.
    const headers = buildHeaders([this._options.defaultHeaders, rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      // A string is only already-encoded when something has said what it is encoded as.
      // Generated call sites state the declared request media type, so a `text/plain` or
      // ndjson payload reaches the wire byte-for-byte. A string with no `content-type` came
      // from a body the document declared as JSON — `{ "type": "string" }` — and encoding it
      // below is what puts the quotes the server parses for around it.
      (typeof body === 'string' && headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  protected validateAuth(url: string, headers: Headers, options: FinalRequestOptions): void {
    return;
  }

  authHeadersSync(): Record<string, string> {
    const headers: Record<string, string> = {};
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    return {};
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return undefined;
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async resolveAuthOption(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? await value() : value;
    if (!token)
      throw new Errors.UnderGateMultiSectionQaError(
        `Expected '${optionName}' to resolve to a non-empty string.`,
      );
    return token;
  }

  private resolveAuthOptionSync(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? value() : value;
    if (typeof token !== 'string' || !token)
      throw new Errors.UnderGateMultiSectionQaError(
        `Expected '${optionName}' to resolve to a non-empty string.`,
      );
    return token;
  }

  static UnderGateMultiSectionQa = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static UnderGateMultiSectionQaError = Errors.UnderGateMultiSectionQaError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = toFile;

  accounts: Accounts = new Accounts(this);
  images: Images = new Images(this);
  customPagesForAnAccount: CustomPagesForAnAccount = new CustomPagesForAnAccount(this);
  customAssetsForAnAccount: CustomAssetsForAnAccount = new CustomAssetsForAnAccount(this);
  tsengAbuseComplaintProcessorOther: TsengAbuseComplaintProcessorOther =
    new TsengAbuseComplaintProcessorOther(this);
  mcpPortalAnalytics: McpPortalAnalytics = new McpPortalAnalytics(this);
  mcpPortal: McpPortal = new McpPortal(this);
  mcpPortalServers: McpPortalServers = new McpPortalServers(this);
  accessApplications: AccessApplications = new AccessApplications(this);
  accessShortLivedCertificateCas: AccessShortLivedCertificateCas = new AccessShortLivedCertificateCas(this);
  accessApplicationScopedPolicies: AccessApplicationScopedPolicies = new AccessApplicationScopedPolicies(
    this,
  );
  accessAuthenticatorDeviceAaguids: AccessAuthenticatorDeviceAaguids = new AccessAuthenticatorDeviceAaguids(
    this,
  );
  accessBookmarkApplicationsDeprecated: AccessBookmarkApplicationsDeprecated =
    new AccessBookmarkApplicationsDeprecated(this);
  accessMTLSAuthentication: AccessMTLSAuthentication = new AccessMTLSAuthentication(this);
  accessCustomPages: AccessCustomPages = new AccessCustomPages(this);
  gatewayCa: GatewayCa = new GatewayCa(this);
  accessGroups: AccessGroups = new AccessGroups(this);
  accessIdentityProviders: AccessIdentityProviders = new AccessIdentityProviders(this);
  accessIdPFederationGrants: AccessIdPFederationGrants = new AccessIdPFederationGrants(this);
  accessKeyConfiguration: AccessKeyConfiguration = new AccessKeyConfiguration(this);
  accessAuthenticationLogs: AccessAuthenticationLogs = new AccessAuthenticationLogs(this);
  accessJitRequestLogs: AccessJitRequestLogs = new AccessJitRequestLogs(this);
  accessScimUpdateLogs: AccessScimUpdateLogs = new AccessScimUpdateLogs(this);
  zeroTrustOrganization: ZeroTrustOrganization = new ZeroTrustOrganization(this);
  accessReusablePolicies: AccessReusablePolicies = new AccessReusablePolicies(this);
  accessPolicyTester: AccessPolicyTester = new AccessPolicyTester(this);
  accessSamlEncryptionCertificates: AccessSamlEncryptionCertificates = new AccessSamlEncryptionCertificates(
    this,
  );
  zeroTrustSeats: ZeroTrustSeats = new ZeroTrustSeats(this);
  accessServiceTokens: AccessServiceTokens = new AccessServiceTokens(this);
  accessTags: AccessTags = new AccessTags(this);
  zeroTrustUsers: ZeroTrustUsers = new ZeroTrustUsers(this);
  ipAddressManagementAddressMaps: IPAddressManagementAddressMaps = new IPAddressManagementAddressMaps(this);
  ipAddressManagementLeases: IPAddressManagementLeases = new IPAddressManagementLeases(this);
  ipAddressManagementPrefixes: IPAddressManagementPrefixes = new IPAddressManagementPrefixes(this);
  ipAddressManagementBGPPrefixes: IPAddressManagementBGPPrefixes = new IPAddressManagementBGPPrefixes(this);
  ipAddressManagementDynamicAdvertisement: IPAddressManagementDynamicAdvertisement =
    new IPAddressManagementDynamicAdvertisement(this);
  ipAddressManagementServiceBindings: IPAddressManagementServiceBindings =
    new IPAddressManagementServiceBindings(this);
  ipAddressManagementPrefixDelegation: IPAddressManagementPrefixDelegation =
    new IPAddressManagementPrefixDelegation(this);
  dlsRegionalServices: DlsRegionalServices = new DlsRegionalServices(this);
  namespaces: Namespaces = new Namespaces(this);
  memory: Memory = new Memory(this);
  aiGateway: AIGateway = new AIGateway(this);
  aiGatewayAccountProviders: AIGatewayAccountProviders = new AIGatewayAccountProviders(this);
  aiGatewayAccountProviderCosts: AIGatewayAccountProviderCosts = new AIGatewayAccountProviderCosts(this);
  aiGatewayEvaluations: AIGatewayEvaluations = new AIGatewayEvaluations(this);
  aiGatewayGateways: AIGatewayGateways = new AIGatewayGateways(this);
  aiGatewayCustomDomains: AIGatewayCustomDomains = new AIGatewayCustomDomains(this);
  aiGatewayDatasets: AIGatewayDatasets = new AIGatewayDatasets(this);
  aiGatewayLogs: AIGatewayLogs = new AIGatewayLogs(this);
  aiGatewayProviderConfigs: AIGatewayProviderConfigs = new AIGatewayProviderConfigs(this);
  aiGatewayDynamicRoutes: AIGatewayDynamicRoutes = new AIGatewayDynamicRoutes(this);
  account: Account = new Account(this);
  aiSearchInstances: AISearchInstances = new AISearchInstances(this);
  aiSearchInstancesJobs: AISearchInstancesJobs = new AISearchInstancesJobs(this);
  aiSearchNamespaces: AISearchNamespaces = new AISearchNamespaces(this);
  aiSearchAccountSearch: AISearchAccountSearch = new AISearchAccountSearch(this);
  aiSearchInstancesItems: AISearchInstancesItems = new AISearchInstancesItems(this);
  aiSearchTokens: AISearchTokens = new AISearchTokens(this);
  workersAI: WorkersAI = new WorkersAI(this);
  workersAIFinetune: WorkersAIFinetune = new WorkersAIFinetune(this);
  finetuneAsset: FinetuneAsset = new FinetuneAsset(this);
  notificationAlertTypes: NotificationAlertTypes = new NotificationAlertTypes(this);
  notificationMechanismEligibility: NotificationMechanismEligibility = new NotificationMechanismEligibility(
    this,
  );
  notificationDestinationsWithPagerDuty: NotificationDestinationsWithPagerDuty =
    new NotificationDestinationsWithPagerDuty(this);
  notificationWebhooks: NotificationWebhooks = new NotificationWebhooks(this);
  notificationHistory: NotificationHistory = new NotificationHistory(this);
  notificationPolicies: NotificationPolicies = new NotificationPolicies(this);
  notificationSilences: NotificationSilences = new NotificationSilences(this);
  dataSecurity: DataSecurity = new DataSecurity(this);
  artAnalytics: ArtAnalytics = new ArtAnalytics(this);
  analyticsEngine: AnalyticsEngine = new AnalyticsEngine(this);
  artifacts: Artifacts = new Artifacts(this);
  auditLogs: AuditLogs = new AuditLogs(this);
  autoRagRagSearch: AutoRagRagSearch = new AutoRagRagSearch(this);
  autoRagRag: AutoRagRag = new AutoRagRag(this);
  autoRagJobs: AutoRagJobs = new AutoRagJobs(this);
  billableUsage: BillableUsage = new BillableUsage(this);
  billableUsageV2: BillableUsageV2 = new BillableUsageV2(this);
  accountBilling: AccountBilling = new AccountBilling(this);
  accountBillingHistory: AccountBillingHistory = new AccountBillingHistory(this);
  accountBillingProfile: AccountBillingProfile = new AccountBillingProfile(this);
  usageAnalytics: UsageAnalytics = new UsageAnalytics(this);
  botnetThreatFeed: BotnetThreatFeed = new BotnetThreatFeed(this);
  brandProtection: BrandProtection = new BrandProtection(this);
  logoMatch: LogoMatch = new LogoMatch(this);
  domainSearch: DomainSearch = new DomainSearch(this);
  browserExtensionConfig: BrowserExtensionConfig = new BrowserExtensionConfig(this);
  browserExtensionInventories: BrowserExtensionInventories = new BrowserExtensionInventories(this);
  brapi: Brapi = new Brapi(this);
  builds: Builds = new Builds(this);
  repositoryConnections: RepositoryConnections = new RepositoryConnections(this);
  gitHubIntegration: GitHubIntegration = new GitHubIntegration(this);
  buildTokens: BuildTokens = new BuildTokens(this);
  triggers: Triggers = new Triggers(this);
  environmentVariables: EnvironmentVariables = new EnvironmentVariables(this);
  workers: Workers = new Workers(this);
  deployHooks: DeployHooks = new DeployHooks(this);
  accountSubscriptions: AccountSubscriptions = new AccountSubscriptions(this);
  callsApps: CallsApps = new CallsApps(this);
  callsTurnKeys: CallsTurnKeys = new CallsTurnKeys(this);
  cloudflareTunnel: CloudflareTunnel = new CloudflareTunnel(this);
  cloudflareTunnelConfiguration: CloudflareTunnelConfiguration = new CloudflareTunnelConfiguration(this);
  turnstile: Turnstile = new Turnstile(this);
  scans: Scans = new Scans(this);
  binDB: BinDB = new BinDB(this);
  event: Event = new Event(this);
  attacker: Attacker = new Attacker(this);
  category: Category = new Category(this);
  country: Country = new Country(this);
  dataset: Dataset = new Dataset(this);
  groups: Groups = new Groups(this);
  indicators: Indicators = new Indicators(this);
  indicator: Indicator = new Indicator(this);
  permissions: Permissions = new Permissions(this);
  tag: Tag = new Tag(this);
  targetIndustry: TargetIndustry = new TargetIndustry(this);
  datasets: Datasets = new Datasets(this);
  events: Events = new Events(this);
  indicatorTypes: IndicatorTypes = new IndicatorTypes(this);
  tagCategory: TagCategory = new TagCategory(this);
  requestForInformationRfi: RequestForInformationRfi = new RequestForInformationRfi(this);
  priorityIntelligenceRequirementsPir: PriorityIntelligenceRequirementsPir =
    new PriorityIntelligenceRequirementsPir(this);
  rules: Rules = new Rules(this);
  approvals: Approvals = new Approvals(this);
}

UnderGateMultiSectionQa.Accounts = Accounts;
UnderGateMultiSectionQa.Images = Images;
UnderGateMultiSectionQa.CustomPagesForAnAccount = CustomPagesForAnAccount;
UnderGateMultiSectionQa.CustomAssetsForAnAccount = CustomAssetsForAnAccount;
UnderGateMultiSectionQa.TsengAbuseComplaintProcessorOther = TsengAbuseComplaintProcessorOther;
UnderGateMultiSectionQa.McpPortalAnalytics = McpPortalAnalytics;
UnderGateMultiSectionQa.McpPortal = McpPortal;
UnderGateMultiSectionQa.McpPortalServers = McpPortalServers;
UnderGateMultiSectionQa.AccessApplications = AccessApplications;
UnderGateMultiSectionQa.AccessShortLivedCertificateCas = AccessShortLivedCertificateCas;
UnderGateMultiSectionQa.AccessApplicationScopedPolicies = AccessApplicationScopedPolicies;
UnderGateMultiSectionQa.AccessAuthenticatorDeviceAaguids = AccessAuthenticatorDeviceAaguids;
UnderGateMultiSectionQa.AccessBookmarkApplicationsDeprecated = AccessBookmarkApplicationsDeprecated;
UnderGateMultiSectionQa.AccessMTLSAuthentication = AccessMTLSAuthentication;
UnderGateMultiSectionQa.AccessCustomPages = AccessCustomPages;
UnderGateMultiSectionQa.GatewayCa = GatewayCa;
UnderGateMultiSectionQa.AccessGroups = AccessGroups;
UnderGateMultiSectionQa.AccessIdentityProviders = AccessIdentityProviders;
UnderGateMultiSectionQa.AccessIdPFederationGrants = AccessIdPFederationGrants;
UnderGateMultiSectionQa.AccessKeyConfiguration = AccessKeyConfiguration;
UnderGateMultiSectionQa.AccessAuthenticationLogs = AccessAuthenticationLogs;
UnderGateMultiSectionQa.AccessJitRequestLogs = AccessJitRequestLogs;
UnderGateMultiSectionQa.AccessScimUpdateLogs = AccessScimUpdateLogs;
UnderGateMultiSectionQa.ZeroTrustOrganization = ZeroTrustOrganization;
UnderGateMultiSectionQa.AccessReusablePolicies = AccessReusablePolicies;
UnderGateMultiSectionQa.AccessPolicyTester = AccessPolicyTester;
UnderGateMultiSectionQa.AccessSamlEncryptionCertificates = AccessSamlEncryptionCertificates;
UnderGateMultiSectionQa.ZeroTrustSeats = ZeroTrustSeats;
UnderGateMultiSectionQa.AccessServiceTokens = AccessServiceTokens;
UnderGateMultiSectionQa.AccessTags = AccessTags;
UnderGateMultiSectionQa.ZeroTrustUsers = ZeroTrustUsers;
UnderGateMultiSectionQa.IPAddressManagementAddressMaps = IPAddressManagementAddressMaps;
UnderGateMultiSectionQa.IPAddressManagementLeases = IPAddressManagementLeases;
UnderGateMultiSectionQa.IPAddressManagementPrefixes = IPAddressManagementPrefixes;
UnderGateMultiSectionQa.IPAddressManagementBGPPrefixes = IPAddressManagementBGPPrefixes;
UnderGateMultiSectionQa.IPAddressManagementDynamicAdvertisement = IPAddressManagementDynamicAdvertisement;
UnderGateMultiSectionQa.IPAddressManagementServiceBindings = IPAddressManagementServiceBindings;
UnderGateMultiSectionQa.IPAddressManagementPrefixDelegation = IPAddressManagementPrefixDelegation;
UnderGateMultiSectionQa.DlsRegionalServices = DlsRegionalServices;
UnderGateMultiSectionQa.Namespaces = Namespaces;
UnderGateMultiSectionQa.Memory = Memory;
UnderGateMultiSectionQa.AIGateway = AIGateway;
UnderGateMultiSectionQa.AIGatewayAccountProviders = AIGatewayAccountProviders;
UnderGateMultiSectionQa.AIGatewayAccountProviderCosts = AIGatewayAccountProviderCosts;
UnderGateMultiSectionQa.AIGatewayEvaluations = AIGatewayEvaluations;
UnderGateMultiSectionQa.AIGatewayGateways = AIGatewayGateways;
UnderGateMultiSectionQa.AIGatewayCustomDomains = AIGatewayCustomDomains;
UnderGateMultiSectionQa.AIGatewayDatasets = AIGatewayDatasets;
UnderGateMultiSectionQa.AIGatewayLogs = AIGatewayLogs;
UnderGateMultiSectionQa.AIGatewayProviderConfigs = AIGatewayProviderConfigs;
UnderGateMultiSectionQa.AIGatewayDynamicRoutes = AIGatewayDynamicRoutes;
UnderGateMultiSectionQa.Account = Account;
UnderGateMultiSectionQa.AISearchInstances = AISearchInstances;
UnderGateMultiSectionQa.AISearchInstancesJobs = AISearchInstancesJobs;
UnderGateMultiSectionQa.AISearchNamespaces = AISearchNamespaces;
UnderGateMultiSectionQa.AISearchAccountSearch = AISearchAccountSearch;
UnderGateMultiSectionQa.AISearchInstancesItems = AISearchInstancesItems;
UnderGateMultiSectionQa.AISearchTokens = AISearchTokens;
UnderGateMultiSectionQa.WorkersAI = WorkersAI;
UnderGateMultiSectionQa.WorkersAIFinetune = WorkersAIFinetune;
UnderGateMultiSectionQa.FinetuneAsset = FinetuneAsset;
UnderGateMultiSectionQa.NotificationAlertTypes = NotificationAlertTypes;
UnderGateMultiSectionQa.NotificationMechanismEligibility = NotificationMechanismEligibility;
UnderGateMultiSectionQa.NotificationDestinationsWithPagerDuty = NotificationDestinationsWithPagerDuty;
UnderGateMultiSectionQa.NotificationWebhooks = NotificationWebhooks;
UnderGateMultiSectionQa.NotificationHistory = NotificationHistory;
UnderGateMultiSectionQa.NotificationPolicies = NotificationPolicies;
UnderGateMultiSectionQa.NotificationSilences = NotificationSilences;
UnderGateMultiSectionQa.DataSecurity = DataSecurity;
UnderGateMultiSectionQa.ArtAnalytics = ArtAnalytics;
UnderGateMultiSectionQa.AnalyticsEngine = AnalyticsEngine;
UnderGateMultiSectionQa.Artifacts = Artifacts;
UnderGateMultiSectionQa.AuditLogs = AuditLogs;
UnderGateMultiSectionQa.AutoRagRagSearch = AutoRagRagSearch;
UnderGateMultiSectionQa.AutoRagRag = AutoRagRag;
UnderGateMultiSectionQa.AutoRagJobs = AutoRagJobs;
UnderGateMultiSectionQa.BillableUsage = BillableUsage;
UnderGateMultiSectionQa.BillableUsageV2 = BillableUsageV2;
UnderGateMultiSectionQa.AccountBilling = AccountBilling;
UnderGateMultiSectionQa.AccountBillingHistory = AccountBillingHistory;
UnderGateMultiSectionQa.AccountBillingProfile = AccountBillingProfile;
UnderGateMultiSectionQa.UsageAnalytics = UsageAnalytics;
UnderGateMultiSectionQa.BotnetThreatFeed = BotnetThreatFeed;
UnderGateMultiSectionQa.BrandProtection = BrandProtection;
UnderGateMultiSectionQa.LogoMatch = LogoMatch;
UnderGateMultiSectionQa.DomainSearch = DomainSearch;
UnderGateMultiSectionQa.BrowserExtensionConfig = BrowserExtensionConfig;
UnderGateMultiSectionQa.BrowserExtensionInventories = BrowserExtensionInventories;
UnderGateMultiSectionQa.Brapi = Brapi;
UnderGateMultiSectionQa.Builds = Builds;
UnderGateMultiSectionQa.RepositoryConnections = RepositoryConnections;
UnderGateMultiSectionQa.GitHubIntegration = GitHubIntegration;
UnderGateMultiSectionQa.BuildTokens = BuildTokens;
UnderGateMultiSectionQa.Triggers = Triggers;
UnderGateMultiSectionQa.EnvironmentVariables = EnvironmentVariables;
UnderGateMultiSectionQa.Workers = Workers;
UnderGateMultiSectionQa.DeployHooks = DeployHooks;
UnderGateMultiSectionQa.AccountSubscriptions = AccountSubscriptions;
UnderGateMultiSectionQa.CallsApps = CallsApps;
UnderGateMultiSectionQa.CallsTurnKeys = CallsTurnKeys;
UnderGateMultiSectionQa.CloudflareTunnel = CloudflareTunnel;
UnderGateMultiSectionQa.CloudflareTunnelConfiguration = CloudflareTunnelConfiguration;
UnderGateMultiSectionQa.Turnstile = Turnstile;
UnderGateMultiSectionQa.Scans = Scans;
UnderGateMultiSectionQa.BinDB = BinDB;
UnderGateMultiSectionQa.Event = Event;
UnderGateMultiSectionQa.Attacker = Attacker;
UnderGateMultiSectionQa.Category = Category;
UnderGateMultiSectionQa.Country = Country;
UnderGateMultiSectionQa.Dataset = Dataset;
UnderGateMultiSectionQa.Groups = Groups;
UnderGateMultiSectionQa.Indicators = Indicators;
UnderGateMultiSectionQa.Indicator = Indicator;
UnderGateMultiSectionQa.Permissions = Permissions;
UnderGateMultiSectionQa.Tag = Tag;
UnderGateMultiSectionQa.TargetIndustry = TargetIndustry;
UnderGateMultiSectionQa.Datasets = Datasets;
UnderGateMultiSectionQa.Events = Events;
UnderGateMultiSectionQa.IndicatorTypes = IndicatorTypes;
UnderGateMultiSectionQa.TagCategory = TagCategory;
UnderGateMultiSectionQa.RequestForInformationRfi = RequestForInformationRfi;
UnderGateMultiSectionQa.PriorityIntelligenceRequirementsPir = PriorityIntelligenceRequirementsPir;
UnderGateMultiSectionQa.Rules = Rules;
UnderGateMultiSectionQa.Approvals = Approvals;

export declare namespace UnderGateMultiSectionQa {
  export type RequestOptions = Opts.RequestOptions;
  export {
    Accounts as Accounts,
    type AccountBatchMoveResponse as AccountBatchMoveResponse,
    type AccountListParams as AccountListParams,
    type AccountCreationParams as AccountCreationParams,
    type AccountBatchMoveParams as AccountBatchMoveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    Images as Images,
    type ImageListListResponse as ImageListListResponse,
    type ImagePostUploadResponse as ImagePostUploadResponse,
    type ImageDeleteDeleteResponse as ImageDeleteDeleteResponse,
    type ImageRetrieveGetResponse as ImageRetrieveGetResponse,
    type ImagePatchEditResponse as ImagePatchEditResponse,
    type ImagePutDirectUploadResponse as ImagePutDirectUploadResponse,
    type ImageListAccountsAccountV2Response as ImageListAccountsAccountV2Response,
    type ImagePostDirectUploadLinkResponse as ImagePostDirectUploadLinkResponse,
    type ImageListFlowsGetResponse as ImageListFlowsGetResponse,
    type ImagePutFlowsUpdateResponse as ImagePutFlowsUpdateResponse,
    type ImageListListParams as ImageListListParams,
    type ImagePostUploadParams as ImagePostUploadParams,
    type ImageDeleteDeleteParams as ImageDeleteDeleteParams,
    type ImageRetrieveGetParams as ImageRetrieveGetParams,
    type ImagePatchEditParams as ImagePatchEditParams,
    type ImagePutDirectUploadParams as ImagePutDirectUploadParams,
    type ImageListGetBlobParams as ImageListGetBlobParams,
    type ImageListAccountsAccountV2Params as ImageListAccountsAccountV2Params,
    type ImagePostDirectUploadLinkParams as ImagePostDirectUploadLinkParams,
    type ImageListFlowsGetParams as ImageListFlowsGetParams,
    type ImagePutFlowsUpdateParams as ImagePutFlowsUpdateParams,
  };

  export {
    CustomPagesForAnAccount as CustomPagesForAnAccount,
    type CustomPagesForAnAccountCreatePreviewTokenParams as CustomPagesForAnAccountCreatePreviewTokenParams,
    type CustomPagesForAnAccountRetrieveAParams as CustomPagesForAnAccountRetrieveAParams,
    type CustomPagesForAnAccountUpdateAParams as CustomPagesForAnAccountUpdateAParams,
  };

  export {
    CustomAssetsForAnAccount as CustomAssetsForAnAccount,
    type CustomAssetsForAnAccountListParams as CustomAssetsForAnAccountListParams,
    type CustomAssetsForAnAccountCreateAParams as CustomAssetsForAnAccountCreateAParams,
    type CustomAssetsForAnAccountDeleteAParams as CustomAssetsForAnAccountDeleteAParams,
    type CustomAssetsForAnAccountRetrieveAParams as CustomAssetsForAnAccountRetrieveAParams,
    type CustomAssetsForAnAccountUpdateAParams as CustomAssetsForAnAccountUpdateAParams,
  };

  export {
    TsengAbuseComplaintProcessorOther as TsengAbuseComplaintProcessorOther,
    type TsengAbuseComplaintProcessorOtherListReportsResponse as TsengAbuseComplaintProcessorOtherListReportsResponse,
    type TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse as TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse,
    type TsengAbuseComplaintProcessorOtherListEmailsResponse as TsengAbuseComplaintProcessorOtherListEmailsResponse,
    type TsengAbuseComplaintProcessorOtherListMitigationsResponse as TsengAbuseComplaintProcessorOtherListMitigationsResponse,
    type TsengAbuseComplaintProcessorOtherRetrieveReportResponse as TsengAbuseComplaintProcessorOtherRetrieveReportResponse,
    type TsengAbuseComplaintProcessorOtherListReportsParams as TsengAbuseComplaintProcessorOtherListReportsParams,
    type TsengAbuseComplaintProcessorOtherListSubmittedReportsParams as TsengAbuseComplaintProcessorOtherListSubmittedReportsParams,
    type TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams as TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams,
    type TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams as TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams,
    type TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams as TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams,
    type TsengAbuseComplaintProcessorOtherListEmailsParams as TsengAbuseComplaintProcessorOtherListEmailsParams,
    type TsengAbuseComplaintProcessorOtherListMitigationsParams as TsengAbuseComplaintProcessorOtherListMitigationsParams,
    type TsengAbuseComplaintProcessorOtherRequestReviewParams as TsengAbuseComplaintProcessorOtherRequestReviewParams,
    type TsengAbuseComplaintProcessorOtherRetrieveReportParams as TsengAbuseComplaintProcessorOtherRetrieveReportParams,
    type TsengAbuseComplaintProcessorOtherSubmitReportParams as TsengAbuseComplaintProcessorOtherSubmitReportParams,
  };

  export {
    McpPortalAnalytics as McpPortalAnalytics,
    type McpPortalAnalyticAPIToolCallTimeseriesResponse as McpPortalAnalyticAPIToolCallTimeseriesResponse,
    type McpPortalAnalyticAPIServerToolCallTimeseriesResponse as McpPortalAnalyticAPIServerToolCallTimeseriesResponse,
    type McpPortalAnalyticAPIAccountToolCallTimeseriesResponse as McpPortalAnalyticAPIAccountToolCallTimeseriesResponse,
    type McpPortalAnalyticAPIToolCallTimeseriesParams as McpPortalAnalyticAPIToolCallTimeseriesParams,
    type McpPortalAnalyticAPIServerToolCallTimeseriesParams as McpPortalAnalyticAPIServerToolCallTimeseriesParams,
    type McpPortalAnalyticAPIAccountToolCallTimeseriesParams as McpPortalAnalyticAPIAccountToolCallTimeseriesParams,
  };

  export {
    McpPortal as McpPortal,
    type McpPortalAPIListResponse as McpPortalAPIListResponse,
    type McpPortalAPICreateResponse as McpPortalAPICreateResponse,
    type McpPortalAPIDeleteResponse as McpPortalAPIDeleteResponse,
    type McpPortalAPIFetchGatewaysResponse as McpPortalAPIFetchGatewaysResponse,
    type McpPortalAPIUpdateResponse as McpPortalAPIUpdateResponse,
    type McpPortalAPIEffectiveRedirectURIResponse as McpPortalAPIEffectiveRedirectURIResponse,
    type McpPortalAPIListParams as McpPortalAPIListParams,
    type McpPortalAPICreateParams as McpPortalAPICreateParams,
    type McpPortalAPIDeleteParams as McpPortalAPIDeleteParams,
    type McpPortalAPIFetchGatewaysParams as McpPortalAPIFetchGatewaysParams,
    type McpPortalAPIUpdateParams as McpPortalAPIUpdateParams,
    type McpPortalAPIEffectiveRedirectURIParams as McpPortalAPIEffectiveRedirectURIParams,
  };

  export {
    McpPortalServers as McpPortalServers,
    type McpPortalServerAPIListResponse as McpPortalServerAPIListResponse,
    type McpPortalServerAPICreateResponse as McpPortalServerAPICreateResponse,
    type McpPortalServerAPIDeleteResponse as McpPortalServerAPIDeleteResponse,
    type McpPortalServerAPIFetchResponse as McpPortalServerAPIFetchResponse,
    type McpPortalServerAPIUpdateResponse as McpPortalServerAPIUpdateResponse,
    type McpPortalServerAPISyncResponse as McpPortalServerAPISyncResponse,
    type McpPortalServerAPIListParams as McpPortalServerAPIListParams,
    type McpPortalServerAPICreateParams as McpPortalServerAPICreateParams,
    type McpPortalServerAPIDeleteParams as McpPortalServerAPIDeleteParams,
    type McpPortalServerAPIFetchParams as McpPortalServerAPIFetchParams,
    type McpPortalServerAPIUpdateParams as McpPortalServerAPIUpdateParams,
    type McpPortalServerAPISyncParams as McpPortalServerAPISyncParams,
  };

  export {
    AccessApplications as AccessApplications,
    type AccessApplicationCreateAnResponse as AccessApplicationCreateAnResponse,
    type AccessApplicationUpdateAnResponse as AccessApplicationUpdateAnResponse,
    type AccessApplicationListParams as AccessApplicationListParams,
    type AccessApplicationCreateAnParams as AccessApplicationCreateAnParams,
    type AccessApplicationDeleteAnParams as AccessApplicationDeleteAnParams,
    type AccessApplicationRetrieveAnParams as AccessApplicationRetrieveAnParams,
    type AccessApplicationUpdateAnParams as AccessApplicationUpdateAnParams,
    type AccessApplicationRevokeServiceTokensParams as AccessApplicationRevokeServiceTokensParams,
    type AccessApplicationPatchUpdateSettingsParams as AccessApplicationPatchUpdateSettingsParams,
    type AccessApplicationPutUpdateSettingsParams as AccessApplicationPutUpdateSettingsParams,
    type AccessApplicationTestPoliciesParams as AccessApplicationTestPoliciesParams,
  };

  export {
    AccessShortLivedCertificateCas as AccessShortLivedCertificateCas,
    type AccessShortLivedCertificateCaCAsListCasParams as AccessShortLivedCertificateCaCAsListCasParams,
    type AccessShortLivedCertificateCaCAsDeleteAParams as AccessShortLivedCertificateCaCAsDeleteAParams,
    type AccessShortLivedCertificateCaCAsGetAParams as AccessShortLivedCertificateCaCAsGetAParams,
    type AccessShortLivedCertificateCaCAsCreateAParams as AccessShortLivedCertificateCaCAsCreateAParams,
  };

  export {
    AccessApplicationScopedPolicies as AccessApplicationScopedPolicies,
    type AccessApplicationScopedPolicyListAppParams as AccessApplicationScopedPolicyListAppParams,
    type AccessApplicationScopedPolicyCreateAnParams as AccessApplicationScopedPolicyCreateAnParams,
    type AccessApplicationScopedPolicyDeleteAnParams as AccessApplicationScopedPolicyDeleteAnParams,
    type AccessApplicationScopedPolicyRetrieveAnParams as AccessApplicationScopedPolicyRetrieveAnParams,
    type AccessApplicationScopedPolicyUpdateAnParams as AccessApplicationScopedPolicyUpdateAnParams,
    type AccessApplicationScopedPolicyConvertReusableParams as AccessApplicationScopedPolicyConvertReusableParams,
  };

  export { AccessAuthenticatorDeviceAaguids as AccessAuthenticatorDeviceAaguids };

  export {
    AccessBookmarkApplicationsDeprecated as AccessBookmarkApplicationsDeprecated,
    type AccessBookmarkApplicationsDeprecatedDeleteAParams as AccessBookmarkApplicationsDeprecatedDeleteAParams,
    type AccessBookmarkApplicationsDeprecatedRetrieveAParams as AccessBookmarkApplicationsDeprecatedRetrieveAParams,
    type AccessBookmarkApplicationsDeprecatedCreateAParams as AccessBookmarkApplicationsDeprecatedCreateAParams,
    type AccessBookmarkApplicationsDeprecatedUpdateAParams as AccessBookmarkApplicationsDeprecatedUpdateAParams,
  };

  export {
    AccessMTLSAuthentication as AccessMTLSAuthentication,
    type AccessMTLSAuthenticationMTLSListMTLSCertificatesParams as AccessMTLSAuthenticationMTLSListMTLSCertificatesParams,
    type AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams,
    type AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams as AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams,
    type AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams,
    type AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams,
    type AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams,
  };

  export {
    AccessCustomPages as AccessCustomPages,
    type AccessCustomPageListParams as AccessCustomPageListParams,
    type AccessCustomPageCreateAParams as AccessCustomPageCreateAParams,
    type AccessCustomPageValidateATemplateParams as AccessCustomPageValidateATemplateParams,
    type AccessCustomPageDeleteAParams as AccessCustomPageDeleteAParams,
    type AccessCustomPageRetrieveAParams as AccessCustomPageRetrieveAParams,
    type AccessCustomPageUpdateAParams as AccessCustomPageUpdateAParams,
  };

  export {
    GatewayCa as GatewayCa,
    type GatewayCaAccessDeleteAnSSHParams as GatewayCaAccessDeleteAnSSHParams,
  };

  export {
    AccessGroups as AccessGroups,
    type AccessGroupListParams as AccessGroupListParams,
    type AccessGroupCreateAnParams as AccessGroupCreateAnParams,
    type AccessGroupDeleteAnParams as AccessGroupDeleteAnParams,
    type AccessGroupRetrieveAnParams as AccessGroupRetrieveAnParams,
    type AccessGroupUpdateAnParams as AccessGroupUpdateAnParams,
  };

  export {
    AccessIdentityProviders as AccessIdentityProviders,
    type AccessIdentityProviderListParams as AccessIdentityProviderListParams,
    type AccessIdentityProviderCreateAnParams as AccessIdentityProviderCreateAnParams,
    type AccessIdentityProviderDeleteAnParams as AccessIdentityProviderDeleteAnParams,
    type AccessIdentityProviderRetrieveAnParams as AccessIdentityProviderRetrieveAnParams,
    type AccessIdentityProviderUpdateAnParams as AccessIdentityProviderUpdateAnParams,
    type AccessIdentityProviderCreateSamlCertificateForParams as AccessIdentityProviderCreateSamlCertificateForParams,
    type AccessIdentityProviderListScimGroupResourcesParams as AccessIdentityProviderListScimGroupResourcesParams,
    type AccessIdentityProviderListScimUserResourcesParams as AccessIdentityProviderListScimUserResourcesParams,
  };

  export {
    AccessIdPFederationGrants as AccessIdPFederationGrants,
    type AccessIdPFederationGrantIdPCreateParams as AccessIdPFederationGrantIdPCreateParams,
    type AccessIdPFederationGrantIdPDeleteParams as AccessIdPFederationGrantIdPDeleteParams,
    type AccessIdPFederationGrantIdPGetParams as AccessIdPFederationGrantIdPGetParams,
  };

  export {
    AccessKeyConfiguration as AccessKeyConfiguration,
    type AccessKeyConfigurationUpdateTheParams as AccessKeyConfigurationUpdateTheParams,
  };

  export {
    AccessAuthenticationLogs as AccessAuthenticationLogs,
    type AccessAuthenticationLogListParams as AccessAuthenticationLogListParams,
  };

  export {
    AccessJitRequestLogs as AccessJitRequestLogs,
    type AccessJitRequestLogListParams as AccessJitRequestLogListParams,
    type AccessJitRequestLogRetrieveParams as AccessJitRequestLogRetrieveParams,
  };

  export {
    AccessScimUpdateLogs as AccessScimUpdateLogs,
    type AccessScimUpdateLogListParams as AccessScimUpdateLogListParams,
  };

  export {
    ZeroTrustOrganization as ZeroTrustOrganization,
    type ZeroTrustOrganizationListYourDohSettingsResponse as ZeroTrustOrganizationListYourDohSettingsResponse,
    type ZeroTrustOrganizationUpdateYourDohSettingsResponse as ZeroTrustOrganizationUpdateYourDohSettingsResponse,
    type ZeroTrustOrganizationCreateYourParams as ZeroTrustOrganizationCreateYourParams,
    type ZeroTrustOrganizationUpdateYourParams as ZeroTrustOrganizationUpdateYourParams,
    type ZeroTrustOrganizationUpdateYourDohSettingsParams as ZeroTrustOrganizationUpdateYourDohSettingsParams,
    type ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams as ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams,
  };

  export {
    AccessReusablePolicies as AccessReusablePolicies,
    type AccessReusablePolicyListParams as AccessReusablePolicyListParams,
    type AccessReusablePolicyCreateAnParams as AccessReusablePolicyCreateAnParams,
    type AccessReusablePolicyDeleteAnParams as AccessReusablePolicyDeleteAnParams,
    type AccessReusablePolicyRetrieveAnParams as AccessReusablePolicyRetrieveAnParams,
    type AccessReusablePolicyUpdateAnParams as AccessReusablePolicyUpdateAnParams,
  };

  export {
    AccessPolicyTester as AccessPolicyTester,
    type AccessPolicyTesterTestsParams as AccessPolicyTesterTestsParams,
    type AccessPolicyTesterTestsGetAnUpdateParams as AccessPolicyTesterTestsGetAnUpdateParams,
    type AccessPolicyTesterTestsGetAUserPageParams as AccessPolicyTesterTestsGetAUserPageParams,
  };

  export {
    AccessSamlEncryptionCertificates as AccessSamlEncryptionCertificates,
    type AccessSamlEncryptionCertificateListSetsParams as AccessSamlEncryptionCertificateListSetsParams,
    type AccessSamlEncryptionCertificateRetrieveSetParams as AccessSamlEncryptionCertificateRetrieveSetParams,
    type AccessSamlEncryptionCertificateListPemParams as AccessSamlEncryptionCertificateListPemParams,
    type AccessSamlEncryptionCertificateRotateParams as AccessSamlEncryptionCertificateRotateParams,
  };

  export {
    ZeroTrustSeats as ZeroTrustSeats,
    type ZeroTrustSeatUpdateAUserParams as ZeroTrustSeatUpdateAUserParams,
  };

  export {
    AccessServiceTokens as AccessServiceTokens,
    type AccessServiceTokenListParams as AccessServiceTokenListParams,
    type AccessServiceTokenCreateAParams as AccessServiceTokenCreateAParams,
    type AccessServiceTokenDeleteAParams as AccessServiceTokenDeleteAParams,
    type AccessServiceTokenRetrieveAParams as AccessServiceTokenRetrieveAParams,
    type AccessServiceTokenUpdateAParams as AccessServiceTokenUpdateAParams,
    type AccessServiceTokenRefreshAParams as AccessServiceTokenRefreshAParams,
    type AccessServiceTokenRotateAParams as AccessServiceTokenRotateAParams,
  };

  export {
    AccessTags as AccessTags,
    type AccessTagListParams as AccessTagListParams,
    type AccessTagCreateParams as AccessTagCreateParams,
    type AccessTagDeleteAParams as AccessTagDeleteAParams,
    type AccessTagRetrieveAParams as AccessTagRetrieveAParams,
    type AccessTagUpdateAParams as AccessTagUpdateAParams,
  };

  export {
    ZeroTrustUsers as ZeroTrustUsers,
    type ZeroTrustUserListParams as ZeroTrustUserListParams,
    type ZeroTrustUserCreateParams as ZeroTrustUserCreateParams,
    type ZeroTrustUserDeleteParams as ZeroTrustUserDeleteParams,
    type ZeroTrustUserRetrieveParams as ZeroTrustUserRetrieveParams,
    type ZeroTrustUserUpdateParams as ZeroTrustUserUpdateParams,
    type ZeroTrustUserListActiveSessionsParams as ZeroTrustUserListActiveSessionsParams,
    type ZeroTrustUserRetrieveActiveSessionParams as ZeroTrustUserRetrieveActiveSessionParams,
    type ZeroTrustUserListFailedLoginsParams as ZeroTrustUserListFailedLoginsParams,
    type ZeroTrustUserListLastSeenIdentityParams as ZeroTrustUserListLastSeenIdentityParams,
    type ZeroTrustUserDeleteMfaAuthenticatorParams as ZeroTrustUserDeleteMfaAuthenticatorParams,
  };

  export {
    IPAddressManagementAddressMaps as IPAddressManagementAddressMaps,
    type IPAddressManagementAddressMapCreateParams as IPAddressManagementAddressMapCreateParams,
    type IPAddressManagementAddressMapDeleteParams as IPAddressManagementAddressMapDeleteParams,
    type IPAddressManagementAddressMapDetailsParams as IPAddressManagementAddressMapDetailsParams,
    type IPAddressManagementAddressMapUpdateParams as IPAddressManagementAddressMapUpdateParams,
    type IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams as IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams,
    type IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams as IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams,
    type IPAddressManagementAddressMapDeleteAnFromAnParams as IPAddressManagementAddressMapDeleteAnFromAnParams,
    type IPAddressManagementAddressMapCreateAnToAnParams as IPAddressManagementAddressMapCreateAnToAnParams,
    type IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams as IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams,
    type IPAddressManagementAddressMapCreateAZoneMembershipToAnParams as IPAddressManagementAddressMapCreateAZoneMembershipToAnParams,
  };

  export { IPAddressManagementLeases as IPAddressManagementLeases };

  export {
    IPAddressManagementPrefixes as IPAddressManagementPrefixes,
    type IPAddressManagementPrefixUploadLoaDocumentParams as IPAddressManagementPrefixUploadLoaDocumentParams,
    type IPAddressManagementPrefixDownloadLoaDocumentParams as IPAddressManagementPrefixDownloadLoaDocumentParams,
    type IPAddressManagementPrefixCreateParams as IPAddressManagementPrefixCreateParams,
    type IPAddressManagementPrefixDeleteParams as IPAddressManagementPrefixDeleteParams,
    type IPAddressManagementPrefixDetailsParams as IPAddressManagementPrefixDetailsParams,
    type IPAddressManagementPrefixUpdateDescriptionParams as IPAddressManagementPrefixUpdateDescriptionParams,
    type IPAddressManagementPrefixValidateParams as IPAddressManagementPrefixValidateParams,
  };

  export {
    IPAddressManagementBGPPrefixes as IPAddressManagementBGPPrefixes,
    type IPAddressManagementBGPPrefixListParams as IPAddressManagementBGPPrefixListParams,
    type IPAddressManagementBGPPrefixCreateParams as IPAddressManagementBGPPrefixCreateParams,
    type IPAddressManagementBGPPrefixDeleteParams as IPAddressManagementBGPPrefixDeleteParams,
    type IPAddressManagementBGPPrefixFetchParams as IPAddressManagementBGPPrefixFetchParams,
    type IPAddressManagementBGPPrefixUpdateParams as IPAddressManagementBGPPrefixUpdateParams,
  };

  export {
    IPAddressManagementDynamicAdvertisement as IPAddressManagementDynamicAdvertisement,
    type IPAddressManagementDynamicAdvertisementListStatusParams as IPAddressManagementDynamicAdvertisementListStatusParams,
    type IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams as IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams,
  };

  export {
    IPAddressManagementServiceBindings as IPAddressManagementServiceBindings,
    type IPAddressManagementServiceBindingList2Response as IPAddressManagementServiceBindingList2Response,
    type IPAddressManagementServiceBindingCreateResponse as IPAddressManagementServiceBindingCreateResponse,
    type IPAddressManagementServiceBindingRetrieveResponse as IPAddressManagementServiceBindingRetrieveResponse,
    type IPAddressManagementServiceBindingListResponse as IPAddressManagementServiceBindingListResponse,
    type IPAddressManagementServiceBindingList2Params as IPAddressManagementServiceBindingList2Params,
    type IPAddressManagementServiceBindingCreateParams as IPAddressManagementServiceBindingCreateParams,
    type IPAddressManagementServiceBindingDeleteParams as IPAddressManagementServiceBindingDeleteParams,
    type IPAddressManagementServiceBindingRetrieveParams as IPAddressManagementServiceBindingRetrieveParams,
  };

  export {
    IPAddressManagementPrefixDelegation as IPAddressManagementPrefixDelegation,
    type IPAddressManagementPrefixDelegationListParams as IPAddressManagementPrefixDelegationListParams,
    type IPAddressManagementPrefixDelegationCreateParams as IPAddressManagementPrefixDelegationCreateParams,
    type IPAddressManagementPrefixDelegationDeleteParams as IPAddressManagementPrefixDelegationDeleteParams,
  };

  export {
    DlsRegionalServices as DlsRegionalServices,
    type DlsRegionalServiceAccountHostnamesListRegionsResponse as DlsRegionalServiceAccountHostnamesListRegionsResponse,
  };

  export {
    Namespaces as Namespaces,
    type NamespaceAgentMemoryListResponse as NamespaceAgentMemoryListResponse,
    type NamespaceAgentMemoryCreateResponse as NamespaceAgentMemoryCreateResponse,
    type NamespaceAgentMemoryDeleteResponse as NamespaceAgentMemoryDeleteResponse,
    type NamespaceAgentMemoryGetResponse as NamespaceAgentMemoryGetResponse,
    type NamespaceAgentMemoryListParams as NamespaceAgentMemoryListParams,
    type NamespaceAgentMemoryCreateParams as NamespaceAgentMemoryCreateParams,
    type NamespaceAgentMemoryDeleteParams as NamespaceAgentMemoryDeleteParams,
    type NamespaceAgentMemoryGetParams as NamespaceAgentMemoryGetParams,
  };

  export {
    Memory as Memory,
    type MemoryAgentProfileListResponse as MemoryAgentProfileListResponse,
    type MemoryAgentProfileDeleteResponse as MemoryAgentProfileDeleteResponse,
    type MemoryAgentIngestResponse as MemoryAgentIngestResponse,
    type MemoryAgentListResponse as MemoryAgentListResponse,
    type MemoryAgentDeleteResponse as MemoryAgentDeleteResponse,
    type MemoryAgentGetResponse as MemoryAgentGetResponse,
    type MemoryAgentRecallResponse as MemoryAgentRecallResponse,
    type MemoryAgentRememberResponse as MemoryAgentRememberResponse,
    type MemoryAgentSessionDeleteResponse as MemoryAgentSessionDeleteResponse,
    type MemoryAgentSummaryResponse as MemoryAgentSummaryResponse,
    type MemoryAgentProfileListParams as MemoryAgentProfileListParams,
    type MemoryAgentProfileDeleteParams as MemoryAgentProfileDeleteParams,
    type MemoryAgentIngestParams as MemoryAgentIngestParams,
    type MemoryAgentListParams as MemoryAgentListParams,
    type MemoryAgentDeleteParams as MemoryAgentDeleteParams,
    type MemoryAgentGetParams as MemoryAgentGetParams,
    type MemoryAgentRecallParams as MemoryAgentRecallParams,
    type MemoryAgentRememberParams as MemoryAgentRememberParams,
    type MemoryAgentSessionDeleteParams as MemoryAgentSessionDeleteParams,
    type MemoryAgentSummaryParams as MemoryAgentSummaryParams,
  };

  export {
    AIGateway as AIGateway,
    type AIGatewayAigBillingGetInvoiceHistoryParams as AIGatewayAigBillingGetInvoiceHistoryParams,
    type AIGatewayAigBillingSetSpendingLimitParams as AIGatewayAigBillingSetSpendingLimitParams,
    type AIGatewayAigBillingCreateTopupParams as AIGatewayAigBillingCreateTopupParams,
    type AIGatewayAigBillingSetTopupConfigParams as AIGatewayAigBillingSetTopupConfigParams,
    type AIGatewayAigBillingTopupEligibilityParams as AIGatewayAigBillingTopupEligibilityParams,
    type AIGatewayAigBillingCheckTopupStatusParams as AIGatewayAigBillingCheckTopupStatusParams,
    type AIGatewayAigBillingGetUsageHistoryParams as AIGatewayAigBillingGetUsageHistoryParams,
  };

  export {
    AIGatewayAccountProviders as AIGatewayAccountProviders,
    type AIGatewayAccountProviderAigConfigListResponse as AIGatewayAccountProviderAigConfigListResponse,
    type AIGatewayAccountProviderAigConfigCreateResponse as AIGatewayAccountProviderAigConfigCreateResponse,
    type AIGatewayAccountProviderAigConfigDeleteResponse as AIGatewayAccountProviderAigConfigDeleteResponse,
    type AIGatewayAccountProviderAigConfigFetchResponse as AIGatewayAccountProviderAigConfigFetchResponse,
    type AIGatewayAccountProviderAigConfigUpdateResponse as AIGatewayAccountProviderAigConfigUpdateResponse,
    type AIGatewayAccountProviderAigConfigListParams as AIGatewayAccountProviderAigConfigListParams,
    type AIGatewayAccountProviderAigConfigCreateParams as AIGatewayAccountProviderAigConfigCreateParams,
    type AIGatewayAccountProviderAigConfigDeleteParams as AIGatewayAccountProviderAigConfigDeleteParams,
    type AIGatewayAccountProviderAigConfigFetchParams as AIGatewayAccountProviderAigConfigFetchParams,
    type AIGatewayAccountProviderAigConfigUpdateParams as AIGatewayAccountProviderAigConfigUpdateParams,
  };

  export {
    AIGatewayAccountProviderCosts as AIGatewayAccountProviderCosts,
    type AIGatewayAccountProviderCostAigConfigListResponse as AIGatewayAccountProviderCostAigConfigListResponse,
    type AIGatewayAccountProviderCostAigConfigCreateResponse as AIGatewayAccountProviderCostAigConfigCreateResponse,
    type AIGatewayAccountProviderCostAigConfigDeleteResponse as AIGatewayAccountProviderCostAigConfigDeleteResponse,
    type AIGatewayAccountProviderCostAigConfigFetchResponse as AIGatewayAccountProviderCostAigConfigFetchResponse,
    type AIGatewayAccountProviderCostAigConfigUpdateResponse as AIGatewayAccountProviderCostAigConfigUpdateResponse,
    type AIGatewayAccountProviderCostAigConfigListParams as AIGatewayAccountProviderCostAigConfigListParams,
    type AIGatewayAccountProviderCostAigConfigCreateParams as AIGatewayAccountProviderCostAigConfigCreateParams,
    type AIGatewayAccountProviderCostAigConfigDeleteParams as AIGatewayAccountProviderCostAigConfigDeleteParams,
    type AIGatewayAccountProviderCostAigConfigFetchParams as AIGatewayAccountProviderCostAigConfigFetchParams,
    type AIGatewayAccountProviderCostAigConfigUpdateParams as AIGatewayAccountProviderCostAigConfigUpdateParams,
  };

  export {
    AIGatewayEvaluations as AIGatewayEvaluations,
    type AIGatewayEvaluationAigConfigListEvaluatorsResponse as AIGatewayEvaluationAigConfigListEvaluatorsResponse,
    type AIGatewayEvaluationAigConfigListResponse as AIGatewayEvaluationAigConfigListResponse,
    type AIGatewayEvaluationAigConfigCreateResponse as AIGatewayEvaluationAigConfigCreateResponse,
    type AIGatewayEvaluationAigConfigDeleteResponse as AIGatewayEvaluationAigConfigDeleteResponse,
    type AIGatewayEvaluationAigConfigFetchResponse as AIGatewayEvaluationAigConfigFetchResponse,
    type AIGatewayEvaluationAigConfigListEvaluatorsParams as AIGatewayEvaluationAigConfigListEvaluatorsParams,
    type AIGatewayEvaluationAigConfigListParams as AIGatewayEvaluationAigConfigListParams,
    type AIGatewayEvaluationAigConfigCreateParams as AIGatewayEvaluationAigConfigCreateParams,
    type AIGatewayEvaluationAigConfigDeleteParams as AIGatewayEvaluationAigConfigDeleteParams,
    type AIGatewayEvaluationAigConfigFetchParams as AIGatewayEvaluationAigConfigFetchParams,
  };

  export {
    AIGatewayGateways as AIGatewayGateways,
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

  export {
    AIGatewayCustomDomains as AIGatewayCustomDomains,
    type AIGatewayCustomDomainAigConfigListResponse as AIGatewayCustomDomainAigConfigListResponse,
    type AIGatewayCustomDomainAigConfigCreateResponse as AIGatewayCustomDomainAigConfigCreateResponse,
    type AIGatewayCustomDomainAigConfigDeleteResponse as AIGatewayCustomDomainAigConfigDeleteResponse,
    type AIGatewayCustomDomainAigConfigFetchResponse as AIGatewayCustomDomainAigConfigFetchResponse,
    type AIGatewayCustomDomainAigConfigListParams as AIGatewayCustomDomainAigConfigListParams,
    type AIGatewayCustomDomainAigConfigCreateParams as AIGatewayCustomDomainAigConfigCreateParams,
    type AIGatewayCustomDomainAigConfigDeleteParams as AIGatewayCustomDomainAigConfigDeleteParams,
    type AIGatewayCustomDomainAigConfigFetchParams as AIGatewayCustomDomainAigConfigFetchParams,
  };

  export {
    AIGatewayDatasets as AIGatewayDatasets,
    type AIGatewayDatasetAigConfigListResponse as AIGatewayDatasetAigConfigListResponse,
    type AIGatewayDatasetAigConfigCreateResponse as AIGatewayDatasetAigConfigCreateResponse,
    type AIGatewayDatasetAigConfigDeleteResponse as AIGatewayDatasetAigConfigDeleteResponse,
    type AIGatewayDatasetAigConfigFetchResponse as AIGatewayDatasetAigConfigFetchResponse,
    type AIGatewayDatasetAigConfigUpdateResponse as AIGatewayDatasetAigConfigUpdateResponse,
    type AIGatewayDatasetAigConfigListParams as AIGatewayDatasetAigConfigListParams,
    type AIGatewayDatasetAigConfigCreateParams as AIGatewayDatasetAigConfigCreateParams,
    type AIGatewayDatasetAigConfigDeleteParams as AIGatewayDatasetAigConfigDeleteParams,
    type AIGatewayDatasetAigConfigFetchParams as AIGatewayDatasetAigConfigFetchParams,
    type AIGatewayDatasetAigConfigUpdateParams as AIGatewayDatasetAigConfigUpdateParams,
  };

  export {
    AIGatewayLogs as AIGatewayLogs,
    type AIGatewayLogAigConfigDeleteResponse as AIGatewayLogAigConfigDeleteResponse,
    type AIGatewayLogAigConfigListResponse as AIGatewayLogAigConfigListResponse,
    type AIGatewayLogAigConfigGetDetailResponse as AIGatewayLogAigConfigGetDetailResponse,
    type AIGatewayLogAigConfigPatchResponse as AIGatewayLogAigConfigPatchResponse,
    type AIGatewayLogAigConfigGetRequestResponse as AIGatewayLogAigConfigGetRequestResponse,
    type AIGatewayLogAigConfigGetResponseResponse as AIGatewayLogAigConfigGetResponseResponse,
    type AIGatewayLogAigConfigDeleteParams as AIGatewayLogAigConfigDeleteParams,
    type AIGatewayLogAigConfigListParams as AIGatewayLogAigConfigListParams,
    type AIGatewayLogAigConfigGetDetailParams as AIGatewayLogAigConfigGetDetailParams,
    type AIGatewayLogAigConfigPatchParams as AIGatewayLogAigConfigPatchParams,
    type AIGatewayLogAigConfigGetRequestParams as AIGatewayLogAigConfigGetRequestParams,
    type AIGatewayLogAigConfigGetResponseParams as AIGatewayLogAigConfigGetResponseParams,
  };

  export {
    AIGatewayProviderConfigs as AIGatewayProviderConfigs,
    type AIGatewayProviderConfigAigListResponse as AIGatewayProviderConfigAigListResponse,
    type AIGatewayProviderConfigAigCreateResponse as AIGatewayProviderConfigAigCreateResponse,
    type AIGatewayProviderConfigAigDeleteResponse as AIGatewayProviderConfigAigDeleteResponse,
    type AIGatewayProviderConfigAigUpdateResponse as AIGatewayProviderConfigAigUpdateResponse,
    type AIGatewayProviderConfigAigListParams as AIGatewayProviderConfigAigListParams,
    type AIGatewayProviderConfigAigCreateParams as AIGatewayProviderConfigAigCreateParams,
    type AIGatewayProviderConfigAigDeleteParams as AIGatewayProviderConfigAigDeleteParams,
    type AIGatewayProviderConfigAigUpdateParams as AIGatewayProviderConfigAigUpdateParams,
  };

  export {
    AIGatewayDynamicRoutes as AIGatewayDynamicRoutes,
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

  export {
    Account as Account,
    type AccountAigConfigGetLoggingStateResponse as AccountAigConfigGetLoggingStateResponse,
    type AccountAigConfigPatchLoggingStateResponse as AccountAigConfigPatchLoggingStateResponse,
    type AccountListLimitsResponse as AccountListLimitsResponse,
  };

  export {
    AISearchInstances as AISearchInstances,
    type AISearchInstanceListResponse as AISearchInstanceListResponse,
    type AISearchInstanceCreateResponse as AISearchInstanceCreateResponse,
    type AISearchInstanceDeleteResponse as AISearchInstanceDeleteResponse,
    type AISearchInstanceFetchResponse as AISearchInstanceFetchResponse,
    type AISearchInstanceUpdateResponse as AISearchInstanceUpdateResponse,
    type AISearchInstanceChatCompletionResponse as AISearchInstanceChatCompletionResponse,
    type AISearchInstanceSearchResponse as AISearchInstanceSearchResponse,
    type AISearchInstanceStatsResponse as AISearchInstanceStatsResponse,
    type AISearchInstanceNamespaceListResponse as AISearchInstanceNamespaceListResponse,
    type AISearchInstanceNamespaceCreateResponse as AISearchInstanceNamespaceCreateResponse,
    type AISearchInstanceNamespaceDeleteResponse as AISearchInstanceNamespaceDeleteResponse,
    type AISearchInstanceNamespaceFetchResponse as AISearchInstanceNamespaceFetchResponse,
    type AISearchInstanceNamespaceUpdateResponse as AISearchInstanceNamespaceUpdateResponse,
    type AISearchInstanceNamespaceChatCompletionResponse as AISearchInstanceNamespaceChatCompletionResponse,
    type AISearchInstanceNamespacePurgeCacheResponse as AISearchInstanceNamespacePurgeCacheResponse,
    type AISearchInstanceSearch2Response as AISearchInstanceSearch2Response,
    type AISearchInstanceNamespaceStatsResponse as AISearchInstanceNamespaceStatsResponse,
    type AISearchInstanceListParams as AISearchInstanceListParams,
    type AISearchInstanceCreateParams as AISearchInstanceCreateParams,
    type AISearchInstanceDeleteParams as AISearchInstanceDeleteParams,
    type AISearchInstanceFetchParams as AISearchInstanceFetchParams,
    type AISearchInstanceUpdateParams as AISearchInstanceUpdateParams,
    type AISearchInstanceChatCompletionParams as AISearchInstanceChatCompletionParams,
    type AISearchInstanceSearchParams as AISearchInstanceSearchParams,
    type AISearchInstanceStatsParams as AISearchInstanceStatsParams,
    type AISearchInstanceNamespaceListParams as AISearchInstanceNamespaceListParams,
    type AISearchInstanceNamespaceCreateParams as AISearchInstanceNamespaceCreateParams,
    type AISearchInstanceNamespaceDeleteParams as AISearchInstanceNamespaceDeleteParams,
    type AISearchInstanceNamespaceFetchParams as AISearchInstanceNamespaceFetchParams,
    type AISearchInstanceNamespaceUpdateParams as AISearchInstanceNamespaceUpdateParams,
    type AISearchInstanceNamespaceChatCompletionParams as AISearchInstanceNamespaceChatCompletionParams,
    type AISearchInstanceNamespacePurgeCacheParams as AISearchInstanceNamespacePurgeCacheParams,
    type AISearchInstanceSearch2Params as AISearchInstanceSearch2Params,
    type AISearchInstanceNamespaceStatsParams as AISearchInstanceNamespaceStatsParams,
  };

  export {
    AISearchInstancesJobs as AISearchInstancesJobs,
    type AISearchInstancesJobListResponse as AISearchInstancesJobListResponse,
    type AISearchInstancesJobCreateResponse as AISearchInstancesJobCreateResponse,
    type AISearchInstancesJobRetrieveResponse as AISearchInstancesJobRetrieveResponse,
    type AISearchInstancesJobChangeStatusResponse as AISearchInstancesJobChangeStatusResponse,
    type AISearchInstancesJobListLogsResponse as AISearchInstancesJobListLogsResponse,
    type AISearchInstancesJobNamespaceListResponse as AISearchInstancesJobNamespaceListResponse,
    type AISearchInstancesJobNamespaceCreateResponse as AISearchInstancesJobNamespaceCreateResponse,
    type AISearchInstancesJobNamespaceGetResponse as AISearchInstancesJobNamespaceGetResponse,
    type AISearchInstancesJobNamespaceChangeStatusResponse as AISearchInstancesJobNamespaceChangeStatusResponse,
    type AISearchInstancesJobNamespaceListLogsResponse as AISearchInstancesJobNamespaceListLogsResponse,
    type AISearchInstancesJobListParams as AISearchInstancesJobListParams,
    type AISearchInstancesJobCreateParams as AISearchInstancesJobCreateParams,
    type AISearchInstancesJobRetrieveParams as AISearchInstancesJobRetrieveParams,
    type AISearchInstancesJobChangeStatusParams as AISearchInstancesJobChangeStatusParams,
    type AISearchInstancesJobListLogsParams as AISearchInstancesJobListLogsParams,
    type AISearchInstancesJobNamespaceListParams as AISearchInstancesJobNamespaceListParams,
    type AISearchInstancesJobNamespaceCreateParams as AISearchInstancesJobNamespaceCreateParams,
    type AISearchInstancesJobNamespaceGetParams as AISearchInstancesJobNamespaceGetParams,
    type AISearchInstancesJobNamespaceChangeStatusParams as AISearchInstancesJobNamespaceChangeStatusParams,
    type AISearchInstancesJobNamespaceListLogsParams as AISearchInstancesJobNamespaceListLogsParams,
  };

  export {
    AISearchNamespaces as AISearchNamespaces,
    type AISearchNamespaceListResponse as AISearchNamespaceListResponse,
    type AISearchNamespaceCreateResponse as AISearchNamespaceCreateResponse,
    type AISearchNamespaceDeleteResponse as AISearchNamespaceDeleteResponse,
    type AISearchNamespaceFetchResponse as AISearchNamespaceFetchResponse,
    type AISearchNamespaceUpdateResponse as AISearchNamespaceUpdateResponse,
    type AISearchNamespaceMoveInstanceResponse as AISearchNamespaceMoveInstanceResponse,
    type AISearchNamespaceListParams as AISearchNamespaceListParams,
    type AISearchNamespaceCreateParams as AISearchNamespaceCreateParams,
    type AISearchNamespaceDeleteParams as AISearchNamespaceDeleteParams,
    type AISearchNamespaceFetchParams as AISearchNamespaceFetchParams,
    type AISearchNamespaceUpdateParams as AISearchNamespaceUpdateParams,
    type AISearchNamespaceMoveInstanceParams as AISearchNamespaceMoveInstanceParams,
  };

  export {
    AISearchAccountSearch as AISearchAccountSearch,
    type AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse as AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse,
    type AISearchAccountSearchSearchResponse as AISearchAccountSearchSearchResponse,
    type AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams as AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams,
    type AISearchAccountSearchSearchParams as AISearchAccountSearchSearchParams,
  };

  export {
    AISearchInstancesItems as AISearchInstancesItems,
    type AISearchInstancesItemNamespaceListResponse as AISearchInstancesItemNamespaceListResponse,
    type AISearchInstancesItemNamespaceUploadResponse as AISearchInstancesItemNamespaceUploadResponse,
    type AISearchInstancesItemNamespaceCreateOrUpdateResponse as AISearchInstancesItemNamespaceCreateOrUpdateResponse,
    type AISearchInstancesItemNamespaceDeleteResponse as AISearchInstancesItemNamespaceDeleteResponse,
    type AISearchInstancesItemNamespaceGetResponse as AISearchInstancesItemNamespaceGetResponse,
    type AISearchInstancesItemNamespaceSyncResponse as AISearchInstancesItemNamespaceSyncResponse,
    type AISearchInstancesItemNamespaceListChunksResponse as AISearchInstancesItemNamespaceListChunksResponse,
    type AISearchInstancesItemNamespaceLogsResponse as AISearchInstancesItemNamespaceLogsResponse,
    type AISearchInstancesItemNamespaceListParams as AISearchInstancesItemNamespaceListParams,
    type AISearchInstancesItemNamespaceUploadParams as AISearchInstancesItemNamespaceUploadParams,
    type AISearchInstancesItemNamespaceCreateOrUpdateParams as AISearchInstancesItemNamespaceCreateOrUpdateParams,
    type AISearchInstancesItemNamespaceDeleteParams as AISearchInstancesItemNamespaceDeleteParams,
    type AISearchInstancesItemNamespaceGetParams as AISearchInstancesItemNamespaceGetParams,
    type AISearchInstancesItemNamespaceSyncParams as AISearchInstancesItemNamespaceSyncParams,
    type AISearchInstancesItemNamespaceListChunksParams as AISearchInstancesItemNamespaceListChunksParams,
    type AISearchInstancesItemNamespaceGetContentParams as AISearchInstancesItemNamespaceGetContentParams,
    type AISearchInstancesItemNamespaceLogsParams as AISearchInstancesItemNamespaceLogsParams,
  };

  export {
    AISearchTokens as AISearchTokens,
    type AISearchTokenListResponse as AISearchTokenListResponse,
    type AISearchTokenCreateResponse as AISearchTokenCreateResponse,
    type AISearchTokenDeleteResponse as AISearchTokenDeleteResponse,
    type AISearchTokenFetchResponse as AISearchTokenFetchResponse,
    type AISearchTokenUpdateResponse as AISearchTokenUpdateResponse,
    type AISearchTokenListParams as AISearchTokenListParams,
    type AISearchTokenCreateParams as AISearchTokenCreateParams,
    type AISearchTokenDeleteParams as AISearchTokenDeleteParams,
    type AISearchTokenFetchParams as AISearchTokenFetchParams,
    type AISearchTokenUpdateParams as AISearchTokenUpdateParams,
  };

  export {
    WorkersAI as WorkersAI,
    type WorkersAISearchResponse as WorkersAISearchResponse,
    type WorkersAIListModelSchemaResponse as WorkersAIListModelSchemaResponse,
    type WorkersAISearch2Response as WorkersAISearch2Response,
    type WorkersAIPostRunGenericResponse as WorkersAIPostRunGenericResponse,
    type WorkersAIPostRunModelResponse as WorkersAIPostRunModelResponse,
    type WorkersAISearch3Response as WorkersAISearch3Response,
    type WorkersAIPostToMarkdownResponse as WorkersAIPostToMarkdownResponse,
    type WorkersAIListToMarkdownSupportedResponse as WorkersAIListToMarkdownSupportedResponse,
    type WorkersAIListModelSchemaParams as WorkersAIListModelSchemaParams,
    type WorkersAISearch2Params as WorkersAISearch2Params,
    type WorkersAIPostRunGenericParams as WorkersAIPostRunGenericParams,
    type WorkersAIPostRunModelParams as WorkersAIPostRunModelParams,
    type WorkersAIPostToMarkdownParams as WorkersAIPostToMarkdownParams,
  };

  export {
    WorkersAIFinetune as WorkersAIFinetune,
    type WorkersAIFinetuneListResponse as WorkersAIFinetuneListResponse,
    type WorkersAIFinetuneCreateResponse as WorkersAIFinetuneCreateResponse,
    type WorkersAIFinetuneListPublicResponse as WorkersAIFinetuneListPublicResponse,
    type WorkersAIFinetuneDeleteResponse as WorkersAIFinetuneDeleteResponse,
    type WorkersAIFinetuneUploadAssetResponse as WorkersAIFinetuneUploadAssetResponse,
    type WorkersAIFinetuneCreateParams as WorkersAIFinetuneCreateParams,
    type WorkersAIFinetuneListPublicParams as WorkersAIFinetuneListPublicParams,
    type WorkersAIFinetuneDeleteParams as WorkersAIFinetuneDeleteParams,
    type WorkersAIFinetuneUploadAssetParams as WorkersAIFinetuneUploadAssetParams,
  };

  export {
    FinetuneAsset as FinetuneAsset,
    type FinetuneAssetWorkersAIDownloadResponse as FinetuneAssetWorkersAIDownloadResponse,
    type FinetuneAssetWorkersAIDownloadParams as FinetuneAssetWorkersAIDownloadParams,
  };

  export { NotificationAlertTypes as NotificationAlertTypes };

  export { NotificationMechanismEligibility as NotificationMechanismEligibility };

  export {
    NotificationDestinationsWithPagerDuty as NotificationDestinationsWithPagerDuty,
    type NotificationDestinationsWithPagerDutyConnectTokenParams as NotificationDestinationsWithPagerDutyConnectTokenParams,
  };

  export {
    NotificationWebhooks as NotificationWebhooks,
    type NotificationWebhookCreateAParams as NotificationWebhookCreateAParams,
    type NotificationWebhookDeleteAParams as NotificationWebhookDeleteAParams,
    type NotificationWebhookRetrieveAParams as NotificationWebhookRetrieveAParams,
    type NotificationWebhookUpdateAParams as NotificationWebhookUpdateAParams,
  };

  export {
    NotificationHistory as NotificationHistory,
    type NotificationHistoryListParams as NotificationHistoryListParams,
  };

  export {
    NotificationPolicies as NotificationPolicies,
    type NotificationPolicyCreateAParams as NotificationPolicyCreateAParams,
    type NotificationPolicyDeleteAParams as NotificationPolicyDeleteAParams,
    type NotificationPolicyRetrieveAParams as NotificationPolicyRetrieveAParams,
    type NotificationPolicyUpdateAParams as NotificationPolicyUpdateAParams,
    type NotificationPolicyShowEmailUnsubscribeDetailsParams as NotificationPolicyShowEmailUnsubscribeDetailsParams,
    type NotificationPolicyUnsubscribeEmailFromParams as NotificationPolicyUnsubscribeEmailFromParams,
    type NotificationPolicyTestAParams as NotificationPolicyTestAParams,
  };

  export {
    NotificationSilences as NotificationSilences,
    type NotificationSilenceCreateParams as NotificationSilenceCreateParams,
    type NotificationSilenceUpdateParams as NotificationSilenceUpdateParams,
    type NotificationSilenceDeleteParams as NotificationSilenceDeleteParams,
    type NotificationSilenceRetrieveParams as NotificationSilenceRetrieveParams,
  };

  export {
    DataSecurity as DataSecurity,
    type DataSecurityContentFindingsTopNParams as DataSecurityContentFindingsTopNParams,
    type DataSecurityFindingsSummaryParams as DataSecurityFindingsSummaryParams,
    type DataSecurityFindingsTimeseriesParams as DataSecurityFindingsTimeseriesParams,
  };

  export {
    ArtAnalytics as ArtAnalytics,
    type ArtAnalyticQuerySummaryParams as ArtAnalyticQuerySummaryParams,
    type ArtAnalyticQueryTimeseriesParams as ArtAnalyticQueryTimeseriesParams,
    type ArtAnalyticQueryTopNParams as ArtAnalyticQueryTopNParams,
  };

  export {
    AnalyticsEngine as AnalyticsEngine,
    type AnalyticsEngineSQLQueryGetParams as AnalyticsEngineSQLQueryGetParams,
    type AnalyticsEngineSQLQueryPostParams as AnalyticsEngineSQLQueryPostParams,
  };

  export {
    Artifacts as Artifacts,
    type ArtifactNamespacesListResponse as ArtifactNamespacesListResponse,
    type ArtifactNamespacesGetResponse as ArtifactNamespacesGetResponse,
    type ArtifactReposListResponse as ArtifactReposListResponse,
    type ArtifactReposCreateResponse as ArtifactReposCreateResponse,
    type ArtifactReposDeleteResponse as ArtifactReposDeleteResponse,
    type ArtifactReposGetResponse as ArtifactReposGetResponse,
    type ArtifactReposCommitGetResponse as ArtifactReposCommitGetResponse,
    type ArtifactReposForkResponse as ArtifactReposForkResponse,
    type ArtifactReposImportResponse as ArtifactReposImportResponse,
    type ArtifactReposLogGetResponse as ArtifactReposLogGetResponse,
    type ArtifactReposRawGetResponse as ArtifactReposRawGetResponse,
    type ArtifactRepoTokensListResponse as ArtifactRepoTokensListResponse,
    type ArtifactReposTreeGetResponse as ArtifactReposTreeGetResponse,
    type ArtifactTokensCreateResponse as ArtifactTokensCreateResponse,
    type ArtifactTokensRevokeResponse as ArtifactTokensRevokeResponse,
    type ArtifactNamespacesListParams as ArtifactNamespacesListParams,
    type ArtifactNamespacesGetParams as ArtifactNamespacesGetParams,
    type ArtifactReposListParams as ArtifactReposListParams,
    type ArtifactReposCreateParams as ArtifactReposCreateParams,
    type ArtifactReposDeleteParams as ArtifactReposDeleteParams,
    type ArtifactReposGetParams as ArtifactReposGetParams,
    type ArtifactReposBlobGetParams as ArtifactReposBlobGetParams,
    type ArtifactReposCommitGetParams as ArtifactReposCommitGetParams,
    type ArtifactReposFileGetParams as ArtifactReposFileGetParams,
    type ArtifactReposForkParams as ArtifactReposForkParams,
    type ArtifactReposImportParams as ArtifactReposImportParams,
    type ArtifactReposLogGetParams as ArtifactReposLogGetParams,
    type ArtifactReposRawGetParams as ArtifactReposRawGetParams,
    type ArtifactRepoTokensListParams as ArtifactRepoTokensListParams,
    type ArtifactReposTreeGetParams as ArtifactReposTreeGetParams,
    type ArtifactTokensCreateParams as ArtifactTokensCreateParams,
    type ArtifactTokensRevokeParams as ArtifactTokensRevokeParams,
  };

  export { AuditLogs as AuditLogs, type AuditLogListAccountParams as AuditLogListAccountParams };

  export {
    AutoRagRagSearch as AutoRagRagSearch,
    type AutoRagRagSearchAutoragConfigAIResponse as AutoRagRagSearchAutoragConfigAIResponse,
    type AutoRagRagSearchSearchResponse as AutoRagRagSearchSearchResponse,
    type AutoRagRagSearchAutoragConfigAIParams as AutoRagRagSearchAutoragConfigAIParams,
    type AutoRagRagSearchSearchParams as AutoRagRagSearchSearchParams,
  };

  export {
    AutoRagRag as AutoRagRag,
    type AutoRagRagAutoragConfigFilesResponse as AutoRagRagAutoragConfigFilesResponse,
    type AutoRagRagAutoragConfigSyncResponse as AutoRagRagAutoragConfigSyncResponse,
    type AutoRagRagAutoragConfigFilesParams as AutoRagRagAutoragConfigFilesParams,
    type AutoRagRagAutoragConfigSyncParams as AutoRagRagAutoragConfigSyncParams,
  };

  export {
    AutoRagJobs as AutoRagJobs,
    type AutoRagJobAutoragConfigListResponse as AutoRagJobAutoragConfigListResponse,
    type AutoRagJobAutoragConfigGetResponse as AutoRagJobAutoragConfigGetResponse,
    type AutoRagJobAutoragConfigListLogsResponse as AutoRagJobAutoragConfigListLogsResponse,
    type AutoRagJobAutoragConfigListParams as AutoRagJobAutoragConfigListParams,
    type AutoRagJobAutoragConfigGetParams as AutoRagJobAutoragConfigGetParams,
    type AutoRagJobAutoragConfigListLogsParams as AutoRagJobAutoragConfigListLogsParams,
  };

  export { BillableUsage as BillableUsage };

  export {
    BillableUsageV2 as BillableUsageV2,
    type BillableUsageV2QueryAccountParams as BillableUsageV2QueryAccountParams,
  };

  export { AccountBilling as AccountBilling };

  export {
    AccountBillingHistory as AccountBillingHistory,
    type AccountBillingHistoryListParams as AccountBillingHistoryListParams,
  };

  export {
    AccountBillingProfile as AccountBillingProfile,
    type AccountBillingProfileUpdateEmailParams as AccountBillingProfileUpdateEmailParams,
    type AccountBillingProfileCreateParams as AccountBillingProfileCreateParams,
    type AccountBillingProfileUpdateParams as AccountBillingProfileUpdateParams,
  };

  export { UsageAnalytics as UsageAnalytics };

  export {
    BotnetThreatFeed as BotnetThreatFeed,
    type BotnetThreatFeedListDayReportResponse as BotnetThreatFeedListDayReportResponse,
    type BotnetThreatFeedListFullReportResponse as BotnetThreatFeedListFullReportResponse,
    type BotnetThreatFeedListASNResponse as BotnetThreatFeedListASNResponse,
    type BotnetThreatFeedDeleteASNResponse as BotnetThreatFeedDeleteASNResponse,
    type BotnetThreatFeedListDayReportParams as BotnetThreatFeedListDayReportParams,
    type BotnetThreatFeedListFullReportParams as BotnetThreatFeedListFullReportParams,
    type BotnetThreatFeedDeleteASNParams as BotnetThreatFeedDeleteASNParams,
  };

  export { BrandProtection as BrandProtection };

  export {
    LogoMatch as LogoMatch,
    type LogoMatchListAccountsAccountBrandProtectionMatchesParams as LogoMatchListAccountsAccountBrandProtectionMatchesParams,
    type LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams as LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams,
    type LogoMatchPostAccountsAccountIDBrandProtectionParams as LogoMatchPostAccountsAccountIDBrandProtectionParams,
    type LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams as LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams,
    type LogoMatchRetrieveAccountsAccountBrandProtectionParams as LogoMatchRetrieveAccountsAccountBrandProtectionParams,
  };

  export {
    DomainSearch as DomainSearch,
    type DomainSearchListAccountsAccountBrandProtectionMatchesParams as DomainSearchListAccountsAccountBrandProtectionMatchesParams,
    type DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams as DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams,
    type DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams as DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams,
    type DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams as DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams,
  };

  export {
    BrowserExtensionConfig as BrowserExtensionConfig,
    type BrowserExtensionConfigAccountsDeleteParams as BrowserExtensionConfigAccountsDeleteParams,
    type BrowserExtensionConfigAccountsGetParams as BrowserExtensionConfigAccountsGetParams,
    type BrowserExtensionConfigAccountsPostParams as BrowserExtensionConfigAccountsPostParams,
    type BrowserExtensionConfigAccountsPutParams as BrowserExtensionConfigAccountsPutParams,
  };

  export {
    BrowserExtensionInventories as BrowserExtensionInventories,
    type BrowserExtensionInventoryAccountsListParams as BrowserExtensionInventoryAccountsListParams,
    type BrowserExtensionInventoryAccountsGetParams as BrowserExtensionInventoryAccountsGetParams,
  };

  export {
    Brapi as Brapi,
    type BrapiPostAccessibilityTreeResponse as BrapiPostAccessibilityTreeResponse,
    type BrapiPostContentResponse as BrapiPostContentResponse,
    type BrapiPostCrawlResponse as BrapiPostCrawlResponse,
    type BrapiDeleteCancelCrawlResponse as BrapiDeleteCancelCrawlResponse,
    type BrapiRetrieveCrawlResultResponse as BrapiRetrieveCrawlResultResponse,
    type BrapiPostDevtoolsAcquireResponse as BrapiPostDevtoolsAcquireResponse,
    type BrapiDeleteDevtoolsBrowserDeleteResponse as BrapiDeleteDevtoolsBrowserDeleteResponse,
    type BrapiListDevtoolsJsonResponse as BrapiListDevtoolsJsonResponse,
    type BrapiRetrieveDevtoolsJsonActivateResponse as BrapiRetrieveDevtoolsJsonActivateResponse,
    type BrapiRetrieveDevtoolsJsonCloseResponse as BrapiRetrieveDevtoolsJsonCloseResponse,
    type BrapiListDevtoolsJsonListResponse as BrapiListDevtoolsJsonListResponse,
    type BrapiRetrieveDevtoolsJsonTargetResponse as BrapiRetrieveDevtoolsJsonTargetResponse,
    type BrapiPutDevtoolsJsonNewResponse as BrapiPutDevtoolsJsonNewResponse,
    type BrapiListDevtoolsJsonProtocolResponse as BrapiListDevtoolsJsonProtocolResponse,
    type BrapiListDevtoolsJsonVersionResponse as BrapiListDevtoolsJsonVersionResponse,
    type BrapiPostDevtoolsLiveViewResponse as BrapiPostDevtoolsLiveViewResponse,
    type BrapiListDevtoolsSessionListResponse as BrapiListDevtoolsSessionListResponse,
    type BrapiRetrieveDevtoolsSessionDetailsResponse as BrapiRetrieveDevtoolsSessionDetailsResponse,
    type BrapiPostJsonResponse as BrapiPostJsonResponse,
    type BrapiPostLinksResponse as BrapiPostLinksResponse,
    type BrapiPostMarkdownResponse as BrapiPostMarkdownResponse,
    type BrapiPostScrapeResponse as BrapiPostScrapeResponse,
    type BrapiPostScreenshotResponse as BrapiPostScreenshotResponse,
    type BrapiPostSnapshotResponse as BrapiPostSnapshotResponse,
    type BrapiPostAccessibilityTreeParams as BrapiPostAccessibilityTreeParams,
    type BrapiPostContentParams as BrapiPostContentParams,
    type BrapiPostCrawlParams as BrapiPostCrawlParams,
    type BrapiDeleteCancelCrawlParams as BrapiDeleteCancelCrawlParams,
    type BrapiRetrieveCrawlResultParams as BrapiRetrieveCrawlResultParams,
    type BrapiListDevtoolsBrowserAcquireParams as BrapiListDevtoolsBrowserAcquireParams,
    type BrapiPostDevtoolsAcquireParams as BrapiPostDevtoolsAcquireParams,
    type BrapiDeleteDevtoolsBrowserDeleteParams as BrapiDeleteDevtoolsBrowserDeleteParams,
    type BrapiRetrieveDevtoolsBrowserParams as BrapiRetrieveDevtoolsBrowserParams,
    type BrapiListDevtoolsJsonParams as BrapiListDevtoolsJsonParams,
    type BrapiRetrieveDevtoolsJsonActivateParams as BrapiRetrieveDevtoolsJsonActivateParams,
    type BrapiRetrieveDevtoolsJsonCloseParams as BrapiRetrieveDevtoolsJsonCloseParams,
    type BrapiListDevtoolsJsonListParams as BrapiListDevtoolsJsonListParams,
    type BrapiRetrieveDevtoolsJsonTargetParams as BrapiRetrieveDevtoolsJsonTargetParams,
    type BrapiPutDevtoolsJsonNewParams as BrapiPutDevtoolsJsonNewParams,
    type BrapiListDevtoolsJsonProtocolParams as BrapiListDevtoolsJsonProtocolParams,
    type BrapiListDevtoolsJsonVersionParams as BrapiListDevtoolsJsonVersionParams,
    type BrapiPostDevtoolsLiveViewParams as BrapiPostDevtoolsLiveViewParams,
    type BrapiRetrieveDevtoolsPageParams as BrapiRetrieveDevtoolsPageParams,
    type BrapiListDevtoolsSessionListParams as BrapiListDevtoolsSessionListParams,
    type BrapiRetrieveDevtoolsSessionDetailsParams as BrapiRetrieveDevtoolsSessionDetailsParams,
    type BrapiPostJsonParams as BrapiPostJsonParams,
    type BrapiPostLinksParams as BrapiPostLinksParams,
    type BrapiPostMarkdownParams as BrapiPostMarkdownParams,
    type BrapiPostPdfParams as BrapiPostPdfParams,
    type BrapiPostScrapeParams as BrapiPostScrapeParams,
    type BrapiPostScreenshotParams as BrapiPostScreenshotParams,
    type BrapiPostSnapshotParams as BrapiPostSnapshotParams,
  };

  export {
    Builds as Builds,
    type BuildListVersionResponse as BuildListVersionResponse,
    type BuildListLatestScriptsResponse as BuildListLatestScriptsResponse,
    type BuildRetrieveResponse as BuildRetrieveResponse,
    type BuildCancelByUUIDResponse as BuildCancelByUUIDResponse,
    type BuildListLogsResponse as BuildListLogsResponse,
    type BuildListVersionParams as BuildListVersionParams,
    type BuildListLatestScriptsParams as BuildListLatestScriptsParams,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildCancelByUUIDParams as BuildCancelByUUIDParams,
    type BuildListLogsParams as BuildListLogsParams,
  };

  export {
    RepositoryConnections as RepositoryConnections,
    type RepositoryConnectionUpsertRepoResponse as RepositoryConnectionUpsertRepoResponse,
    type RepositoryConnectionUpsertRepoParams as RepositoryConnectionUpsertRepoParams,
    type RepositoryConnectionDeleteRepoParams as RepositoryConnectionDeleteRepoParams,
  };

  export {
    GitHubIntegration as GitHubIntegration,
    type GitHubIntegrationListWorkerConfigAutofillResponse as GitHubIntegrationListWorkerConfigAutofillResponse,
    type GitHubIntegrationListWorkerConfigAutofillParams as GitHubIntegrationListWorkerConfigAutofillParams,
  };

  export {
    BuildTokens as BuildTokens,
    type BuildTokenListResponse as BuildTokenListResponse,
    type BuildTokenCreateResponse as BuildTokenCreateResponse,
    type BuildTokenCreateParams as BuildTokenCreateParams,
    type BuildTokenDeleteParams as BuildTokenDeleteParams,
  };

  export {
    Triggers as Triggers,
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerUpdateResponse as TriggerUpdateResponse,
    type TriggerCreateManualBuildResponse as TriggerCreateManualBuildResponse,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerDeleteParams as TriggerDeleteParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerCreateManualBuildParams as TriggerCreateManualBuildParams,
    type TriggerPurgeBuildCacheParams as TriggerPurgeBuildCacheParams,
  };

  export {
    EnvironmentVariables as EnvironmentVariables,
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableUpsertResponse as EnvironmentVariableUpsertResponse,
    type EnvironmentVariableListParams as EnvironmentVariableListParams,
    type EnvironmentVariableUpsertParams as EnvironmentVariableUpsertParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };

  export {
    Workers as Workers,
    type WorkerCreateBuildResponse as WorkerCreateBuildResponse,
    type WorkerListBuildsByScriptResponse as WorkerListBuildsByScriptResponse,
    type WorkerListTriggersByScriptResponse as WorkerListTriggersByScriptResponse,
    type WorkerDeleteBuildResponse as WorkerDeleteBuildResponse,
    type WorkerRetrieveBuildResponse as WorkerRetrieveBuildResponse,
    type WorkerUpdateBuildResponse as WorkerUpdateBuildResponse,
    type WorkerCreateBuildParams as WorkerCreateBuildParams,
    type WorkerListBuildsByScriptParams as WorkerListBuildsByScriptParams,
    type WorkerListTriggersByScriptParams as WorkerListTriggersByScriptParams,
    type WorkerDeleteBuildParams as WorkerDeleteBuildParams,
    type WorkerRetrieveBuildParams as WorkerRetrieveBuildParams,
    type WorkerUpdateBuildParams as WorkerUpdateBuildParams,
  };

  export {
    DeployHooks as DeployHooks,
    type DeployHookListResponse as DeployHookListResponse,
    type DeployHookCreateResponse as DeployHookCreateResponse,
    type DeployHookDeleteResponse as DeployHookDeleteResponse,
    type DeployHookRetrieveResponse as DeployHookRetrieveResponse,
    type DeployHookUpdateResponse as DeployHookUpdateResponse,
    type DeployHookListParams as DeployHookListParams,
    type DeployHookCreateParams as DeployHookCreateParams,
    type DeployHookDeleteParams as DeployHookDeleteParams,
    type DeployHookRetrieveParams as DeployHookRetrieveParams,
    type DeployHookUpdateParams as DeployHookUpdateParams,
  };

  export {
    AccountSubscriptions as AccountSubscriptions,
    type AccountSubscriptionBulkCreateParams as AccountSubscriptionBulkCreateParams,
  };

  export {
    CallsApps as CallsApps,
    type CallsAppCreateANewParams as CallsAppCreateANewParams,
    type CallsAppDeleteParams as CallsAppDeleteParams,
    type CallsAppRetrieveDetailsParams as CallsAppRetrieveDetailsParams,
    type CallsAppUpdateDetailsParams as CallsAppUpdateDetailsParams,
  };

  export {
    CallsTurnKeys as CallsTurnKeys,
    type CallsTurnKeyCreateParams as CallsTurnKeyCreateParams,
    type CallsTurnKeyDeleteParams as CallsTurnKeyDeleteParams,
    type CallsTurnKeyRetrieveDetailsParams as CallsTurnKeyRetrieveDetailsParams,
    type CallsTurnKeyUpdateParams as CallsTurnKeyUpdateParams,
  };

  export {
    CloudflareTunnel as CloudflareTunnel,
    type CloudflareTunnelListParams as CloudflareTunnelListParams,
    type CloudflareTunnelCreateAParams as CloudflareTunnelCreateAParams,
    type CloudflareTunnelDeleteAParams as CloudflareTunnelDeleteAParams,
    type CloudflareTunnelRetrieveAParams as CloudflareTunnelRetrieveAParams,
    type CloudflareTunnelUpdateAParams as CloudflareTunnelUpdateAParams,
    type CloudflareTunnelCleanUpConnectionsParams as CloudflareTunnelCleanUpConnectionsParams,
    type CloudflareTunnelListConnectionsParams as CloudflareTunnelListConnectionsParams,
    type CloudflareTunnelRetrieveConnectorParams as CloudflareTunnelRetrieveConnectorParams,
    type CloudflareTunnelCreateAManagementTokenParams as CloudflareTunnelCreateAManagementTokenParams,
    type CloudflareTunnelListATokenParams as CloudflareTunnelListATokenParams,
  };

  export {
    CloudflareTunnelConfiguration as CloudflareTunnelConfiguration,
    type CloudflareTunnelConfigurationListParams as CloudflareTunnelConfigurationListParams,
    type CloudflareTunnelConfigurationPutParams as CloudflareTunnelConfigurationPutParams,
  };

  export {
    Turnstile as Turnstile,
    type TurnstileAccountsWidgetsListResponse as TurnstileAccountsWidgetsListResponse,
    type TurnstileAccountsWidgetCreateResponse as TurnstileAccountsWidgetCreateResponse,
    type TurnstileAccountsWidgetDeleteResponse as TurnstileAccountsWidgetDeleteResponse,
    type TurnstileAccountsWidgetGetResponse as TurnstileAccountsWidgetGetResponse,
    type TurnstileAccountsWidgetUpdateResponse as TurnstileAccountsWidgetUpdateResponse,
    type TurnstileAccountsWidgetRotateSecretResponse as TurnstileAccountsWidgetRotateSecretResponse,
    type TurnstileAccountsWidgetsListParams as TurnstileAccountsWidgetsListParams,
    type TurnstileAccountsWidgetCreateParams as TurnstileAccountsWidgetCreateParams,
    type TurnstileAccountsWidgetDeleteParams as TurnstileAccountsWidgetDeleteParams,
    type TurnstileAccountsWidgetGetParams as TurnstileAccountsWidgetGetParams,
    type TurnstileAccountsWidgetUpdateParams as TurnstileAccountsWidgetUpdateParams,
    type TurnstileAccountsWidgetRotateSecretParams as TurnstileAccountsWidgetRotateSecretParams,
  };

  export {
    Scans as Scans,
    type ScanRetrieveGetBannersResponse as ScanRetrieveGetBannersResponse,
    type ScanRetrieveGetBannersParams as ScanRetrieveGetBannersParams,
  };

  export {
    BinDB as BinDB,
    type BinDBPostPostResponse as BinDBPostPostResponse,
    type BinDBPostPostParams as BinDBPostPostParams,
    type BinDBRetrieveGetBinaryParams as BinDBRetrieveGetBinaryParams,
  };

  export {
    Event as Event,
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

  export {
    Attacker as Attacker,
    type AttackerListListResponse as AttackerListListResponse,
    type AttackerListListParams as AttackerListListParams,
  };

  export {
    Category as Category,
    type CategoryListListResponse as CategoryListListResponse,
    type CategoryListListCompleteResponse as CategoryListListCompleteResponse,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryDeleteDeleteResponse as CategoryDeleteDeleteResponse,
    type CategoryRetrieveReadResponse as CategoryRetrieveReadResponse,
    type CategoryPatchUpdateResponse as CategoryPatchUpdateResponse,
    type CategoryPostUpdateResponse as CategoryPostUpdateResponse,
    type CategoryListListParams as CategoryListListParams,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryDeleteDeleteParams as CategoryDeleteDeleteParams,
    type CategoryRetrieveReadParams as CategoryRetrieveReadParams,
    type CategoryPatchUpdateParams as CategoryPatchUpdateParams,
    type CategoryPostUpdateParams as CategoryPostUpdateParams,
  };

  export { Country as Country, type CountryListReadResponse as CountryListReadResponse };

  export {
    Dataset as Dataset,
    type DatasetListListResponse as DatasetListListResponse,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetDeleteDeleteResponse as DatasetDeleteDeleteResponse,
    type DatasetRetrieveReadResponse as DatasetRetrieveReadResponse,
    type DatasetPatchUpdateResponse as DatasetPatchUpdateResponse,
    type DatasetPostUpdateResponse as DatasetPostUpdateResponse,
    type DatasetListListParams as DatasetListListParams,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetDeleteDeleteParams as DatasetDeleteDeleteParams,
    type DatasetRetrieveReadParams as DatasetRetrieveReadParams,
    type DatasetPatchUpdateParams as DatasetPatchUpdateParams,
    type DatasetPostUpdateParams as DatasetPostUpdateParams,
  };

  export {
    Groups as Groups,
    type GroupListListResponse as GroupListListResponse,
    type GroupPostCreateResponse as GroupPostCreateResponse,
    type GroupDeleteDeleteResponse as GroupDeleteDeleteResponse,
    type GroupRetrieveReadResponse as GroupRetrieveReadResponse,
    type GroupPutUpdateResponse as GroupPutUpdateResponse,
    type GroupListMemberListResponse as GroupListMemberListResponse,
    type GroupPostMemberCreateResponse as GroupPostMemberCreateResponse,
    type GroupDeleteMemberDeleteResponse as GroupDeleteMemberDeleteResponse,
    type GroupPostCreateParams as GroupPostCreateParams,
    type GroupDeleteDeleteParams as GroupDeleteDeleteParams,
    type GroupRetrieveReadParams as GroupRetrieveReadParams,
    type GroupPutUpdateParams as GroupPutUpdateParams,
    type GroupListMemberListParams as GroupListMemberListParams,
    type GroupPostMemberCreateParams as GroupPostMemberCreateParams,
    type GroupDeleteMemberDeleteParams as GroupDeleteMemberDeleteParams,
  };

  export {
    Indicators as Indicators,
    type IndicatorCreateResponse as IndicatorCreateResponse,
    type IndicatorCreateParams as IndicatorCreateParams,
  };

  export {
    Indicator as Indicator,
    type IndicatorListListLegacyResponse as IndicatorListListLegacyResponse,
    type IndicatorPostCreateBulkResponse as IndicatorPostCreateBulkResponse,
    type IndicatorIndicatorCreateResponse as IndicatorIndicatorCreateResponse,
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
    type IndicatorIndicatorCreateParams as IndicatorIndicatorCreateParams,
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

  export {
    Permissions as Permissions,
    type PermissionListListResponse as PermissionListListResponse,
    type PermissionPostCreateResponse as PermissionPostCreateResponse,
    type PermissionDeleteDeleteResponse as PermissionDeleteDeleteResponse,
    type PermissionPutUpdateResponse as PermissionPutUpdateResponse,
    type PermissionListListParams as PermissionListListParams,
    type PermissionPostCreateParams as PermissionPostCreateParams,
    type PermissionDeleteDeleteParams as PermissionDeleteDeleteParams,
    type PermissionPutUpdateParams as PermissionPutUpdateParams,
  };

  export {
    Tag as Tag,
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

  export {
    TargetIndustry as TargetIndustry,
    type TargetIndustryListListDatasetResponse as TargetIndustryListListDatasetResponse,
    type TargetIndustryListListResponse as TargetIndustryListListResponse,
    type TargetIndustryListListCompleteResponse as TargetIndustryListListCompleteResponse,
    type TargetIndustryListListDatasetParams as TargetIndustryListListDatasetParams,
    type TargetIndustryListListParams as TargetIndustryListListParams,
  };

  export { Datasets as Datasets, type DatasetPostPopulateResponse as DatasetPostPopulateResponse };

  export {
    Events as Events,
    type EventListGraphResponse as EventListGraphResponse,
    type EventListGraphParams as EventListGraphParams,
  };

  export {
    IndicatorTypes as IndicatorTypes,
    type IndicatorTypeListListResponse as IndicatorTypeListListResponse,
    type IndicatorTypeListLegacyListResponse as IndicatorTypeListLegacyListResponse,
    type IndicatorTypeListListParams as IndicatorTypeListListParams,
  };

  export {
    TagCategory as TagCategory,
    type TagCategoryListListResponse as TagCategoryListListResponse,
    type TagCategoryCreateResponse as TagCategoryCreateResponse,
    type TagCategoryDeleteDeleteResponse as TagCategoryDeleteDeleteResponse,
    type TagCategoryRetrieveDetailResponse as TagCategoryRetrieveDetailResponse,
    type TagCategoryPatchUpdateResponse as TagCategoryPatchUpdateResponse,
    type TagCategoryListListParams as TagCategoryListListParams,
    type TagCategoryCreateParams as TagCategoryCreateParams,
    type TagCategoryDeleteDeleteParams as TagCategoryDeleteDeleteParams,
    type TagCategoryRetrieveDetailParams as TagCategoryRetrieveDetailParams,
    type TagCategoryPatchUpdateParams as TagCategoryPatchUpdateParams,
  };

  export {
    RequestForInformationRfi as RequestForInformationRfi,
    type RequestForInformationRfiCloudforceOneListResponse as RequestForInformationRfiCloudforceOneListResponse,
    type RequestForInformationRfiCloudforceOneConstantsResponse as RequestForInformationRfiCloudforceOneConstantsResponse,
    type RequestForInformationRfiCloudforceOneNewResponse as RequestForInformationRfiCloudforceOneNewResponse,
    type RequestForInformationRfiCloudforceOneQuotaResponse as RequestForInformationRfiCloudforceOneQuotaResponse,
    type RequestForInformationRfiCloudforceOneTypesResponse as RequestForInformationRfiCloudforceOneTypesResponse,
    type RequestForInformationRfiCloudforceOneGetResponse as RequestForInformationRfiCloudforceOneGetResponse,
    type RequestForInformationRfiCloudforceOneUpdateResponse as RequestForInformationRfiCloudforceOneUpdateResponse,
    type RequestForInformationRfiCloudforceOneAssetListResponse as RequestForInformationRfiCloudforceOneAssetListResponse,
    type RequestForInformationRfiCloudforceOneAssetNewResponse as RequestForInformationRfiCloudforceOneAssetNewResponse,
    type RequestForInformationRfiCloudforceOneAssetGetResponse as RequestForInformationRfiCloudforceOneAssetGetResponse,
    type RequestForInformationRfiCloudforceOneAssetUpdateResponse as RequestForInformationRfiCloudforceOneAssetUpdateResponse,
    type RequestForInformationRfiCloudforceOneMessageListResponse as RequestForInformationRfiCloudforceOneMessageListResponse,
    type RequestForInformationRfiCloudforceOneMessageNewResponse as RequestForInformationRfiCloudforceOneMessageNewResponse,
    type RequestForInformationRfiCloudforceOneMessageUpdateResponse as RequestForInformationRfiCloudforceOneMessageUpdateResponse,
    type RequestForInformationRfiCloudforceOneListParams as RequestForInformationRfiCloudforceOneListParams,
    type RequestForInformationRfiCloudforceOneNewParams as RequestForInformationRfiCloudforceOneNewParams,
    type RequestForInformationRfiCloudforceOneDeleteParams as RequestForInformationRfiCloudforceOneDeleteParams,
    type RequestForInformationRfiCloudforceOneGetParams as RequestForInformationRfiCloudforceOneGetParams,
    type RequestForInformationRfiCloudforceOneUpdateParams as RequestForInformationRfiCloudforceOneUpdateParams,
    type RequestForInformationRfiCloudforceOneAssetListParams as RequestForInformationRfiCloudforceOneAssetListParams,
    type RequestForInformationRfiCloudforceOneAssetNewParams as RequestForInformationRfiCloudforceOneAssetNewParams,
    type RequestForInformationRfiCloudforceOneAssetDeleteParams as RequestForInformationRfiCloudforceOneAssetDeleteParams,
    type RequestForInformationRfiCloudforceOneAssetGetParams as RequestForInformationRfiCloudforceOneAssetGetParams,
    type RequestForInformationRfiCloudforceOneAssetUpdateParams as RequestForInformationRfiCloudforceOneAssetUpdateParams,
    type RequestForInformationRfiCloudforceOneMessageListParams as RequestForInformationRfiCloudforceOneMessageListParams,
    type RequestForInformationRfiCloudforceOneMessageNewParams as RequestForInformationRfiCloudforceOneMessageNewParams,
    type RequestForInformationRfiCloudforceOneMessageDeleteParams as RequestForInformationRfiCloudforceOneMessageDeleteParams,
    type RequestForInformationRfiCloudforceOneMessageUpdateParams as RequestForInformationRfiCloudforceOneMessageUpdateParams,
  };

  export {
    PriorityIntelligenceRequirementsPir as PriorityIntelligenceRequirementsPir,
    type PriorityIntelligenceRequirementsPirCloudforceOneListResponse as PriorityIntelligenceRequirementsPirCloudforceOneListResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneNewResponse as PriorityIntelligenceRequirementsPirCloudforceOneNewResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse as PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneGetResponse as PriorityIntelligenceRequirementsPirCloudforceOneGetResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse as PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneListParams as PriorityIntelligenceRequirementsPirCloudforceOneListParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneNewParams as PriorityIntelligenceRequirementsPirCloudforceOneNewParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams as PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneGetParams as PriorityIntelligenceRequirementsPirCloudforceOneGetParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams as PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams,
  };

  export {
    Rules as Rules,
    type RuleCloudforceOneGetManagedResponse as RuleCloudforceOneGetManagedResponse,
    type RuleCloudforceOneListParams as RuleCloudforceOneListParams,
    type RuleCloudforceOneCreateParams as RuleCloudforceOneCreateParams,
    type RuleCloudforceOneRemoveAccountExemptionsParams as RuleCloudforceOneRemoveAccountExemptionsParams,
    type RuleCloudforceOneAddAccountExemptionsParams as RuleCloudforceOneAddAccountExemptionsParams,
    type RuleCloudforceOneUpdateAccountExemptionsParams as RuleCloudforceOneUpdateAccountExemptionsParams,
    type RuleSearchParams as RuleSearchParams,
    type RuleCloudforceOneListEmailParams as RuleCloudforceOneListEmailParams,
    type RuleCloudforceOneCreateEmailParams as RuleCloudforceOneCreateEmailParams,
  };

  export {
    Approvals as Approvals,
    type ApprovalCloudforceOneListRuleParams as ApprovalCloudforceOneListRuleParams,
    type ApprovalCloudforceOneGetRuleParams as ApprovalCloudforceOneGetRuleParams,
    type ApprovalCloudforceOneCancelRuleParams as ApprovalCloudforceOneCancelRuleParams,
    type ApprovalCloudforceOneResubmitRuleParams as ApprovalCloudforceOneResubmitRuleParams,
  };
}

const headerExplicitlyOmitted = (source: HeadersLike | undefined, name: string): boolean => {
  if (!source || Array.isArray(source) || source instanceof Headers) return false;
  const target = name.toLowerCase();
  return Object.entries(source).some(([key, value]) => key.toLowerCase() === target && value === null);
};

const appendAuthCookies = (headers: Headers, cookies: Record<string, string>): void => {
  for (const [name, value] of Object.entries(cookies)) {
    if (cookieHeaderHas(headers.get('Cookie'), name)) continue;
    const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    const existing = headers.get('Cookie');
    headers.set('Cookie', existing ? existing + '; ' + cookie : cookie);
  }
};

const cookieHeaderHas = (value: string | null, name: string): boolean => {
  if (!value) return false;
  const target = encodeURIComponent(name) + '=';
  return value.split(';').some((cookie) => cookie.trim().startsWith(target));
};

/** Client fields holding a secret, masked whenever the client is printed or serialized. */
const SECRET_CLIENT_FIELDS: readonly string[] = [];

/**
 * One field of the client (or of its stored options) as a printed client shows it. Credentials are
 * masked outright; header bags go through the log redaction, which knows every header this SDK
 * authenticates with; a base URL loses any userinfo or query credential it carries.
 */
const redactClientField = (key: string, value: unknown): unknown => {
  if (value === null || value === undefined) return value;
  if (SECRET_CLIENT_FIELDS.includes(key)) return '***';
  if (key === 'baseURL' && typeof value === 'string') return redactUrl(value);
  if (key === 'defaultHeaders') {
    if (value instanceof Headers) return redactHeaders(value);
    if (typeof value !== 'object' || Array.isArray(value)) return '***';
    const redactValue = (name: string, field: unknown): unknown => {
      if (typeof field === 'string') return redactHeaders({ [name]: field })[name];
      if (Array.isArray(field)) return field.map((entry) => redactValue(name, entry));
      return field === null || field === undefined ? field : '***';
    };
    return Object.fromEntries(Object.entries(value).map(([name, field]) => [name, redactValue(name, field)]));
  }
  if (typeof value !== 'object') return value;
  if (key === 'fetchOptions') {
    const { headers: _headers, ...rest } = value as Record<string, unknown>;
    return _headers === undefined ? rest : { ...rest, headers: '***' };
  }
  if (key === '_options') {
    return Object.fromEntries(
      Object.entries(value).map(([name, field]) => [name, redactClientField(name, field)]),
    );
  }
  return value;
};

/** Statuses the client follows when they carry a `Location`; any other 3xx is the server's answer. */
const REDIRECT_STATUSES: readonly number[] = [301, 302, 303, 307, 308];

/** The most redirects one request follows, the same cap the platform `fetch` uses. */
const MAX_REDIRECTS = 20;

/**
 * Headers that carry a credential: the platform's own and every header this API's security schemes
 * place. A redirect that leaves the origin drops each of them, wherever it was set.
 */
const CREDENTIAL_HEADERS: readonly string[] = ['authorization', 'cookie', 'proxy-authorization'];

/** Query parameters this API's security schemes place, carried only to a same-origin redirect target. */
const CREDENTIAL_QUERY: readonly string[] = [];

/**
 * Credential headers a browser keeps on the origin itself: it drops `Authorization` from a
 * cross-origin redirect and never lets script set the other two.
 */
const BROWSER_GUARDED_HEADERS: readonly string[] = ['authorization', 'cookie', 'proxy-authorization'];

/**
 * Whether this runtime's fetch answers a manual redirect opaquely, hiding its target: a browser
 * page, or a dedicated, shared or service worker in one. A worker scope alone is not enough,
 * since edge runtimes model theirs on it while returning the real 3xx; a browser user agent is.
 */
const hidesRedirectTargets = (): boolean => {
  if (isRunningInBrowser()) return true;
  if (typeof (globalThis as { WorkerGlobalScope?: unknown }).WorkerGlobalScope === 'undefined') return false;
  const agent: unknown = (globalThis as any).navigator?.userAgent;
  return typeof agent === 'string' && agent.startsWith('Mozilla/');
};

/** Marks the error for a redirect the client refused to follow, which `makeRequest` does not retry. */
const REFUSED_REDIRECT = Symbol('refusedRedirect');

/** Marks `error` as a redirect refusal, which no retry layer repeats. */
const markRefusedRedirect = (error: Errors.APIConnectionError): Errors.APIConnectionError => {
  (error as { [REFUSED_REDIRECT]?: true })[REFUSED_REDIRECT] = true;
  return error;
};

/** A connection error for a redirect the client will not follow. */
const refuseRedirect = (message: string): Errors.APIConnectionError =>
  markRefusedRedirect(new Errors.APIConnectionError({ message }));

/** Whether `error` is a redirect refusal from {@link refuseRedirect}. */
const isRefusedRedirect = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  (error as { [REFUSED_REDIRECT]?: true })[REFUSED_REDIRECT] === true;

/** Whether a request body can be read only once, so a redirect that repeats the request cannot resend it. */
const isOneShotBody = (body: unknown): boolean =>
  !!(
    ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream) ||
    (typeof body === 'object' && body !== null && Symbol.asyncIterator in body)
  );
