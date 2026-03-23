# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-03-23

### Breaking Changes (Minor)

- `OperationResult.success` type changed from `string` to `boolean` — the REST API returns a boolean, not a string. If your code compares `result.success === "true"`, update it to `result.success === true`.
- `OperationResult.message` changed from required to optional — the REST API omits this field on success.

### Added

- `editPreference` operation — create or update user preferences
- `EditPreferenceRequest` and `EditPreferenceResponse` types
- `SiteLinkRewriting` type — `"absolute" | "relative" | "site-relative"` (excludes `"inherit"` since sites cannot inherit)
- `XmlBlockProperties.xml` — XML content property was missing
- `XhtmlDataDefinitionBlockProperties.xhtml` — XHTML content property was missing
- `AclEntry.id` — optional group id property was missing
- `CheckInRequest.comments` — required comments property was missing
- `SiteProperties.extraSettings` — optional JSON string property was missing
- `PublishSetContainerProperties.children` — container children property was missing
- `Group` now inherits `BaseAsset` (provides `id`)
- OpenAPI JSON spec added to swagger-ui alongside YAML
- `yaml` dev dependency for spec conversion

### Fixed

- `FileProperties.data` type: `any[]` → `number[]` (REST API returns byte array)
- `StructuredDataNode.recycled` type: `string` → `boolean`
- `SiteProperties.linkRewriting` type: `LinkRewriting` → `SiteLinkRewriting` (sites cannot use `"inherit"`)
- `WorkflowStep.actions` type: was singular `WorkflowActions`, now `WorkflowAction[]` (array)
- `PublishInformation.destinations` type: was singular `AssetIdentifiers`, now `Identifier[]` (array)
- `PublishSetContainer` now uses intersection type with `PublishSetContainerProperties`
- `XmlBlock` now uses intersection type with `XmlBlockProperties`
- `types/main.d.ts` now uses type-only import/export syntax
- Swagger-UI OpenAPI spec replaced with verified WSDL-derived version

### Changed

- Swagger-UI spec rebuilt from WSDL-derived REST spec with original front matter restored
- Version bump to 1.1.0

## [1.0.8] - 2024

- Updated request timed out handler to account for "Unable to connect" errors

## [1.0.7] - 2024

- Minor typo fix

## [1.0.6] - 2024

- Updated types to account for SOAP/REST discrepancy with `editAccessRights` and `editWorkflowSettings` endpoints
- Fixed `dynamicFields` type to be an array of objects

## [1.0.5] - 2024

- Fixed error handling in `withRetry` function
- Removed axios in favor of fetch

## [1.0.4] - 2024

- Updated Apps Script types
- Fixed Apps Script retry function

## [1.0.3] - 2024

- Created `.d.ts` declaration files (supersedes JSDoc in `types.js`)
- Moved `types.js` to `types/` folder

## [1.0.2] - 2024

- Removed `types.d.ts` declaration file as it interfered with JSDoc in `types.js`

## [1.0.1] - 2024

- Added JSDoc to main CascadeAPI function
- Moved timeout to optional default parameter
- Fixed missing `.d.ts` file for npm publish

## [1.0.0] - 2024

- Initial release
- WSDL-to-JSDoc type conversion
- OpenAPI spec documentation
- Swagger UI
- Apps Script support
- Exponential retry with configurable backoff
- 24 API operations (read, create, edit, delete, move, copy, search, publish, and more)
