declare const _default: {};
export default _default;
/**
 * - All assets inherit from base asset
 */
export type BaseAsset = {
  /**
   * - The id of the asset. When creating, this should not be present as an asset does not have an id until it is created. When editing, specify this to uniquely identify an asset.
   */
  id?: string;
};
export type NamedAssetProperties = {
  /**
   * - REQUIRED on create, ignored on edit. Use move operation to rename an asset.
   */
  name: string;
};
/**
 * - All assets have a name
 */
export type NamedAsset = BaseAsset & NamedAssetProperties;
export type Tags = {
  /**
   * - REQUIRED: Value of tag string
   */
  name: string;
};
export type FolderContainedAssetProperties = {
  /**
   * - REQUIRED on create, ignored on edit: The parent folder relationship
   * - Priority: parentFolderId > parentFolderPath
   * - One is REQUIRED
   */
  parentFolderId?: string;
  /**
   * - REQUIRED on create, ignored on edit
   */
  parentFolderPath?: string;
  /**
   * - NOT REQUIRED: The path of an asset
   */
  path?: string;
  /**
   * - NOT REQUIRED: When this asset was last modified
   * - Read only
   */
  lastModifiedDate?: string;
  /**
   * - NOT REQUIRED: Who last modified this asset
   * - Read only
   */
  lastModifiedBy?: string;
  /**
   * - NOT REQUIRED: When this asset was created
   * - Read only
   */
  createdDate?: string;
  /**
   * - NOT REQUIRED: Who created this asset
   * - Read only
   */
  createdBy?: string;
  /**
   * - One is REQUIRED: The Site in which the asset is located
   */
  siteId?: string;
  /**
   * - One is REQUIRED
   */
  siteName?: string;
  /**
   * - NOT REQUIRED: Content Tags assigned to the asset
   */
  tags?: Tags[];
};
/**
 * - Representing all home-area assets that are contained in a folder
 */
export type FolderContainedAsset = NamedAsset & FolderContainedAssetProperties;
/**
 * - The content of the wired metadata fields
 * - None of the fields are required and the defaults are empty
 */
export type Metadata = {
  /**
   * - NOT REQUIRED
   */
  author?: string;
  /**
   * - NOT REQUIRED
   */
  displayName?: string;
  /**
   * - NOT REQUIRED
   */
  endDate?: string;
  /**
   * - NOT REQUIRED
   */
  keywords?: string;
  /**
   * - NOT REQUIRED
   */
  metaDescription?: string;
  /**
   * - NOT REQUIRED
   */
  reviewDate?: string;
  /**
   * - NOT REQUIRED
   */
  startDate?: string;
  /**
   * - NOT REQUIRED
   */
  summary?: string;
  /**
   * - NOT REQUIRED
   */
  teaser?: string;
  /**
   * - NOT REQUIRED
   */
  title?: string;
  /**
   * - NOT REQUIRED: Array
   */
  dynamicFields?: {
    name: string;
    fieldValues?: {
      value?: string;
    };
  }[];
};
export type DublinAwareAssetProperties = {
  /**
   * - NOT REQUIRED: The individual wired metadata fields
   * - default: all empty
   */
  metadata?: Metadata;
  /**
   * - NOT REQUIRED: For defining the metadata set relationship
   * - Priority: metadataSetId > metadataSetPath
   */
  metadataSetId?: string;
  /**
   * - NOT REQUIRED: For defining the metadata set relationship
   * - Priority: metadataSetId > metadataSetPath
   */
  metadataSetPath?: string;
  /**
   * - NOT REQUIRED
   */
  reviewOnSchedule?: boolean;
  /**
   * - NOT REQUIRED
   */
  reviewEvery?: number;
};
/**
 * - End types that extend containered-asset
 */
export type DublinAwareAsset = FolderContainedAsset &
  DublinAwareAssetProperties;
/**
 * - An asset that can expire and be moved to an expiration folder
 */
export type ExpiringAssetProperties = {
  /**
   * - NOT REQUIRED: When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   * - Priority: expirationFolderId > expirationFolderPath
   */
  expirationFolderId?: string;
  /**
   * - NOT REQUIRED: Path works only for non-recycled assets
   */
  expirationFolderPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
   */
  expirationFolderRecycled?: boolean;
};
/**
 * - An asset that can expire and be moved to an expiration folder
 */
export type ExpiringAsset = DublinAwareAsset & ExpiringAssetProperties;
export type LinkRewriting =
  | "inherit"
  | "absolute"
  | "relative"
  | "site-relative";
export type PublishableAssetProperties = {
  /**
   * - NOT REQUIRED: default: true
   * - Whether or not this asset can be published
   */
  shouldBePublished?: boolean;
  /**
   * - NOT REQUIRED: default: true
   * - Whether or not this asset can be indexed
   */
  shouldBeIndexed?: boolean;
  /**
   * - NOT REQUIRED:
   * - The last date this asset was published
   */
  lastPublishedDate?: string;
  /**
   * - NOT REQUIRED:
   * - Who last published this asset
   */
  lastPublishedBy?: string;
};
export type PublishableAsset = ExpiringAsset & PublishableAssetProperties;
/**
 * - All asset type strings
 */
export type EntityTypeString =
  | "assetfactory"
  | "assetfactorycontainer"
  | "block"
  | "block_FEED"
  | "block_INDEX"
  | "block_TEXT"
  | "block_XHTML_DATADEFINITION"
  | "block_XML"
  | "block_TWITTER_FEED"
  | "connectorcontainer"
  | "twitterconnector"
  | "facebookconnector"
  | "wordpressconnector"
  | "googleanalyticsconnector"
  | "contenttype"
  | "contenttypecontainer"
  | "destination"
  | "editorconfiguration"
  | "file"
  | "folder"
  | "group"
  | "message"
  | "metadataset"
  | "metadatasetcontainer"
  | "page"
  | "pageconfigurationset"
  | "pageconfiguration"
  | "pageregion"
  | "pageconfigurationsetcontainer"
  | "publishset"
  | "publishsetcontainer"
  | "reference"
  | "role"
  | "datadefinition"
  | "datadefinitioncontainer"
  | "sharedfield"
  | "sharedfieldcontainer"
  | "format"
  | "format_XSLT"
  | "format_SCRIPT"
  | "site"
  | "sitedestinationcontainer"
  | "symlink"
  | "target"
  | "template"
  | "transport"
  | "transport_fs"
  | "transport_ftp"
  | "transport_db"
  | "transport_cloud"
  | "transportcontainer"
  | "user"
  | "workflow"
  | "workflowdefinition"
  | "workflowdefinitioncontainer"
  | "workflowemail"
  | "workflowemailcontainer"
  | "xhtmlDataDefinitionBlock";
export type Path = {
  /**
   * - When reading a site, the "path" element should be populated with the site's name.
   */
  path: string;
  /**
   * - NOT REQUIRED.
   */
  siteId?: string;
  /**
   * - NOT REQUIRED.
   */
  siteName?: string;
};
export type Identifier = {
  /**
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
   * in case if the selected asset gets restored from the recycle bin. One is REQUIRED.
   */
  id?: string;
  /**
   * - Path works only for non-recycled assets.
   */
  path?: Path;
  /**
   * - REQUIRED.
   * - All asset type strings
   */
  type: EntityTypeString;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
   */
  recycled?: boolean;
};
export type ContainerChildren = Identifier;
/**
 * - A single structured data node
 */
export type StructuredDataNode = {
  /**
   * - REQUIRED: Each node has a type
   */
  type: "text" | "asset" | "group";
  /**
   * - REQUIRED
   * - The text identifier of the node coming from corresponding field in Data Definition. If this node is preserved on the asset but corresponding field no longer exists in Data Definition, the identifier's value will be "\<legacy\>".
   */
  identifier: string;
  /**
   * - NOT REQUIRED: An array of structured data nodes
   */
  structuredDataNodes?: StructuredDataNodes[];
  /**
   * - REQUIRED if type is 'text'
   */
  text?: string;
  /**
   * - REQUIRED if type is 'asset'
   */
  assetType?: "block" | "file" | "page" | "symlink" | "page,file,symlink";
  /**
   * - NOT REQUIRED
   * - Priority: blockId > blockPath
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   * - The block assigned at this page region
   */
  blockId?: string;
  /**
   * - NOT REQUIRED
   * - Priority: blockId > blockPath
   * - Path works only for non-recycled assets
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   * - The block assigned at this page region
   */
  blockPath?: string;
  /**
   * - NOT REQUIRED
   * - If assetType=file, one of fileId or filePath should be provided if asset is selected for this node
   * - If assetType=linkable, fileId or filePath should be populated if the selected linkable asset is a file
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  fileId?: string;
  /**
   * - NOT REQUIRED
   * - Path works only for non-recycled assets
   * - If assetType=file, one of fileId or filePath should be provided if asset is selected for this node
   * - If assetType=linkable, fileId or filePath should be populated if the selected linkable asset is a file
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  filePath?: string;
  /**
   * - NOT REQUIRED
   * - If assetType=page, one of pageId or pagePath should be provided if asset is selected for this node
   * - If assetType=linkable, pageId or pagePath should be populated if the selected linkable asset is a page
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  pageId?: string;
  /**
   * - NOT REQUIRED
   * - Path works only for non-recycled assets
   * - If assetType=page, one of pageId or pagePath should be provided if asset is selected for this node
   * - If assetType=linkable, pageId or pagePath should be populated if the selected linkable asset is a page
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  pagePath?: string;
  /**
   * - NOT REQUIRED
   * - If assetType=symlink, one of symlinkId or symlinkPath should be provided if asset is selected for this node
   * - If assetType=linkable, symlinkId or symlinkPath should be populated if the selected linkable asset is a symlink
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  symlinkId?: string;
  /**
   * - NOT REQUIRED
   * - Path works only for non-recycled assets
   * - If assetType=symlink, one of symlinkId or symlinkPath should be provided if asset is selected for this node
   * - If assetType=linkable, symlinkId or symlinkPath should be populated if the selected linkable asset is a symlink
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  symlinkPath?: string;
  /**
   * - NOT REQUIRED
   * - Use for reading only - this attribute is not necessary when editing or creating and will not affect these operations if provided.
   * - When editing or creating and selecting a recycled asset, id of the asset should be provided (blockId instead of blockPath, fileId instead of filePath etc.).
   * - If path is provided, Cascade will look only for a non-recycled asset with given path even if 'recycled=true' is provided.
   */
  recycled?: string;
};
/**
 * - An array of structured data nodes
 */
export type StructuredDataNodes = StructuredDataNode;
/**
 * - Page structured data information
 */
export type StructuredData = {
  /**
   * - NOT REQUIRED
   * - Priority: definitionId > definitionPath
   * - For defining an asset's Data Definition relationship
   */
  definitionId?: string;
  /**
   * - NOT REQUIRED
   * - Priority: definitionId > definitionPath
   * - For defining an asset's Data Definition relationship
   */
  definitionPath?: string;
  /**
   * - NOT REQUIRED: An array of structured data nodes
   */
  structuredDataNodes?: StructuredDataNodes[];
};
/**
 * - The various serialization types for a target
 */
export type SerializationType =
  | "HTML"
  | "XML"
  | "PDF"
  | "RTF"
  | "JSON"
  | "JS"
  | "CSS";
export type PageConfigurationProperties = {
  /**
   * - A single page configuration's name, such as "XML" or "Full HTML". REQUIRED.
   */
  name: string;
  /**
   * - Whether or not this is the default configuration. REQUIRED.
   */
  defaultConfiguration: boolean;
  /**
   * - The template for this configuration. Priority: templateId > templatePath. One is REQUIRED for pageConfigurationSet.
   * - NOT REQUIRED for page.
   */
  templateId?: string;
  /**
   * - The template for this configuration.
   */
  templatePath?: string;
  /**
   * - The overall XSLT format applied to this page configuration. Priority: formatId > formatPath. NOT REQUIRED default none.
   */
  formatId?: string;
  /**
   * - The overall XSLT format applied to this page configuration.
   */
  formatPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  formatRecycled?: boolean;
  /**
   * - The individual page region assignments for this configuration.
   */
  pageRegions?: PageRegions[];
  /**
   * - The output file extension, for example ".html". Only required when in a site.
   */
  outputExtension?: string;
  /**
   * - The content type this target serializes its output as. Only required when in a site.
   * - The various serialization types for a target
   */
  serializationType?: SerializationType;
  /**
   * - When the serializationType is "XML", should Cascade include the XML declaration in published files? NOT REQUIRED default: false.
   */
  includeXMLDeclaration?: boolean;
  /**
   * - Is this configuration publishable?
   */
  publishable?: boolean;
};
export type PageRegionProperties = {
  /**
   * - The name of this page region, for example, "DEFAULT", or "JAVASCRIPT-INCLUDE".
   * - This MUST correspond to the name of a region defined in the template. REQUIRED.
   */
  name: string;
  /**
   * - The block assigned at this page region. Priority: blockId > blockPath. NOT REQUIRED.
   */
  blockId?: string;
  /**
   * - Path works only for non-recycled assets.
   */
  blockPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  blockRecycled?: boolean;
  /**
   * - When this is set to true, this will keep a block defined at a lower level from applying to this region.
   * - NOT REQUIRED: default: false.
   */
  noBlock?: boolean;
  /**
   * - The format assigned at this page region, can be either XSLT or script. Priority: formatId > formatPath. NOT REQUIRED.
   */
  formatId?: string;
  /**
   * - Path works only for non-recycled assets.
   */
  formatPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  formatRecycled?: boolean;
  /**
   * - When this is set to true, this will keep a format defined at a lower level from applying to this region.
   * - NOT REQUIRED: default: false.
   */
  noFormat?: boolean;
};
/**
 * - An individual page region
 */
export type PageRegion = BaseAsset & PageRegionProperties;
/**
 * - Complex type wrapping a list of page regions
 */
export type PageRegions = PageRegion;
export type PageConfiguration = BaseAsset & PageConfigurationProperties;
/**
 * - A list of page configurations.
 */
export type PageConfigurations = PageConfiguration;
/**
 * Represents global abilities for a role.
 */
export type GlobalAbilities = {
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassAllPermissionsChecks?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessSiteManagement?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  createSites?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editAccessRights?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessAudits?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessAllSites?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewSystemInfoAndLogs?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  forceLogout?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  diagnosticTests?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessSecurityArea?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  optimizeDatabase?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  syncLdap?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  configureLogging?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  searchingIndexing?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessConfiguration?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editSystemPreferences?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  broadcastMessages?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewUsersInMemberGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewAllUsers?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  createUsers?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  deleteUsersInMemberGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  deleteAllUsers?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewMemberGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewAllGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  createGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  deleteMemberGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessRoles?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  createRoles?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  deleteAnyGroup?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editAnyUser?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editUsersInMemberGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editAnyGroup?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editMemberGroups?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  databaseExportTool?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  changeIdentity?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessDefaultEditorConfiguration?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  modifyDictionary?: boolean;
};
/**
 * Represents site abilities for a role.
 */
export type SiteAbilities = {
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassAllPermissionsChecks?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  uploadImagesFromWysiwyg?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  multiSelectCopy?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  multiSelectPublish?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  multiSelectMove?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  multiSelectDelete?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editPageLevelConfigurations?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editPageContentType?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editDataDefinition?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  publishReadableHomeAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  publishWritableHomeAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  editAccessRights?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewVersions?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  activateDeleteVersions?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessAudits?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassWorkflow?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  assignApproveWorkflowSteps?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  deleteWorkflows?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  breakLocks?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  assignWorkflowsToFolders?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassAssetFactoryGroupsNewMenu?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassDestinationGroupsWhenPublishing?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassWorkflowDefintionGroupsForFolders?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessManageSiteArea?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessAssetFactories?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessConfigurationSets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessDataDefinitions?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessSharedFields?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessMetadataSets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessPublishSets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessDestinations?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessTransports?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessWorkflowDefinitions?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessWorkflowEmails?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessContentTypes?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessConnectors?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  publishReadableAdminAreaAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  publishWritableAdminAreaAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  importZipArchive?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  bulkChange?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  recycleBinViewRestoreUserAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  recycleBinDeleteAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  recycleBinViewRestoreAllAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  moveRenameAssets?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  diagnosticTests?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  alwaysAllowedToToggleDataChecks?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  viewPublishQueue?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  reorderPublishQueue?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  cancelPublishJobs?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  sendStaleAssetNotifications?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  brokenLinkReportAccess?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  brokenLinkReportMarkFixed?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessEditorConfigurations?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  bypassWysiwygEditorRestrictions?: boolean;
  /**
   * - NOT REQUIRED: Default is false.
   */
  accessSiteImproveIntegration?: boolean;
};
export type ContaineredAssetProperties = {
  /**
   * - NOT REQUIRED on edit: For defining the container relationship. Priority: parentContainerId > parentContainerPath. Required on create, ignored on edit. Use move operation to move an asset after it has been created.
   */
  parentContainerId?: string;
  /**
   * - NOT REQUIRED on edit: Priority: parentContainerId > parentContainerPath. One is REQUIRED on create, ignored on edit.
   */
  parentContainerPath?: string;
  /**
   * - NOT REQUIRED: The path of an asset. This is another way to uniquely identify an asset. Left blank when creating, specify this to uniquely identify an asset when editing.
   */
  path?: string;
  /**
   * - NOT REQUIRED: The site in which the asset is located. Priority: siteId > siteName. One is REQUIRED.
   */
  siteId?: string;
  /**
   * - NOT REQUIRED: Priority: siteId > siteName. One is REQUIRED.
   */
  siteName?: string;
};
/**
 * - All system area assets are "containered"
 */
export type ContaineredAsset = NamedAsset & ContaineredAssetProperties;
export type AssetFactoryPluginParameter = {
  /**
   * - REQUIRED: Parameter name (not label), for example "assetfactory.plugin.filelimit.param.name.size".
   */
  name: string;
  /**
   * - NOT REQUIRED: Parameter value, default is an empty string.
   */
  value?: string;
};
/**
 * - Complex type wrapping a list of asset factory plugin parameters
 */
export type AssetFactoryPluginParameters = AssetFactoryPluginParameter;
export type AssetFactoryPlugin = {
  /**
   * - REQUIRED: Name of the asset factory plugin. This is the exact class, like "com.cms.assetfactory.DisplayToSystemNamePlugin".
   */
  name: string;
  /**
   * - NOT REQUIRED: Parameters for the asset factory plugin.
   */
  parameters?: AssetFactoryPluginParameters[];
};
/**
 * - Complex type wrapping a list of asset factory plugins
 */
export type AssetFactoryPlugins = AssetFactoryPlugin;
export type ContentTypePageConfigurationPublishMode =
  | "all-destinations"
  | "selected-destinations"
  | "do-not-publish";
/**
 * - A list of identifiers of publishable assets (files, folders, or pages).
 */
export type DestinationList = Identifier;
export type ContentTypePageConfiguration = {
  /**
   * - Priority: pageConfigurationId > pageConfigurationName. One is REQUIRED.
   */
  pageConfigurationId?: string;
  pageConfigurationName?: string;
  /**
   * - REQUIRED.
   */
  publishMode: ContentTypePageConfigurationPublishMode;
  /**
   * - REQUIRED if "publishMode" is "selected-destinations", else NOT REQUIRED and ignored.
   */
  destinations?: DestinationList[];
};
export type ContentTypePageConfigurations = ContentTypePageConfiguration;
export type InlineEditableField = {
  /**
   * - REQUIRED.
   */
  pageConfigurationName: string;
  /**
   * - REQUIRED.
   */
  pageRegionName: string;
  /**
   * - NOT REQUIRED. This property is only applicable for data-definition type fields and is needed only if the field is inside of a group.
   * It holds a list of ancestor data definition groups presented in the form of a path.
   */
  dataDefinitionGroupPath?: string;
  /**
   * - REQUIRED.
   */
  type: InlineEditableFieldType;
  /**
   * - REQUIRED for metadata and data-definition field type. NOT REQUIRED for xhtml field type.
   * Use title, displayName, summary, teaser, keywords, description, author, startDate, endDate, reviewDate for wired metadata fields,
   * field name for dynamic metadata field or field identifier for a data definition field.
   */
  name?: string;
};
export type InlineEditableFields = InlineEditableField;
export type InlineEditableFieldType =
  | "wired-metadata"
  | "dynamic-metadata"
  | "data-definition"
  | "xhtml";
export type ConnectorParameter = {
  /**
   * - REQUIRED: Name of the parameter.
   */
  name: string;
  /**
   * - REQUIRED: Value of the parameter.
   */
  value: string;
};
export type ConnectorParameterList = ConnectorParameter;
export type ConnectorContentTypeLinkParam = {
  /**
   * - REQUIRED: Name of the parameter.
   */
  name: string;
  /**
   * - REQUIRED: Value of the parameter.
   */
  value: string;
};
/**
 * - NOT REQUIRED: An array of connector content type link parameters.
 */
export type ConnectorContentTypeLinkParamList = ConnectorContentTypeLinkParam;
export type ConnectorContentTypeLink = {
  /**
   * - REQUIRED: One of contentTypeId or contentTypePath must be specified.
   */
  contentTypeId?: string;
  /**
   * - REQUIRED: One of contentTypeId or contentTypePath must be specified.
   */
  contentTypePath?: string;
  /**
   * - NOT REQUIRED: Identifier for the page configuration.
   */
  pageConfigurationId?: string;
  /**
   * - NOT REQUIRED: Name for the page configuration.
   */
  pageConfigurationName?: string;
  /**
   * - NOT REQUIRED: A list of connector content type link params.
   */
  connectorContentTypeLinkParams?: ConnectorContentTypeLinkParamList[];
};
export type ConnectorContentTypeLinkList = ConnectorContentTypeLink;
export type ConnectorProperties = {
  /**
   * - NOT REQUIRED: First authentication token for the external application the connector connects to (usually a username or email address)
   */
  auth1?: string;
  /**
   * - NOT REQUIRED: Second authentication token for the external application the connector connects to (usually a password)
   * - Write only - hidden when read
   */
  auth2?: string;
  /**
   * - NOT REQUIRED: URL of the external application the connector connects to
   */
  url?: string;
  /**
   * - NOT REQUIRED: Determines whether or not the connector has been verified
   * - Read only - editing a connector always unverifies it
   */
  verified?: boolean;
  /**
   * - NOT REQUIRED: The date this connector was verified
   * - Read only - editing a connector always clears the verification date
   */
  verifiedDate?: string;
  /**
   * - NOT REQUIRED: A list of connector parameters
   */
  connectorParameters?: ConnectorParameterList[];
  /**
   * - REQUIRED for FacebookConnector and WordPressConnector
   */
  connectorContentTypeLinks?: ConnectorContentTypeLinkList[];
};
export type Connector = ContaineredAsset & ConnectorProperties;
export type StatusUpdateConnectorProperties = {
  /**
   * - One is REQUIRED:
   * - Priority: destinationId > destinationPath
   */
  destinationId?: string;
  /**
   * - One is REQUIRED:
   * - Priority: destinationId > destinationPath
   */
  destinationPath?: string;
};
export type StatusUpdateConnector = Connector & StatusUpdateConnectorProperties;
/**
 * - The different types of dynamic metadata fields
 */
export type DynamicMetadataFieldType =
  | "text"
  | "datetime"
  | "radio"
  | "dropdown"
  | "checkbox"
  | "multiselect";
/**
 * - Enumeration of the possible metadata field visibilities
 */
export type MetadataFieldVisibility = "inline" | "hidden" | "visible";
export type DynamicMetadataFieldDefinitionValue = {
  /**
   * - NOT REQUIRED: The actual string value. When not provided, an empty string will be used.
   */
  value?: string;
  /**
   * - NOT REQUIRED: Label displayed to the user editing an asset. When not provided, value will be displayed.
   */
  label?: string;
  /**
   * - Whether or not this value should be checked by default when creating new assets through web UI. Default is false.
   */
  selectedByDefault?: boolean;
};
export type DynamicMetadataFieldDefinitionValues =
  DynamicMetadataFieldDefinitionValue;
export type DynamicMetadataFieldDefinition = {
  /**
   * - REQUIRED: The name of the dynamic metadata field.
   */
  name: string;
  /**
   * - REQUIRED: The label of the dynamic metadata field.
   */
  label: string;
  /**
   * - REQUIRED: The type of the dynamic metadata field.
   */
  fieldType: DynamicMetadataFieldType;
  /**
   * - Whether or not this field is required. Default is false.
   */
  required?: boolean;
  /**
   * - The visibility of this field. Default is "visible".
   */
  visibility?: MetadataFieldVisibility;
  /**
   * - REQUIRED for radio, checkbox, dropdown and multiselect types, ignored for text type.
   */
  possibleValues?: DynamicMetadataFieldDefinitionValues[];
  /**
   * - Optional help text for this field.
   */
  helpText?: string;
};
export type DynamicMetadataFieldDefinitions = DynamicMetadataFieldDefinition;
/**
 * - A list of identifiers of publishable assets (files, folders, or pages).
 */
export type PublishableAssetList = Identifier;
/**
 * - For Sites, Targets, Publish Sets scheduledPublishDestinationMode property
 */
export type ScheduledDestinationMode =
  | "all-destinations"
  | "selected-destinations";
export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
export type DaysOfWeek = {
  /**
   * - NOT REQUIRED: A list of days of the week.
   */
  dayOfWeek?: DayOfWeek;
};
export type AuthMode = "PASSWORD" | "PUBLIC_KEY";
export type FtpProtocolType = "FTP" | "FTPS" | "SFTP";
/**
 * - The different options for naming an instance of a workflow definition
 */
export type WorkflowNamingBehavior =
  | "auto-name"
  | "name-of-definition"
  | "empty";
export type RoleAssignment = {
  /**
   * - NOT REQUIRED: Priority: roleId > roleName
   */
  roleId?: string;
  /**
   * - NOT REQUIRED: Priority: roleId > roleName
   */
  roleName?: string;
  /**
   * - NOT REQUIRED: Comma-delimited list of usernames.
   */
  users?: string;
  /**
   * - NOT REQUIRED: Comma-delimited list of group names.
   */
  groups?: string;
};
export type RoleAssignments = RoleAssignment;
export type RecycleBinExpiration = "1" | "15" | "30" | "never";
export type NamingRuleCase = "ANY" | "LOWER" | "UPPER";
export type NamingRuleSpacing = "SPACE" | "REMOVE" | "HYPHEN" | "UNDERSCORE";
export type NamingRuleAsset = {
  namingRuleAsset?:
    | "block"
    | "file"
    | "folder"
    | "page"
    | "symlink"
    | "template"
    | "reference"
    | "format";
};
export type NamingRuleAssets = NamingRuleAsset;
export type WorkflowStepConfiguration = {
  /**
   * - REQUIRED
   * - The step's unique text identifier/name
   */
  stepIdentifier: string;
  /**
   * - REQUIRED
   * - The step's assignment (user or group name)
   */
  stepAssignment: string;
};
/**
 * - An array of workflow step configuration objects
 */
export type WorkflowStepConfigurations = WorkflowStepConfiguration;
export type WorkflowConfiguration = {
  /**
   * - When the workflow is instantiated, this will be its name
   * - REQUIRED
   */
  workflowName: string;
  /**
   * - Which workflow definition to use
   * - Priority: workflowDefinitionId > workflowDefinitionPath
   * - One is REQUIRED
   */
  workflowDefinitionId?: string;
  /**
   * - Which workflow definition to use
   * - Priority: workflowDefinitionId > workflowDefinitionPath
   * - One is REQUIRED
   */
  workflowDefinitionPath?: string;
  /**
   * - The comments for this operation which will be recorded with the workflow
   * - REQUIRED
   */
  workflowComments: string;
  /**
   * - The optional step configurations for each assignable step in the workflow
   * - NOT REQUIRED default: the defaults as defined in the workflow definition
   */
  workflowStepConfigurations?: WorkflowStepConfigurations[];
  /**
   * - Optional due date for the workflow. If not specified, will default to 7 days from today
   */
  endDate?: string;
};
export type OperationResult = {
  success: string;
  message: string;
};
/**
 * - Array wrapper for multiple identifiers of assets
 */
export type AssetIdentifiers = Identifier;
/**
 * - Parameters used when unpublishing an asset
 */
export type UnpublishParameters = {
  /**
   * - NOT REQUIRED: When true, the asset will be unpublished. Default: false
   */
  unpublish?: boolean;
  /**
   * - NOT REQUIRED: Unpublishes the asset from the given destinations. Default: all enabled destinations in the asset's site
   */
  destinations?: AssetIdentifiers[];
};
export type AclEntryLevel = "read" | "write";
export type AclEntryType = "user" | "group";
/**
 * - A single access control list entry
 */
export type AclEntry = {
  /**
   * - REQUIRED: The access level, either "read" or "write".
   */
  level: AclEntryLevel;
  /**
   * - REQUIRED: The type of ACL entry, either "user" or "group".
   */
  type: AclEntryType;
  /**
   * - REQUIRED: The name of the user or group for which this ACL entry applies.
   */
  name: string;
};
/**
 * - Array wrapper for access control list entries
 */
export type AclEntries = AclEntry;
export type AllLevel = "none" | "read" | "write";
export type AccessRightsInformation = {
  /**
   * - REQUIRED: Unique identifier for the asset or component whose access rights are being defined.
   */
  identifier: Identifier;
  /**
   * - Optional list of Access Control List entries.
   */
  aclEntries?: AclEntries[];
  /**
   * - REQUIRED: Defines the access level for all users.
   */
  allLevel: AllLevel;
};
/**
 * - Complete data with the workflow settings of a folder
 */
export type WorkflowSettings = {
  /**
   * - REQUIRED: Identifier for the workflow settings of a folder.
   */
  identifier: Identifier;
  /**
   * - NOT REQUIRED: Workflow definitions associated with this folder.
   */
  workflowDefinitions?: AssetIdentifiers[];
  /**
   * - NOT REQUIRED: Determines whether the workflow settings are inherited from the parent folder.
   */
  inheritWorkflows?: boolean;
  /**
   * - NOT REQUIRED: Indicates whether a workflow is required for this folder.
   */
  requireWorkflow?: boolean;
  /**
   * - NOT REQUIRED: Inherited workflow definitions from the parent folder. Ignored on edit.
   */
  inheritedWorkflowDefinitions?: AssetIdentifiers[];
};
export type FeedBlockProperties = {
  /**
   * - REQUIRED: The URL of an XML feed
   */
  feedURL: string;
};
export type FeedBlock = FeedBlockProperties & ExpiringAsset;
export type IndexBlockProperties = {
  /**
   * - NOT REQUIRED: The type of the index block. It takes "folder" as a default. Default: "folder"
   */
  indexBlockType?: "folder" | "content-type";
  /**
   * - NOT REQUIRED: The indexed folder relationship when indexBlockType is folder. Priority: indexedFolderId > indexedFolderPath. When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   */
  indexedFolderId?: string;
  /**
   * - NOT REQUIRED: Path works only for non-recycled assets.
   */
  indexedFolderPath?: string;
  /**
   * - NOT REQUIRED: The indexed content type relationship when indexBlockType is content-type. Priority: indexedContentTypeId > indexedContentTypePath. One is REQUIRED when indexBlockType is content-type.
   */
  indexedContentTypeId?: string;
  /**
   * - NOT REQUIRED: The indexed content type relationship when indexBlockType is content-type. Priority: indexedContentTypeId > indexedContentTypePath. One is REQUIRED when indexBlockType is content-type.
   */
  indexedContentTypePath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying etc.
   */
  indexedFolderRecycled?: boolean;
  /**
   * - REQUIRED: The maximum number of assets to render in XML form for this index block.
   */
  maxRenderedAssets: number;
  /**
   * - REQUIRED: The folder depth to which the indexer will render assets in XML form.
   */
  depthOfIndex: number;
  /**
   * - NOT REQUIRED: The rendering behavior of the folder index block. Default: "render-normally".
   */
  renderingBehavior?:
    | "render-normally"
    | "hierarchy"
    | "hierarchy-with-siblings"
    | "hierarchy-siblings-forward";
  /**
   * - NOT REQUIRED: Whether or not to index page assets. Default: false.
   */
  indexPages?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to index block assets. Default: false.
   */
  indexBlocks?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to index (sym)link assets. Default: false.
   */
  indexLinks?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to index file assets. Default: false.
   */
  indexFiles?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to include path data. Default: false.
   */
  indexRegularContent?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to include last modified date, last modified by, created date and created by. Default: false.
   */
  indexSystemMetadata?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to include wired/dynamic metadata. Default: false.
   */
  indexUserMetadata?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to include access rights information. Default: false.
   */
  indexAccessRights?: boolean;
  /**
   * - NOT REQUIRED: Whether or not to include tags. Default: false.
   */
  indexTags?: boolean;
  /**
   * - NOT REQUIRED: When this is "true", an element "user-information" will be added towards the bottom of the rendered XML including information about the user's login, full name and group memberships. Default: false.
   */
  indexUserInfo?: boolean;
  /**
   * - NOT REQUIRED: When this is "true", and this block is included in a page that is in workflow, an element containing the page's workflow information will be included in the rendered XML. Default: false.
   */
  indexWorkflowInfo?: boolean;
  /**
   * - NOT REQUIRED: When this is "true", the page which includes this index block will have its information also included at the bottom in a "calling-page-data" element. Default: false.
   */
  appendCallingPageData?: boolean;
  /**
   * - NOT REQUIRED: How to sort the folder contents when rendering the XML content. Default: "folder-order" for folder index blocks and "alphabetical" for content type index blocks.
   */
  sortMethod?:
    | "folder-order"
    | "alphabetical"
    | "last-modified-date"
    | "created-date";
  /**
   * - NOT REQUIRED: In what order to sort the assets in the index block. Default: "ascending".
   */
  sortOrder?: "ascending" | "descending";
  /**
   * - NOT REQUIRED: The Page XML rendering option. Default: "no-render".
   */
  pageXML?: "no-render" | "render" | "render-current-page-only";
};
export type IndexBlock = IndexBlockProperties & ExpiringAsset;
export type TextBlockProperties = {
  /**
   * - REQUIRED: The text of the block
   */
  text: string;
};
/**
 * - A block containing plain text
 */
export type TextBlock = TextBlockProperties & ExpiringAsset;
export type XhtmlDataDefinitionBlockProperties = {
  /**
   * - A page either contains XHTML content (plain WYSIWYG page) or structured data content.
   * Priority: xhtml > structuredData. One is REQUIRED.
   */
  structuredData?: StructuredData;
};
/**
 * - A block containing plain XHTML or Structured Data
 */
export type XhtmlDataDefinitionBlock = XhtmlDataDefinitionBlockProperties &
  ExpiringAsset;
export type XmlBlockProperties = any;
/**
 * - A block containing plain XML
 */
export type XmlBlock = ExpiringAsset;
export type TwitterFeedBlockProperties = {
  /**
   * - NOT REQUIRED: The Account Name of the block. REQUIRED for Tweets Only and Tweets and Mentions query types.
   */
  accountName?: string;
  /**
   * - NOT REQUIRED: The Search String for the block. REQUIRED for Tweets Only and Tweets and Mentions search terms types.
   */
  searchString?: string;
  /**
   * - REQUIRED: The maximum number of tweets which can be shown.
   */
  maxResults: number;
  /**
   * - REQUIRED: Should the twitter feed block use the default CSS style?
   */
  useDefaultStyle: boolean;
  /**
   * - REQUIRED: Should the twitter feed block include the JQuery API?
   */
  excludeJQuery: boolean;
  /**
   * - REQUIRED: The type of twitter feed block
   */
  queryType: "user-only" | "users-and-mentions" | "search-terms";
};
export type TwitterFeedBlock = TwitterFeedBlockProperties & ExpiringAsset;
export type FileProperties = {
  /**
   * - One is REQUIRED
   * - Priority: text > data
   * - A file either contains plaintext content or binary content (base64 encoded)
   */
  text?: string;
  /**
   * - One is REQUIRED
   * - Priority: text > data
   * - A file either contains plaintext content or binary content (base64 encoded)
   */
  data?: any[];
  rewriteLinks?: boolean;
  /**
   * - NOT REQUIRED: default: "inherit"
   */
  linkRewriting?: LinkRewriting;
};
export type File = FileProperties & PublishableAsset;
export type FolderProperties = {
  /**
   * - The array of children
   * - Wrapper for an array of folder children (identifiers)
   */
  children?: ContainerChildren[];
  /**
   * - NOT REQUIRED
   */
  includeInStaleContent?: boolean;
};
export type Folder = FolderProperties & PublishableAsset;
export type PageProperties = {
  /**
   * - For defining the configuration set or content type relationship.
   * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
   * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
   */
  configurationSetId?: string;
  /**
   * - For defining the configuration set or content type relationship.
   * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
   * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
   */
  configurationSetPath?: string;
  /**
   * - For defining the configuration set or content type relationship.
   * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
   * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
   */
  contentTypeId?: string;
  /**
   * - For defining the configuration set or content type relationship.
   * Priority: (contentTypeId > contentTypePath) > (configurationSetId > configurationSetPath).
   * One is REQUIRED: contentTypeId | contentTypePath | configurationSetId | configurationSetPath
   */
  contentTypePath?: string;
  /**
   * - A page either contains XHTML content (plain WYSIWYG page) or structured data content.
   * Priority: xhtml > structuredData. One is REQUIRED.
   */
  structuredData?: StructuredData;
  /**
   * - A page either contains XHTML content (plain WYSIWYG page) or structured data content.
   */
  xhtml?: string;
  /**
   * - The page configurations containing page-level region block/format assignments.
   * NOT REQUIRED when creating a page, but you must submit assignment information when editing
   * if you want to maintain the region assignments.
   */
  pageConfigurations?: PageConfigurations[];
  /**
   * - NOT REQUIRED: default: "inherit".
   */
  linkRewriting?: LinkRewriting;
};
export type Page = PageProperties & PublishableAsset;
export type ReferenceProperties = {
  /**
   * - For defining the referenced asset relationship. Priority: referencedAssetId > referencedAssetPath. One is REQUIRED.
   */
  referencedAssetId?: string;
  /**
   * - For defining the referenced asset relationship. Priority: referencedAssetId > referencedAssetPath. One is REQUIRED.
   */
  referencedAssetPath?: string;
  /**
   * - The type of the referenced asset. REQUIRED.
   */
  referencedAssetType: EntityTypeString;
};
export type Reference = ReferenceProperties & FolderContainedAsset;
export type XsltFormatProperties = {
  /**
   * - REQUIRED: The XML content of the xslt format.
   */
  xml: string;
};
export type XsltFormat = XsltFormatProperties & FolderContainedAsset;
export type ScriptFormatProperties = {
  /**
   * - REQUIRED: The script content of the scriptFormat
   */
  script: string;
};
export type ScriptFormat = ScriptFormatProperties & FolderContainedAsset;
export type TemplateProperties = {
  /**
   * - NOT REQUIRED when template is inside of site
   * - REQUIRED when template is in the global area
   * - For defining the target relationship. Priority: targetId > targetPath
   */
  targetId?: string;
  /**
   * - NOT REQUIRED when template is inside of site
   * - REQUIRED when template is in the global area
   */
  targetPath?: string;
  /**
   * - NOT REQUIRED: Overall xslt format applied to this template. Defaults to none.
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing the selected asset's ID in case it gets restored from the recycle bin.
   */
  formatId?: string;
  /**
   * - NOT REQUIRED: Path works only for non-recycled assets.
   */
  formatPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  formatRecycled?: boolean;
  /**
   * - REQUIRED: The XHTML content of the template
   */
  xml: string;
  /**
   * - NOT REQUIRED: The page regions and their block/xslt format assignments for this template. Defaults to all regions empty.
   */
  pageRegions?: PageRegions[];
};
export type Template = TemplateProperties & FolderContainedAsset;
/**
 * - A symlink is not a UNIX symlink - it is simply an asset containing a hyperlink
 */
export type SymlinkProperties = {
  /**
   * - NOT REQUIRED: The fully qualified URL of this link
   */
  linkURL?: string;
};
export type Symlink = SymlinkProperties & ExpiringAsset;
export type UserProperties = {
  /**
   * - REQUIRED: The username of the user.
   */
  username: string;
  /**
   * - REQUIRED: The full name of the user.
   */
  fullName: string;
  /**
   * - REQUIRED: The user's email.
   */
  email: string;
  /**
   * - REQUIRED: The way the user is authenticated.
   */
  authType: "normal" | "ldap" | "custom";
  /**
   * - REQUIRED:
   *   - The password for this user.
   *   - When authType is custom, this is not used.
   */
  password: string;
  /**
   * - NOT REQUIRED: Whether or not this user is enabled. Default false.
   */
  enabled?: boolean;
  /**
   * - REQUIRED: A semi-colon separated list of groups this user is a member of.
   */
  groups: string;
  /**
   * - REQUIRED: This user's roles.
   */
  role: string;
  /**
   * - NOT REQUIRED: Default Site for the user, defaultSiteId takes precedence if both fields are set.
   */
  defaultSiteId?: string;
  /**
   * - NOT REQUIRED:
   */
  defaultSiteName?: string;
  /**
   * - REQUIRED if authType is ldap; otherwise, NOT REQUIRED.
   */
  ldapDN?: string;
};
export type User = UserProperties;
export type GroupProperties = {
  /**
   * - REQUIRED: The name of the group.
   */
  groupName: string;
  /**
   * - NOT REQUIRED:
   * - Semi-colon delimited list of all of the member users of this group.
   */
  users?: string;
  /**
   * - REQUIRED:
   * - The Roles for this group.
   * - Note that this role will also apply to all the members, possibly adding roles for those users.
   */
  role: string;
};
export type Group = GroupProperties;
export type RoleProperties = {
  /**
   * - NOT REQUIRED: The type of the role.
   */
  roleType: "site" | "global";
  /**
   * - ONE is REQUIRED:
   * - The global or site abilities for the role.
   * - Use the correct one depending on the type of the role.
   */
  globalAbilities?: GlobalAbilities;
  /**
   * - ONE is REQUIRED:
   * - The global or site abilities for the role.
   * - Use the correct one depending on the type of the role.
   */
  siteAbilities?: SiteAbilities;
};
export type Role = RoleProperties & NamedAsset;
export type AssetFactoryProperties = {
  /**
   * - NOT REQUIRED: Semicolon-delimited list of string group names for which this asset is available for use. Leave out to assign no groups.
   */
  applicableGroups?: string;
  /**
   * - REQUIRED: The type of asset this factory will create.
   */
  assetType: string;
  /**
   * - NOT REQUIRED: The default/base asset for this factory.
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing the selected asset's ID in case it gets restored from the recycle bin.
   */
  baseAssetId?: string;
  /**
   * - NOT REQUIRED: Path works only for non-recycled assets.
   */
  baseAssetPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  baseAssetRecycled?: boolean;
  /**
   * - NOT REQUIRED: The description text for this factory which is displayed in the new menu. Defaults to null.
   */
  description?: string;
  /**
   * - NOT REQUIRED: Where assets created from this factory must be placed if specified.
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing the selected asset's ID in case it gets restored from the recycle bin.
   */
  placementFolderId?: string;
  /**
   * - NOT REQUIRED: Path works only for non-recycled assets.
   */
  placementFolderPath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  placementFolderRecycled?: boolean;
  /**
   * - NOT REQUIRED: When the placement folder is specified, this allows assets to be placed in subfolders of that folder as well. Defaults to false.
   */
  allowSubfolderPlacement?: boolean;
  /**
   * - NOT REQUIRED: Assets created from this factory will be positioned at this folder position. Defaults to 0.
   */
  folderPlacementPosition?: number;
  /**
   * - NOT REQUIRED: If an asset is created from this factory and placed in a folder with an asset of the same name, whether or not that asset will be overwritten. Defaults to false.
   */
  overwrite?: boolean;
  /**
   * - REQUIRED: What workflow behavior to use when creating assets using this asset factory.
   */
  workflowMode: "folder-controlled" | "factory-controlled" | "none";
  /**
   * - NOT REQUIRED: When workflowMode is "factory-controlled", this specifies the workflow definition to use.
   */
  workflowDefinitionId?: string;
  /**
   * - NOT REQUIRED: Defaults to empty.
   */
  workflowDefinitionPath?: string;
  /**
   * - NOT REQUIRED: An array of asset factory plugins assigned to the asset factory. Defaults to empty.
   */
  plugins?: AssetFactoryPlugins[];
};
export type AssetFactory = AssetFactoryProperties & ContaineredAsset;
export type AssetFactoryContainerProperties = {
  /**
   * - NOT REQUIRED: Semicolon-delimited list of string group names for which this asset is available for use.
   */
  applicableGroups?: string;
  /**
   * - NOT REQUIRED: String describing the asset factory container, displayed in the new menu.
   */
  description?: string;
  /**
   * - NOT REQUIRED: The array of children.
   */
  children?: ContainerChildren[];
};
export type AssetFactoryContainer = AssetFactoryContainerProperties &
  ContaineredAsset;
export type ContentTypeProperties = {
  /**
   * - One is REQUIRED: Priority: pageConfigurationSetId > pageConfigurationSetPath.
   */
  pageConfigurationSetId?: string;
  /**
   * - One is REQUIRED: Priority: pageConfigurationSetId > pageConfigurationSetPath.
   */
  pageConfigurationSetPath?: string;
  /**
   * - One is REQUIRED: Priority: metadataSetId > metadataSetPath.
   */
  metadataSetId?: string;
  /**
   * - One is REQUIRED: Priority: metadataSetId > metadataSetPath.
   */
  metadataSetPath?: string;
  /**
   * - NOT REQUIRED: Priority: dataDefinitionId > dataDefinitionPath.
   */
  dataDefinitionId?: string;
  /**
   * - NOT REQUIRED: Priority: dataDefinitionId > dataDefinitionPath.
   */
  dataDefinitionPath?: string;
  /**
   * - NOT REQUIRED: Priority: editorConfigurationId > editorConfigurationPath.
   */
  editorConfigurationId?: string;
  /**
   * - NOT REQUIRED: Priority: editorConfigurationId > editorConfigurationPath.
   */
  editorConfigurationPath?: string;
  /**
   * - NOT REQUIRED: Priority: publishSetId > publishSetPath.
   */
  publishSetId?: string;
  /**
   * - NOT REQUIRED: Priority: publishSetId > publishSetPath.
   */
  publishSetPath?: string;
  /**
   * - NOT REQUIRED: - if not specified, the default publish mode "all-destinations" is used for each pageConfiguration.
   */
  contentTypePageConfigurations?: ContentTypePageConfigurations[];
  /**
   * - NOT REQUIRED: - if not specified, none of the regions or fields will be inline editable.
   */
  inlineEditableFields?: InlineEditableFields[];
};
export type ContentType = ContentTypeProperties & ContaineredAsset;
export type ContentTypeContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children (identifiers)
   */
  children?: ContainerChildren[];
};
export type ContentTypeContainer = ContentTypeContainerProperties &
  ContaineredAsset;
export type ConnectorContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children (identifiers)
   */
  children?: ContainerChildren[];
};
export type ConnectorContainer = ConnectorContainerProperties &
  ContaineredAsset;
export type FacebookConnectorProperties = any;
export type FacebookConnector = StatusUpdateConnector;
export type WordPressConnectorProperties = any;
export type WordPressConnector = Connector;
export type GoogleAnalyticsConnectorProperties = any;
export type GoogleAnalyticsConnector = Connector;
export type PageConfigurationSetProperties = {
  /**
   * - REQUIRED: The individual page configurations contained within this set.
   */
  pageConfigurations: PageConfigurations[];
};
export type PageConfigurationSet = PageConfigurationSetProperties &
  ContaineredAsset;
export type PageConfigurationSetContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children assets.
   */
  children?: ContainerChildren[];
};
export type PageConfigurationSetContainer =
  PageConfigurationSetContainerProperties & ContaineredAsset;
export type DataDefinitionProperties = {
  /**
   * - REQUIRED: The XML content of this data definition.
   */
  xml: string;
};
export type DataDefinition = DataDefinitionProperties & ContaineredAsset;
export type DataDefinitionContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children.
   */
  children?: ContainerChildren[];
};
export type DataDefinitionContainer = DataDefinitionContainerProperties &
  ContaineredAsset;
export type SharedFieldProperties = {
  /**
   * - REQUIRED: The XML content of this shared field.
   */
  xml: string;
};
export type SharedField = SharedFieldProperties & ContaineredAsset;
export type SharedFieldContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children.
   */
  children?: ContainerChildren[];
};
export type SharedFieldContainer = SharedFieldContainerProperties &
  ContaineredAsset;
export type MetadataSetProperties = {
  /**
   * - NOT REQUIRED: Whether the author field is required on assets using this metadata set. Default is false.
   */
  authorFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the author field for assets using this metadata set. Default is 'visible'.
   */
  authorFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the author field.
   */
  authorFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the description field is required on assets using this metadata set. Default is false.
   */
  descriptionFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the description field for assets using this metadata set. Default is 'visible'.
   */
  descriptionFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the description field.
   */
  descriptionFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the display name field is required on assets using this metadata set. Default is false.
   */
  displayNameFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the display name field for assets using this metadata set. Default is 'visible'.
   */
  displayNameFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the display name field.
   */
  displayNameFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the end date field is required on assets using this metadata set. Default is false.
   */
  endDateFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the end date field for assets using this metadata set. Default is 'visible'.
   */
  endDateFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the end date field.
   */
  endDateFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the expiration folder field is required on assets using this metadata set. Default is false.
   */
  expirationFolderFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the expiration folder field for assets using this metadata set. Default is 'visible'.
   */
  expirationFolderFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the expiration folder field.
   */
  expirationFolderFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the keywords field is required on assets using this metadata set. Default is false.
   */
  keywordsFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the keywords field for assets using this metadata set. Default is 'visible'.
   */
  keywordsFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the keywords field.
   */
  keywordsFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the review date field is required on assets using this metadata set. Default is false.
   */
  reviewDateFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the review date field for assets using this metadata set. Default is 'visible'.
   */
  reviewDateFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the review date field.
   */
  reviewDateFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the start date field is required on assets using this metadata set. Default is false.
   */
  startDateFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the start date field for assets using this metadata set. Default is 'visible'.
   */
  startDateFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the start date field.
   */
  startDateFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the summary field is required on assets using this metadata set. Default is false.
   */
  summaryFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the summary field for assets using this metadata set. Default is 'visible'.
   */
  summaryFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the summary field.
   */
  summaryFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the teaser field is required on assets using this metadata set. Default is false.
   */
  teaserFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the teaser field for assets using this metadata set. Default is 'visible'.
   */
  teaserFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the teaser field.
   */
  teaserFieldHelpText?: string;
  /**
   * - NOT REQUIRED: Whether the title field is required on assets using this metadata set. Default is false.
   */
  titleFieldRequired?: boolean;
  /**
   * - NOT REQUIRED: The visibility of the title field for assets using this metadata set. Default is 'visible'.
   */
  titleFieldVisibility?: MetadataFieldVisibility;
  /**
   * - NOT REQUIRED: The help text for the title field.
   */
  titleFieldHelpText?: string;
  /**
   * - NOT REQUIRED: The dynamic metadata field definitions.
   */
  dynamicMetadataFieldDefinitions?: DynamicMetadataFieldDefinitions[];
};
export type MetadataSet = MetadataSetProperties & ContaineredAsset;
export type MetadataSetContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children.
   */
  children?: ContainerChildren[];
};
export type MetadataSetContainer = MetadataSetContainerProperties &
  ContaineredAsset;
export type PublishSetProperties = {
  /**
   * - NOT REQUIRED: A list of files that is included in this publish set. Default is empty.
   */
  files?: PublishableAssetList[];
  /**
   * - NOT REQUIRED: A list of folders that is included in this publish set. Default is empty.
   */
  folders?: PublishableAssetList[];
  /**
   * - NOT REQUIRED: A list of pages that is included in this publish set. Default is empty.
   */
  pages?: PublishableAssetList[];
  /**
   * - NOT REQUIRED: Whether or not to publish this set on a schedule. Default is false.
   */
  usesScheduledPublishing?: boolean;
  /**
   * - NOT REQUIRED: Scheduled publish destination selection mode.
   */
  scheduledPublishDestinationMode?: ScheduledDestinationMode;
  /**
   * - NOT REQUIRED: Used in conjunction with scheduledPublishDestinationMode when destinations are to be specified explicitly.
   */
  scheduledPublishDestinations?: DestinationList[];
  /**
   * - NOT REQUIRED: The base time this set will be published. Default is 00:00 (midnight).
   */
  timeToPublish?: string;
  /**
   * - NOT REQUIRED: Every how many hours the asset should be published. Can be between 1 and 23.
   */
  publishIntervalHours?: number;
  /**
   * - NOT REQUIRED: Which days of the week the job should publish on.
   */
  publishDaysOfWeek?: DaysOfWeek[];
  /**
   * - NOT REQUIRED: Cron expression for scheduled publishing.
   */
  cronExpression?: string;
  /**
   * - NOT REQUIRED: Semicolon-delimited list of string user names for which this asset is available for use.
   */
  sendReportToUsers?: string;
  /**
   * - NOT REQUIRED: Semicolon-delimited list of string group names for which this asset is available for use.
   */
  sendReportToGroups?: string;
  /**
   * - NOT REQUIRED: Whether or not to send a report when there are no errors. Default is false.
   */
  sendReportOnErrorOnly?: boolean;
};
export type PublishSet = PublishSetProperties & ContaineredAsset;
export type PublishSetContainerProperties = any;
export type PublishSetContainer = ContaineredAsset;
export type TargetProperties = {
  /**
   * - Priority: parentTargetId > parentTargetPath
   * - One is REQUIRED
   */
  parentTargetId?: string;
  /**
   * - Priority: parentTargetId > parentTargetPath
   * - One is REQUIRED
   */
  parentTargetPath?: string;
  /**
   * - The path of this target. When creating this need not be specified. When editing this will be the CURRENT path of the target.
   */
  path?: string;
  /**
   * - Priority: baseFolderId > baseFolderPath
   * - One is REQUIRED
   */
  baseFolderId?: string;
  /**
   * - Priority: baseFolderId > baseFolderPath
   * - One is REQUIRED
   */
  baseFolderPath?: string;
  /**
   * - REQUIRED: The output file extension, for example ".html"
   */
  outputExtension: string;
  /**
   * - The CSS classes that pages using this target will have available to them in the WYSIWYG editor (comma-delimted list)
   * - NOT REQUIRED default: empty
   */
  cssClasses?: string;
  /**
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id in case if the selected asset gets restored from the recycle bin.
   * - Priority: cssFileId > cssFilePath
   */
  cssFileId?: string;
  /**
   * - Path works only for non-recycled assets
   */
  cssFilePath?: string;
  /**
   * - For reading purposes only. Ignored when editing, copying etc.
   */
  cssFileRecycled?: boolean;
  /**
   * - REQUIRED: The content type this target serializes its output as
   */
  serializationType: SerializationType;
  /**
   * - When the serializationType is "XML", should Cascade include the XML declaration in published files?
   * - NOT REQUIRED default: false
   */
  includeXMLDeclaration?: boolean;
  /**
   * - When publishing, whether or not to include the target path as part of the path of the published file
   * - NOT REQUIRED default: false
   */
  includeTargetPath?: boolean;
  /**
   * - When publishing, whether or not to remove the base folder's path from the path of the published file
   * - NOT REQUIRED default: false
   */
  removeBaseFolder?: boolean;
  /**
   * - Whether or not to publish this set on a schedule
   * - NOT REQUIRED default: false
   */
  usesScheduledPublishing?: boolean;
  /**
   * - Scheduled publish destination selection mode
   * - NOT REQUIRED
   */
  scheduledPublishDestinationMode?: string;
  /**
   * - Used in conjunction with scheduledPublishDestinationMode when destinations are to be specified explicitly
   * - NOT REQUIRED
   */
  scheduledPublishDestinations?: DestinationList[];
  /**
   * - The base time this set will be published. For example if one wanted this set to publish at 0100, 0500, 0900, 1300, 1700, 2100, I would enter one of those times here and set the "publishInterval" to 4, and the "publishIntervalUnits" to "hours"
   * - NOT REQUIRED default: 00:00 (midnight), if cronExpression provided or usesScheduledPublishing is false, ignored
   */
  timeToPublish?: string;
  /**
   * - Every how many hours the asset should be published. Can be between 1 and 23
   * - One of the following 3 is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
   */
  publishIntervalHours?: number;
  /**
   * - Which days of the week the job should publish on - select all days to have a daily publish
   * - One of the following 3 is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
   */
  publishDaysOfWeek?: DaysOfWeek[];
  /**
   * - Applicable only if publishInterval Units is "cron" - only a valid Cron Expression will be accepted
   * - One of the following 3 is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
   */
  cronExpression?: string;
  /**
   * - Semicolon-delimited list of string user names for which this asset is available for use
   * - NOT REQUIRED leave out to assign no users
   */
  sendReportToUsers?: string;
  /**
   * - Semicolon-delimited list of string group names for which this asset is available for use
   * - NOT REQUIRED leave out to assign no groups
   */
  sendReportToGroups?: string;
  /**
   * - Whether or not to send a report when there are no errors
   * - NOT REQUIRED default: false
   */
  sendReportOnErrorOnly?: boolean;
  /**
   * - NOT REQUIRED: The array of children
   */
  children?: ContainerChildren[];
};
export type Target = TargetProperties & NamedAsset;
export type SiteDestinationContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children assets.
   */
  children?: ContainerChildren[];
};
export type SiteDestinationContainer = SiteDestinationContainerProperties &
  ContaineredAsset;
export type DestinationProperties = {
  /**
   * - Priority: parentContainerId > parentContainerPath
   * - One is REQUIRED
   * - When inside a Site, this field must refer to a SiteDestinationContainer.
   * - When not in a Site, this field must refer to a Target
   */
  parentContainerId?: string;
  /**
   * - Priority: parentContainerId > parentContainerPath
   * - One is REQUIRED
   * - When inside a Site, this field must refer to a SiteDestinationContainer.
   * - When not in a Site, this field must refer to a Target
   */
  parentContainerPath?: string;
  /**
   * - Priority: transportId > transportPath
   * - One is REQUIRED
   */
  transportId?: string;
  /**
   * - Priority: transportId > transportPath
   * - One is REQUIRED
   */
  transportPath?: string;
  /**
   * - Semicolon-delimited list of string group names
   * - NOT REQUIRED
   */
  applicableGroups?: string;
  /**
   * - The directory to place the published files in
   * - NOT REQUIRED
   */
  directory?: string;
  /**
   * - Whether or not this destination is enabled for publishing
   * - NOT REQUIRED
   */
  enabled?: boolean;
  /**
   * - Whether or not this destination is checked by default
   * - NOT REQUIRED
   */
  checkedByDefault?: boolean;
  /**
   * - Whether or not to only publish ASCII characters
   * - NOT REQUIRED
   */
  publishASCII?: boolean;
  /**
   * - Whether or not to publish this set on a schedule
   * - NOT REQUIRED
   */
  usesScheduledPublishing?: boolean;
  /**
   * - Not used, will be ignored if any value is set
   */
  scheduledPublishDestinationMode?: ScheduledDestinationMode;
  /**
   * - Not used, will be ignored if any value is set
   */
  scheduledPublishDestinations?: DestinationList[];
  /**
   * - The base time this set will be published.
   * For example if one wanted this set to publish at 0100, 0500, 0900, 1300, 1700, 2100, I would enter
   * one of those times here and set the "publishInterval" to 4, and the
   * "publishIntervalUnits" to "hours"
   * - NOT REQUIRED default: 00:00 (midnight), if cronExpression provided or usesScheduledPublishing is false, ignored
   */
  timeToPublish?: string;
  /**
   * - Every how many hours the asset should be published. Can be between 1 and 23
   * - One is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
   */
  publishIntervalHours?: number;
  /**
   * - Which days of the week the job should publish on
   * - One is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
   */
  publishDaysOfWeek?: DaysOfWeek[];
  /**
   * - Applicable only if publishInterval Units is "cron"
   * - One is REQUIRED if usesScheduledPublishing is true, else NOT REQUIRED and ignored
   */
  cronExpression?: string;
  /**
   * - Semicolon-delimited list of string user names
   * - NOT REQUIRED
   */
  sendReportToUsers?: string;
  /**
   * - Semicolon-delimited list of string group names
   * - NOT REQUIRED
   */
  sendReportToGroups?: string;
  /**
   * - Whether or not to send a report when there are no errors
   * - NOT REQUIRED
   */
  sendReportOnErrorOnly?: boolean;
  /**
   * - The base URL for linking to a given configuration during publishing
   * - NOT REQUIRED
   */
  webUrl?: string;
  /**
   * - Comma-separated list of extensions to strip from links
   * - NOT REQUIRED
   */
  extensionsToStrip?: string;
  /**
   * - Priority: siteId > siteName
   * - One is REQUIRED
   */
  siteId?: string;
  /**
   * - Priority: siteId > siteName
   * - One is REQUIRED
   */
  siteName?: string;
};
export type Destination = DestinationProperties & NamedAsset;
export type FileSystemTransportProperties = {
  /**
   * - REQUIRED
   * - The directory to output the files to, for example "c:\inetfiles\wwwroot"
   */
  directory: string;
};
export type FileSystemTransport = FileSystemTransportProperties &
  ContaineredAsset;
export type FtpTransportProperties = {
  /**
   * - REQUIRED
   * - The host name or IP address of the remote server
   */
  hostName: string;
  /**
   * - REQUIRED
   * - The port to use to connect to the server
   */
  port: number;
  /**
   * - NOT REQUIRED: default: false
   * - Whether or not to connect using PASV mode FTP
   */
  doPASV?: boolean;
  /**
   * - REQUIRED
   * - The username to use when connecting to the server
   */
  username: string;
  /**
   * - REQUIRED when ftpProtocolType is SFTP
   * - The authentication mode to use when connecting to the server. Applicable only when ftpProtocolType is SFTP
   */
  authMode?: AuthMode;
  /**
   * - NOT REQUIRED: default: empty
   * - The key to use when connecting to the server. Applicable only when ftpProtocolType is SFTP and authMode is "PUBLIC_KEY"
   */
  privateKey?: string;
  /**
   * - REQUIRED when ftpProtocolType is FTP or FTPS or when ftpProtocolType is SFTP and authMode is "PASSWORD"
   * - The password to use when connecting to the server
   */
  password?: string;
  /**
   * - NOT REQUIRED: default: empty
   * - The directory to place the files in
   */
  directory?: string;
  /**
   * - REQUIRED: default: ftp
   * - Whether or not to connect using regular FTP, FTP over SSL/TLS, or SFTP using secure FTP (SSH protocol)
   */
  ftpProtocolType: FtpProtocolType;
};
export type FtpTransport = FtpTransportProperties & ContaineredAsset;
export type DatabaseTransportProperties = {
  /**
   * - REQUIRED
   * - The site id
   */
  transportSiteId: number;
  /**
   * - REQUIRED
   * - The name of the database server
   */
  serverName: string;
  /**
   * - REQUIRED
   * - The port on which the database server is working
   */
  serverPort: number;
  /**
   * - REQUIRED
   * - The name of the database itself
   */
  databaseName: string;
  /**
   * - REQUIRED
   * - The username to use when connecting to the server
   */
  username: string;
  /**
   * - NOT REQUIRED: default: empty string
   * - The password to use when connecting to the server
   */
  password?: string;
};
export type DatabaseTransport = DatabaseTransportProperties & ContaineredAsset;
export type CloudTransportProperties = {
  /**
   * - REQUIRED
   * - The S3 key
   */
  key: string;
  /**
   * - REQUIRED
   * - The S3 secret
   */
  secret: string;
  /**
   * - REQUIRED
   * - The name of the S3 bucket
   */
  bucketName: string;
  /**
   * - NOT REQUIRED: default: empty
   * - The directory to place the files in
   */
  basePath?: string;
};
export type CloudTransport = CloudTransportProperties & ContaineredAsset;
export type TransportContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children assets.
   */
  children?: ContainerChildren[];
};
export type TransportContainer = TransportContainerProperties &
  ContaineredAsset;
export type WorkflowDefinitionProperties = {
  /**
   * - NOT REQUIRED: leave out to assign no groups
   * - Semicolon-delimited list of string group names for which this asset is available for use
   */
  applicableGroups?: string;
  /**
   * - NOT REQUIRED: default: false
   * - Whether or not this is a copy type workflow
   */
  copy?: boolean;
  /**
   * - NOT REQUIRED: default: false
   * - Whether or not this is a create type workflow
   */
  create?: boolean;
  /**
   * - NOT REQUIRED: default: false
   * - Whether or not this is a delete type workflow
   */
  delete?: boolean;
  /**
   * - NOT REQUIRED: default: false
   * - Whether or not this is an edit type workflow
   */
  edit?: boolean;
  /**
   * - NOT REQUIRED: default: false
   * - Whether or not this is a move type workflow
   */
  move?: boolean;
  /**
   * - REQUIRED
   * - The naming behavior when an instance of this workflow is created
   */
  namingBehavior: WorkflowNamingBehavior;
  /**
   * - REQUIRED
   * - The actual workflow definition XML
   */
  xml: string;
  /**
   * - NOT REQUIRED
   * - Custom workflow email to send when email trigger set to completed
   */
  completedWorkflowEmailId?: string;
  /**
   * - NOT REQUIRED
   */
  completedWorkflowEmailPath?: string;
  /**
   * - NOT REQUIRED
   * - Custom workflow email to send when email trigger set to notify
   */
  notificationWorkflowEmailId?: string;
  /**
   * - NOT REQUIRED
   */
  notificationWorkflowEmailPath?: string;
};
export type WorkflowDefinition = WorkflowDefinitionProperties &
  ContaineredAsset;
export type WorkflowDefinitionContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children assets.
   */
  children?: ContainerChildren[];
};
export type WorkflowDefinitionContainer =
  WorkflowDefinitionContainerProperties & ContaineredAsset;
export type WorkflowEmailProperties = {
  /**
   * - REQUIRED
   * - The subject of this email
   */
  subject: string;
  /**
   * - REQUIRED
   * - The body of this email
   */
  body: string;
};
export type WorkflowEmail = WorkflowEmailProperties & ContaineredAsset;
export type WorkflowEmailContainerProperties = {
  /**
   * - NOT REQUIRED: The array of children assets.
   */
  children?: ContainerChildren[];
};
export type WorkflowEmailContainer = WorkflowEmailContainerProperties &
  ContaineredAsset;
export type SiteProperties = {
  /**
   * - REQUIRED: The site URL
   */
  url: string;
  /**
   * - NOT REQUIRED: A comma-separated list of extensions that should be stripped from cross-site links pointing to assets in this site. Default: empty
   */
  extensionsToStrip?: string;
  /**
   * - NOT REQUIRED: The default metadata set for the site by ID.
   * - Priority: defaultMetadataSetId > defaultMetadataSetPath
   */
  defaultMetadataSetId?: string;
  /**
   * - NOT REQUIRED: The default metadata set for the site by path.
   * - Priority: defaultMetadataSetId > defaultMetadataSetPath
   */
  defaultMetadataSetPath?: string;
  /**
   * - NOT REQUIRED: Defines the site asset factory container relationship by ID.
   * - Priority: siteAssetFactoryContainerId > siteAssetFactoryContainerPath
   * - This asset factory container will determine which asset factories
   * show on that user's dashboard under the "My New Content Wizards" section in the site.
   */
  siteAssetFactoryContainerId?: string;
  /**
   * - NOT REQUIRED: Defines the site asset factory container relationship by path.
   * - Priority: siteAssetFactoryContainerId > siteAssetFactoryContainerPath
   * - This asset factory container will determine which asset factories
   * show on that user's dashboard under the "My New Content Wizards" section in the site.
   */
  siteAssetFactoryContainerPath?: string;
  /**
   * - NOT REQUIRED: Default editor configuration by ID. Priority: defaultEditorConfigurationId > defaultEditorConfigurationPath
   */
  defaultEditorConfigurationId?: string;
  /**
   * - NOT REQUIRED: Default editor configuration by path.
   */
  defaultEditorConfigurationPath?: string;
  /**
   * - NOT REQUIRED: Defines the site starting page relationship by ID. Overrides the global starting page.
   * - Priority: siteStartingPageId > siteStartingPagePath
   * - This starting page will override the global starting page set in the system preferences
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
   * in case if the selected asset gets restored from the recycle bin.
   */
  siteStartingPageId?: string;
  /**
   * - NOT REQUIRED: Defines the site starting page relationship by path. Overrides the global starting page. Only for non-recycled assets.
   * - Priority: siteStartingPageId > siteStartingPagePath
   * - This starting page will override the global starting page set in the system preferences
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
   * in case if the selected asset gets restored from the recycle bin.
   */
  siteStartingPagePath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Indicates if the site starting page is recycled.
   */
  siteStartingPageRecycled?: boolean;
  /**
   * - NOT REQUIRED: Role assignments for the site.
   */
  roleAssignments?: RoleAssignments[];
  /**
   * - NOT REQUIRED: Whether or not to publish this set on a schedule. Default: false
   */
  usesScheduledPublishing?: boolean;
  /**
   * - NOT REQUIRED: Scheduled publish destination selection mode.
   */
  scheduledPublishDestinationMode?: ScheduledDestinationMode;
  /**
   * - NOT REQUIRED: Destinations to be explicitly specified for scheduled publish.
   * - Used in conjunction with scheduledPublishDestinationMode when destinations are to be specified explicitly
   */
  scheduledPublishDestinations?: DestinationList[];
  /**
   * - NOT REQUIRED: The base time this set will be published. default: 00:00 (midnight), if cronExpression provided or usesScheduledPublishing is false, ignored
   * - The base time this set will be published. For example if one wanted
   * this set to publish at 0100, 0500, 0900, 1300, 1700, 2100, I would enter
   * one of those times here and set the "publishInterval" to 4, and the
   * "publishIntervalUnits" to "hours"
   */
  timeToPublish?: string;
  /**
   * - Optional: Interval in hours for publishing. One of the choices for scheduled publishing.
   * - Every how many hours the asset should be published. Can be between 1 and 23
   */
  publishIntervalHours?: number;
  /**
   * - Optional: Days of the week for publishing. One of the choices for scheduled publishing.
   * - Which days of the which the job should publish on - select all days to have a daily publish
   */
  publishDaysOfWeek?: DaysOfWeek[];
  /**
   * - Optional: Cron expression for scheduled publishing. One of the choices for scheduled publishing.
   * - Applicable only if publishInterval Units is "cron" - only a valid Cron Expression will be accepted
   */
  cronExpression?: string;
  /**
   * - NOT REQUIRED: Semicolon-delimited list of user names for which this asset is available.
   */
  sendReportToUsers?: string;
  /**
   * - NOT REQUIRED: Semicolon-delimited list of group names for which this asset is available.
   */
  sendReportToGroups?: string;
  /**
   * - NOT REQUIRED: Whether to send a report only when there are errors. Default: false
   */
  sendReportOnErrorOnly?: boolean;
  /**
   * - REQUIRED: The recycle bin expiration time.
   */
  recycleBinExpiration: RecycleBinExpiration;
  /**
   * - REQUIRED: Unpublish assets when moved to expiration folder.
   */
  unpublishOnExpiration: boolean;
  /**
   * - REQUIRED: Generate broken link report on schedule.
   */
  linkCheckerEnabled: boolean;
  /**
   * - REQUIRED: Check external links when publishing assets.
   */
  externalLinkCheckOnPublish: boolean;
  /**
   * - REQUIRED
   */
  inheritDataChecksEnabled: boolean;
  /**
   * - REQUIRED
   */
  spellCheckEnabled: boolean;
  /**
   * - REQUIRED
   */
  linkCheckEnabled: boolean;
  /**
   * - REQUIRED
   */
  accessibilityCheckEnabled: boolean;
  /**
   * - REQUIRED: Determines whether naming rules are inherited from the system preferences.
   * - If true, the rule properties will be ignored when saving, but old values are preserved.
   * Otherwise, null values will be defaulted to appropriate values when saving.
   * Naming rules read from a site may be null.
   */
  inheritNamingRules: boolean;
  /**
   * - Optional: Defines what case a name can be. Depends on inheritNamingRules.
   */
  namingRuleCase?: NamingRuleCase;
  /**
   * - Optional: Defines how spaces are handled for names. Depends on inheritNamingRules.
   */
  namingRuleSpacing?: NamingRuleSpacing;
  /**
   * - Optional: Defines the asset types that enforce naming rules. Depends on inheritNamingRules.
   */
  namingRuleAssets?: NamingRuleAssets[];
  /**
   * - REQUIRED: Generate accessibility report on schedule.
   */
  accessibilityCheckerEnabled: boolean;
  /**
   * - NOT REQUIRED: Enables Siteimprove integration.
   */
  siteImproveIntegrationEnabled?: boolean;
  /**
   * - NOT REQUIRED: Alternative URL for Siteimprove.
   */
  siteImproveUrl?: string;
  /**
   * - NOT REQUIRED: Enables Widen Collective DAM integration.
   */
  widenDamIntegrationEnabled?: boolean;
  /**
   * - NOT REQUIRED: Widen Collective category for search results.
   */
  widenDamIntegrationCategory?: string;
  /**
   * - NOT REQUIRED: Enables Webdam DAM integration.
   */
  webdamDamIntegrationEnabled?: boolean;
  /**
   * - NOT REQUIRED: The root folder id, used only when reading a site. Ignored in other cases.
   */
  rootFolderId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootAssetFactoryContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootPageConfigurationSetContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootContentTypeContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootConnectorContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootDataDefinitionContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootSharedFieldContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootMetadataSetContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootPublishSetContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootSiteDestinationContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootTransportContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootWorkflowDefinitionContainerId?: string;
  /**
   * - NOT REQUIRED: Used only when reading a site. Ignored in other cases.
   */
  rootWorkflowEmailContainerId?: string;
  /**
   * - NOT REQUIRED: Default is "absolute".
   */
  linkRewriting?: LinkRewriting;
};
export type Site = SiteProperties & NamedAsset;
export type EditorConfigurationProperties = {
  /**
   * - NOT REQUIRED: when referencing the System Default Editor Configuration (id=DEFAULT, name=Default)
   * - One is REQUIRED for all other Editor Configurations
   */
  siteId?: string;
  /**
   * - NOT REQUIRED: when referencing the System Default Editor Configuration (id=DEFAULT, name=Default)
   * - One is REQUIRED for all other Editor Configurations
   */
  siteName?: string;
  /**
   * - NOT REQUIRED:
   * - Priority: cssFileId > cssFilePath
   * - When editing and selected asset is recycled, it is recommended to preserve this relationship by providing selected asset's id
   * in case if the selected asset gets restored from the recycle bin.
   */
  cssFileId?: string;
  /**
   * - NOT REQUIRED:
   * - Priority: cssFileId > cssFilePath
   * - Path works only for non-recycled assets
   */
  cssFilePath?: string;
  /**
   * - NOT REQUIRED: For reading purposes only. Ignored when editing, copying, etc.
   */
  cssFileRecycled?: boolean;
  /**
   * - JSON String for the configuration
   */
  configuration: string;
};
export type EditorConfiguration = EditorConfigurationProperties & NamedAsset;
export type AssetProperties = {
  workflowConfiguration?: WorkflowConfiguration;
  /**
   * - One is REQUIRED
   */
  feedBlock?: FeedBlock;
  /**
   * - One is REQUIRED
   */
  indexBlock?: IndexBlock;
  /**
   * - One is REQUIRED
   */
  textBlock?: TextBlock;
  /**
   * - One is REQUIRED
   */
  xhtmlDataDefinitionBlock?: XhtmlDataDefinitionBlock;
  /**
   * - One is REQUIRED
   */
  xmlBlock?: XmlBlock;
  /**
   * - One is REQUIRED
   */
  file?: File;
  /**
   * - One is REQUIRED
   */
  folder?: Folder;
  /**
   * - ONE IS REQUIRED
   */
  page?: Page;
  /**
   * - One is REQUIRED
   */
  reference?: Reference;
  /**
   * - One is REQUIRED
   */
  xsltFormat?: XsltFormat;
  /**
   * - One is REQUIRED
   */
  scriptFormat?: ScriptFormat;
  /**
   * - One is REQUIRED
   */
  symlink?: Symlink;
  /**
   * - One is REQUIRED
   */
  template?: Template;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  user?: User;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  group?: Group;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  role?: Role;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  assetFactory?: AssetFactory;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  assetFactoryContainer?: AssetFactoryContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  contentType?: ContentType;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  contentTypeContainer?: ContentTypeContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  connectorContainer?: ConnectorContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  facebookConnector?: FacebookConnector;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  wordPressConnector?: WordPressConnector;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  googleAnalyticsConnector?: GoogleAnalyticsConnector;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  pageConfigurationSet?: PageConfigurationSet;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  pageConfigurationSetContainer?: PageConfigurationSetContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  dataDefinition?: DataDefinition;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  dataDefinitionContainer?: DataDefinitionContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  sharedField?: SharedField;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  sharedFieldContainer?: SharedFieldContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  metadataSet?: MetadataSet;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  metadataSetContainer?: MetadataSetContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  publishSet?: PublishSet;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  publishSetContainer?: PublishSetContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  target?: Target;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  siteDestinationContainer?: SiteDestinationContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  destination?: Destination;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  fileSystemTransport?: FileSystemTransport;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  ftpTransport?: FtpTransport;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  databaseTransport?: DatabaseTransport;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  cloudTransport?: CloudTransport;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  transportContainer?: TransportContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  workflowDefinition?: WorkflowDefinition;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  workflowDefinitionContainer?: WorkflowDefinitionContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  workflowEmail?: WorkflowEmail;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  workflowEmailContainer?: WorkflowEmailContainer;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  twitterFeedBlock?: TwitterFeedBlock;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  site?: Site;
  /**
   * - One is REQUIRED
   * - Admin area assets (must be manager or higher to access, no workflowConfiguration needed
   */
  editorConfiguration?: EditorConfiguration;
};
export type Asset = {
  /**
   * - REQUIRED: Asset object container
   * - Asset is an aggregate type that includes all possible Cascade Server assets bundled with workflow configuration. When a user does not have the privileges to bypass workflow, this configuration is used to configure the step assignments of the workflow
   */
  asset: AssetProperties;
};
export type ReadRequest = {
  /**
   * - REQUIRED: Parameters used when reading an asset
   */
  identifier: Identifier;
};
export type ReadResponseProperties = Asset;
export type ReadResponse = OperationResult & ReadResponseProperties;
export type DeleteParametersProperties = {
  doWorkflow: boolean;
};
/**
 * - Parameters used when deleting an asset
 */
export type DeleteParameters = UnpublishParameters & DeleteParametersProperties;
export type RemoveRequest = {
  /**
   * - REQUIRED: Parameters used when reading an asset
   */
  identifier: Identifier;
  /**
   * - NOT REQUIRED: For configuring workflow
   */
  workflowConfiguration?: WorkflowConfiguration;
  /**
   * - NOT REQUIRED: Parameters used when deleting an asset
   */
  deleteParameters?: DeleteParameters;
};
export type RemoveResponse = OperationResult;
export type EditRequest = Asset;
export type EditResponse = OperationResult;
export type CreateRequest = Asset;
export type CreateResponseProperties = {
  /**
   * - The id of the asset created
   */
  createdAssetId: string;
};
export type CreateResponse = OperationResult & CreateResponseProperties;
export type MoveParametersProperties = {
  /**
   * - NOT REQUIRED: The container into which the asset will be moved. If left empty, the asset will remain in its current container.
   */
  destinationContainerIdentifier?: Identifier;
  /**
   * - Determines if a workflow should be executed.
   */
  doWorkflow: boolean;
  /**
   * - NOT REQUIRED: Name to give the asset. If left empty, the asset's name will not be changed.
   */
  newName?: string;
};
export type MoveParameters = UnpublishParameters & MoveParametersProperties;
export type MoveRequest = {
  /**
   * - REQUIRED: Parameters used when reading an asset
   */
  identifier: Identifier;
  /**
   * - NOT REQUIRED: For configuring workflow
   */
  workflowConfiguration?: WorkflowConfiguration;
  moveParameters: MoveParameters;
};
export type MoveResponse = OperationResult;
/**
 * - Asset fields to search (e.g. name, title, content), see searchField simpleType for valid values
 */
export type SearchFieldString =
  | "name"
  | "path"
  | "createdBy"
  | "modifiedBy"
  | "displayName"
  | "title"
  | "summary"
  | "teaser"
  | "keywords"
  | "description"
  | "author"
  | "blob"
  | "velocityFormatContent"
  | "xml"
  | "link";
export type SearchFields = SearchFieldString;
export type SearchTypes = EntityTypeString;
export type SearchInformation = {
  /**
   * - The search terms to use for the search query.
   */
  searchTerms: string;
  /**
   * - NOT REQUIRED: Id of the site to search. If left blank, all sites will be searched.
   */
  siteId?: string;
  /**
   * - NOT REQUIRED: Name of the site to search. If left blank, all sites will be searched.
   */
  siteName?: string;
  /**
   * - NOT REQUIRED: Asset fields to search (e.g. name, title, content).
   */
  searchFields?: SearchFields[];
  /**
   * - NOT REQUIRED: Asset types to search (e.g. page, folder, site). If left blank, all asset types will be searched.
   */
  searchTypes?: SearchTypes[];
};
export type SearchRequest = {
  searchInformation: SearchInformation;
};
export type SearchMatches = Identifier;
export type SearchResult = {
  /**
   * - The resulting found asset identifiers
   */
  matches: SearchMatches[];
};
export type SearchResponse = OperationResult & SearchResult;
export type CopyParameters = {
  /**
   * - The identifier for the destination container where the asset will be copied to.
   */
  destinationContainerIdentifier: Identifier;
  /**
   * - Indicates whether a workflow should be initiated after the copy operation.
   */
  doWorkflow: boolean;
  /**
   * - The new name for the copied asset.
   */
  newName: string;
};
export type CopyRequest = {
  /**
   * - The identifier of the asset to be copied.
   */
  identifier: Identifier;
  /**
   * - The parameters specifying how the asset should be copied.
   */
  copyParameters: CopyParameters;
  /**
   * - NOT REQUIRED: The configuration for any workflow that needs to be applied after the copy.
   */
  workflowConfiguration?: WorkflowConfiguration;
};
export type CopyResponse = OperationResult;
export type SiteCopyRequest = {
  /**
   * - The ID of the site to be copied. Takes precedence over originalSiteName if both are provided.
   * - One is REQUIRED (either originalSiteId or originalSiteName)
   */
  originalSiteId?: string;
  /**
   * - The name of the site to be copied.
   * - One is REQUIRED (either originalSiteId or originalSiteName)
   */
  originalSiteName?: string;
  /**
   * - REQUIRED: The name for the new site that will be created from the copy.
   */
  newSiteName: string;
};
export type SiteCopyResponse = OperationResult;
export type ReadAccessRightsRequest = {
  /**
   * - REQUIRED: Parameters used when reading an asset
   */
  identifier: Identifier;
};
export type ReadAccessRightsResult = {
  accessRightsInformation: AccessRightsInformation;
};
export type readAccessRightsResponse = OperationResult & ReadAccessRightsResult;
export type EditAccessRightsRequest = {
  /**
   * - REQUIRED: Complete information about the access rights of an asset or component.
   */
  accessRightsInformation: AccessRightsInformation;
  /**
   * - NOT REQUIRED: Indicates whether to apply the access rights to children. Default is false.
   * This property is not required for non-folders and non-containers.
   */
  applyToChildren?: boolean;
};
export type EditAccessRightsResponse = OperationResult;
export type ReadWorkflowSettingsRequest = {
  /**
   * - REQUIRED: Parameters used when reading an asset
   */
  identifier: Identifier;
};
export type ReadWorkflowSettingsResult = {
  /**
   * - REQUIRED: A result of reading the workflow information of a folder.
   */
  workflowSettings: WorkflowSettings;
};
export type ReadWorkflowSettingsResponse = OperationResult &
  ReadWorkflowSettingsResult;
export type EditWorkflowSettingsRequest = {
  /**
   * - REQUIRED: The workflow settings to be edited.
   */
  workflowSettings: WorkflowSettings;
  /**
   * - NOT REQUIRED: Determines whether to apply the 'inheritWorkflows' settings to children folders. Default is false.
   */
  applyInheritWorkflowsToChildren?: boolean;
  /**
   * - NOT REQUIRED: Determines whether to apply the 'requireWorkflow' settings to children folders. Default is false.
   */
  applyRequireWorkflowToChildren?: boolean;
};
export type EditWorkflowSettingsResponse = OperationResult;
export type ListSubscribersRequest = {
  /**
   * - REQUIRED: Parameters used when reading an asset
   */
  identifier: Identifier;
};
export type ListSubscribersResult = {
  /**
   * - REQUIRED: A list of asset identifiers that are subscribed.
   */
  subscribers: AssetIdentifiers[];
  /**
   * - REQUIRED: A list of asset identifiers that are manually subscribed.
   */
  manualSubscribers: AssetIdentifiers[];
};
export type ListSubscribersResponse = OperationResult & ListSubscribersResult;
export type ListMessagesRequest = any;
export type MessageProperties = {
  /**
   * - REQUIRED: Who the message was/will be sent to.
   */
  to: string;
  /**
   * - NOT REQUIRED: Who sent the message. Not necessary when sending a message.
   */
  from?: string;
  /**
   * - REQUIRED: The subject of the message.
   */
  subject: string;
  /**
   * - NOT REQUIRED: The date the message was sent. Not necessary when sending a message.
   */
  date?: string;
  /**
   * - REQUIRED: The body of the message.
   */
  body: string;
};
/**
 * - Represents a message within the system
 */
export type Message = BaseAsset & MessageProperties;
export type MessagesList = Message;
export type ListMessagesResult = {
  /**
   * - NOT REQUIRED: A list of messages.
   */
  messages?: MessagesList[];
};
export type ListMessagesResponse = OperationResult & ListMessagesResult;
/**
 * - For marking messages - read or unread
 */
export type MessageMarkType = "read" | "unread";
export type MarkMessageRequest = {
  /**
   * - REQUIRED: Identifier for the message.
   */
  identifier: Identifier;
  /**
   * - REQUIRED: The type of mark to apply to the message.
   * - For marking messages - read or unread
   */
  markType: MessageMarkType;
};
export type MarkMessageResponse = OperationResult;
export type DeleteMessageRequest = {
  /**
   * - REQUIRED: Identifier for the message.
   */
  identifier: Identifier;
};
export type DeleteMessageResponse = OperationResult;
export type CheckOutRequest = {
  /**
   * - REQUIRED: Identifier for the message.
   */
  identifier: Identifier;
};
export type CheckOutResult = {
  /**
   * - NOT REQUIRED: Identifier for the working copy.
   */
  workingCopyIdentifier?: Identifier;
};
export type CheckOutResponse = OperationResult & CheckOutResult;
export type CheckInRequest = {
  /**
   * - REQUIRED: Identifier for the message.
   */
  identifier: Identifier;
};
export type CheckInResponse = OperationResult;
export type ListSitesRequest = any;
export type ListSitesResult = {
  /**
   * - REQUIRED: The identifiers for the sites.
   */
  sites: AssetIdentifiers[];
};
export type ListSitesResponse = OperationResult & ListSitesResult;
/**
 * - Represents the different kinds of audits in the system
 */
export type AuditTypes =
  | "login"
  | "login_failed"
  | "logout"
  | "start_workflow"
  | "advance_workflow"
  | "edit"
  | "copy"
  | "create"
  | "reference"
  | "delete"
  | "delete_unpublish"
  | "check_in"
  | "check_out"
  | "activate_version"
  | "publish"
  | "unpublish"
  | "recycle"
  | "restore"
  | "move";
export type AuditParameters = {
  /**
   * - NOT REQUIRED: Filter the assets by a certain entity.
   */
  identifier?: Identifier;
  /**
   * - NOT REQUIRED: Filter the audits by a given user name.
   */
  username?: string;
  /**
   * - NOT REQUIRED: Filter the audits by a given group name. The audits for all users in the group will be returned.
   */
  groupname?: string;
  /**
   * - NOT REQUIRED: Filter the audits by a given role.
   */
  rolename?: string;
  /**
   * - NOT REQUIRED: Filter the audits by a start time. Only audits for events that happened after this time will be included.
   */
  startDate?: string;
  /**
   * - NOT REQUIRED: Filter the audits by an end time. Only audits for events that happened before this time will be included.
   */
  endDate?: string;
  /**
   * - NOT REQUIRED: Filter the audits by an audit type. Only audits of this type will be returned in the response.
   */
  auditType?: AuditTypes;
};
export type ReadAuditsRequest = {
  /**
   * - REQUIRED: The parameters for the audit.
   */
  auditParameters: AuditParameters;
};
export type Audit = {
  /**
   * - REQUIRED: The user that performed the audited action
   */
  user: string;
  /**
   * - REQUIRED: The type of action the user performed
   */
  action: AuditTypes;
  /**
   * - NOT REQUIRED: The identifier identifying the asset the action was performed on, if any
   */
  identifier?: Identifier;
  /**
   * - REQUIRED: The date and time the action was performed
   */
  date: string;
};
/**
 * - An array of audits
 */
export type Audits = Audit;
export type ReadAuditsResult = {
  /**
   * - REQUIRED: Represents the audits in the system
   */
  audits: Audits[];
};
export type ReadAuditsResponse = OperationResult & ReadAuditsResult;
export type ReadWorkflowInformationRequest = {
  /**
   * - REQUIRED: Identifier for the message.
   */
  identifier: Identifier;
};
/**
 * - A single workflow action
 */
export type WorkflowAction = {
  /**
   * - REQUIRED: The unique name of this action
   */
  identifier: string;
  /**
   * - REQUIRED: The display label for this action
   */
  label: string;
  /**
   * - REQUIRED: The type of action: reverse, forward, next-id
   */
  actionType: string;
  /**
   * - REQUIRED: The id of the step that will result when this action is chosen by the user
   */
  nextId: string;
};
/**
 * - An array of workflowAction objects
 */
export type WorkflowActions = WorkflowAction;
/**
 * - A single workflow step
 */
export type WorkflowStep = {
  /**
   * - REQUIRED: The unique name of this step
   */
  identifier: string;
  /**
   * - REQUIRED: The display label for this step
   */
  label: string;
  /**
   * - REQUIRED: The type of step ("system", "edit", or "transition")
   */
  stepType: string;
  /**
   * - REQUIRED: The owner (user or group name) of this step
   */
  owner: string;
  /**
   * - NOT REQUIRED: The actions this step contains
   */
  actions?: WorkflowActions;
};
/**
 * - An array of workflowStep objects
 */
export type WorkflowSteps = WorkflowStep;
export type WorkflowProperties = {
  /**
   * - REQUIRED: The asset that is in this workflow
   */
  relatedEntity: Identifier;
  /**
   * - REQUIRED: The current step this workflow is at
   */
  currentStep: string;
  /**
   * - NOT REQUIRED: The ordered steps of this workflow
   */
  orderedSteps?: WorkflowSteps[];
  /**
   * - NOT REQUIRED: The unordered steps of this workflow
   */
  unorderedSteps?: WorkflowSteps[];
  /**
   * - NOT REQUIRED: The date when the workflow was initialized
   */
  startDate?: string;
  /**
   * - NOT REQUIRED: The due date of the workflow
   */
  endDate?: string;
  /**
   * - NOT REQUIRED: Custom workflow email to send when email trigger set to completed
   */
  completedWorkflowEmailId?: string;
  /**
   * - NOT REQUIRED: Custom workflow email to send when email trigger set to completed
   */
  completedWorkflowEmailPath?: string;
  /**
   * - NOT REQUIRED: Custom workflow email to send when email trigger set to notify
   */
  notificationWorkflowEmailId?: string;
  /**
   * - NOT REQUIRED: Custom workflow email to send when email trigger set to notify
   */
  notificationWorkflowEmailPath?: string;
};
/**
 * - Represents a workflow instance in progress
 */
export type Workflow = NamedAsset & WorkflowProperties;
export type ReadWorkflowInformationResult = {
  /**
   * - NOT REQUIRED: The workflow information
   */
  workflow?: Workflow;
};
export type ReadWorkflowInformationResponse = OperationResult &
  ReadWorkflowInformationResult;
export type WorkflowTransitionInformation = {
  /**
   * - REQUIRED: The id of the workflow to perform the transition on
   */
  workflowId: string;
  /**
   * - REQUIRED: The identifier of the action to transition to
   */
  actionIdentifier: string;
  /**
   * - NOT REQUIRED: The user's comment about the transition taken
   */
  transitionComment?: string;
};
export type PerformWorkflowTransitionRequest = {
  /**
   * - REQUIRED: Information related to the workflow transition
   */
  workflowTransitionInformation: WorkflowTransitionInformation;
};
export type PerformWorkflowTransitionResponse = OperationResult;
export type ReadPreferencesRequest = any;
/**
 * - Preference object for editing
 */
export type Preference = {
  /**
   * - REQUIRED: The name of the preference
   */
  name: string;
  /**
   * - REQUIRED: The value of the preference
   */
  value: string;
};
export type PreferencesList = Preference;
export type ReadPreferencesResult = {
  preferences: PreferencesList[];
};
export type ReadPreferencesResponse = OperationResult & ReadPreferencesResult;
export type PublishInformation = {
  /**
   * - NOT REQUIRED:
   * - Destinations to which the asset should be published.
   * - This field is Ignored when identifier (above) points to a Destination
   * - Publishing an asset that does not allow you to select Destinations in the Cascade UI (Publish Set or Target) *will* respect the Destinations
   * supplied here (this is an inconsistency between the UI and web services).
   * - Supplying an empty set of identifiers will publish to all Destinations
   * that are enabled and applicable for the user making the web services call.
   */
  destinations?: AssetIdentifiers;
  /**
   * - NOT REQUIRED: Whether to unpublish the asset instead of publishing it. Default: false
   * - Similar to the GUI - you can choose to unpublish the asset instead of publishing it.
   */
  unpublish?: boolean;
  /**
   * - NOT REQUIRED: Whether to publish related assets
   */
  publishRelatedAssets?: boolean;
  /**
   * - NOT REQUIRED: Whether to publish related publish sets
   */
  publishRelatedPublishSet?: boolean;
  /**
   * - NOT REQUIRED: The scheduled date for publishing the asset
   */
  scheduledDate?: string;
};
export type PublishUnpublishRequest = {
  /**
   * - REQUIRED: Identifier of the asset being published
   */
  identifier: Identifier;
  /**
   * - REQUIRED:
   */
  publishInformation: PublishInformation;
};
export type PublishUnpublishResponse = OperationResult;
