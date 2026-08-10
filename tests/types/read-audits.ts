import type { ReadAuditsRequest } from "../../types/types.d.ts";

const assetRequest = {
  identifier: {
    type: "page",
    id: "asset-123",
  },
  auditParameters: {
    auditType: "edit",
    startDate: "May 12, 2023 12:00:00 AM",
    endDate: "Aug 12, 2023 11:59:00 PM",
  },
} satisfies ReadAuditsRequest;

const userRequest = {
  auditParameters: {
    username: "sample-user",
  },
} satisfies ReadAuditsRequest;

const groupRequest = {
  auditParameters: {
    groupname: "sample-group",
    auditType: "edit",
  },
} satisfies ReadAuditsRequest;

const roleRequest = {
  auditParameters: {
    rolename: "sample-role",
  },
} satisfies ReadAuditsRequest;

const nestedAssetRequest: ReadAuditsRequest = {
  auditParameters: {
    // @ts-expect-error Asset identifiers belong at the request top level.
    identifier: {
      type: "page",
      id: "asset-123",
    },
  },
};

// @ts-expect-error A request requires an asset, user, group, or role target.
const filterOnlyRequest: ReadAuditsRequest = {
  auditParameters: {
    auditType: "edit",
  },
};

void [
  assetRequest,
  userRequest,
  groupRequest,
  roleRequest,
  nestedAssetRequest,
  filterOnlyRequest,
];
