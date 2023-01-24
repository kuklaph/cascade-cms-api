class CascadeAPI {
  constructor(config = { apiKey, url }) {
    this.apiKey = config.apiKey;
    this.url = config.url;
  }

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

  /**
   * read operation.
   *
   * @param {readRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {readResponse}
   */
  async read(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.asset[identifier.type];
  }

  /**
   * removal operation.
   *
   * @param {deleteRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {deleteResponse}
   */
  async remove( // Delete
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `delete`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * edit operation.
   *
   * @param {editRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {editResponse}
   */
  async edit(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  // ─── Create Request ──────────────────────────────────────────────────────────
  //#region
  /**
* @typedef {Object} createRequest
* @property {CreateRequest_Asset} asset - REQUIRED: Asset object container
* - Asset is an aggregate type that includes all possible Cascade Server assets bundled with workflow configuration. When a user does not have the privileges to bypass workflow, this configuration is used to configure the step assignments of the workflow

*/
  /**
* @typedef {Object} CreateRequest_Asset
* @property {CreateRequestAsset_WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
* @property {CreateRequestAsset_FeedBlock} [feedBlock] - One is REQUIRED
* @property {CreateRequestAsset_IndexBlock} [indexBlock] - One is REQUIRED
* @property {CreateRequestAsset_TextBlock} [textBlock] - One is REQUIRED
* @property {CreateRequestAsset_XhtmlDataDefinitionBlock} [xhtmlDataDefinitionBlock] - One is REQUIRED
* @property {CreateRequestAsset_XmlBlock} [xmlBlock] - One is REQUIRED
* @property {CreateRequestAsset_File} [file] - One is REQUIRED
* @property {CreateRequestAsset_Folder} [folder] - One is REQUIRED
* @property {CreateRequestAsset_Page} [page] - ONE IS REQUIRED
* @property {CreateRequestAsset_Reference} [reference] - One is REQUIRED
* @property {CreateRequestAsset_XsltFormat} [xsltFormat] - One is REQUIRED
* @property {CreateRequestAsset_ScriptFormat} [scriptFormat] - One is REQUIRED
* @property {CreateRequestAsset_Symlink} [symlink] - One is REQUIRED
* @property {CreateRequestAsset_Template} [template] - One is REQUIRED
* @property {CreateRequestAsset_User} [user] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_Group} [group] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_Role} [role] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_AssetFactory} [assetFactory] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_AssetFactoryContainer} [assetFactoryContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_ContentType} [contentType] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_ContentTypeContainer} [contentTypeContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_ConnectorContainer} [connectorContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_FacebookConnector} [facebookConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_WordPressConnector} [wordPressConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_GoogleAnalyticsConnector} [googleAnalyticsConnector] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_PageConfigurationSet} [pageConfigurationSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_PageConfigurationSetContainer} [pageConfigurationSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_DataDefinition} [dataDefinition] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_DataDefinitionContainer} [dataDefinitionContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_SharedField} [sharedField] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_SharedFieldContainer} [sharedFieldContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_MetadataSet} [metadataSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_MetadataSetContainer} [metadataSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_PublishSet} [publishSet] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_PublishSetContainer} [publishSetContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_Target} [target] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_SiteDestinationContainer} [siteDestinationContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_Destination} [destination] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_FileSystemTransport} [fileSystemTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_FtpTransport} [ftpTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_DatabaseTransport} [databaseTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_CloudTransport} [cloudTransport] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_TransportContainer} [transportContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_WorkflowDefinition} [workflowDefinition] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_WorkflowDefinitionContainer} [workflowDefinitionContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_WorkflowEmail} [workflowEmail] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_WorkflowEmailContainer} [workflowEmailContainer] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_TwitterFeedBlock} [twitterFeedBlock] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_Site} [site] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

* @property {CreateRequestAsset_EditorConfiguration} [editorConfiguration] - One is REQUIRED
* - Admin area assets (must be manager or higher to access, no workflowConfiguration needed

*/
  /**
* @typedef {Object} CreateRequestAsset_WorkflowConfiguration
* @property {string} workflowName - REQUIRED: When the workflow is instantiated, this will be its name
* @property {string} [workflowDefinitionId] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} [workflowDefinitionPath] - One is REQUIRED
* - Priority: workflowDefinitionId > workflowDefinitionPath
* - Which workflow definition to use

* @property {string} workflowComments - REQUIRED: The comments for this operation which will be recorded with the workflow
* @property {CreateRequestAssetWorkflowConfiguration_WorkflowStepConfigurations[]} [workflowStepConfigurations] - NOT REQUIRED default: the defaults as defined in the workflow definition
* - The optional step configurations for each assignable step in the workflow

* @property {string} [endDate] - NOT REQUIRED
*/
  /**
   * @typedef {Object} CreateRequestAssetWorkflowConfiguration_WorkflowStepConfigurations
   * @property {string} stepIdentifier - REQUIRED: The step's unique text identifier/name
   * @property {string} stepAssignment - REQUIRED: The step's assignment (user or group name)
   */
  /**
* @typedef {Object} CreateRequestAsset_FeedBlock
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

* @property {CreateRequestAssetFeedBlock_Tags} tags
* @property {CreateRequestAssetFeedBlock_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetFeedBlock_Tags
   * @property {CreateRequestAssetFeedBlockTags_Tag} tag
   */
  /**
* @typedef {Object} CreateRequestAssetFeedBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
  /**
   * @typedef {Object} CreateRequestAssetFeedBlock_Metadata
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
   * @property {CreateRequestAssetFeedBlockMetadata_DynamicFields} dynamicFields
   */
  /**
   * @typedef {Object} CreateRequestAssetFeedBlockMetadata_DynamicFields
   * @property {CreateRequestAssetFeedBlockMetadataDynamicFields_DynamicField} dynamicField
   */
  /**
* @typedef {Object} CreateRequestAssetFeedBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateRequestAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
  /**
   * @typedef {Object} CreateRequestAssetFeedBlockMetadataDynamicFieldsDynamicField_FieldValues
   * @property {CreateRequestAssetFeedBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
   */
  /**
   * @typedef {Object} CreateRequestAssetFeedBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
   * @property {string} value
   */
  /**
* @typedef {Object} CreateRequestAsset_IndexBlock
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

* @property {CreateRequestAssetIndexBlock_Tags} tags
* @property {CreateRequestAssetIndexBlock_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetIndexBlock_Tags
   * @property {CreateRequestAssetIndexBlockTags_Tag} tag
   */
  /**
* @typedef {Object} CreateRequestAssetIndexBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
  /**
   * @typedef {Object} CreateRequestAssetIndexBlock_Metadata
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
   * @property {CreateRequestAssetIndexBlockMetadata_DynamicFields} dynamicFields
   */
  /**
   * @typedef {Object} CreateRequestAssetIndexBlockMetadata_DynamicFields
   * @property {CreateRequestAssetIndexBlockMetadataDynamicFields_DynamicField} dynamicField
   */
  /**
* @typedef {Object} CreateRequestAssetIndexBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateRequestAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
  /**
   * @typedef {Object} CreateRequestAssetIndexBlockMetadataDynamicFieldsDynamicField_FieldValues
   * @property {CreateRequestAssetIndexBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
   */
  /**
   * @typedef {Object} CreateRequestAssetIndexBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
   * @property {string} value
   */
  /**
* @typedef {Object} CreateRequestAsset_TextBlock
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

* @property {CreateRequestAssetTextBlock_Tags} tags
* @property {CreateRequestAssetTextBlock_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetTextBlock_Tags
   * @property {CreateRequestAssetTextBlockTags_Tag} tag
   */
  /**
* @typedef {Object} CreateRequestAssetTextBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
  /**
   * @typedef {Object} CreateRequestAssetTextBlock_Metadata
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
   * @property {CreateRequestAssetTextBlockMetadata_DynamicFields} dynamicFields
   */
  /**
   * @typedef {Object} CreateRequestAssetTextBlockMetadata_DynamicFields
   * @property {CreateRequestAssetTextBlockMetadataDynamicFields_DynamicField} dynamicField
   */
  /**
* @typedef {Object} CreateRequestAssetTextBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateRequestAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
  /**
   * @typedef {Object} CreateRequestAssetTextBlockMetadataDynamicFieldsDynamicField_FieldValues
   * @property {CreateRequestAssetTextBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
   */
  /**
   * @typedef {Object} CreateRequestAssetTextBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
   * @property {string} value
   */
  /**
* @typedef {Object} CreateRequestAsset_XhtmlDataDefinitionBlock
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

* @property {CreateRequestAssetXhtmlDataDefinitionBlock_Tags} tags
* @property {CreateRequestAssetXhtmlDataDefinitionBlock_Metadata} metadata
* @property {string} metadataSetId
* @property {string} metadataSetPath
* @property {boolean} reviewOnSchedule
* @property {number} reviewEvery
* @property {string} expirationFolderId
* @property {string} expirationFolderPath
* @property {boolean} expirationFolderRecycled
* @property {CreateRequestAssetXhtmlDataDefinitionBlock_StructuredData} structuredData - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content
* - Page structured data information

* @property {string} xhtml - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content

*/
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlock_Tags
   * @property {CreateRequestAssetXhtmlDataDefinitionBlockTags_Tag} tag
   */
  /**
* @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockTags_Tag
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

*/
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlock_Metadata
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
   * @property {CreateRequestAssetXhtmlDataDefinitionBlockMetadata_DynamicFields} dynamicFields
   */
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockMetadata_DynamicFields
   * @property {CreateRequestAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField} dynamicField
   */
  /**
* @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockMetadataDynamicFields_DynamicField
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {CreateRequestAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues} fieldValues
*/
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicField_FieldValues
   * @property {CreateRequestAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue} fieldValue
   */
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockMetadataDynamicFieldsDynamicFieldFieldValues_FieldValue
   * @property {string} value
   */
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlock_StructuredData
   * @property {string} definitionId
   * @property {string} definitionPath
   * @property {CreateRequestAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes} structuredDataNodes
   */
  /**
   * @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockStructuredData_StructuredDataNodes
   * @property {CreateRequestAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode} structuredDataNode
   */
  /**
* @typedef {Object} CreateRequestAssetXhtmlDataDefinitionBlockStructuredDataStructuredDataNodes_StructuredDataNode
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
* @typedef {Object} CreateRequestAsset_XmlBlock
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
* @property {CreateRequestAssetXmlBlock_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetXmlBlock_Metadata
   * @property {string} author
   * @property {string} displayName
   * @property {string} endDate
   * @property {string} keywords
   * @property {string} metaDescription
   */
  /**
* @typedef {Object} CreateRequestAsset_File
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
* @property {CreateRequestAssetFile_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetFile_Metadata
   * @property {string} author
   * @property {string} displayName
   * @property {string} endDate
   * @property {string} keywords
   * @property {string} metaDescription
   */
  /**
* @typedef {Object} CreateRequestAsset_Folder
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
* @property {CreateRequestAssetFolder_Metadata} metadata
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
* @property {CreateRequestAssetFolder_Children} children
* @property {boolean} includeInStaleContent
*/
  /**
   * @typedef {Object} CreateRequestAssetFolder_Metadata
   * @property {string} author
   * @property {string} displayName
   * @property {string} endDate
   * @property {string} keywords
   * @property {string} metaDescription
   */
  /**
   * @typedef {Object} CreateRequestAssetFolder_Children
   * @property {CreateRequestAssetFolderChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetFolderChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetFolderChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetFolderChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_Page
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
* @property {CreateRequestAssetPage_Metadata} [metadata] - NOT REQUIRED default: all empty
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

* @property {CreateRequestAssetPage_StructuredData} structuredData - One is REQUIRED: structuredData | xhtml
* - Priority: xhtml > structuredData
* - A page either contains XHTML content (plain WYSIWYG page) or structured data content
* - Page structured data information

* @property {CreateRequestAssetPage_PageConfigurations[]} [pageConfigurations] - NOT REQUIRED when creating a page, but you must submit assignment information when editing if you want to maintain the region assignments
* - The page configurations containing page-level region block/format assignments

* @property {"inherit" | "absolute" | "relative" | "site-relative"} [linkRewriting] - NOT REQUIRED: default: inherit
*/
  /**
   * @typedef {Object} CreateRequestAssetPage_Metadata
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
   * @property {CreateRequestAssetPageMetadata_DynamicFields[]} [dynamicFields] - NOT REQUIRED: Array
   */
  /**
   * @typedef {Object} CreateRequestAssetPageMetadata_DynamicFields
   * @property {string} [name] - NOT REQUIRED
   * @property {CreateRequestAssetPageMetadataDynamicFields_FieldValues[]} [fieldValues] - NOT REQUIRED: Array
   */
  /**
   * @typedef {Object} CreateRequestAssetPageMetadataDynamicFields_FieldValues
   * @property {string} [value] - NOT REQUIRED
   */
  /**
* @typedef {Object} CreateRequestAssetPage_StructuredData
* @property {string} [definitionId] - NOT REQUIRED
* - Priority: definitionId > definitionPath
* - For defining an asset's Data Definition relationship

* @property {string} [definitionPath] - NOT REQUIRED
* - Priority: definitionId > definitionPath
* - For defining an asset's Data Definition relationship

* @property {CreateRequestAssetPageStructuredData_StructuredDataNodes[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
*/
  /**
* @typedef {Object} CreateRequestAssetPageStructuredData_StructuredDataNodes
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
* @typedef {Object} CreateRequestAssetPage_PageConfigurations
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
* @property {CreateRequestAssetPagePageConfigurations_PageRegions[]} [pageRegions] - NOT REQUIRED: The individual page region assignments for this configuration
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
* @typedef {Object} CreateRequestAssetPagePageConfigurations_PageRegions
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
* @typedef {Object} CreateRequestAsset_Reference
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
* @typedef {Object} CreateRequestAsset_XsltFormat
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
* @typedef {Object} CreateRequestAsset_ScriptFormat
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
* @typedef {Object} CreateRequestAsset_Symlink
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
* @property {CreateRequestAssetSymlink_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetSymlink_Metadata
   * @property {string} author
   * @property {string} displayName
   * @property {string} endDate
   * @property {string} keywords
   * @property {string} metaDescription
   */
  /**
* @typedef {Object} CreateRequestAsset_Template
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
   * @typedef {Object} CreateRequestAsset_User
   * @property {string} username
   * @property {string} fullName
   * @property {string} email
   * @property {string} authType
   * @property {string} password
   */
  /**
   * @typedef {Object} CreateRequestAsset_Group
   * @property {string} groupName
   * @property {string} users
   * @property {string} role
   */
  /**
* @typedef {Object} CreateRequestAsset_Role
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {string} roleType
* @property {CreateRequestAssetRole_GlobalAbilities} globalAbilities
* @property {CreateRequestAssetRole_SiteAbilities} siteAbilities
*/
  /**
   * @typedef {Object} CreateRequestAssetRole_GlobalAbilities
   * @property {boolean} bypassAllPermissionsChecks
   * @property {boolean} accessSiteManagement
   * @property {boolean} createSites
   * @property {boolean} editAccessRights
   * @property {boolean} accessAudits
   */
  /**
   * @typedef {Object} CreateRequestAssetRole_SiteAbilities
   * @property {boolean} bypassAllPermissionsChecks
   * @property {boolean} uploadImagesFromWysiwyg
   * @property {boolean} multiSelectCopy
   * @property {boolean} multiSelectPublish
   * @property {boolean} multiSelectMove
   */
  /**
* @typedef {Object} CreateRequestAsset_AssetFactory
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
* @typedef {Object} CreateRequestAsset_AssetFactoryContainer
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
* @property {CreateRequestAssetAssetFactoryContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetAssetFactoryContainer_Children
   * @property {CreateRequestAssetAssetFactoryContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetAssetFactoryContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetAssetFactoryContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetAssetFactoryContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_ContentType
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
* @typedef {Object} CreateRequestAsset_ContentTypeContainer
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

* @property {CreateRequestAssetContentTypeContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetContentTypeContainer_Children
   * @property {CreateRequestAssetContentTypeContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetContentTypeContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetContentTypeContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetContentTypeContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_ConnectorContainer
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

* @property {CreateRequestAssetConnectorContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetConnectorContainer_Children
   * @property {CreateRequestAssetConnectorContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetConnectorContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetConnectorContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetConnectorContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_FacebookConnector
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
* @typedef {Object} CreateRequestAsset_WordPressConnector
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
* @typedef {Object} CreateRequestAsset_GoogleAnalyticsConnector
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
* @typedef {Object} CreateRequestAsset_PageConfigurationSet
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

* @property {CreateRequestAssetPageConfigurationSet_PageConfigurations} pageConfigurations
*/
  /**
   * @typedef {Object} CreateRequestAssetPageConfigurationSet_PageConfigurations
   * @property {CreateRequestAssetPageConfigurationSetPageConfigurations_PageConfiguration} pageConfiguration
   */
  /**
* @typedef {Object} CreateRequestAssetPageConfigurationSetPageConfigurations_PageConfiguration
* @property {string} id
* @property {string} name - REQUIRED
* - The name of this page region, for example, 'DEFAULT', or 'JAVASCRIPT-INCLUDE'. This MUST correspond to the name of a region defined in the template.

* @property {boolean} defaultConfiguration - REQUIRED: Whether or not this is the default configuration
* @property {string} templateId
* @property {string} templatePath
* @property {string} formatId
*/
  /**
* @typedef {Object} CreateRequestAsset_PageConfigurationSetContainer
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

* @property {CreateRequestAssetPageConfigurationSetContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetPageConfigurationSetContainer_Children
   * @property {CreateRequestAssetPageConfigurationSetContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetPageConfigurationSetContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetPageConfigurationSetContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetPageConfigurationSetContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_DataDefinition
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
* @typedef {Object} CreateRequestAsset_DataDefinitionContainer
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

* @property {CreateRequestAssetDataDefinitionContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetDataDefinitionContainer_Children
   * @property {CreateRequestAssetDataDefinitionContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetDataDefinitionContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetDataDefinitionContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetDataDefinitionContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_SharedField
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
* @typedef {Object} CreateRequestAsset_SharedFieldContainer
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

* @property {CreateRequestAssetSharedFieldContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetSharedFieldContainer_Children
   * @property {CreateRequestAssetSharedFieldContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetSharedFieldContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetSharedFieldContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetSharedFieldContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_MetadataSet
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
* @typedef {Object} CreateRequestAsset_MetadataSetContainer
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

* @property {CreateRequestAssetMetadataSetContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetMetadataSetContainer_Children
   * @property {CreateRequestAssetMetadataSetContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetMetadataSetContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetMetadataSetContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetMetadataSetContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_PublishSet
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

* @property {CreateRequestAssetPublishSet_Files} files
* @property {CreateRequestAssetPublishSet_Folders} folders
* @property {CreateRequestAssetPublishSet_Pages} pages
* @property {boolean} usesScheduledPublishing
* @property {string} scheduledPublishDestinationMode
*/
  /**
   * @typedef {Object} CreateRequestAssetPublishSet_Files
   * @property {CreateRequestAssetPublishSetFiles_PublishableAssetIdentifier} publishableAssetIdentifier
   */
  /**
   * @typedef {Object} CreateRequestAssetPublishSetFiles_PublishableAssetIdentifier
   * @property {string} id
   * @property {CreateRequestAssetPublishSetFilesPublishableAssetIdentifier_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetPublishSetFilesPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
   * @typedef {Object} CreateRequestAssetPublishSet_Folders
   * @property {CreateRequestAssetPublishSetFolders_PublishableAssetIdentifier} publishableAssetIdentifier
   */
  /**
   * @typedef {Object} CreateRequestAssetPublishSetFolders_PublishableAssetIdentifier
   * @property {string} id
   * @property {CreateRequestAssetPublishSetFoldersPublishableAssetIdentifier_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetPublishSetFoldersPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
   * @typedef {Object} CreateRequestAssetPublishSet_Pages
   * @property {CreateRequestAssetPublishSetPages_PublishableAssetIdentifier} publishableAssetIdentifier
   */
  /**
   * @typedef {Object} CreateRequestAssetPublishSetPages_PublishableAssetIdentifier
   * @property {string} id
   * @property {CreateRequestAssetPublishSetPagesPublishableAssetIdentifier_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetPublishSetPagesPublishableAssetIdentifier_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_PublishSetContainer
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

* @property {CreateRequestAssetPublishSetContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetPublishSetContainer_Children
   * @property {CreateRequestAssetPublishSetContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetPublishSetContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetPublishSetContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetPublishSetContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_Target
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
* @typedef {Object} CreateRequestAsset_SiteDestinationContainer
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

* @property {CreateRequestAssetSiteDestinationContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetSiteDestinationContainer_Children
   * @property {CreateRequestAssetSiteDestinationContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetSiteDestinationContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetSiteDestinationContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetSiteDestinationContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_Destination
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
* @typedef {Object} CreateRequestAsset_FileSystemTransport
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
* @typedef {Object} CreateRequestAsset_FtpTransport
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
* @typedef {Object} CreateRequestAsset_DatabaseTransport
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
* @typedef {Object} CreateRequestAsset_CloudTransport
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
* @typedef {Object} CreateRequestAsset_TransportContainer
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

* @property {CreateRequestAssetTransportContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetTransportContainer_Children
   * @property {CreateRequestAssetTransportContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetTransportContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetTransportContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetTransportContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_WorkflowDefinition
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
* @typedef {Object} CreateRequestAsset_WorkflowDefinitionContainer
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

* @property {CreateRequestAssetWorkflowDefinitionContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetWorkflowDefinitionContainer_Children
   * @property {CreateRequestAssetWorkflowDefinitionContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetWorkflowDefinitionContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetWorkflowDefinitionContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetWorkflowDefinitionContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_WorkflowEmail
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
* @typedef {Object} CreateRequestAsset_WorkflowEmailContainer
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

* @property {CreateRequestAssetWorkflowEmailContainer_Children} children
*/
  /**
   * @typedef {Object} CreateRequestAssetWorkflowEmailContainer_Children
   * @property {CreateRequestAssetWorkflowEmailContainerChildren_Child} child
   */
  /**
   * @typedef {Object} CreateRequestAssetWorkflowEmailContainerChildren_Child
   * @property {string} id
   * @property {CreateRequestAssetWorkflowEmailContainerChildrenChild_Path} path
   * @property {string} type - REQUIRED: Each node has a type
   * @property {boolean} recycled
   */
  /**
* @typedef {Object} CreateRequestAssetWorkflowEmailContainerChildrenChild_Path
* @property {string} path
* @property {string} siteId - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

* @property {string} siteName - One is REQUIRED: siteId | siteName
* - The Site in which the asset is located

*/
  /**
* @typedef {Object} CreateRequestAsset_TwitterFeedBlock
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
* @property {CreateRequestAssetTwitterFeedBlock_Metadata} metadata
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
   * @typedef {Object} CreateRequestAssetTwitterFeedBlock_Metadata
   * @property {string} author
   * @property {string} displayName
   * @property {string} endDate
   * @property {string} keywords
   * @property {string} metaDescription
   */
  /**
* @typedef {Object} CreateRequestAsset_Site
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
* @typedef {Object} CreateRequestAsset_EditorConfiguration
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

  /**
   * create operation.
   *
   * @param {createRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {createResponse}
   */
  async create(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * move operation.
   *
   * @param {moveRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {moveResponse}
   */
  async move(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

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
* @property {"name" | "path" | "createdBy" | "modifiedBy" | "displayName" | "title" | "summary" | "teaser" | "keywords" | "description" | "author" | "blob" | "velocityFormatContent" | "xml" | "link"} [searchFields] - NOT REQUIRED
* - Asset fields to search (e.g. name, title, content), see searchField simpleType for valid values

* @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} [searchTypes] - NOT REQUIRED, if left blank, all asset types will be searched
* - Asset types to search (e.g. page, folder, site)

*/
  //#endregion

  // ─── Search Response ─────────────────────────────────────────────────────────
  //#region
  /**
   * @typedef {Object} searchResponse
   * @property {string} success
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

  /**
   * search operation.
   *
   * @param {searchRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {searchResponse}
   */
  async search(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * copy operation.
   *
   * @param {copyRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {copyResponse}
   */
  async copy(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * siteCopy operation.
   *
   * @param {siteCopyRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {siteCopyResponse}
   */
  async siteCopy(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readAccessRights operation.
   *
   * @param {readAccessRightsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {readAccessRightsResponse}
   */
  async readAccessRights(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * editAccessRights operation.
   *
   * @param {editAccessRightsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {editAccessRightsResponse}
   */
  async editAccessRights(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readWorkflowSettings operation.
   *
   * @param {readWorkflowSettingsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {readWorkflowSettingsResponse}
   */
  async readWorkflowSettings(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * editWorkflowSettings operation.
   *
   * @param {editWorkflowSettingsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {editWorkflowSettingsResponse}
   */
  async editWorkflowSettings(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * listSubscribers operation.
   *
   * @param {listSubscribersRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {listSubscribersResponse}
   */
  async listSubscribers(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * listMessages operation.
   *
   * @param {listMessagesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {listMessagesResponse}
   */
  async listMessages(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * markMessage operation.
   *
   * @param {markMessageRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {markMessageResponse}
   */
  async markMessage(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * deleteMessage operation.
   *
   * @param {deleteMessageRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {deleteMessageResponse}
   */
  async deleteMessage(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * checkOut operation.
   *
   * @param {checkOutRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {checkOutResponse}
   */
  async checkOut(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * checkIn operation.
   *
   * @param {checkInRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {checkInResponse}
   */
  async checkIn(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * listSites operation.
   *
   * @param {listSitesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {listSitesResponse}
   */
  async listSites(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readAudits operation.
   *
   * @param {readAuditsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {readAuditsResponse}
   */
  async readAudits(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readWorkflowInformation operation.
   *
   * @param {readWorkflowInformationRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {readWorkflowInformationResponse}
   */
  async readWorkflowInformation(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * performWorkflowTransition operation.
   *
   * @param {performWorkflowTransitionRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {performWorkflowTransitionResponse}
   */
  async performWorkflowTransition(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readPreferences operation.
   *
   * @param {readPreferencesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {readPreferencesResponse}
   */
  async readPreferences(
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
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  async call(endPoint, requestParams) {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };
    requestParams.headers = headers;
    log("info", { request: true }, requestParams);
    const request = await UrlFetchApp.fetch(this.url + endPoint, requestParams);
    const parsed = JSON.parse(request);
    log("info", { request: true }, parsed);
    return parsed;
  }
}
