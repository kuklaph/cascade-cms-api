// Universal Blocks
// ─── Asset Block ─────────────────────────────────────────────────────────────
//#region
/**
* @typedef {Object} AssetContainer
* @property {AssetContainer_Asset} asset - REQUIRED: Asset object container
* - Asset is an aggregate type that includes all possible Cascade Server assets bundled with workflow configuration. When a user does not have the privileges to bypass workflow, this configuration is used to configure the step assignments of the workflow

*/
/**
* @typedef {Object} AssetContainer_Asset
* @property {AssetContainerAsset_WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
* @property {AssetContainerAsset_FeedBlock} [feedBlock] - One is REQUIRED
* @property {AssetContainerAsset_IndexBlock} [indexBlock] - One is REQUIRED
* @property {AssetContainerAsset_TextBlock} [textBlock] - One is REQUIRED
* @property {AssetContainerAsset_XhtmlDataDefinitionBlock} [xhtmlDataDefinitionBlock] - One is REQUIRED
* @property {AssetContainerAsset_XmlBlock} [xmlBlock] - One is REQUIRED
* @property {AssetContainerAsset_File} [file] - One is REQUIRED
* @property {AssetContainerAsset_Folder} [folder] - One is REQUIRED
* @property {AssetContainerAsset_Page} [page] - ONE IS REQUIRED
* @property {AssetContainerAsset_Reference} [reference] - One is REQUIRED
* @property {AssetContainerAsset_XsltFormat} [xsltFormat] - One is REQUIRED
* @property {AssetContainerAsset_ScriptFormat} [scriptFormat] - One is REQUIRED
* @property {AssetContainerAsset_Symlink} [symlink] - One is REQUIRED
* @property {AssetContainerAsset_Template} [template] - One is REQUIRED
* @property {AssetContainerAsset_User} [user] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_Group} [group] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_Role} [role] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_AssetFactory} [assetFactory] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_AssetFactoryContainer} [assetFactoryContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_ContentType} [contentType] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_ContentTypeContainer} [contentTypeContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_ConnectorContainer} [connectorContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_FacebookConnector} [facebookConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_WordPressConnector} [wordPressConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_GoogleAnalyticsConnector} [googleAnalyticsConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_PageConfigurationSet} [pageConfigurationSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_PageConfigurationSetContainer} [pageConfigurationSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_DataDefinition} [dataDefinition] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_DataDefinitionContainer} [dataDefinitionContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_SharedField} [sharedField] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_SharedFieldContainer} [sharedFieldContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_MetadataSet} [metadataSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_MetadataSetContainer} [metadataSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_PublishSet} [publishSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_PublishSetContainer} [publishSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_Target} [target] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_SiteDestinationContainer} [siteDestinationContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_Destination} [destination] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_FileSystemTransport} [fileSystemTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_FtpTransport} [ftpTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_DatabaseTransport} [databaseTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_CloudTransport} [cloudTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_TransportContainer} [transportContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_WorkflowDefinition} [workflowDefinition] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_WorkflowDefinitionContainer} [workflowDefinitionContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_WorkflowEmail} [workflowEmail] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_WorkflowEmailContainer} [workflowEmailContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_TwitterFeedBlock} [twitterFeedBlock] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_Site} [site] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {AssetContainerAsset_EditorConfiguration} [editorConfiguration] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

*/
/**
* @typedef {Object} AssetContainerAsset_WorkflowConfiguration
* @property {string} workflowName - REQUIRED: When the workflow is instantiated, this will be its name
* @property {string} [workflowDefinitionId] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} [workflowDefinitionPath] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} workflowComments - REQUIRED: The comments for this operation which will be recorded with the workflow
* @property {AssetContainerAssetWorkflowConfiguration_WorkflowStepConfigurations[]} [workflowStepConfigurations] - NOT REQUIRED default: the defaults as defined in the workflow definition
* - The optional step configurations for each assignable step in the workflow

* @property {string} [endDate] - NOT REQUIRED
*/
/**
 * @typedef {Object} AssetContainerAssetWorkflowConfiguration_WorkflowStepConfigurations
 * @property {string} stepIdentifier - REQUIRED: The step's unique text identifier/name
 * @property {string} stepAssignment - REQUIRED: The step's assignment (user or group name)
 */
/**
* @typedef {Object} AssetContainerAsset_FeedBlock
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} createdDate
* @property {string} createdBy
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetFeedBlock_Tags} tags
* @property {AssetContainerAssetFeedBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {string} feedURL
*/
/**
 * @typedef {Object} AssetContainerAssetFeedBlock_Tags
 * @property {AssetContainerAssetFeedBlockTags_Tag} tag
 */
/**
* @typedef {Object} AssetContainerAssetFeedBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} AssetContainerAssetFeedBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 * @property {string} reviewDate
 * @property {string} startDate
 * @property {string} summary
 * @property {string} teaser
 * @property {string} title
 * @property {AssetContainerAssetFeedBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} AssetContainerAssetFeedBlockMetadata_DynamicFields
 * @property {AssetContainerAssetFeedBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} AssetContainerAssetFeedBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {AssetContainerAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} AssetContainerAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {AssetContainerAssetFeedBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} AssetContainerAssetFeedBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
* @typedef {Object} AssetContainerAsset_IndexBlock
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} createdDate
* @property {string} createdBy
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetIndexBlock_Tags} tags
* @property {AssetContainerAssetIndexBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {string} indexBlockType
* @property {string} indexedFolderId
* @property {string} indexedFolderPath
* @property {string} indexedContentTypeId
* @property {string} indexedContentTypePath
* @property {boolean} indexedFolderRecycled
* @property {number} maxRenderedAssets
* @property {number} depthOfIndex
* @property {string} renderingBehavior
* @property {boolean} indexPages
* @property {boolean} indexBlocks
* @property {boolean} indexLinks
* @property {boolean} indexFiles
* @property {boolean} indexRegularContent
* @property {boolean} indexSystemMetadata
* @property {boolean} indexUserMetadata
* @property {boolean} indexAccessRights
* @property {boolean} indexTags
* @property {boolean} indexUserInfo
* @property {boolean} indexWorkflowInfo
* @property {boolean} appendCallingPageData
* @property {string} sortMethod
* @property {string} sortOrder
* @property {string} pageXML
*/
/**
 * @typedef {Object} AssetContainerAssetIndexBlock_Tags
 * @property {AssetContainerAssetIndexBlockTags_Tag} tag
 */
/**
* @typedef {Object} AssetContainerAssetIndexBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} AssetContainerAssetIndexBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 * @property {string} reviewDate
 * @property {string} startDate
 * @property {string} summary
 * @property {string} teaser
 * @property {string} title
 * @property {AssetContainerAssetIndexBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} AssetContainerAssetIndexBlockMetadata_DynamicFields
 * @property {AssetContainerAssetIndexBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} AssetContainerAssetIndexBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {AssetContainerAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} AssetContainerAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {AssetContainerAssetIndexBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} AssetContainerAssetIndexBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
* @typedef {Object} AssetContainerAsset_TextBlock
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} createdDate
* @property {string} createdBy
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetTextBlock_Tags} tags
* @property {AssetContainerAssetTextBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {string} text
*/
/**
 * @typedef {Object} AssetContainerAssetTextBlock_Tags
 * @property {AssetContainerAssetTextBlockTags_Tag} tag
 */
/**
* @typedef {Object} AssetContainerAssetTextBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} AssetContainerAssetTextBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 * @property {string} reviewDate
 * @property {string} startDate
 * @property {string} summary
 * @property {string} teaser
 * @property {string} title
 * @property {AssetContainerAssetTextBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} AssetContainerAssetTextBlockMetadata_DynamicFields
 * @property {AssetContainerAssetTextBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} AssetContainerAssetTextBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {AssetContainerAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} AssetContainerAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {AssetContainerAssetTextBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} AssetContainerAssetTextBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
* @typedef {Object} AssetContainerAsset_XhtmlDataDefinitionBlock
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} createdDate
* @property {string} createdBy
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetXhtmlDataDefinitionBlock_Tags} tags
* @property {AssetContainerAssetXhtmlDataDefinitionBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {AssetContainerAssetXhtmlDataDefinitionBlock_StructuredData} structuredData - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content
* - Page structured data information

* @property {string} xhtml - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content

*/
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlock_Tags
 * @property {AssetContainerAssetXhtmlDataDefinitionBlockTags_Tag} tag
 */
/**
* @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 * @property {string} reviewDate
 * @property {string} startDate
 * @property {string} summary
 * @property {string} teaser
 * @property {string} title
 * @property {AssetContainerAssetXhtmlDataDefinitionBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockMetadata_DynamicFields
 * @property {AssetContainerAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {AssetContainerAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {AssetContainerAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlock_StructuredData
 * @property {string} definitionId
 * @property {string} definitionPath
 * @property {AssetContainerAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes} structuredDataNodes
 */
/**
 * @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes
 * @property {AssetContainerAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode} structuredDataNode
 */
/**
* @typedef {Object} AssetContainerAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode
* @property {string} type - REQUIRED: Each node has a type
* @property {string} identifier - REQUIRED
* - The text identifier of the node coming from corresponding field in Data Definition. If this node is preserved on the asset but corresponding field no longer exists in Data Definition, the identifier's value will be '<legacy>'.

* @property {string} structuredDataNodes
* @property {string} text
* @property {string} assetType
* @property {string} blockId
* @property {string} blockPath
* @property {string} fileId
* @property {string} filePath
* @property {string} pageId
* @property {string} pagePath
* @property {string} symlinkId
* @property {string} symlinkPath
* @property {boolean} recycled
*/
/**
* @typedef {Object} AssetContainerAsset_XmlBlock
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {AssetContainerAssetXmlBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {string} xml
*/
/**
 * @typedef {Object} AssetContainerAssetXmlBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} AssetContainerAsset_File
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {AssetContainerAssetFile_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {boolean} shouldBePublished
* @property {boolean} shouldBeIndexed
* @property {string} lastPublishedDate
* @property {string} lastPublishedBy
* @property {string} text
* @property {string} data
* @property {boolean} rewriteLinks
* @property {string} linkRewriting
*/
/**
 * @typedef {Object} AssetContainerAssetFile_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} AssetContainerAsset_Folder
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {AssetContainerAssetFolder_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {boolean} shouldBePublished
* @property {boolean} shouldBeIndexed
* @property {string} lastPublishedDate
* @property {string} lastPublishedBy
* @property {AssetContainerAssetFolder_Children[]} children
* @property {boolean} includeInStaleContent
*/
/**
 * @typedef {Object} AssetContainerAssetFolder_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} AssetContainerAssetFolder_Children
 * @property {string} id
 * @property {AssetContainerAssetFolderChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetFolderChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_Page
* @property {string} [id] - The id of the asset. When creating, this should not be present as an asset does not have an id until it is created. When editing, specify this to uniquely identify an asset.
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} [path] - NOT REQUIRED
* - When editing, specify this to uniquely identify an asset.
* - The path of an asset. This is the other way (in addition to the id) to uniquely identify an asset. When creating this will be left blank.

* @property {string} [lastModifiedDate] - NOT REQUIRED: When this asset was last modified. Read only.
* @property {string} [lastModifiedBy] - NOT REQUIRED: Who last modified this asset. Read only.
* @property {string} [createdDate] - NOT REQUIRED: When this asset was created. Read only.
* @property {string} [createdBy] - NOT REQUIRED: Who created this asset. Read only.
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} [tags] - NOT REQUIRED: Content Tags assigned to the asset
* @property {AssetContainerAssetPage_Metadata} [metadata] - NOT REQUIRED default: all empty
* - The individual wired metadata fields
* - The content of the wired metadata fields. None of the fields are required and the defaults are empty

* @property {string} [metadataSetId] - NOT REQUIRED
* - Priority: metadataSetId > metadataSetPath
* - For defining the metadata set relationship

* @property {string} [metadataSetPath] - NOT REQUIRED
* - Priority: metadataSetId > metadataSetPath
* - For defining the metadata set relationship

* @property {boolean} [reviewOnSchedule] - NOT REQUIRED
* @property {number} [reviewEvery] - NOT REQUIRED
* @property {string} [expirationFolderId] - NOT REQUIRED
* - Priority: expirationFolderId > expirationFolderPath
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [expirationFolderPath] - NOT REQUIRED: Path works only for non-recycled assets
* @property {boolean} [expirationFolderRecycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
* @property {boolean} [shouldBePublished] - NOT REQUIRED: Whether or not this asset can be published. Default: true
* @property {boolean} [shouldBeIndexed] - NOT REQUIRED: Whether or not this asset can be indexed. Default: true
* @property {string} [lastPublishedDate] - NOT REQUIRED: The last date this asset was published
* @property {string} [lastPublishedBy] - NOT REQUIRED: Who last published this asset
* @property {string} configurationSetId - One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
* - Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath)
* - For defining the configuration set or content type relationship.

* @property {string} configurationSetPath - One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
* - Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath)
* - For defining the configuration set or content type relationship.

* @property {string} contentTypeId - One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
* - Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath)
* - For defining the configuration set or content type relationship.

* @property {string} contentTypePath - One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
* - Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath)
* - For defining the configuration set or content type relationship.

* @property {string} xhtml - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content

* @property {AssetContainerAssetPage_StructuredData} structuredData - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content
* - Page structured data information

* @property {AssetContainerAssetPage_PageConfigurations[]} [pageConfigurations] - NOT REQUIRED when creating a page, but you must submit assignment information when editing if you want to maintain the region assignments
* - The page configurations containing page-level region block/format assignments

* @property {"inherit" | "absolute" | "relative" | "site-relative"} [linkRewriting] - NOT REQUIRED: default: inherit
*/
/**
 * @typedef {Object} AssetContainerAssetPage_Metadata
 * @property {string} [author] - NOT REQUIRED
 * @property {string} [displayName] - NOT REQUIRED
 * @property {string} [endDate] - NOT REQUIRED
 * @property {string} [keywords] - NOT REQUIRED
 * @property {string} [metaDescription] - NOT REQUIRED
 * @property {string} [reviewDate] - NOT REQUIRED
 * @property {string} [startDate] - NOT REQUIRED
 * @property {string} [summary] - NOT REQUIRED
 * @property {string} [teaser] - NOT REQUIRED
 * @property {string} [title] - NOT REQUIRED
 * @property {AssetContainerAssetPageMetadata_DynamicFields[]} [dynamicFields] - NOT REQUIRED: Array
 */
/**
 * @typedef {Object} AssetContainerAssetPageMetadata_DynamicFields
 * @property {string} [name] - NOT REQUIRED
 * @property {AssetContainerAssetPageMetadataDynamicFields_FieldValues[]} [fieldValues] - NOT REQUIRED: Array
 */
/**
 * @typedef {Object} AssetContainerAssetPageMetadataDynamicFields_FieldValues
 * @property {string} [value] - NOT REQUIRED
 */
/**
* @typedef {Object} AssetContainerAssetPage_StructuredData
* @property {string} [definitionId] - NOT REQUIRED
* - Priority: definitionId > definitionPath
* - For defining an asset's Data Definition relationship

* @property {string} [definitionPath] - NOT REQUIRED
* - Priority: definitionId > definitionPath
* - For defining an asset's Data Definition relationship

* @property {AssetContainerAssetPageStructuredData_StructuredDataNodes[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
*/
/**
* @typedef {Object} AssetContainerAssetPageStructuredData_StructuredDataNodes
* @property {string} type - REQUIRED: Each node has a type
* @property {string} identifier - REQUIRED
* - The text identifier of the node coming from corresponding field in Data Definition. If this node is preserved on the asset but corresponding field no longer exists in Data Definition, the identifier's value will be '<legacy>'.

* @property {any[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
* @property {string} [text] - REQUIRED if type is 'text'
* @property {string} [assetType] - REQUIRED if type is 'asset'
* @property {string} [blockId] - NOT REQUIRED
* - Priority: blockId > blockPath
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The block assigned at this page region

* @property {string} [blockPath] - NOT REQUIRED
* - Priority: blockId > blockPath
* - Path works only for non-recycled assets
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The block assigned at this page region

* @property {string} [fileId] - NOT REQUIRED
* - If assetType=file, one of fileId or filePath should be provided if asset is selected for this node
* - If assetType=linkable, fileId or filePath should be populated if the selected linkable asset is a file
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [filePath] - NOT REQUIRED
* - Path works only for non-recycled assets
* - If assetType=file, one of fileId or filePath should be provided if asset is selected for this node
* - If assetType=linkable, fileId or filePath should be populated if the selected linkable asset is a file
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [pageId] - NOT REQUIRED
* - If assetType=page, one of pageId or pagePath should be provided if asset is selected for this node
* - If assetType=linkable, pageId or pagePath should be populated if the selected linkable asset is a page
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [pagePath] - NOT REQUIRED
* - Path works only for non-recycled assets
* - If assetType=page, one of pageId or pagePath should be provided if asset is selected for this node
* - If assetType=linkable, pageId or pagePath should be populated if the selected linkable asset is a page
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [symlinkId] - NOT REQUIRED
* - If assetType=symlink, one of symlinkId or symlinkPath should be provided if asset is selected for this node
* - If assetType=linkable, symlinkId or symlinkPath should be populated if the selected linkable asset is a symlink
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [symlinkPath] - NOT REQUIRED
* - Path works only for non-recycled assets
* - If assetType=symlink, one of symlinkId or symlinkPath should be provided if asset is selected for this node
* - If assetType=linkable, symlinkId or symlinkPath should be populated if the selected linkable asset is a symlink
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {string} [recycled] - NOT REQUIRED
* - Use for reading only - this attribute is not necessary when editing or creating and will not affect these operations if provided.
* - When editing or creating and selecting a recycled asset, id of the asset should be provided (blockId instead of blockPath, fileId instead of filePath etc.).
* - If path is provided, Cascade will look only for a non-recycled asset with given path even if 'recycled=true' is provided.

*/
/**
* @typedef {Object} AssetContainerAssetPage_PageConfigurations
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {boolean} defaultConfiguration - REQUIRED: Whether or not this is the default configuration
* @property {string} [templateId] - NOT REQUIRED for page
* - One is REQUIRED for pageConfigurationSet
* - Priority: templateId > templatePath
* - The template for this configuration

* @property {string} [templatePath] - NOT REQUIRED for page
* - One is REQUIRED for pageConfigurationSet
* - Priority: templateId > templatePath
* - The template for this configuration

* @property {string} [formatId] - NOT REQUIRED
* - Priority: formatId > formatPath
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The format assigned at this page region, can be either xslt or script

* @property {string} [formatPath] - NOT REQUIRED
* - Priority: formatId > formatPath
* - Path works only for non-recycled assets
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The format assigned at this page region, can be either xslt or script

* @property {boolean} [formatRecycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
* @property {AssetContainerAssetPagePageConfigurations_PageRegions[]} [pageRegions] - NOT REQUIRED: The individual page region assignments for this configuration
* @property {string} [outputExtension] - Only required when in a site
* - The output file extension, for example '.html'

* @property {"HTML" | "XML" | "PDF" | "RTF" | "JSON" | "JS" | "CSS"} [serializationType] - Only required when in a site
* - The content type this target serializes its output as

* @property {boolean} [includeXMLDeclaration] - NOT REQUIRED default: false
* - When the serializationType is 'XML', should Cascade include the XML declaration in published files?

* @property {boolean} [publishable] - Is this configuration publishable?
* @property {string} [id] - The id of the asset. When creating, this should not be present as an asset does not have an id until it is created. When editing, specify this to uniquely identify an asset.
*/
/**
* @typedef {Object} AssetContainerAssetPagePageConfigurations_PageRegions
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} [blockId] - NOT REQUIRED
* - Priority: blockId > blockPath
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The block assigned at this page region

* @property {string} [blockPath] - NOT REQUIRED
* - Priority: blockId > blockPath
* - Path works only for non-recycled assets
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The block assigned at this page region

* @property {boolean} [blockRecycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
* @property {boolean} [noBlock] - NOT REQUIRED default: false
* - When this is set to true, this will keep a block defined at a lower level from applying to this region

* @property {string} [formatId] - NOT REQUIRED
* - Priority: formatId > formatPath
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The format assigned at this page region, can be either xslt or script

* @property {string} [formatPath] - NOT REQUIRED
* - Priority: formatId > formatPath
* - Path works only for non-recycled assets
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
* - The format assigned at this page region, can be either xslt or script

* @property {boolean} [formatRecycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
* @property {boolean} [noFormat] - NOT REQUIRED default: false
* - When this is set to true, this will keep a format defined at a lower level from applying to this region

* @property {string} [id] - The id of the asset. When creating, this should not be present as an asset does not have an id until it is created. When editing, specify this to uniquely identify an asset.
*/
/**
* @typedef {Object} AssetContainerAsset_Reference
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} referencedAssetId
* @property {string} referencedAssetPath
* @property {string} referencedAssetType
*/
/**
* @typedef {Object} AssetContainerAsset_XsltFormat
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} xml
*/
/**
* @typedef {Object} AssetContainerAsset_ScriptFormat
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} script
*/
/**
* @typedef {Object} AssetContainerAsset_Symlink
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {AssetContainerAssetSymlink_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {string} linkURL
*/
/**
 * @typedef {Object} AssetContainerAssetSymlink_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} AssetContainerAsset_Template
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {string} targetId
* @property {string} targetPath
* @property {string} formatId
* @property {string} formatPath
* @property {boolean} formatRecycled
*/
/**
 * @typedef {Object} AssetContainerAsset_User
 * @property {string} username
 * @property {string} fullName
 * @property {string} email
 * @property {string} authType
 * @property {string} password
 */
/**
 * @typedef {Object} AssetContainerAsset_Group
 * @property {string} groupName
 * @property {string} users
 * @property {string} role
 */
/**
* @typedef {Object} AssetContainerAsset_Role
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} roleType
* @property {AssetContainerAssetRole_GlobalAbilities} globalAbilities
* @property {AssetContainerAssetRole_SiteAbilities} siteAbilities
*/
/**
 * @typedef {Object} AssetContainerAssetRole_GlobalAbilities
 * @property {boolean} bypassAllPermissionsChecks
 * @property {boolean} accessSiteManagement
 * @property {boolean} createSites
 * @property {boolean} editAccessRights
 * @property {boolean} accessAudits
 */
/**
 * @typedef {Object} AssetContainerAssetRole_SiteAbilities
 * @property {boolean} bypassAllPermissionsChecks
 * @property {boolean} uploadImagesFromWysiwyg
 * @property {boolean} multiSelectCopy
 * @property {boolean} multiSelectPublish
 * @property {boolean} multiSelectMove
 */
/**
* @typedef {Object} AssetContainerAsset_AssetFactory
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} applicableGroups
* @property {string} assetType
* @property {string} baseAssetId
* @property {string} baseAssetPath
* @property {boolean} baseAssetRecycled
*/
/**
* @typedef {Object} AssetContainerAsset_AssetFactoryContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} applicableGroups
* @property {string} description
* @property {AssetContainerAssetAssetFactoryContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetAssetFactoryContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetAssetFactoryContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetAssetFactoryContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_ContentType
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} pageConfigurationSetId
* @property {string} pageConfigurationSetPath
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {string} dataDefinitionId
*/
/**
* @typedef {Object} AssetContainerAsset_ContentTypeContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetContentTypeContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetContentTypeContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetContentTypeContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetContentTypeContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_ConnectorContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetConnectorContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetConnectorContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetConnectorContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetConnectorContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_FacebookConnector
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} auth1
* @property {string} auth2
* @property {string} url
* @property {boolean} verified
* @property {string} verifiedDate
* @property {string} destinationId
* @property {string} destinationPath
*/
/**
* @typedef {Object} AssetContainerAsset_WordPressConnector
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} auth1
* @property {string} auth2
* @property {string} url
* @property {boolean} verified
* @property {string} verifiedDate
*/
/**
* @typedef {Object} AssetContainerAsset_GoogleAnalyticsConnector
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} auth1
* @property {string} auth2
* @property {string} url
* @property {boolean} verified
* @property {string} verifiedDate
*/
/**
* @typedef {Object} AssetContainerAsset_PageConfigurationSet
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetPageConfigurationSet_PageConfigurations} pageConfigurations
*/
/**
 * @typedef {Object} AssetContainerAssetPageConfigurationSet_PageConfigurations
 * @property {AssetContainerAssetPageConfigurationSetPageConfigurations_PageConfiguration} pageConfiguration
 */
/**
* @typedef {Object} AssetContainerAssetPageConfigurationSetPageConfigurations_PageConfiguration
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {boolean} defaultConfiguration - REQUIRED: Whether or not this is the default configuration
* @property {string} templateId
* @property {string} templatePath
* @property {string} formatId
*/
/**
* @typedef {Object} AssetContainerAsset_PageConfigurationSetContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetPageConfigurationSetContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetPageConfigurationSetContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetPageConfigurationSetContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetPageConfigurationSetContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_DataDefinition
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} xml
*/
/**
* @typedef {Object} AssetContainerAsset_DataDefinitionContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetDataDefinitionContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetDataDefinitionContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetDataDefinitionContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetDataDefinitionContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_SharedField
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} xml
*/
/**
* @typedef {Object} AssetContainerAsset_SharedFieldContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetSharedFieldContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetSharedFieldContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetSharedFieldContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetSharedFieldContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_MetadataSet
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {boolean} authorFieldRequired
* @property {string} authorFieldVisibility
* @property {string} authorFieldHelpText
* @property {boolean} descriptionFieldRequired
* @property {string} descriptionFieldVisibility
*/
/**
* @typedef {Object} AssetContainerAsset_MetadataSetContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetMetadataSetContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetMetadataSetContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetMetadataSetContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetMetadataSetContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_PublishSet
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetPublishSet_Files} files
* @property {AssetContainerAssetPublishSet_Folders} folders
* @property {AssetContainerAssetPublishSet_Pages} pages
* @property {boolean} usesScheduledPublishing
* @property {string} scheduledPublishDestinationMode
*/
/**
 * @typedef {Object} AssetContainerAssetPublishSet_Files
 * @property {AssetContainerAssetPublishSetFiles_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} AssetContainerAssetPublishSetFiles_PublishableAssetIdentifier
 * @property {string} id
 * @property {AssetContainerAssetPublishSetFilesPublishableAssetIdentifier_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetPublishSetFilesPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
 * @typedef {Object} AssetContainerAssetPublishSet_Folders
 * @property {AssetContainerAssetPublishSetFolders_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} AssetContainerAssetPublishSetFolders_PublishableAssetIdentifier
 * @property {string} id
 * @property {AssetContainerAssetPublishSetFoldersPublishableAssetIdentifier_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetPublishSetFoldersPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
 * @typedef {Object} AssetContainerAssetPublishSet_Pages
 * @property {AssetContainerAssetPublishSetPages_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} AssetContainerAssetPublishSetPages_PublishableAssetIdentifier
 * @property {string} id
 * @property {AssetContainerAssetPublishSetPagesPublishableAssetIdentifier_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetPublishSetPagesPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_PublishSetContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetPublishSetContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetPublishSetContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetPublishSetContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetPublishSetContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_Target
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentTargetId
* @property {string} parentTargetPath
* @property {string} path
* @property {string} baseFolderId
* @property {string} baseFolderPath
*/
/**
* @typedef {Object} AssetContainerAsset_SiteDestinationContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetSiteDestinationContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetSiteDestinationContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetSiteDestinationContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetSiteDestinationContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_Destination
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} transportId
* @property {string} transportPath
* @property {string} applicableGroups
*/
/**
* @typedef {Object} AssetContainerAsset_FileSystemTransport
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} directory
*/
/**
* @typedef {Object} AssetContainerAsset_FtpTransport
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} hostName
* @property {number} port
* @property {boolean} doPASV
* @property {string} username
* @property {string} authMode
*/
/**
* @typedef {Object} AssetContainerAsset_DatabaseTransport
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {number} transportSiteId
* @property {string} serverName
* @property {number} serverPort
* @property {string} databaseName
* @property {string} username
*/
/**
* @typedef {Object} AssetContainerAsset_CloudTransport
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} key
* @property {string} secret
* @property {string} bucketName
* @property {string} basePath
*/
/**
* @typedef {Object} AssetContainerAsset_TransportContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetTransportContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetTransportContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetTransportContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetTransportContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_WorkflowDefinition
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} applicableGroups
* @property {boolean} copy
* @property {boolean} create
* @property {boolean} delete
* @property {boolean} edit
*/
/**
* @typedef {Object} AssetContainerAsset_WorkflowDefinitionContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetWorkflowDefinitionContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetWorkflowDefinitionContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetWorkflowDefinitionContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetWorkflowDefinitionContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_WorkflowEmail
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} subject
* @property {string} body
*/
/**
* @typedef {Object} AssetContainerAsset_WorkflowEmailContainer
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentContainerId
* @property {string} parentContainerPath
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {AssetContainerAssetWorkflowEmailContainer_Children[]} children
*/
/**
 * @typedef {Object} AssetContainerAssetWorkflowEmailContainer_Children
 * @property {string} id
 * @property {AssetContainerAssetWorkflowEmailContainerChildren_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} AssetContainerAssetWorkflowEmailContainerChildren_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} AssetContainerAsset_TwitterFeedBlock
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} parentFolderId - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} parentFolderPath - One is REQUIRED
* - Priority: parentFolderId > parentFolderPath
* - The parent folder relationship. REQUIRED on create, ignored on edit.  Use move operation to change parent folder after an asset has been created

* @property {string} path
* @property {string} lastModifiedDate
* @property {string} lastModifiedBy
* @property {AssetContainerAssetTwitterFeedBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {string} accountName
* @property {string} searchString
* @property {number} maxResults
* @property {boolean} useDefaultStyle
* @property {boolean} excludeJQuery
*/
/**
 * @typedef {Object} AssetContainerAssetTwitterFeedBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} AssetContainerAsset_Site
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} url
* @property {string} extensionsToStrip
* @property {string} defaultMetadataSetId
* @property {string} defaultMetadataSetPath
* @property {string} siteAssetFactoryContainerId
*/
/**
* @typedef {Object} AssetContainerAsset_EditorConfiguration
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} cssFileId
* @property {string} cssFilePath
* @property {boolean} cssFileRecycled
*/
//#endregion

// ─── Read Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} readRequest
 * @property {ReadRequest_Identifier} identifier - REQUIRED: Parameters used when reading an asset
 */
/**
* @typedef {Object} ReadRequest_Identifier
* @property {string} id - One is REQUIRED: id | type | path
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {ReadRequestIdentifier_Path} path - One is REQUIRED: id | type | path
* - The Path object container.
* - Path works only for non-recycled assets

* @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - One is REQUIRED: id | type | path
* - The type of asset to read.

* @property {boolean} [recycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
*/
/**
* @typedef {Object} ReadRequestIdentifier_Path
* @property {string} [path] - NOT REQUIRED: The path to the asset.
* - When reading a site, the 'path' element should be populated with the parent site's name

* @property {string} [siteId] - NOT REQUIRED: The siteId of the parent site.
* @property {string} [siteName] - NOT REQUIRED: The parent siteName
*/
//#endregion

// ─── Read Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} readResponse
 * @property {boolean} success
 * @property {string} message
 * @property {AssetContainer_Asset} asset
 */
//#endregion

// ─── Remove Request ──────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} removeRequest
 * @property {RemoveRequest_Identifier} identifier - REQUIRED: Parameters used when reading an asset
 * @property {RemoveRequest_WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
 * @property {RemoveRequest_DeleteParameters} [deleteParameters] - NOT REQUIRED: Parameters used when deleting an asset
 */
/**
* @typedef {Object} RemoveRequest_Identifier
* @property {string} id - One is REQUIRED: id | type | path
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {RemoveRequestIdentifier_Path} path - One is REQUIRED: id | type | path
* - The Path object container.
* - Path works only for non-recycled assets

* @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - One is REQUIRED: id | type | path
* - The type of asset to read.

* @property {boolean} [recycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
*/
/**
* @typedef {Object} RemoveRequestIdentifier_Path
* @property {string} [path] - NOT REQUIRED: The path to the asset.
* - When reading a site, the 'path' element should be populated with the parent site's name

* @property {string} [siteId] - NOT REQUIRED: The siteId of the parent site.
* @property {string} [siteName] - NOT REQUIRED: The parent siteName
*/
/**
* @typedef {Object} RemoveRequest_WorkflowConfiguration
* @property {string} workflowName - REQUIRED: When the workflow is instantiated, this will be its name
* @property {string} [workflowDefinitionId] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} [workflowDefinitionPath] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} workflowComments - REQUIRED: The comments for this operation which will be recorded with the workflow
* @property {RemoveRequestWorkflowConfiguration_WorkflowStepConfigurations[]} [workflowStepConfigurations] - NOT REQUIRED default: the defaults as defined in the workflow definition
* - The optional step configurations for each assignable step in the workflow

* @property {string} [endDate] - NOT REQUIRED: Optional due date for the workflow.  If not specified, will default to 7 days from today
*/
/**
 * @typedef {Object} RemoveRequestWorkflowConfiguration_WorkflowStepConfigurations
 * @property {string} stepIdentifier - REQUIRED: The step's unique text identifier/name
 * @property {string} stepAssignment - REQUIRED: The step's assignment (user or group name)
 */
/**
 * @typedef {Object} RemoveRequest_DeleteParameters
 * @property {boolean} [unpublish] - NOT REQUIRED: when true, the asset will be unpublished. Default: false
 * @property {RemoveRequestDeleteParameters_Destinations[]} [destinations] - NOT REQUIRED: unpublishes the asset from the given destinations. Default: all enabled destinations in the asset's site
 * @property {boolean} doWorkflow - REQUIRED
 */
/**
* @typedef {Object} RemoveRequestDeleteParameters_Destinations
* @property {string} id - One is REQUIRED: id | type | path
* - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.

* @property {RemoveRequestDeleteParametersDestinations_Path} path - One is REQUIRED: id | type | path
* - The Path object container.
* - Path works only for non-recycled assets

* @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - One is REQUIRED: id | type | path
* - The type of asset to read.

* @property {boolean} [recycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
*/
/**
* @typedef {Object} RemoveRequestDeleteParametersDestinations_Path
* @property {string} [path] - NOT REQUIRED: The path to the asset.
* - When reading a site, the 'path' element should be populated with the parent site's name

* @property {string} [siteId] - NOT REQUIRED: The siteId of the parent site.
* @property {string} [siteName] - NOT REQUIRED: The parent siteName
*/
//#endregion

// ─── Remove Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} removeResponse
 * @property {string} success
 * @property {string} message
 */
//#endregion

// ─── Edit Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {AssetContainer} editRequest
 */
//#endregion

// ─── Edit Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} editResponse
 * @property {string} assetId
 * @property {boolean} success
 * @property {string} message
 * @property {string[]} warnings
 */
//#endregion

// ─── Create Request ──────────────────────────────────────────────────────────
//#region
/**
 * @typedef {AssetContainer} createRequest
 */
//#endregion

// ─── Create Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} createResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} createdAssetId
 */
//#endregion

// ─── Move Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} moveRequest
 * @property {MoveRequest_Identifier} identifier - REQUIRED: Parameters used when reading an asset
 * @property {MoveRequest_WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
 * @property {MoveRequest_MoveParameters} moveParameters
 */
/**
 * @typedef {Object} MoveRequest_Identifier
 * @property {string} id - OPT 1: REQUIRED
 * @property {MoveRequestIdentifier_Path} path - OPT 2: REQUIRED
 * @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - OPT 2: REQUIRED
 * @property {boolean} [recycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
 */
/**
* @typedef {Object} MoveRequestIdentifier_Path
* @property {string} [path] - NOT REQUIRED: The path to the asset.
* - When reading a site, the 'path' element should be populated with the parent site's name

* @property {string} [siteId] - NOT REQUIRED: The siteId of the parent site.
* @property {string} [siteName] - NOT REQUIRED: The parent siteName
*/
/**
* @typedef {Object} MoveRequest_WorkflowConfiguration
* @property {string} workflowName - REQUIRED: When the workflow is instantiated, this will be its name
* @property {string} [workflowDefinitionId] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} [workflowDefinitionPath] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} workflowComments - REQUIRED: The comments for this operation which will be recorded with the workflow
* @property {MoveRequestWorkflowConfiguration_WorkflowStepConfigurations[]} [workflowStepConfigurations] - NOT REQUIRED default: the defaults as defined in the workflow definition
* - The optional step configurations for each assignable step in the workflow

* @property {string} [endDate] - NOT REQUIRED: Optional due date for the workflow.  If not specified, will default to 7 days from today
*/
/**
 * @typedef {Object} MoveRequestWorkflowConfiguration_WorkflowStepConfigurations
 * @property {string} stepIdentifier - REQUIRED: The step's unique text identifier/name
 * @property {string} stepAssignment - REQUIRED: The step's assignment (user or group name)
 */
/**
* @typedef {Object} MoveRequest_MoveParameters
* @property {boolean} [unpublish] - NOT REQUIRED
* @property {MoveRequestMoveParameters_DestinationContainerIdentifier} destinationContainerIdentifier - NOT REQUIRED
* - If not included, asset will be renamed
* - CHOOSE OPTION 1 OR 2 PARAMETERS

* @property {boolean} doWorkflow - REQUIRED
* @property {string} [newName] - NOT REQUIRED: If not included name won't change.
*/
/**
 * @typedef {Object} MoveRequestMoveParameters_DestinationContainerIdentifier
 * @property {string} id - OPT 1: REQUIRED
 * @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - REQUIRED
 * @property {MoveRequestMoveParametersDestinationContainerIdentifier_Path} path - OPT 2: REQUIRED
 */
/**
 * @typedef {Object} MoveRequestMoveParametersDestinationContainerIdentifier_Path
 * @property {string} path - OPT 2: REQUIRED
 * @property {string} siteName - OPT 2: REQUIRED: One of siteId or siteName
 * @property {string} siteId - OPT 2: REQUIRED: One of siteId or siteName
 * @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - REQUIRED
 */
//#endregion

// ─── Move Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} moveResponse
 * @property {string} success
 * @property {string} message
 */
//#endregion

// ─── Search Request ──────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} searchRequest
 * @property {SearchRequest_SearchInformation} searchInformation
 */
/**
* @typedef {Object} SearchRequest_SearchInformation
* @property {string} searchTerms - REQUIRED
* @property {string} [siteId] - NOT REQUIRED, if left blank, all sites will be searched
* - Id or name of the site to search

* @property {string} [siteName] - NOT REQUIRED: The parent site name
* @property {"name"[] | "path"[] | "createdBy"[] | "modifiedBy"[] | "displayName"[] | "title"[] | "summary"[] | "teaser"[] | "keywords"[] | "description"[] | "author"[] | "blob"[] | "velocityFormatContent"[] | "xml"[] | "link"[]} [searchFields] - NOT REQUIRED
* - Asset fields to search (e.g. name, title, content), see searchField simpleType for valid values

* @property {"assetfactory"[] | "assetfactorycontainer"[] | "block"[] | "block_FEED"[] | "block_INDEX"[] | "block_TEXT"[] | "block_XHTML_DATADEFINITION"[] | "block_XML"[] | "block_TWITTER_FEED"[] | "connectorcontainer"[] | "twitterconnector"[] | "facebookconnector"[] | "wordpressconnector"[] | "googleanalyticsconnector"[] | "contenttype"[] | "contenttypecontainer"[] | "destination"[] | "editorconfiguration"[] | "file"[] | "folder"[] | "group"[] | "message"[] | "metadataset"[] | "metadatasetcontainer"[] | "page"[] | "pageconfigurationset"[] | "pageconfiguration"[] | "pageregion"[] | "pageconfigurationsetcontainer"[] | "publishset"[] | "publishsetcontainer"[] | "reference"[] | "role"[] | "datadefinition"[] | "datadefinitioncontainer"[] | "sharedfield"[] | "sharedfieldcontainer"[] | "format"[] | "format_XSLT"[] | "format_SCRIPT"[] | "site"[] | "sitedestinationcontainer"[] | "symlink"[] | "target"[] | "template"[] | "transport"[] | "transport_fs"[] | "transport_ftp"[] | "transport_db"[] | "transport_cloud"[] | "transportcontainer"[] | "user"[] | "workflow"[] | "workflowdefinition"[] | "workflowdefinitioncontainer"[] | "workflowemail"[] | "workflowemailcontainer"[]} [searchTypes] - NOT REQUIRED, if left blank, all asset types will be searched
* - Asset types to search (e.g. page, folder, site)

*/
//#endregion

// ─── Search Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} searchResponse
 * @property {boolean} success
 * @property {string} message
 * @property {SearchResponse_Matches} matches
 */
/**
 * @typedef {Object} SearchResponse_Matches
 * @property {SearchResponseMatches_Match} match
 */
/**
 * @typedef {Object} SearchResponseMatches_Match
 * @property {string} id
 * @property {SearchResponseMatchesMatch_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} SearchResponseMatchesMatch_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
//#endregion

// ─── Copy Request ────────────────────────────────────────────────────────────

// ─── Copy Response ───────────────────────────────────────────────────────────

// ─── Sitecopy Request ────────────────────────────────────────────────────────

// ─── Sitecopy Response ───────────────────────────────────────────────────────

// ─── Readaccessrights Request ────────────────────────────────────────────────

// ─── Readaccessrights Response ───────────────────────────────────────────────

// ─── Editaccessrights Request ────────────────────────────────────────────────

// ─── Editaccessrights Response ───────────────────────────────────────────────

// ─── Readworkflowsettings Request ────────────────────────────────────────────

// ─── Readworkflowsettings Response ───────────────────────────────────────────

// ─── Editworkflowsettings Request ────────────────────────────────────────────

// ─── Editworkflowsettings Response ───────────────────────────────────────────

// ─── Listsubscribers Request ─────────────────────────────────────────────────

// ─── Listsubscribers Response ────────────────────────────────────────────────

// ─── Listmessages Request ────────────────────────────────────────────────────

// ─── Listmessages Response ───────────────────────────────────────────────────

// ─── Markmessages Request ────────────────────────────────────────────────────

// ─── Markmessages Response ───────────────────────────────────────────────────

// ─── Deletemessage Request ───────────────────────────────────────────────────

// ─── Deletemessage Response ──────────────────────────────────────────────────

// ─── Checkout Request ────────────────────────────────────────────────────────

// ─── Checkout Response ───────────────────────────────────────────────────────

// ─── Checkin Request ─────────────────────────────────────────────────────────

// ─── Checkin Response ────────────────────────────────────────────────────────

// ─── Listsites Request ───────────────────────────────────────────────────────

// ─── Listsites Response ──────────────────────────────────────────────────────

// ─── Readaudits Request ──────────────────────────────────────────────────────

// ─── Readaudits Response ─────────────────────────────────────────────────────

// ─── Readworkflowinformation Request ─────────────────────────────────────────

// ─── Readworkflowinformation Response ────────────────────────────────────────

// ─── Performworkflowtransition Request ───────────────────────────────────────

// ─── Performworkflowtransition Response ──────────────────────────────────────

// ─── Readpreferences Request ─────────────────────────────────────────────────

// ─── Readpreferences Response ────────────────────────────────────────────────

// export default {};

// "feedBlock" | "indexBlock" | "textBlock" | "xhtmlDataDefinitionBlock" | "xmlBlock" | "file" | "folder" | "page" | "reference" | "xsltFormat" | "scriptFormat" | "symlink" | "template" | "user" | "group" | "role" | "assetFactory" | "assetFactoryContainer" | "contentType" | "contentTypeContainer" | "connectorContainer" | "facebookConnector" | "wordPressConnector" | "googleAnalyticsConnector" | "pageConfigurationSet" | "pageConfigurationSetContainer" | "dataDefinition" | "dataDefinitionContainer" | "sharedField" | "sharedFieldContainer" | "metadataSet" | "metadataSetContainer" | "publishSet" | "publishSetContainer" | "target" | "siteDestinationContainer" | "destination" | "fileSystemTransport" | "ftpTransport" | "databaseTransport" | "cloudTransport" | "transportContainer" | "workflowDefinition" | "workflowDefinitionContainer" | "workflowEmail" | "workflowEmailContainer" | "twitterFeedBlock" | "site" | "editorConfiguration"

const CascadeAPIMethods = {
  /**
   * read operation.
   *
   * @param {readRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {readResponse}
   */
  read(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `read`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * removal operation.
   *
   * @param {removeRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {removeResponse}
   */
  remove(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    // Delete
    const endPoint = `delete`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * edit operation.
   *
   * @param {editRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {editResponse}
   */
  edit(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `edit`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * create operation.
   *
   * @param {createRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {createResponse}
   */
  create(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `create`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * move operation.
   *
   * @param {moveRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {moveResponse}
   */
  move(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `move`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * search operation.
   *
   * @param {searchRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {searchResponse}
   */
  search(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "search";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * copy operation.
   *
   * @param {copyRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {copyResponse}
   */
  copy(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "copy";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * siteCopy operation.
   *
   * @param {siteCopyRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {siteCopyResponse}
   */
  siteCopy(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "siteCopy";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * readAccessRights operation.
   *
   * @param {readAccessRightsRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {readAccessRightsResponse}
   */
  readAccessRights(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readAccessRights";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * editAccessRights operation.
   *
   * @param {editAccessRightsRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {editAccessRightsResponse}
   */
  editAccessRights(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "editAccessRights";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * readWorkflowSettings operation.
   *
   * @param {readWorkflowSettingsRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {readWorkflowSettingsResponse}
   */
  readWorkflowSettings(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readWorkflowSettings";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * editWorkflowSettings operation.
   *
   * @param {editWorkflowSettingsRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {editWorkflowSettingsResponse}
   */
  editWorkflowSettings(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "editWorkflowSettings";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * listSubscribers operation.
   *
   * @param {listSubscribersRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {listSubscribersResponse}
   */
  listSubscribers(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "listSubscribers";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * listMessages operation.
   *
   * @param {listMessagesRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {listMessagesResponse}
   */
  listMessages(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "listMessages";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * markMessage operation.
   *
   * @param {markMessageRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {markMessageResponse}
   */
  markMessage(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "markMessage";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * deleteMessage operation.
   *
   * @param {deleteMessageRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {deleteMessageResponse}
   */
  deleteMessage(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "deleteMessage";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * checkOut operation.
   *
   * @param {checkOutRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {checkOutResponse}
   */
  checkOut(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "checkOut";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * checkIn operation.
   *
   * @param {checkInRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {checkInResponse}
   */
  checkIn(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "checkIn";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * listSites operation.
   *
   * @param {listSitesRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {listSitesResponse}
   */
  listSites(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "listSites";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * readAudits operation.
   *
   * @param {readAuditsRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {readAuditsResponse}
   */
  readAudits(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readAudits";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * readWorkflowInformation operation.
   *
   * @param {readWorkflowInformationRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {readWorkflowInformationResponse}
   */
  readWorkflowInformation(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readWorkflowInformation";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * performWorkflowTransition operation.
   *
   * @param {performWorkflowTransitionRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {performWorkflowTransitionResponse}
   */
  performWorkflowTransition(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "performWorkflowTransition";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  /**
   * readPreferences operation.
   *
   * @param {readPreferencesRequest} opts - The starting object container.
   * @param {Boolean} [muteHttpExceptions] - Optional: Whether or not to mute http exceptions
   * @return {readPreferencesResponse}
   */
  readPreferences(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readPreferences";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  },
  call(endPoint, requestParams) {
    if (!this.apiKey || !this.url) {
      throw `Missing API key or cascade URL`;
    }
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };
    requestParams.headers = headers;
    const request = UrlFetchApp.fetch(this.url + endPoint, requestParams);
    const parsed = JSON.parse(request);
    return parsed;
  },
};

const CascadeAPI = ({ apiKey, url }) => {
  return { ...CascadeAPIMethods, apiKey, url };
};
