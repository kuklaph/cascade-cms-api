import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import YAML from "yaml";

const openApiYamlPath = new URL(
  "../docs/swagger-ui/openapi.yaml",
  import.meta.url,
);
const openApiJsonPath = new URL(
  "../docs/swagger-ui/openapi.json",
  import.meta.url,
);

async function readContracts() {
  const [yamlText, jsonText] = await Promise.all([
    readFile(openApiYamlPath, "utf8"),
    readFile(openApiJsonPath, "utf8"),
  ]);
  return {
    yaml: YAML.parse(yamlText),
    json: JSON.parse(jsonText),
  };
}

describe("readAudits contract", () => {
  test("keeps the endpoint flat and places an asset identifier at request top level", async () => {
    const { yaml } = await readContracts();
    const request = yaml.components.schemas.ReadAuditsRequest;

    expect(yaml.paths["/readAudits"]).toBeDefined();
    expect(yaml.paths["/readAudits/{identifier}"]).toBeUndefined();
    expect(request.properties.identifier).toEqual({
      $ref: "#/components/schemas/Identifier",
      description: "Identifier for the asset whose audits should be returned.",
    });
    expect(request.required).toBeUndefined();
    expect(
      yaml.components.schemas.AuditParameters.properties.identifier,
    ).toBeUndefined();
  });

  test("requires an asset identifier or a named audit target", async () => {
    const { yaml } = await readContracts();
    const request = yaml.components.schemas.ReadAuditsRequest;

    expect(request.allOf.at(-1)).toEqual({
      anyOf: [
        { required: ["identifier"] },
        {
          required: ["auditParameters"],
          properties: {
            auditParameters: {
              anyOf: [
                { required: ["username"] },
                { required: ["groupname"] },
                { required: ["rolename"] },
              ],
            },
          },
        },
      ],
    });
  });

  test("documents Cascade textual audit dates instead of RFC 3339 dates", async () => {
    const { yaml } = await readContracts();
    const properties = yaml.components.schemas.AuditParameters.properties;

    expect(properties.startDate.format).toBeUndefined();
    expect(properties.startDate.example).toBe(
      "May 12, 2023 12:00:00 AM",
    );
    expect(properties.endDate.format).toBeUndefined();
    expect(properties.endDate.example).toBe(
      "Aug 12, 2023 11:59:00 PM",
    );
  });

  test("keeps the published JSON and YAML contracts equivalent", async () => {
    const { yaml, json } = await readContracts();

    expect(json).toEqual(yaml);
  });
});
