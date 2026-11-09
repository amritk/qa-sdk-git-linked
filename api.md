# Under Gate Multi Section QA TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Accounts`](#accounts)
  - [List Accounts](#list-accounts)
  - [Create an account](#create-an-account)
  - [Batch move accounts](#batch-move-accounts)
  - [Delete a specific account](#delete-a-specific-account)
  - [Account Details](#account-details)
  - [Update Account](#update-account)
- [`Images`](#images)
  - [Get a list of images](#get-a-list-of-images)
  - [Upload a new Image](#upload-a-new-image)
  - [Delete an image](#delete-an-image)
  - [Get an image data](#get-an-image-data)
  - [Update an image](#update-an-image)
  - [Direct upload a new Image](#direct-upload-a-new-image)
  - [Get an image](#get-an-image)
  - [Get a list of images](#get-a-list-of-images-1)
  - [Create authenticated direct upload URL](#create-authenticated-direct-upload-url)
  - [Get transformation flows](#get-transformation-flows)
  - [Update transformation flows](#update-transformation-flows)
- [`CustomPagesForAnAccount`](#custompagesforanaccount)
  - [List custom pages](#list-custom-pages)
  - [Create a preview token](#create-a-preview-token)
  - [Get a custom page](#get-a-custom-page)
  - [Update a custom page](#update-a-custom-page)
- [`CustomAssetsForAnAccount`](#customassetsforanaccount)
  - [List custom assets](#list-custom-assets)
  - [Create a custom asset](#create-a-custom-asset)
  - [Delete a custom asset](#delete-a-custom-asset)
  - [Get a custom asset](#get-a-custom-asset)
  - [Update a custom asset](#update-a-custom-asset)
- [`TsengAbuseComplaintProcessorOther`](#tsengabusecomplaintprocessorother)
  - [List abuse reports](#list-abuse-reports)
  - [List submitted abuse reports](#list-submitted-abuse-reports)
  - [Get a submitted abuse report](#get-a-submitted-abuse-report)
  - [List emails sent to an abuse report submitter](#list-emails-sent-to-an-abuse-report-submitter)
  - [Check whether a report can be appealed](#check-whether-a-report-can-be-appealed)
  - [List abuse report emails](#list-abuse-report-emails)
  - [List abuse report mitigations](#list-abuse-report-mitigations)
  - [Request review on mitigations](#request-review-on-mitigations)
  - [Abuse Report Details](#abuse-report-details)
  - [Submit an abuse report](#submit-an-abuse-report)
- [`McpPortalAnalytics`](#mcpportalanalytics)
  - [Per-portal MCP tool-call timeseries](#per-portal-mcp-tool-call-timeseries)
  - [Per-server MCP tool-call timeseries](#per-server-mcp-tool-call-timeseries)
  - [Account-global MCP tool-call timeseries](#account-global-mcp-tool-call-timeseries)
- [`McpPortal`](#mcpportal)
  - [List MCP Portals](#list-mcp-portals)
  - [Create a new MCP Portal](#create-a-new-mcp-portal)
  - [Delete an MCP Portal](#delete-an-mcp-portal)
  - [Read details of an MCP Portal](#read-details-of-an-mcp-portal)
  - [Update an MCP Portal](#update-an-mcp-portal)
  - [Resolve an MCP server OAuth redirect URI](#resolve-an-mcp-server-oauth-redirect-uri)
- [`McpPortalServers`](#mcpportalservers)
  - [List MCP Servers](#list-mcp-servers)
  - [Create a new MCP Server](#create-a-new-mcp-server)
  - [Delete an MCP Server](#delete-an-mcp-server)
  - [Read the details of an MCP Server](#read-the-details-of-an-mcp-server)
  - [Update an MCP Server](#update-an-mcp-server)
  - [Sync MCP Server Capabilities](#sync-mcp-server-capabilities)
- [`AccessApplications`](#accessapplications)
  - [List Access applications](#list-access-applications)
  - [Add an Access application](#add-an-access-application)
  - [Delete an Access application](#delete-an-access-application)
  - [Get an Access application](#get-an-access-application)
  - [Update an Access application](#update-an-access-application)
  - [Revoke application tokens](#revoke-application-tokens)
  - [Update Access application settings](#update-access-application-settings)
  - [Update Access application settings](#update-access-application-settings-1)
  - [Test Access policies](#test-access-policies)
- [`AccessShortLivedCertificateCas`](#accessshortlivedcertificatecas)
  - [List short-lived certificate CAs](#list-short-lived-certificate-cas)
  - [Delete a short-lived certificate CA](#delete-a-short-lived-certificate-ca)
  - [Get a short-lived certificate CA](#get-a-short-lived-certificate-ca)
  - [Create a short-lived certificate CA](#create-a-short-lived-certificate-ca)
- [`AccessApplicationScopedPolicies`](#accessapplicationscopedpolicies)
  - [List Access application policies](#list-access-application-policies)
  - [Create an Access application policy](#create-an-access-application-policy)
  - [Delete an Access application policy](#delete-an-access-application-policy)
  - [Get an Access application policy](#get-an-access-application-policy)
  - [Update an Access application policy](#update-an-access-application-policy)
  - [Convert an Access application policy to a reusable policy](#convert-an-access-application-policy-to-a-reusable-policy)
- [`AccessAuthenticatorDeviceAaguids`](#accessauthenticatordeviceaaguids)
  - [List authenticator device AAGUIDs](#list-authenticator-device-aaguids)
- [`AccessBookmarkApplicationsDeprecated`](#accessbookmarkapplicationsdeprecated)
  - [List Bookmark applications](#list-bookmark-applications)
  - [Delete a Bookmark application](#delete-a-bookmark-application)
  - [Get a Bookmark application](#get-a-bookmark-application)
  - [Create a Bookmark application](#create-a-bookmark-application)
  - [Update a Bookmark application](#update-a-bookmark-application)
- [`AccessMTlsAuthentication`](#accessmtlsauthentication)
  - [List mTLS certificates](#list-mtls-certificates)
  - [Add an mTLS certificate](#add-an-mtls-certificate)
  - [List all mTLS hostname settings](#list-all-mtls-hostname-settings)
  - [Update an mTLS certificate's hostname settings](#update-an-mtls-certificates-hostname-settings)
  - [Delete an mTLS certificate](#delete-an-mtls-certificate)
  - [Get an mTLS certificate](#get-an-mtls-certificate)
  - [Update an mTLS certificate](#update-an-mtls-certificate)
- [`AccessCustomPages`](#accesscustompages)
  - [List custom pages](#list-custom-pages-1)
  - [Create a custom page](#create-a-custom-page)
  - [Validate a custom page template](#validate-a-custom-page-template)
  - [Delete a custom page](#delete-a-custom-page)
  - [Get a custom page](#get-a-custom-page-1)
  - [Update a custom page](#update-a-custom-page-1)
- [`GatewayCa`](#gatewayca)
  - [List SSH Certificate Authorities (CA)](#list-ssh-certificate-authorities-ca)
  - [Add a new SSH Certificate Authority (CA)](#add-a-new-ssh-certificate-authority-ca)
  - [Delete an SSH Certificate Authority (CA)](#delete-an-ssh-certificate-authority-ca)
- [`AccessGroups`](#accessgroups)
  - [List Access groups](#list-access-groups)
  - [Create an Access group](#create-an-access-group)
  - [Delete an Access group](#delete-an-access-group)
  - [Get an Access group](#get-an-access-group)
  - [Update an Access group](#update-an-access-group)
- [`AccessIdentityProviders`](#accessidentityproviders)
  - [List Access identity providers](#list-access-identity-providers)
  - [Add an Access identity provider](#add-an-access-identity-provider)
  - [Delete an Access identity provider](#delete-an-access-identity-provider)
  - [Get an Access identity provider](#get-an-access-identity-provider)
  - [Update an Access identity provider](#update-an-access-identity-provider)
  - [Create SAML encryption certificate for Identity Provider](#create-saml-encryption-certificate-for-identity-provider)
  - [List SCIM Group resources](#list-scim-group-resources)
  - [List SCIM User resources](#list-scim-user-resources)
- [`AccessIdPFederationGrants`](#accessidpfederationgrants)
  - [List IdP federation grants](#list-idp-federation-grants)
  - [Create an IdP federation grant](#create-an-idp-federation-grant)
  - [Delete an IdP federation grant](#delete-an-idp-federation-grant)
  - [Get an IdP federation grant](#get-an-idp-federation-grant)
- [`AccessKeyConfiguration`](#accesskeyconfiguration)
  - [Get the Access key configuration](#get-the-access-key-configuration)
  - [Update the Access key configuration](#update-the-access-key-configuration)
  - [Rotate Access keys](#rotate-access-keys)
- [`AccessAuthenticationLogs`](#accessauthenticationlogs)
  - [Get Access authentication logs](#get-access-authentication-logs)
- [`AccessJitRequestLogs`](#accessjitrequestlogs)
  - [List Access JIT request logs](#list-access-jit-request-logs)
  - [Get an Access JIT request log](#get-an-access-jit-request-log)
- [`AccessScimUpdateLogs`](#accessscimupdatelogs)
  - [List Access SCIM update logs](#list-access-scim-update-logs)
- [`ZeroTrustOrganization`](#zerotrustorganization)
  - [Get your Zero Trust organization](#get-your-zero-trust-organization)
  - [Create your Zero Trust organization](#create-your-zero-trust-organization)
  - [Update your Zero Trust organization](#update-your-zero-trust-organization)
  - [Get your Zero Trust organization DoH settings](#get-your-zero-trust-organization-doh-settings)
  - [Update your Zero Trust organization DoH settings](#update-your-zero-trust-organization-doh-settings)
  - [Revoke all Access tokens for a user](#revoke-all-access-tokens-for-a-user)
- [`AccessReusablePolicies`](#accessreusablepolicies)
  - [List Access reusable policies](#list-access-reusable-policies)
  - [Create an Access reusable policy](#create-an-access-reusable-policy)
  - [Delete an Access reusable policy](#delete-an-access-reusable-policy)
  - [Get an Access reusable policy](#get-an-access-reusable-policy)
  - [Update an Access reusable policy](#update-an-access-reusable-policy)
- [`AccessPolicyTester`](#accesspolicytester)
  - [Start Access policy test](#start-access-policy-test)
  - [Get the current status of a given Access policy test](#get-the-current-status-of-a-given-access-policy-test)
  - [Get an Access policy test users page](#get-an-access-policy-test-users-page)
- [`AccessSamlEncryptionCertificates`](#accesssamlencryptioncertificates)
  - [List SAML certificate sets](#list-saml-certificate-sets)
  - [Get SAML certificate set](#get-saml-certificate-set)
  - [Download current certificate in PEM format](#download-current-certificate-in-pem-format)
  - [Rotate SAML certificate](#rotate-saml-certificate)
- [`ZeroTrustSeats`](#zerotrustseats)
  - [Update a user seat](#update-a-user-seat)
- [`AccessServiceTokens`](#accessservicetokens)
  - [List service tokens](#list-service-tokens)
  - [Create a service token](#create-a-service-token)
  - [Delete a service token](#delete-a-service-token)
  - [Get a service token](#get-a-service-token)
  - [Update a service token](#update-a-service-token)
  - [Refresh a service token](#refresh-a-service-token)
  - [Rotate a service token](#rotate-a-service-token)
- [`AccessTags`](#accesstags)
  - [List tags](#list-tags)
  - [Create a tag](#create-a-tag)
  - [Delete a tag](#delete-a-tag)
  - [Get a tag](#get-a-tag)
  - [Update a tag](#update-a-tag)
- [`ZeroTrustUsers`](#zerotrustusers)
  - [Get users](#get-users)
  - [Create a user](#create-a-user)
  - [Delete a user](#delete-a-user)
  - [Get a user](#get-a-user)
  - [Update a user](#update-a-user)
  - [Get active sessions](#get-active-sessions)
  - [Get single active session](#get-single-active-session)
  - [Get failed logins](#get-failed-logins)
  - [Get last seen identity](#get-last-seen-identity)
  - [Delete a user's MFA device](#delete-a-users-mfa-device)
- [`IpAddressManagementAddressMaps`](#ipaddressmanagementaddressmaps)
  - [List Address Maps](#list-address-maps)
  - [Create Address Map](#create-address-map)
  - [Delete Address Map](#delete-address-map)
  - [Address Map Details](#address-map-details)
  - [Update Address Map](#update-address-map)
  - [Remove an account membership from an Address Map](#remove-an-account-membership-from-an-address-map)
  - [Add an account membership to an Address Map](#add-an-account-membership-to-an-address-map)
  - [Remove an IP from an Address Map](#remove-an-ip-from-an-address-map)
  - [Add an IP to an Address Map](#add-an-ip-to-an-address-map)
  - [Remove a zone membership from an Address Map](#remove-a-zone-membership-from-an-address-map)
  - [Add a zone membership to an Address Map](#add-a-zone-membership-to-an-address-map)
- [`IpAddressManagementLeases`](#ipaddressmanagementleases)
  - [List Leases](#list-leases)
- [`IpAddressManagementPrefixes`](#ipaddressmanagementprefixes)
  - [Upload LOA Document](#upload-loa-document)
  - [Download LOA Document](#download-loa-document)
  - [List Prefixes](#list-prefixes)
  - [Add Prefix](#add-prefix)
  - [Delete Prefix](#delete-prefix)
  - [Prefix Details](#prefix-details)
  - [Update Prefix Description](#update-prefix-description)
  - [Validate Prefix](#validate-prefix)
- [`IpAddressManagementBgpPrefixes`](#ipaddressmanagementbgpprefixes)
  - [List BGP Prefixes](#list-bgp-prefixes)
  - [Create BGP Prefix](#create-bgp-prefix)
  - [Delete BGP Prefix](#delete-bgp-prefix)
  - [Fetch BGP Prefix](#fetch-bgp-prefix)
  - [Update BGP Prefix](#update-bgp-prefix)
- [`IpAddressManagementDynamicAdvertisement`](#ipaddressmanagementdynamicadvertisement)
  - [Get Advertisement Status](#get-advertisement-status)
  - [Update Prefix Dynamic Advertisement Status](#update-prefix-dynamic-advertisement-status)
- [`IpAddressManagementServiceBindings`](#ipaddressmanagementservicebindings)
  - [List Service Bindings](#list-service-bindings)
  - [Create Service Binding](#create-service-binding)
  - [Delete Service Binding](#delete-service-binding)
  - [Get Service Binding](#get-service-binding)
  - [List Services](#list-services)
- [`IpAddressManagementPrefixDelegation`](#ipaddressmanagementprefixdelegation)
  - [List Prefix Delegations](#list-prefix-delegations)
  - [Create Prefix Delegation](#create-prefix-delegation)
  - [Delete Prefix Delegation](#delete-prefix-delegation)
- [`DlsRegionalServices`](#dlsregionalservices)
  - [List Regions](#list-regions)
- [`Namespaces`](#namespaces)
  - [List namespaces](#list-namespaces)
  - [Create a namespace](#create-a-namespace)
  - [Delete a namespace](#delete-a-namespace)
  - [Get a namespace](#get-a-namespace)
- [`Memory`](#memory)
  - [List profiles](#list-profiles)
  - [Delete a profile](#delete-a-profile)
  - [Ingest messages](#ingest-messages)
  - [List memories](#list-memories)
  - [Delete a memory](#delete-a-memory)
  - [Get a memory](#get-a-memory)
  - [Recall memories](#recall-memories)
  - [Remember a memory](#remember-a-memory)
  - [Delete a session](#delete-a-session)
  - [Get a profile summary](#get-a-profile-summary)
- [`AiGateway`](#aigateway)
  - [Get credit balance](#get-credit-balance)
  - [Get invoice history](#get-invoice-history)
  - [Get invoice preview](#get-invoice-preview)
  - [Delete spending limit](#delete-spending-limit)
  - [Get spending limit](#get-spending-limit)
  - [Set spending limit (deprecated)](#set-spending-limit-deprecated)
  - [Create a top-up](#create-a-top-up)
  - [Delete auto top-up configuration](#delete-auto-top-up-configuration)
  - [Get auto top-up configuration](#get-auto-top-up-configuration)
  - [Set auto top-up configuration](#set-auto-top-up-configuration)
  - [Get top-up eligibility](#get-top-up-eligibility)
  - [Get account top-up limits](#get-account-top-up-limits)
  - [Check top-up status](#check-top-up-status)
  - [Get usage history](#get-usage-history)
- [`AiGatewayAccountProviders`](#aigatewayaccountproviders)
  - [List Account Providers](#list-account-providers)
  - [Create a new Account Provider](#create-a-new-account-provider)
  - [Delete a Account Provider](#delete-a-account-provider)
  - [Fetch a Account Provider](#fetch-a-account-provider)
  - [Update a Account Provider](#update-a-account-provider)
- [`AiGatewayAccountProviderCosts`](#aigatewayaccountprovidercosts)
  - [List Account Provider Costs](#list-account-provider-costs)
  - [Create a new Account Provider Cost](#create-a-new-account-provider-cost)
  - [Delete a Account Provider Cost](#delete-a-account-provider-cost)
  - [Fetch a Account Provider Cost](#fetch-a-account-provider-cost)
  - [Update a Account Provider Cost](#update-a-account-provider-cost)
- [`AiGatewayEvaluations`](#aigatewayevaluations)
  - [List Evaluators](#list-evaluators)
  - [List Evaluations](#list-evaluations)
  - [Create a new Evaluation](#create-a-new-evaluation)
  - [Delete a Evaluation](#delete-a-evaluation)
  - [Fetch a Evaluation](#fetch-a-evaluation)
- [`AiGatewayGateways`](#aigatewaygateways)
  - [List Gateways](#list-gateways)
  - [Create a new Gateway](#create-a-new-gateway)
  - [Get Gateway URL](#get-gateway-url)
  - [Delete a Gateway](#delete-a-gateway)
  - [Fetch a Gateway](#fetch-a-gateway)
  - [Update a Gateway](#update-a-gateway)
- [`AiGatewayCustomDomains`](#aigatewaycustomdomains)
  - [List Custom Domains](#list-custom-domains)
  - [Create a custom domain for a gateway](#create-a-custom-domain-for-a-gateway)
  - [Delete a Custom Domain](#delete-a-custom-domain)
  - [Fetch a Custom Domain](#fetch-a-custom-domain)
- [`AiGatewayDatasets`](#aigatewaydatasets)
  - [List Datasets](#list-datasets)
  - [Create a new Dataset](#create-a-new-dataset)
  - [Delete a Dataset](#delete-a-dataset)
  - [Fetch a Dataset](#fetch-a-dataset)
  - [Update a Dataset](#update-a-dataset)
- [`AiGatewayLogs`](#aigatewaylogs)
  - [Delete Gateway Logs](#delete-gateway-logs)
  - [List Gateway Logs](#list-gateway-logs)
  - [Get Gateway Log Detail](#get-gateway-log-detail)
  - [Patch Gateway Log](#patch-gateway-log)
  - [Get Gateway Log Request](#get-gateway-log-request)
  - [Get Gateway Log Response](#get-gateway-log-response)
- [`AiGatewayProviderConfigs`](#aigatewayproviderconfigs)
  - [List Provider Configs](#list-provider-configs)
  - [Create a new Provider Configs](#create-a-new-provider-configs)
  - [Delete a Provider Configs](#delete-a-provider-configs)
  - [Update a Provider Configs](#update-a-provider-configs)
- [`AiGatewayDynamicRoutes`](#aigatewaydynamicroutes)
  - [List all AI Gateway Dynamic Routes.](#list-all-ai-gateway-dynamic-routes)
  - [Create a new AI Gateway Dynamic Route.](#create-a-new-ai-gateway-dynamic-route)
  - [Delete an AI Gateway Dynamic Route.](#delete-an-ai-gateway-dynamic-route)
  - [Get an AI Gateway Dynamic Route.](#get-an-ai-gateway-dynamic-route)
  - [Update an AI Gateway Dynamic Route.](#update-an-ai-gateway-dynamic-route)
  - [List all AI Gateway Dynamic Route Deployments.](#list-all-ai-gateway-dynamic-route-deployments)
  - [Create a new AI Gateway Dynamic Route Deployment.](#create-a-new-ai-gateway-dynamic-route-deployment)
  - [List all AI Gateway Dynamic Route Versions.](#list-all-ai-gateway-dynamic-route-versions)
  - [Create a new AI Gateway Dynamic Route Version.](#create-a-new-ai-gateway-dynamic-route-version)
  - [Get an AI Gateway Dynamic Route Version.](#get-an-ai-gateway-dynamic-route-version)
- [`Account`](#account)
  - [Get AI Gateway logging state](#get-ai-gateway-logging-state)
  - [Migrate AI Gateway logging to Workers Observability](#migrate-ai-gateway-logging-to-workers-observability)
  - [Get build-minute availability](#get-build-minute-availability)
- [`AiSearchInstances`](#aisearchinstances)
  - [List AI Search instances.](#list-ai-search-instances)
  - [Create an AI Search instance.](#create-an-ai-search-instance)
  - [Delete an AI Search instance.](#delete-an-ai-search-instance)
  - [Get an AI Search instance.](#get-an-ai-search-instance)
  - [Update an AI Search instance.](#update-an-ai-search-instance)
  - [Chat Completions](#chat-completions)
  - [Search](#search)
  - [Get instance statistics.](#get-instance-statistics)
  - [List AI Search instances.](#list-ai-search-instances-1)
  - [Create an AI Search instance.](#create-an-ai-search-instance-1)
  - [Delete an AI Search instance.](#delete-an-ai-search-instance-1)
  - [Get an AI Search instance.](#get-an-ai-search-instance-1)
  - [Update an AI Search instance.](#update-an-ai-search-instance-1)
  - [Chat Completions](#chat-completions-1)
  - [Purge search cache.](#purge-search-cache)
  - [Search](#search-1)
  - [Get instance statistics.](#get-instance-statistics-1)
- [`AiSearchInstancesJobs`](#aisearchinstancesjobs)
  - [List Jobs](#list-jobs)
  - [Create new job](#create-new-job)
  - [Get a Job Details](#get-a-job-details)
  - [Cancel an indexing job.](#cancel-an-indexing-job)
  - [List Job Logs](#list-job-logs)
  - [List Jobs](#list-jobs-1)
  - [Create new job](#create-new-job-1)
  - [Get a Job Details](#get-a-job-details-1)
  - [Cancel an indexing job.](#cancel-an-indexing-job-1)
  - [List Job Logs](#list-job-logs-1)
- [`AiSearchNamespaces`](#aisearchnamespaces)
  - [List namespaces](#list-namespaces-1)
  - [Create a namespace](#create-a-namespace-1)
  - [Delete a namespace](#delete-a-namespace-1)
  - [Get a namespace](#get-a-namespace-1)
  - [Update a namespace](#update-a-namespace)
  - [Move an instance to a different namespace.](#move-an-instance-to-a-different-namespace)
- [`AiSearchAccountSearch`](#aisearchaccountsearch)
  - [Multi-Instance Chat Completions](#multi-instance-chat-completions)
  - [Multi-Instance Search](#multi-instance-search)
- [`AiSearchInstancesItems`](#aisearchinstancesitems)
  - [Items List.](#items-list)
  - [Upload Item.](#upload-item)
  - [Create or Update Item.](#create-or-update-item)
  - [Delete Item.](#delete-item)
  - [Get Item.](#get-item)
  - [Sync Item.](#sync-item)
  - [List Item Chunks.](#list-item-chunks)
  - [Download Item Content.](#download-item-content)
  - [Item Logs.](#item-logs)
- [`AiSearchTokens`](#aisearchtokens)
  - [List tokens](#list-tokens)
  - [Create a token](#create-a-token)
  - [Delete a token](#delete-a-token)
  - [Get a token](#get-a-token)
  - [Update a token](#update-a-token)
- [`WorkersAi`](#workersai)
  - [Author Search](#author-search)
  - [Get Model Schema](#get-model-schema)
  - [Model Search](#model-search)
  - [Execute AI Model (Generic)](#execute-ai-model-generic)
  - [Execute AI model](#execute-ai-model)
  - [Task Search](#task-search)
  - [Convert Files into Markdown](#convert-files-into-markdown)
  - [Get all converted formats supported](#get-all-converted-formats-supported)
- [`WorkersAiFinetune`](#workersaifinetune)
  - [List Finetunes](#list-finetunes)
  - [Create a new Finetune](#create-a-new-finetune)
  - [List Public Finetunes](#list-public-finetunes)
  - [Delete a Finetune](#delete-a-finetune)
  - [Upload a Finetune Asset](#upload-a-finetune-asset)
- [`FinetuneAsset`](#finetuneasset)
  - [Download a Finetune Asset](#download-a-finetune-asset)
- [`NotificationAlertTypes`](#notificationalerttypes)
  - [Get Alert Types](#get-alert-types)
- [`NotificationMechanismEligibility`](#notificationmechanismeligibility)
  - [Get delivery mechanism eligibility](#get-delivery-mechanism-eligibility)
- [`NotificationDestinationsWithPagerDuty`](#notificationdestinationswithpagerduty)
  - [Delete PagerDuty Services](#delete-pagerduty-services)
  - [List PagerDuty services](#list-pagerduty-services)
  - [Create PagerDuty integration token](#create-pagerduty-integration-token)
  - [Connect PagerDuty](#connect-pagerduty)
- [`NotificationWebhooks`](#notificationwebhooks)
  - [List webhooks](#list-webhooks)
  - [Create a webhook](#create-a-webhook)
  - [Delete a webhook](#delete-a-webhook)
  - [Get a webhook](#get-a-webhook)
  - [Update a webhook](#update-a-webhook)
- [`NotificationHistory`](#notificationhistory)
  - [List History](#list-history)
- [`NotificationPolicies`](#notificationpolicies)
  - [List Notification policies](#list-notification-policies)
  - [Create a Notification policy](#create-a-notification-policy)
  - [Delete a Notification policy](#delete-a-notification-policy)
  - [Get a Notification policy](#get-a-notification-policy)
  - [Update a Notification policy](#update-a-notification-policy)
  - [Show email unsubscribe details](#show-email-unsubscribe-details)
  - [Unsubscribe email from a Notification policy](#unsubscribe-email-from-a-notification-policy)
  - [Test a Notification policy](#test-a-notification-policy)
- [`NotificationSilences`](#notificationsilences)
  - [List Silences](#list-silences)
  - [Create Silences](#create-silences)
  - [Update Silences](#update-silences)
  - [Delete Silence](#delete-silence)
  - [Get Silence](#get-silence)
- [`DataSecurity`](#datasecurity)
  - [Top integrations by content findings](#top-integrations-by-content-findings)
  - [Data security findings summary](#data-security-findings-summary)
  - [Data security findings timeseries](#data-security-findings-timeseries)
- [`ArtAnalytics`](#artanalytics)
  - [Query analytics summary](#query-analytics-summary)
  - [Query analytics timeseries](#query-analytics-timeseries)
  - [Query analytics top-N](#query-analytics-top-n)
- [`AnalyticsEngine`](#analyticsengine)
  - [Execute an Analytics Engine SQL query via query parameter](#execute-an-analytics-engine-sql-query-via-query-parameter)
  - [Execute an Analytics Engine SQL query via request body](#execute-an-analytics-engine-sql-query-via-request-body)
- [`Artifacts`](#artifacts)
  - [List namespaces](#list-namespaces-2)
  - [Get a namespace](#get-a-namespace-2)
  - [List repositories](#list-repositories)
  - [Create a repository](#create-a-repository)
  - [Delete a repository](#delete-a-repository)
  - [Get a repository](#get-a-repository)
  - [Read a Git blob](#read-a-git-blob)
  - [Read a Git commit](#read-a-git-commit)
  - [Read a file](#read-a-file)
  - [Fork a repository](#fork-a-repository)
  - [Import a repository](#import-a-repository)
  - [Read commit history](#read-commit-history)
  - [Read a raw file with content type](#read-a-raw-file-with-content-type)
  - [List repository tokens](#list-repository-tokens)
  - [Read a Git tree](#read-a-git-tree)
  - [Create a repository token](#create-a-repository-token)
  - [Revoke a token](#revoke-a-token)
- [`AuditLogs`](#auditlogs)
  - [Get account audit logs](#get-account-audit-logs)
- [`AutoRagRagSearch`](#autoragragsearch)
  - [AI Search](#ai-search)
  - [Search](#search-2)
- [`AutoRagRag`](#autoragrag)
  - [Files](#files)
  - [Sync](#sync)
- [`AutoRagJobs`](#autoragjobs)
  - [List Jobs](#list-jobs-2)
  - [Get a Job Details](#get-a-job-details-2)
  - [List Job Logs](#list-job-logs-2)
- [`BillableUsage`](#billableusage)
  - [Get Account Billable Usage (Version 1, Alpha)](#get-account-billable-usage-version-1-alpha)
  - [Get Account Billable Usage Info (Version 1, Alpha)](#get-account-billable-usage-info-version-1-alpha)
- [`BillableUsageV2`](#billableusagev2)
  - [Get Account Usage (Version 2, Alpha, Restricted)](#get-account-usage-version-2-alpha-restricted)
  - [Query Account Usage (Version 2, Alpha, Restricted)](#query-account-usage-version-2-alpha-restricted)
- [`AccountBilling`](#accountbilling)
  - [Get Account Bad Debt](#get-account-bad-debt)
  - [Get Account Credits](#get-account-credits)
  - [Create Payment Intent for Billing Profile](#create-payment-intent-for-billing-profile)
  - [Get Unpaid Invoices](#get-unpaid-invoices)
  - [Create Setup Intent](#create-setup-intent)
- [`AccountBillingHistory`](#accountbillinghistory)
  - [Get Account Billing History](#get-account-billing-history)
- [`AccountBillingProfile`](#accountbillingprofile)
  - [Delete Billing Profile](#delete-billing-profile)
  - [Get Billing Profile](#get-billing-profile)
  - [Update Billing Email](#update-billing-email)
  - [Create Billing Profile](#create-billing-profile)
  - [Update Billing Profile](#update-billing-profile)
- [`UsageAnalytics`](#usageanalytics)
  - [Get account billing usage](#get-account-billing-usage)
- [`BotnetThreatFeed`](#botnetthreatfeed)
  - [Get daily report](#get-daily-report)
  - [Get full report](#get-full-report)
  - [Get list of ASNs](#get-list-of-asns)
  - [Delete an ASN](#delete-an-asn)
- [`BrandProtection`](#brandprotection)
  - [Read all alerts on submitted domains](#read-all-alerts-on-submitted-domains)
  - [Update alerts on submitted domains by ID](#update-alerts-on-submitted-domains-by-id)
  - [Update verification statuses of tracked URLs to awaiting by ID](#update-verification-statuses-of-tracked-urls-to-awaiting-by-id)
  - [Update verification statuses of tracked URLs to disproven by ID](#update-verification-statuses-of-tracked-urls-to-disproven-by-id)
  - [Update verification statuses of tracked URLs to confirmed by ID](#update-verification-statuses-of-tracked-urls-to-confirmed-by-id)
  - [Delete brands by ID](#delete-brands-by-id)
  - [Read all brands](#read-all-brands)
  - [Create new brands](#create-new-brands)
  - [Delete patterns for brands by ID](#delete-patterns-for-brands-by-id)
  - [Read patterns for brands by ID](#read-patterns-for-brands-by-id)
  - [Create new patterns for brands by ID](#create-new-patterns-for-brands-by-id)
  - [Update verification statuses of submitted URLs to awaiting by ID](#update-verification-statuses-of-submitted-urls-to-awaiting-by-id)
  - [Read submitted domains by ID](#read-submitted-domains-by-id)
  - [Read recent URL submissions](#read-recent-url-submissions)
  - [Update verification statuses of submitted URLs to disproven by ID](#update-verification-statuses-of-submitted-urls-to-disproven-by-id)
  - [Read URL submissions by ID](#read-url-submissions-by-id)
  - [Create new URL submissions](#create-new-url-submissions)
  - [Read submitted domains by pattern](#read-submitted-domains-by-pattern)
  - [Read submitted URLs by ID](#read-submitted-urls-by-id)
  - [Update verification statuses of submitted URLs to confirmed by ID](#update-verification-statuses-of-submitted-urls-to-confirmed-by-id)
- [`LogoMatch`](#logomatch)
  - [Read matches for logo queries by ID](#read-matches-for-logo-queries-by-id)
  - [Download matches for logo queries by ID](#download-matches-for-logo-queries-by-id)
  - [Read all saved logo queries](#read-all-saved-logo-queries)
  - [Create new saved logo queries from image files](#create-new-saved-logo-queries-from-image-files)
  - [Delete saved logo queries by ID](#delete-saved-logo-queries-by-id)
  - [Read saved logo queries by ID](#read-saved-logo-queries-by-id)
  - [Create new logo queries from image files](#create-new-logo-queries-from-image-files)
  - [Create new logo queries from URLs](#create-new-logo-queries-from-urls)
- [`DomainSearch`](#domainsearch)
  - [Read matches for string queries by ID](#read-matches-for-string-queries-by-id)
  - [Download matches for string queries by ID](#download-matches-for-string-queries-by-id)
  - [Delete saved string queries by ID](#delete-saved-string-queries-by-id)
  - [Read string queries by ID](#read-string-queries-by-id)
  - [Update saved string queries by ID](#update-saved-string-queries-by-id)
  - [Create new saved string queries](#create-new-saved-string-queries)
  - [Create new saved string queries in bulk](#create-new-saved-string-queries-in-bulk)
  - [Dismiss a match for a saved string query](#dismiss-a-match-for-a-saved-string-query)
  - [Undismiss a match for a saved string query](#undismiss-a-match-for-a-saved-string-query)
  - [Create new string queries](#create-new-string-queries)
  - [Read the total number of saved string queries](#read-the-total-number-of-saved-string-queries)
- [`BrowserExtensionConfig`](#browserextensionconfig)
  - [Delete browser extension configuration](#delete-browser-extension-configuration)
  - [Get browser extension configuration](#get-browser-extension-configuration)
  - [Create browser extension configuration](#create-browser-extension-configuration)
  - [Update browser extension configuration](#update-browser-extension-configuration)
- [`BrowserExtensionInventories`](#browserextensioninventories)
  - [List browser extension inventories](#list-browser-extension-inventories)
  - [Get a single browser extension inventory](#get-a-single-browser-extension-inventory)
- [`Brapi`](#brapi)
  - [Get accessibility tree page](#get-accessibility-tree-page)
  - [Get HTML content.](#get-html-content)
  - [Crawl websites.](#crawl-websites)
  - [Cancel a crawl job.](#cancel-a-crawl-job)
  - [Get crawl result.](#get-crawl-result)
  - [Acquire and connect to browser session.](#acquire-and-connect-to-browser-session)
  - [Get a browser session ID.](#get-a-browser-session-id)
  - [Close browser session.](#close-browser-session)
  - [Connect to browser session.](#connect-to-browser-session)
  - [List targets.](#list-targets)
  - [Activate a browser target.](#activate-a-browser-target)
  - [Close a browser target.](#close-a-browser-target)
  - [List targets.](#list-targets-1)
  - [Get a target by ID.](#get-a-target-by-id)
  - [Open a new browser tab.](#open-a-new-browser-tab)
  - [Get Chrome DevTools Protocol schema.](#get-chrome-devtools-protocol-schema)
  - [Get browser version metadata.](#get-browser-version-metadata)
  - [Mint live view URLs for a browser session](#mint-live-view-urls-for-a-browser-session)
  - [Connect to a specific Chrome DevTools page.](#connect-to-a-specific-chrome-devtools-page)
  - [List sessions.](#list-sessions)
  - [Get session details.](#get-session-details)
  - [Get json.](#get-json)
  - [Get Links.](#get-links)
  - [Get markdown.](#get-markdown)
  - [Get PDF.](#get-pdf)
  - [Scrape elements.](#scrape-elements)
  - [Get screenshot.](#get-screenshot)
  - [Get HTML content and screenshot.](#get-html-content-and-screenshot)
- [`Builds`](#builds)
  - [Get builds by Worker version](#get-builds-by-worker-version)
  - [Get latest builds by script IDs](#get-latest-builds-by-script-ids)
  - [Get a Workers build](#get-a-workers-build)
  - [Cancel a Workers build](#cancel-a-workers-build)
  - [Get Workers build logs](#get-workers-build-logs)
- [`RepositoryConnections`](#repositoryconnections)
  - [Create or update a repository connection](#create-or-update-a-repository-connection)
  - [Delete a repository connection](#delete-a-repository-connection)
- [`GitHubIntegration`](#githubintegration)
  - [Get repository configuration autofill](#get-repository-configuration-autofill)
- [`BuildTokens`](#buildtokens)
  - [List build tokens](#list-build-tokens)
  - [Create build token](#create-build-token)
  - [Delete a build token](#delete-a-build-token)
- [`Triggers`](#triggers)
  - [Create a build trigger](#create-a-build-trigger)
  - [Delete a build trigger](#delete-a-build-trigger)
  - [Update a build trigger](#update-a-build-trigger)
  - [Start a Workers build](#start-a-workers-build)
  - [Purge a trigger's build cache](#purge-a-triggers-build-cache)
- [`EnvironmentVariables`](#environmentvariables)
  - [List build variables](#list-build-variables)
  - [Set build variables](#set-build-variables)
  - [Delete a build variable](#delete-a-build-variable)
- [`Workers`](#workers)
  - [Create Worker build configuration](#create-worker-build-configuration)
  - [List builds for a Worker](#list-builds-for-a-worker)
  - [List triggers for a Worker](#list-triggers-for-a-worker)
  - [Delete Worker build configuration](#delete-worker-build-configuration)
  - [Get Worker build configuration](#get-worker-build-configuration)
  - [Update Worker build configuration](#update-worker-build-configuration)
- [`DeployHooks`](#deployhooks)
  - [List deploy hooks](#list-deploy-hooks)
  - [Create a deploy hook](#create-a-deploy-hook)
  - [Delete a deploy hook](#delete-a-deploy-hook)
  - [Get a deploy hook](#get-a-deploy-hook)
  - [Update a deploy hook](#update-a-deploy-hook)
- [`AccountSubscriptions`](#accountsubscriptions)
  - [Create Subscriptions](#create-subscriptions)
- [`CallsApps`](#callsapps)
  - [List apps](#list-apps)
  - [Create a new app](#create-a-new-app)
  - [Delete app](#delete-app)
  - [Retrieve app details](#retrieve-app-details)
  - [Edit app details](#edit-app-details)
- [`CallsTurnKeys`](#callsturnkeys)
  - [List TURN Keys](#list-turn-keys)
  - [Create a new TURN key](#create-a-new-turn-key)
  - [Delete TURN key](#delete-turn-key)
  - [Retrieve TURN key details](#retrieve-turn-key-details)
  - [Edit TURN key details](#edit-turn-key-details)
- [`CloudflareTunnel`](#cloudflaretunnel)
  - [List Cloudflare Tunnels](#list-cloudflare-tunnels)
  - [Create a Cloudflare Tunnel](#create-a-cloudflare-tunnel)
  - [Delete a Cloudflare Tunnel](#delete-a-cloudflare-tunnel)
  - [Get a Cloudflare Tunnel](#get-a-cloudflare-tunnel)
  - [Update a Cloudflare Tunnel](#update-a-cloudflare-tunnel)
  - [Clean up Cloudflare Tunnel connections](#clean-up-cloudflare-tunnel-connections)
  - [List Cloudflare Tunnel connections](#list-cloudflare-tunnel-connections)
  - [Get Cloudflare Tunnel connector](#get-cloudflare-tunnel-connector)
  - [Get a Cloudflare Tunnel management token](#get-a-cloudflare-tunnel-management-token)
  - [Get a Cloudflare Tunnel token](#get-a-cloudflare-tunnel-token)
- [`CloudflareTunnelConfiguration`](#cloudflaretunnelconfiguration)
  - [Get Tunnel configuration](#get-tunnel-configuration)
  - [Update Tunnel configuration](#update-tunnel-configuration)
- [`Turnstile`](#turnstile)
  - [List Turnstile Widgets](#list-turnstile-widgets)
  - [Create a Turnstile Widget](#create-a-turnstile-widget)
  - [Delete a Turnstile Widget](#delete-a-turnstile-widget)
  - [Turnstile Widget Details](#turnstile-widget-details)
  - [Update a Turnstile Widget](#update-a-turnstile-widget)
  - [Rotate Secret for a Turnstile Widget](#rotate-secret-for-a-turnstile-widget)
- [`Scans`](#scans)
  - [Get the Latest Banner Grab Result](#get-the-latest-banner-grab-result)
- [`BinDb`](#bindb)
  - [Posts a file to Binary Storage](#posts-a-file-to-binary-storage)
  - [Retrieves a file from Binary Storage](#retrieves-a-file-from-binary-storage)
- [`Event`](#event)
  - [Filter and list events](#filter-and-list-events)
  - [Aggregate events by single or multiple columns with optional date filtering](#aggregate-events-by-single-or-multiple-columns-with-optional-date-filtering)
  - [Creates a new event](#creates-a-new-event)
  - [Creates bulk events](#creates-bulk-events)
  - [Creates bulk DOS event with relationships and indicators](#creates-bulk-dos-event-with-relationships-and-indicators)
  - [Copies specified events from one dataset to another dataset](#copies-specified-events-from-one-dataset-to-another-dataset)
  - [Reads an event](#reads-an-event)
  - [Moves specified events from one dataset to another dataset](#moves-specified-events-from-one-dataset-to-another-dataset)
  - [Removes a tag from an event](#removes-a-tag-from-an-event)
  - [Adds a tag to an event](#adds-a-tag-to-an-event)
  - [GraphQL endpoint for event aggregation](#graphql-endpoint-for-event-aggregation)
  - [List all saved event queries](#list-all-saved-event-queries)
  - [Create a saved event query](#create-a-saved-event-query)
  - [Delete a saved event query](#delete-a-saved-event-query)
  - [Read a saved event query](#read-a-saved-event-query)
  - [Update a saved event query](#update-a-saved-event-query)
  - [Update a saved event query](#update-a-saved-event-query-1)
  - [Reads raw data for an event by UUID](#reads-raw-data-for-an-event-by-uuid)
  - [Removes an event reference](#removes-an-event-reference)
  - [Creates event references for a event](#creates-event-references-for-a-event)
  - [Create a relationship between two events](#create-a-relationship-between-two-events)
  - [Bulk update events](#bulk-update-events)
  - [Deletes one or more events](#deletes-one-or-more-events)
  - [Reads an event](#reads-an-event-1)
  - [Updates an event](#updates-an-event)
  - [Updates an event](#updates-an-event-1)
  - [Reads data for a raw event](#reads-data-for-a-raw-event)
  - [Updates a raw event](#updates-a-raw-event)
  - [Updates a raw event](#updates-a-raw-event-1)
  - [Filter and list events related to specific event](#filter-and-list-events-related-to-specific-event)
- [`Attacker`](#attacker)
  - [Lists attackers across multiple datasets](#lists-attackers-across-multiple-datasets)
- [`Category`](#category)
  - [Lists categories across multiple datasets](#lists-categories-across-multiple-datasets)
  - [Lists categories](#lists-categories)
  - [Creates a new category](#creates-a-new-category)
  - [Deletes a category](#deletes-a-category)
  - [Reads a category](#reads-a-category)
  - [Updates a category](#updates-a-category)
  - [Updates a category](#updates-a-category-1)
- [`Country`](#country)
  - [Retrieves countries information for all countries](#retrieves-countries-information-for-all-countries)
- [`Dataset`](#dataset)
  - [Lists all datasets in an account](#lists-all-datasets-in-an-account)
  - [Creates a dataset](#creates-a-dataset)
  - [Delete a dataset](#delete-a-dataset-1)
  - [Reads a dataset](#reads-a-dataset)
  - [Updates an existing dataset](#updates-an-existing-dataset)
  - [Updates an existing dataset](#updates-an-existing-dataset-1)
- [`Groups`](#groups)
  - [List groups for an account](#list-groups-for-an-account)
  - [Create a group](#create-a-group)
  - [Delete a group for an account](#delete-a-group-for-an-account)
  - [Read a group for an account](#read-a-group-for-an-account)
  - [Update a group](#update-a-group)
  - [List group members](#list-group-members)
  - [Create a group member](#create-a-group-member)
  - [Delete a group member](#delete-a-group-member)
- [`Indicators`](#indicators)
  - [Create a new indicator type](#create-a-new-indicator-type)
- [`Indicator`](#indicator)
  - [Lists indicators](#lists-indicators)
  - [Creates multiple indicators in bulk](#creates-multiple-indicators-in-bulk)
  - [Creates a new indicator](#creates-a-new-indicator)
  - [List mirrored tags for an indicator dataset](#list-mirrored-tags-for-an-indicator-dataset)
  - [Deletes an indicator](#deletes-an-indicator)
  - [Reads an indicator](#reads-an-indicator)
  - [Updates an indicator](#updates-an-indicator)
  - [List relationships for an indicator](#list-relationships-for-an-indicator)
  - [Create a relationship for an indicator](#create-a-relationship-for-an-indicator)
  - [Delete a relationship](#delete-a-relationship)
  - [Update a relationship](#update-a-relationship)
  - [Lists indicators across multiple datasets](#lists-indicators-across-multiple-datasets)
  - [Aggregate indicators by column(s)](#aggregate-indicators-by-columns)
- [`Permissions`](#permissions)
  - [List permissions for dataset](#list-permissions-for-dataset)
  - [Create a permission for dataset](#create-a-permission-for-dataset)
  - [Delete a permission for dataset](#delete-a-permission-for-dataset)
  - [Update a permission for dataset](#update-a-permission-for-dataset)
- [`Tag`](#tag)
  - [List indicators related to a tag within a dataset (deprecated)](#list-indicators-related-to-a-tag-within-a-dataset-deprecated)
  - [Lists all tags (SoT)](#lists-all-tags-sot)
  - [Creates a new tag](#creates-a-new-tag)
  - [Deletes a tag (SoT)](#deletes-a-tag-sot)
  - [Gets a tag by UUID (SoT)](#gets-a-tag-by-uuid-sot)
  - [Updates a tag (SoT)](#updates-a-tag-sot)
  - [List indicators related to a tag](#list-indicators-related-to-a-tag)
  - [List relationships for a tag](#list-relationships-for-a-tag)
  - [Create a relationship for a tag](#create-a-relationship-for-a-tag)
  - [Delete a tag relationship](#delete-a-tag-relationship)
  - [Update a tag relationship](#update-a-tag-relationship)
- [`TargetIndustry`](#targetindustry)
  - [Lists all target industries for a specific dataset](#lists-all-target-industries-for-a-specific-dataset)
  - [Lists target industries across multiple datasets](#lists-target-industries-across-multiple-datasets)
  - [Lists all target industries from industry map catalog](#lists-all-target-industries-from-industry-map-catalog)
- [`Datasets`](#datasets)
  - [Populate dataset-specific lookup tables from existing Events data with batch processing](#populate-dataset-specific-lookup-tables-from-existing-events-data-with-batch-processing)
- [`Events`](#events)
  - [Query graph neighborhood from R2 Data Catalog](#query-graph-neighborhood-from-r2-data-catalog)
- [`IndicatorTypes`](#indicatortypes)
  - [Lists indicator types across multiple datasets](#lists-indicator-types-across-multiple-datasets)
  - [Lists all indicator types](#lists-all-indicator-types)
- [`TagCategory`](#tagcategory)
  - [Lists all tag categories (SoT)](#lists-all-tag-categories-sot)
  - [Creates a new tag category (SoT)](#creates-a-new-tag-category-sot)
  - [Deletes a tag category (SoT)](#deletes-a-tag-category-sot)
  - [Gets a tag category by UUID (SoT)](#gets-a-tag-category-by-uuid-sot)
  - [Updates a tag category (SoT)](#updates-a-tag-category-sot)
- [`RequestForInformationRfi`](#requestforinformationrfi)
  - [List Requests](#list-requests)
  - [Get Request Priority, Status, and TLP constants](#get-request-priority-status-and-tlp-constants)
  - [Create a New Request.](#create-a-new-request)
  - [Get Request Quota](#get-request-quota)
  - [Get Request Types](#get-request-types)
  - [Delete a Request](#delete-a-request)
  - [Get a Request](#get-a-request)
  - [Update a Request](#update-a-request)
  - [List Request Assets](#list-request-assets)
  - [Create a New Request Asset](#create-a-new-request-asset)
  - [Delete a Request Asset](#delete-a-request-asset)
  - [Get a Request Asset](#get-a-request-asset)
  - [Update a Request Asset](#update-a-request-asset)
  - [List Request Messages](#list-request-messages)
  - [Create a New Request Message](#create-a-new-request-message)
  - [Delete a Request Message](#delete-a-request-message)
  - [Update a Request Message](#update-a-request-message)
- [`PriorityIntelligenceRequirementsPir`](#priorityintelligencerequirementspir)
  - [List Priority Intelligence Requirements](#list-priority-intelligence-requirements)
  - [Create a New Priority Intelligence Requirement](#create-a-new-priority-intelligence-requirement)
  - [Get Priority Intelligence Requirement Quota](#get-priority-intelligence-requirement-quota)
  - [Delete a Priority Intelligence Requirement](#delete-a-priority-intelligence-requirement)
  - [Get a Priority Intelligence Requirement](#get-a-priority-intelligence-requirement)
  - [Update a Priority Intelligence Requirement](#update-a-priority-intelligence-requirement)
- [`Rules`](#rules)
  - [Delete all rules](#delete-all-rules)
  - [List rules](#list-rules)
  - [Create a rule](#create-a-rule)
  - [Remove patterns from exemption rules](#remove-patterns-from-exemption-rules)
  - [Get exemption rules for an account](#get-exemption-rules-for-an-account)
  - [Add patterns to exemption rules](#add-patterns-to-exemption-rules)
  - [Update exemption rule patterns](#update-exemption-rule-patterns)
  - [Get managed rules](#get-managed-rules)
  - [Search rules](#search-rules)
  - [Get dashboard stats](#get-dashboard-stats)
  - [List email rules](#list-email-rules)
  - [Create an email rule](#create-an-email-rule)
- [`Approvals`](#approvals)
  - [List rule approvals](#list-rule-approvals)
  - [Get rule approval details](#get-rule-approval-details)
  - [Cancel a pending approval](#cancel-a-pending-approval)
  - [Revise and resubmit a rejected approval](#revise-and-resubmit-a-rejected-approval)

## Setup

```ts
import UnderGateMultiSectionQa from '@qa-switch-test/under-gate-multi-section';

const client = new UnderGateMultiSectionQa();
```

## `Accounts`

### List Accounts

List all accounts you have ownership or verified access to.

| Direction | Type |
| --- | --- |
| Request | [`AccountListParams`](./src/resources/accounts.ts) |

```ts
const response = await client.accounts.list({
  page: 1,
  per_page: 20,
});
```

### Create an account

Create an account (only available for tenant admins at this time)

| Direction | Type |
| --- | --- |
| Request | [`AccountCreationParams`](./src/resources/accounts.ts) |

```ts
const response = await client.accounts.creation({});
```

### Batch move accounts

Batch move a collection of accounts to a specific organization. ⚠️ Not implemented.

| Direction | Type |
| --- | --- |
| Request | [`AccountBatchMoveParams`](./src/resources/accounts.ts) |
| Response | [`AccountBatchMoveResponse`](./src/resources/accounts.ts) |

```ts
const account = await client.accounts.batchMove({
  account_ids: [''],
  destination_organization_id: '',
});
```

### Delete a specific account

Delete a specific account (only available for tenant admins at this time). This is a permanent operation that will delete any zones or other resources under the account

```ts
const response = await client.accounts.deletion('accountId');
```

### Account Details

Get information about a specific account that you are a member of.

```ts
const response = await client.accounts.details('accountId');
```

### Update Account

Update an existing account.

| Direction | Type |
| --- | --- |
| Request | [`AccountUpdateParams`](./src/resources/accounts.ts) |

```ts
const response = await client.accounts.update('accountId', {});
```

## `Images`

### Get a list of images

List images for an account.

| Direction | Type |
| --- | --- |
| Request | [`ImageListListParams`](./src/resources/images.ts) |
| Response | [`ImageListListResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.listList('accountId', {
  per_page: 1000,
  sort_order: 'desc',
});
```

### Upload a new Image

Upload a new image.

| Direction | Type |
| --- | --- |
| Request | [`ImagePostUploadParams`](./src/resources/images.ts) |
| Response | [`ImagePostUploadResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.postUpload('accountId');
```

### Delete an image

Delete an image.

| Direction | Type |
| --- | --- |
| Request | [`ImageDeleteDeleteParams`](./src/resources/images.ts) |
| Response | [`ImageDeleteDeleteResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.deleteDelete('imageId', {
  accountId: 'accountId',
});
```

### Get an image data

Get image metadata.

| Direction | Type |
| --- | --- |
| Request | [`ImageRetrieveGetParams`](./src/resources/images.ts) |
| Response | [`ImageRetrieveGetResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.retrieveGet('imageId', {
  accountId: 'accountId',
});
```

### Update an image

Update an image's metadata.

| Direction | Type |
| --- | --- |
| Request | [`ImagePatchEditParams`](./src/resources/images.ts) |
| Response | [`ImagePatchEditResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.patchEdit('imageId', {
  accountId: 'accountId',
});
```

### Direct upload a new Image

Upload an image to a specific image ID.

| Direction | Type |
| --- | --- |
| Request | [`ImagePutDirectUploadParams`](./src/resources/images.ts) |
| Response | [`ImagePutDirectUploadResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.putDirectUpload('imageId', {
  accountId: 'accountId',
});
```

### Get an image

Get image as a blob.

| Direction | Type |
| --- | --- |
| Request | [`ImageListGetBlobParams`](./src/resources/images.ts) |

```ts
const response = await client.images.listGetBlob('imageId', {
  accountId: 'accountId',
});
```

### Get a list of images

List images for an account.

| Direction | Type |
| --- | --- |
| Request | [`ImageListAccountsAccountV2Params`](./src/resources/images.ts) |
| Response | [`ImageListAccountsAccountV2Response`](./src/resources/images.ts) |

```ts
const image = await client.images.listAccountsAccountV2('accountId', {
  per_page: 1000,
  sort_order: 'desc',
});
```

### Create authenticated direct upload URL

Create an authenticated direct upload URL for an image.

| Direction | Type |
| --- | --- |
| Request | [`ImagePostDirectUploadLinkParams`](./src/resources/images.ts) |
| Response | [`ImagePostDirectUploadLinkResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.postDirectUploadLink('accountId');
```

### Get transformation flows

Get the current transformation flows configuration for a zone.

| Direction | Type |
| --- | --- |
| Request | [`ImageListFlowsGetParams`](./src/resources/images.ts) |
| Response | [`ImageListFlowsGetResponse`](./src/resources/images.ts) |

```ts
const image = await client.images.listFlowsGet('zoneId', {
  accountId: 'accountId',
});
```

### Update transformation flows

Replace the entire transformation flows configuration for a zone.

| Direction | Type |
| --- | --- |
| Request | [`ImagePutFlowsUpdateParams`](./src/resources/images.ts) |
| Response | [`ImagePutFlowsUpdateResponse`](./src/resources/images.ts) |

```ts
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
```

## `CustomPagesForAnAccount`

### List custom pages

Fetches all the custom pages at the account level.

```ts
const response = await client.customPagesForAnAccount.list('accountIdentifier');
```

### Create a preview token

Creates a signed JWT token used to preview custom pages before they are published.

| Direction | Type |
| --- | --- |
| Request | [`CustomPagesForAnAccountCreatePreviewTokenParams`](./src/resources/custom-pages-for-an-account.ts) |

```ts
const response = await client.customPagesForAnAccount.createPreviewToken('accountIdentifier', {});
```

### Get a custom page

Fetches the details of a custom page.

| Direction | Type |
| --- | --- |
| Request | [`CustomPagesForAnAccountRetrieveAParams`](./src/resources/custom-pages-for-an-account.ts) |

```ts
const response = await client.customPagesForAnAccount.retrieveA('identifier', {
  account_identifier: {},
});
```

### Update a custom page

Updates the configuration of an existing custom page.

| Direction | Type |
| --- | --- |
| Request | [`CustomPagesForAnAccountUpdateAParams`](./src/resources/custom-pages-for-an-account.ts) |

```ts
const response = await client.customPagesForAnAccount.updateA('identifier', {
  account_identifier: {},
  state: {},
  url: {},
});
```

## `CustomAssetsForAnAccount`

### List custom assets

Fetches all the custom assets at the account level.

| Direction | Type |
| --- | --- |
| Request | [`CustomAssetsForAnAccountListParams`](./src/resources/custom-assets-for-an-account.ts) |

```ts
const response = await client.customAssetsForAnAccount.list('accountIdentifier', {
  page: 1,
  per_page: 20,
});
```

### Create a custom asset

Creates a new custom asset at the account level.

| Direction | Type |
| --- | --- |
| Request | [`CustomAssetsForAnAccountCreateAParams`](./src/resources/custom-assets-for-an-account.ts) |

```ts
const response = await client.customAssetsForAnAccount.createA('accountIdentifier', {
  description: {},
  name: {},
  url: {},
});
```

### Delete a custom asset

Deletes an existing custom asset.

| Direction | Type |
| --- | --- |
| Request | [`CustomAssetsForAnAccountDeleteAParams`](./src/resources/custom-assets-for-an-account.ts) |

```ts
await client.customAssetsForAnAccount.deleteA('assetName', {
  account_identifier: {},
});
```

### Get a custom asset

Fetches the details of a custom asset.

| Direction | Type |
| --- | --- |
| Request | [`CustomAssetsForAnAccountRetrieveAParams`](./src/resources/custom-assets-for-an-account.ts) |

```ts
const response = await client.customAssetsForAnAccount.retrieveA('assetName', {
  account_identifier: {},
});
```

### Update a custom asset

Updates the configuration of an existing custom asset.

| Direction | Type |
| --- | --- |
| Request | [`CustomAssetsForAnAccountUpdateAParams`](./src/resources/custom-assets-for-an-account.ts) |

```ts
const response = await client.customAssetsForAnAccount.updateA('assetName', {
  account_identifier: {},
  description: {},
  url: {},
});
```

## `TsengAbuseComplaintProcessorOther`

### List abuse reports

List the abuse reports for a given account

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherListReportsParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |
| Response | [`TsengAbuseComplaintProcessorOtherListReportsResponse`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listReports(
  '023e105f4ecef8ad9ca31a8372d0c353',
);
```

### List submitted abuse reports

List abuse reports submitted by the account.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherListSubmittedReportsParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReports(
  '023e105f4ecef8ad9ca31a8372d0c353',
  {
    page: 1,
    per_page: 100,
  },
);
```

### Get a submitted abuse report

Retrieve a report submitted by the account.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const response = await client.tsengAbuseComplaintProcessorOther.retrieveSubmittedReport('reportId', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
});
```

### List emails sent to an abuse report submitter

List successful emails sent to the submitter of a report submitted by the account. Does not include emails sent to customers or hosts.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReportEmails('reportId', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
});
```

### Check whether a report can be appealed

Returns whether the report is currently appealable, along with the signals behind that decision: whether it already has an open appeal, how many appeals have been submitted against it, and whether it has at least one mitigation that an appeal could reverse.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |
| Response | [`TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const tsengAbuseComplaintProcessorOther =
  await client.tsengAbuseComplaintProcessorOther.checkAppealEligibility('reportId', {
    account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  });
```

### List abuse report emails

List emails sent to the customer for an abuse report. Returns all successful customer emails sent for the specified abuse report. Does not include emails sent to hosts or submitters.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherListEmailsParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |
| Response | [`TsengAbuseComplaintProcessorOtherListEmailsResponse`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listEmails(
  'reportId',
  {
    account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  },
);
```

### List abuse report mitigations

List mitigations done to remediate the abuse report.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherListMitigationsParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |
| Response | [`TsengAbuseComplaintProcessorOtherListMitigationsResponse`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listMitigations(
  'reportId',
  {
    account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  },
);
```

### Request review on mitigations

Request a review for mitigations on an account. Repeating a request for a mitigation with an unresolved appeal is idempotent and returns that mitigation in the in-review state.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherRequestReviewParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const response = await client.tsengAbuseComplaintProcessorOther.requestReview('reportId', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  body: {},
});
```

### Abuse Report Details

Retrieve the details of an abuse report.

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherRetrieveReportParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |
| Response | [`TsengAbuseComplaintProcessorOtherRetrieveReportResponse`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.retrieveReport(
  'reportParam',
  {
    account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  },
);
```

### Submit an abuse report

Submit an abuse report of a particular type.

Requires the abuse-reports entitlement on the account (Enterprise
accounts have it by default; other accounts must request access) and an
API token with the `Account > Abuse Reports > Edit` permission. If the
account is not entitled, the request is rejected with an HTTP `401`
response (see below).

| Direction | Type |
| --- | --- |
| Request | [`TsengAbuseComplaintProcessorOtherSubmitReportParams`](./src/resources/tseng-abuse-complaint-processor-other.ts) |

```ts
const response = await client.tsengAbuseComplaintProcessorOther.submitReport('reportParam', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  body: {},
});
```

## `McpPortalAnalytics`

### Per-portal MCP tool-call timeseries

Returns daily or monthly tool-call counts for a portal.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAnalyticAPIToolCallTimeseriesParams`](./src/resources/mcp-portal-analytics.ts) |
| Response | [`McpPortalAnalyticAPIToolCallTimeseriesResponse`](./src/resources/mcp-portal-analytics.ts) |

```ts
const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiToolCallTimeseries('portalId', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
  granularity: 'daily',
  aggregate: 'false',
  tz: 'utc',
});
```

### Per-server MCP tool-call timeseries

Returns daily or monthly tool-call counts for a server.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAnalyticAPIServerToolCallTimeseriesParams`](./src/resources/mcp-portal-analytics.ts) |
| Response | [`McpPortalAnalyticAPIServerToolCallTimeseriesResponse`](./src/resources/mcp-portal-analytics.ts) |

```ts
const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiServerToolCallTimeseries('serverId', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
  granularity: 'daily',
  aggregate: 'false',
  tz: 'utc',
});
```

### Account-global MCP tool-call timeseries

Returns daily or monthly tool-call counts across the account.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAnalyticAPIAccountToolCallTimeseriesParams`](./src/resources/mcp-portal-analytics.ts) |
| Response | [`McpPortalAnalyticAPIAccountToolCallTimeseriesResponse`](./src/resources/mcp-portal-analytics.ts) |

```ts
const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiAccountToolCallTimeseries(
  'a86a8f5c339544d7bdc89926de14fb8c',
  {
    granularity: 'daily',
    aggregate: 'false',
    tz: 'utc',
  },
);
```

## `McpPortal`

### List MCP Portals

Lists all MCP portals configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAPIListParams`](./src/resources/mcp-portal.ts) |
| Response | [`McpPortalAPIListResponse`](./src/resources/mcp-portal.ts) |

```ts
const mcpPortal = await client.mcpPortal.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
  page: 1,
  per_page: 20,
});
```

### Create a new MCP Portal

Creates a new MCP portal for managing AI tool access through Cloudflare Access.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAPICreateParams`](./src/resources/mcp-portal.ts) |
| Response | [`McpPortalAPICreateResponse`](./src/resources/mcp-portal.ts) |

```ts
const mcpPortal = await client.mcpPortal.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
  hostname: 'example.com',
  id: 'my-mcp-portal',
  name: 'My MCP Portal',
  secure_web_gateway: false,
});
```

### Delete an MCP Portal

Deletes an MCP portal from the account.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAPIDeleteParams`](./src/resources/mcp-portal.ts) |
| Response | [`McpPortalAPIDeleteResponse`](./src/resources/mcp-portal.ts) |

```ts
const mcpPortal = await client.mcpPortal.apiDelete('my-mcp-portal', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
});
```

### Read details of an MCP Portal

Read the details of a single MCP Portal, including its configured servers.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAPIFetchGatewaysParams`](./src/resources/mcp-portal.ts) |
| Response | [`McpPortalAPIFetchGatewaysResponse`](./src/resources/mcp-portal.ts) |

```ts
const mcpPortal = await client.mcpPortal.apiFetchGateways('my-mcp-portal', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
});
```

### Update an MCP Portal

Updates an MCP portal configuration.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAPIUpdateParams`](./src/resources/mcp-portal.ts) |
| Response | [`McpPortalAPIUpdateResponse`](./src/resources/mcp-portal.ts) |

```ts
const mcpPortal = await client.mcpPortal.apiUpdate('my-mcp-portal', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
  secure_web_gateway: false,
});
```

### Resolve an MCP server OAuth redirect URI

Resolves the OAuth redirect URI to register for a portal and server based on the server's current shared callback setting. Use the returned value when setting up a new manual OAuth registration. This value is for display only: existing manual OAuth registrations continue using their stored redirect URI, so changing callback settings can make this result differ from the URI used at runtime.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalAPIEffectiveRedirectURIParams`](./src/resources/mcp-portal.ts) |
| Response | [`McpPortalAPIEffectiveRedirectURIResponse`](./src/resources/mcp-portal.ts) |

```ts
const mcpPortal = await client.mcpPortal.apiEffectiveRedirectURI('my-mcp-server', {
  portal_id: 'my-mcp-portal',
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
});
```

## `McpPortalServers`

### List MCP Servers

Lists all MCP servers configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalServerAPIListParams`](./src/resources/mcp-portal-servers.ts) |
| Response | [`McpPortalServerAPIListResponse`](./src/resources/mcp-portal-servers.ts) |

```ts
const mcpPortalServer = await client.mcpPortalServers.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
  page: 1,
  per_page: 20,
});
```

### Create a new MCP Server

Creates a new MCP server for connecting to an upstream MCP endpoint.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalServerAPICreateParams`](./src/resources/mcp-portal-servers.ts) |
| Response | [`McpPortalServerAPICreateResponse`](./src/resources/mcp-portal-servers.ts) |

```ts
const mcpPortalServer = await client.mcpPortalServers.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
  auth_type: 'unauthenticated',
  hostname: 'https://example.com/mcp',
  id: 'my-mcp-server',
  is_shared_oauth_callback_enabled: false,
  name: 'My MCP Server',
  secure_web_gateway: false,
});
```

### Delete an MCP Server

Deletes an MCP server from the account.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalServerAPIDeleteParams`](./src/resources/mcp-portal-servers.ts) |
| Response | [`McpPortalServerAPIDeleteResponse`](./src/resources/mcp-portal-servers.ts) |

```ts
const mcpPortalServer = await client.mcpPortalServers.apiDelete('my-mcp-server', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
});
```

### Read the details of an MCP Server

Retrieves an MCP server's configuration and capability sync state.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalServerAPIFetchParams`](./src/resources/mcp-portal-servers.ts) |
| Response | [`McpPortalServerAPIFetchResponse`](./src/resources/mcp-portal-servers.ts) |

```ts
const mcpPortalServer = await client.mcpPortalServers.apiFetch('my-mcp-server', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
});
```

### Update an MCP Server

Updates an MCP server's configuration and credentials.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalServerAPIUpdateParams`](./src/resources/mcp-portal-servers.ts) |
| Response | [`McpPortalServerAPIUpdateResponse`](./src/resources/mcp-portal-servers.ts) |

```ts
const mcpPortalServer = await client.mcpPortalServers.apiUpdate('my-mcp-server', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
  is_shared_oauth_callback_enabled: false,
  secure_web_gateway: false,
});
```

### Sync MCP Server Capabilities

Syncs an MCP server's capabilities and returns the updated server state, including any connection errors.

| Direction | Type |
| --- | --- |
| Request | [`McpPortalServerAPISyncParams`](./src/resources/mcp-portal-servers.ts) |
| Response | [`McpPortalServerAPISyncResponse`](./src/resources/mcp-portal-servers.ts) |

```ts
const mcpPortalServer = await client.mcpPortalServers.apiSync('my-mcp-server', {
  account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
});
```

## `AccessApplications`

### List Access applications

Lists all Access applications in an account.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationListParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.list('accountId');
```

### Add an Access application

Adds a new application to Access.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationCreateAnParams`](./src/resources/access-applications.ts) |
| Response | [`AccessApplicationCreateAnResponse`](./src/resources/access-applications.ts) |

```ts
const accessApplication = await client.accessApplications.createAn('accountId', {});
```

### Delete an Access application

Deletes an application from Access.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationDeleteAnParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.deleteAn('appId', {
  account_id: {},
});
```

### Get an Access application

Fetches information about an Access application.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationRetrieveAnParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.retrieveAn('appId', {
  account_id: {},
});
```

### Update an Access application

Updates an Access application.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationUpdateAnParams`](./src/resources/access-applications.ts) |
| Response | [`AccessApplicationUpdateAnResponse`](./src/resources/access-applications.ts) |

```ts
const accessApplication = await client.accessApplications.updateAn('appId', {
  account_id: {},
  body: {},
});
```

### Revoke application tokens

Revokes all tokens issued for an application.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationRevokeServiceTokensParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.revokeServiceTokens('appId', {
  account_id: {},
});
```

### Update Access application settings

Updates Access application settings.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationPatchUpdateSettingsParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.patchUpdateSettings('appId', {
  account_id: {},
  body: {},
});
```

### Update Access application settings

Updates Access application settings.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationPutUpdateSettingsParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.putUpdateSettings('appId', {
  account_id: {},
  body: {},
});
```

### Test Access policies

Tests if a specific user has permission to access an application.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationTestPoliciesParams`](./src/resources/access-applications.ts) |

```ts
const response = await client.accessApplications.testPolicies('appId', {
  account_id: {},
});
```

## `AccessShortLivedCertificateCas`

### List short-lived certificate CAs

Lists short-lived certificate CAs and their public keys.

| Direction | Type |
| --- | --- |
| Request | [`AccessShortLivedCertificateCaCAsListCasParams`](./src/resources/access-short-lived-certificate-cas.ts) |

```ts
const response = await client.accessShortLivedCertificateCas.cAsListCas('accountId', {
  per_page: 100,
});
```

### Delete a short-lived certificate CA

Deletes a short-lived certificate CA.

| Direction | Type |
| --- | --- |
| Request | [`AccessShortLivedCertificateCaCAsDeleteAParams`](./src/resources/access-short-lived-certificate-cas.ts) |

```ts
const response = await client.accessShortLivedCertificateCas.cAsDeleteA('appId', {
  account_id: {},
});
```

### Get a short-lived certificate CA

Fetches a short-lived certificate CA and its public key.

| Direction | Type |
| --- | --- |
| Request | [`AccessShortLivedCertificateCaCAsGetAParams`](./src/resources/access-short-lived-certificate-cas.ts) |

```ts
const response = await client.accessShortLivedCertificateCas.cAsGetA('appId', {
  account_id: {},
});
```

### Create a short-lived certificate CA

Generates a new short-lived certificate CA and public key.

| Direction | Type |
| --- | --- |
| Request | [`AccessShortLivedCertificateCaCAsCreateAParams`](./src/resources/access-short-lived-certificate-cas.ts) |

```ts
const response = await client.accessShortLivedCertificateCas.cAsCreateA('appId', {
  account_id: {},
});
```

## `AccessApplicationScopedPolicies`

### List Access application policies

Lists Access policies configured for an application. Returns both exclusively scoped and reusable policies used by the application.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationScopedPolicyListAppParams`](./src/resources/access-application-scoped-policies.ts) |

```ts
const response = await client.accessApplicationScopedPolicies.listApp('appId', {
  account_id: {},
  per_page: 200,
});
```

### Create an Access application policy

Creates a policy applying exclusive to a single application that defines the users or groups who can reach it. We recommend creating a reusable policy instead and subsequently referencing its ID in the application's 'policies' array.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationScopedPolicyCreateAnParams`](./src/resources/access-application-scoped-policies.ts) |

```ts
const response = await client.accessApplicationScopedPolicies.createAn('appId', {
  account_id: {},
  body: {},
});
```

### Delete an Access application policy

Deletes an Access policy specific to an application. To delete a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationScopedPolicyDeleteAnParams`](./src/resources/access-application-scoped-policies.ts) |

```ts
const response = await client.accessApplicationScopedPolicies.deleteAn('policyId', {
  app_id: {},
  account_id: {},
});
```

### Get an Access application policy

Fetches a single Access policy configured for an application. Returns both exclusively owned and reusable policies used by the application.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationScopedPolicyRetrieveAnParams`](./src/resources/access-application-scoped-policies.ts) |

```ts
const response = await client.accessApplicationScopedPolicies.retrieveAn('policyId', {
  app_id: {},
  account_id: {},
});
```

### Update an Access application policy

Updates an Access policy specific to an application. To update a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationScopedPolicyUpdateAnParams`](./src/resources/access-application-scoped-policies.ts) |

```ts
const response = await client.accessApplicationScopedPolicies.updateAn('policyId', {
  app_id: {},
  account_id: {},
  body: {},
});
```

### Convert an Access application policy to a reusable policy

Converts an application-scoped policy to a reusable policy. The policy will no longer be exclusively scoped to the application. Further updates to the policy should go through the /accounts/{account_id}/policies/{uid} endpoint.

| Direction | Type |
| --- | --- |
| Request | [`AccessApplicationScopedPolicyConvertReusableParams`](./src/resources/access-application-scoped-policies.ts) |

```ts
const response = await client.accessApplicationScopedPolicies.convertReusable('policyId', {
  app_id: {},
  account_id: {},
});
```

## `AccessAuthenticatorDeviceAaguids`

### List authenticator device AAGUIDs

Returns a list of Authenticator Device AAGUIDs for MFA configuration.

```ts
const response = await client.accessAuthenticatorDeviceAaguids.list('accountId');
```

## `AccessBookmarkApplicationsDeprecated`

### List Bookmark applications

Lists Bookmark applications.

```ts
const response = await client.accessBookmarkApplicationsDeprecated.list('accountId');
```

### Delete a Bookmark application

Deletes a Bookmark application.

| Direction | Type |
| --- | --- |
| Request | [`AccessBookmarkApplicationsDeprecatedDeleteAParams`](./src/resources/access-bookmark-applications-deprecated.ts) |

```ts
const response = await client.accessBookmarkApplicationsDeprecated.deleteA('bookmarkId', {
  account_id: {},
});
```

### Get a Bookmark application

Fetches a single Bookmark application.

| Direction | Type |
| --- | --- |
| Request | [`AccessBookmarkApplicationsDeprecatedRetrieveAParams`](./src/resources/access-bookmark-applications-deprecated.ts) |

```ts
const response = await client.accessBookmarkApplicationsDeprecated.retrieveA('bookmarkId', {
  account_id: {},
});
```

### Create a Bookmark application

Create a new Bookmark application.

| Direction | Type |
| --- | --- |
| Request | [`AccessBookmarkApplicationsDeprecatedCreateAParams`](./src/resources/access-bookmark-applications-deprecated.ts) |

```ts
const response = await client.accessBookmarkApplicationsDeprecated.createA('bookmarkId', {
  account_id: {},
});
```

### Update a Bookmark application

Updates a configured Bookmark application.

| Direction | Type |
| --- | --- |
| Request | [`AccessBookmarkApplicationsDeprecatedUpdateAParams`](./src/resources/access-bookmark-applications-deprecated.ts) |

```ts
const response = await client.accessBookmarkApplicationsDeprecated.updateA('bookmarkId', {
  account_id: {},
});
```

## `AccessMTlsAuthentication`

### List mTLS certificates

Lists all mTLS root certificates.

| Direction | Type |
| --- | --- |
| Request | [`AccessMTLSAuthenticationMTLSListMTLSCertificatesParams`](./src/resources/access-m-tls-authentication.ts) |

```ts
const response = await client.accessMTLSAuthentication.mtlsListMTLSCertificates('accountId', {
  per_page: 50,
});
```

### Add an mTLS certificate

Adds a new mTLS root certificate to Access.

| Direction | Type |
| --- | --- |
| Request | [`AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams`](./src/resources/access-m-tls-authentication.ts) |

```ts
const response = await client.accessMTLSAuthentication.mtlsAddAnMTLSCertificate('accountId', {
  certificate:
    '-----BEGIN CERTIFICATE-----\nMIIGAjCCA+qgAwIBAgIJAI7kymlF7CWT...N4RI7KKB7nikiuUf8vhULKy5IX10\nDrUtmu/B\n-----END CERTIFICATE-----',
  name: {},
});
```

### List all mTLS hostname settings

List all mTLS hostname settings for this account.

```ts
const response = await client.accessMTLSAuthentication.mtlsListMTLSCertificatesHostnameSettings('accountId');
```

### Update an mTLS certificate's hostname settings

Updates an mTLS certificate's hostname settings.

| Direction | Type |
| --- | --- |
| Request | [`AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams`](./src/resources/access-m-tls-authentication.ts) |

```ts
const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificateSettings('accountId', {
  settings: [{}],
});
```

### Delete an mTLS certificate

Deletes an mTLS certificate.

| Direction | Type |
| --- | --- |
| Request | [`AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams`](./src/resources/access-m-tls-authentication.ts) |

```ts
const response = await client.accessMTLSAuthentication.mtlsDeleteAnMTLSCertificate('certificateId', {
  account_id: {},
});
```

### Get an mTLS certificate

Fetches a single mTLS certificate.

| Direction | Type |
| --- | --- |
| Request | [`AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams`](./src/resources/access-m-tls-authentication.ts) |

```ts
const response = await client.accessMTLSAuthentication.mtlsGetAnMTLSCertificate('certificateId', {
  account_id: {},
});
```

### Update an mTLS certificate

Updates a configured mTLS certificate.

| Direction | Type |
| --- | --- |
| Request | [`AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams`](./src/resources/access-m-tls-authentication.ts) |

```ts
const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificate('certificateId', {
  account_id: {},
  associated_hostnames: {},
});
```

## `AccessCustomPages`

### List custom pages

| Direction | Type |
| --- | --- |
| Request | [`AccessCustomPageListParams`](./src/resources/access-custom-pages.ts) |

```ts
const response = await client.accessCustomPages.list('accountId', {
  per_page: 50,
});
```

### Create a custom page

| Direction | Type |
| --- | --- |
| Request | [`AccessCustomPageCreateAParams`](./src/resources/access-custom-pages.ts) |

```ts
const response = await client.accessCustomPages.createA('accountId');
```

### Validate a custom page template

Validate a Liquid template and return its errors and warnings without persisting it.

| Direction | Type |
| --- | --- |
| Request | [`AccessCustomPageValidateATemplateParams`](./src/resources/access-custom-pages.ts) |

```ts
const response = await client.accessCustomPages.validateATemplate('accountId');
```

### Delete a custom page

| Direction | Type |
| --- | --- |
| Request | [`AccessCustomPageDeleteAParams`](./src/resources/access-custom-pages.ts) |

```ts
const response = await client.accessCustomPages.deleteA('customPageId', {
  account_id: {},
});
```

### Get a custom page

Fetches a custom page and also returns its HTML.

| Direction | Type |
| --- | --- |
| Request | [`AccessCustomPageRetrieveAParams`](./src/resources/access-custom-pages.ts) |

```ts
const response = await client.accessCustomPages.retrieveA('customPageId', {
  account_id: {},
});
```

### Update a custom page

| Direction | Type |
| --- | --- |
| Request | [`AccessCustomPageUpdateAParams`](./src/resources/access-custom-pages.ts) |

```ts
const response = await client.accessCustomPages.updateA('customPageId', {
  account_id: {},
});
```

## `GatewayCa`

### List SSH Certificate Authorities (CA)

Lists SSH Certificate Authorities (CA).

```ts
const response = await client.gatewayCa.accessListSSH('accountId');
```

### Add a new SSH Certificate Authority (CA)

Adds a new SSH Certificate Authority (CA).

```ts
const response = await client.gatewayCa.accessAddAnSSH('accountId');
```

### Delete an SSH Certificate Authority (CA)

Deletes an SSH Certificate Authority.

| Direction | Type |
| --- | --- |
| Request | [`GatewayCaAccessDeleteAnSSHParams`](./src/resources/gateway-ca.ts) |

```ts
const response = await client.gatewayCa.accessDeleteAnSSH('certificateId', {
  account_id: {},
});
```

## `AccessGroups`

### List Access groups

Lists all Access groups.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupListParams`](./src/resources/access-groups.ts) |

```ts
const response = await client.accessGroups.list('accountId');
```

### Create an Access group

Creates a new Access group.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupCreateAnParams`](./src/resources/access-groups.ts) |

```ts
const response = await client.accessGroups.createAn('accountId', {
  include: {},
  name: {},
});
```

### Delete an Access group

Deletes an Access group.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupDeleteAnParams`](./src/resources/access-groups.ts) |

```ts
const response = await client.accessGroups.deleteAn('groupId', {
  account_id: {},
});
```

### Get an Access group

Fetches a single Access group.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupRetrieveAnParams`](./src/resources/access-groups.ts) |

```ts
const response = await client.accessGroups.retrieveAn('groupId', {
  account_id: {},
});
```

### Update an Access group

Updates a configured Access group.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupUpdateAnParams`](./src/resources/access-groups.ts) |

```ts
const response = await client.accessGroups.updateAn('groupId', {
  account_id: {},
  include: {},
  name: {},
});
```

## `AccessIdentityProviders`

### List Access identity providers

Lists all configured identity providers.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderListParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.list('accountId', {
  per_page: 200,
});
```

### Add an Access identity provider

Adds a new identity provider to Access.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderCreateAnParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.createAn('accountId', {});
```

### Delete an Access identity provider

Deletes an identity provider from Access.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderDeleteAnParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.deleteAn('identityProviderId', {
  account_id: {},
});
```

### Get an Access identity provider

Fetches a configured identity provider.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderRetrieveAnParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.retrieveAn('identityProviderId', {
  account_id: {},
});
```

### Update an Access identity provider

Updates a configured identity provider.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderUpdateAnParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.updateAn('identityProviderId', {
  account_id: {},
  body: {},
});
```

### Create SAML encryption certificate for Identity Provider

Creates a new SAML encryption certificate set and assigns it to the specified 
SAML Identity Provider. This endpoint is idempotent - if the IdP already has 
a certificate set assigned, the existing certificate set is returned with a 200 status.

**Workflow for enabling SAML encryption:**
1. Call this endpoint to create and assign a certificate set to the IdP
2. Update the IdP configuration (PUT `/identity_providers/{id}`) with:
   - `config.enable_encryption: true`
   - `saml_certificate_set_id: <uid from step 1>`
3. Configure the certificate's public key in your external SAML Identity Provider

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderCreateSamlCertificateForParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.createSamlCertificateFor('identityProviderId', {
  account_id: {},
});
```

### List SCIM Group resources

Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderListScimGroupResourcesParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.listScimGroupResources('identityProviderId', {
  account_id: {},
  per_page: 100,
});
```

### List SCIM User resources

Lists SCIM User resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).

| Direction | Type |
| --- | --- |
| Request | [`AccessIdentityProviderListScimUserResourcesParams`](./src/resources/access-identity-providers.ts) |

```ts
const response = await client.accessIdentityProviders.listScimUserResources('identityProviderId', {
  account_id: {},
  per_page: 100,
});
```

## `AccessIdPFederationGrants`

### List IdP federation grants

Lists the IdP federation grants owned by the account.

```ts
const response = await client.accessIdPFederationGrants.idpList('accountId');
```

### Create an IdP federation grant

Creates an IdP federation grant for the specified identity provider, making it
available for federation to other accounts in the same Cloudflare organization.

The account must belong to a Cloudflare organization. One-time pin and
Cloudflare-managed identity providers cannot be federated. An account
can federate at most five identity providers at a time.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdPFederationGrantIdPCreateParams`](./src/resources/access-idp-federation-grants.ts) |

```ts
const response = await client.accessIdPFederationGrants.idpCreate('accountId', {});
```

### Delete an IdP federation grant

Deletes an IdP federation grant. The identity provider remains in the account,
but it is no longer available for federation to other accounts.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdPFederationGrantIdPDeleteParams`](./src/resources/access-idp-federation-grants.ts) |

```ts
const response = await client.accessIdPFederationGrants.idpDelete('grantId', {
  account_id: {},
});
```

### Get an IdP federation grant

Retrieves a single IdP federation grant by its UID.

| Direction | Type |
| --- | --- |
| Request | [`AccessIdPFederationGrantIdPGetParams`](./src/resources/access-idp-federation-grants.ts) |

```ts
const response = await client.accessIdPFederationGrants.idpGet('grantId', {
  account_id: {},
});
```

## `AccessKeyConfiguration`

### Get the Access key configuration

Gets the Access key rotation settings for an account.

```ts
const response = await client.accessKeyConfiguration.listThe('accountId');
```

### Update the Access key configuration

Updates the Access key rotation settings for an account.

| Direction | Type |
| --- | --- |
| Request | [`AccessKeyConfigurationUpdateTheParams`](./src/resources/access-key-configuration.ts) |

```ts
const response = await client.accessKeyConfiguration.updateThe('accountId', {
  key_rotation_interval_days: {},
});
```

### Rotate Access keys

Perfoms a key rotation for an account.

```ts
const response = await client.accessKeyConfiguration.rotate('accountId');
```

## `AccessAuthenticationLogs`

### Get Access authentication logs

Gets a list of Access authentication audit logs for an account.

| Direction | Type |
| --- | --- |
| Request | [`AccessAuthenticationLogListParams`](./src/resources/access-authentication-logs.ts) |

```ts
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
```

## `AccessJitRequestLogs`

### List Access JIT request logs

Lists account-wide Access JIT request logs reconstructed from request lifecycle events.

| Direction | Type |
| --- | --- |
| Request | [`AccessJitRequestLogListParams`](./src/resources/access-jit-request-logs.ts) |

```ts
const response = await client.accessJitRequestLogs.list('accountId', {
  per_page: 25,
});
```

### Get an Access JIT request log

Gets an account-scoped Access JIT request summary and its lifecycle events in chronological order.

| Direction | Type |
| --- | --- |
| Request | [`AccessJitRequestLogRetrieveParams`](./src/resources/access-jit-request-logs.ts) |

```ts
const response = await client.accessJitRequestLogs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: {},
});
```

## `AccessScimUpdateLogs`

### List Access SCIM update logs

Lists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).

| Direction | Type |
| --- | --- |
| Request | [`AccessScimUpdateLogListParams`](./src/resources/access-scim-update-logs.ts) |

```ts
const response = await client.accessScimUpdateLogs.list('accountId', {
  idp_id: {},
  per_page: 20,
});
```

## `ZeroTrustOrganization`

### Get your Zero Trust organization

Returns the configuration for your Zero Trust organization.

```ts
const response = await client.zeroTrustOrganization.listYour('accountId');
```

### Create your Zero Trust organization

Sets up a Zero Trust organization for your account.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustOrganizationCreateYourParams`](./src/resources/zero-trust-organization.ts) |

```ts
const response = await client.zeroTrustOrganization.createYour('accountId', {
  auth_domain: {},
  name: {},
});
```

### Update your Zero Trust organization

Updates the configuration for your Zero Trust organization.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustOrganizationUpdateYourParams`](./src/resources/zero-trust-organization.ts) |

```ts
const response = await client.zeroTrustOrganization.updateYour('accountId', {});
```

### Get your Zero Trust organization DoH settings

Returns the DoH settings for your Zero Trust organization.

| Direction | Type |
| --- | --- |
| Response | [`ZeroTrustOrganizationListYourDohSettingsResponse`](./src/resources/zero-trust-organization.ts) |

```ts
const zeroTrustOrganization = await client.zeroTrustOrganization.listYourDohSettings('accountId');
```

### Update your Zero Trust organization DoH settings

Updates the DoH settings for your Zero Trust organization.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustOrganizationUpdateYourDohSettingsParams`](./src/resources/zero-trust-organization.ts) |
| Response | [`ZeroTrustOrganizationUpdateYourDohSettingsResponse`](./src/resources/zero-trust-organization.ts) |

```ts
const zeroTrustOrganization = await client.zeroTrustOrganization.updateYourDohSettings('accountId');
```

### Revoke all Access tokens for a user

Revokes a user's access across all applications.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams`](./src/resources/zero-trust-organization.ts) |

```ts
const response = await client.zeroTrustOrganization.revokeAllAccessTokensForAUser('accountId', {
  email: 'test@example.com',
});
```

## `AccessReusablePolicies`

### List Access reusable policies

Lists Access reusable policies.

| Direction | Type |
| --- | --- |
| Request | [`AccessReusablePolicyListParams`](./src/resources/access-reusable-policies.ts) |

```ts
const response = await client.accessReusablePolicies.list('accountId', {
  per_page: 100,
});
```

### Create an Access reusable policy

Creates a new Access reusable policy.

| Direction | Type |
| --- | --- |
| Request | [`AccessReusablePolicyCreateAnParams`](./src/resources/access-reusable-policies.ts) |

```ts
const response = await client.accessReusablePolicies.createAn('accountId', {});
```

### Delete an Access reusable policy

Deletes an Access reusable policy.

| Direction | Type |
| --- | --- |
| Request | [`AccessReusablePolicyDeleteAnParams`](./src/resources/access-reusable-policies.ts) |

```ts
const response = await client.accessReusablePolicies.deleteAn('policyId', {
  account_id: {},
});
```

### Get an Access reusable policy

Fetches a single Access reusable policy.

| Direction | Type |
| --- | --- |
| Request | [`AccessReusablePolicyRetrieveAnParams`](./src/resources/access-reusable-policies.ts) |

```ts
const response = await client.accessReusablePolicies.retrieveAn('policyId', {
  account_id: {},
});
```

### Update an Access reusable policy

Updates a Access reusable policy.

| Direction | Type |
| --- | --- |
| Request | [`AccessReusablePolicyUpdateAnParams`](./src/resources/access-reusable-policies.ts) |

```ts
const response = await client.accessReusablePolicies.updateAn('policyId', {
  account_id: {},
  body: {},
});
```

## `AccessPolicyTester`

### Start Access policy test

Starts an Access policy test.

| Direction | Type |
| --- | --- |
| Request | [`AccessPolicyTesterTestsParams`](./src/resources/access-policy-tester.ts) |

```ts
const response = await client.accessPolicyTester.tests('accountId', {});
```

### Get the current status of a given Access policy test

Fetches the current status of a given Access policy test.

| Direction | Type |
| --- | --- |
| Request | [`AccessPolicyTesterTestsGetAnUpdateParams`](./src/resources/access-policy-tester.ts) |

```ts
const response = await client.accessPolicyTester.testsGetAnUpdate('policyTestId', {
  account_id: {},
});
```

### Get an Access policy test users page

Fetches a single page of user results from an Access policy test.

| Direction | Type |
| --- | --- |
| Request | [`AccessPolicyTesterTestsGetAUserPageParams`](./src/resources/access-policy-tester.ts) |

```ts
const response = await client.accessPolicyTester.testsGetAUserPage('policyTestId', {
  account_id: {},
  per_page: 25,
});
```

## `AccessSamlEncryptionCertificates`

### List SAML certificate sets

Returns a paginated list of the organization's SAML encryption certificate sets.
Each certificate set includes the current and (if present) previous certificates.

| Direction | Type |
| --- | --- |
| Request | [`AccessSamlEncryptionCertificateListSetsParams`](./src/resources/access-saml-encryption-certificates.ts) |

```ts
const response = await client.accessSamlEncryptionCertificates.listSets('accountId', {
  page: 1,
  per_page: 25,
});
```

### Get SAML certificate set

Retrieves a specific SAML encryption certificate set by its UID, including both current and previous certificates if available.

| Direction | Type |
| --- | --- |
| Request | [`AccessSamlEncryptionCertificateRetrieveSetParams`](./src/resources/access-saml-encryption-certificates.ts) |

```ts
const response = await client.accessSamlEncryptionCertificates.retrieveSet('samlCertSetId', {
  account_id: {},
});
```

### Download current certificate in PEM format

Downloads the current SAML encryption certificate's public key in PEM format for the specified certificate set. This endpoint is useful for providing the certificate to Identity Providers for SAML assertion encryption configuration.

| Direction | Type |
| --- | --- |
| Request | [`AccessSamlEncryptionCertificateListPemParams`](./src/resources/access-saml-encryption-certificates.ts) |

```ts
const response = await client.accessSamlEncryptionCertificates.listPem('samlCertSetId', {
  account_id: {},
});
```

### Rotate SAML certificate

Rotates the SAML encryption certificates within the specified certificate set. This generates a new
certificate and moves the current certificate to the previous slot. If a previous certificate exists,
it will be deactivated and removed.

This endpoint ensures zero-downtime rotation by maintaining both current and previous certificates 
during the transition period, allowing IdPs time to update their configurations. Automated rotation
happens 30 days before a current certificate's expiration.

| Direction | Type |
| --- | --- |
| Request | [`AccessSamlEncryptionCertificateRotateParams`](./src/resources/access-saml-encryption-certificates.ts) |

```ts
const response = await client.accessSamlEncryptionCertificates.rotate('samlCertSetId', {
  account_id: {},
});
```

## `ZeroTrustSeats`

### Update a user seat

Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustSeatUpdateAUserParams`](./src/resources/zero-trust-seats.ts) |

```ts
const response = await client.zeroTrustSeats.updateAUser('accountId', {});
```

## `AccessServiceTokens`

### List service tokens

Lists all service tokens.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenListParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.list('accountId');
```

### Create a service token

Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenCreateAParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.createA('accountId', {
  name: {},
});
```

### Delete a service token

Deletes a service token.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenDeleteAParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.deleteA('serviceTokenId', {
  account_id: {},
});
```

### Get a service token

Fetches a single service token.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenRetrieveAParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.retrieveA('serviceTokenId', {
  account_id: {},
});
```

### Update a service token

Updates a configured service token.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenUpdateAParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.updateA('serviceTokenId', {
  account_id: {},
});
```

### Refresh a service token

Refreshes the expiration of a service token.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenRefreshAParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.refreshA('serviceTokenId', {
  account_id: {},
});
```

### Rotate a service token

Generates a new Client Secret for a service token and revokes the old one.

| Direction | Type |
| --- | --- |
| Request | [`AccessServiceTokenRotateAParams`](./src/resources/access-service-tokens.ts) |

```ts
const response = await client.accessServiceTokens.rotateA('serviceTokenId', {
  account_id: {},
});
```

## `AccessTags`

### List tags

| Direction | Type |
| --- | --- |
| Request | [`AccessTagListParams`](./src/resources/access-tags.ts) |

```ts
const response = await client.accessTags.list('accountId', {
  per_page: 50,
});
```

### Create a tag

| Direction | Type |
| --- | --- |
| Request | [`AccessTagCreateParams`](./src/resources/access-tags.ts) |

```ts
const response = await client.accessTags.create('accountId');
```

### Delete a tag

| Direction | Type |
| --- | --- |
| Request | [`AccessTagDeleteAParams`](./src/resources/access-tags.ts) |

```ts
const response = await client.accessTags.deleteA('tagName', {
  account_id: {},
});
```

### Get a tag

| Direction | Type |
| --- | --- |
| Request | [`AccessTagRetrieveAParams`](./src/resources/access-tags.ts) |

```ts
const response = await client.accessTags.retrieveA('tagName', {
  account_id: {},
});
```

### Update a tag

| Direction | Type |
| --- | --- |
| Request | [`AccessTagUpdateAParams`](./src/resources/access-tags.ts) |

```ts
const response = await client.accessTags.updateA('tagName', {
  account_id: {},
});
```

## `ZeroTrustUsers`

### Get users

Gets a list of users for an account.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserListParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.list('accountId');
```

### Create a user

Creates a new user.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserCreateParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.create('accountId', {
  email: {},
});
```

### Delete a user

Deletes a specific user for an account. This will also revoke any active seats and tokens for the user.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserDeleteParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.delete('userId', {
  account_id: {},
});
```

### Get a user

Gets a specific user for an account.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserRetrieveParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.retrieve('userId', {
  account_id: {},
});
```

### Update a user

Updates a specific user's name for an account. Requires the user's current email as confirmation (email cannot be changed).

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserUpdateParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.update('userId', {
  account_id: {},
  email: {},
  name: {},
});
```

### Get active sessions

Get active sessions for a single user.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserListActiveSessionsParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.listActiveSessions('userId', {
  account_id: {},
});
```

### Get single active session

Get an active session for a single user.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserRetrieveActiveSessionParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.retrieveActiveSession('nonce', {
  user_id: {},
  account_id: {},
});
```

### Get failed logins

Get all failed login attempts for a single user.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserListFailedLoginsParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.listFailedLogins('userId', {
  account_id: {},
});
```

### Get last seen identity

Get last seen identity for a single user.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserListLastSeenIdentityParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.listLastSeenIdentity('userId', {
  account_id: {},
});
```

### Delete a user's MFA device

Deletes a specific MFA device, including a PIV key or FIDO2 key enrollment, for a user. This action is only available if MFA is turned on for the organization. Successful deletion revokes the enrollment and returns a null result.

| Direction | Type |
| --- | --- |
| Request | [`ZeroTrustUserDeleteMfaAuthenticatorParams`](./src/resources/zero-trust-users.ts) |

```ts
const response = await client.zeroTrustUsers.deleteMfaAuthenticator('authenticatorId', {
  user_id: {},
  account_id: {},
});
```

## `IpAddressManagementAddressMaps`

### List Address Maps

List all address maps owned by the account.

```ts
const response = await client.ipAddressManagementAddressMaps.list('accountId');
```

### Create Address Map

Create a new address map under the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapCreateParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.create('accountId', {});
```

### Delete Address Map

Delete a particular address map owned by the account. An Address Map must be disabled before it can be deleted.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapDeleteParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.delete('addressMapId', {
  account_id: {},
});
```

### Address Map Details

Show a particular address map owned by the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapDetailsParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.details('addressMapId', {
  account_id: {},
});
```

### Update Address Map

Modify properties of an address map owned by the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapUpdateParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.update('addressMapId', {
  account_id: {},
});
```

### Remove an account membership from an Address Map

Remove an account as a member of a particular address map.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.deleteAnAccountMembershipFromAn(
  'memberAccountId',
  {
    account_id: {},
    address_map_id: {},
  },
);
```

### Add an account membership to an Address Map

Add an account as a member of a particular address map.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.createAnAccountMembershipToAn(
  'memberAccountId',
  {
    account_id: {},
    address_map_id: {},
  },
);
```

### Remove an IP from an Address Map

Remove an IP from a particular address map.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapDeleteAnFromAnParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.deleteAnFromAn('ipAddress', {
  address_map_id: {},
  account_id: {},
});
```

### Add an IP to an Address Map

Add an IP from a prefix owned by the account to a particular address map.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapCreateAnToAnParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.createAnToAn('ipAddress', {
  address_map_id: {},
  account_id: {},
});
```

### Remove a zone membership from an Address Map

Remove a zone as a member of a particular address map.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.deleteAZoneMembershipFromAn('zoneId', {
  address_map_id: {},
  account_id: {},
});
```

### Add a zone membership to an Address Map

Add a zone as a member of a particular address map.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementAddressMapCreateAZoneMembershipToAnParams`](./src/resources/ip-address-management-address-maps.ts) |

```ts
const response = await client.ipAddressManagementAddressMaps.createAZoneMembershipToAn('zoneId', {
  address_map_id: {},
  account_id: {},
});
```

## `IpAddressManagementLeases`

### List Leases

List all leases owned by the account.

```ts
const response = await client.ipAddressManagementLeases.list('accountId');
```

## `IpAddressManagementPrefixes`

### Upload LOA Document

Submit LOA document (pdf format) under the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixUploadLoaDocumentParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.uploadLoaDocument('accountId', {
  loa_document: '@document.pdf',
});
```

### Download LOA Document

Download specified LOA document under the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixDownloadLoaDocumentParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.downloadLoaDocument('loaDocumentId', {
  account_id: {},
});
```

### List Prefixes

List all prefixes owned by the account.

```ts
const response = await client.ipAddressManagementPrefixes.list('accountId');
```

### Add Prefix

Add a new prefix under the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixCreateParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.create('accountId', {
  asn: {},
  cidr: {},
});
```

### Delete Prefix

Delete an unapproved prefix owned by the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixDeleteParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.delete('prefixId', {
  account_id: {},
});
```

### Prefix Details

List a particular prefix owned by the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixDetailsParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.details('prefixId', {
  account_id: {},
});
```

### Update Prefix Description

Modify the description for a prefix owned by the account.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixUpdateDescriptionParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.updateDescription('prefixId', {
  account_id: {},
  description: {},
});
```

### Validate Prefix

Triggers a new prefix validation. The checks are run asynchronously and include IRR, RPKI, and prefix ownership.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixValidateParams`](./src/resources/ip-address-management-prefixes.ts) |

```ts
const response = await client.ipAddressManagementPrefixes.validate('prefixId', {
  account_id: {},
});
```

## `IpAddressManagementBgpPrefixes`

### List BGP Prefixes

List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to control which specific subnets are advertised to the Internet. It is possible to advertise subnets more specific than an IP Prefix by creating more specific BGP Prefixes.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementBGPPrefixListParams`](./src/resources/ip-address-management-bgp-prefixes.ts) |

```ts
const response = await client.ipAddressManagementBGPPrefixes.list('prefixId', {
  account_id: {},
});
```

### Create BGP Prefix

Create a BGP prefix, controlling the BGP advertisement status of a specific subnet. When created, BGP prefixes are initially withdrawn, and can be advertised with the Update BGP Prefix API.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementBGPPrefixCreateParams`](./src/resources/ip-address-management-bgp-prefixes.ts) |

```ts
const response = await client.ipAddressManagementBGPPrefixes.create('prefixId', {
  account_id: {},
  body: {},
});
```

### Delete BGP Prefix

Delete a BGP Prefix associated with the specified IP Prefix. A BGP Prefix must be withdrawn before it can be deleted.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementBGPPrefixDeleteParams`](./src/resources/ip-address-management-bgp-prefixes.ts) |

```ts
const response = await client.ipAddressManagementBGPPrefixes.delete('bgpPrefixId', {
  account_id: {},
  prefix_id: {},
});
```

### Fetch BGP Prefix

Retrieve a single BGP Prefix according to its identifier

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementBGPPrefixFetchParams`](./src/resources/ip-address-management-bgp-prefixes.ts) |

```ts
const response = await client.ipAddressManagementBGPPrefixes.fetch('bgpPrefixId', {
  account_id: {},
  prefix_id: {},
});
```

### Update BGP Prefix

Update the properties of a BGP Prefix, such as the on demand advertisement status (advertised or withdrawn).

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementBGPPrefixUpdateParams`](./src/resources/ip-address-management-bgp-prefixes.ts) |

```ts
const response = await client.ipAddressManagementBGPPrefixes.update('bgpPrefixId', {
  account_id: {},
  prefix_id: {},
  body: {},
});
```

## `IpAddressManagementDynamicAdvertisement`

### Get Advertisement Status

View the current advertisement state for a prefix.

**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing 
subnets of an IP prefix.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementDynamicAdvertisementListStatusParams`](./src/resources/ip-address-management-dynamic-advertisement.ts) |

```ts
const response = await client.ipAddressManagementDynamicAdvertisement.listStatus('prefixId', {
  account_id: {},
});
```

### Update Prefix Dynamic Advertisement Status

Advertise or withdraw the BGP route for a prefix.

**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing 
subnets of an IP prefix.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams`](./src/resources/ip-address-management-dynamic-advertisement.ts) |

```ts
const response = await client.ipAddressManagementDynamicAdvertisement.updatePrefixStatus('prefixId', {
  account_id: {},
  advertised: {},
});
```

## `IpAddressManagementServiceBindings`

### List Service Bindings

List the Cloudflare services this prefix is currently bound to. Traffic sent to an address within an IP prefix will be routed to the Cloudflare service of the most-specific Service Binding matching the address.
**Example:** binding `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other IPs in the prefix to Cloudflare Magic Transit.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementServiceBindingList2Params`](./src/resources/ip-address-management-service-bindings.ts) |
| Response | [`IPAddressManagementServiceBindingList2Response`](./src/resources/ip-address-management-service-bindings.ts) |

```ts
const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.list2('prefixId', {
  account_id: {},
});
```

### Create Service Binding

Creates a new Service Binding, routing traffic to IPs within the given CIDR to a service running on Cloudflare's network.
**NOTE:** The first Service Binding created for an IP Prefix must exactly match the IP Prefix's CIDR. Subsequent Service Bindings may be created with a more-specific CIDR. Refer to the  [Service Bindings Documentation](https://developers.cloudflare.com/byoip/service-bindings/) for compatibility details.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementServiceBindingCreateParams`](./src/resources/ip-address-management-service-bindings.ts) |
| Response | [`IPAddressManagementServiceBindingCreateResponse`](./src/resources/ip-address-management-service-bindings.ts) |

```ts
const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.create('prefixId', {
  account_id: {},
});
```

### Delete Service Binding

Delete a Service Binding

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementServiceBindingDeleteParams`](./src/resources/ip-address-management-service-bindings.ts) |

```ts
const response = await client.ipAddressManagementServiceBindings.delete('bindingId', {
  account_id: {},
  prefix_id: {},
});
```

### Get Service Binding

Fetch a single Service Binding

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementServiceBindingRetrieveParams`](./src/resources/ip-address-management-service-bindings.ts) |
| Response | [`IPAddressManagementServiceBindingRetrieveResponse`](./src/resources/ip-address-management-service-bindings.ts) |

```ts
const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.retrieve(
  'bindingId',
  {
    account_id: {},
    prefix_id: {},
  },
);
```

### List Services

Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a service running on the Cloudflare network to enable a Cloudflare product on the IP addresses. This endpoint can be used as a reference of available services on the Cloudflare network, and their service IDs.

| Direction | Type |
| --- | --- |
| Response | [`IPAddressManagementServiceBindingListResponse`](./src/resources/ip-address-management-service-bindings.ts) |

```ts
const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.list('accountId');
```

## `IpAddressManagementPrefixDelegation`

### List Prefix Delegations

List all delegations for a given account IP prefix.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixDelegationListParams`](./src/resources/ip-address-management-prefix-delegation.ts) |

```ts
const response = await client.ipAddressManagementPrefixDelegation.list('prefixId', {
  account_id: {},
});
```

### Create Prefix Delegation

Create a new account delegation for a given IP prefix.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixDelegationCreateParams`](./src/resources/ip-address-management-prefix-delegation.ts) |

```ts
const response = await client.ipAddressManagementPrefixDelegation.create('prefixId', {
  account_id: {},
  cidr: {},
  delegated_account_id: {},
});
```

### Delete Prefix Delegation

Delete an account delegation for a given IP prefix.

| Direction | Type |
| --- | --- |
| Request | [`IPAddressManagementPrefixDelegationDeleteParams`](./src/resources/ip-address-management-prefix-delegation.ts) |

```ts
const response = await client.ipAddressManagementPrefixDelegation.delete('delegationId', {
  prefix_id: {},
  account_id: {},
});
```

## `DlsRegionalServices`

### List Regions

List all Regional Services regions available for use by this account.

| Direction | Type |
| --- | --- |
| Response | [`DlsRegionalServiceAccountHostnamesListRegionsResponse`](./src/resources/dls-regional-services.ts) |

```ts
const dlsRegionalService = await client.dlsRegionalServices.accountHostnamesListRegions('accountId');
```

## `Namespaces`

### List namespaces

Lists all namespaces for the given account. Results are paginated.

| Direction | Type |
| --- | --- |
| Request | [`NamespaceAgentMemoryListParams`](./src/resources/namespaces.ts) |
| Response | [`NamespaceAgentMemoryListResponse`](./src/resources/namespaces.ts) |

```ts
const response = await client.namespaces.agentMemoryList('accountId');
```

### Create a namespace

Creates a new memory namespace owned by the account.

| Direction | Type |
| --- | --- |
| Request | [`NamespaceAgentMemoryCreateParams`](./src/resources/namespaces.ts) |
| Response | [`NamespaceAgentMemoryCreateResponse`](./src/resources/namespaces.ts) |

```ts
const response = await client.namespaces.agentMemoryCreate('accountId', {
  name: 'support-agent',
});
```

### Delete a namespace

Deletes a namespace.

| Direction | Type |
| --- | --- |
| Request | [`NamespaceAgentMemoryDeleteParams`](./src/resources/namespaces.ts) |
| Response | [`NamespaceAgentMemoryDeleteResponse`](./src/resources/namespaces.ts) |

```ts
const response = await client.namespaces.agentMemoryDelete('support-agent', {
  account_id: 'accountId',
});
```

### Get a namespace

Gets a namespace by name.

| Direction | Type |
| --- | --- |
| Request | [`NamespaceAgentMemoryGetParams`](./src/resources/namespaces.ts) |
| Response | [`NamespaceAgentMemoryGetResponse`](./src/resources/namespaces.ts) |

```ts
const response = await client.namespaces.agentMemoryGet('support-agent', {
  account_id: 'accountId',
});
```

## `Memory`

### List profiles

Lists the profiles of a namespace, ordered by name. A profile appears once it has been used.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentProfileListParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentProfileListResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentProfileList('support-agent', {
  account_id: 'accountId',
});
```

### Delete a profile

Marks a profile for deletion.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentProfileDeleteParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentProfileDeleteResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentProfileDelete('my-profile', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
});
```

### Ingest messages

Processes a conversation and extracts structured memories from it. Agent Memory identifies facts, events, instructions, and tasks automatically.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentIngestParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentIngestResponse`](./src/resources/memory.ts) |

```ts
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
```

### List memories

List memories stored in a profile.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentListParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentListResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentList('my-profile', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
});
```

### Delete a memory

Deletes a memory by ID. Removes the memory and any source messages linked to it. Returns the deleted memory.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentDeleteParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentDeleteResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentDelete('01JSGCEXAMP1E0000000000000', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
  profile_name: 'my-profile',
});
```

### Get a memory

Retrieves a memory by ID.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentGetParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentGetResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentGet('01JSGCEXAMP1E0000000000000', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
  profile_name: 'my-profile',
});
```

### Recall memories

Retrieves memories relevant to the query and returns a synthesized answer.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentRecallParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentRecallResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentRecall('my-profile', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
  query: 'What are my UI preferences?',
});
```

### Remember a memory

Stores a single memory explicitly.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentRememberParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentRememberResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentRemember('my-profile', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
  content: 'I prefer dark mode in the dashboard.',
});
```

### Delete a session

Marks all memories and messages in a profile that are tagged with the given session ID for deletion.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentSessionDeleteParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentSessionDeleteResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentSessionDelete('chat-session-44', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
  profile_name: 'my-profile',
});
```

### Get a profile summary

Generates a paste-ready prompt block summarizing everything stored in a memory profile.

| Direction | Type |
| --- | --- |
| Request | [`MemoryAgentSummaryParams`](./src/resources/memory.ts) |
| Response | [`MemoryAgentSummaryResponse`](./src/resources/memory.ts) |

```ts
const memory = await client.memory.agentSummary('my-profile', {
  account_id: 'accountId',
  namespace_name: 'support-agent',
});
```

## `AiGateway`

### Get credit balance

Retrieve the current credit balance, payment method info, and top-up configuration.

```ts
const response = await client.aiGateway.aigBillingGetCreditBalance('accountId');
```

### Get invoice history

Retrieve a list of past invoices with pagination, optionally filtered by type.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingGetInvoiceHistoryParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingGetInvoiceHistory('accountId', {
  type: 'all',
});
```

### Get invoice preview

Retrieve a preview of the upcoming invoice including line items and tax.

```ts
const response = await client.aiGateway.aigBillingGetInvoicePreview('accountId');
```

### Delete spending limit

Remove the spending limit for the account.

```ts
const response = await client.aiGateway.aigBillingDeleteSpendingLimit('accountId');
```

### Get spending limit

Retrieve the current spending limit configuration for the account.

```ts
const response = await client.aiGateway.aigBillingGetSpendingLimit('accountId');
```

### Set spending limit (deprecated)

Deprecated: spending limits can no longer be created, enabled, or modified and this endpoint always responds 403. Use the new AI Gateway spend limits instead: https://developers.cloudflare.com/ai-gateway/features/spend-limits/. Existing limits can be removed via DELETE /spending-limit.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingSetSpendingLimitParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingSetSpendingLimit('accountId', {
  amount: 10000,
  duration: 'monthly',
  strategy: 'fixed',
});
```

### Create a top-up

Create a credit top-up for the given account, charged to the account's default payment method.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingCreateTopupParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingCreateTopup('accountId', {
  amount: 5000,
});
```

### Delete auto top-up configuration

Remove the auto top-up configuration for the account.

```ts
const response = await client.aiGateway.aigBillingDeleteTopupConfig('accountId');
```

### Get auto top-up configuration

Retrieve the current auto top-up threshold, amount, and any error state.

```ts
const response = await client.aiGateway.aigBillingGetTopupConfig('accountId');
```

### Set auto top-up configuration

Configure auto top-up with a balance threshold and top-up amount.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingSetTopupConfigParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingSetTopupConfig('accountId', {
  amount: 5000,
  threshold: 500,
});
```

### Get top-up eligibility

Determine whether an account can self-serve a credit top-up, and if not, why. The dashboard forwards the account's payment-method list in the body; the reason logic is owned here.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingTopupEligibilityParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingTopupEligibility('accountId');
```

### Get account top-up limits

Retrieve the minimum and maximum allowed top-up amounts (in cents) for this account.

```ts
const response = await client.aiGateway.aigBillingGetTopupLimits('accountId');
```

### Check top-up status

Get the payment processing status of a top-up by its invoice ID.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingCheckTopupStatusParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingCheckTopupStatus('accountId', {
  payment_intent_id: 'in_1abc',
});
```

### Get usage history

Retrieve aggregated usage meter event summaries for the given time range.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAigBillingGetUsageHistoryParams`](./src/resources/ai-gateway.ts) |

```ts
const response = await client.aiGateway.aigBillingGetUsageHistory('accountId', {
  value_grouping_window: 'day',
});
```

## `AiGatewayAccountProviders`

### List Account Providers

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderAigConfigListParams`](./src/resources/ai-gateway-account-providers.ts) |
| Response | [`AIGatewayAccountProviderAigConfigListResponse`](./src/resources/ai-gateway-account-providers.ts) |

```ts
const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigList(
  '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  {
    page: 1,
    per_page: 20,
  },
);
```

### Create a new Account Provider

Creates a new AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderAigConfigCreateParams`](./src/resources/ai-gateway-account-providers.ts) |
| Response | [`AIGatewayAccountProviderAigConfigCreateResponse`](./src/resources/ai-gateway-account-providers.ts) |

```ts
const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigCreate(
  '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  {
    base_url: 'https://example.com',
    name: '',
    slug: '',
  },
);
```

### Delete a Account Provider

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderAigConfigDeleteParams`](./src/resources/ai-gateway-account-providers.ts) |
| Response | [`AIGatewayAccountProviderAigConfigDeleteResponse`](./src/resources/ai-gateway-account-providers.ts) |

```ts
const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigDelete(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  },
);
```

### Fetch a Account Provider

Retrieves details for a specific AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderAigConfigFetchParams`](./src/resources/ai-gateway-account-providers.ts) |
| Response | [`AIGatewayAccountProviderAigConfigFetchResponse`](./src/resources/ai-gateway-account-providers.ts) |

```ts
const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigFetch(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  },
);
```

### Update a Account Provider

Updates an existing AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderAigConfigUpdateParams`](./src/resources/ai-gateway-account-providers.ts) |
| Response | [`AIGatewayAccountProviderAigConfigUpdateResponse`](./src/resources/ai-gateway-account-providers.ts) |

```ts
const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigUpdate(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  },
);
```

## `AiGatewayAccountProviderCosts`

### List Account Provider Costs

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderCostAigConfigListParams`](./src/resources/ai-gateway-account-provider-costs.ts) |
| Response | [`AIGatewayAccountProviderCostAigConfigListResponse`](./src/resources/ai-gateway-account-provider-costs.ts) |

```ts
const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigList(
  '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  {
    page: 1,
    per_page: 20,
    model_rule: 'equals',
    cost_type: 'tokens',
  },
);
```

### Create a new Account Provider Cost

Creates a new AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderCostAigConfigCreateParams`](./src/resources/ai-gateway-account-provider-costs.ts) |
| Response | [`AIGatewayAccountProviderCostAigConfigCreateResponse`](./src/resources/ai-gateway-account-provider-costs.ts) |

```ts
const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigCreate(
  '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  {
    account_provider_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    cost_type: 'tokens',
    model: '',
    model_rule: 'equals',
  },
);
```

### Delete a Account Provider Cost

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderCostAigConfigDeleteParams`](./src/resources/ai-gateway-account-provider-costs.ts) |
| Response | [`AIGatewayAccountProviderCostAigConfigDeleteResponse`](./src/resources/ai-gateway-account-provider-costs.ts) |

```ts
const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigDelete(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  },
);
```

### Fetch a Account Provider Cost

Retrieves details for a specific AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderCostAigConfigFetchParams`](./src/resources/ai-gateway-account-provider-costs.ts) |
| Response | [`AIGatewayAccountProviderCostAigConfigFetchResponse`](./src/resources/ai-gateway-account-provider-costs.ts) |

```ts
const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigFetch(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  },
);
```

### Update a Account Provider Cost

Updates an existing AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayAccountProviderCostAigConfigUpdateParams`](./src/resources/ai-gateway-account-provider-costs.ts) |
| Response | [`AIGatewayAccountProviderCostAigConfigUpdateResponse`](./src/resources/ai-gateway-account-provider-costs.ts) |

```ts
const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigUpdate(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
    cost_type: 'tokens',
    model_rule: 'equals',
  },
);
```

## `AiGatewayEvaluations`

### List Evaluators

Lists all available evaluator types for scoring AI gateway responses.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayEvaluationAigConfigListEvaluatorsParams`](./src/resources/ai-gateway-evaluations.ts) |
| Response | [`AIGatewayEvaluationAigConfigListEvaluatorsResponse`](./src/resources/ai-gateway-evaluations.ts) |

```ts
const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigListEvaluators(
  '0d37909e38d3e99c29fa2cd343ac421a',
  {
    page: 1,
    per_page: 20,
    order_by: 'mandatory',
    order_by_direction: 'desc',
  },
);
```

### List Evaluations

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayEvaluationAigConfigListParams`](./src/resources/ai-gateway-evaluations.ts) |
| Response | [`AIGatewayEvaluationAigConfigListResponse`](./src/resources/ai-gateway-evaluations.ts) |

```ts
const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigList('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  page: 1,
  per_page: 20,
});
```

### Create a new Evaluation

Creates a new AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayEvaluationAigConfigCreateParams`](./src/resources/ai-gateway-evaluations.ts) |
| Response | [`AIGatewayEvaluationAigConfigCreateResponse`](./src/resources/ai-gateway-evaluations.ts) |

```ts
const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigCreate('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  dataset_ids: [''],
  evaluation_type_ids: [''],
  name: '',
});
```

### Delete a Evaluation

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayEvaluationAigConfigDeleteParams`](./src/resources/ai-gateway-evaluations.ts) |
| Response | [`AIGatewayEvaluationAigConfigDeleteResponse`](./src/resources/ai-gateway-evaluations.ts) |

```ts
const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigDelete('id', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

### Fetch a Evaluation

Retrieves details for a specific AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayEvaluationAigConfigFetchParams`](./src/resources/ai-gateway-evaluations.ts) |
| Response | [`AIGatewayEvaluationAigConfigFetchResponse`](./src/resources/ai-gateway-evaluations.ts) |

```ts
const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigFetch('id', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

## `AiGatewayGateways`

### List Gateways

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayGatewayAigConfigListParams`](./src/resources/ai-gateway-gateways.ts) |
| Response | [`AIGatewayGatewayAigConfigListResponse`](./src/resources/ai-gateway-gateways.ts) |

```ts
const aiGatewayGateway = await client.aiGatewayGateways.aigConfigList('3ebbcb006d4d46d7bb6a8c7f14676cb0', {
  page: 1,
  per_page: 20,
});
```

### Create a new Gateway

Creates a new AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayGatewayAigConfigCreateParams`](./src/resources/ai-gateway-gateways.ts) |
| Response | [`AIGatewayGatewayAigConfigCreateResponse`](./src/resources/ai-gateway-gateways.ts) |

```ts
const aiGatewayGateway = await client.aiGatewayGateways.aigConfigCreate('3ebbcb006d4d46d7bb6a8c7f14676cb0', {
  cache_invalidate_on_update: false,
  cache_ttl: 0,
  collect_logs: false,
  id: 'my-gateway',
  rate_limiting_interval: 0,
  rate_limiting_limit: 0,
  workers_ai_billing_mode: 'postpaid',
});
```

### Get Gateway URL

Retrieves the endpoint URL for an AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayGatewayAigConfigGetURLParams`](./src/resources/ai-gateway-gateways.ts) |
| Response | [`AIGatewayGatewayAigConfigGetURLResponse`](./src/resources/ai-gateway-gateways.ts) |

```ts
const aiGatewayGateway = await client.aiGatewayGateways.aigConfigGetURL('workers-ai', {
  gateway_id: 'my-gateway',
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
});
```

### Delete a Gateway

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayGatewayAigConfigDeleteParams`](./src/resources/ai-gateway-gateways.ts) |
| Response | [`AIGatewayGatewayAigConfigDeleteResponse`](./src/resources/ai-gateway-gateways.ts) |

```ts
const aiGatewayGateway = await client.aiGatewayGateways.aigConfigDelete('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
});
```

### Fetch a Gateway

Retrieves details for a specific AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayGatewayAigConfigFetchParams`](./src/resources/ai-gateway-gateways.ts) |
| Response | [`AIGatewayGatewayAigConfigFetchResponse`](./src/resources/ai-gateway-gateways.ts) |

```ts
const aiGatewayGateway = await client.aiGatewayGateways.aigConfigFetch('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
});
```

### Update a Gateway

Updates an existing AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayGatewayAigConfigUpdateParams`](./src/resources/ai-gateway-gateways.ts) |
| Response | [`AIGatewayGatewayAigConfigUpdateResponse`](./src/resources/ai-gateway-gateways.ts) |

```ts
const aiGatewayGateway = await client.aiGatewayGateways.aigConfigUpdate('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  cache_invalidate_on_update: false,
  cache_ttl: 0,
  collect_logs: false,
  rate_limiting_interval: 0,
  rate_limiting_limit: 0,
  workers_ai_billing_mode: 'postpaid',
});
```

## `AiGatewayCustomDomains`

### List Custom Domains

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayCustomDomainAigConfigListParams`](./src/resources/ai-gateway-custom-domains.ts) |
| Response | [`AIGatewayCustomDomainAigConfigListResponse`](./src/resources/ai-gateway-custom-domains.ts) |

```ts
const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigList('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  page: 1,
  per_page: 20,
});
```

### Create a custom domain for a gateway

Provisions a Cloudflare-for-SaaS custom hostname and returns the CNAME target to point DNS at.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayCustomDomainAigConfigCreateParams`](./src/resources/ai-gateway-custom-domains.ts) |
| Response | [`AIGatewayCustomDomainAigConfigCreateResponse`](./src/resources/ai-gateway-custom-domains.ts) |

```ts
const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigCreate('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  domain: 'ai.acme.com',
  zone_id: '395566f4c8a5b9d2a5fc0d457b007c44',
});
```

### Delete a Custom Domain

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayCustomDomainAigConfigDeleteParams`](./src/resources/ai-gateway-custom-domains.ts) |
| Response | [`AIGatewayCustomDomainAigConfigDeleteResponse`](./src/resources/ai-gateway-custom-domains.ts) |

```ts
const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigDelete('ai.acme.com', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

### Fetch a Custom Domain

Retrieves details for a specific AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayCustomDomainAigConfigFetchParams`](./src/resources/ai-gateway-custom-domains.ts) |
| Response | [`AIGatewayCustomDomainAigConfigFetchResponse`](./src/resources/ai-gateway-custom-domains.ts) |

```ts
const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigFetch('ai.acme.com', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

## `AiGatewayDatasets`

### List Datasets

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDatasetAigConfigListParams`](./src/resources/ai-gateway-datasets.ts) |
| Response | [`AIGatewayDatasetAigConfigListResponse`](./src/resources/ai-gateway-datasets.ts) |

```ts
const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigList('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  page: 1,
  per_page: 20,
});
```

### Create a new Dataset

Creates a new AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDatasetAigConfigCreateParams`](./src/resources/ai-gateway-datasets.ts) |
| Response | [`AIGatewayDatasetAigConfigCreateResponse`](./src/resources/ai-gateway-datasets.ts) |

```ts
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
```

### Delete a Dataset

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDatasetAigConfigDeleteParams`](./src/resources/ai-gateway-datasets.ts) |
| Response | [`AIGatewayDatasetAigConfigDeleteResponse`](./src/resources/ai-gateway-datasets.ts) |

```ts
const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigDelete('id', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

### Fetch a Dataset

Retrieves details for a specific AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDatasetAigConfigFetchParams`](./src/resources/ai-gateway-datasets.ts) |
| Response | [`AIGatewayDatasetAigConfigFetchResponse`](./src/resources/ai-gateway-datasets.ts) |

```ts
const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigFetch('id', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

### Update a Dataset

Updates an existing AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDatasetAigConfigUpdateParams`](./src/resources/ai-gateway-datasets.ts) |
| Response | [`AIGatewayDatasetAigConfigUpdateResponse`](./src/resources/ai-gateway-datasets.ts) |

```ts
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
```

## `AiGatewayLogs`

### Delete Gateway Logs

Deletes gateway log entries matching the specified criteria.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayLogAigConfigDeleteParams`](./src/resources/ai-gateway-logs.ts) |
| Response | [`AIGatewayLogAigConfigDeleteResponse`](./src/resources/ai-gateway-logs.ts) |

```ts
const aiGatewayLog = await client.aiGatewayLogs.aigConfigDelete('my-gateway', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  order_by: 'created_at',
  order_by_direction: 'asc',
  limit: 10000,
});
```

### List Gateway Logs

Lists request/response log entries for the AI gateway with filtering and pagination.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayLogAigConfigListParams`](./src/resources/ai-gateway-logs.ts) |
| Response | [`AIGatewayLogAigConfigListResponse`](./src/resources/ai-gateway-logs.ts) |

```ts
const aiGatewayLog = await client.aiGatewayLogs.aigConfigList('my-gateway', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  page: 1,
  per_page: 20,
  order_by: 'created_at',
  order_by_direction: 'desc',
});
```

### Get Gateway Log Detail

Retrieves detailed information for a specific AI Gateway log entry.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayLogAigConfigGetDetailParams`](./src/resources/ai-gateway-logs.ts) |
| Response | [`AIGatewayLogAigConfigGetDetailResponse`](./src/resources/ai-gateway-logs.ts) |

```ts
const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetDetail('id', {
  gateway_id: 'my-gateway',
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
});
```

### Patch Gateway Log

Updates metadata for an AI Gateway log entry.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayLogAigConfigPatchParams`](./src/resources/ai-gateway-logs.ts) |
| Response | [`AIGatewayLogAigConfigPatchResponse`](./src/resources/ai-gateway-logs.ts) |

```ts
const aiGatewayLog = await client.aiGatewayLogs.aigConfigPatch('id', {
  gateway_id: 'my-gateway',
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
});
```

### Get Gateway Log Request

Retrieves the original request payload for an AI Gateway log entry.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayLogAigConfigGetRequestParams`](./src/resources/ai-gateway-logs.ts) |
| Response | [`AIGatewayLogAigConfigGetRequestResponse`](./src/resources/ai-gateway-logs.ts) |

```ts
const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetRequest('id', {
  gateway_id: 'my-gateway',
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
});
```

### Get Gateway Log Response

Retrieves the response payload for an AI Gateway log entry.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayLogAigConfigGetResponseParams`](./src/resources/ai-gateway-logs.ts) |
| Response | [`AIGatewayLogAigConfigGetResponseResponse`](./src/resources/ai-gateway-logs.ts) |

```ts
const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetResponse('id', {
  gateway_id: 'my-gateway',
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
});
```

## `AiGatewayProviderConfigs`

### List Provider Configs

Lists all AI Gateway evaluator types configured for the account.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayProviderConfigAigListParams`](./src/resources/ai-gateway-provider-configs.ts) |
| Response | [`AIGatewayProviderConfigAigListResponse`](./src/resources/ai-gateway-provider-configs.ts) |

```ts
const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigList('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  page: 1,
  per_page: 20,
});
```

### Create a new Provider Configs

Creates a new AI Gateway.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayProviderConfigAigCreateParams`](./src/resources/ai-gateway-provider-configs.ts) |
| Response | [`AIGatewayProviderConfigAigCreateResponse`](./src/resources/ai-gateway-provider-configs.ts) |

```ts
const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigCreate('my-gateway', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  alias: '',
  default_config: false,
  provider_slug: '',
  rate_limit_period: 60,
});
```

### Delete a Provider Configs

Deletes an AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayProviderConfigAigDeleteParams`](./src/resources/ai-gateway-provider-configs.ts) |
| Response | [`AIGatewayProviderConfigAigDeleteResponse`](./src/resources/ai-gateway-provider-configs.ts) |

```ts
const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigDelete('id', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
});
```

### Update a Provider Configs

Updates an existing AI Gateway dataset.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayProviderConfigAigUpdateParams`](./src/resources/ai-gateway-provider-configs.ts) |
| Response | [`AIGatewayProviderConfigAigUpdateResponse`](./src/resources/ai-gateway-provider-configs.ts) |

```ts
const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigUpdate('id', {
  account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
  gateway_id: 'my-gateway',
  secret: '',
});
```

## `AiGatewayDynamicRoutes`

### List all AI Gateway Dynamic Routes.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigListParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigListResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigList('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
});
```

### Create a new AI Gateway Dynamic Route.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigPostParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigPostResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
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
```

### Delete an AI Gateway Dynamic Route.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigDeleteParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigDeleteResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigDelete('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
});
```

### Get an AI Gateway Dynamic Route.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigGetParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigGetResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigGet('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
});
```

### Update an AI Gateway Dynamic Route.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigUpdateParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigUpdateResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigUpdate('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
  name: 'Route Name',
});
```

### List all AI Gateway Dynamic Route Deployments.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigListDeploymentsParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigListDeploymentsResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigListDeployments('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
});
```

### Create a new AI Gateway Dynamic Route Deployment.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigPostDeploymentParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigPostDeploymentResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigPostDeployment('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
  version_id: '54442216',
});
```

### List all AI Gateway Dynamic Route Versions.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigListVersionsParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigListVersionsResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigListVersions('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
});
```

### Create a new AI Gateway Dynamic Route Version.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigPostVersionParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigPostVersionResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
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
```

### Get an AI Gateway Dynamic Route Version.

| Direction | Type |
| --- | --- |
| Request | [`AIGatewayDynamicRouteAigConfigGetVersionParams`](./src/resources/ai-gateway-dynamic-routes.ts) |
| Response | [`AIGatewayDynamicRouteAigConfigGetVersionResponse`](./src/resources/ai-gateway-dynamic-routes.ts) |

```ts
const aiGatewayDynamicRoute = await client.aiGatewayDynamicRoutes.aigConfigGetVersion('54442216', {
  account_id: '0d37909e38d3e99c29fa2cd343ac421a',
  gateway_id: '54442216',
  id: '54442216',
});
```

## `Account`

### Get AI Gateway logging state

Returns the canonical logging platform and migration availability for an account.

| Direction | Type |
| --- | --- |
| Response | [`AccountAigConfigGetLoggingStateResponse`](./src/resources/account.ts) |

```ts
const account = await client.account.aigConfigGetLoggingState('accountId');
```

### Migrate AI Gateway logging to Workers Observability

Irreversibly migrates an eligible account to Workers Observability logging.

| Direction | Type |
| --- | --- |
| Response | [`AccountAigConfigPatchLoggingStateResponse`](./src/resources/account.ts) |

```ts
const account = await client.account.aigConfigPatchLoggingState('accountId');
```

### Get build-minute availability

Return whether the account's build-minute allowance is exhausted and when it refreshes.

| Direction | Type |
| --- | --- |
| Response | [`AccountListLimitsResponse`](./src/resources/account.ts) |

```ts
const account = await client.account.listLimits('accountId');
```

## `AiSearchInstances`

### List AI Search instances.

List all AI Search instances in the account.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceListParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceListResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
  page: 1,
  per_page: 20,
  order_by: 'created_at',
  order_by_direction: 'desc',
});
```

### Create an AI Search instance.

Create a new AI Search instance with the given configuration.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceCreateParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceCreateResponse`](./src/resources/ai-search-instances.ts) |

```ts
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
```

### Delete an AI Search instance.

Permanently delete an AI Search instance and all its indexed data.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceDeleteParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceDeleteResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.delete('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Get an AI Search instance.

Retrieve the configuration and status of an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceFetchParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceFetchResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.fetch('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Update an AI Search instance.

Update the configuration of an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceUpdateParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceUpdateResponse`](./src/resources/ai-search-instances.ts) |

```ts
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
```

### Chat Completions

Performs a chat completion request against an AI Search instance, using indexed content as context for generating responses.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceChatCompletionParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceChatCompletionResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.chatCompletion('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  messages: [
    {
      content: '',
      role: 'system',
    },
  ],
});
```

### Search

Executes a semantic search query against an AI Search instance to find relevant indexed content.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceSearchParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceSearchResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.search('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Get instance statistics.

Retrieve usage and indexing statistics for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceStatsParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceStatsResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.stats('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### List AI Search instances.

List all AI Search instances in the account.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceListParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceListResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.namespaceList('name', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  page: 1,
  per_page: 20,
  order_by: 'created_at',
  order_by_direction: 'desc',
});
```

### Create an AI Search instance.

Create a new AI Search instance with the given configuration.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceCreateParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceCreateResponse`](./src/resources/ai-search-instances.ts) |

```ts
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
```

### Delete an AI Search instance.

Permanently delete an AI Search instance and all its indexed data.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceDeleteParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceDeleteResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.namespaceDelete('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Get an AI Search instance.

Retrieve the configuration and status of an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceFetchParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceFetchResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.namespaceFetch('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Update an AI Search instance.

Update the configuration of an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceUpdateParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceUpdateResponse`](./src/resources/ai-search-instances.ts) |

```ts
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
```

### Chat Completions

Performs a chat completion request against an AI Search instance, using indexed content as context for generating responses.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceChatCompletionParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceChatCompletionResponse`](./src/resources/ai-search-instances.ts) |

```ts
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
```

### Purge search cache.

Purges all cached search results for an AI Search instance. A new internal cache key is generated, immediately orphaning all prior cached entries.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespacePurgeCacheParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespacePurgeCacheResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.namespacePurgeCache('my-ai-search', {
  account_id: 'accountId',
  name: 'name',
});
```

### Search

Executes a semantic search query against an AI Search instance to find relevant indexed content.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceSearch2Params`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceSearch2Response`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.search2('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Get instance statistics.

Retrieve usage and indexing statistics for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstanceNamespaceStatsParams`](./src/resources/ai-search-instances.ts) |
| Response | [`AISearchInstanceNamespaceStatsResponse`](./src/resources/ai-search-instances.ts) |

```ts
const aiSearchInstance = await client.aiSearchInstances.namespaceStats('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

## `AiSearchInstancesJobs`

### List Jobs

Lists indexing jobs for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobListParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobListResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.list('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  page: 1,
  per_page: 20,
});
```

### Create new job

Creates a new indexing job for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobCreateParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobCreateResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.create('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Get a Job Details

Retrieves details for a specific AI Search indexing job.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobRetrieveParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobRetrieveResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.retrieve('jobId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Cancel an indexing job.

Cancel an in-progress indexing job for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobChangeStatusParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobChangeStatusResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.changeStatus('jobId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  action: 'cancel',
});
```

### List Job Logs

Lists log entries for an AI Search indexing job.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobListLogsParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobListLogsResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.listLogs('jobId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  page: 1,
  per_page: 20,
});
```

### List Jobs

Lists indexing jobs for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobNamespaceListParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobNamespaceListResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceList('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  page: 1,
  per_page: 20,
});
```

### Create new job

Creates a new indexing job for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobNamespaceCreateParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobNamespaceCreateResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceCreate('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Get a Job Details

Retrieves details for a specific AI Search indexing job.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobNamespaceGetParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobNamespaceGetResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceGet('jobId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Cancel an indexing job.

Cancel an in-progress indexing job for an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobNamespaceChangeStatusParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobNamespaceChangeStatusResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceChangeStatus('jobId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  action: 'cancel',
});
```

### List Job Logs

Lists log entries for an AI Search indexing job.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesJobNamespaceListLogsParams`](./src/resources/ai-search-instances-jobs.ts) |
| Response | [`AISearchInstancesJobNamespaceListLogsResponse`](./src/resources/ai-search-instances-jobs.ts) |

```ts
const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceListLogs('jobId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  page: 1,
  per_page: 20,
});
```

## `AiSearchNamespaces`

### List namespaces

List namespaces in the account, including their descriptions and creation times.

| Direction | Type |
| --- | --- |
| Request | [`AISearchNamespaceListParams`](./src/resources/ai-search-namespaces.ts) |
| Response | [`AISearchNamespaceListResponse`](./src/resources/ai-search-namespaces.ts) |

```ts
const aiSearchNamespace = await client.aiSearchNamespaces.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
  page: 1,
  per_page: 20,
});
```

### Create a namespace

Create a namespace for organizing AI Search instances.

| Direction | Type |
| --- | --- |
| Request | [`AISearchNamespaceCreateParams`](./src/resources/ai-search-namespaces.ts) |
| Response | [`AISearchNamespaceCreateResponse`](./src/resources/ai-search-namespaces.ts) |

```ts
const aiSearchNamespace = await client.aiSearchNamespaces.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
  name: '',
});
```

### Delete a namespace

Permanently delete a namespace. The namespace must be empty (no instances), and the default namespace cannot be deleted.

| Direction | Type |
| --- | --- |
| Request | [`AISearchNamespaceDeleteParams`](./src/resources/ai-search-namespaces.ts) |
| Response | [`AISearchNamespaceDeleteResponse`](./src/resources/ai-search-namespaces.ts) |

```ts
const aiSearchNamespace = await client.aiSearchNamespaces.delete('production', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Get a namespace

Retrieve a namespace and its description.

| Direction | Type |
| --- | --- |
| Request | [`AISearchNamespaceFetchParams`](./src/resources/ai-search-namespaces.ts) |
| Response | [`AISearchNamespaceFetchResponse`](./src/resources/ai-search-namespaces.ts) |

```ts
const aiSearchNamespace = await client.aiSearchNamespaces.fetch('production', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Update a namespace

Update the description and/or the public endpoint configuration of an existing namespace. The default namespace's description cannot be modified, but its public endpoint can.

| Direction | Type |
| --- | --- |
| Request | [`AISearchNamespaceUpdateParams`](./src/resources/ai-search-namespaces.ts) |
| Response | [`AISearchNamespaceUpdateResponse`](./src/resources/ai-search-namespaces.ts) |

```ts
const aiSearchNamespace = await client.aiSearchNamespaces.update('production', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Move an instance to a different namespace.

Moves an instance from its current namespace to the specified target namespace. Use 'default' with --destination-namespace to move the instance back to the default namespace. Fails with 400 if the target namespace already has an instance with the same id (ids must be unique within a namespace — the same id can exist in different namespaces).

| Direction | Type |
| --- | --- |
| Request | [`AISearchNamespaceMoveInstanceParams`](./src/resources/ai-search-namespaces.ts) |
| Response | [`AISearchNamespaceMoveInstanceResponse`](./src/resources/ai-search-namespaces.ts) |

```ts
const aiSearchNamespace = await client.aiSearchNamespaces.moveInstance('my-blog', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'production',
  new_namespace: 'staging',
});
```

## `AiSearchAccountSearch`

### Multi-Instance Chat Completions

Performs a chat completion request against multiple AI Search instances in parallel, merging retrieved content as context for generating a response.

| Direction | Type |
| --- | --- |
| Request | [`AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams`](./src/resources/ai-search-account-search.ts) |
| Response | [`AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse`](./src/resources/ai-search-account-search.ts) |

```ts
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
```

### Multi-Instance Search

Performs a semantic search query against multiple AI Search instances in parallel, merging the retrieved results into a single ranked response.

| Direction | Type |
| --- | --- |
| Request | [`AISearchAccountSearchSearchParams`](./src/resources/ai-search-account-search.ts) |
| Response | [`AISearchAccountSearchSearchResponse`](./src/resources/ai-search-account-search.ts) |

```ts
const aiSearchAccountSearch = await client.aiSearchAccountSearch.search('name', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  ai_search_options: {
    instance_ids: ['my-ai-search'],
  },
});
```

## `AiSearchInstancesItems`

### Items List.

Lists indexed items in an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceListParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceListResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceList('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  page: 1,
  per_page: 20,
  sort_by: 'status',
});
```

### Upload Item.

Uploads a file to a managed AI Search instance via multipart/form-data.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceUploadParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceUploadResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceUpload('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  file: new File(['file'], 'file'),
  wait_for_completion: false,
});
```

### Create or Update Item.

Creates or updates an indexed item in an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceCreateOrUpdateParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceCreateOrUpdateResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceCreateOrUpdate('my-ai-search', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  key: '',
  next_action: 'INDEX',
  wait_for_completion: false,
});
```

### Delete Item.

Deletes a file from a managed AI Search instance and triggers a reindex.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceDeleteParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceDeleteResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceDelete('itemId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Get Item.

Retrieves a specific indexed item from an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceGetParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceGetResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceGet('itemId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Sync Item.

Syncs an item to an AI Search instance index.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceSyncParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceSyncResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceSync('itemId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  next_action: 'INDEX',
  wait_for_completion: false,
});
```

### List Item Chunks.

Lists chunks for a specific item in an AI Search instance, including their text content.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceListChunksParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceListChunksResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceListChunks('itemId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  limit: 20,
  offset: 0,
});
```

### Download Item Content.

Downloads the raw file content for a specific item from the managed AI Search instance storage.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceGetContentParams`](./src/resources/ai-search-instances-items.ts) |

```ts
const response = await client.aiSearchInstancesItems.namespaceGetContent('itemId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
});
```

### Item Logs.

Lists processing logs for a specific item in an AI Search instance.

| Direction | Type |
| --- | --- |
| Request | [`AISearchInstancesItemNamespaceLogsParams`](./src/resources/ai-search-instances-items.ts) |
| Response | [`AISearchInstancesItemNamespaceLogsResponse`](./src/resources/ai-search-instances-items.ts) |

```ts
const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceLogs('itemId', {
  id: 'my-ai-search',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  name: 'name',
  limit: 50,
});
```

## `AiSearchTokens`

### List tokens

List stored AI Search credentials in the account without exposing their secrets.

| Direction | Type |
| --- | --- |
| Request | [`AISearchTokenListParams`](./src/resources/ai-search-tokens.ts) |
| Response | [`AISearchTokenListResponse`](./src/resources/ai-search-tokens.ts) |

```ts
const aiSearchToken = await client.aiSearchTokens.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
  page: 1,
  per_page: 20,
});
```

### Create a token

Create a stored Cloudflare credential for an AI Search instance to access its data source.

| Direction | Type |
| --- | --- |
| Request | [`AISearchTokenCreateParams`](./src/resources/ai-search-tokens.ts) |
| Response | [`AISearchTokenCreateResponse`](./src/resources/ai-search-tokens.ts) |

```ts
const aiSearchToken = await client.aiSearchTokens.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
  cf_api_id: 'a1b2c3d4e5f6',
  cf_api_key: 'abc123',
  legacy: true,
  name: 'my-token',
});
```

### Delete a token

Permanently delete a stored AI Search credential. Credentials in use by an instance cannot be deleted.

| Direction | Type |
| --- | --- |
| Request | [`AISearchTokenDeleteParams`](./src/resources/ai-search-tokens.ts) |
| Response | [`AISearchTokenDeleteResponse`](./src/resources/ai-search-tokens.ts) |

```ts
const aiSearchToken = await client.aiSearchTokens.delete('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Get a token

Retrieve a stored AI Search credential without exposing its secret.

| Direction | Type |
| --- | --- |
| Request | [`AISearchTokenFetchParams`](./src/resources/ai-search-tokens.ts) |
| Response | [`AISearchTokenFetchResponse`](./src/resources/ai-search-tokens.ts) |

```ts
const aiSearchToken = await client.aiSearchTokens.fetch('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### Update a token

Replace a stored AI Search credential and invalidate cached credentials for instances that use it.

| Direction | Type |
| --- | --- |
| Request | [`AISearchTokenUpdateParams`](./src/resources/ai-search-tokens.ts) |
| Response | [`AISearchTokenUpdateResponse`](./src/resources/ai-search-tokens.ts) |

```ts
const aiSearchToken = await client.aiSearchTokens.update('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  cf_api_id: 'a1b2c3d4e5f6',
  cf_api_key: 'abc123',
  legacy: true,
  name: 'my-token',
});
```

## `WorkersAi`

### Author Search

Searches Workers AI models by author or organization name.

| Direction | Type |
| --- | --- |
| Response | [`WorkersAISearchResponse`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.search('023e105f4ecef8ad9ca31a8372d0c353');
```

### Get Model Schema

Retrieves the input and output JSON schema definition for a Workers AI model.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIListModelSchemaParams`](./src/resources/workers-ai.ts) |
| Response | [`WorkersAIListModelSchemaResponse`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.listModelSchema('023e105f4ecef8ad9ca31a8372d0c353', {
  model: 'model',
});
```

### Model Search

Searches Workers AI models by name or description.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAISearch2Params`](./src/resources/workers-ai.ts) |
| Response | [`WorkersAISearch2Response`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.search2('023e105f4ecef8ad9ca31a8372d0c353', {
  per_page: 100,
  page: 1,
  task: '',
  author: '',
  hide_experimental: false,
  search: '',
  include_deprecated: false,
});
```

### Execute AI Model (Generic)

Execute an AI model by specifying the model name in the request body.

This endpoint provides a generic interface for running AI models where the model name is part of the request payload rather than the URL path. It supports all AI Gateway features including caching, custom headers, and request options.

Model-specific inputs available in [Cloudflare Docs](https://developers.cloudflare.com/workers-ai/models/).

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIPostRunGenericParams`](./src/resources/workers-ai.ts) |
| Response | [`WorkersAIPostRunGenericResponse`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.postRunGeneric('023e105f4ecef8ad9ca31a8372d0c353', {
  input: { prompt: 'Tell me a joke' },
  model: 'openai/gpt-5.5',
});
```

### Execute AI model

This endpoint provides users with the capability to run specific AI models on-demand.

By submitting the required input data, users can receive real-time predictions or results generated by the chosen AI
model. The endpoint supports various AI model types, ensuring flexibility and adaptability for diverse use cases.

Model specific inputs available in [Cloudflare Docs](https://developers.cloudflare.com/workers-ai/models/).

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIPostRunModelParams`](./src/resources/workers-ai.ts) |
| Response | [`WorkersAIPostRunModelResponse`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.postRunModel('modelName', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
});
```

### Task Search

Searches Workers AI models by task type (e.g., text-generation, embeddings).

| Direction | Type |
| --- | --- |
| Response | [`WorkersAISearch3Response`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.search3('023e105f4ecef8ad9ca31a8372d0c353');
```

### Convert Files into Markdown

Converts uploaded files into Markdown format using Workers AI.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIPostToMarkdownParams`](./src/resources/workers-ai.ts) |
| Response | [`WorkersAIPostToMarkdownResponse`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.postToMarkdown('023e105f4ecef8ad9ca31a8372d0c353', {
  files: [new File(['file'], 'file')],
});
```

### Get all converted formats supported

Lists all file formats supported for conversion to Markdown.

| Direction | Type |
| --- | --- |
| Response | [`WorkersAIListToMarkdownSupportedResponse`](./src/resources/workers-ai.ts) |

```ts
const workersAI = await client.workersAI.listToMarkdownSupported('023e105f4ecef8ad9ca31a8372d0c353');
```

## `WorkersAiFinetune`

### List Finetunes

Lists all fine-tuning jobs created by the account, including status and metrics.

| Direction | Type |
| --- | --- |
| Response | [`WorkersAIFinetuneListResponse`](./src/resources/workers-ai-finetune.ts) |

```ts
const workersAIFinetune = await client.workersAIFinetune.list('023e105f4ecef8ad9ca31a8372d0c353');
```

### Create a new Finetune

Creates a new fine-tuning job for a Workers AI model using custom training data.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIFinetuneCreateParams`](./src/resources/workers-ai-finetune.ts) |
| Response | [`WorkersAIFinetuneCreateResponse`](./src/resources/workers-ai-finetune.ts) |

```ts
const workersAIFinetune = await client.workersAIFinetune.create('023e105f4ecef8ad9ca31a8372d0c353', {
  model: '',
  name: '',
  public: false,
});
```

### List Public Finetunes

Lists publicly available fine-tuned models that can be used with Workers AI.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIFinetuneListPublicParams`](./src/resources/workers-ai-finetune.ts) |
| Response | [`WorkersAIFinetuneListPublicResponse`](./src/resources/workers-ai-finetune.ts) |

```ts
const workersAIFinetune = await client.workersAIFinetune.listPublic('023e105f4ecef8ad9ca31a8372d0c353', {
  limit: 20,
  offset: 0,
});
```

### Delete a Finetune

Delete a finetune. Any in-flight requests referencing the lora will fail after the files are deleted.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIFinetuneDeleteParams`](./src/resources/workers-ai-finetune.ts) |
| Response | [`WorkersAIFinetuneDeleteResponse`](./src/resources/workers-ai-finetune.ts) |

```ts
const workersAIFinetune = await client.workersAIFinetune.delete('bc451aef-f723-4b26-a6b2-901afd2e7a8a', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
});
```

### Upload a Finetune Asset

Uploads training data assets for a Workers AI fine-tuning job.

| Direction | Type |
| --- | --- |
| Request | [`WorkersAIFinetuneUploadAssetParams`](./src/resources/workers-ai-finetune.ts) |
| Response | [`WorkersAIFinetuneUploadAssetResponse`](./src/resources/workers-ai-finetune.ts) |

```ts
const workersAIFinetune = await client.workersAIFinetune.uploadAsset('bc451aef-f723-4b26-a6b2-901afd2e7a8a', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  file: new File(['file'], 'file'),
  file_name: '',
});
```

## `FinetuneAsset`

### Download a Finetune Asset

Returns a pre-signed R2 URL for downloading a finetune asset file.

| Direction | Type |
| --- | --- |
| Request | [`FinetuneAssetWorkersAIDownloadParams`](./src/resources/finetune-asset.ts) |
| Response | [`FinetuneAssetWorkersAIDownloadResponse`](./src/resources/finetune-asset.ts) |

```ts
const finetuneAsset = await client.finetuneAsset.workersAIDownload('adapter_model.safetensors', {
  account_id: '023e105f4ecef8ad9ca31a8372d0c353',
  finetune_id: 'bc451aef-f723-4b26-a6b2-901afd2e7a8a',
});
```

## `NotificationAlertTypes`

### Get Alert Types

Gets a list of all alert types for which an account is eligible.

```ts
const response = await client.notificationAlertTypes.list('accountId');
```

## `NotificationMechanismEligibility`

### Get delivery mechanism eligibility

Get a list of all delivery mechanism types for which an account is eligible.

```ts
const response = await client.notificationMechanismEligibility.listDelivery('accountId');
```

## `NotificationDestinationsWithPagerDuty`

### Delete PagerDuty Services

Deletes all the PagerDuty Services connected to the account.

```ts
const response = await client.notificationDestinationsWithPagerDuty.deleteServices('accountId');
```

### List PagerDuty services

Get a list of all configured PagerDuty services.

```ts
const response = await client.notificationDestinationsWithPagerDuty.listServices('accountId');
```

### Create PagerDuty integration token

Creates a new token for integrating with PagerDuty.

```ts
const response = await client.notificationDestinationsWithPagerDuty.connect('accountId');
```

### Connect PagerDuty

Links PagerDuty with the account using the integration token.

| Direction | Type |
| --- | --- |
| Request | [`NotificationDestinationsWithPagerDutyConnectTokenParams`](./src/resources/notification-destinations-with-pager-duty.ts) |

```ts
const response = await client.notificationDestinationsWithPagerDuty.connectToken('tokenId', {
  account_id: {},
});
```

## `NotificationWebhooks`

### List webhooks

Gets a list of all configured webhook destinations.

```ts
const response = await client.notificationWebhooks.list('accountId');
```

### Create a webhook

Creates a new webhook destination.

| Direction | Type |
| --- | --- |
| Request | [`NotificationWebhookCreateAParams`](./src/resources/notification-webhooks.ts) |

```ts
const response = await client.notificationWebhooks.createA('accountId', {
  name: {},
  url: {},
});
```

### Delete a webhook

Delete a configured webhook destination.

| Direction | Type |
| --- | --- |
| Request | [`NotificationWebhookDeleteAParams`](./src/resources/notification-webhooks.ts) |

```ts
const response = await client.notificationWebhooks.deleteA('webhookId', {
  account_id: {},
});
```

### Get a webhook

Get details for a single webhooks destination.

| Direction | Type |
| --- | --- |
| Request | [`NotificationWebhookRetrieveAParams`](./src/resources/notification-webhooks.ts) |

```ts
const response = await client.notificationWebhooks.retrieveA('webhookId', {
  account_id: {},
});
```

### Update a webhook

Update a webhook destination.

| Direction | Type |
| --- | --- |
| Request | [`NotificationWebhookUpdateAParams`](./src/resources/notification-webhooks.ts) |

```ts
const response = await client.notificationWebhooks.updateA('webhookId', {
  account_id: {},
  name: {},
  url: {},
});
```

## `NotificationHistory`

### List History

Gets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).

| Direction | Type |
| --- | --- |
| Request | [`NotificationHistoryListParams`](./src/resources/notification-history.ts) |

```ts
const response = await client.notificationHistory.list('accountId', {
  page: 1,
});
```

## `NotificationPolicies`

### List Notification policies

Get a list of all Notification policies.

```ts
const response = await client.notificationPolicies.list('accountId');
```

### Create a Notification policy

Creates a new Notification policy.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyCreateAParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.createA('accountId', {
  alert_type: {},
  enabled: {},
  mechanisms: {},
  name: {},
});
```

### Delete a Notification policy

Delete a Notification policy.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyDeleteAParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.deleteA('policyId', {
  account_id: {},
});
```

### Get a Notification policy

Get details for a single policy.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyRetrieveAParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.retrieveA('policyId', {
  account_id: {},
});
```

### Update a Notification policy

Update a Notification policy.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyUpdateAParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.updateA('policyId', {
  account_id: {},
});
```

### Show email unsubscribe details

Shows details for unsubscribing an email address from a notification policy.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyShowEmailUnsubscribeDetailsParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.showEmailUnsubscribeDetails('policyId', {
  account_id: {},
  email: 'user@example.com',
  token: 'token',
});
```

### Unsubscribe email from a Notification policy

Unsubscribes an email address from a notification policy.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyUnsubscribeEmailFromParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.unsubscribeEmailFrom('policyId', {
  account_id: {},
  email: 'user@example.com',
  token: 'token',
});
```

### Test a Notification policy

Send a test notification for a policy to verify delivery mechanisms are working as expected.

| Direction | Type |
| --- | --- |
| Request | [`NotificationPolicyTestAParams`](./src/resources/notification-policies.ts) |

```ts
const response = await client.notificationPolicies.testA('policyId', {
  account_id: {},
});
```

## `NotificationSilences`

### List Silences

Gets a list of silences for an account.

```ts
const response = await client.notificationSilences.list('accountId');
```

### Create Silences

Creates a new silence for an account.

| Direction | Type |
| --- | --- |
| Request | [`NotificationSilenceCreateParams`](./src/resources/notification-silences.ts) |

```ts
const response = await client.notificationSilences.create('accountId', {
  body: [{}],
});
```

### Update Silences

Updates existing silences for an account.

| Direction | Type |
| --- | --- |
| Request | [`NotificationSilenceUpdateParams`](./src/resources/notification-silences.ts) |

```ts
const response = await client.notificationSilences.update('accountId', {
  body: [{}],
});
```

### Delete Silence

Deletes an existing silence for an account.

| Direction | Type |
| --- | --- |
| Request | [`NotificationSilenceDeleteParams`](./src/resources/notification-silences.ts) |

```ts
const response = await client.notificationSilences.delete('silenceId', {
  account_id: {},
});
```

### Get Silence

Gets a specific silence for an account.

| Direction | Type |
| --- | --- |
| Request | [`NotificationSilenceRetrieveParams`](./src/resources/notification-silences.ts) |

```ts
const response = await client.notificationSilences.retrieve('silenceId', {
  account_id: {},
});
```

## `DataSecurity`

### Top integrations by content findings

Returns the top N integrations ranked by total content findings.

| Direction | Type |
| --- | --- |
| Request | [`DataSecurityContentFindingsTopNParams`](./src/resources/data-security.ts) |

```ts
const response = await client.dataSecurity.contentFindingsTopN('accountId', {
  filters: [],
  from: '2024-11-01T00:00:00Z',
  n: 10,
  to: '2024-11-08T00:00:00Z',
});
```

### Data security findings summary

Returns aggregate current-period and previous-period totals for CASB findings.

| Direction | Type |
| --- | --- |
| Request | [`DataSecurityFindingsSummaryParams`](./src/resources/data-security.ts) |

```ts
const response = await client.dataSecurity.findingsSummary('accountId', {
  filters: [],
  from: '2024-11-01T00:00:00Z',
  to: '2024-11-08T00:00:00Z',
});
```

### Data security findings timeseries

Returns merged time-bucketed CASB findings.

| Direction | Type |
| --- | --- |
| Request | [`DataSecurityFindingsTimeseriesParams`](./src/resources/data-security.ts) |

```ts
const response = await client.dataSecurity.findingsTimeseries('accountId', {
  filters: [],
  from: '2024-11-01T00:00:00Z',
  to: '2024-11-08T00:00:00Z',
});
```

## `ArtAnalytics`

### Query analytics summary

Returns aggregate summary stats for a dataset. Includes current-period and previous-period totals for trend comparison.

| Direction | Type |
| --- | --- |
| Request | [`ArtAnalyticQuerySummaryParams`](./src/resources/art-analytics.ts) |

```ts
const response = await client.artAnalytics.querySummary('access-logins', {
  account_id: 'accountId',
  body: {},
});
```

### Query analytics timeseries

Returns time-bucketed analytics data for a dataset. Includes time slots, each containing the requested stats, group-by dimensions, and resolution-controlled bucket size (e.g. `hour`, `day`).

| Direction | Type |
| --- | --- |
| Request | [`ArtAnalyticQueryTimeseriesParams`](./src/resources/art-analytics.ts) |

```ts
const response = await client.artAnalytics.queryTimeseries('shadow_it', {
  account_id: 'accountId',
  body: {},
});
```

### Query analytics top-N

Returns the top N results for a dataset by a specified stat. Includes an array of result rows, each containing the requested stats and group-by dimensions.

| Direction | Type |
| --- | --- |
| Request | [`ArtAnalyticQueryTopNParams`](./src/resources/art-analytics.ts) |

```ts
const response = await client.artAnalytics.queryTopN('gateway-http', {
  account_id: 'accountId',
  body: {},
});
```

## `AnalyticsEngine`

### Execute an Analytics Engine SQL query via query parameter

Executes a SQL query against Workers Analytics Engine data. Pass the SQL query as a query parameter. The response uses newline-delimited JSON (NDJSON) by default, or a single JSON object when the query includes a FORMAT JSON clause. Use the POST method for longer queries that may exceed URL length limits.

| Direction | Type |
| --- | --- |
| Request | [`AnalyticsEngineSQLQueryGetParams`](./src/resources/analytics-engine.ts) |

```ts
await client.analyticsEngine.sqlQueryGet('accountId', {
  query:
    "SELECT blob1, count() FROM my_dataset WHERE timestamp > NOW() - INTERVAL '1' DAY GROUP BY blob1 ORDER BY count() DESC LIMIT 10",
});
```

### Execute an Analytics Engine SQL query via request body

Executes a SQL query against Workers Analytics Engine data. Pass the SQL query in the request body as plain text. The response uses newline-delimited JSON (NDJSON) by default, or a single JSON object when the query includes a FORMAT JSON clause. Prefer this method for longer queries that may exceed URL length limits.

| Direction | Type |
| --- | --- |
| Request | [`AnalyticsEngineSQLQueryPostParams`](./src/resources/analytics-engine.ts) |

```ts
await client.analyticsEngine.sqlQueryPost('accountId', {
  body: 'body',
});
```

## `Artifacts`

### List namespaces

Lists Artifacts namespaces for an account.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactNamespacesListParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactNamespacesListResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.namespacesList('accountId', {
  limit: 100,
});
```

### Get a namespace

Returns an Artifacts namespace summary.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactNamespacesGetParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactNamespacesGetResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.namespacesGet('namespace', {
  account_id: 'accountId',
});
```

### List repositories

Lists repositories in a namespace.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposListParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposListResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposList('namespace', {
  account_id: 'accountId',
  limit: 50,
  sort: 'created_at',
  direction: 'desc',
});
```

### Create a repository

Creates a Git-compatible Artifacts repository in a namespace.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposCreateParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposCreateResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposCreate('namespace', {
  account_id: 'accountId',
  name: '',
});
```

### Delete a repository

Deletes a repository and schedules cleanup of its backing data.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposDeleteParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposDeleteResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposDelete('name', {
  account_id: 'accountId',
  namespace: 'namespace',
});
```

### Get a repository

Returns repository metadata.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposGetParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposGetResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposGet('name', {
  account_id: 'accountId',
  namespace: 'namespace',
});
```

### Read a Git blob

Returns raw bytes for an immutable Git blob object. Blob responses are cacheable forever by hash.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposBlobGetParams`](./src/resources/artifacts.ts) |

```ts
const response = await client.artifacts.reposBlobGet('hash', {
  account_id: 'accountId',
  namespace: 'namespace',
  name: 'name',
});
```

### Read a Git commit

Returns decoded metadata for an immutable Git commit object. Commit responses are cacheable forever by hash.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposCommitGetParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposCommitGetResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposCommitGet('hash', {
  account_id: 'accountId',
  namespace: 'namespace',
  name: 'name',
});
```

### Read a file

Returns raw bytes for a file resolved by ref and path.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposFileGetParams`](./src/resources/artifacts.ts) |

```ts
const response = await client.artifacts.reposFileGet('name', {
  account_id: 'accountId',
  namespace: 'namespace',
  ref: 'ref',
  path: 'path',
});
```

### Fork a repository

Forks a source repository into a new repository.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposForkParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposForkResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposFork('name', {
  account_id: 'accountId',
  namespace: 'namespace',
  name: '',
});
```

### Import a repository

Imports an HTTPS Git repository into an Artifacts repository.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposImportParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposImportResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposImport('name', {
  account_id: 'accountId',
  namespace: 'namespace',
  url: 'https://example.com',
});
```

### Read commit history

Returns commit metadata walking backwards from a ref, branch, tag, or HEAD.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposLogGetParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposLogGetResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposLogGet('name', {
  account_id: 'accountId',
  namespace: 'namespace',
});
```

### Read a raw file with content type

Returns file bytes resolved by ref and path, with a sniffed content type and browser-safe response headers.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposRawGetParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposRawGetResponse`](./src/resources/artifacts.ts) |

```ts
const response = await client.artifacts.reposRawGet('path', {
  account_id: 'accountId',
  namespace: 'namespace',
  name: 'name',
  ref: 'ref',
});
```

### List repository tokens

Lists tokens for a repository.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactRepoTokensListParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactRepoTokensListResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.repoTokensList('name', {
  account_id: 'accountId',
  namespace: 'namespace',
  state: 'active',
  page: 1,
  per_page: 30,
});
```

### Read a Git tree

Returns decoded entries for an immutable Git tree object. Tree responses are cacheable forever by hash.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactReposTreeGetParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactReposTreeGetResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.reposTreeGet('hash', {
  account_id: 'accountId',
  namespace: 'namespace',
  name: 'name',
});
```

### Create a repository token

Creates a scoped Git token for a repository.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactTokensCreateParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactTokensCreateResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.tokensCreate('namespace', {
  account_id: 'accountId',
  repo: '',
});
```

### Revoke a token

Revokes an Artifacts repository token.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactTokensRevokeParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactTokensRevokeResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.tokensRevoke('id', {
  account_id: 'accountId',
  namespace: 'namespace',
});
```

## `AuditLogs`

### Get account audit logs

Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.

| Direction | Type |
| --- | --- |
| Request | [`AuditLogListAccountParams`](./src/resources/audit-logs.ts) |

```ts
const response = await client.auditLogs.listAccount('accountId', {
  direction: 'desc',
  per_page: 100,
  page: 1,
  hide_user_logs: false,
});
```

## `AutoRagRagSearch`

### AI Search

Runs an AI Search query against an AutoRAG.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagRagSearchAutoragConfigAIParams`](./src/resources/auto-rag-rag-search.ts) |
| Response | [`AutoRagRagSearchAutoragConfigAIResponse`](./src/resources/auto-rag-rag-search.ts) |

```ts
const autoRagRagSearch = await client.autoRagRagSearch.autoragConfigAI('my-rag', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  max_num_results: 10,
  query: '',
  ranking_options: {},
  rewrite_query: false,
  stream: false,
});
```

### Search

Searches an AutoRAG.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagRagSearchSearchParams`](./src/resources/auto-rag-rag-search.ts) |
| Response | [`AutoRagRagSearchSearchResponse`](./src/resources/auto-rag-rag-search.ts) |

```ts
const autoRagRagSearch = await client.autoRagRagSearch.search('my-rag', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  max_num_results: 10,
  query: '',
  ranking_options: {},
  rewrite_query: false,
});
```

## `AutoRagRag`

### Files

Lists files indexed by an AutoRAG.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagRagAutoragConfigFilesParams`](./src/resources/auto-rag-rag.ts) |
| Response | [`AutoRagRagAutoragConfigFilesResponse`](./src/resources/auto-rag-rag.ts) |

```ts
const autoRagRag = await client.autoRagRag.autoragConfigFiles('my-rag', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  page: 1,
  per_page: 20,
});
```

### Sync

Starts synchronization for an AutoRAG.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagRagAutoragConfigSyncParams`](./src/resources/auto-rag-rag.ts) |
| Response | [`AutoRagRagAutoragConfigSyncResponse`](./src/resources/auto-rag-rag.ts) |

```ts
const autoRagRag = await client.autoRagRag.autoragConfigSync('my-rag', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

## `AutoRagJobs`

### List Jobs

Lists jobs for an AutoRAG.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagJobAutoragConfigListParams`](./src/resources/auto-rag-jobs.ts) |
| Response | [`AutoRagJobAutoragConfigListResponse`](./src/resources/auto-rag-jobs.ts) |

```ts
const autoRagJob = await client.autoRagJobs.autoragConfigList('my-rag', {
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  page: 1,
  per_page: 20,
});
```

### Get a Job Details

Returns details for an AutoRAG job.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagJobAutoragConfigGetParams`](./src/resources/auto-rag-jobs.ts) |
| Response | [`AutoRagJobAutoragConfigGetResponse`](./src/resources/auto-rag-jobs.ts) |

```ts
const autoRagJob = await client.autoRagJobs.autoragConfigGet('jobId', {
  id: 'my-rag',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
});
```

### List Job Logs

Lists logs for an AutoRAG job.

| Direction | Type |
| --- | --- |
| Request | [`AutoRagJobAutoragConfigListLogsParams`](./src/resources/auto-rag-jobs.ts) |
| Response | [`AutoRagJobAutoragConfigListLogsResponse`](./src/resources/auto-rag-jobs.ts) |

```ts
const autoRagJob = await client.autoRagJobs.autoragConfigListLogs('jobId', {
  id: 'my-rag',
  account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
  page: 1,
  per_page: 20,
});
```

## `BillableUsage`

### Get Account Billable Usage (Version 1, Alpha)

Returns billable usage data for the account.
When no query parameters are provided, returns usage for the current
billing period.

```ts
const response = await client.billableUsage.listV1Account('accountId');
```

### Get Account Billable Usage Info (Version 1, Alpha)

Returns high-level usage information for the account, including coverage,
and subscription metadata.

```ts
const response = await client.billableUsage.listV1AccountInfo('accountId');
```

## `BillableUsageV2`

### Get Account Usage (Version 2, Alpha, Restricted)

Returns cost and usage data for a single Cloudflare account, aligned
with the [FinOps FOCUS v1.3](https://focus.finops.org/focus-specification/v1-3/)
Cost and Usage dataset specification.

Each record represents one billable metric for one account on one day.
This includes all metered usage, including usage that falls within
free-tier allowances and may result in zero cost.

**Note:** Cost and pricing fields are not yet populated and
will be absent from responses until billing integration is complete.

When `from` and `to` are omitted, defaults to the start of the current
month through today. The maximum date range is 31 days.

```ts
const response = await client.billableUsageV2.listAccount('accountId');
```

### Query Account Usage (Version 2, Alpha, Restricted)

Returns cost and usage data for a single Cloudflare account, aligned
with the [FinOps FOCUS v1.3](https://focus.finops.org/focus-specification/v1-3/)
Cost and Usage dataset specification.

This is the filterable counterpart to `GET` on the same path. It is a
read-only operation and requires only the `#billing:read` permission;
`POST` is used so that filter criteria can be supplied in a request body
rather than in the query string.

Each record represents one billable metric for one account on one day.
This includes all metered usage, including usage that falls within
free-tier allowances and may result in zero cost.

**Note:** Cost and pricing fields are not yet populated and
will be absent from responses until billing integration is complete.

The request body is optional. When it is omitted, or when `TimePeriod`
is omitted, the range defaults to the start of the current month through
today. The maximum date range is 31 days.

Filters of different kinds are combined with AND. Values within one tag
filter are combined with OR. Filter values that do not match usage
produce an empty result set.

Results can be grouped by up to two customer resource-tag keys. Grouped
values are returned in the `Tags` field. Usage without a requested tag
remains in an untagged group, with that key omitted from `Tags`.

Requests using tag filtering or grouping return HTTP 400 when tag-aware
usage data is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`BillableUsageV2QueryAccountParams`](./src/resources/billable-usage-v2.ts) |

```ts
const response = await client.billableUsageV2.queryAccount('accountId');
```

## `AccountBilling`

### Get Account Bad Debt

Gets bad debt information for an account, including outstanding invoices and total debt amount.

```ts
const response = await client.accountBilling.listBadDebt('accountId');
```

### Get Account Credits

Gets the credit balance and eligibility for an account.

```ts
const response = await client.accountBilling.listCredits('accountId');
```

### Create Payment Intent for Billing Profile

Creates a Stripe payment intent for adding or updating a payment method on the account's billing profile. Returns a client secret for frontend payment method collection.

```ts
const response = await client.accountBilling.createPaymentIntent('accountId');
```

### Get Unpaid Invoices

Gets unpaid invoice information for an account.

```ts
const response = await client.accountBilling.listUnpaidInvoices('accountId');
```

### Create Setup Intent

Creates a Stripe setup intent for adding a payment method to an account. Returns a client secret for frontend payment method collection.

```ts
const response = await client.accountBilling.createSetupIntent('accountId');
```

## `AccountBillingHistory`

### Get Account Billing History

Gets the billing history for an account.

| Direction | Type |
| --- | --- |
| Request | [`AccountBillingHistoryListParams`](./src/resources/account-billing-history.ts) |

```ts
const response = await client.accountBillingHistory.list('accountId', {
  page: 1,
  per_page: 20,
});
```

## `AccountBillingProfile`

### Delete Billing Profile

Deletes the billing profile for an account.

```ts
await client.accountBillingProfile.delete('accountId');
```

### Get Billing Profile

Gets the current billing profile for the account.

```ts
const response = await client.accountBillingProfile.list('accountId');
```

### Update Billing Email

Updates the billing email addresses and preferred locale for an account.

| Direction | Type |
| --- | --- |
| Request | [`AccountBillingProfileUpdateEmailParams`](./src/resources/account-billing-profile.ts) |

```ts
const response = await client.accountBillingProfile.updateEmail('accountId', {});
```

### Create Billing Profile

Creates a billing profile for an account.

| Direction | Type |
| --- | --- |
| Request | [`AccountBillingProfileCreateParams`](./src/resources/account-billing-profile.ts) |

```ts
const response = await client.accountBillingProfile.create('accountId', {});
```

### Update Billing Profile

Updates the billing profile for an account.

| Direction | Type |
| --- | --- |
| Request | [`AccountBillingProfileUpdateParams`](./src/resources/account-billing-profile.ts) |

```ts
const response = await client.accountBillingProfile.update('accountId', {});
```

## `UsageAnalytics`

### Get account billing usage

Retrieve billing usage analytics for an account. Returns time-series data for all billable product metrics including Stream, Media (Images), Rate Limiting, Load Balancing, Argo, Workers, Workers KV, Image Resizing, and Spectrum.

```ts
const response = await client.usageAnalytics.listAccountBilling('accountId');
```

## `BotnetThreatFeed`

### Get daily report

Gets all the data the botnet tracking database has for a given ASN registered to user account for given date. If no date is given, it will return results for the previous day.

| Direction | Type |
| --- | --- |
| Request | [`BotnetThreatFeedListDayReportParams`](./src/resources/botnet-threat-feed.ts) |
| Response | [`BotnetThreatFeedListDayReportResponse`](./src/resources/botnet-threat-feed.ts) |

```ts
const botnetThreatFeed = await client.botnetThreatFeed.listDayReport('asnId', {
  account_id: {},
});
```

### Get full report

Gets all the data the botnet threat feed tracking database has for a given ASN registered to user account.

| Direction | Type |
| --- | --- |
| Request | [`BotnetThreatFeedListFullReportParams`](./src/resources/botnet-threat-feed.ts) |
| Response | [`BotnetThreatFeedListFullReportResponse`](./src/resources/botnet-threat-feed.ts) |

```ts
const botnetThreatFeed = await client.botnetThreatFeed.listFullReport('asnId', {
  account_id: {},
});
```

### Get list of ASNs

Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.

| Direction | Type |
| --- | --- |
| Response | [`BotnetThreatFeedListASNResponse`](./src/resources/botnet-threat-feed.ts) |

```ts
const botnetThreatFeed = await client.botnetThreatFeed.listASN('accountId');
```

### Delete an ASN

Delete an ASN from botnet threat feed for a given user.

| Direction | Type |
| --- | --- |
| Request | [`BotnetThreatFeedDeleteASNParams`](./src/resources/botnet-threat-feed.ts) |
| Response | [`BotnetThreatFeedDeleteASNResponse`](./src/resources/botnet-threat-feed.ts) |

```ts
const botnetThreatFeed = await client.botnetThreatFeed.deleteASN('asnId', {
  account_id: {},
});
```

## `BrandProtection`

### Read all alerts on submitted domains

Return all alerts on submitted domains

```ts
await client.brandProtection.listAccountsAccountAlerts('accountId');
```

### Update alerts on submitted domains by ID

Return a success message after updating alerts on submitted domains by ID

```ts
await client.brandProtection.patchAccountsAccountIDAlerts('accountId');
```

### Update verification statuses of tracked URLs to awaiting by ID

Return a success message after updating verification statuses of tracked URLs to awaiting by ID

```ts
await client.brandProtection.patchAccountsAccountIDAlertsClear('accountId');
```

### Update verification statuses of tracked URLs to disproven by ID

Return a success message after updating verification statuses of tracked URLs to disproven by ID

```ts
await client.brandProtection.patchAccountsAccountIDAlertsRefute('accountId');
```

### Update verification statuses of tracked URLs to confirmed by ID

Return a success message after updating verification statuses of tracked URLs to confirmed by ID

```ts
await client.brandProtection.patchAccountsAccountIDAlertsVerify('accountId');
```

### Delete brands by ID

Return a success message after deleting brands by ID

```ts
await client.brandProtection.deleteAccountsAccountID('accountId');
```

### Read all brands

Return all brands

```ts
await client.brandProtection.listAccountsAccount('accountId');
```

### Create new brands

Return new brands

```ts
await client.brandProtection.postAccountsAccountID('accountId');
```

### Delete patterns for brands by ID

Return a success message after deleting patterns for brands by ID

```ts
await client.brandProtection.deleteAccountsAccountIDPatterns('accountId');
```

### Read patterns for brands by ID

Return patterns for brands based on ID

```ts
await client.brandProtection.listAccountsAccountPatterns('accountId');
```

### Create new patterns for brands by ID

Return a success message after creating new patterns for brands by ID

```ts
await client.brandProtection.postAccountsAccountIDPatterns('accountId');
```

### Update verification statuses of submitted URLs to awaiting by ID

Return a success message after updating verification statuses of submitted URLs to awaiting by ID

```ts
await client.brandProtection.patchAccountsAccountIDClear('accountId');
```

### Read submitted domains by ID

Return submitted domains based on ID

```ts
await client.brandProtection.listAccountsAccountDomainInfo('accountId');
```

### Read recent URL submissions

Return recent URL submissions

```ts
await client.brandProtection.listAccountsAccountRecentSubmissions('accountId');
```

### Update verification statuses of submitted URLs to disproven by ID

Return a success message after updating verification statuses of submitted URLs to disproven by ID

```ts
await client.brandProtection.patchAccountsAccountIDRefute('accountId');
```

### Read URL submissions by ID

Return URL submissions based on ID

```ts
await client.brandProtection.listAccountsAccountSubmissionInfo('accountId');
```

### Create new URL submissions

Return new URL submissions

```ts
const response = await client.brandProtection.postAccountsAccountIDSubmit('accountId');
```

### Read submitted domains by pattern

Return submitted domains based on pattern

```ts
await client.brandProtection.listAccountsAccountTrackedDomains('accountId');
```

### Read submitted URLs by ID

Return submitted URLs based on ID

```ts
const response = await client.brandProtection.listAccountsAccountURLInfo('accountId');
```

### Update verification statuses of submitted URLs to confirmed by ID

Return a success message after updating verification statuses of submitted URLs to confirmed by ID

```ts
await client.brandProtection.patchAccountsAccountIDVerify('accountId');
```

## `LogoMatch`

### Read matches for logo queries by ID

Return matches for logo queries based on ID

| Direction | Type |
| --- | --- |
| Request | [`LogoMatchListAccountsAccountBrandProtectionMatchesParams`](./src/resources/logo-match.ts) |

```ts
const response = await client.logoMatch.listAccountsAccountBrandProtectionMatches('accountId');
```

### Download matches for logo queries by ID

Return matches as CSV for logo queries based on ID

| Direction | Type |
| --- | --- |
| Request | [`LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams`](./src/resources/logo-match.ts) |

```ts
const response = await client.logoMatch.listAccountsAccountBrandProtectionMatchesDownload('accountId');
```

### Read all saved logo queries

Return all saved logo queries

```ts
await client.logoMatch.listAccountsAccountBrandProtection('accountId');
```

### Create new saved logo queries from image files

Return new saved logo queries created from image files

| Direction | Type |
| --- | --- |
| Request | [`LogoMatchPostAccountsAccountIDBrandProtectionParams`](./src/resources/logo-match.ts) |

```ts
const response = await client.logoMatch.postAccountsAccountIDBrandProtection('accountId', {
  body: {},
});
```

### Delete saved logo queries by ID

Return a success message after deleting saved logo queries by ID

| Direction | Type |
| --- | --- |
| Request | [`LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams`](./src/resources/logo-match.ts) |

```ts
await client.logoMatch.deleteAccountsAccountIDBrandProtectionID('logoId', {
  account_id: 'accountId',
});
```

### Read saved logo queries by ID

Return saved logo queries based on ID

| Direction | Type |
| --- | --- |
| Request | [`LogoMatchRetrieveAccountsAccountBrandProtectionParams`](./src/resources/logo-match.ts) |

```ts
await client.logoMatch.retrieveAccountsAccountBrandProtection('logoId', {
  account_id: 'accountId',
});
```

### Create new logo queries from image files

Return new logo queries created from image files

```ts
await client.logoMatch.postAccountsAccountIDBrandProtectionScan('accountId');
```

### Create new logo queries from URLs

Return new logo queries created from URLs

```ts
await client.logoMatch.postAccountsAccountIDBrandProtectionScanPage('accountId');
```

## `DomainSearch`

### Read matches for string queries by ID

Return matches for string queries based on ID

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchListAccountsAccountBrandProtectionMatchesParams`](./src/resources/domain-search.ts) |

```ts
const response = await client.domainSearch.listAccountsAccountBrandProtectionMatches('accountId');
```

### Download matches for string queries by ID

Return matches as CSV for string queries based on ID

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams`](./src/resources/domain-search.ts) |

```ts
const response = await client.domainSearch.listAccountsAccountBrandProtectionMatchesDownload('accountId');
```

### Delete saved string queries by ID

Return a success message after deleting saved string queries by ID

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams`](./src/resources/domain-search.ts) |

```ts
await client.domainSearch.deleteAccountsAccountIDBrandProtectionQueries('accountId');
```

### Read string queries by ID

Return string queries based on ID

```ts
await client.domainSearch.listAccountsAccountBrandProtectionQueries('accountId');
```

### Update saved string queries by ID

Update a saved query's tag, scan setting, or string_matches (pattern). When string_matches is provided, the query parameters and hash are updated. At least one of tag, scan, or string_matches is required.

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams`](./src/resources/domain-search.ts) |

```ts
await client.domainSearch.patchAccountsAccountIDBrandProtectionQueries('accountId', {});
```

### Create new saved string queries

Return a success message after creating new saved string queries

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams`](./src/resources/domain-search.ts) |

```ts
await client.domainSearch.postAccountsAccountIDBrandProtectionQueries('accountId', {
  body: {},
});
```

### Create new saved string queries in bulk

Return a success message after creating new saved string queries in bulk

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams`](./src/resources/domain-search.ts) |

```ts
await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesBulk('accountId', {});
```

### Dismiss a match for a saved string query

Hide a matched domain from the default view of a saved query's results. Dismissal is scoped to the calling account.

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams`](./src/resources/domain-search.ts) |

```ts
await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismiss(1, {
  account_id: 'accountId',
  query_id: 1,
});
```

### Undismiss a match for a saved string query

Restore a previously dismissed matched domain to the default view. Dismissal is scoped to the calling account.

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams`](./src/resources/domain-search.ts) |

```ts
await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismiss(1, {
  account_id: 'accountId',
  query_id: 1,
});
```

### Create new string queries

Return new string queries

```ts
await client.domainSearch.search('accountId');
```

### Read the total number of saved string queries

Return the total number of saved string queries

```ts
await client.domainSearch.listAccountsAccountBrandProtectionTotalQueries('accountId');
```

## `BrowserExtensionConfig`

### Delete browser extension configuration

Deletes the browser extension configuration for an account.
The shard mapping is preserved and not deleted.

| Direction | Type |
| --- | --- |
| Request | [`BrowserExtensionConfigAccountsDeleteParams`](./src/resources/browser-extension-config.ts) |

```ts
const response = await client.browserExtensionConfig.accountsDelete('accountId');
```

### Get browser extension configuration

Returns the browser extension configuration for an account.

| Direction | Type |
| --- | --- |
| Request | [`BrowserExtensionConfigAccountsGetParams`](./src/resources/browser-extension-config.ts) |

```ts
const response = await client.browserExtensionConfig.accountsGet('accountId');
```

### Create browser extension configuration

Creates the browser extension configuration for an account.

| Direction | Type |
| --- | --- |
| Request | [`BrowserExtensionConfigAccountsPostParams`](./src/resources/browser-extension-config.ts) |

```ts
const response = await client.browserExtensionConfig.accountsPost('accountId', {
  body: {},
});
```

### Update browser extension configuration

Replaces the browser extension configuration for an account.
The configuration must already exist. The shard mapping is immutable.

| Direction | Type |
| --- | --- |
| Request | [`BrowserExtensionConfigAccountsPutParams`](./src/resources/browser-extension-config.ts) |

```ts
const response = await client.browserExtensionConfig.accountsPut('accountId', {
  body: {},
});
```

## `BrowserExtensionInventories`

### List browser extension inventories

Returns the installed extension inventory for each registered browser
extension device in the account. Each device reports its inventory
periodically; this endpoint returns the latest known snapshot per device.

Results are paginated by cursor. Pass the `cursor` from a previous
response to fetch the next page. `per_page` controls page size
(default 50, max 200).

| Direction | Type |
| --- | --- |
| Request | [`BrowserExtensionInventoryAccountsListParams`](./src/resources/browser-extension-inventories.ts) |

```ts
const response = await client.browserExtensionInventories.accountsList('accountId', {
  per_page: 50,
});
```

### Get a single browser extension inventory

Returns the installed extension inventory for a single registered browser
extension device.

| Direction | Type |
| --- | --- |
| Request | [`BrowserExtensionInventoryAccountsGetParams`](./src/resources/browser-extension-inventories.ts) |

```ts
const response = await client.browserExtensionInventories.accountsGet('registrationId', {
  account_id: 'accountId',
});
```

## `Brapi`

### Get accessibility tree page

Returns the page's accessibility tree. Use `interestingOnly` to only return semantically meaningful nodes; use `root` to scope the tree to a CSS-selector-anchored subtree. Control page loading with `gotoOptions` and `waitFor*` options.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostAccessibilityTreeParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostAccessibilityTreeResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postAccessibilityTree('accountId', {
  cacheTTL: 5,
  gotoOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Get HTML content.

Fetches rendered HTML content from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostContentParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostContentResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postContent('accountId', {
  cacheTTL: 5,
  gotoOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Crawl websites.

Starts a crawl job for the provided URL and its children. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostCrawlParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostCrawlResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postCrawl('accountId', {
  cacheTTL: 5,
});
```

### Cancel a crawl job.

Cancels an ongoing crawl job by setting its status to cancelled and stopping all queued URLs.

| Direction | Type |
| --- | --- |
| Request | [`BrapiDeleteCancelCrawlParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiDeleteCancelCrawlResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.deleteCancelCrawl('jobId', {
  account_id: 'accountId',
});
```

### Get crawl result.

Returns the result of a crawl job.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveCrawlResultParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiRetrieveCrawlResultResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.retrieveCrawlResult('jobId', {
  account_id: 'accountId',
  cacheTTL: 5,
  cursor: 0,
  limit: 50,
});
```

### Acquire and connect to browser session.

Acquires and establishes a WebSocket connection to a browser session. Session guardrails may be supplied in the `cf-brapi-guardrails` header as base64url-encoded JSON of the same `guardrails` object the POST body accepts (for example `{"allowedDomains":["*.example.com"]}`).

| Direction | Type |
| --- | --- |
| Request | [`BrapiListDevtoolsBrowserAcquireParams`](./src/resources/brapi/brapi.ts) |

```ts
const connection = client.brapi.listDevtoolsBrowserAcquire('accountId', {
  keep_alive: 60000,
  lab: false,
  recording: false,
});

try {
  for await (const message of connection) {
    console.log(message);
  }
} finally {
  connection.close();
}
```

### Get a browser session ID.

Acquires a browser and returns its session ID and websocket URL. Optionally accepts a JSON body with session guardrails to restrict outbound HTTP/S traffic.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostDevtoolsAcquireParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostDevtoolsAcquireResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postDevtoolsAcquire('accountId', {
  keep_alive: 60000,
  lab: false,
  targets: false,
  liveViewUrlExpiresInMs: 300000,
  recording: false,
});
```

### Close browser session.

Closes an existing browser session.

| Direction | Type |
| --- | --- |
| Request | [`BrapiDeleteDevtoolsBrowserDeleteParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiDeleteDevtoolsBrowserDeleteResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.deleteDevtoolsBrowserDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Connect to browser session.

Establishes a WebSocket connection to an existing browser session.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveDevtoolsBrowserParams`](./src/resources/brapi/brapi.ts) |

```ts
const connection = client.brapi.retrieveDevtoolsBrowser('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  keep_alive: 60000,
  lab: false,
  recording: false,
});

try {
  for await (const message of connection) {
    console.log(message);
  }
} finally {
  connection.close();
}
```

### List targets.

Returns a list of all debuggable targets including tabs, pages, service workers, and other browser contexts.

| Direction | Type |
| --- | --- |
| Request | [`BrapiListDevtoolsJsonParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiListDevtoolsJsonResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.listDevtoolsJson('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  liveViewUrlExpiresInMs: 300000,
});
```

### Activate a browser target.

Activates (brings to front) a specific browser target by its ID.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveDevtoolsJsonActivateParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiRetrieveDevtoolsJsonActivateResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.retrieveDevtoolsJsonActivate('targetId', {
  session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  account_id: 'accountId',
});
```

### Close a browser target.

Closes a specific browser target (tab, page, etc.) by its ID. Returns 'Target is closing' on success or an error if the target is not found.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveDevtoolsJsonCloseParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiRetrieveDevtoolsJsonCloseResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.retrieveDevtoolsJsonClose('targetId', {
  session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  account_id: 'accountId',
});
```

### List targets.

Returns a list of all debuggable targets including tabs, pages, service workers, and other browser contexts.

| Direction | Type |
| --- | --- |
| Request | [`BrapiListDevtoolsJsonListParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiListDevtoolsJsonListResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.listDevtoolsJsonList('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  liveViewUrlExpiresInMs: 300000,
});
```

### Get a target by ID.

Returns the debuggable target with the given ID.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveDevtoolsJsonTargetParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiRetrieveDevtoolsJsonTargetResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.retrieveDevtoolsJsonTarget('targetId', {
  account_id: 'accountId',
  session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Open a new browser tab.

Opens a new tab in the browser. Optionally specify a URL to navigate to.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPutDevtoolsJsonNewParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPutDevtoolsJsonNewResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.putDevtoolsJsonNew('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  liveViewUrlExpiresInMs: 300000,
});
```

### Get Chrome DevTools Protocol schema.

Returns the complete Chrome DevTools Protocol schema including all domains, commands, events, and types. This schema describes the entire CDP API surface.

| Direction | Type |
| --- | --- |
| Request | [`BrapiListDevtoolsJsonProtocolParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiListDevtoolsJsonProtocolResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.listDevtoolsJsonProtocol('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Get browser version metadata.

| Direction | Type |
| --- | --- |
| Request | [`BrapiListDevtoolsJsonVersionParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiListDevtoolsJsonVersionResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.listDevtoolsJsonVersion('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Mint live view URLs for a browser session

Generates time-limited URLs to view a remote browser session. Set `guardrails: { mode: 'readonly' }` to create a view-only link.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostDevtoolsLiveViewParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostDevtoolsLiveViewResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postDevtoolsLiveView('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  expiresInMs: 300000,
  mode: 'devtools',
});
```

### Connect to a specific Chrome DevTools page.

Establishes a WebSocket connection to a specific Chrome DevTools target or page.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveDevtoolsPageParams`](./src/resources/brapi/brapi.ts) |

```ts
const connection = client.brapi.retrieveDevtoolsPage('targetId', {
  account_id: 'accountId',
  session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});

try {
  for await (const message of connection) {
    console.log(message);
  }
} finally {
  connection.close();
}
```

### List sessions.

List active browser sessions.

| Direction | Type |
| --- | --- |
| Request | [`BrapiListDevtoolsSessionListParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiListDevtoolsSessionListResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.listDevtoolsSessionList('accountId', {
  limit: 200,
  offset: 0,
});
```

### Get session details.

Get details for a specific browser session.

| Direction | Type |
| --- | --- |
| Request | [`BrapiRetrieveDevtoolsSessionDetailsParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiRetrieveDevtoolsSessionDetailsResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.retrieveDevtoolsSessionDetails('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Get json.

Gets json from a webpage from a provided URL or HTML. Pass `prompt` or `schema` in the body. Control page loading with `gotoOptions` and `waitFor*` options.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostJsonParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostJsonResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postJson('accountId', {
  cacheTTL: 5,
  gotoOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Get Links.

Get links from a web page.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostLinksParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostLinksResponse`](./src/resources/brapi/brapi.ts) |

```ts
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
```

### Get markdown.

Gets markdown of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostMarkdownParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostMarkdownResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postMarkdown('accountId', {
  cacheTTL: 5,
  gotoOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Get PDF.

Fetches rendered PDF from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostPdfParams`](./src/resources/brapi/brapi.ts) |

```ts
const response = await client.brapi.postPdf('accountId', {
  cacheTTL: 5,
  gotoOptions: {},
  pdfOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Scrape elements.

Get meta attributes like height, width, text and others of selected elements.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostScrapeParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostScrapeResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postScrape('accountId', {
  cacheTTL: 5,
  elements: [{ selector: 'h1' }],
  gotoOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Get screenshot.

Takes a screenshot of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostScreenshotParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostScreenshotResponse`](./src/resources/brapi/brapi.ts) |

```ts
const brapi = await client.brapi.postScreenshot('accountId', {
  cacheTTL: 5,
  gotoOptions: {},
  screenshotOptions: {},
  url: 'https://www.example.com/',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  viewport: { height: 1080, width: 1920 },
});
```

### Get HTML content and screenshot.

Returns the page's HTML content and screenshot. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.

| Direction | Type |
| --- | --- |
| Request | [`BrapiPostSnapshotParams`](./src/resources/brapi/brapi.ts) |
| Response | [`BrapiPostSnapshotResponse`](./src/resources/brapi/brapi.ts) |

```ts
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
```

## `Builds`

### Get builds by Worker version

Retrieve builds associated with one or more Worker version IDs.

| Direction | Type |
| --- | --- |
| Request | [`BuildListVersionParams`](./src/resources/builds.ts) |
| Response | [`BuildListVersionResponse`](./src/resources/builds.ts) |

```ts
const build = await client.builds.listVersion('accountId', {
  version_ids: {},
});
```

### Get latest builds by script IDs

Retrieve the most recent builds for multiple worker scripts

| Direction | Type |
| --- | --- |
| Request | [`BuildListLatestScriptsParams`](./src/resources/builds.ts) |
| Response | [`BuildListLatestScriptsResponse`](./src/resources/builds.ts) |

```ts
const build = await client.builds.listLatestScripts('accountId', {
  external_script_ids: {},
});
```

### Get a Workers build

Retrieve status, outcome, timestamps, trigger settings, and source metadata for a build UUID.

| Direction | Type |
| --- | --- |
| Request | [`BuildRetrieveParams`](./src/resources/builds.ts) |
| Response | [`BuildRetrieveResponse`](./src/resources/builds.ts) |

```ts
const build = await client.builds.retrieve('buildUuid', {
  account_id: 'accountId',
});
```

### Cancel a Workers build

Cancel a queued or running build.

| Direction | Type |
| --- | --- |
| Request | [`BuildCancelByUUIDParams`](./src/resources/builds.ts) |
| Response | [`BuildCancelByUUIDResponse`](./src/resources/builds.ts) |

```ts
const build = await client.builds.cancelByUUID('buildUuid', {
  account_id: 'accountId',
});
```

### Get Workers build logs

Retrieve cursor-paginated log lines for a build UUID.

| Direction | Type |
| --- | --- |
| Request | [`BuildListLogsParams`](./src/resources/builds.ts) |
| Response | [`BuildListLogsResponse`](./src/resources/builds.ts) |

```ts
const build = await client.builds.listLogs('buildUuid', {
  account_id: 'accountId',
});
```

## `RepositoryConnections`

### Create or update a repository connection

Save the repository connection required by build triggers.

| Direction | Type |
| --- | --- |
| Request | [`RepositoryConnectionUpsertRepoParams`](./src/resources/repository-connections.ts) |
| Response | [`RepositoryConnectionUpsertRepoResponse`](./src/resources/repository-connections.ts) |

```ts
const repositoryConnection = await client.repositoryConnections.upsertRepo('accountId', {});
```

### Delete a repository connection

Delete a saved repository connection.

| Direction | Type |
| --- | --- |
| Request | [`RepositoryConnectionDeleteRepoParams`](./src/resources/repository-connections.ts) |

```ts
await client.repositoryConnections.deleteRepo('repoConnectionUuid', {
  account_id: 'accountId',
});
```

## `GitHubIntegration`

### Get repository configuration autofill

Analyze repository for automatic configuration detection

| Direction | Type |
| --- | --- |
| Request | [`GitHubIntegrationListWorkerConfigAutofillParams`](./src/resources/git-hub-integration.ts) |
| Response | [`GitHubIntegrationListWorkerConfigAutofillResponse`](./src/resources/git-hub-integration.ts) |

```ts
const gitHubIntegration = await client.gitHubIntegration.listWorkerConfigAutofill('repoId', {
  provider_type: {},
  provider_account_id: {},
  account_id: 'accountId',
  branch: {},
});
```

## `BuildTokens`

### List build tokens

List metadata for build tokens available to the current user without returning their secrets.

| Direction | Type |
| --- | --- |
| Response | [`BuildTokenListResponse`](./src/resources/build-tokens.ts) |

```ts
const buildToken = await client.buildTokens.list('accountId');
```

### Create build token

Create a new build authentication token

| Direction | Type |
| --- | --- |
| Request | [`BuildTokenCreateParams`](./src/resources/build-tokens.ts) |
| Response | [`BuildTokenCreateResponse`](./src/resources/build-tokens.ts) |

```ts
const buildToken = await client.buildTokens.create('accountId', {});
```

### Delete a build token

Delete a stored build token owned by the current user.

| Direction | Type |
| --- | --- |
| Request | [`BuildTokenDeleteParams`](./src/resources/build-tokens.ts) |

```ts
await client.buildTokens.delete('buildTokenUuid', {
  account_id: 'accountId',
});
```

## `Triggers`

### Create a build trigger

Create a trigger defining the repository connection, Worker tag, commands, filters, cache setting, and build token.

| Direction | Type |
| --- | --- |
| Request | [`TriggerCreateParams`](./src/resources/triggers.ts) |
| Response | [`TriggerCreateResponse`](./src/resources/triggers.ts) |

```ts
const trigger = await client.triggers.create('accountId', {});
```

### Delete a build trigger

Delete a trigger and cancel its unfinished builds.

| Direction | Type |
| --- | --- |
| Request | [`TriggerDeleteParams`](./src/resources/triggers.ts) |

```ts
await client.triggers.delete('triggerUuid', {
  account_id: 'accountId',
});
```

### Update a build trigger

Update commands, cache settings, or branch and path filters for a trigger.

| Direction | Type |
| --- | --- |
| Request | [`TriggerUpdateParams`](./src/resources/triggers.ts) |
| Response | [`TriggerUpdateResponse`](./src/resources/triggers.ts) |

```ts
const trigger = await client.triggers.update('triggerUuid', {
  account_id: 'accountId',
  body: {},
});
```

### Start a Workers build

Start a build for a branch or commit using the selected trigger.

| Direction | Type |
| --- | --- |
| Request | [`TriggerCreateManualBuildParams`](./src/resources/triggers.ts) |
| Response | [`TriggerCreateManualBuildResponse`](./src/resources/triggers.ts) |

```ts
const trigger = await client.triggers.createManualBuild('triggerUuid', {
  account_id: 'accountId',
  body: {},
});
```

### Purge a trigger's build cache

Delete cached dependencies and build artifacts associated with a trigger.

| Direction | Type |
| --- | --- |
| Request | [`TriggerPurgeBuildCacheParams`](./src/resources/triggers.ts) |

```ts
await client.triggers.purgeBuildCache('triggerUuid', {
  account_id: 'accountId',
});
```

## `EnvironmentVariables`

### List build variables

List build-time variables configured for a trigger. Secret values are not returned.

| Direction | Type |
| --- | --- |
| Request | [`EnvironmentVariableListParams`](./src/resources/environment-variables.ts) |
| Response | [`EnvironmentVariableListResponse`](./src/resources/environment-variables.ts) |

```ts
const environmentVariable = await client.environmentVariables.list('triggerUuid', {
  account_id: 'accountId',
});
```

### Set build variables

Add or replace build-time variables and secrets without changing unspecified keys.

| Direction | Type |
| --- | --- |
| Request | [`EnvironmentVariableUpsertParams`](./src/resources/environment-variables.ts) |
| Response | [`EnvironmentVariableUpsertResponse`](./src/resources/environment-variables.ts) |

```ts
const environmentVariable = await client.environmentVariables.upsert('triggerUuid', {
  account_id: 'accountId',
  body: {},
});
```

### Delete a build variable

Delete one build-time variable or secret by key.

| Direction | Type |
| --- | --- |
| Request | [`EnvironmentVariableDeleteParams`](./src/resources/environment-variables.ts) |

```ts
await client.environmentVariables.delete('environmentVariableKey', {
  account_id: 'accountId',
  trigger_uuid: 'triggerUuid',
});
```

## `Workers`

### Create Worker build configuration

Connect a Worker tag to a repository and production build settings.

| Direction | Type |
| --- | --- |
| Request | [`WorkerCreateBuildParams`](./src/resources/workers.ts) |
| Response | [`WorkerCreateBuildResponse`](./src/resources/workers.ts) |

```ts
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
```

### List builds for a Worker

List paginated build records associated with a Worker tag.

| Direction | Type |
| --- | --- |
| Request | [`WorkerListBuildsByScriptParams`](./src/resources/workers.ts) |
| Response | [`WorkerListBuildsByScriptResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.listBuildsByScript('externalScriptId', {
  account_id: 'accountId',
});
```

### List triggers for a Worker

List trigger UUIDs and build settings associated with a Worker tag.

| Direction | Type |
| --- | --- |
| Request | [`WorkerListTriggersByScriptParams`](./src/resources/workers.ts) |
| Response | [`WorkerListTriggersByScriptResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.listTriggersByScript('externalScriptId', {
  account_id: 'accountId',
});
```

### Delete Worker build configuration

Delete build settings and triggers for a Worker tag and cancel unfinished builds. The Worker is not deleted.

| Direction | Type |
| --- | --- |
| Request | [`WorkerDeleteBuildParams`](./src/resources/workers.ts) |
| Response | [`WorkerDeleteBuildResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.deleteBuild('scriptTag', {
  account_id: 'accountId',
});
```

### Get Worker build configuration

Retrieve the repository and production build settings associated with a Worker tag.

| Direction | Type |
| --- | --- |
| Request | [`WorkerRetrieveBuildParams`](./src/resources/workers.ts) |
| Response | [`WorkerRetrieveBuildResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.retrieveBuild('scriptTag', {
  account_id: 'accountId',
});
```

### Update Worker build configuration

Update the repository branch or production build settings associated with a Worker tag.

| Direction | Type |
| --- | --- |
| Request | [`WorkerUpdateBuildParams`](./src/resources/workers.ts) |
| Response | [`WorkerUpdateBuildResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.updateBuild('scriptTag', {
  account_id: 'accountId',
  body: {},
});
```

## `DeployHooks`

### List deploy hooks

List the branch-specific deploy hooks configured for a Worker.

| Direction | Type |
| --- | --- |
| Request | [`DeployHookListParams`](./src/resources/deploy-hooks.ts) |
| Response | [`DeployHookListResponse`](./src/resources/deploy-hooks.ts) |

```ts
const deployHook = await client.deployHooks.list('scriptName', {
  account_id: 'accountId',
});
```

### Create a deploy hook

Create an HTTP hook that starts a build for a selected Worker branch.

| Direction | Type |
| --- | --- |
| Request | [`DeployHookCreateParams`](./src/resources/deploy-hooks.ts) |
| Response | [`DeployHookCreateResponse`](./src/resources/deploy-hooks.ts) |

```ts
const deployHook = await client.deployHooks.create('scriptName', {
  account_id: 'accountId',
  body: {},
});
```

### Delete a deploy hook

Delete a deploy hook so its UUID can no longer start builds.

| Direction | Type |
| --- | --- |
| Request | [`DeployHookDeleteParams`](./src/resources/deploy-hooks.ts) |
| Response | [`DeployHookDeleteResponse`](./src/resources/deploy-hooks.ts) |

```ts
const deployHook = await client.deployHooks.delete('deployHookUuid', {
  account_id: 'accountId',
  script_name: 'scriptName',
});
```

### Get a deploy hook

Retrieve the name, branch, Worker identifier, and timestamps for a deploy hook.

| Direction | Type |
| --- | --- |
| Request | [`DeployHookRetrieveParams`](./src/resources/deploy-hooks.ts) |
| Response | [`DeployHookRetrieveResponse`](./src/resources/deploy-hooks.ts) |

```ts
const deployHook = await client.deployHooks.retrieve('deployHookUuid', {
  account_id: 'accountId',
  script_name: 'scriptName',
});
```

### Update a deploy hook

Replace the name and target branch for a deploy hook.

| Direction | Type |
| --- | --- |
| Request | [`DeployHookUpdateParams`](./src/resources/deploy-hooks.ts) |
| Response | [`DeployHookUpdateResponse`](./src/resources/deploy-hooks.ts) |

```ts
const deployHook = await client.deployHooks.update('deployHookUuid', {
  account_id: 'accountId',
  script_name: 'scriptName',
  body: {},
});
```

## `AccountSubscriptions`

### Create Subscriptions

Creates multiple subscriptions for an account in a single request.

| Direction | Type |
| --- | --- |
| Request | [`AccountSubscriptionBulkCreateParams`](./src/resources/account-subscriptions.ts) |

```ts
const response = await client.accountSubscriptions.bulkCreate('accountId', {});
```

## `CallsApps`

### List apps

Lists all apps in the Cloudflare account

```ts
const response = await client.callsApps.list('accountId');
```

### Create a new app

Creates a new Cloudflare calls app. An app is an unique enviroment where each Session can access all Tracks within the app.

| Direction | Type |
| --- | --- |
| Request | [`CallsAppCreateANewParams`](./src/resources/calls-apps.ts) |

```ts
const response = await client.callsApps.createANew('accountId', {});
```

### Delete app

Deletes an app from Cloudflare Calls

| Direction | Type |
| --- | --- |
| Request | [`CallsAppDeleteParams`](./src/resources/calls-apps.ts) |

```ts
const response = await client.callsApps.delete('appId', {
  account_id: {},
});
```

### Retrieve app details

Fetches details for a single Calls app.

| Direction | Type |
| --- | --- |
| Request | [`CallsAppRetrieveDetailsParams`](./src/resources/calls-apps.ts) |

```ts
const response = await client.callsApps.retrieveDetails('appId', {
  account_id: {},
});
```

### Edit app details

Edit details for a single app.

| Direction | Type |
| --- | --- |
| Request | [`CallsAppUpdateDetailsParams`](./src/resources/calls-apps.ts) |

```ts
const response = await client.callsApps.updateDetails('appId', {
  account_id: {},
  body: {},
});
```

## `CallsTurnKeys`

### List TURN Keys

Lists all TURN keys in the Cloudflare account

```ts
const response = await client.callsTurnKeys.list('accountId');
```

### Create a new TURN key

Creates a new Cloudflare Calls TURN key.

| Direction | Type |
| --- | --- |
| Request | [`CallsTurnKeyCreateParams`](./src/resources/calls-turn-keys.ts) |

```ts
const response = await client.callsTurnKeys.create('accountId', {});
```

### Delete TURN key

Deletes a TURN key from Cloudflare Calls

| Direction | Type |
| --- | --- |
| Request | [`CallsTurnKeyDeleteParams`](./src/resources/calls-turn-keys.ts) |

```ts
const response = await client.callsTurnKeys.delete('keyId', {
  account_id: {},
});
```

### Retrieve TURN key details

Fetches details for a single TURN key.

| Direction | Type |
| --- | --- |
| Request | [`CallsTurnKeyRetrieveDetailsParams`](./src/resources/calls-turn-keys.ts) |

```ts
const response = await client.callsTurnKeys.retrieveDetails('keyId', {
  account_id: {},
});
```

### Edit TURN key details

Edit details for a single TURN key.

| Direction | Type |
| --- | --- |
| Request | [`CallsTurnKeyUpdateParams`](./src/resources/calls-turn-keys.ts) |

```ts
const response = await client.callsTurnKeys.update('keyId', {
  account_id: {},
  body: {},
});
```

## `CloudflareTunnel`

### List Cloudflare Tunnels

Lists and filters Cloudflare Tunnels in an account.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelListParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.list('accountId');
```

### Create a Cloudflare Tunnel

Creates a remotely or locally managed Cloudflare Tunnel in an account. After creation, retrieve its token and run cloudflared to establish the connector connection.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelCreateAParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.createA('accountId', {
  name: {},
});
```

### Delete a Cloudflare Tunnel

Permanently deletes a Cloudflare Tunnel from an account. The tunnel must have no active connections.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelDeleteAParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.deleteA('tunnelId', {
  account_id: {},
});
```

### Get a Cloudflare Tunnel

Fetches a single Cloudflare Tunnel.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelRetrieveAParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.retrieveA('tunnelId', {
  account_id: {},
});
```

### Update a Cloudflare Tunnel

Updates the name or secret of an existing Cloudflare Tunnel.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelUpdateAParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.updateA('tunnelId', {
  account_id: {},
});
```

### Clean up Cloudflare Tunnel connections

Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel independently of its current state. If no connector id (client_id) is provided all connectors will be removed. We recommend running this command after rotating tokens.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelCleanUpConnectionsParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.cleanUpConnections('tunnelId', {
  account_id: {},
});
```

### List Cloudflare Tunnel connections

Lists the connections for a Cloudflare Tunnel, including connector IDs, cloudflared versions, and Cloudflare locations.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelListConnectionsParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.listConnections('tunnelId', {
  account_id: {},
});
```

### Get Cloudflare Tunnel connector

Retrieves a connector and its connection details for a Cloudflare Tunnel, including its cloudflared version, architecture, and connected Cloudflare locations.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelRetrieveConnectorParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.retrieveConnector('connectorId', {
  account_id: {},
  tunnel_id: {},
});
```

### Get a Cloudflare Tunnel management token

Creates a short-lived management token for the requested Tunnel management resources, such as streaming logs. Treat the token as a secret.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelCreateAManagementTokenParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.createAManagementToken('tunnelId', {
  account_id: {},
  resources: [{}],
});
```

### Get a Cloudflare Tunnel token

Retrieves the token used to run cloudflared and associate it with a specific Cloudflare Tunnel. Treat the token as a secret.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelListATokenParams`](./src/resources/cloudflare-tunnel.ts) |

```ts
const response = await client.cloudflareTunnel.listAToken('tunnelId', {
  account_id: {},
});
```

## `CloudflareTunnelConfiguration`

### Get Tunnel configuration

Retrieves the configuration for a remotely managed Cloudflare Tunnel.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelConfigurationListParams`](./src/resources/cloudflare-tunnel-configuration.ts) |

```ts
const response = await client.cloudflareTunnelConfiguration.list('tunnelId', {
  account_id: {},
});
```

### Update Tunnel configuration

Replaces the configuration for a remotely managed Cloudflare Tunnel, including its ingress rules and origin request settings.

| Direction | Type |
| --- | --- |
| Request | [`CloudflareTunnelConfigurationPutParams`](./src/resources/cloudflare-tunnel-configuration.ts) |

```ts
const response = await client.cloudflareTunnelConfiguration.put('tunnelId', {
  account_id: {},
});
```

## `Turnstile`

### List Turnstile Widgets

Lists all turnstile widgets of an account.

| Direction | Type |
| --- | --- |
| Request | [`TurnstileAccountsWidgetsListParams`](./src/resources/turnstile.ts) |
| Response | [`TurnstileAccountsWidgetsListResponse`](./src/resources/turnstile.ts) |

```ts
const turnstile = await client.turnstile.accountsWidgetsList('accountId', {
  page: 1,
  per_page: 25,
});
```

### Create a Turnstile Widget

Lists challenge widgets.

| Direction | Type |
| --- | --- |
| Request | [`TurnstileAccountsWidgetCreateParams`](./src/resources/turnstile.ts) |
| Response | [`TurnstileAccountsWidgetCreateResponse`](./src/resources/turnstile.ts) |

```ts
const turnstile = await client.turnstile.accountsWidgetCreate('accountId', {
  page: 1,
  per_page: 25,
  domains: {},
  mode: {},
  name: {},
});
```

### Delete a Turnstile Widget

Destroy a Turnstile Widget.

| Direction | Type |
| --- | --- |
| Request | [`TurnstileAccountsWidgetDeleteParams`](./src/resources/turnstile.ts) |
| Response | [`TurnstileAccountsWidgetDeleteResponse`](./src/resources/turnstile.ts) |

```ts
const turnstile = await client.turnstile.accountsWidgetDelete('sitekey', {
  account_id: {},
});
```

### Turnstile Widget Details

Show a single challenge widget configuration.

| Direction | Type |
| --- | --- |
| Request | [`TurnstileAccountsWidgetGetParams`](./src/resources/turnstile.ts) |
| Response | [`TurnstileAccountsWidgetGetResponse`](./src/resources/turnstile.ts) |

```ts
const turnstile = await client.turnstile.accountsWidgetGet('sitekey', {
  account_id: {},
});
```

### Update a Turnstile Widget

Update the configuration of a widget.

| Direction | Type |
| --- | --- |
| Request | [`TurnstileAccountsWidgetUpdateParams`](./src/resources/turnstile.ts) |
| Response | [`TurnstileAccountsWidgetUpdateResponse`](./src/resources/turnstile.ts) |

```ts
const turnstile = await client.turnstile.accountsWidgetUpdate('sitekey', {
  account_id: {},
  domains: {},
  mode: {},
  name: {},
});
```

### Rotate Secret for a Turnstile Widget

Generate a new secret key for this widget. If `invalidate_immediately`
is set to `false`, the previous secret remains valid for 2 hours.

Note that secrets cannot be rotated again during the grace period.

| Direction | Type |
| --- | --- |
| Request | [`TurnstileAccountsWidgetRotateSecretParams`](./src/resources/turnstile.ts) |
| Response | [`TurnstileAccountsWidgetRotateSecretResponse`](./src/resources/turnstile.ts) |

```ts
const turnstile = await client.turnstile.accountsWidgetRotateSecret('sitekey', {
  account_id: {},
});
```

## `Scans`

### Get the Latest Banner Grab Result

Retrieves the latest banner grab results for a Cloudforce One scan configuration, including service banners from open ports.

| Direction | Type |
| --- | --- |
| Request | [`ScanRetrieveGetBannersParams`](./src/resources/scans.ts) |
| Response | [`ScanRetrieveGetBannersResponse`](./src/resources/scans.ts) |

```ts
const scan = await client.scans.retrieveGetBanners('configId', {
  account_id: 'accountId',
});
```

## `BinDb`

### Posts a file to Binary Storage

Uploads a binary file to Cloudforce One's binary database for malware analysis and threat intelligence correlation.

| Direction | Type |
| --- | --- |
| Request | [`BinDBPostPostParams`](./src/resources/bin-db.ts) |
| Response | [`BinDBPostPostResponse`](./src/resources/bin-db.ts) |

```ts
const binDB = await client.binDB.postPost('accountId', {
  file: new File(['file'], 'file'),
});
```

### Retrieves a file from Binary Storage

Retrieves a binary file from the Cloudforce One binary storage for analysis.

| Direction | Type |
| --- | --- |
| Request | [`BinDBRetrieveGetBinaryParams`](./src/resources/bin-db.ts) |

```ts
await client.binDB.retrieveGetBinary('hash', {
  account_id: 'accountId',
});
```

## `Event`

### Filter and list events

Use `datasetId=all` or `datasetId=*` for the legacy all-datasets scope, `datasetId=analytics` for datasets with `isAnalytics=true`, or `datasetId=operational` for datasets with `isAnalytics=false` (limited to 50). Scope values must be used alone. When `datasetId` is unspecified, events are listed from the default Cloudforce One Threat Events dataset. To list existing datasets, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.

| Direction | Type |
| --- | --- |
| Request | [`EventListListGetParams`](./src/resources/event.ts) |
| Response | [`EventListListGetResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.listListGet('accountId');
```

### Aggregate events by single or multiple columns with optional date filtering

Aggregate threat events by one or more columns (e.g., attacker, targetIndustry) with optional date filtering and daily grouping. Supports multi-dimensional aggregation for cross-analysis.

| Direction | Type |
| --- | --- |
| Request | [`EventListAggregateParams`](./src/resources/event.ts) |
| Response | [`EventListAggregateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.listAggregate('accountId', {
  aggregateBy: 'aggregateBy',
  limit: 100,
});
```

### Creates a new event

To create a dataset, see the [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint. When `datasetId` parameter is unspecified, it will be created in a default dataset named `Cloudforce One Threat Events`.

| Direction | Type |
| --- | --- |
| Request | [`EventCreateParams`](./src/resources/event.ts) |
| Response | [`EventCreateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.create('accountId', {
  category: 'Domain Resolution',
  date: '2022-04-01T00:00:00Z',
  event: 'An attacker registered the domain domain.com',
  raw: {
    data: {},
  },
  tlp: 'amber',
});
```

### Creates bulk events

The `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.

| Direction | Type |
| --- | --- |
| Request | [`EventPostCreateBulkParams`](./src/resources/event.ts) |
| Response | [`EventPostCreateBulkResponse`](./src/resources/event.ts) |

```ts
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
```

### Creates bulk DOS event with relationships and indicators

This method is deprecated. Please use `event_create_bulk` instead

| Direction | Type |
| --- | --- |
| Request | [`EventPostDosCreateBulkWithRelationshipsParams`](./src/resources/event.ts) |
| Response | [`EventPostDosCreateBulkWithRelationshipsResponse`](./src/resources/event.ts) |

```ts
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
```

### Copies specified events from one dataset to another dataset

| Direction | Type |
| --- | --- |
| Request | [`EventPostCopyToNewDSParams`](./src/resources/event.ts) |
| Response | [`EventPostCopyToNewDSResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.postCopyToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  destDatasetId: '12345678-1234-1234-1234-1234567890ab',
  eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
});
```

### Reads an event

Retrieves a specific event by its UUID.

| Direction | Type |
| --- | --- |
| Request | [`EventRetrieveReadParams`](./src/resources/event.ts) |
| Response | [`EventRetrieveReadResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.retrieveRead('eventId', {
  account_id: 'accountId',
  dataset_id: 'datasetId',
});
```

### Moves specified events from one dataset to another dataset

| Direction | Type |
| --- | --- |
| Request | [`EventPostMoveToNewDSParams`](./src/resources/event.ts) |
| Response | [`EventPostMoveToNewDSResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.postMoveToNewDS('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  destDatasetId: '12345678-1234-1234-1234-1234567890ab',
  eventIds: ['7632a037-fdef-4899-9b12-148470aae772'],
});
```

### Removes a tag from an event

Removes a tag from a threat event in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`EventDeleteTagDeleteParams`](./src/resources/event.ts) |
| Response | [`EventDeleteTagDeleteResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.deleteTagDelete('eventId', {
  account_id: 'accountId',
  tags: ['malware'],
});
```

### Adds a tag to an event

Adds a tag to a threat event in Cloudforce One for classification and filtering.

| Direction | Type |
| --- | --- |
| Request | [`EventCreate4Params`](./src/resources/event.ts) |
| Response | [`EventCreate4Response`](./src/resources/event.ts) |

```ts
const event = await client.event.create4('eventId', {
  account_id: 'accountId',
  tags: ['botnet'],
});
```

### GraphQL endpoint for event aggregation

Execute GraphQL aggregations over threat events. Supports multi-dimensional group-bys, optional date range filtering, and multi-dataset aggregation.

| Direction | Type |
| --- | --- |
| Response | [`EventPostGraphQlResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.postGraphQl('accountId');
```

### List all saved event queries

Retrieve all saved event queries for the account

| Direction | Type |
| --- | --- |
| Response | [`EventListQueryListResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.listQueryList('accountId');
```

### Create a saved event query

Create a new saved event query for the account

| Direction | Type |
| --- | --- |
| Request | [`EventCreate2Params`](./src/resources/event.ts) |
| Response | [`EventCreate2Response`](./src/resources/event.ts) |

```ts
const event = await client.event.create2('accountId', {
  alert_enabled: false,
  alert_rollup_enabled: false,
  name: '',
  query_json: '',
  rule_enabled: false,
});
```

### Delete a saved event query

Delete a saved event query by its ID

| Direction | Type |
| --- | --- |
| Request | [`EventDeleteQueryDeleteParams`](./src/resources/event.ts) |

```ts
await client.event.deleteQueryDelete(1, {
  account_id: 'accountId',
});
```

### Read a saved event query

Retrieve a saved event query by its ID

| Direction | Type |
| --- | --- |
| Request | [`EventRetrieveQueryReadParams`](./src/resources/event.ts) |
| Response | [`EventRetrieveQueryReadResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.retrieveQueryRead(1, {
  account_id: 'accountId',
});
```

### Update a saved event query

Update an existing saved event query by its ID

| Direction | Type |
| --- | --- |
| Request | [`EventPatchQueryUpdateParams`](./src/resources/event.ts) |
| Response | [`EventPatchQueryUpdateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.patchQueryUpdate(1, {
  account_id: 'accountId',
});
```

### Update a saved event query

Update an existing saved event query by its ID

| Direction | Type |
| --- | --- |
| Request | [`EventPostQueryUpdateParams`](./src/resources/event.ts) |
| Response | [`EventPostQueryUpdateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.postQueryUpdate(1, {
  account_id: 'accountId',
});
```

### Reads raw data for an event by UUID

Retrieves the raw data associated with an event. Searches across all shards in the dataset.

| Direction | Type |
| --- | --- |
| Request | [`EventRetrieveRawReadDSParams`](./src/resources/event.ts) |
| Response | [`EventRetrieveRawReadDSResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.retrieveRawReadDS('eventId', {
  account_id: 'accountId',
  dataset_id: 'datasetId',
});
```

### Removes an event reference

Removes a reference link between related threat events in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`EventDeleteReferenceDeleteParams`](./src/resources/event.ts) |
| Response | [`EventDeleteReferenceDeleteResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.deleteReferenceDelete('eventId', {
  account_id: 'accountId',
  events: ['88888888-4444-4444-4444-121212121212'],
});
```

### Creates event references for a event

| Direction | Type |
| --- | --- |
| Request | [`EventCreate5Params`](./src/resources/event.ts) |
| Response | [`EventCreate5Response`](./src/resources/event.ts) |

```ts
const event = await client.event.create5('eventId', {
  account_id: 'accountId',
  events: ['88888888-4444-4444-4444-121212121212'],
});
```

### Create a relationship between two events

Creates a directed relationship between two events. The relationship is from parent to child with a specified type.

| Direction | Type |
| --- | --- |
| Request | [`EventCreate3Params`](./src/resources/event.ts) |
| Response | [`EventCreate3Response`](./src/resources/event.ts) |

```ts
const event = await client.event.create3('accountId', {
  childIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
  datasetId: '',
  parentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  relationshipType: 'related_to',
});
```

### Bulk update events

Updates multiple events with the same field values. Maximum 100 events per request.

| Direction | Type |
| --- | --- |
| Request | [`EventPatchUpdateBulkParams`](./src/resources/event.ts) |
| Response | [`EventPatchUpdateBulkResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.patchUpdateBulk('accountId', {
  datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
  eventIds: ['uuid-1', 'uuid-2', 'uuid-3'],
  updates: {},
});
```

### Deletes one or more events

| Direction | Type |
| --- | --- |
| Request | [`EventDeleteParams`](./src/resources/event.ts) |
| Response | [`EventDeleteResponse`](./src/resources/event.ts) |

```ts
const response = await client.event.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  eventIds: ['eventId'],
});
```

### Reads an event

This Method is deprecated. Please use /events/dataset/:dataset_id/events/:event_id instead.

| Direction | Type |
| --- | --- |
| Request | [`EventRetrieveReadDeprecatedParams`](./src/resources/event.ts) |
| Response | [`EventRetrieveReadDeprecatedResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.retrieveReadDeprecated('eventId', {
  account_id: 'accountId',
});
```

### Updates an event

Partially updates a threat event in Cloudforce One, modifying specific fields without replacing the entire event.

| Direction | Type |
| --- | --- |
| Request | [`EventPatchUpdateParams`](./src/resources/event.ts) |
| Response | [`EventPatchUpdateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.patchUpdate('eventId', {
  account_id: 'accountId',
  datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
});
```

### Updates an event

| Direction | Type |
| --- | --- |
| Request | [`EventPostUpdateParams`](./src/resources/event.ts) |
| Response | [`EventPostUpdateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.postUpdate('eventId', {
  account_id: 'accountId',
  datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
});
```

### Reads data for a raw event

Retrieves raw threat event data for a specific event in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`EventRetrieveRawReadParams`](./src/resources/event.ts) |
| Response | [`EventRetrieveRawReadResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.retrieveRawRead('rawId', {
  account_id: 'accountId',
  event_id: 'eventId',
});
```

### Updates a raw event

Partially updates raw threat event data in Cloudforce One, modifying specific fields of the event.

| Direction | Type |
| --- | --- |
| Request | [`EventPatchRawUpdateParams`](./src/resources/event.ts) |
| Response | [`EventPatchRawUpdateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.patchRawUpdate('rawId', {
  account_id: 'accountId',
  event_id: 'eventId',
});
```

### Updates a raw event

| Direction | Type |
| --- | --- |
| Request | [`EventPostRawUpdateParams`](./src/resources/event.ts) |
| Response | [`EventPostRawUpdateResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.postRawUpdate('rawId', {
  account_id: 'accountId',
  event_id: 'eventId',
});
```

### Filter and list events related to specific event

The `event_id` must be defined (to list existing events (and their IDs), use the [`Filter and List Events`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/methods/list/) endpoint). Also, must provide query parameters.

| Direction | Type |
| --- | --- |
| Request | [`EventListRelationshipsParams`](./src/resources/event.ts) |
| Response | [`EventListRelationshipsResponse`](./src/resources/event.ts) |

```ts
const event = await client.event.listRelationships('eventId', {
  account_id: 'accountId',
  direction: 'both',
  datasetId: 'datasetId',
  includeParent: true,
});
```

## `Attacker`

### Lists attackers across multiple datasets

Lists known threat attackers tracked in Cloudforce One threat intelligence.

| Direction | Type |
| --- | --- |
| Request | [`AttackerListListParams`](./src/resources/attacker.ts) |
| Response | [`AttackerListListResponse`](./src/resources/attacker.ts) |

```ts
const attacker = await client.attacker.listList('accountId');
```

## `Category`

### Lists categories across multiple datasets

Lists all threat event categories configured for classifying and organizing threat events.

| Direction | Type |
| --- | --- |
| Request | [`CategoryListListParams`](./src/resources/category.ts) |
| Response | [`CategoryListListResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.listList('accountId');
```

### Lists categories

| Direction | Type |
| --- | --- |
| Response | [`CategoryListListCompleteResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.listListComplete('accountId');
```

### Creates a new category

Creates a new threat event category in Cloudforce One for organizing and classifying threat events.

| Direction | Type |
| --- | --- |
| Request | [`CategoryCreateParams`](./src/resources/category.ts) |
| Response | [`CategoryCreateResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.create('accountId', {
  killChain: 0,
  name: 'name',
});
```

### Deletes a category

Removes a threat event category from Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`CategoryDeleteDeleteParams`](./src/resources/category.ts) |
| Response | [`CategoryDeleteDeleteResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.deleteDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Reads a category

Retrieves details for a specific threat event category.

| Direction | Type |
| --- | --- |
| Request | [`CategoryRetrieveReadParams`](./src/resources/category.ts) |
| Response | [`CategoryRetrieveReadResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.retrieveRead('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Updates a category

Partially updates a threat event category in Cloudforce One, modifying specific fields without replacing the entire category.

| Direction | Type |
| --- | --- |
| Request | [`CategoryPatchUpdateParams`](./src/resources/category.ts) |
| Response | [`CategoryPatchUpdateResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Updates a category

| Direction | Type |
| --- | --- |
| Request | [`CategoryPostUpdateParams`](./src/resources/category.ts) |
| Response | [`CategoryPostUpdateResponse`](./src/resources/category.ts) |

```ts
const category = await client.category.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

## `Country`

### Retrieves countries information for all countries

Lists countries referenced in Cloudforce One threat intelligence data.

| Direction | Type |
| --- | --- |
| Response | [`CountryListReadResponse`](./src/resources/country.ts) |

```ts
const country = await client.country.listRead('accountId');
```

## `Dataset`

### Lists all datasets in an account

Lists all threat event datasets configured in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`DatasetListListParams`](./src/resources/dataset.ts) |
| Response | [`DatasetListListResponse`](./src/resources/dataset.ts) |

```ts
const dataset = await client.dataset.listList('accountId');
```

### Creates a dataset

Creates a new threat event dataset in Cloudforce One for organizing related threat events.

| Direction | Type |
| --- | --- |
| Request | [`DatasetCreateParams`](./src/resources/dataset.ts) |
| Response | [`DatasetCreateResponse`](./src/resources/dataset.ts) |

```ts
const dataset = await client.dataset.create('accountId', {
  isPublic: false,
  name: 'x',
});
```

### Delete a dataset

Soft-deletes a dataset given a datasetId.

| Direction | Type |
| --- | --- |
| Request | [`DatasetDeleteDeleteParams`](./src/resources/dataset.ts) |
| Response | [`DatasetDeleteDeleteResponse`](./src/resources/dataset.ts) |

```ts
const dataset = await client.dataset.deleteDelete('datasetId', {
  account_id: 'accountId',
});
```

### Reads a dataset

Retrieves details for a specific threat event dataset.

| Direction | Type |
| --- | --- |
| Request | [`DatasetRetrieveReadParams`](./src/resources/dataset.ts) |
| Response | [`DatasetRetrieveReadResponse`](./src/resources/dataset.ts) |

```ts
const dataset = await client.dataset.retrieveRead('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Updates an existing dataset

Partially updates a threat event dataset in Cloudforce One, modifying specific fields without replacing the entire dataset configuration.

| Direction | Type |
| --- | --- |
| Request | [`DatasetPatchUpdateParams`](./src/resources/dataset.ts) |
| Response | [`DatasetPatchUpdateResponse`](./src/resources/dataset.ts) |

```ts
const dataset = await client.dataset.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  isPublic: false,
  name: 'x',
});
```

### Updates an existing dataset

| Direction | Type |
| --- | --- |
| Request | [`DatasetPostUpdateParams`](./src/resources/dataset.ts) |
| Response | [`DatasetPostUpdateResponse`](./src/resources/dataset.ts) |

```ts
const dataset = await client.dataset.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  isPublic: false,
  name: 'x',
});
```

## `Groups`

### List groups for an account

| Direction | Type |
| --- | --- |
| Response | [`GroupListListResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.listList('accountId');
```

### Create a group

| Direction | Type |
| --- | --- |
| Request | [`GroupPostCreateParams`](./src/resources/groups.ts) |
| Response | [`GroupPostCreateResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.postCreate('accountId', {
  description: 'Cloudforce subscribers',
  name: 'cloudforce-subscribers',
});
```

### Delete a group for an account

| Direction | Type |
| --- | --- |
| Request | [`GroupDeleteDeleteParams`](./src/resources/groups.ts) |
| Response | [`GroupDeleteDeleteResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.deleteDelete('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
});
```

### Read a group for an account

| Direction | Type |
| --- | --- |
| Request | [`GroupRetrieveReadParams`](./src/resources/groups.ts) |
| Response | [`GroupRetrieveReadResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.retrieveRead('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
});
```

### Update a group

| Direction | Type |
| --- | --- |
| Request | [`GroupPutUpdateParams`](./src/resources/groups.ts) |
| Response | [`GroupPutUpdateResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.putUpdate('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
  description: 'Cloudforce subscribers',
  name: 'cloudforce-subscribers',
});
```

### List group members

| Direction | Type |
| --- | --- |
| Request | [`GroupListMemberListParams`](./src/resources/groups.ts) |
| Response | [`GroupListMemberListResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.listMemberList('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
});
```

### Create a group member

| Direction | Type |
| --- | --- |
| Request | [`GroupPostMemberCreateParams`](./src/resources/groups.ts) |
| Response | [`GroupPostMemberCreateResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.postMemberCreate('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
});
```

### Delete a group member

| Direction | Type |
| --- | --- |
| Request | [`GroupDeleteMemberDeleteParams`](./src/resources/groups.ts) |
| Response | [`GroupDeleteMemberDeleteResponse`](./src/resources/groups.ts) |

```ts
const group = await client.groups.deleteMemberDelete('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
  group_id: '12345678-1234-1234-1234-1234567890ab',
});
```

## `Indicators`

### Create a new indicator type

Creates a new indicator type and initializes its dedicated Durable Object

| Direction | Type |
| --- | --- |
| Request | [`IndicatorCreateParams`](./src/resources/indicators.ts) |
| Response | [`IndicatorCreateResponse`](./src/resources/indicators.ts) |

```ts
const indicator = await client.indicators.create('datasetId', {
  account_id: 'accountId',
  indicatorType: 'x',
});
```

## `Indicator`

### Lists indicators

This method is deprecated. Please use /events/indicators to retrieve a paginated list of indicators.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorListListLegacyParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorListListLegacyResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.listListLegacy('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Creates multiple indicators in bulk

Creates multiple indicators at once with their respective types and related datasets.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorPostCreateBulkParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorPostCreateBulkResponse`](./src/resources/indicator.ts) |

```ts
const response = await client.indicator.postCreateBulk('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  indicators: [
    {
      indicatorType: 'domain',
      value: 'malicious-domain.com',
    },
  ],
});
```

### Creates a new indicator

Creates a new indicator with the specified type and related datasets.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorCreateParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorCreateResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  indicatorType: 'domain',
  value: 'malicious-domain.com',
});
```

### List mirrored tags for an indicator dataset

Returns all mirrored tags from the indicator dataset (DO mirror table). No pagination.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorListTagsListParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorListTagsListResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.listTagsList('datasetId', {
  account_id: 'accountId',
});
```

### Deletes an indicator

Deletes a specific indicator by its UUID.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorDeleteDeleteParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorDeleteDeleteResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.deleteDelete('indicatorId', {
  account_id: 'accountId',
  dataset_id: 'datasetId',
});
```

### Reads an indicator

Retrieves a specific indicator by its UUID.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorRetrieveReadParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorRetrieveReadResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.retrieveRead('indicatorId', {
  account_id: 'accountId',
  dataset_id: 'datasetId',
});
```

### Updates an indicator

Updates an existing indicator's properties.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorPatchUpdateParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorPatchUpdateResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.patchUpdate('indicatorId', {
  account_id: 'accountId',
  dataset_id: 'datasetId',
});
```

### List relationships for an indicator

Returns sparse relationship edges. Optionally hydrate related entities via `expand`.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorListRelationshipsListParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorListRelationshipsListResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.listRelationshipsList('indicatorId', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  pageSize: 25,
});
```

### Create a relationship for an indicator

Creates a new relationship with the indicator as the source entity. Indicator↔indicator relationships are not supported.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorPostRelationshipCreateParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorPostRelationshipCreateResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.postRelationshipCreate('indicatorId', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  targetId: 'x',
  targetType: 'event',
  type: 'related-to',
});
```

### Delete a relationship

Deletes a relationship by UUID. Idempotent: returns deleted=false if not found.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorDeleteRelationshipDeleteParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorDeleteRelationshipDeleteResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.deleteRelationshipDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  indicator_id: 'indicatorId',
});
```

### Update a relationship

Partially updates a relationship by UUID. Only provided fields are changed.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorPatchRelationshipUpdateParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorPatchRelationshipUpdateResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.patchRelationshipUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  indicator_id: 'indicatorId',
});
```

### Lists indicators across multiple datasets

Retrieves indicators across specified datasets, ordered by createdAt descending then UUID, dataset ID, and shard ID ascending. Use the standalone datasetIds value 'all'/'*' for legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If no datasetIds are provided, uses the default dataset.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorListListParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorListListResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.listList('accountId');
```

### Aggregate indicators by column(s)

Aggregate threat indicators by one or more columns (e.g., indicatorType, value) across datasets. Returns top-N groups ordered by count.

| Direction | Type |
| --- | --- |
| Request | [`IndicatorListAggregateParams`](./src/resources/indicator.ts) |
| Response | [`IndicatorListAggregateResponse`](./src/resources/indicator.ts) |

```ts
const indicator = await client.indicator.listAggregate('accountId', {
  aggregateBy: 'aggregateBy',
  measure: 'indicators',
  limit: 10,
});
```

## `Permissions`

### List permissions for dataset

List permissions

| Direction | Type |
| --- | --- |
| Request | [`PermissionListListParams`](./src/resources/permissions.ts) |
| Response | [`PermissionListListResponse`](./src/resources/permissions.ts) |

```ts
const permission = await client.permissions.listList('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Create a permission for dataset

Create a permission

| Direction | Type |
| --- | --- |
| Request | [`PermissionPostCreateParams`](./src/resources/permissions.ts) |
| Response | [`PermissionPostCreateResponse`](./src/resources/permissions.ts) |

```ts
const permission = await client.permissions.postCreate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  role: 'read',
  subjectId: '123',
  subjectType: 'account',
});
```

### Delete a permission for dataset

Delete a permission

| Direction | Type |
| --- | --- |
| Request | [`PermissionDeleteDeleteParams`](./src/resources/permissions.ts) |
| Response | [`PermissionDeleteDeleteResponse`](./src/resources/permissions.ts) |

```ts
const permission = await client.permissions.deleteDelete('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Update a permission for dataset

Update a permission

| Direction | Type |
| --- | --- |
| Request | [`PermissionPutUpdateParams`](./src/resources/permissions.ts) |
| Response | [`PermissionPutUpdateResponse`](./src/resources/permissions.ts) |

```ts
const permission = await client.permissions.putUpdate('12345678-1234-1234-1234-1234567890ab', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  role: 'read',
});
```

## `Tag`

### List indicators related to a tag within a dataset (deprecated)

This endpoint is deprecated. Use GET /:account_id/events/tags/:tag_uuid/indicators with the optional datasetIds query parameter instead. Returns indicators associated with the provided tag UUID within a single dataset's indicator shards, with pagination.

| Direction | Type |
| --- | --- |
| Request | [`TagListDatasetIndicatorsListParams`](./src/resources/tag.ts) |
| Response | [`TagListDatasetIndicatorsListResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.listDatasetIndicatorsList('tagUuid', {
  account_id: 'accountId',
  dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Lists all tags (SoT)

Returns all Source-of-Truth tags for an account. Supports legacy free-text `search` on tag value and `categoryUuid` exact match, plus a structured `filters` JSON array for filtering by metadata fields (originCountryISO, actorCategory, motive, priority, etc.). Country values may be passed as alpha-2, alpha-3, name, or common alias.

| Direction | Type |
| --- | --- |
| Request | [`TagListListParams`](./src/resources/tag.ts) |
| Response | [`TagListListResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.listList('accountId');
```

### Creates a new tag

Creates a new tag to be used accross threat events.

| Direction | Type |
| --- | --- |
| Request | [`TagCreateParams`](./src/resources/tag.ts) |
| Response | [`TagCreateResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.create('accountId', {
  value: 'APT28',
});
```

### Deletes a tag (SoT)

Deletes a Source-of-Truth tag by UUID.

| Direction | Type |
| --- | --- |
| Request | [`TagDeleteDeleteParams`](./src/resources/tag.ts) |
| Response | [`TagDeleteDeleteResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.deleteDelete('tagUuid', {
  account_id: 'accountId',
});
```

### Gets a tag by UUID (SoT)

Returns a single Source-of-Truth tag by UUID, including custom fields (properties).

| Direction | Type |
| --- | --- |
| Request | [`TagRetrieveDetailParams`](./src/resources/tag.ts) |
| Response | [`TagRetrieveDetailResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.retrieveDetail('tagUuid', {
  account_id: 'accountId',
});
```

### Updates a tag (SoT)

Updates a Source-of-Truth tag by UUID.

| Direction | Type |
| --- | --- |
| Request | [`TagPatchUpdateParams`](./src/resources/tag.ts) |
| Response | [`TagPatchUpdateResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.patchUpdate('tagUuid', {
  account_id: 'accountId',
});
```

### List indicators related to a tag

Returns indicators associated with the provided tag UUID, with pagination. By default fans out across every indicator dataset the account can read; pass datasetIds to scope to UUIDs, analytics datasets, or operational datasets. Analytics datasets do not expose tag associations, so the analytics scope returns an empty result.

| Direction | Type |
| --- | --- |
| Request | [`TagListIndicatorsListParams`](./src/resources/tag.ts) |
| Response | [`TagListIndicatorsListResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.listIndicatorsList('tagUuid', {
  account_id: 'accountId',
});
```

### List relationships for a tag

Returns sparse relationship edges. Optionally hydrate related entities via `expand`. Fans out across all accessible indicator dataset shards. Analytics datasets do not expose tag associations, so the analytics scope returns an empty result.

| Direction | Type |
| --- | --- |
| Request | [`TagListRelationshipsListParams`](./src/resources/tag.ts) |
| Response | [`TagListRelationshipsListResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.listRelationshipsList('tagUuid', {
  account_id: 'accountId',
  pageSize: 25,
});
```

### Create a relationship for a tag

Creates a new relationship with the tag as the source entity. Requires a datasetId to locate the Indicators DO.

| Direction | Type |
| --- | --- |
| Request | [`TagPostRelationshipCreateParams`](./src/resources/tag.ts) |
| Response | [`TagPostRelationshipCreateResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.postRelationshipCreate('tagUuid', {
  account_id: 'accountId',
  datasetId: 'x',
  targetId: 'x',
  targetType: 'event',
  type: 'attributed-to',
});
```

### Delete a tag relationship

Deletes a relationship by UUID. Idempotent: returns deleted=false if not found. Requires datasetId query param.

| Direction | Type |
| --- | --- |
| Request | [`TagDeleteRelationshipDeleteParams`](./src/resources/tag.ts) |
| Response | [`TagDeleteRelationshipDeleteResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.deleteRelationshipDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  tag_uuid: 'tagUuid',
  datasetId: 'datasetId',
});
```

### Update a tag relationship

Partially updates a relationship by UUID. Requires datasetId query param.

| Direction | Type |
| --- | --- |
| Request | [`TagPatchRelationshipUpdateParams`](./src/resources/tag.ts) |
| Response | [`TagPatchRelationshipUpdateResponse`](./src/resources/tag.ts) |

```ts
const tag = await client.tag.patchRelationshipUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
  tag_uuid: 'tagUuid',
  datasetId: 'datasetId',
});
```

## `TargetIndustry`

### Lists all target industries for a specific dataset

| Direction | Type |
| --- | --- |
| Request | [`TargetIndustryListListDatasetParams`](./src/resources/target-industry.ts) |
| Response | [`TargetIndustryListListDatasetResponse`](./src/resources/target-industry.ts) |

```ts
const targetIndustry = await client.targetIndustry.listListDataset('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  account_id: 'accountId',
});
```

### Lists target industries across multiple datasets

Retrieves the catalog of industry classifications used in Cloudforce One threat intelligence.

| Direction | Type |
| --- | --- |
| Request | [`TargetIndustryListListParams`](./src/resources/target-industry.ts) |
| Response | [`TargetIndustryListListResponse`](./src/resources/target-industry.ts) |

```ts
const targetIndustry = await client.targetIndustry.listList('accountId');
```

### Lists all target industries from industry map catalog

| Direction | Type |
| --- | --- |
| Response | [`TargetIndustryListListCompleteResponse`](./src/resources/target-industry.ts) |

```ts
const targetIndustry = await client.targetIndustry.listListComplete('accountId');
```

## `Datasets`

### Populate dataset-specific lookup tables from existing Events data with batch processing

| Direction | Type |
| --- | --- |
| Response | [`DatasetPostPopulateResponse`](./src/resources/datasets.ts) |

```ts
const dataset = await client.datasets.postPopulate('accountId');
```

## `Events`

### Query graph neighborhood from R2 Data Catalog

Expands the single-level relationship neighborhood of one or more seed nodes (event, indicator, or tag) from R2 Data Catalog. Seeds use compact id format (type:uuid), e.g. "event:550e8400-...". Multi-seed requests merge and deduplicate results server-side. Hydrates neighbor entities with summary data from Durable Objects. Supports filtering by relationship type and dataset scope.

| Direction | Type |
| --- | --- |
| Request | [`EventListGraphParams`](./src/resources/events.ts) |
| Response | [`EventListGraphResponse`](./src/resources/events.ts) |

```ts
const event = await client.events.listGraph('accountId');
```

## `IndicatorTypes`

### Lists indicator types across multiple datasets

| Direction | Type |
| --- | --- |
| Request | [`IndicatorTypeListListParams`](./src/resources/indicator-types.ts) |
| Response | [`IndicatorTypeListListResponse`](./src/resources/indicator-types.ts) |

```ts
const indicatorType = await client.indicatorTypes.listList('accountId');
```

### Lists all indicator types

This Method is deprecated. Please use /events/dataset/:dataset_id/indicatorTypes instead.

| Direction | Type |
| --- | --- |
| Response | [`IndicatorTypeListLegacyListResponse`](./src/resources/indicator-types.ts) |

```ts
const indicatorType = await client.indicatorTypes.listLegacyList('accountId');
```

## `TagCategory`

### Lists all tag categories (SoT)

Returns all Source-of-Truth tag categories for an account.

| Direction | Type |
| --- | --- |
| Request | [`TagCategoryListListParams`](./src/resources/tag-category.ts) |
| Response | [`TagCategoryListListResponse`](./src/resources/tag-category.ts) |

```ts
const tagCategory = await client.tagCategory.listList('accountId');
```

### Creates a new tag category (SoT)

Creates a new Source-of-Truth tag category for an account.

| Direction | Type |
| --- | --- |
| Request | [`TagCategoryCreateParams`](./src/resources/tag-category.ts) |
| Response | [`TagCategoryCreateResponse`](./src/resources/tag-category.ts) |

```ts
const tagCategory = await client.tagCategory.create('accountId', {
  name: 'Actor',
});
```

### Deletes a tag category (SoT)

Deletes a Source-of-Truth tag category by UUID.

| Direction | Type |
| --- | --- |
| Request | [`TagCategoryDeleteDeleteParams`](./src/resources/tag-category.ts) |
| Response | [`TagCategoryDeleteDeleteResponse`](./src/resources/tag-category.ts) |

```ts
const tagCategory = await client.tagCategory.deleteDelete('categoryUuid', {
  account_id: 'accountId',
});
```

### Gets a tag category by UUID (SoT)

Returns a single Source-of-Truth tag category by UUID, including its full schema.

| Direction | Type |
| --- | --- |
| Request | [`TagCategoryRetrieveDetailParams`](./src/resources/tag-category.ts) |
| Response | [`TagCategoryRetrieveDetailResponse`](./src/resources/tag-category.ts) |

```ts
const tagCategory = await client.tagCategory.retrieveDetail('categoryUuid', {
  account_id: 'accountId',
});
```

### Updates a tag category (SoT)

Updates a Source-of-Truth tag category by UUID.

| Direction | Type |
| --- | --- |
| Request | [`TagCategoryPatchUpdateParams`](./src/resources/tag-category.ts) |
| Response | [`TagCategoryPatchUpdateResponse`](./src/resources/tag-category.ts) |

```ts
const tagCategory = await client.tagCategory.patchUpdate('categoryUuid', {
  account_id: 'accountId',
});
```

## `RequestForInformationRfi`

### List Requests

Lists Cloudforce One intelligence requests with filtering and pagination.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneListParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneListResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneList('accountId', {});
```

### Get Request Priority, Status, and TLP constants

Retrieves constant values used in Cloudforce One requests, including valid statuses and types.

| Direction | Type |
| --- | --- |
| Response | [`RequestForInformationRfiCloudforceOneConstantsResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneConstants('accountId');
```

### Create a New Request.

Creating a request adds the request into the Cloudforce One queue for analysis. In addition to the content, a short title, type, priority, and releasability should be provided. If one is not provided, a default will be assigned.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneNewParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneNewResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneNew('accountId', {});
```

### Get Request Quota

Retrieves quota usage for Cloudforce One standard requests.

| Direction | Type |
| --- | --- |
| Response | [`RequestForInformationRfiCloudforceOneQuotaResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneQuota('accountId');
```

### Get Request Types

Lists available request types for Cloudforce One intelligence requests.

| Direction | Type |
| --- | --- |
| Response | [`RequestForInformationRfiCloudforceOneTypesResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneTypes('accountId');
```

### Delete a Request

Deletes a Cloudforce One intelligence request and all associated data.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneDeleteParams`](./src/resources/request-for-information-rfi.ts) |

```ts
const response = await client.requestForInformationRfi.cloudforceOneDelete('requestId', {
  account_id: {},
});
```

### Get a Request

Retrieves details for a specific Cloudforce One intelligence request.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneGetParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneGetResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneGet('requestId', {
  account_id: {},
});
```

### Update a Request

Updating a request alters the request in the Cloudforce One queue. This API may be used to update any attributes of the request after the initial submission. Only fields that you choose to update need to be add to the request body.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneUpdateParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneUpdateResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneUpdate('requestId', {
  account_id: {},
  body: {},
});
```

### List Request Assets

Lists assets attached to a Cloudforce One intelligence request.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneAssetListParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneAssetListResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetList('requestId', {
  account_id: {},
  body: {},
});
```

### Create a New Request Asset

Uploads a new asset to a Cloudforce One intelligence request.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneAssetNewParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneAssetNewResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetNew('requestId', {
  account_id: {},
  body: {},
});
```

### Delete a Request Asset

Removes an asset from a Cloudforce One intelligence request.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneAssetDeleteParams`](./src/resources/request-for-information-rfi.ts) |

```ts
const response = await client.requestForInformationRfi.cloudforceOneAssetDelete('assetId', {
  account_id: {},
  request_id: {},
});
```

### Get a Request Asset

Retrieves an asset attached to a Cloudforce One intelligence request.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneAssetGetParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneAssetGetResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetGet('assetId', {
  account_id: {},
  request_id: {},
});
```

### Update a Request Asset

Updates an asset in a Cloudforce One intelligence request.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneAssetUpdateParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneAssetUpdateResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetUpdate('assetId', {
  account_id: {},
  request_id: {},
  body: {},
});
```

### List Request Messages

Lists messages in a Cloudforce One intelligence request conversation.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneMessageListParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneMessageListResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageList('requestId', {
  account_id: {},
  body: {},
});
```

### Create a New Request Message

Adds a message to a Cloudforce One intelligence request conversation.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneMessageNewParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneMessageNewResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageNew('requestId', {
  account_id: {},
  body: {},
});
```

### Delete a Request Message

Removes a message from a Cloudforce One intelligence request thread.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneMessageDeleteParams`](./src/resources/request-for-information-rfi.ts) |

```ts
const response = await client.requestForInformationRfi.cloudforceOneMessageDelete(1, {
  account_id: {},
  request_id: {},
});
```

### Update a Request Message

Updates a message in a Cloudforce One intelligence request thread.

| Direction | Type |
| --- | --- |
| Request | [`RequestForInformationRfiCloudforceOneMessageUpdateParams`](./src/resources/request-for-information-rfi.ts) |
| Response | [`RequestForInformationRfiCloudforceOneMessageUpdateResponse`](./src/resources/request-for-information-rfi.ts) |

```ts
const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageUpdate(1, {
  account_id: {},
  request_id: {},
  body: {},
});
```

## `PriorityIntelligenceRequirementsPir`

### List Priority Intelligence Requirements

Lists priority intelligence requests in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`PriorityIntelligenceRequirementsPirCloudforceOneListParams`](./src/resources/priority-intelligence-requirements-pir.ts) |
| Response | [`PriorityIntelligenceRequirementsPirCloudforceOneListResponse`](./src/resources/priority-intelligence-requirements-pir.ts) |

```ts
const priorityIntelligenceRequirementsPir =
  await client.priorityIntelligenceRequirementsPir.cloudforceOneList('accountId', {});
```

### Create a New Priority Intelligence Requirement

Creates a new priority intelligence request in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`PriorityIntelligenceRequirementsPirCloudforceOneNewParams`](./src/resources/priority-intelligence-requirements-pir.ts) |
| Response | [`PriorityIntelligenceRequirementsPirCloudforceOneNewResponse`](./src/resources/priority-intelligence-requirements-pir.ts) |

```ts
const priorityIntelligenceRequirementsPir = await client.priorityIntelligenceRequirementsPir.cloudforceOneNew(
  'accountId',
  {},
);
```

### Get Priority Intelligence Requirement Quota

Retrieves quota usage for Cloudforce One priority requests.

| Direction | Type |
| --- | --- |
| Response | [`PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse`](./src/resources/priority-intelligence-requirements-pir.ts) |

```ts
const priorityIntelligenceRequirementsPir =
  await client.priorityIntelligenceRequirementsPir.cloudforceOneQuota('accountId');
```

### Delete a Priority Intelligence Requirement

Deletes a priority intelligence request from Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams`](./src/resources/priority-intelligence-requirements-pir.ts) |

```ts
const response = await client.priorityIntelligenceRequirementsPir.cloudforceOneDelete('priorityId', {
  account_id: {},
});
```

### Get a Priority Intelligence Requirement

Retrieves a specific priority intelligence request from Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`PriorityIntelligenceRequirementsPirCloudforceOneGetParams`](./src/resources/priority-intelligence-requirements-pir.ts) |
| Response | [`PriorityIntelligenceRequirementsPirCloudforceOneGetResponse`](./src/resources/priority-intelligence-requirements-pir.ts) |

```ts
const priorityIntelligenceRequirementsPir = await client.priorityIntelligenceRequirementsPir.cloudforceOneGet(
  'priorityId',
  {
    account_id: {},
  },
);
```

### Update a Priority Intelligence Requirement

Updates a priority intelligence request in Cloudforce One.

| Direction | Type |
| --- | --- |
| Request | [`PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams`](./src/resources/priority-intelligence-requirements-pir.ts) |
| Response | [`PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse`](./src/resources/priority-intelligence-requirements-pir.ts) |

```ts
const priorityIntelligenceRequirementsPir =
  await client.priorityIntelligenceRequirementsPir.cloudforceOneUpdate('priorityId', {
    account_id: {},
    body: {},
  });
```

## `Rules`

### Delete all rules

Delete all rules in an account.

```ts
const response = await client.rules.cloudforceOneDeleteAll('accountId');
```

### List rules

Returns all rules for an account with optional filtering.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneListParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneList('accountId', {
  limit: 50,
  offset: 0,
});
```

### Create a rule

Create a new detection rule.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneCreateParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneCreate('accountId');
```

### Remove patterns from exemption rules

Remove regex patterns from per-account exemption rules. Missing keys leave that type untouched; non-existent patterns are silently skipped.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneRemoveAccountExemptionsParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneRemoveAccountExemptions('accountId');
```

### Get exemption rules for an account

Get all exemption rule patterns for the account, grouped by type.

```ts
const response = await client.rules.cloudforceOneGetExemptions('accountId');
```

### Add patterns to exemption rules

Add regex patterns to per-account exemption rules (union semantics). Missing keys leave that type untouched; duplicates are silently deduped.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneAddAccountExemptionsParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneAddAccountExemptions('accountId');
```

### Update exemption rule patterns

Replace existing exemption patterns with new values. Each key maps to an array of {old_pattern, new_pattern} entries. Missing keys leave that type untouched. Fails if any old pattern is not found or any new pattern already exists.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneUpdateAccountExemptionsParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneUpdateAccountExemptions('accountId');
```

### Get managed rules

Get DFP managed rule metadata (name and description) from YARA rules.

| Direction | Type |
| --- | --- |
| Response | [`RuleCloudforceOneGetManagedResponse`](./src/resources/rules.ts) |

```ts
const rule = await client.rules.cloudforceOneGetManaged('accountId');
```

### Search rules

Search rules using hybrid, vector, keyword, or exact retrieval, backed by AI Search with a SQL fallback.

| Direction | Type |
| --- | --- |
| Request | [`RuleSearchParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.search('accountId', {
  limit: 50,
  offset: 0,
  query: 'obfuscated proxy worker',
  mode: 'hybrid',
});
```

### Get dashboard stats

Get statistics about rules for the dashboard.

```ts
const response = await client.rules.cloudforceOneGetStats('accountId');
```

### List email rules

Returns structured email rules.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneListEmailParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneListEmail('accountId', {
  limit: 50,
  offset: 0,
});
```

### Create an email rule

Create a structured email rule.

| Direction | Type |
| --- | --- |
| Request | [`RuleCloudforceOneCreateEmailParams`](./src/resources/rules.ts) |

```ts
const response = await client.rules.cloudforceOneCreateEmail('accountId', {
  condition: {},
  enabled: true,
  name: 'x',
  strings: [],
});
```

## `Approvals`

### List rule approvals

Returns rule approvals with optional status, revision, reviewer-scope, and mutation-type filtering.

| Direction | Type |
| --- | --- |
| Request | [`ApprovalCloudforceOneListRuleParams`](./src/resources/approvals.ts) |

```ts
const response = await client.approvals.cloudforceOneListRule('accountId', {
  status: 'pending',
  latest_only: 'false',
  limit: 50,
  offset: 0,
});
```

### Get rule approval details

Get a single rule approval with current rule data.

| Direction | Type |
| --- | --- |
| Request | [`ApprovalCloudforceOneGetRuleParams`](./src/resources/approvals.ts) |

```ts
const response = await client.approvals.cloudforceOneGetRule('1', {
  account_id: 'accountId',
});
```

### Cancel a pending approval

Cancel a pending rule approval. Only its original requester may cancel it.

| Direction | Type |
| --- | --- |
| Request | [`ApprovalCloudforceOneCancelRuleParams`](./src/resources/approvals.ts) |

```ts
const response = await client.approvals.cloudforceOneCancelRule('1', {
  account_id: 'accountId',
});
```

### Revise and resubmit a rejected approval

Create a new pending revision from a rejected rule approval. Only the original requester may resubmit the latest revision.

| Direction | Type |
| --- | --- |
| Request | [`ApprovalCloudforceOneResubmitRuleParams`](./src/resources/approvals.ts) |

```ts
const response = await client.approvals.cloudforceOneResubmitRule('1', {
  account_id: 'accountId',
});
```
