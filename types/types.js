// https://github.com/kuklaph/cascade-cms-api

// ─── Complex Types ───────────────────────────────────────────────────────────
//#region ComplexTypes

/**
 * @typedef {Object} BaseAsset
 * - All assets inherit from base asset
 * @property {string} [id]
 * - The id of the asset. When creating, this should not be present as an asset does not have an id until it is created. When editing, specify this to uniquely identify an asset.
 */
/**
 * @typedef {Object} NamedAssetProperties
 * @property {string} name
 * - REQUIRED on create, ignored on edit. Use move operation to rename an asset.
 */
/**
 * @typedef {BaseAsset & NamedAssetProperties} NamedAsset
 * - All assets have a name
 */

/**
 * @typedef {Object} Tags
 * @property {string} tags.name
 * - REQUIRED: Value of tag string
 */

/**
 * @typedef {Object} FolderContainedAssetProperties
 * @property {string} [parentFolderId]
 * - REQUIRED on create, ignored on edit: The parent folder relationship
 * - Priority: parentFolderId > parentFolderPath
 * - One is REQUIRED
 * @property {string} [parentFolderPath]
 * - REQUIRED on create, ignored on edit
 * @property {string} [path]
 * - NOT REQUIRED: The path of an asset
 * @property {string} [lastModifiedDate]
 * - NOT REQUIRED: When this asset was last modified
 * - Read only
 * @property {string} [lastModifiedBy]
 * - NOT REQUIRED: Who last modified this asset
 * - Read only
 * @property {string} [createdDate]
 * - NOT REQUIRED: When this asset was created
 * - Read only
 * @property {string} [createdBy]
 * - NOT REQUIRED: Who created this asset
 * - Read only
 * @property {string} [siteId]
 * - One is REQUIRED: The Site in which the asset is located
 * @property {string} [siteName]
 * - One is REQUIRED
 * @property {Tags[]} [tags]
 * - NOT REQUIRED: Content Tags assigned to the asset
 */

/**
 * @typedef {NamedAsset & FolderContainedAssetProperties} FolderContainedAsset
 * - Representing all home-area assets that are contained in a folder
 */

/**
 * @typedef {Object} Metadata
 * - The content of the wired metadata fields
 * - None of the fields are required and the defaults are empty
 * @property {string} [author]
 * - NOT REQUIRED
 * @property {string} [displayName]
 * - NOT REQUIRED
 * @property {string} [endDate]
 * - NOT REQUIRED
 * @property {string} [keywords]
 * - NOT REQUIRED
 * @property {string} [metaDescription]
 * - NOT REQUIRED
 * @property {string} [reviewDate]
 * - NOT REQUIRED
 * @property {string} [startDate]
 * - NOT REQUIRED
 * @property {string} [summary]
 * - NOT REQUIRED
 * @property {string} [teaser]
 * - NOT REQUIRED
 * @property {string} [title]
 * - NOT REQUIRED
 * @property {Object[]} [dynamicFields]
 * - NOT REQUIRED: Array
 * @property {string} dynamicFields.name
 * - REQUIRED
 * @property {Object[]} [dynamicFields.fieldValues]
 * - NOT REQUIRED: Array
 * @property {string} [dynamicFields.fieldValues.value]
 * - NOT REQUIRED
 */

/**
 * @typedef {Object} DublinAwareAssetProperties
 * @property {Metadata} [metadata]
 * - NOT REQUIRED: The individual wired metadata fields
 * - default: all empty
 * @property {string} [metadataSetId]
 * - NOT REQUIRED: For defining the metadata set relationship
 * - Priority: metadataSetId > metadataSetPath
 * @property {string} [metadataSetPath]
 * - NOT REQUIRED: For defining the metadata set relationship
 * - Priority: metadataSetId > metadataSetPath
 * @property {boolean} [reviewOnSchedule]
 * - NOT REQUIRED
 * @property {number} [reviewEvery]
 * - NOT REQUIRED
 */

/**
 * @typedef {FolderContainedAsset & DublinAwareAssetProperties} DublinAwareAsset
 * - End types that extend containered-asset
 */

/**
 * @typedef {Object} ExpiringAssetProperties
 * - An asset that can expire and be moved to an expiration folder
 * @property {string} [expirationFolderId]
 * - NOT REQUIRED: When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
 * - Priority: expirationFolderId > expirationFolderPath
 * @property {string} [expirationFolderPath]
 * - NOT REQUIRED: Path works only for non-recycled assets
 * @property {boolean} [expirationFolderRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
 */

/**
 * @typedef {DublinAwareAsset & ExpiringAssetProperties} ExpiringAsset
 * - An asset that can expire and be moved to an expiration folder
 */

/**
 * @typedef {"inherit" | "absolute" | "relative" | "site-relative"} LinkRewriting
 */

/**
 * @typedef {Object} PublishableAssetProperties
 * @property {boolean} [shouldBePublished]
 * - NOT REQUIRED: default: true
 * - Whether or not this asset can be published
 * @property {boolean} [shouldBeIndexed]
 * - NOT REQUIRED: default: true
 * - Whether or not this asset can be indexed
 * @property {string} [lastPublishedDate]
 * - NOT REQUIRED:
 * - The last date this asset was published
 * @property {string} [lastPublishedBy]
 * - NOT REQUIRED:
 * - Who last published this asset
 */

/**
 * @typedef {ExpiringAsset & PublishableAssetProperties} PublishableAsset
 */

/**
 * @typedef {"assetfactory" |
 * "assetfactorycontainer" |
 * "block" |
 * "block_FEED" |
 * "block_INDEX" |
 * "block_TEXT" |
 * "block_XHTML_DATADEFINITION" |
 * "block_XML" |
 * "block_TWITTER_FEED" |
 * "connectorcontainer" |
 * "twitterconnector" |
 * "facebookconnector" |
 * "wordpressconnector" |
 * "googleanalyticsconnector" |
 * "contenttype" |
 * "contenttypecontainer" |
 * "destination" |
 * "editorconfiguration" |
 * "file" |
 * "folder" |
 * "group" |
 * "message" |
 * "metadataset" |
 * "metadatasetcontainer" |
 * "page" |
 * "pageconfigurationset" |
 * "pageconfiguration" |
 * "pageregion" |
 * "pageconfigurationsetcontainer" |
 * "publishset" |
 * "publishsetcontainer" |
 * "reference" |
 * "role" |
 * "datadefinition" |
 * "datadefinitioncontainer" |
 * "sharedfield" |
 * "sharedfieldcontainer" |
 * "format" |
 * "format_XSLT" |
 * "format_SCRIPT" |
 * "site" |
 * "sitedestinationcontainer" |
 * "symlink" |
 * "target" |
 * "template" |
 * "transport" |
 * "transport_fs" |
 * "transport_ftp" |
 * "transport_db" |
 * "transport_cloud" |
 * "transportcontainer" |
 * "user" |
 * "workflow" |
 * "workflowdefinition" |
 * "workflowdefinitioncontainer" |
 * "workflowemail" |
 * "workflowemailcontainer" |
 * "xhtmlDataDefinitionBlock"} EntityTypeString - All asset type strings
 */

/**
 * @typedef {Object} Path
 * @property {string} path
 * - When reading a site, the "path" element should be populated with the site's name.
 * @property {string} [siteId]
 * - NOT REQUIRED.
 * @property {string} [siteName]
 * - NOT REQUIRED.
 */

/**
 * @typedef {Object} Identifier
 * @property {string} [id]
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
 *   in case if the selected asset gets restored from the recycle bin. One is REQUIRED.
 * @property {Path} [path]
 * - Path works only for non-recycled assets.
 * @property {EntityTypeString} type
 * - REQUIRED.
 * - All asset type strings
 * @property {boolean} [recycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
 */

/**
 * @typedef {Identifier} ContainerChildren
 */

/**
 * @typedef {Object} StructuredDataNode
 * - A single structured data node
 * @property {"text" | "asset" | "group"} type - REQUIRED: Each node has a type
 * @property {string} identifier - REQUIRED
 * - The text identifier of the node coming from corresponding field in Data Definition. If this node is preserved on the asset but corresponding field no longer exists in Data Definition, the identifier's value will be "\<legacy\>".
 * @property {StructuredDataNodes[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
 * @property {string} [text] - REQUIRED if type is 'text'
 * @property {"block" | "file" | "page" | "symlink" | "page,file,symlink"} [assetType] - REQUIRED if type is 'asset'
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
 * @typedef {StructuredDataNode} StructuredDataNodes
 * - An array of structured data nodes
 */

/**
 * @typedef {Object} StructuredData - Page structured data information
 * @property {string} [definitionId] - NOT REQUIRED
 * - Priority: definitionId > definitionPath
 * - For defining an asset's Data Definition relationship
 * @property {string} [definitionPath] - NOT REQUIRED
 * - Priority: definitionId > definitionPath
 * - For defining an asset's Data Definition relationship
 * @property {StructuredDataNodes[]} [structuredDataNodes] - NOT REQUIRED: An array of structured data nodes
 */

/**
 * @typedef {"HTML" |
 * "XML" |
 * "PDF" |
 * "RTF" |
 * "JSON" |
 * "JS" |
 * "CSS"} SerializationType
 * - The various serialization types for a target
 */

/**
 * @typedef {Object} PageConfigurationProperties
 * @property {string} name
 * - A single page configuration's name, such as "XML" or "Full HTML". REQUIRED.
 * @property {boolean} defaultConfiguration
 * - Whether or not this is the default configuration. REQUIRED.
 * @property {string} [templateId]
 * - The template for this configuration. Priority: templateId > templatePath. One is REQUIRED for pageConfigurationSet.
 * - NOT REQUIRED for page.
 * @property {string} [templatePath]
 * - The template for this configuration.
 * @property {string} [formatId]
 * - The overall XSLT format applied to this page configuration. Priority: formatId > formatPath. NOT REQUIRED default none.
 * @property {string} [formatPath]
 * - The overall XSLT format applied to this page configuration.
 * @property {boolean} [formatRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {PageRegions[]} [pageRegions]
 * - The individual page region assignments for this configuration.
 * @property {string} [outputExtension]
 * - The output file extension, for example ".html". Only required when in a site.
 * @property {SerializationType} [serializationType]
 * - The content type this target serializes its output as. Only required when in a site.
 * - The various serialization types for a target
 * @property {boolean} [includeXMLDeclaration]
 * - When the serializationType is "XML", should Cascade include the XML declaration in published files? NOT REQUIRED default: false.
 * @property {boolean} [publishable]
 * - Is this configuration publishable?
 */

/**
 * @typedef {Object} PageRegionProperties
 * @property {string} name
 * - The name of this page region, for example, "DEFAULT", or "JAVASCRIPT-INCLUDE".
 * - This MUST correspond to the name of a region defined in the template. REQUIRED.
 * @property {string} [blockId]
 * - The block assigned at this page region. Priority: blockId > blockPath. NOT REQUIRED.
 * @property {string} [blockPath]
 * - Path works only for non-recycled assets.
 * @property {boolean} [blockRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {boolean} [noBlock]
 * - When this is set to true, this will keep a block defined at a lower level from applying to this region.
 * - NOT REQUIRED: default: false.
 * @property {string} [formatId]
 * - The format assigned at this page region, can be either XSLT or script. Priority: formatId > formatPath. NOT REQUIRED.
 * @property {string} [formatPath]
 * - Path works only for non-recycled assets.
 * @property {boolean} [formatRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {boolean} [noFormat]
 * - When this is set to true, this will keep a format defined at a lower level from applying to this region.
 * - NOT REQUIRED: default: false.
 */

/**
 * @typedef {BaseAsset & PageRegionProperties} PageRegion
 * - An individual page region
 */

/**
 * @typedef {PageRegion} PageRegions
 * - Complex type wrapping a list of page regions
 */

/**
 * @typedef {BaseAsset & PageConfigurationProperties} PageConfiguration
 */

/**
 * @typedef {PageConfiguration} PageConfigurations
 * - A list of page configurations.
 */

/**
 * Represents global abilities for a role.
 * @typedef {Object} GlobalAbilities
 * @property {boolean} [bypassAllPermissionsChecks=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessSiteManagement=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [createSites=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editAccessRights=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessAudits=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessAllSites=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewSystemInfoAndLogs=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [forceLogout=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [diagnosticTests=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessSecurityArea=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [optimizeDatabase=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [syncLdap=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [configureLogging=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [searchingIndexing=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessConfiguration=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editSystemPreferences=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [broadcastMessages=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewUsersInMemberGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewAllUsers=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [createUsers=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [deleteUsersInMemberGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [deleteAllUsers=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewMemberGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewAllGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [createGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [deleteMemberGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessRoles=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [createRoles=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [deleteAnyGroup=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editAnyUser=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editUsersInMemberGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editAnyGroup=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editMemberGroups=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [databaseExportTool=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [changeIdentity=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessDefaultEditorConfiguration=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [modifyDictionary=false] - NOT REQUIRED: Default is false.
 */

/**
 * Represents site abilities for a role.
 * @typedef {Object} SiteAbilities
 * @property {boolean} [bypassAllPermissionsChecks=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [uploadImagesFromWysiwyg=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [multiSelectCopy=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [multiSelectPublish=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [multiSelectMove=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [multiSelectDelete=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editPageLevelConfigurations=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editPageContentType=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editDataDefinition=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [publishReadableHomeAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [publishWritableHomeAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [editAccessRights=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewVersions=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [activateDeleteVersions=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessAudits=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [bypassWorkflow=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [assignApproveWorkflowSteps=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [deleteWorkflows=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [breakLocks=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [assignWorkflowsToFolders=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [bypassAssetFactoryGroupsNewMenu=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [bypassDestinationGroupsWhenPublishing=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [bypassWorkflowDefintionGroupsForFolders=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessManageSiteArea=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessAssetFactories=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessConfigurationSets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessDataDefinitions=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessSharedFields=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessMetadataSets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessPublishSets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessDestinations=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessTransports=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessWorkflowDefinitions=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessWorkflowEmails=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessContentTypes=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessConnectors=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [publishReadableAdminAreaAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [publishWritableAdminAreaAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [importZipArchive=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [bulkChange=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [recycleBinViewRestoreUserAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [recycleBinDeleteAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [recycleBinViewRestoreAllAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [moveRenameAssets=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [diagnosticTests=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [alwaysAllowedToToggleDataChecks=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [viewPublishQueue=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [reorderPublishQueue=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [cancelPublishJobs=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [sendStaleAssetNotifications=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [brokenLinkReportAccess=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [brokenLinkReportMarkFixed=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessEditorConfigurations=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [bypassWysiwygEditorRestrictions=false] - NOT REQUIRED: Default is false.
 * @property {boolean} [accessSiteImproveIntegration=false] - NOT REQUIRED: Default is false.
 */

/**
 * @typedef {Object} ContaineredAssetProperties
 * @property {string} [parentContainerId]
 * - NOT REQUIRED on edit: For defining the container relationship. Priority: parentContainerId > parentContainerPath. Required on create, ignored on edit. Use move operation to move an asset after it has been created.
 * @property {string} [parentContainerPath]
 * - NOT REQUIRED on edit: Priority: parentContainerId > parentContainerPath. One is REQUIRED on create, ignored on edit.
 * @property {string} [path]
 * - NOT REQUIRED: The path of an asset. This is another way to uniquely identify an asset. Left blank when creating, specify this to uniquely identify an asset when editing.
 * @property {string} [siteId]
 * - NOT REQUIRED: The site in which the asset is located. Priority: siteId > siteName. One is REQUIRED.
 * @property {string} [siteName]
 * - NOT REQUIRED: Priority: siteId > siteName. One is REQUIRED.
 */

/**
 * @typedef {NamedAsset & ContaineredAssetProperties} ContaineredAsset
 * - All system area assets are "containered"
 */

/**
 * @typedef {Object} AssetFactoryPluginParameter
 * @property {string} name
 * - REQUIRED: Parameter name (not label), for example "assetfactory.plugin.filelimit.param.name.size".
 * @property {string} [value]
 * - NOT REQUIRED: Parameter value, default is an empty string.
 */

/**
 * @typedef {AssetFactoryPluginParameter} AssetFactoryPluginParameters
 * - Complex type wrapping a list of asset factory plugin parameters
 */

/**
 * @typedef {Object} AssetFactoryPlugin
 * @property {string} name
 * - REQUIRED: Name of the asset factory plugin. This is the exact class, like "com.cms.assetfactory.DisplayToSystemNamePlugin".
 * @property {AssetFactoryPluginParameters[]} [parameters]
 * - NOT REQUIRED: Parameters for the asset factory plugin.
 */

/**
 * @typedef {AssetFactoryPlugin} AssetFactoryPlugins
 * - Complex type wrapping a list of asset factory plugins
 */

/**
 * @typedef {"all-destinations" | "selected-destinations" | "do-not-publish"} ContentTypePageConfigurationPublishMode
 */

/**
 * @typedef {Identifier} DestinationList
 * - A list of identifiers of publishable assets (files, folders, or pages).
 */

/**
 * @typedef {Object} ContentTypePageConfiguration
 * @property {string} [pageConfigurationId]
 * - Priority: pageConfigurationId > pageConfigurationName. One is REQUIRED.
 * @property {string} [pageConfigurationName]
 * @property {ContentTypePageConfigurationPublishMode} publishMode
 * - REQUIRED.
 * @property {DestinationList[]} [destinations]
 * - REQUIRED if "publishMode" is "selected-destinations", else NOT REQUIRED and ignored.
 */

/**
 * @typedef {ContentTypePageConfiguration} ContentTypePageConfigurations
 */

/**
 * @typedef {Object} InlineEditableField
 * @property {string} pageConfigurationName
 * - REQUIRED.
 * @property {string} pageRegionName
 * - REQUIRED.
 * @property {string} [dataDefinitionGroupPath]
 * - NOT REQUIRED. This property is only applicable for data-definition type fields and is needed only if the field is inside of a group.
 *   It holds a list of ancestor data definition groups presented in the form of a path.
 * @property {InlineEditableFieldType} type
 * - REQUIRED.
 * @property {string} [name]
 * - REQUIRED for metadata and data-definition field type. NOT REQUIRED for xhtml field type.
 *   Use title, displayName, summary, teaser, keywords, description, author, startDate, endDate, reviewDate for wired metadata fields,
 *   field name for dynamic metadata field or field identifier for a data definition field.
 */

/**
 * @typedef {InlineEditableField} InlineEditableFields
 */

/**
 * @typedef {"wired-metadata" | "dynamic-metadata" | "data-definition" | "xhtml"} InlineEditableFieldType
 */

/**
 * @typedef {Object} ConnectorParameter
 * @property {string} name
 * - REQUIRED: Name of the parameter.
 * @property {string} value
 * - REQUIRED: Value of the parameter.
 */

/**
 * @typedef {ConnectorParameter} ConnectorParameterList
 */

/**
 * @typedef {Object} ConnectorContentTypeLinkParam
 * @property {string} name
 * - REQUIRED: Name of the parameter.
 * @property {string} value
 * - REQUIRED: Value of the parameter.
 */

/**
 * @typedef {ConnectorContentTypeLinkParam} ConnectorContentTypeLinkParamList
 * - NOT REQUIRED: An array of connector content type link parameters.
 */

/**
 * @typedef {Object} ConnectorContentTypeLink
 * @property {string} [contentTypeId]
 * - REQUIRED: One of contentTypeId or contentTypePath must be specified.
 * @property {string} [contentTypePath]
 * - REQUIRED: One of contentTypeId or contentTypePath must be specified.
 * @property {string} [pageConfigurationId]
 * - NOT REQUIRED: Identifier for the page configuration.
 * @property {string} [pageConfigurationName]
 * - NOT REQUIRED: Name for the page configuration.
 * @property {ConnectorContentTypeLinkParamList[]} [connectorContentTypeLinkParams]
 * - NOT REQUIRED: A list of connector content type link params.
 */

/**
 * @typedef {ConnectorContentTypeLink} ConnectorContentTypeLinkList
 */

/**
 * @typedef {Object} ConnectorProperties
 * @property {string} [auth1]
 * - NOT REQUIRED: First authentication token for the external application the connector connects to (usually a username or email address)
 * @property {string} [auth2]
 * - NOT REQUIRED: Second authentication token for the external application the connector connects to (usually a password)
 * - Write only - hidden when read
 * @property {string} [url]
 * - NOT REQUIRED: URL of the external application the connector connects to
 * @property {boolean} [verified]
 * - NOT REQUIRED: Determines whether or not the connector has been verified
 * - Read only - editing a connector always unverifies it
 * @property {string} [verifiedDate]
 * - NOT REQUIRED: The date this connector was verified
 * - Read only - editing a connector always clears the verification date
 * @property {ConnectorParameterList[]} [connectorParameters]
 * - NOT REQUIRED: A list of connector parameters
 * @property {ConnectorContentTypeLinkList[]} [connectorContentTypeLinks]
 * - REQUIRED for FacebookConnector and WordPressConnector
 */

/**
 * @typedef {ContaineredAsset & ConnectorProperties} Connector
 */

/**
 * @typedef {Object} StatusUpdateConnectorProperties
 * @property {string} [destinationId]
 * - One is REQUIRED:
 * - Priority: destinationId > destinationPath
 * @property {string} [destinationPath]
 * - One is REQUIRED:
 * - Priority: destinationId > destinationPath
 */

/**
 * @typedef {Connector & StatusUpdateConnectorProperties} StatusUpdateConnector
 */

/**
 * @typedef {"text" | "datetime" | "radio" | "dropdown" | "checkbox" | "multiselect"} DynamicMetadataFieldType
 * - The different types of dynamic metadata fields
 */

/**
 * @typedef {"inline" | "hidden" | "visible"} MetadataFieldVisibility
 * - Enumeration of the possible metadata field visibilities
 */

/**
 * @typedef {Object} DynamicMetadataFieldDefinitionValue
 * @property {string} [value]
 * - NOT REQUIRED: The actual string value. When not provided, an empty string will be used.
 * @property {string} [label]
 * - NOT REQUIRED: Label displayed to the user editing an asset. When not provided, value will be displayed.
 * @property {boolean} [selectedByDefault=false]
 * - Whether or not this value should be checked by default when creating new assets through web UI. Default is false.
 */

/**
 * @typedef {DynamicMetadataFieldDefinitionValue} DynamicMetadataFieldDefinitionValues
 */

/**
 * @typedef {Object} DynamicMetadataFieldDefinition
 * @property {string} name
 * - REQUIRED: The name of the dynamic metadata field.
 * @property {string} label
 * - REQUIRED: The label of the dynamic metadata field.
 * @property {DynamicMetadataFieldType} fieldType
 * - REQUIRED: The type of the dynamic metadata field.
 * @property {boolean} [required=false]
 * - Whether or not this field is required. Default is false.
 * @property {MetadataFieldVisibility} [visibility='visible']
 * - The visibility of this field. Default is "visible".
 * @property {DynamicMetadataFieldDefinitionValues[]} [possibleValues]
 * - REQUIRED for radio, checkbox, dropdown and multiselect types, ignored for text type.
 * @property {string} [helpText]
 * - Optional help text for this field.
 */

/**
 * @typedef {DynamicMetadataFieldDefinition} DynamicMetadataFieldDefinitions
 */

/**
 * @typedef {Identifier} PublishableAssetList
 * - A list of identifiers of publishable assets (files, folders, or pages).
 */

/**
 * @typedef {"all-destinations" | "selected-destinations"} ScheduledDestinationMode
 * - For Sites, Targets, Publish Sets scheduledPublishDestinationMode property
 */

/**
 * @typedef {"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"} DayOfWeek
 */

/**
 * @typedef {Object} DaysOfWeek
 * @property {DayOfWeek} [dayOfWeek] - NOT REQUIRED: A list of days of the week.
 */

/**
 * @typedef {"PASSWORD" | "PUBLIC_KEY"} AuthMode
 */

/**
 * @typedef {"FTP" | "FTPS" | "SFTP"} FtpProtocolType
 */

/**
 * @typedef {"auto-name" | "name-of-definition" | "empty"} WorkflowNamingBehavior
 * - The different options for naming an instance of a workflow definition
 */

/**
 * @typedef {Object} RoleAssignment
 * @property {string} [roleId] - NOT REQUIRED: Priority: roleId > roleName
 * @property {string} [roleName] - NOT REQUIRED: Priority: roleId > roleName
 * @property {string} [users] - NOT REQUIRED: Comma-delimited list of usernames.
 * @property {string} [groups] - NOT REQUIRED: Comma-delimited list of group names.
 */

/**
 * @typedef {RoleAssignment} RoleAssignments
 */

/**
 * @typedef {"1" | "15" | "30" | "never"} RecycleBinExpiration
 */

/**
 * @typedef {"ANY" | "LOWER" | "UPPER"} NamingRuleCase
 */

/**
 * @typedef {"SPACE" | "REMOVE" | "HYPHEN" | "UNDERSCORE"} NamingRuleSpacing
 */

/**
 * @typedef {Object} NamingRuleAsset
 * @property {"block" | "file" | "folder" | "page" | "symlink" | "template" | "reference" | "format"} [namingRuleAsset]
 */

/**
 * @typedef {NamingRuleAsset} NamingRuleAssets
 */

/**
 * @typedef {Object} WorkflowStepConfiguration
 * @property {string} stepIdentifier
 * - REQUIRED
 * - The step's unique text identifier/name
 * @property {string} stepAssignment
 * - REQUIRED
 * - The step's assignment (user or group name)
 */

/**
 * @typedef {WorkflowStepConfiguration} WorkflowStepConfigurations
 * - An array of workflow step configuration objects
 */

/**
 * @typedef {Object} WorkflowConfiguration
 * @property {string} workflowName
 * - When the workflow is instantiated, this will be its name
 * - REQUIRED
 * @property {string} [workflowDefinitionId]
 * - Which workflow definition to use
 * - Priority: workflowDefinitionId > workflowDefinitionPath
 * - One is REQUIRED
 * @property {string} [workflowDefinitionPath]
 * - Which workflow definition to use
 * - Priority: workflowDefinitionId > workflowDefinitionPath
 * - One is REQUIRED
 * @property {string} workflowComments
 * - The comments for this operation which will be recorded with the workflow
 * - REQUIRED
 * @property {WorkflowStepConfigurations[]} [workflowStepConfigurations]
 * - The optional step configurations for each assignable step in the workflow
 * - NOT REQUIRED default: the defaults as defined in the workflow definition
 * @property {string} [endDate]
 * - Optional due date for the workflow. If not specified, will default to 7 days from today
 */

/**
 * @typedef {Object} OperationResult
 * @property {string} success
 * @property {string} message
 */

/**
 * @typedef {Identifier} AssetIdentifiers
 * - Array wrapper for multiple identifiers of assets
 */

/**
 * @typedef {Object} UnpublishParameters
 * - Parameters used when unpublishing an asset
 * @property {boolean} [unpublish]
 * - NOT REQUIRED: When true, the asset will be unpublished. Default: false
 * @property {AssetIdentifiers[]} [destinations]
 * - NOT REQUIRED: Unpublishes the asset from the given destinations. Default: all enabled destinations in the asset's site
 */

/**
 * @typedef {"read" | "write"} AclEntryLevel
 */

/**
 * @typedef {"user" | "group"} AclEntryType
 */

/**
 * @typedef {Object} AclEntry
 * - A single access control list entry
 * @property {AclEntryLevel} level
 * - REQUIRED: The access level, either "read" or "write".
 * @property {AclEntryType} type
 * - REQUIRED: The type of ACL entry, either "user" or "group".
 * @property {string} name
 * - REQUIRED: The name of the user or group for which this ACL entry applies.
 */

/**
 * @typedef {AclEntry} AclEntries
 * - Array wrapper for access control list entries
 */

/**
 * @typedef {"none" | "read" | "write"} AllLevel
 */

/**
 * @typedef {Object} AccessRightsInformationSend
 * @property {AclEntries[]} [aclEntries]
 * - Optional list of Access Control List entries.
 * @property {AllLevel} allLevel
 * - REQUIRED: Defines the access level for all users.
 */

/**
 * @typedef {Object} AccessRightsInformationReceive
 * @property {Identifier} identifier
 * - REQUIRED: Unique identifier for the asset or component whose access rights are being defined.
 * @property {AclEntries[]} [aclEntries]
 * - Optional list of Access Control List entries.
 * @property {AllLevel} allLevel
 * - REQUIRED: Defines the access level for all users.
 */

/**
 * @typedef {Object} WorkflowSettingsSend
 * - Complete data with the workflow settings of a folder
 * @property {AssetIdentifiers[]} [workflowDefinitions]
 * - NOT REQUIRED: Workflow definitions associated with this folder.
 * @property {boolean} [inheritWorkflows]
 * - NOT REQUIRED: Determines whether the workflow settings are inherited from the parent folder.
 * @property {boolean} [requireWorkflow]
 * - NOT REQUIRED: Indicates whether a workflow is required for this folder.
 * @property {AssetIdentifiers[]} [inheritedWorkflowDefinitions]
 * - NOT REQUIRED: Inherited workflow definitions from the parent folder. Ignored on edit.
 */

/**
 * @typedef {Object} WorkflowSettingsReceive
 * - Complete data with the workflow settings of a folder
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the workflow settings of a folder.
 * @property {AssetIdentifiers[]} [workflowDefinitions]
 * - NOT REQUIRED: Workflow definitions associated with this folder.
 * @property {boolean} [inheritWorkflows]
 * - NOT REQUIRED: Determines whether the workflow settings are inherited from the parent folder.
 * @property {boolean} [requireWorkflow]
 * - NOT REQUIRED: Indicates whether a workflow is required for this folder.
 * @property {AssetIdentifiers[]} [inheritedWorkflowDefinitions]
 * - NOT REQUIRED: Inherited workflow definitions from the parent folder. Ignored on edit.
 */

//#endregion

// ─── Asset Block ─────────────────────────────────────────────────────────────
//#region Asset Blocks

//#region FeedBlockProperties DONE
/**
 * @typedef {Object} FeedBlockProperties
 * @property {string} feedURL - REQUIRED: The URL of an XML feed
 */

/**
 * @typedef {FeedBlockProperties &
 * ExpiringAsset
 * } FeedBlock
 */

//#endregion

//#region IndexBlockProperties DONE
/**
 * @typedef {Object} IndexBlockProperties
 * @property {"folder" | "content-type"} [indexBlockType] - NOT REQUIRED: The type of the index block. It takes "folder" as a default. Default: "folder"
 * @property {string} [indexedFolderId] - NOT REQUIRED: The indexed folder relationship when indexBlockType is folder. Priority: indexedFolderId > indexedFolderPath. When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
 * @property {string} [indexedFolderPath] - NOT REQUIRED: Path works only for non-recycled assets.
 * @property {string} [indexedContentTypeId] - NOT REQUIRED: The indexed content type relationship when indexBlockType is content-type. Priority: indexedContentTypeId > indexedContentTypePath. One is REQUIRED when indexBlockType is content-type.
 * @property {string} [indexedContentTypePath] - NOT REQUIRED: The indexed content type relationship when indexBlockType is content-type. Priority: indexedContentTypeId > indexedContentTypePath. One is REQUIRED when indexBlockType is content-type.
 * @property {boolean} [indexedFolderRecycled] - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
 * @property {number} maxRenderedAssets - REQUIRED: The maximum number of assets to render in XML form for this index block.
 * @property {number} depthOfIndex - REQUIRED: The folder depth to which the indexer will render assets in XML form.
 * @property {"render-normally" | "hierarchy" | "hierarchy-with-siblings" | "hierarchy-siblings-forward"} [renderingBehavior] - NOT REQUIRED: The rendering behavior of the folder index block. Default: "render-normally".
 * @property {boolean} [indexPages] - NOT REQUIRED: Whether or not to index page assets. Default: false.
 * @property {boolean} [indexBlocks] - NOT REQUIRED: Whether or not to index block assets. Default: false.
 * @property {boolean} [indexLinks] - NOT REQUIRED: Whether or not to index (sym)link assets. Default: false.
 * @property {boolean} [indexFiles] - NOT REQUIRED: Whether or not to index file assets. Default: false.
 * @property {boolean} [indexRegularContent] - NOT REQUIRED: Whether or not to include path data. Default: false.
 * @property {boolean} [indexSystemMetadata] - NOT REQUIRED: Whether or not to include last modified date, last modified by, created date and created by. Default: false.
 * @property {boolean} [indexUserMetadata] - NOT REQUIRED: Whether or not to include wired/dynamic metadata. Default: false.
 * @property {boolean} [indexAccessRights] - NOT REQUIRED: Whether or not to include access rights information. Default: false.
 * @property {boolean} [indexTags] - NOT REQUIRED: Whether or not to include tags. Default: false.
 * @property {boolean} [indexUserInfo] - NOT REQUIRED: When this is "true", an element "user-information" will be added towards the bottom of the rendered XML including information about the user's login, full name and group memberships. Default: false.
 * @property {boolean} [indexWorkflowInfo] - NOT REQUIRED: When this is "true", and this block is included in a page that is in workflow, an element containing the page's workflow information will be included in the rendered XML. Default: false.
 * @property {boolean} [appendCallingPageData] - NOT REQUIRED: When this is "true", the page which includes this index block will have its information also included at the bottom in a "calling-page-data" element. Default: false.
 * @property {"folder-order" | "alphabetical" | "last-modified-date" | "created-date"} [sortMethod] - NOT REQUIRED: How to sort the folder contents when rendering the XML content. Default: "folder-order" for folder index blocks and "alphabetical" for content type index blocks.
 * @property {"ascending" | "descending"} [sortOrder] - NOT REQUIRED: In what order to sort the assets in the index block. Default: "ascending".
 * @property {"no-render" | "render" | "render-current-page-only"} [pageXML] - NOT REQUIRED: The Page XML rendering option. Default: "no-render".
 */

/**
 * @typedef {IndexBlockProperties &
 * ExpiringAsset
 * } IndexBlock
 */
//#endregion

//#region TextBlockProperties DONE
/**
 * @typedef {Object} TextBlockProperties
 * @property {string} text - REQUIRED: The text of the block
 */

/**
 * @typedef {TextBlockProperties &
 * ExpiringAsset
 * } TextBlock - A block containing plain text
 */
//#endregion

//#region XhtmlDataDefinitionBlockProperties DONE
/**
 * @typedef {Object} XhtmlDataDefinitionBlockProperties
 * @property {StructuredData} [structuredData]
 * - A page either contains XHTML content (plain WYSIWYG page) or structured data content.
 * Priority: xhtml > structuredData. One is REQUIRED.
 */

/**
 * @typedef {XhtmlDataDefinitionBlockProperties &
 * ExpiringAsset
 * } XhtmlDataDefinitionBlock - A block containing plain XHTML or Structured Data
 */

//#endregion

//#region XmlBlockProperties DONE
/**
 * @typedef {Object} XmlBlockProperties
 */

/**
 * @typedef {ExpiringAsset} XmlBlock - A block containing plain XML
 */

//#endregion

//#region TwitterFeedBlockProperties DONE
/**
 * @typedef {Object} TwitterFeedBlockProperties
 * @property {string} [accountName] - NOT REQUIRED: The Account Name of the block. REQUIRED for Tweets Only and Tweets and Mentions query types.
 * @property {string} [searchString] - NOT REQUIRED: The Search String for the block. REQUIRED for Tweets Only and Tweets and Mentions search terms types.
 * @property {number} maxResults - REQUIRED: The maximum number of tweets which can be shown.
 * @property {boolean} useDefaultStyle - REQUIRED: Should the twitter feed block use the default CSS style?
 * @property {boolean} excludeJQuery - REQUIRED: Should the twitter feed block include the JQuery API?
 * @property {"user-only" | "users-and-mentions" | "search-terms"} queryType - REQUIRED: The type of twitter feed block
 */

/**
 * @typedef {TwitterFeedBlockProperties &
 * ExpiringAsset
 * } TwitterFeedBlock
 */

//#endregion

//#region FileProperties DONE
/**
 * @typedef {Object} FileProperties
 * @property {string} [text]
 * - One is REQUIRED
 * - Priority: text > data
 * - A file either contains plaintext content or binary content (base64 encoded)
 * @property {any[]} [data]
 * - One is REQUIRED
 * - Priority: text > data
 * - A file either contains plaintext content or binary content (base64 encoded)
 * @property {boolean} [rewriteLinks]
 * @property {LinkRewriting} [linkRewriting]
 * - NOT REQUIRED: default: "inherit"
 */

/**
 * @typedef {FileProperties &
 * PublishableAsset
 * } File
 */

//#endregion

//#region FolderProperties DONE
/**
 * @typedef {Object} FolderProperties
 * @property {ContainerChildren[]} [children]
 * - The array of children
 * - Wrapper for an array of folder children (identifiers)
 * @property {boolean} [includeInStaleContent] - NOT REQUIRED
 */

/**
 * @typedef {FolderProperties &
 * PublishableAsset
 * } Folder
 */

//#endregion

//#region PageProperties DONE
/**
 * @typedef {Object} PageProperties
 * @property {string} [configurationSetId]
 * - For defining the configuration set or content type relationship.
 * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
 * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
 * @property {string} [configurationSetPath]
 * - For defining the configuration set or content type relationship.
 * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
 * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
 * @property {string} [contentTypeId]
 * - For defining the configuration set or content type relationship.
 * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
 * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
 * @property {string} [contentTypePath]
 * - For defining the configuration set or content type relationship.
 * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
 * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
 * @property {StructuredData} [structuredData]
 * - A page either contains XHTML content (plain WYSIWYG page) or structured data content.
 * Priority: xhtml > structuredData. One is REQUIRED.
 * @property {string} [xhtml]
 * - A page either contains XHTML content (plain WYSIWYG page) or structured data content.
 * @property {PageConfigurations[]} [pageConfigurations]
 * - The page configurations containing page-level region block/format assignments.
 * NOT REQUIRED when creating a page, but you must submit assignment information when editing
 * if you want to maintain the region assignments.
 * @property {LinkRewriting} [linkRewriting]
 * - NOT REQUIRED: default: "inherit".
 */

/**
 * @typedef {PageProperties &
 * PublishableAsset
 * } Page
 */

//#endregion

//#region ReferenceProperties DONE
/**
 * @typedef {Object} ReferenceProperties
 * @property {string} [referencedAssetId]
 * - For defining the referenced asset relationship. Priority: referencedAssetId > referencedAssetPath. One is REQUIRED.
 * @property {string} [referencedAssetPath]
 * - For defining the referenced asset relationship. Priority: referencedAssetId > referencedAssetPath. One is REQUIRED.
 * @property {EntityTypeString} referencedAssetType
 * - The type of the referenced asset. REQUIRED.
 */

/**
 * @typedef {ReferenceProperties &
 * FolderContainedAsset
 * } Reference
 */

//#endregion

//#region XsltFormatProperties DONE
/**
 * @typedef {Object} XsltFormatProperties
 * @property {string} xml - REQUIRED: The XML content of the xslt format.
 */

/**
 * @typedef {XsltFormatProperties &
 * FolderContainedAsset
 * } XsltFormat
 */

//#endregion

//#region ScriptFormatProperties DONE
/**
 * @typedef {Object} ScriptFormatProperties
 * @property {string} script - REQUIRED: The script content of the scriptFormat
 */

/**
 * @typedef {ScriptFormatProperties &
 * FolderContainedAsset
 * } ScriptFormat
 */

//#endregion

//#region TemplateProperties DONE
/**
 * @typedef {Object} TemplateProperties
 * @property {string} [targetId]
 * - NOT REQUIRED when template is inside of site
 * - REQUIRED when template is in the global area
 * - For defining the target relationship. Priority: targetId > targetPath
 * @property {string} [targetPath]
 * - NOT REQUIRED when template is inside of site
 * - REQUIRED when template is in the global area
 * @property {string} [formatId]
 * - NOT REQUIRED: Overall xslt format applied to this template. Defaults to none.
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing the selected asset's ID in case it gets restored from the recycle bin.
 * @property {string} [formatPath]
 * - NOT REQUIRED: Path works only for non-recycled assets.
 * @property {boolean} [formatRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {string} xml
 * - REQUIRED: The XHTML content of the template
 * @property {PageRegions[]} [pageRegions]
 * - NOT REQUIRED: The page regions and their block/xslt format assignments for this template. Defaults to all regions empty.
 */

/**
 * @typedef {TemplateProperties &
 * FolderContainedAsset
 * } Template
 */

//#endregion

//#region SymlinkProperties DONE
/**
 * @typedef {Object} SymlinkProperties - A symlink is not a UNIX symlink - it is simply an asset containing a hyperlink
 * @property {string} [linkURL] - NOT REQUIRED: The fully qualified URL of this link
 */

/**
 * @typedef {SymlinkProperties &
 * ExpiringAsset
 * } Symlink
 */

//#endregion

//#region UserProperties DONE
/**
 * @typedef {Object} UserProperties
 * @property {string} username
 * - REQUIRED: The username of the user.
 * @property {string} fullName
 * - REQUIRED: The full name of the user.
 * @property {string} email
 * - REQUIRED: The user's email.
 * @property {"normal" | "ldap" | "custom"} authType
 * - REQUIRED: The way the user is authenticated.
 * @property {string} password
 * - REQUIRED:
 *   - The password for this user.
 *   - When authType is custom, this is not used.
 * @property {boolean} [enabled]
 * - NOT REQUIRED: Whether or not this user is enabled. Default false.
 * @property {string} groups
 * - REQUIRED: A semi-colon separated list of groups this user is a member of.
 * @property {string} role
 * - REQUIRED: This user's roles.
 * @property {string} [defaultSiteId]
 * - NOT REQUIRED: Default Site for the user, defaultSiteId takes precedence if both fields are set.
 * @property {string} [defaultSiteName]
 * - NOT REQUIRED:
 * @property {string} [ldapDN]
 * - REQUIRED if authType is ldap; otherwise, NOT REQUIRED.
 */

/**
 * @typedef {UserProperties
 * } User
 */

//#endregion

//#region GroupProperties DONE
/**
 * @typedef {Object} GroupProperties
 * @property {string} groupName
 * - REQUIRED: The name of the group.
 * @property {string} [users]
 * - NOT REQUIRED:
 * - Semi-colon delimited list of all of the member users of this group.
 * @property {string} role
 * - REQUIRED:
 * - The Roles for this group.
 * - Note that this role will also apply to all the members, possibly adding roles for those users.
 */

/**
 * @typedef {GroupProperties
 * } Group
 */

//#endregion

//#region RoleProperties DONE
/**
 * @typedef {Object} RoleProperties
 * @property {"site" | "global"} roleType
 * - NOT REQUIRED: The type of the role.
 * @property {GlobalAbilities} [globalAbilities]
 * - ONE is REQUIRED:
 * - The global or site abilities for the role.
 * - Use the correct one depending on the type of the role.
 * @property {SiteAbilities} [siteAbilities]
 * - ONE is REQUIRED:
 * - The global or site abilities for the role.
 * - Use the correct one depending on the type of the role.
 */

/**
 * @typedef {RoleProperties &
 * NamedAsset
 * } Role
 */

//#endregion

//#region AssetFactoryProperties DONE
/**
 * @typedef {Object} AssetFactoryProperties
 * @property {string} [applicableGroups]
 * - NOT REQUIRED: Semicolon-delimited list of string group names for which this asset is available for use. Leave out to assign no groups.
 * @property {string} assetType
 * - REQUIRED: The type of asset this factory will create.
 * @property {string} [baseAssetId]
 * - NOT REQUIRED: The default/base asset for this factory.
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing the selected asset's ID in case it gets restored from the recycle bin.
 * @property {string} [baseAssetPath]
 * - NOT REQUIRED: Path works only for non-recycled assets.
 * @property {boolean} [baseAssetRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {string} [description]
 * - NOT REQUIRED: The description text for this factory which is displayed in the new menu. Defaults to null.
 * @property {string} [placementFolderId]
 * - NOT REQUIRED: Where assets created from this factory must be placed if specified.
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing the selected asset's ID in case it gets restored from the recycle bin.
 * @property {string} [placementFolderPath]
 * - NOT REQUIRED: Path works only for non-recycled assets.
 * @property {boolean} [placementFolderRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {boolean} [allowSubfolderPlacement]
 * - NOT REQUIRED: When the placement folder is specified, this allows assets to be placed in subfolders of that folder as well. Defaults to false.
 * @property {number} [folderPlacementPosition]
 * - NOT REQUIRED: Assets created from this factory will be positioned at this folder position. Defaults to 0.
 * @property {boolean} [overwrite]
 * - NOT REQUIRED: If an asset is created from this factory and placed in a folder with an asset of the same name, whether or not that asset will be overwritten. Defaults to false.
 * @property {"folder-controlled" | "factory-controlled" | "none"} workflowMode
 * - REQUIRED: What workflow behavior to use when creating assets using this asset factory.
 * @property {string} [workflowDefinitionId]
 * - NOT REQUIRED: When workflowMode is "factory-controlled", this specifies the workflow definition to use.
 * @property {string} [workflowDefinitionPath]
 * - NOT REQUIRED: Defaults to empty.
 * @property {AssetFactoryPlugins[]} [plugins]
 * - NOT REQUIRED: An array of asset factory plugins assigned to the asset factory. Defaults to empty.
 */

/**
 * @typedef {AssetFactoryProperties &
 * ContaineredAsset
 * } AssetFactory
 */

//#endregion

//#region AssetFactoryContainerProperties DONE
/**
 * @typedef {Object} AssetFactoryContainerProperties
 * @property {string} [applicableGroups]
 * - NOT REQUIRED: Semicolon-delimited list of string group names for which this asset is available for use.
 * @property {string} [description]
 * - NOT REQUIRED: String describing the asset factory container, displayed in the new menu.
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children.
 */

/**
 * @typedef {AssetFactoryContainerProperties &
 * ContaineredAsset
 * } AssetFactoryContainer
 */

//#endregion

//#region ContentTypeProperties DONE
/**
 * @typedef {Object} ContentTypeProperties
 * @property {string} [pageConfigurationSetId]
 * - One is REQUIRED: Priority: pageConfigurationSetId > pageConfigurationSetPath.
 * @property {string} [pageConfigurationSetPath]
 * - One is REQUIRED: Priority: pageConfigurationSetId > pageConfigurationSetPath.
 * @property {string} [metadataSetId]
 * - One is REQUIRED: Priority: metadataSetId > metadataSetPath.
 * @property {string} [metadataSetPath]
 * - One is REQUIRED: Priority: metadataSetId > metadataSetPath.
 * @property {string} [dataDefinitionId]
 * - NOT REQUIRED: Priority: dataDefinitionId > dataDefinitionPath.
 * @property {string} [dataDefinitionPath]
 * - NOT REQUIRED: Priority: dataDefinitionId > dataDefinitionPath.
 * @property {string} [editorConfigurationId]
 * - NOT REQUIRED: Priority: editorConfigurationId > editorConfigurationPath.
 * @property {string} [editorConfigurationPath]
 * - NOT REQUIRED: Priority: editorConfigurationId > editorConfigurationPath.
 * @property {string} [publishSetId]
 * - NOT REQUIRED: Priority: publishSetId > publishSetPath.
 * @property {string} [publishSetPath]
 * - NOT REQUIRED: Priority: publishSetId > publishSetPath.
 * @property {ContentTypePageConfigurations[]} [contentTypePageConfigurations]
 * - NOT REQUIRED: - if not specified, the default publish mode "all-destinations" is used for each pageConfiguration.
 * @property {InlineEditableFields[]} [inlineEditableFields]
 * - NOT REQUIRED: - if not specified, none of the regions or fields will be inline editable.
 */

/**
 * @typedef {ContentTypeProperties &
 * ContaineredAsset
 * } ContentType
 */

//#endregion

//#region ContentTypeContainerProperties DONE
/**
 * @typedef {Object} ContentTypeContainerProperties
 * @property {ContainerChildren[]} [children] - NOT REQUIRED: The array of children (identifiers)
 */

/**
 * @typedef {ContentTypeContainerProperties &
 * ContaineredAsset
 * } ContentTypeContainer
 */

//#endregion

//#region ConnectorContainerProperties DONE
/**
 * @typedef {Object} ConnectorContainerProperties
 * @property {ContainerChildren[]} [children] - NOT REQUIRED: The array of children (identifiers)
 */

/**
 * @typedef {ConnectorContainerProperties &
 * ContaineredAsset
 * } ConnectorContainer
 */

//#endregion

//#region FacebookConnectorProperties DONE
/**
 * @typedef {Object} FacebookConnectorProperties
 */

/**
 * @typedef {StatusUpdateConnector} FacebookConnector
 */

//#endregion

//#region WordPressConnectorProperties DONE
/**
 * @typedef {Object} WordPressConnectorProperties
 */

/**
 * @typedef {Connector} WordPressConnector
 */

//#endregion

//#region GoogleAnalyticsConnectorProperties DONE
/**
 * @typedef {Object} GoogleAnalyticsConnectorProperties
 */

/**
 * @typedef {Connector} GoogleAnalyticsConnector
 */

//#endregion

//#region PageConfigurationSetProperties DONE
/**
 * @typedef {Object} PageConfigurationSetProperties
 * @property {PageConfigurations[]} pageConfigurations
 * - REQUIRED: The individual page configurations contained within this set.
 */

/**
 * @typedef {PageConfigurationSetProperties &
 * ContaineredAsset
 * } PageConfigurationSet
 */

//#endregion

//#region PageConfigurationSetContainerProperties DONE
/**
 * @typedef {Object} PageConfigurationSetContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children assets.
 */

/**
 * @typedef {PageConfigurationSetContainerProperties &
 * ContaineredAsset
 * } PageConfigurationSetContainer
 */

//#endregion

//#region DataDefinitionProperties DONE
/**
 * @typedef {Object} DataDefinitionProperties
 * @property {string} xml
 * - REQUIRED: The XML content of this data definition.
 */

/**
 * @typedef {DataDefinitionProperties &
 * ContaineredAsset
 * } DataDefinition
 */

//#endregion

//#region DataDefinitionContainerProperties DONE
/**
 * @typedef {Object} DataDefinitionContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children.
 */

/**
 * @typedef {DataDefinitionContainerProperties &
 * ContaineredAsset
 * } DataDefinitionContainer
 */

//#endregion

//#region SharedFieldProperties DONE
/**
 * @typedef {Object} SharedFieldProperties
 * @property {string} xml
 * - REQUIRED: The XML content of this shared field.
 */

/**
 * @typedef {SharedFieldProperties &
 * ContaineredAsset
 * } SharedField
 */

//#endregion

//#region SharedFieldContainerProperties DONE
/**
 * @typedef {Object} SharedFieldContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children.
 */

/**
 * @typedef {SharedFieldContainerProperties &
 * ContaineredAsset
 * } SharedFieldContainer
 */

//#endregion

//#region MetadataSetProperties DONE
/**
 * @typedef {Object} MetadataSetProperties
 * @property {boolean} [authorFieldRequired=false] - NOT REQUIRED: Whether the author field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [authorFieldVisibility='visible'] - NOT REQUIRED: The visibility of the author field for assets using this metadata set. Default is 'visible'.
 * @property {string} [authorFieldHelpText] - NOT REQUIRED: The help text for the author field.
 * @property {boolean} [descriptionFieldRequired=false] - NOT REQUIRED: Whether the description field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [descriptionFieldVisibility='visible'] - NOT REQUIRED: The visibility of the description field for assets using this metadata set. Default is 'visible'.
 * @property {string} [descriptionFieldHelpText] - NOT REQUIRED: The help text for the description field.
 * @property {boolean} [displayNameFieldRequired=false] - NOT REQUIRED: Whether the display name field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [displayNameFieldVisibility='visible'] - NOT REQUIRED: The visibility of the display name field for assets using this metadata set. Default is 'visible'.
 * @property {string} [displayNameFieldHelpText] - NOT REQUIRED: The help text for the display name field.
 * @property {boolean} [endDateFieldRequired=false] - NOT REQUIRED: Whether the end date field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [endDateFieldVisibility='visible'] - NOT REQUIRED: The visibility of the end date field for assets using this metadata set. Default is 'visible'.
 * @property {string} [endDateFieldHelpText] - NOT REQUIRED: The help text for the end date field.
 * @property {boolean} [expirationFolderFieldRequired=false] - NOT REQUIRED: Whether the expiration folder field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [expirationFolderFieldVisibility='visible'] - NOT REQUIRED: The visibility of the expiration folder field for assets using this metadata set. Default is 'visible'.
 * @property {string} [expirationFolderFieldHelpText] - NOT REQUIRED: The help text for the expiration folder field.
 * @property {boolean} [keywordsFieldRequired=false] - NOT REQUIRED: Whether the keywords field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [keywordsFieldVisibility='visible'] - NOT REQUIRED: The visibility of the keywords field for assets using this metadata set. Default is 'visible'.
 * @property {string} [keywordsFieldHelpText] - NOT REQUIRED: The help text for the keywords field.
 * @property {boolean} [reviewDateFieldRequired=false] - NOT REQUIRED: Whether the review date field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [reviewDateFieldVisibility='visible'] - NOT REQUIRED: The visibility of the review date field for assets using this metadata set. Default is 'visible'.
 * @property {string} [reviewDateFieldHelpText] - NOT REQUIRED: The help text for the review date field.
 * @property {boolean} [startDateFieldRequired=false] - NOT REQUIRED: Whether the start date field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [startDateFieldVisibility='visible'] - NOT REQUIRED: The visibility of the start date field for assets using this metadata set. Default is 'visible'.
 * @property {string} [startDateFieldHelpText] - NOT REQUIRED: The help text for the start date field.
 * @property {boolean} [summaryFieldRequired=false] - NOT REQUIRED: Whether the summary field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [summaryFieldVisibility='visible'] - NOT REQUIRED: The visibility of the summary field for assets using this metadata set. Default is 'visible'.
 * @property {string} [summaryFieldHelpText] - NOT REQUIRED: The help text for the summary field.
 * @property {boolean} [teaserFieldRequired=false] - NOT REQUIRED: Whether the teaser field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [teaserFieldVisibility='visible'] - NOT REQUIRED: The visibility of the teaser field for assets using this metadata set. Default is 'visible'.
 * @property {string} [teaserFieldHelpText] - NOT REQUIRED: The help text for the teaser field.
 * @property {boolean} [titleFieldRequired=false] - NOT REQUIRED: Whether the title field is required on assets using this metadata set. Default is false.
 * @property {MetadataFieldVisibility} [titleFieldVisibility='visible'] - NOT REQUIRED: The visibility of the title field for assets using this metadata set. Default is 'visible'.
 * @property {string} [titleFieldHelpText] - NOT REQUIRED: The help text for the title field.
 * @property {DynamicMetadataFieldDefinitions[]} [dynamicMetadataFieldDefinitions] - NOT REQUIRED: The dynamic metadata field definitions.
 */

/**
 * @typedef {MetadataSetProperties &
 * ContaineredAsset
 * } MetadataSet
 */

//#endregion

//#region MetadataSetContainerProperties DONE
/**
 * @typedef {Object} MetadataSetContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children.
 */

/**
 * @typedef {MetadataSetContainerProperties &
 * ContaineredAsset
 * } MetadataSetContainer
 */

//#endregion

//#region PublishSetProperties DONE
/**
 * @typedef {Object} PublishSetProperties
 * @property {PublishableAssetList[]} [files] - NOT REQUIRED: A list of files that is included in this publish set. Default is empty.
 * @property {PublishableAssetList[]} [folders] - NOT REQUIRED: A list of folders that is included in this publish set. Default is empty.
 * @property {PublishableAssetList[]} [pages] - NOT REQUIRED: A list of pages that is included in this publish set. Default is empty.
 * @property {boolean} [usesScheduledPublishing] - NOT REQUIRED: Whether or not to publish this set on a schedule. Default is false.
 * @property {ScheduledDestinationMode} [scheduledPublishDestinationMode] - NOT REQUIRED: Scheduled publish destination selection mode.
 * @property {DestinationList[]} [scheduledPublishDestinations] - NOT REQUIRED: Used in conjunction with scheduledPublishDestinationMode when destinations are to be specified explicitly.
 * @property {string} [timeToPublish] - NOT REQUIRED: The base time this set will be published. Default is 00:00 (midnight).
 * @property {number} [publishIntervalHours] - NOT REQUIRED: Every how many hours the asset should be published. Can be between 1 and 23.
 * @property {DaysOfWeek[]} [publishDaysOfWeek] - NOT REQUIRED: Which days of the week the job should publish on.
 * @property {string} [cronExpression] - NOT REQUIRED: Cron expression for scheduled publishing.
 * @property {string} [sendReportToUsers] - NOT REQUIRED: Semicolon-delimited list of string user names for which this asset is available for use.
 * @property {string} [sendReportToGroups] - NOT REQUIRED: Semicolon-delimited list of string group names for which this asset is available for use.
 * @property {boolean} [sendReportOnErrorOnly] - NOT REQUIRED: Whether or not to send a report when there are no errors. Default is false.
 */

/**
 * @typedef {PublishSetProperties &
 * ContaineredAsset
 * } PublishSet
 */

//#endregion

//#region PublishSetContainerProperties
/**
 * @typedef {Object} PublishSetContainerProperties
 */

/**
 * @typedef {ContaineredAsset} PublishSetContainer
 */

//#endregion

//#region TargetProperties DONE
/**
 * @typedef {Object} TargetProperties
 * @property {string} [parentTargetId]
 * - Priority: parentTargetId > parentTargetPath
 * - One is REQUIRED
 * @property {string} [parentTargetPath]
 * - Priority: parentTargetId > parentTargetPath
 * - One is REQUIRED
 * @property {string} [path]
 * - The path of this target. When creating this need not be specified. When editing this will be the CURRENT path of the target.
 * @property {string} [baseFolderId]
 * - Priority: baseFolderId > baseFolderPath
 * - One is REQUIRED
 * @property {string} [baseFolderPath]
 * - Priority: baseFolderId > baseFolderPath
 * - One is REQUIRED
 * @property {string} outputExtension
 * - REQUIRED: The output file extension, for example ".html"
 * @property {string} [cssClasses]
 * - The CSS classes that pages using this target will have available to them in the WYSIWYG editor (comma-delimted list)
 * - NOT REQUIRED default: empty
 * @property {string} [cssFileId]
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
 * - Priority: cssFileId > cssFilePath
 * @property {string} [cssFilePath]
 * - Path works only for non-recycled assets
 * @property {boolean} [cssFileRecycled]
 * - For reading purposes only. Ignored when editing, copying etc.
 * @property {SerializationType} serializationType
 * - REQUIRED: The content type this target serializes its output as
 * @property {boolean} [includeXMLDeclaration]
 * - When the serializationType is "XML", should Cascade include the XML declaration in published files?
 * - NOT REQUIRED default: false
 * @property {boolean} [includeTargetPath]
 * - When publishing, whether or not to include the target path as part of the path of the published file
 * - NOT REQUIRED default: false
 * @property {boolean} [removeBaseFolder]
 * - When publishing, whether or not to remove the base folder's path from the path of the published file
 * - NOT REQUIRED default: false
 * @property {boolean} [usesScheduledPublishing]
 * - Whether or not to publish this set on a schedule
 * - NOT REQUIRED default: false
 * @property {string} [scheduledPublishDestinationMode]
 * - Scheduled publish destination selection mode
 * - NOT REQUIRED
 * @property {DestinationList[]} [scheduledPublishDestinations]
 * - Used in conjunction with scheduledPublishDestinationMode when destinations are to be specified explicitly
 * - NOT REQUIRED
 * @property {string} [timeToPublish]
 * - The base time this set will be published. For example if one wanted this set to publish at 0100, 0500, 0900, 1300, 1700, 2100, I would enter one of those times here and set the "publishInterval" to 4, and the "publishIntervalUnits" to "hours"
 * - NOT REQUIRED default: 00:00 (midnight), if cronExpression provided or usesScheduledPublishing is false, ignored
 * @property {number} [publishIntervalHours]
 * - Every how many hours the asset should be published. Can be between 1 and 23
 * - One of the following 3 is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
 * @property {DaysOfWeek[]} [publishDaysOfWeek]
 * - Which days of the week the job should publish on - select all days to have a daily publish
 * - One of the following 3 is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
 * @property {string} [cronExpression]
 * - Applicable only if publishInterval Units is "cron" - only a valid Cron Expression will be accepted
 * - One of the following 3 is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
 * @property {string} [sendReportToUsers]
 * - Semicolon-delimited list of string user names for which this asset is available for use
 * - NOT REQUIRED leave out to assign no users
 * @property {string} [sendReportToGroups]
 * - Semicolon-delimited list of string group names for which this asset is available for use
 * - NOT REQUIRED leave out to assign no groups
 * @property {boolean} [sendReportOnErrorOnly]
 * - Whether or not to send a report when there are no errors
 * - NOT REQUIRED default: false
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children
 */

/**
 * @typedef {TargetProperties &
 * NamedAsset
 * } Target
 */

//#endregion

//#region SiteDestinationContainerProperties DONE
/**
 * @typedef {Object} SiteDestinationContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children assets.
 */

/**
 * @typedef {SiteDestinationContainerProperties &
 * ContaineredAsset
 * } SiteDestinationContainer
 */

//#endregion

//#region DestinationProperties DONE
/**
 * @typedef {Object} DestinationProperties
 * @property {string} [parentContainerId]
 * - Priority: parentContainerId > parentContainerPath
 * - One is REQUIRED
 * - When inside a Site, this field must refer to a SiteDestinationContainer.
 * - When not in a Site, this field must refer to a Target
 * @property {string} [parentContainerPath]
 * - Priority: parentContainerId > parentContainerPath
 * - One is REQUIRED
 * - When inside a Site, this field must refer to a SiteDestinationContainer.
 * - When not in a Site, this field must refer to a Target
 * @property {string} [transportId]
 * - Priority: transportId > transportPath
 * - One is REQUIRED
 * @property {string} [transportPath]
 * - Priority: transportId > transportPath
 * - One is REQUIRED
 * @property {string} [applicableGroups]
 * - Semicolon-delimited list of string group names
 * - NOT REQUIRED
 * @property {string} [directory]
 * - The directory to place the published files in
 * - NOT REQUIRED
 * @property {boolean} [enabled]
 * - Whether or not this destination is enabled for publishing
 * - NOT REQUIRED
 * @property {boolean} [checkedByDefault]
 * - Whether or not this destination is checked by default
 * - NOT REQUIRED
 * @property {boolean} [publishASCII]
 * - Whether or not to only publish ASCII characters
 * - NOT REQUIRED
 * @property {boolean} [usesScheduledPublishing]
 * - Whether or not to publish this set on a schedule
 * - NOT REQUIRED
 * @property {ScheduledDestinationMode} [scheduledPublishDestinationMode]
 * - Not used, will be ignored if any value is set
 * @property {DestinationList[]} [scheduledPublishDestinations]
 * - Not used, will be ignored if any value is set
 * @property {string} [timeToPublish]
 * - The base time this set will be published.
 * For example if one wanted this set to publish at 0100, 0500, 0900, 1300, 1700, 2100, I would enter
 * one of those times here and set the "publishInterval" to 4, and the
 * "publishIntervalUnits" to "hours"
 * - NOT REQUIRED default: 00:00 (midnight), if cronExpression provided or usesScheduledPublishing is false, ignored
 * @property {number} [publishIntervalHours]
 * - Every how many hours the asset should be published. Can be between 1 and 23
 * - One is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
 * @property {DaysOfWeek[]} [publishDaysOfWeek]
 * - Which days of the week the job should publish on
 * - One is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
 * @property {string} [cronExpression]
 * - Applicable only if publishInterval Units is "cron"
 * - One is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
 * @property {string} [sendReportToUsers]
 * - Semicolon-delimited list of string user names
 * - NOT REQUIRED
 * @property {string} [sendReportToGroups]
 * - Semicolon-delimited list of string group names
 * - NOT REQUIRED
 * @property {boolean} [sendReportOnErrorOnly]
 * - Whether or not to send a report when there are no errors
 * - NOT REQUIRED
 * @property {string} [webUrl]
 * - The base URL for linking to a given configuration during publishing
 * - NOT REQUIRED
 * @property {string} [extensionsToStrip]
 * - Comma-separated list of extensions to strip from links
 * - NOT REQUIRED
 * @property {string} [siteId]
 * - Priority: siteId > siteName
 * - One is REQUIRED
 * @property {string} [siteName]
 * - Priority: siteId > siteName
 * - One is REQUIRED
 */

/**
 * @typedef {DestinationProperties &
 * NamedAsset
 * } Destination
 */

//#endregion

//#region FileSystemTransportProperties DONE
/**
 * @typedef {Object} FileSystemTransportProperties
 * @property {string} directory
 * - REQUIRED
 * - The directory to output the files to, for example "c:\inetfiles\wwwroot"
 */

/**
 * @typedef {FileSystemTransportProperties &
 * ContaineredAsset
 * } FileSystemTransport
 */

//#endregion

//#region FtpTransportProperties DONE
/**
 * @typedef {Object} FtpTransportProperties
 * @property {string} hostName
 * - REQUIRED
 * - The host name or IP address of the remote server
 * @property {number} port
 * - REQUIRED
 * - The port to use to connect to the server
 * @property {boolean} [doPASV]
 * - NOT REQUIRED: default: false
 * - Whether or not to connect using PASV mode FTP
 * @property {string} username
 * - REQUIRED
 * - The username to use when connecting to the server
 * @property {AuthMode} [authMode]
 * - REQUIRED when ftpProtocolType is SFTP
 * - The authentication mode to use when connecting to the server. Applicable only when ftpProtocolType is SFTP
 * @property {string} [privateKey]
 * - NOT REQUIRED: default: empty
 * - The key to use when connecting to the server. Applicable only when ftpProtocolType is SFTP and authMode is "PUBLIC_KEY"
 * @property {string} [password]
 * - REQUIRED when ftpProtocolType is FTP or FTPS or when ftpProtocolType is SFTP and authMode is "PASSWORD"
 * - The password to use when connecting to the server
 * @property {string} [directory]
 * - NOT REQUIRED: default: empty
 * - The directory to place the files in
 * @property {FtpProtocolType} ftpProtocolType
 * - REQUIRED: default: ftp
 * - Whether or not to connect using regular FTP, FTP over SSL/TLS, or SFTP using secure FTP (SSH protocol)
 */

/**
 * @typedef {FtpTransportProperties &
 * ContaineredAsset
 * } FtpTransport
 */

//#endregion

//#region DatabaseTransportProperties DONE
/**
 * @typedef {Object} DatabaseTransportProperties
 * @property {number} transportSiteId
 * - REQUIRED
 * - The site id
 * @property {string} serverName
 * - REQUIRED
 * - The name of the database server
 * @property {number} serverPort
 * - REQUIRED
 * - The port on which the database server is working
 * @property {string} databaseName
 * - REQUIRED
 * - The name of the database itself
 * @property {string} username
 * - REQUIRED
 * - The username to use when connecting to the server
 * @property {string} [password]
 * - NOT REQUIRED: default: empty string
 * - The password to use when connecting to the server
 */

/**
 * @typedef {DatabaseTransportProperties &
 * ContaineredAsset
 * } DatabaseTransport
 */

//#endregion

//#region CloudTransportProperties DONE
/**
 * @typedef {Object} CloudTransportProperties
 * @property {string} key
 * - REQUIRED
 * - The S3 key
 * @property {string} secret
 * - REQUIRED
 * - The S3 secret
 * @property {string} bucketName
 * - REQUIRED
 * - The name of the S3 bucket
 * @property {string} [basePath]
 * - NOT REQUIRED: default: empty
 * - The directory to place the files in
 */

/**
 * @typedef {CloudTransportProperties &
 * ContaineredAsset
 * } CloudTransport
 */

//#endregion

//#region TransportContainerProperties DONE
/**
 * @typedef {Object} TransportContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children assets.
 */

/**
 * @typedef {TransportContainerProperties &
 * ContaineredAsset
 * } TransportContainer
 */

//#endregion

//#region WorkflowDefinitionProperties DONE
/**
 * @typedef {Object} WorkflowDefinitionProperties
 * @property {string} [applicableGroups]
 * - NOT REQUIRED: leave out to assign no groups
 * - Semicolon-delimited list of string group names for which this asset is available for use
 * @property {boolean} [copy]
 * - NOT REQUIRED: default: false
 * - Whether or not this is a copy type workflow
 * @property {boolean} [create]
 * - NOT REQUIRED: default: false
 * - Whether or not this is a create type workflow
 * @property {boolean} [delete]
 * - NOT REQUIRED: default: false
 * - Whether or not this is a delete type workflow
 * @property {boolean} [edit]
 * - NOT REQUIRED: default: false
 * - Whether or not this is an edit type workflow
 * @property {boolean} [move]
 * - NOT REQUIRED: default: false
 * - Whether or not this is a move type workflow
 * @property {WorkflowNamingBehavior} namingBehavior
 * - REQUIRED
 * - The naming behavior when an instance of this workflow is created
 * @property {string} xml
 * - REQUIRED
 * - The actual workflow definition XML
 * @property {string} [completedWorkflowEmailId]
 * - NOT REQUIRED
 * - Custom workflow email to send when email trigger set to completed
 * @property {string} [completedWorkflowEmailPath]
 * - NOT REQUIRED
 * @property {string} [notificationWorkflowEmailId]
 * - NOT REQUIRED
 * - Custom workflow email to send when email trigger set to notify
 * @property {string} [notificationWorkflowEmailPath]
 * - NOT REQUIRED
 */

/**
 * @typedef {WorkflowDefinitionProperties &
 * ContaineredAsset
 * } WorkflowDefinition
 */

//#endregion

//#region WorkflowDefinitionContainerProperties DONE
/**
 * @typedef {Object} WorkflowDefinitionContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children assets.
 */

/**
 * @typedef {WorkflowDefinitionContainerProperties &
 * ContaineredAsset
 * } WorkflowDefinitionContainer
 */

//#endregion

//#region WorkflowEmailProperties DONE
/**
 * @typedef {Object} WorkflowEmailProperties
 * @property {string} subject
 * - REQUIRED
 * - The subject of this email
 * @property {string} body
 * - REQUIRED
 * - The body of this email
 */

/**
 * @typedef {WorkflowEmailProperties &
 * ContaineredAsset
 * } WorkflowEmail
 */

//#endregion

//#region WorkflowEmailContainerProperties DONE
/**
 * @typedef {Object} WorkflowEmailContainerProperties
 * @property {ContainerChildren[]} [children]
 * - NOT REQUIRED: The array of children assets.
 */

/**
 * @typedef {WorkflowEmailContainerProperties &
 * ContaineredAsset
 * } WorkflowEmailContainer
 */

//#endregion

//#region SiteProperties DONE
/**
 * @typedef SiteProperties
 * @property {string} url
 * - REQUIRED: The site URL
 * @property {string} [extensionsToStrip]
 * - NOT REQUIRED: A comma-separated list of extensions that should be stripped from cross-site links pointing to assets in this site. Default: empty
 * @property {string} [defaultMetadataSetId]
 * - NOT REQUIRED: The default metadata set for the site by ID.
 * - Priority: defaultMetadataSetId > defaultMetadataSetPath
 * @property {string} [defaultMetadataSetPath]
 * - NOT REQUIRED: The default metadata set for the site by path.
 * - Priority: defaultMetadataSetId > defaultMetadataSetPath
 * @property {string} [siteAssetFactoryContainerId]
 * - NOT REQUIRED: Defines the site asset factory container relationship by ID.
 * - Priority: siteAssetFactoryContainerId > siteAssetFactoryContainerPath
 * - This asset factory container will determine which asset factories
 * show on that user's dashboard under the "My New Content Wizards" section in the site.
 * @property {string} [siteAssetFactoryContainerPath]
 * - NOT REQUIRED: Defines the site asset factory container relationship by path.
 * - Priority: siteAssetFactoryContainerId > siteAssetFactoryContainerPath
 * - This asset factory container will determine which asset factories
 * show on that user's dashboard under the "My New Content Wizards" section in the site.
 * @property {string} [defaultEditorConfigurationId]
 * - NOT REQUIRED: Default editor configuration by ID. Priority: defaultEditorConfigurationId > defaultEditorConfigurationPath
 * @property {string} [defaultEditorConfigurationPath]
 * - NOT REQUIRED: Default editor configuration by path.
 * @property {string} [siteStartingPageId]
 * - NOT REQUIRED: Defines the site starting page relationship by ID. Overrides the global starting page.
 * - Priority: siteStartingPageId > siteStartingPagePath
 * - This starting page will override the global starting page set in the system preferences
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
 * in case if the selected asset gets restored from the recycle bin.
 * @property {string} [siteStartingPagePath]
 * - NOT REQUIRED: Defines the site starting page relationship by path. Overrides the global starting page. Only for non-recycled assets.
 * - Priority: siteStartingPageId > siteStartingPagePath
 * - This starting page will override the global starting page set in the system preferences
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
 * in case if the selected asset gets restored from the recycle bin.
 * @property {boolean} [siteStartingPageRecycled]
 * - NOT REQUIRED: For reading purposes only. Indicates if the site starting page is recycled.
 * @property {RoleAssignments[]} [roleAssignments]
 * - NOT REQUIRED: Role assignments for the site.
 * @property {boolean} [usesScheduledPublishing]
 * - NOT REQUIRED: Whether or not to publish this set on a schedule. Default: false
 * @property {ScheduledDestinationMode} [scheduledPublishDestinationMode]
 * - NOT REQUIRED: Scheduled publish destination selection mode.
 * @property {DestinationList[]} [scheduledPublishDestinations]
 * - NOT REQUIRED: Destinations to be explicitly specified for scheduled publish.
 * - Used in conjunction with scheduledPublishDestinationMode when destinations are to be specified explicitly
 * @property {string} [timeToPublish]
 * - NOT REQUIRED: The base time this set will be published. default: 00:00 (midnight), if cronExpression provided or usesScheduledPublishing is false, ignored
 * - The base time this set will be published. For example if one wanted
 * this set to publish at 0100, 0500, 0900, 1300, 1700, 2100, I would enter
 * one of those times here and set the "publishInterval" to 4, and the
 * "publishIntervalUnits" to "hours"
 * @property {number} [publishIntervalHours]
 * - Optional: Interval in hours for publishing. One of the choices for scheduled publishing.
 * - Every how many hours the asset should be published. Can be between 1 and 23
 * @property {DaysOfWeek[]} [publishDaysOfWeek]
 * - Optional: Days of the week for publishing. One of the choices for scheduled publishing.
 * - Which days of the which the job should publish on - select all days to have a daily publish
 * @property {string} [cronExpression]
 * - Optional: Cron expression for scheduled publishing. One of the choices for scheduled publishing.
 * - Applicable only if publishInterval Units is "cron" - only a valid Cron Expression will be accepted
 * @property {string} [sendReportToUsers]
 * - NOT REQUIRED: Semicolon-delimited list of user names for which this asset is available.
 * @property {string} [sendReportToGroups]
 * - NOT REQUIRED: Semicolon-delimited list of group names for which this asset is available.
 * @property {boolean} [sendReportOnErrorOnly]
 * - NOT REQUIRED: Whether to send a report only when there are errors. Default: false
 * @property {RecycleBinExpiration} recycleBinExpiration
 * - REQUIRED: The recycle bin expiration time.
 * @property {boolean} unpublishOnExpiration
 * - REQUIRED: Unpublish assets when moved to expiration folder.
 * @property {boolean} linkCheckerEnabled
 * - REQUIRED: Generate broken link report on schedule.
 * @property {boolean} externalLinkCheckOnPublish
 * - REQUIRED: Check external links when publishing assets.
 * @property {boolean} inheritDataChecksEnabled
 * - REQUIRED
 * @property {boolean} spellCheckEnabled
 * - REQUIRED
 * @property {boolean} linkCheckEnabled
 * - REQUIRED
 * @property {boolean} accessibilityCheckEnabled
 * - REQUIRED
 * @property {boolean} inheritNamingRules
 * - REQUIRED: Determines whether naming rules are inherited from the system preferences.
 * - If true, the rule properties will be ignored when saving, but old values are preserved.
 * Otherwise, null values will be defaulted to appropriate values when saving.
 * Naming rules read from a site may be null.
 * @property {NamingRuleCase} [namingRuleCase]
 * - Optional: Defines what case a name can be. Depends on inheritNamingRules.
 * @property {NamingRuleSpacing} [namingRuleSpacing]
 * - Optional: Defines how spaces are handled for names. Depends on inheritNamingRules.
 * @property {NamingRuleAssets[]} [namingRuleAssets]
 * - Optional: Defines the asset types that enforce naming rules. Depends on inheritNamingRules.
 * @property {boolean} accessibilityCheckerEnabled
 * - REQUIRED: Generate accessibility report on schedule.
 * @property {boolean} [siteImproveIntegrationEnabled]
 * - NOT REQUIRED: Enables Siteimprove integration.
 * @property {string} [siteImproveUrl]
 * - NOT REQUIRED: Alternative URL for Siteimprove.
 * @property {boolean} [widenDamIntegrationEnabled]
 * - NOT REQUIRED: Enables Widen Collective DAM integration.
 * @property {string} [widenDamIntegrationCategory]
 * - NOT REQUIRED: Widen Collective category for search results.
 * @property {boolean} [webdamDamIntegrationEnabled]
 * - NOT REQUIRED: Enables Webdam DAM integration.
 * @property {string} [rootFolderId]
 * - NOT REQUIRED: The root folder id, used only when reading a site. Ignored in other cases.
 * @property {string} [rootAssetFactoryContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootPageConfigurationSetContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootContentTypeContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootConnectorContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootDataDefinitionContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootSharedFieldContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootMetadataSetContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootPublishSetContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootSiteDestinationContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootTransportContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootWorkflowDefinitionContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {string} [rootWorkflowEmailContainerId]
 * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
 * @property {LinkRewriting} [linkRewriting]
 * - NOT REQUIRED: Default is "absolute".
 */

/**
 * @typedef {SiteProperties &
 * NamedAsset
 * } Site
 */

//#endregion

//#region EditorConfigurationProperties DONE
/**
 * @typedef {Object} EditorConfigurationProperties
 * @property {string} [siteId]
 * - NOT REQUIRED: when referencing the System Default Editor Configuration (id=DEFAULT, name=Default)
 * - One is REQUIRED for all other Editor Configurations
 * @property {string} [siteName]
 * - NOT REQUIRED: when referencing the System Default Editor Configuration (id=DEFAULT, name=Default)
 * - One is REQUIRED for all other Editor Configurations
 * @property {string} [cssFileId]
 * - NOT REQUIRED:
 * - Priority: cssFileId > cssFilePath
 * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
 *   in case if the selected asset gets restored from the recycle bin.
 * @property {string} [cssFilePath]
 * - NOT REQUIRED:
 * - Priority: cssFileId > cssFilePath
 * - Path works only for non-recycled assets
 * @property {boolean} [cssFileRecycled]
 * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
 * @property {string} configuration
 * - JSON String for the configuration
 */

/**
 * @typedef {EditorConfigurationProperties &
 * NamedAsset
 * } EditorConfiguration
 */

//#endregion

//#region AssetProperties
/**
 * @typedef {Object} AssetProperties
 * @property {WorkflowConfiguration} [workflowConfiguration]
 * @property {FeedBlock} [feedBlock] - One is REQUIRED
 * @property {IndexBlock} [indexBlock] - One is REQUIRED
 * @property {TextBlock} [textBlock] - One is REQUIRED
 * @property {XhtmlDataDefinitionBlock} [xhtmlDataDefinitionBlock] - One is REQUIRED
 * @property {XmlBlock} [xmlBlock] - One is REQUIRED
 * @property {File} [file] - One is REQUIRED
 * @property {Folder} [folder] - One is REQUIRED
 * @property {Page} [page] - ONE IS REQUIRED
 * @property {Reference} [reference] - One is REQUIRED
 * @property {XsltFormat} [xsltFormat] - One is REQUIRED
 * @property {ScriptFormat} [scriptFormat] - One is REQUIRED
 * @property {Symlink} [symlink] - One is REQUIRED
 * @property {Template} [template] - One is REQUIRED
 * @property {User} [user] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {Group} [group] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {Role} [role] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {AssetFactory} [assetFactory] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {AssetFactoryContainer} [assetFactoryContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {ContentType} [contentType] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {ContentTypeContainer} [contentTypeContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {ConnectorContainer} [connectorContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {FacebookConnector} [facebookConnector] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {WordPressConnector} [wordPressConnector] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {GoogleAnalyticsConnector} [googleAnalyticsConnector] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {PageConfigurationSet} [pageConfigurationSet] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {PageConfigurationSetContainer} [pageConfigurationSetContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {DataDefinition} [dataDefinition] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {DataDefinitionContainer} [dataDefinitionContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {SharedField} [sharedField] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {SharedFieldContainer} [sharedFieldContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {MetadataSet} [metadataSet] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {MetadataSetContainer} [metadataSetContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {PublishSet} [publishSet] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {PublishSetContainer} [publishSetContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {Target} [target] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {SiteDestinationContainer} [siteDestinationContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {Destination} [destination] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {FileSystemTransport} [fileSystemTransport] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {FtpTransport} [ftpTransport] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {DatabaseTransport} [databaseTransport] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {CloudTransport} [cloudTransport] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {TransportContainer} [transportContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {WorkflowDefinition} [workflowDefinition] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {WorkflowDefinitionContainer} [workflowDefinitionContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {WorkflowEmail} [workflowEmail] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {WorkflowEmailContainer} [workflowEmailContainer] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {TwitterFeedBlock} [twitterFeedBlock] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {Site} [site] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 * @property {EditorConfiguration} [editorConfiguration] - One is REQUIRED
 * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
 */
/**
 * @typedef {Object} Asset
 * @property {AssetProperties} asset - REQUIRED: Asset object container
 * - Asset is an aggregate type that includes all possible Cascade Server assets bundled with workflow configuration. When a user does not have the privileges to bypass workflow, this configuration is used to configure the step assignments of the workflow
 */

//#endregion

//#endregion

// ─── Read Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ReadRequest
 * @property {Identifier} identifier - REQUIRED: Parameters used when reading an asset
 */
//#endregion

// ─── Read Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Asset} ReadResponseProperties
 */
/**
 * @typedef {OperationResult & ReadResponseProperties} ReadResponse
 */
//#endregion

// ─── Remove Request ──────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} DeleteParametersProperties
 * @property {boolean} doWorkflow
 */

/**
 * @typedef {UnpublishParameters & DeleteParametersProperties} DeleteParameters
 * - Parameters used when deleting an asset
 */

/**
 * @typedef {Object} RemoveRequest
 * @property {Identifier} identifier - REQUIRED: Parameters used when reading an asset
 * @property {WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
 * @property {DeleteParameters} [deleteParameters] - NOT REQUIRED: Parameters used when deleting an asset
 */
//#endregion

// ─── Remove Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} RemoveResponse
 */
//#endregion

// ─── Edit Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Asset} EditRequest
 */
//#endregion

// ─── Edit Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} EditResponse
 */
//#endregion

// ─── Create Request ──────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Asset} CreateRequest
 */
//#endregion

// ─── Create Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} CreateResponseProperties
 * @property {string} createdAssetId - The id of the asset created
 */
/**
 * @typedef {OperationResult & CreateResponseProperties} CreateResponse
 */
//#endregion

// ─── Move Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} MoveParametersProperties
 * @property {Identifier} [destinationContainerIdentifier]
 * - NOT REQUIRED: The container into which the asset will be moved. If left empty, the asset will remain in its current container.
 * @property {boolean} doWorkflow
 * - Determines if a workflow should be executed.
 * @property {string} [newName]
 * - NOT REQUIRED: Name to give the asset. If left empty, the asset's name will not be changed.
 */

/**
 * @typedef {UnpublishParameters & MoveParametersProperties} MoveParameters
 */

/**
 * @typedef {Object} MoveRequest
 * @property {Identifier} identifier - REQUIRED: Parameters used when reading an asset
 * @property {WorkflowConfiguration} [workflowConfiguration] - NOT REQUIRED: For configuring workflow
 * @property {MoveParameters} moveParameters
 */
//#endregion

// ─── Move Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} MoveResponse
 */
//#endregion

// ─── Search Request ──────────────────────────────────────────────────────────
//#region
/**
 * @typedef {"name" | "path" | "createdBy" | "modifiedBy" | "displayName" | "title" | "summary" | "teaser" | "keywords" | "description" | "author" | "blob" | "velocityFormatContent" | "xml" | "link"} SearchFieldString
 * - Asset fields to search (e.g. name, title, content), see searchField simpleType for valid values
 */

/**
 * @typedef {SearchFieldString} SearchFields
 */

/**
 * @typedef {EntityTypeString} SearchTypes
 */

/**
 * @typedef {Object} SearchInformation
 * @property {string} searchTerms
 * - The search terms to use for the search query.
 * @property {string} [siteId]
 * - NOT REQUIRED: Id of the site to search. If left blank, all sites will be searched.
 * @property {string} [siteName]
 * - NOT REQUIRED: Name of the site to search. If left blank, all sites will be searched.
 * @property {SearchFields[]} [searchFields]
 * - NOT REQUIRED: Asset fields to search (e.g. name, title, content).
 * @property {SearchTypes[]} [searchTypes]
 * - NOT REQUIRED: Asset types to search (e.g. page, folder, site). If left blank, all asset types will be searched.
 */

/**
 * @typedef {Object} SearchRequest
 * @property {SearchInformation} searchInformation
 */
//#endregion

// ─── Search Response ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Identifier} SearchMatches
 */

/**
 * @typedef {Object} SearchResult
 * @property {SearchMatches[]} matches
 * - The resulting found asset identifiers
 */

/**
 * @typedef {OperationResult & SearchResult} SearchResponse
 */
//#endregion

// ─── Copy Request ────────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} CopyParameters
 * @property {Identifier} destinationContainerIdentifier
 * - The identifier for the destination container where the asset will be copied to.
 * @property {boolean} doWorkflow
 * - Indicates whether a workflow should be initiated after the copy operation.
 * @property {string} newName
 * - The new name for the copied asset.
 */

/**
 * @typedef {Object} CopyRequest
 * @property {Identifier} identifier
 * - The identifier of the asset to be copied.
 * @property {CopyParameters} copyParameters
 * - The parameters specifying how the asset should be copied.
 * @property {WorkflowConfiguration} [workflowConfiguration]
 * - NOT REQUIRED: The configuration for any workflow that needs to be applied after the copy.
 */
//#endregion

// ─── Copy Response ───────────────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} CopyResponse
 */
//#endregion

// ─── Sitecopy Request ────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} SiteCopyRequest
 * @property {string} [originalSiteId]
 * - The ID of the site to be copied. Takes precedence over originalSiteName if both are provided.
 * - One is REQUIRED (either originalSiteId or originalSiteName)
 * @property {string} [originalSiteName]
 * - The name of the site to be copied.
 * - One is REQUIRED (either originalSiteId or originalSiteName)
 * @property {string} newSiteName
 * - REQUIRED: The name for the new site that will be created from the copy.
 */

//#endregion

// ─── Sitecopy Response ───────────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} SiteCopyResponse
 */
//#endregion

// ─── Readaccessrights Request ────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ReadAccessRightsRequest
 * @property {Identifier} identifier - REQUIRED: Parameters used when reading an asset
 */
//#endregion

// ─── Readaccessrights Response ───────────────────────────────────────────────
//#region

/**
 * @typedef {Object} ReadAccessRightsResult
 * @property {AccessRightsInformationReceive} accessRightsInformation
 * - REQUIRED: Complete information about the access rights of an asset or component.
 */

/**
 * @typedef {OperationResult & ReadAccessRightsResult} ReadAccessRightsResponse
 */
//#endregion

// ─── Editaccessrights Request ────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} EditAccessRightsRequest
 * @property {Identifier} identifier
 * - REQUIRED: Unique identifier for the asset or component whose access rights are being defined.
 * @property {AccessRightsInformationSend} accessRightsInformation
 * - REQUIRED: Complete information about the access rights of an asset or component.
 * @property {boolean} [applyToChildren]
 * - NOT REQUIRED: Indicates whether to apply the access rights to children. Default is false.
 *   This property is not required for non-folders and non-containers.
 */

//#endregion

// ─── Editaccessrights Response ───────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} EditAccessRightsResponse
 */
//#endregion

// ─── Readworkflowsettings Request ────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ReadWorkflowSettingsRequest
 * @property {Identifier} identifier - REQUIRED: Parameters used when reading an asset
 */
//#endregion

// ─── Readworkflowsettings Response ───────────────────────────────────────────
//#region
/**
 * @typedef {Object} ReadWorkflowSettingsResult
 * @property {WorkflowSettingsReceive} workflowSettings
 * - REQUIRED: A result of reading the workflow information of a folder.
 */

/**
 * @typedef {OperationResult & ReadWorkflowSettingsResult} ReadWorkflowSettingsResponse
 */
//#endregion

// ─── Editworkflowsettings Request ────────────────────────────────────────────
//#region
/**
 * @typedef {Object} EditWorkflowSettingsRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the workflow settings of a folder.
 * @property {WorkflowSettingsSend} workflowSettings
 * - REQUIRED: The workflow settings to be edited.
 * @property {boolean} [applyInheritWorkflowsToChildren]
 * - NOT REQUIRED: Determines whether to apply the 'inheritWorkflows' settings to children folders. Default is false.
 * @property {boolean} [applyRequireWorkflowToChildren]
 * - NOT REQUIRED: Determines whether to apply the 'requireWorkflow' settings to children folders. Default is false.
 */

//#endregion

// ─── Editworkflowsettings Response ───────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} EditWorkflowSettingsResponse
 */
//#endregion

// ─── Listsubscribers Request ─────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ListSubscribersRequest
 * @property {Identifier} identifier - REQUIRED: Parameters used when reading an asset
 */
//#endregion

// ─── Listsubscribers Response ────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ListSubscribersResult
 * @property {AssetIdentifiers[]} subscribers
 * - REQUIRED: A list of asset identifiers that are subscribed.
 * @property {AssetIdentifiers[]} manualSubscribers
 * - REQUIRED: A list of asset identifiers that are manually subscribed.
 */

/**
 * @typedef {OperationResult & ListSubscribersResult} ListSubscribersResponse
 */
//#endregion

// ─── Listmessages Request ────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ListMessagesRequest
 */
//#endregion

// ─── Listmessages Response ───────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} MessageProperties
 * @property {string} to
 * - REQUIRED: Who the message was/will be sent to.
 * @property {string} [from]
 * - NOT REQUIRED: Who sent the message. Not necessary when sending a message.
 * @property {string} subject
 * - REQUIRED: The subject of the message.
 * @property {string} [date]
 * - NOT REQUIRED: The date the message was sent. Not necessary when sending a message.
 * @property {string} body
 * - REQUIRED: The body of the message.
 */

/**
 * @typedef {BaseAsset & MessageProperties} Message
 * - Represents a message within the system
 */

/**
 * @typedef {Message} MessagesList
 */

/**
 * @typedef {Object} ListMessagesResult
 * @property {MessagesList[]} [messages]
 * - NOT REQUIRED: A list of messages.
 */

/**
 * @typedef {OperationResult & ListMessagesResult} ListMessagesResponse
 */
//#endregion

// ─── Markmessage Request ────────────────────────────────────────────────────
//#region
/**
 * @typedef {"read" | "unread"} MessageMarkType
 * - For marking messages - read or unread
 */

/**
 * @typedef {Object} MarkMessageRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the message.
 * @property {MessageMarkType} markType
 * - REQUIRED: The type of mark to apply to the message.
 * - For marking messages - read or unread
 */

//#endregion

// ─── Markmessage Response ───────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} MarkMessageResponse
 */
//#endregion

// ─── Deletemessage Request ───────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} DeleteMessageRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the message.
 */
//#endregion

// ─── Deletemessage Response ──────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} DeleteMessageResponse
 */
//#endregion

// ─── Checkout Request ────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} CheckOutRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the message.
 */
//#endregion

// ─── Checkout Response ───────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} CheckOutResult
 * @property {Identifier} [workingCopyIdentifier]
 * - NOT REQUIRED: Identifier for the working copy.
 */

/**
 * @typedef {OperationResult & CheckOutResult} CheckOutResponse
 */
//#endregion

// ─── Checkin Request ─────────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} CheckInRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the message.
 */
//#endregion

// ─── Checkin Response ────────────────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} CheckInResponse
 */
//#endregion

// ─── Listsites Request ───────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ListSitesRequest
 */
//#endregion

// ─── Listsites Response ──────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ListSitesResult
 * @property {AssetIdentifiers[]} sites
 * - REQUIRED: The identifiers for the sites.
 */

/**
 * @typedef {OperationResult & ListSitesResult} ListSitesResponse
 */
//#endregion

// ─── Readaudits Request ──────────────────────────────────────────────────────
//#region
/**
 * @typedef {"login" |
 * "login_failed" |
 * "logout" |
 * "start_workflow" |
 * "advance_workflow" |
 * "edit" |
 * "copy" |
 * "create" |
 * "reference" |
 * "delete" |
 * "delete_unpublish" |
 * "check_in" |
 * "check_out" |
 * "activate_version" |
 * "publish" |
 * "unpublish" |
 * "recycle" |
 * "restore" |
 * "move"} AuditTypes
 * - Represents the different kinds of audits in the system
 */

/**
 * @typedef {Object} AuditParameters
 * @property {Identifier} [identifier]
 * - NOT REQUIRED: Filter the assets by a certain entity.
 * @property {string} [username]
 * - NOT REQUIRED: Filter the audits by a given user name.
 * @property {string} [groupname]
 * - NOT REQUIRED: Filter the audits by a given group name. The audits for all users in the group will be returned.
 * @property {string} [rolename]
 * - NOT REQUIRED: Filter the audits by a given role.
 * @property {string} [startDate]
 * - NOT REQUIRED: Filter the audits by a start time. Only audits for events that happened after this time will be included.
 * @property {string} [endDate]
 * - NOT REQUIRED: Filter the audits by an end time. Only audits for events that happened before this time will be included.
 * @property {AuditTypes} [auditType]
 * - NOT REQUIRED: Filter the audits by an audit type. Only audits of this type will be returned in the response.
 */

/**
 * @typedef {Object} ReadAuditsRequest
 * @property {AuditParameters} auditParameters
 * - REQUIRED: The parameters for the audit.
 */

//#endregion

// ─── Readaudits Response ─────────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} Audit
 * @property {string} user
 * - REQUIRED: The user that performed the audited action
 * @property {AuditTypes} action
 * - REQUIRED: The type of action the user performed
 * @property {Identifier} [identifier]
 * - NOT REQUIRED: The identifier identifying the asset the action was performed on, if any
 * @property {string} date
 * - REQUIRED: The date and time the action was performed
 */

/**
 * @typedef {Audit} Audits
 * - An array of audits
 */

/**
 * @typedef {Object} ReadAuditsResult
 * @property {Audits[]} audits
 * - REQUIRED: Represents the audits in the system
 */

/**
 * @typedef {OperationResult & ReadAuditsResult} ReadAuditsResponse
 */
//#endregion

// ─── Readworkflowinformation Request ─────────────────────────────────────────
//#region
/**
 * @typedef {Object} ReadWorkflowInformationRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier for the message.
 */
//#endregion

// ─── Readworkflowinformation Response ────────────────────────────────────────
//#region
/**
 * @typedef {Object} WorkflowAction
 * - A single workflow action
 * @property {string} identifier
 * - REQUIRED: The unique name of this action
 * @property {string} label
 * - REQUIRED: The display label for this action
 * @property {string} actionType
 * - REQUIRED: The type of action: reverse, forward, next-id
 * @property {string} nextId
 * - REQUIRED: The id of the step that will result when this action is chosen by the user
 */

/**
 * @typedef {WorkflowAction} WorkflowActions
 * - An array of workflowAction objects
 */

/**
 * @typedef {Object} WorkflowStep
 * - A single workflow step
 * @property {string} identifier
 * - REQUIRED: The unique name of this step
 * @property {string} label
 * - REQUIRED: The display label for this step
 * @property {string} stepType
 * - REQUIRED: The type of step ("system", "edit", or "transition")
 * @property {string} owner
 * - REQUIRED: The owner (user or group name) of this step
 * @property {WorkflowActions} [actions]
 * - NOT REQUIRED: The actions this step contains
 */

/**
 * @typedef {WorkflowStep} WorkflowSteps
 * - An array of workflowStep objects
 */

/**
 * @typedef {Object} WorkflowProperties
 * @property {Identifier} relatedEntity
 * - REQUIRED: The asset that is in this workflow
 * @property {string} currentStep
 * - REQUIRED: The current step this workflow is at
 * @property {WorkflowSteps[]} [orderedSteps]
 * - NOT REQUIRED: The ordered steps of this workflow
 * @property {WorkflowSteps[]} [unorderedSteps]
 * - NOT REQUIRED: The unordered steps of this workflow
 * @property {string} [startDate]
 * - NOT REQUIRED: The date when the workflow was initialized
 * @property {string} [endDate]
 * - NOT REQUIRED: The due date of the workflow
 * @property {string} [completedWorkflowEmailId]
 * - NOT REQUIRED: Custom workflow email to send when email trigger set to completed
 * @property {string} [completedWorkflowEmailPath]
 * - NOT REQUIRED: Custom workflow email to send when email trigger set to completed
 * @property {string} [notificationWorkflowEmailId]
 * - NOT REQUIRED: Custom workflow email to send when email trigger set to notify
 * @property {string} [notificationWorkflowEmailPath]
 * - NOT REQUIRED: Custom workflow email to send when email trigger set to notify
 */

/**
 * @typedef {NamedAsset & WorkflowProperties} Workflow
 * - Represents a workflow instance in progress
 */

/**
 * @typedef {Object} ReadWorkflowInformationResult
 * @property {Workflow} [workflow]
 * - NOT REQUIRED: The workflow information
 */

/**
 * @typedef {OperationResult & ReadWorkflowInformationResult} ReadWorkflowInformationResponse
 */
//#endregion

// ─── Performworkflowtransition Request ───────────────────────────────────────
//#region
/**
 * @typedef {Object} WorkflowTransitionInformation
 * @property {string} workflowId
 * - REQUIRED: The id of the workflow to perform the transition on
 * @property {string} actionIdentifier
 * - REQUIRED: The identifier of the action to transition to
 * @property {string} [transitionComment]
 * - NOT REQUIRED: The user's comment about the transition taken
 */

/**
 * @typedef {Object} PerformWorkflowTransitionRequest
 * @property {WorkflowTransitionInformation} workflowTransitionInformation
 * - REQUIRED: Information related to the workflow transition
 */

//#endregion

// ─── Performworkflowtransition Response ──────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} PerformWorkflowTransitionResponse
 */
//#endregion

// ─── Readpreferences Request ─────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} ReadPreferencesRequest
 */
//#endregion

// ─── Readpreferences Response ────────────────────────────────────────────────
//#region
/**
 * @typedef {Object} Preference
 * - Preference object for editing
 * @property {string} name
 * - REQUIRED: The name of the preference
 * @property {string} value
 * - REQUIRED: The value of the preference
 */
/**
 * @typedef {Preference} PreferencesList
 */

/**
 * @typedef {Object} ReadPreferencesResult
 * @property {PreferencesList[]} preferences
 */

/**
 * @typedef {OperationResult & ReadPreferencesResult} ReadPreferencesResponse
 */
//#endregion

// ─── Publish/Unpublish Request ───────────────────────────────────────────────
//#region
/**
 * @typedef PublishInformation
 * @property {AssetIdentifiers} [destinations]
 * - NOT REQUIRED:
 * - Destinations to which the asset should be published.
 * - This field is Ignored when identifier (above) points to a Destination
 * - Publishing an asset that does not allow you to select Destinations in the Cascade UI (Publish Set or Target) *will* respect the Destinations
 * supplied here (this is an inconsistency between the UI and web services).
 * - Supplying an empty set of identifiers will publish to all Destinations
 * that are enabled and applicable for the user making the web services call.
 * @property {boolean} [unpublish]
 * - NOT REQUIRED: Whether to unpublish the asset instead of publishing it. Default: false
 * - Similar to the GUI - you can choose to unpublish the asset instead of publishing it.
 * @property {boolean} [publishRelatedAssets]
 * - NOT REQUIRED: Whether to publish related assets
 * @property {boolean} [publishRelatedPublishSet]
 * - NOT REQUIRED: Whether to publish related publish sets
 * @property {string} [scheduledDate]
 * - NOT REQUIRED: The scheduled date for publishing the asset
 */

/**
 * @typedef {Object} PublishUnpublishRequest
 * @property {Identifier} identifier
 * - REQUIRED: Identifier of the asset being published
 * @property {PublishInformation} publishInformation - REQUIRED:
 */

//#endregion

// ─── Publish/Unpublish Response ──────────────────────────────────────────────
//#region
/**
 * @typedef {OperationResult} PublishUnpublishResponse
 */
//#endregion

export default {};
