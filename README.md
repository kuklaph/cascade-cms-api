# Cascade CMS API Library

### **Please note this library is a work in progress. If you come across a bug please open an issue.**

A JavaScript library for the Cascade CMS API. You can find more information about their API here: https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/rest-api/index.html#Operations

Available for Cascade CMS v8.1.1 and later.

## Cascade Documentation

You can find an openAPI representation of the Cascade library here:

https://kuklaph.github.io/cascade-cms-api/swagger-ui/

Cascade provides in tandem with the REST API docs listed above, a WSDL operations page. In order to access this you will need to use your organization as a subdomain followed by this url: 

`cascadecms.com/ws/services/AssetOperationService?wsdl`

Example: `isSandActuallySandy.cascadecms.com/ws/services/AssetOperationService?wsdl`

## Install

This can be used either via NodeJS or Google Apps Script.

Download/Copy the files and extract the zip. Once extracted to your project, use `npm ci` to install dependencies.

### NodeJS

In your project file import the Cascade API.

```js
import CascadeAPI from "../cascade-cms-api/nodejs/main.mjs";
```

### Google Apps Script

In order to use this library within a Google Apps Script (GAS) project you will need to copy the `main.js` and paste the contents as a new `.gs` file in your project.

## General Usage

To use the library you will need to instantiate the `CascadeAPI` function and pass it an object:

`{ apiKey: "", url: "" }`

```js
const cascadeAPI = CascadeAPI({
  apiKey: "",
  url: "https://isSandActuallySandy.cascadecms.com/api/v1/",
});
```

The `apiKey` is generated in your Cascade dashboard. The `url` is `yourOrg.cascadecms.com/api/v1/` (this is the current version as of 1/9/2023).

If you are using this in Google Apps Script the async/await pattern is not used/required. GAS does not follow this pattern.

```js
//Nodejs
const cascadeAPI = CascadeAPI({
  apiKey: "",
  url: "https://isSandActuallySandy.cascadecms.com/api/v1/",
});

const readFiles = async () => {
  const results = await cascadeAPI.read({
    type: "page",
    id: "d3631e59ac1easd2434bd70be3fbfe8148abc",
  });
  //...
};
```
