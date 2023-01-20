// ─── Read Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} readRequest
 * @property {ReadRequest_Identifier} identifier
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
 * @property {string} success
 * @property {string} message
 * @property {ReadResponse_Asset} asset
 */
/**
 * @typedef {Object} ReadResponse_Asset
 * @property {ReadResponseAsset_WorkflowConfiguration} workflowConfiguration
 * @property {ReadResponseAsset_FeedBlock} feedBlock
 * @property {ReadResponseAsset_IndexBlock} indexBlock
 * @property {ReadResponseAsset_TextBlock} textBlock
 * @property {ReadResponseAsset_XhtmlDataDefinitionBlock} xhtmlDataDefinitionBlock
 * @property {ReadResponseAsset_XmlBlock} xmlBlock
 * @property {ReadResponseAsset_File} file
 * @property {ReadResponseAsset_Folder} folder
 * @property {ReadResponseAsset_Page} page
 * @property {ReadResponseAsset_Reference} reference
 * @property {ReadResponseAsset_XsltFormat} xsltFormat
 * @property {ReadResponseAsset_ScriptFormat} scriptFormat
 * @property {ReadResponseAsset_Symlink} symlink
 * @property {ReadResponseAsset_Template} template
 * @property {ReadResponseAsset_User} user
 * @property {ReadResponseAsset_Group} group
 * @property {ReadResponseAsset_Role} role
 * @property {ReadResponseAsset_AssetFactory} assetFactory
 * @property {ReadResponseAsset_AssetFactoryContainer} assetFactoryContainer
 * @property {ReadResponseAsset_ContentType} contentType
 * @property {ReadResponseAsset_ContentTypeContainer} contentTypeContainer
 * @property {ReadResponseAsset_ConnectorContainer} connectorContainer
 * @property {ReadResponseAsset_FacebookConnector} facebookConnector
 * @property {ReadResponseAsset_WordPressConnector} wordPressConnector
 * @property {ReadResponseAsset_GoogleAnalyticsConnector} googleAnalyticsConnector
 * @property {ReadResponseAsset_PageConfigurationSet} pageConfigurationSet
 * @property {ReadResponseAsset_PageConfigurationSetContainer} pageConfigurationSetContainer
 * @property {ReadResponseAsset_DataDefinition} dataDefinition
 * @property {ReadResponseAsset_DataDefinitionContainer} dataDefinitionContainer
 * @property {ReadResponseAsset_SharedField} sharedField
 * @property {ReadResponseAsset_SharedFieldContainer} sharedFieldContainer
 * @property {ReadResponseAsset_MetadataSet} metadataSet
 * @property {ReadResponseAsset_MetadataSetContainer} metadataSetContainer
 * @property {ReadResponseAsset_PublishSet} publishSet
 * @property {ReadResponseAsset_PublishSetContainer} publishSetContainer
 * @property {ReadResponseAsset_Target} target
 * @property {ReadResponseAsset_SiteDestinationContainer} siteDestinationContainer
 * @property {ReadResponseAsset_Destination} destination
 * @property {ReadResponseAsset_FileSystemTransport} fileSystemTransport
 * @property {ReadResponseAsset_FtpTransport} ftpTransport
 * @property {ReadResponseAsset_DatabaseTransport} databaseTransport
 * @property {ReadResponseAsset_CloudTransport} cloudTransport
 * @property {ReadResponseAsset_TransportContainer} transportContainer
 * @property {ReadResponseAsset_WorkflowDefinition} workflowDefinition
 * @property {ReadResponseAsset_WorkflowDefinitionContainer} workflowDefinitionContainer
 * @property {ReadResponseAsset_WorkflowEmail} workflowEmail
 * @property {ReadResponseAsset_WorkflowEmailContainer} workflowEmailContainer
 * @property {ReadResponseAsset_TwitterFeedBlock} twitterFeedBlock
 * @property {ReadResponseAsset_Site} site
 * @property {ReadResponseAsset_EditorConfiguration} editorConfiguration
 */
/**
 * @typedef {Object} ReadResponseAsset_WorkflowConfiguration
 * @property {string} workflowName
 * @property {string} workflowDefinitionId
 * @property {string} workflowDefinitionPath
 * @property {string} workflowComments
 * @property {ReadResponseAssetWorkflowConfiguration_WorkflowStepConfigurations} workflowStepConfigurations
 * @property {string} endDate
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowConfiguration_WorkflowStepConfigurations
 * @property {ReadResponseAssetWorkflowConfigurationWorkflowStepConfigurations_WorkflowStepConfiguration} workflowStepConfiguration
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowConfigurationWorkflowStepConfigurations_WorkflowStepConfiguration
 * @property {string} stepIdentifier
 * @property {string} stepAssignment
 */
/**
 * @typedef {Object} ReadResponseAsset_FeedBlock
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} createdDate
 * @property {string} createdBy
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetFeedBlock_Tags} tags
 * @property {ReadResponseAssetFeedBlock_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetFeedBlock_Tags
 * @property {ReadResponseAssetFeedBlockTags_Tag} tag
 */
/**
 * @typedef {Object} ReadResponseAssetFeedBlockTags_Tag
 * @property {string} name
 */
/**
 * @typedef {Object} ReadResponseAssetFeedBlock_Metadata
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
 * @property {ReadResponseAssetFeedBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} ReadResponseAssetFeedBlockMetadata_DynamicFields
 * @property {ReadResponseAssetFeedBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
 * @typedef {Object} ReadResponseAssetFeedBlockMetadataDynamicFields_DynamicField
 * @property {string} name
 * @property {ReadResponseAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
 */
/**
 * @typedef {Object} ReadResponseAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {string} fieldValue
 */
/**
 * @typedef {Object} ReadResponseAsset_IndexBlock
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} createdDate
 * @property {string} createdBy
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetIndexBlock_Tags} tags
 * @property {ReadResponseAssetIndexBlock_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetIndexBlock_Tags
 * @property {ReadResponseAssetIndexBlockTags_Tag} tag
 */
/**
 * @typedef {Object} ReadResponseAssetIndexBlockTags_Tag
 * @property {string} name
 */
/**
 * @typedef {Object} ReadResponseAssetIndexBlock_Metadata
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
 * @property {ReadResponseAssetIndexBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} ReadResponseAssetIndexBlockMetadata_DynamicFields
 * @property {ReadResponseAssetIndexBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
 * @typedef {Object} ReadResponseAssetIndexBlockMetadataDynamicFields_DynamicField
 * @property {string} name
 * @property {ReadResponseAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
 */
/**
 * @typedef {Object} ReadResponseAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {string} fieldValue
 */
/**
 * @typedef {Object} ReadResponseAsset_TextBlock
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} createdDate
 * @property {string} createdBy
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetTextBlock_Tags} tags
 * @property {ReadResponseAssetTextBlock_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetTextBlock_Tags
 * @property {ReadResponseAssetTextBlockTags_Tag} tag
 */
/**
 * @typedef {Object} ReadResponseAssetTextBlockTags_Tag
 * @property {string} name
 */
/**
 * @typedef {Object} ReadResponseAssetTextBlock_Metadata
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
 * @property {ReadResponseAssetTextBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} ReadResponseAssetTextBlockMetadata_DynamicFields
 * @property {ReadResponseAssetTextBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
 * @typedef {Object} ReadResponseAssetTextBlockMetadataDynamicFields_DynamicField
 * @property {string} name
 * @property {ReadResponseAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
 */
/**
 * @typedef {Object} ReadResponseAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {string} fieldValue
 */
/**
 * @typedef {Object} ReadResponseAsset_XhtmlDataDefinitionBlock
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} createdDate
 * @property {string} createdBy
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetXhtmlDataDefinitionBlock_Tags} tags
 * @property {ReadResponseAssetXhtmlDataDefinitionBlock_Metadata} metadata
 * @property {string} metadataSetId
 * @property {string} metadataSetPath
 * @property {boolean} reviewOnSchedule
 * @property {number} reviewEvery
 * @property {string} expirationFolderId
 * @property {string} expirationFolderPath
 * @property {boolean} expirationFolderRecycled
 * @property {ReadResponseAssetXhtmlDataDefinitionBlock_StructuredData} structuredData
 * @property {string} xhtml
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlock_Tags
 * @property {ReadResponseAssetXhtmlDataDefinitionBlockTags_Tag} tag
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlockTags_Tag
 * @property {string} name
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlock_Metadata
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
 * @property {ReadResponseAssetXhtmlDataDefinitionBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlockMetadata_DynamicFields
 * @property {ReadResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField
 * @property {string} name
 * @property {ReadResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {string} fieldValue
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlock_StructuredData
 * @property {string} definitionId
 * @property {string} definitionPath
 * @property {ReadResponseAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes} structuredDataNodes
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes
 * @property {ReadResponseAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode} structuredDataNode
 */
/**
 * @typedef {Object} ReadResponseAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode
 * @property {string} type
 * @property {string} identifier
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
 * @typedef {Object} ReadResponseAsset_XmlBlock
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {ReadResponseAssetXmlBlock_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetXmlBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} ReadResponseAsset_File
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {ReadResponseAssetFile_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetFile_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} ReadResponseAsset_Folder
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {ReadResponseAssetFolder_Metadata} metadata
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
 * @property {ReadResponseAssetFolder_Children} children
 * @property {boolean} includeInStaleContent
 */
/**
 * @typedef {Object} ReadResponseAssetFolder_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} ReadResponseAssetFolder_Children
 * @property {ReadResponseAssetFolderChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetFolderChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetFolderChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetFolderChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_Page
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {ReadResponseAssetPage_Metadata} metadata
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
 * @property {string} configurationSetId
 * @property {string} configurationSetPath
 * @property {string} contentTypeId
 * @property {string} contentTypePath
 * @property {ReadResponseAssetPage_StructuredData} structuredData
 */
/**
 * @typedef {Object} ReadResponseAssetPage_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} ReadResponseAssetPage_StructuredData
 * @property {string} definitionId
 * @property {string} definitionPath
 * @property {ReadResponseAssetPageStructuredData_StructuredDataNodes} structuredDataNodes
 */
/**
 * @typedef {Object} ReadResponseAssetPageStructuredData_StructuredDataNodes
 * @property {ReadResponseAssetPageStructuredDataStructuredDataNodes_StructuredDataNode} structuredDataNode
 */
/**
 * @typedef {Object} ReadResponseAssetPageStructuredDataStructuredDataNodes_StructuredDataNode
 * @property {string} type
 * @property {string} identifier
 * @property {string} structuredDataNodes
 * @property {string} text
 * @property {string} assetType
 */
/**
 * @typedef {Object} ReadResponseAsset_Reference
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} referencedAssetId
 * @property {string} referencedAssetPath
 * @property {string} referencedAssetType
 */
/**
 * @typedef {Object} ReadResponseAsset_XsltFormat
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} xml
 */
/**
 * @typedef {Object} ReadResponseAsset_ScriptFormat
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {string} script
 */
/**
 * @typedef {Object} ReadResponseAsset_Symlink
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {ReadResponseAssetSymlink_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetSymlink_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} ReadResponseAsset_Template
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
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
 * @typedef {Object} ReadResponseAsset_User
 * @property {string} username
 * @property {string} fullName
 * @property {string} email
 * @property {string} authType
 * @property {string} password
 */
/**
 * @typedef {Object} ReadResponseAsset_Group
 * @property {string} groupName
 * @property {string} users
 * @property {string} role
 */
/**
 * @typedef {Object} ReadResponseAsset_Role
 * @property {string} id
 * @property {string} name
 * @property {string} roleType
 * @property {ReadResponseAssetRole_GlobalAbilities} globalAbilities
 * @property {ReadResponseAssetRole_SiteAbilities} siteAbilities
 */
/**
 * @typedef {Object} ReadResponseAssetRole_GlobalAbilities
 * @property {boolean} bypassAllPermissionsChecks
 * @property {boolean} accessSiteManagement
 * @property {boolean} createSites
 * @property {boolean} editAccessRights
 * @property {boolean} accessAudits
 */
/**
 * @typedef {Object} ReadResponseAssetRole_SiteAbilities
 * @property {boolean} bypassAllPermissionsChecks
 * @property {boolean} uploadImagesFromWysiwyg
 * @property {boolean} multiSelectCopy
 * @property {boolean} multiSelectPublish
 * @property {boolean} multiSelectMove
 */
/**
 * @typedef {Object} ReadResponseAsset_AssetFactory
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} applicableGroups
 * @property {string} assetType
 * @property {string} baseAssetId
 * @property {string} baseAssetPath
 * @property {boolean} baseAssetRecycled
 */
/**
 * @typedef {Object} ReadResponseAsset_AssetFactoryContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} applicableGroups
 * @property {string} description
 * @property {ReadResponseAssetAssetFactoryContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetAssetFactoryContainer_Children
 * @property {ReadResponseAssetAssetFactoryContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetAssetFactoryContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetAssetFactoryContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetAssetFactoryContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_ContentType
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} pageConfigurationSetId
 * @property {string} pageConfigurationSetPath
 * @property {string} metadataSetId
 * @property {string} metadataSetPath
 * @property {string} dataDefinitionId
 */
/**
 * @typedef {Object} ReadResponseAsset_ContentTypeContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetContentTypeContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetContentTypeContainer_Children
 * @property {ReadResponseAssetContentTypeContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetContentTypeContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetContentTypeContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetContentTypeContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_ConnectorContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetConnectorContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetConnectorContainer_Children
 * @property {ReadResponseAssetConnectorContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetConnectorContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetConnectorContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetConnectorContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_FacebookConnector
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} auth1
 * @property {string} auth2
 * @property {string} url
 * @property {boolean} verified
 * @property {string} verifiedDate
 * @property {string} destinationId
 * @property {string} destinationPath
 */
/**
 * @typedef {Object} ReadResponseAsset_WordPressConnector
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} auth1
 * @property {string} auth2
 * @property {string} url
 * @property {boolean} verified
 * @property {string} verifiedDate
 */
/**
 * @typedef {Object} ReadResponseAsset_GoogleAnalyticsConnector
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} auth1
 * @property {string} auth2
 * @property {string} url
 * @property {boolean} verified
 * @property {string} verifiedDate
 */
/**
 * @typedef {Object} ReadResponseAsset_PageConfigurationSet
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetPageConfigurationSet_PageConfigurations} pageConfigurations
 */
/**
 * @typedef {Object} ReadResponseAssetPageConfigurationSet_PageConfigurations
 * @property {ReadResponseAssetPageConfigurationSetPageConfigurations_PageConfiguration} pageConfiguration
 */
/**
 * @typedef {Object} ReadResponseAssetPageConfigurationSetPageConfigurations_PageConfiguration
 * @property {string} id
 * @property {string} name
 * @property {boolean} defaultConfiguration
 * @property {string} templateId
 * @property {string} templatePath
 * @property {string} formatId
 */
/**
 * @typedef {Object} ReadResponseAsset_PageConfigurationSetContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetPageConfigurationSetContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetPageConfigurationSetContainer_Children
 * @property {ReadResponseAssetPageConfigurationSetContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetPageConfigurationSetContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetPageConfigurationSetContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetPageConfigurationSetContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_DataDefinition
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} xml
 */
/**
 * @typedef {Object} ReadResponseAsset_DataDefinitionContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetDataDefinitionContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetDataDefinitionContainer_Children
 * @property {ReadResponseAssetDataDefinitionContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetDataDefinitionContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetDataDefinitionContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetDataDefinitionContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_SharedField
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} xml
 */
/**
 * @typedef {Object} ReadResponseAsset_SharedFieldContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetSharedFieldContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetSharedFieldContainer_Children
 * @property {ReadResponseAssetSharedFieldContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetSharedFieldContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetSharedFieldContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetSharedFieldContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_MetadataSet
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {boolean} authorFieldRequired
 * @property {string} authorFieldVisibility
 * @property {string} authorFieldHelpText
 * @property {boolean} descriptionFieldRequired
 * @property {string} descriptionFieldVisibility
 */
/**
 * @typedef {Object} ReadResponseAsset_MetadataSetContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetMetadataSetContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetMetadataSetContainer_Children
 * @property {ReadResponseAssetMetadataSetContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetMetadataSetContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetMetadataSetContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetMetadataSetContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_PublishSet
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetPublishSet_Files} files
 * @property {ReadResponseAssetPublishSet_Folders} folders
 * @property {ReadResponseAssetPublishSet_Pages} pages
 * @property {boolean} usesScheduledPublishing
 * @property {string} scheduledPublishDestinationMode
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSet_Files
 * @property {ReadResponseAssetPublishSetFiles_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetFiles_PublishableAssetIdentifier
 * @property {string} id
 * @property {ReadResponseAssetPublishSetFilesPublishableAssetIdentifier_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetFilesPublishableAssetIdentifier_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSet_Folders
 * @property {ReadResponseAssetPublishSetFolders_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetFolders_PublishableAssetIdentifier
 * @property {string} id
 * @property {ReadResponseAssetPublishSetFoldersPublishableAssetIdentifier_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetFoldersPublishableAssetIdentifier_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSet_Pages
 * @property {ReadResponseAssetPublishSetPages_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetPages_PublishableAssetIdentifier
 * @property {string} id
 * @property {ReadResponseAssetPublishSetPagesPublishableAssetIdentifier_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetPagesPublishableAssetIdentifier_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_PublishSetContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetPublishSetContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetContainer_Children
 * @property {ReadResponseAssetPublishSetContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetPublishSetContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetPublishSetContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_Target
 * @property {string} id
 * @property {string} name
 * @property {string} parentTargetId
 * @property {string} parentTargetPath
 * @property {string} path
 * @property {string} baseFolderId
 * @property {string} baseFolderPath
 */
/**
 * @typedef {Object} ReadResponseAsset_SiteDestinationContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetSiteDestinationContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetSiteDestinationContainer_Children
 * @property {ReadResponseAssetSiteDestinationContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetSiteDestinationContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetSiteDestinationContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetSiteDestinationContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_Destination
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} transportId
 * @property {string} transportPath
 * @property {string} applicableGroups
 */
/**
 * @typedef {Object} ReadResponseAsset_FileSystemTransport
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} directory
 */
/**
 * @typedef {Object} ReadResponseAsset_FtpTransport
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} hostName
 * @property {number} port
 * @property {boolean} doPASV
 * @property {string} username
 * @property {string} authMode
 */
/**
 * @typedef {Object} ReadResponseAsset_DatabaseTransport
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {number} transportSiteId
 * @property {string} serverName
 * @property {number} serverPort
 * @property {string} databaseName
 * @property {string} username
 */
/**
 * @typedef {Object} ReadResponseAsset_CloudTransport
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} key
 * @property {string} secret
 * @property {string} bucketName
 * @property {string} basePath
 */
/**
 * @typedef {Object} ReadResponseAsset_TransportContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetTransportContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetTransportContainer_Children
 * @property {ReadResponseAssetTransportContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetTransportContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetTransportContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetTransportContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_WorkflowDefinition
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} applicableGroups
 * @property {boolean} copy
 * @property {boolean} create
 * @property {boolean} delete
 * @property {boolean} edit
 */
/**
 * @typedef {Object} ReadResponseAsset_WorkflowDefinitionContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetWorkflowDefinitionContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowDefinitionContainer_Children
 * @property {ReadResponseAssetWorkflowDefinitionContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowDefinitionContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetWorkflowDefinitionContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowDefinitionContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_WorkflowEmail
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} subject
 * @property {string} body
 */
/**
 * @typedef {Object} ReadResponseAsset_WorkflowEmailContainer
 * @property {string} id
 * @property {string} name
 * @property {string} parentContainerId
 * @property {string} parentContainerPath
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 * @property {ReadResponseAssetWorkflowEmailContainer_Children} children
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowEmailContainer_Children
 * @property {ReadResponseAssetWorkflowEmailContainerChildren_Child} child
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowEmailContainerChildren_Child
 * @property {string} id
 * @property {ReadResponseAssetWorkflowEmailContainerChildrenChild_Path} path
 * @property {string} type
 * @property {boolean} recycled
 */
/**
 * @typedef {Object} ReadResponseAssetWorkflowEmailContainerChildrenChild_Path
 * @property {string} path
 * @property {string} siteId
 * @property {string} siteName
 */
/**
 * @typedef {Object} ReadResponseAsset_TwitterFeedBlock
 * @property {string} id
 * @property {string} name
 * @property {string} parentFolderId
 * @property {string} parentFolderPath
 * @property {string} path
 * @property {string} lastModifiedDate
 * @property {string} lastModifiedBy
 * @property {ReadResponseAssetTwitterFeedBlock_Metadata} metadata
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
 * @typedef {Object} ReadResponseAssetTwitterFeedBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} ReadResponseAsset_Site
 * @property {string} id
 * @property {string} name
 * @property {string} url
 * @property {string} extensionsToStrip
 * @property {string} defaultMetadataSetId
 * @property {string} defaultMetadataSetPath
 * @property {string} siteAssetFactoryContainerId
 */
/**
 * @typedef {Object} ReadResponseAsset_EditorConfiguration
 * @property {string} id
 * @property {string} name
 * @property {string} siteId
 * @property {string} siteName
 * @property {string} cssFileId
 * @property {string} cssFilePath
 * @property {boolean} cssFileRecycled
 */

//#endregion

// ─── Create Request ──────────────────────────────────────────────────────────
//#region
/**
* @typedef {Object} createResponse
* @property {CreateResponse_Asset} asset - REQUIRED: Asset object container
* - Asset is an aggregate type that includes all possible Cascade Server assets bundled with workflow configuration. When a user does not have the privileges to bypass workflow, this configuration is used to configure the step assignments of the workflow

*/
/**
* @typedef {Object} CreateResponse_Asset
* @property {CreateResponseAsset_WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
* @property {CreateResponseAsset_FeedBlock} [feedBlock] - One is REQUIRED
* @property {CreateResponseAsset_IndexBlock} [indexBlock] - One is REQUIRED
* @property {CreateResponseAsset_TextBlock} [textBlock] - One is REQUIRED
* @property {CreateResponseAsset_XhtmlDataDefinitionBlock} [xhtmlDataDefinitionBlock] - One is REQUIRED
* @property {CreateResponseAsset_XmlBlock} [xmlBlock] - One is REQUIRED
* @property {CreateResponseAsset_File} [file] - One is REQUIRED
* @property {CreateResponseAsset_Folder} [folder] - One is REQUIRED
* @property {CreateResponseAsset_Page} [page] - ONE IS REQUIRED
* @property {CreateResponseAsset_Reference} [reference] - One is REQUIRED
* @property {CreateResponseAsset_XsltFormat} [xsltFormat] - One is REQUIRED
* @property {CreateResponseAsset_ScriptFormat} [scriptFormat] - One is REQUIRED
* @property {CreateResponseAsset_Symlink} [symlink] - One is REQUIRED
* @property {CreateResponseAsset_Template} [template] - One is REQUIRED
* @property {CreateResponseAsset_User} [user] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_Group} [group] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_Role} [role] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_AssetFactory} [assetFactory] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_AssetFactoryContainer} [assetFactoryContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_ContentType} [contentType] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_ContentTypeContainer} [contentTypeContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_ConnectorContainer} [connectorContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_FacebookConnector} [facebookConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_WordPressConnector} [wordPressConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_GoogleAnalyticsConnector} [googleAnalyticsConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_PageConfigurationSet} [pageConfigurationSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_PageConfigurationSetContainer} [pageConfigurationSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_DataDefinition} [dataDefinition] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_DataDefinitionContainer} [dataDefinitionContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_SharedField} [sharedField] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_SharedFieldContainer} [sharedFieldContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_MetadataSet} [metadataSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_MetadataSetContainer} [metadataSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_PublishSet} [publishSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_PublishSetContainer} [publishSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_Target} [target] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_SiteDestinationContainer} [siteDestinationContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_Destination} [destination] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_FileSystemTransport} [fileSystemTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_FtpTransport} [ftpTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_DatabaseTransport} [databaseTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_CloudTransport} [cloudTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_TransportContainer} [transportContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_WorkflowDefinition} [workflowDefinition] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_WorkflowDefinitionContainer} [workflowDefinitionContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_WorkflowEmail} [workflowEmail] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_WorkflowEmailContainer} [workflowEmailContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_TwitterFeedBlock} [twitterFeedBlock] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_Site} [site] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateResponseAsset_EditorConfiguration} [editorConfiguration] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

*/
/**
* @typedef {Object} CreateResponseAsset_WorkflowConfiguration
* @property {string} workflowName - REQUIRED: When the workflow is instantiated, this will be its name
* @property {string} [workflowDefinitionId] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} [workflowDefinitionPath] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} workflowComments - REQUIRED: The comments for this operation which will be recorded with the workflow
* @property {CreateResponseAssetWorkflowConfiguration_WorkflowStepConfigurations[]} [workflowStepConfigurations] - NOT REQUIRED default: the defaults as defined in the workflow definition
* - The optional step configurations for each assignable step in the workflow

* @property {string} [endDate] - NOT REQUIRED
*/
/**
 * @typedef {Object} CreateResponseAssetWorkflowConfiguration_WorkflowStepConfigurations
 * @property {string} stepIdentifier - REQUIRED: The step's unique text identifier/name
 * @property {string} stepAssignment - REQUIRED: The step's assignment (user or group name)
 */
/**
* @typedef {Object} CreateResponseAsset_FeedBlock
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

* @property {CreateResponseAssetFeedBlock_Tags} tags
* @property {CreateResponseAssetFeedBlock_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetFeedBlock_Tags
 * @property {CreateResponseAssetFeedBlockTags_Tag} tag
 */
/**
* @typedef {Object} CreateResponseAssetFeedBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} CreateResponseAssetFeedBlock_Metadata
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
 * @property {CreateResponseAssetFeedBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} CreateResponseAssetFeedBlockMetadata_DynamicFields
 * @property {CreateResponseAssetFeedBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} CreateResponseAssetFeedBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateResponseAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} CreateResponseAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {CreateResponseAssetFeedBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} CreateResponseAssetFeedBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
* @typedef {Object} CreateResponseAsset_IndexBlock
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

* @property {CreateResponseAssetIndexBlock_Tags} tags
* @property {CreateResponseAssetIndexBlock_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetIndexBlock_Tags
 * @property {CreateResponseAssetIndexBlockTags_Tag} tag
 */
/**
* @typedef {Object} CreateResponseAssetIndexBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} CreateResponseAssetIndexBlock_Metadata
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
 * @property {CreateResponseAssetIndexBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} CreateResponseAssetIndexBlockMetadata_DynamicFields
 * @property {CreateResponseAssetIndexBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} CreateResponseAssetIndexBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateResponseAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} CreateResponseAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {CreateResponseAssetIndexBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} CreateResponseAssetIndexBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
* @typedef {Object} CreateResponseAsset_TextBlock
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

* @property {CreateResponseAssetTextBlock_Tags} tags
* @property {CreateResponseAssetTextBlock_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetTextBlock_Tags
 * @property {CreateResponseAssetTextBlockTags_Tag} tag
 */
/**
* @typedef {Object} CreateResponseAssetTextBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} CreateResponseAssetTextBlock_Metadata
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
 * @property {CreateResponseAssetTextBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} CreateResponseAssetTextBlockMetadata_DynamicFields
 * @property {CreateResponseAssetTextBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} CreateResponseAssetTextBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateResponseAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} CreateResponseAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {CreateResponseAssetTextBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} CreateResponseAssetTextBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
* @typedef {Object} CreateResponseAsset_XhtmlDataDefinitionBlock
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

* @property {CreateResponseAssetXhtmlDataDefinitionBlock_Tags} tags
* @property {CreateResponseAssetXhtmlDataDefinitionBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {CreateResponseAssetXhtmlDataDefinitionBlock_StructuredData} structuredData - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content
* - Page structured data information

* @property {string} xhtml - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content

*/
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlock_Tags
 * @property {CreateResponseAssetXhtmlDataDefinitionBlockTags_Tag} tag
 */
/**
* @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlock_Metadata
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
 * @property {CreateResponseAssetXhtmlDataDefinitionBlockMetadata_DynamicFields} dynamicFields
 */
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockMetadata_DynamicFields
 * @property {CreateResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField} dynamicField
 */
/**
* @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues
 * @property {CreateResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
 */
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
 * @property {string} value
 */
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlock_StructuredData
 * @property {string} definitionId
 * @property {string} definitionPath
 * @property {CreateResponseAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes} structuredDataNodes
 */
/**
 * @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes
 * @property {CreateResponseAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode} structuredDataNode
 */
/**
* @typedef {Object} CreateResponseAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode
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
* @typedef {Object} CreateResponseAsset_XmlBlock
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
* @property {CreateResponseAssetXmlBlock_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetXmlBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} CreateResponseAsset_File
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
* @property {CreateResponseAssetFile_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetFile_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} CreateResponseAsset_Folder
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
* @property {CreateResponseAssetFolder_Metadata} metadata
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
* @property {CreateResponseAssetFolder_Children} children
* @property {boolean} includeInStaleContent
*/
/**
 * @typedef {Object} CreateResponseAssetFolder_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
 * @typedef {Object} CreateResponseAssetFolder_Children
 * @property {CreateResponseAssetFolderChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetFolderChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetFolderChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetFolderChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_Page
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
* @property {CreateResponseAssetPage_Metadata} [metadata] - NOT REQUIRED default: all empty
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

* @property {CreateResponseAssetPage_StructuredData} structuredData - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content
* - Page structured data information

* @property {CreateResponseAssetPage_PageConfigurations[]} [pageConfigurations] - NOT REQUIRED when creating a page, but you must submit assignment information when editing if you want to maintain the region assignments
* - The page configurations containing page-level region block/format assignments

* @property {"inherit" | "absolute" | "relative" | "site-relative"} [linkRewriting] - NOT REQUIRED: default: inherit
*/
/**
 * @typedef {Object} CreateResponseAssetPage_Metadata
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
 * @property {CreateResponseAssetPageMetadata_DynamicFields[]} [dynamicFields] - NOT REQUIRED: Array
 */
/**
 * @typedef {Object} CreateResponseAssetPageMetadata_DynamicFields
 * @property {string} [name] - NOT REQUIRED
 * @property {CreateResponseAssetPageMetadataDynamicFields_FieldValues[]} [fieldValues] - NOT REQUIRED: Array
 */
/**
 * @typedef {Object} CreateResponseAssetPageMetadataDynamicFields_FieldValues
 * @property {string} [value] - NOT REQUIRED
 */
/**
* @typedef {Object} CreateResponseAssetPage_StructuredData
* @property {string} [definitionId] - NOT REQUIRED
* - Priority: definitionId > definitionPath
* - For defining an asset's Data Definition relationship

* @property {string} [definitionPath] - NOT REQUIRED
* - Priority: definitionId > definitionPath
* - For defining an asset's Data Definition relationship

* @property {CreateResponseAssetPageStructuredData_StructuredDataNodes[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
*/
/**
* @typedef {Object} CreateResponseAssetPageStructuredData_StructuredDataNodes
* @property {string} type - REQUIRED: Each node has a type
* @property {string} identifier - REQUIRED
* - The text identifier of the node coming from corresponding field in Data Definition. If this node is preserved on the asset but corresponding field no longer exists in Data Definition, the identifier's value will be '<legacy>'.

* @property {CreateResponseAssetPageStructuredData_StructuredDataNodes[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
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
* @typedef {Object} CreateResponseAssetPage_PageConfigurations
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
* @property {CreateResponseAssetPagePageConfigurations_PageRegions[]} [pageRegions] - NOT REQUIRED: The individual page region assignments for this configuration
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
* @typedef {Object} CreateResponseAssetPagePageConfigurations_PageRegions
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
* @typedef {Object} CreateResponseAsset_Reference
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
* @typedef {Object} CreateResponseAsset_XsltFormat
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
* @typedef {Object} CreateResponseAsset_ScriptFormat
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
* @typedef {Object} CreateResponseAsset_Symlink
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
* @property {CreateResponseAssetSymlink_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetSymlink_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} CreateResponseAsset_Template
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
 * @typedef {Object} CreateResponseAsset_User
 * @property {string} username
 * @property {string} fullName
 * @property {string} email
 * @property {string} authType
 * @property {string} password
 */
/**
 * @typedef {Object} CreateResponseAsset_Group
 * @property {string} groupName
 * @property {string} users
 * @property {string} role
 */
/**
* @typedef {Object} CreateResponseAsset_Role
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} roleType
* @property {CreateResponseAssetRole_GlobalAbilities} globalAbilities
* @property {CreateResponseAssetRole_SiteAbilities} siteAbilities
*/
/**
 * @typedef {Object} CreateResponseAssetRole_GlobalAbilities
 * @property {boolean} bypassAllPermissionsChecks
 * @property {boolean} accessSiteManagement
 * @property {boolean} createSites
 * @property {boolean} editAccessRights
 * @property {boolean} accessAudits
 */
/**
 * @typedef {Object} CreateResponseAssetRole_SiteAbilities
 * @property {boolean} bypassAllPermissionsChecks
 * @property {boolean} uploadImagesFromWysiwyg
 * @property {boolean} multiSelectCopy
 * @property {boolean} multiSelectPublish
 * @property {boolean} multiSelectMove
 */
/**
* @typedef {Object} CreateResponseAsset_AssetFactory
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
* @typedef {Object} CreateResponseAsset_AssetFactoryContainer
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
* @property {CreateResponseAssetAssetFactoryContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetAssetFactoryContainer_Children
 * @property {CreateResponseAssetAssetFactoryContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetAssetFactoryContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetAssetFactoryContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetAssetFactoryContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_ContentType
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
* @typedef {Object} CreateResponseAsset_ContentTypeContainer
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

* @property {CreateResponseAssetContentTypeContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetContentTypeContainer_Children
 * @property {CreateResponseAssetContentTypeContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetContentTypeContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetContentTypeContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetContentTypeContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_ConnectorContainer
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

* @property {CreateResponseAssetConnectorContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetConnectorContainer_Children
 * @property {CreateResponseAssetConnectorContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetConnectorContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetConnectorContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetConnectorContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_FacebookConnector
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
* @typedef {Object} CreateResponseAsset_WordPressConnector
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
* @typedef {Object} CreateResponseAsset_GoogleAnalyticsConnector
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
* @typedef {Object} CreateResponseAsset_PageConfigurationSet
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

* @property {CreateResponseAssetPageConfigurationSet_PageConfigurations} pageConfigurations
*/
/**
 * @typedef {Object} CreateResponseAssetPageConfigurationSet_PageConfigurations
 * @property {CreateResponseAssetPageConfigurationSetPageConfigurations_PageConfiguration} pageConfiguration
 */
/**
* @typedef {Object} CreateResponseAssetPageConfigurationSetPageConfigurations_PageConfiguration
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {boolean} defaultConfiguration - REQUIRED: Whether or not this is the default configuration
* @property {string} templateId
* @property {string} templatePath
* @property {string} formatId
*/
/**
* @typedef {Object} CreateResponseAsset_PageConfigurationSetContainer
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

* @property {CreateResponseAssetPageConfigurationSetContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetPageConfigurationSetContainer_Children
 * @property {CreateResponseAssetPageConfigurationSetContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetPageConfigurationSetContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetPageConfigurationSetContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetPageConfigurationSetContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_DataDefinition
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
* @typedef {Object} CreateResponseAsset_DataDefinitionContainer
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

* @property {CreateResponseAssetDataDefinitionContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetDataDefinitionContainer_Children
 * @property {CreateResponseAssetDataDefinitionContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetDataDefinitionContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetDataDefinitionContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetDataDefinitionContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_SharedField
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
* @typedef {Object} CreateResponseAsset_SharedFieldContainer
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

* @property {CreateResponseAssetSharedFieldContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetSharedFieldContainer_Children
 * @property {CreateResponseAssetSharedFieldContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetSharedFieldContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetSharedFieldContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetSharedFieldContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_MetadataSet
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
* @typedef {Object} CreateResponseAsset_MetadataSetContainer
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

* @property {CreateResponseAssetMetadataSetContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetMetadataSetContainer_Children
 * @property {CreateResponseAssetMetadataSetContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetMetadataSetContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetMetadataSetContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetMetadataSetContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_PublishSet
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

* @property {CreateResponseAssetPublishSet_Files} files
* @property {CreateResponseAssetPublishSet_Folders} folders
* @property {CreateResponseAssetPublishSet_Pages} pages
* @property {boolean} usesScheduledPublishing
* @property {string} scheduledPublishDestinationMode
*/
/**
 * @typedef {Object} CreateResponseAssetPublishSet_Files
 * @property {CreateResponseAssetPublishSetFiles_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} CreateResponseAssetPublishSetFiles_PublishableAssetIdentifier
 * @property {string} id
 * @property {CreateResponseAssetPublishSetFilesPublishableAssetIdentifier_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetPublishSetFilesPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
 * @typedef {Object} CreateResponseAssetPublishSet_Folders
 * @property {CreateResponseAssetPublishSetFolders_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} CreateResponseAssetPublishSetFolders_PublishableAssetIdentifier
 * @property {string} id
 * @property {CreateResponseAssetPublishSetFoldersPublishableAssetIdentifier_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetPublishSetFoldersPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
 * @typedef {Object} CreateResponseAssetPublishSet_Pages
 * @property {CreateResponseAssetPublishSetPages_PublishableAssetIdentifier} publishableAssetIdentifier
 */
/**
 * @typedef {Object} CreateResponseAssetPublishSetPages_PublishableAssetIdentifier
 * @property {string} id
 * @property {CreateResponseAssetPublishSetPagesPublishableAssetIdentifier_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetPublishSetPagesPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_PublishSetContainer
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

* @property {CreateResponseAssetPublishSetContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetPublishSetContainer_Children
 * @property {CreateResponseAssetPublishSetContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetPublishSetContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetPublishSetContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetPublishSetContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_Target
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
* @typedef {Object} CreateResponseAsset_SiteDestinationContainer
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

* @property {CreateResponseAssetSiteDestinationContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetSiteDestinationContainer_Children
 * @property {CreateResponseAssetSiteDestinationContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetSiteDestinationContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetSiteDestinationContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetSiteDestinationContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_Destination
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
* @typedef {Object} CreateResponseAsset_FileSystemTransport
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
* @typedef {Object} CreateResponseAsset_FtpTransport
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
* @typedef {Object} CreateResponseAsset_DatabaseTransport
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
* @typedef {Object} CreateResponseAsset_CloudTransport
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
* @typedef {Object} CreateResponseAsset_TransportContainer
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

* @property {CreateResponseAssetTransportContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetTransportContainer_Children
 * @property {CreateResponseAssetTransportContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetTransportContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetTransportContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetTransportContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_WorkflowDefinition
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
* @typedef {Object} CreateResponseAsset_WorkflowDefinitionContainer
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

* @property {CreateResponseAssetWorkflowDefinitionContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetWorkflowDefinitionContainer_Children
 * @property {CreateResponseAssetWorkflowDefinitionContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetWorkflowDefinitionContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetWorkflowDefinitionContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetWorkflowDefinitionContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_WorkflowEmail
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
* @typedef {Object} CreateResponseAsset_WorkflowEmailContainer
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

* @property {CreateResponseAssetWorkflowEmailContainer_Children} children
*/
/**
 * @typedef {Object} CreateResponseAssetWorkflowEmailContainer_Children
 * @property {CreateResponseAssetWorkflowEmailContainerChildren_Child} child
 */
/**
 * @typedef {Object} CreateResponseAssetWorkflowEmailContainerChildren_Child
 * @property {string} id
 * @property {CreateResponseAssetWorkflowEmailContainerChildrenChild_Path} path
 * @property {string} type - REQUIRED: Each node has a type
 * @property {boolean} recycled
 */
/**
* @typedef {Object} CreateResponseAssetWorkflowEmailContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
/**
* @typedef {Object} CreateResponseAsset_TwitterFeedBlock
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
* @property {CreateResponseAssetTwitterFeedBlock_Metadata} metadata
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
 * @typedef {Object} CreateResponseAssetTwitterFeedBlock_Metadata
 * @property {string} author
 * @property {string} displayName
 * @property {string} endDate
 * @property {string} keywords
 * @property {string} metaDescription
 */
/**
* @typedef {Object} CreateResponseAsset_Site
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
* @typedef {Object} CreateResponseAsset_EditorConfiguration
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

// ─── Create Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} createResponse
 * @property {string} success
 * @property {string} message
 * @property {string} createdAssetId
 */
//#endregion

export default {};

// "feedBlock" | "indexBlock" | "textBlock" | "xhtmlDataDefinitionBlock" | "xmlBlock" | "file" | "folder" | "page" | "reference" | "xsltFormat" | "scriptFormat" | "symlink" | "template" | "user" | "group" | "role" | "assetFactory" | "assetFactoryContainer" | "contentType" | "contentTypeContainer" | "connectorContainer" | "facebookConnector" | "wordPressConnector" | "googleAnalyticsConnector" | "pageConfigurationSet" | "pageConfigurationSetContainer" | "dataDefinition" | "dataDefinitionContainer" | "sharedField" | "sharedFieldContainer" | "metadataSet" | "metadataSetContainer" | "publishSet" | "publishSetContainer" | "target" | "siteDestinationContainer" | "destination" | "fileSystemTransport" | "ftpTransport" | "databaseTransport" | "cloudTransport" | "transportContainer" | "workflowDefinition" | "workflowDefinitionContainer" | "workflowEmail" | "workflowEmailContainer" | "twitterFeedBlock" | "site" | "editorConfiguration"
