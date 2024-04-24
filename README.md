# Cascade CMS API Library

## Other Resources

**Cascade Conference 2024** \
Click [here](https://github.com/kuklaph/cascade-cms-tools/tree/main/cascade-conference-2024) if you're looking for UNCW's presentation (`The API Awakens: Unleashing Effeciency with Cascade`) resources from the 2024 Cascade Conference.

**Cascade CMS Tools** \
Check out my other library [cascade-cms-tools](https://github.com/kuklaph/cascade-cms-tools)

## Cascade Documentation

### **Please note this library is a work in progress. If you come across a bug please open an issue.**

A JavaScript library for the Cascade CMS API. You can find more information about their API here: https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/rest-api/index.html#Operations

Available for Cascade CMS v8.1.1 and later.

You can find an openAPI representation of the Cascade library here:

https://kuklaph.github.io/cascade-cms-api/swagger-ui/

Cascade provides in tandem with the REST API docs listed above, a WSDL operations page. In order to access this you will need to use your organization as a subdomain followed by this url:

`cascadecms.com/ws/services/AssetOperationService?wsdl`

Example: `isSandActuallySandy.cascadecms.com/ws/services/AssetOperationService?wsdl`

## Install

This can be used either via NodeJS or Google Apps Script.

Either download/Copy the files and extract the zip or use npm `npm i cascade-cms-api` or `npm ci cascade-cms-api` depending on what you prefer.

## General Usage

### NodeJS

In your project file import the Cascade API.

```js
import { CascadeAPI, Types } from "../cascade-cms-api/nodejs/main.mjs";
```

### Google Apps Script

In order to use this library within a Google Apps Script (GAS) project you will need to copy the `main.js` and paste the contents as a new `.gs` file in your project.

To use the library you will need to instantiate the `CascadeAPI` function and pass it a config object with your apiKey and a Cascade CMS API URL with your custom domain:

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
// Apps Script
// const cascadeAPI = CascadeAPI_({apiKey: "", url: ""})

// Nodejs
const cascadeAPI = CascadeAPI({
  apiKey: "",
  url: "https://isSandActuallySandy.cascadecms.com/api/v1/",
});

const readFile = async () => {
  const results = await cascadeAPI.read({
    identifier: {
      type: "page",
      id: "d3631e59ac1easd2434bd70be3fbfe8148abc",
    },
  });
  //...
};
```

Types are optional. You can add type definitions which may be helpful depending on the situation:

```js
// Opt1 - inline
const read = await cascadeAPI.read({
  identifier: {
    type: "page", // inline gives you intellisense
    id: "d3631e59ac1easd2434bd70be3fbfe8148abc",
    //...
  },
});

// Opt2 - add external type
/**
 * @type {Types.EntityTypeString}
 */
const type = "page";
const read = await cascadeAPI.read({
  identifier: {
    type, // uses type from above and you get intellisense within the variable above
    id: "d3631e59ac1easd2434bd70be3fbfe8148abc",
    //...
  },
});
```

A built in retry is offered for the Nodejs version. The default allotted timeout time is `30` seconds. You can adjust whether or not to use a retry (the default is `true`) per request method as an optional parameter. If you want to update the timeout time, you can pass in an optional `timeout` parameter when initiating `CascadeAPI`.

The Nodejs version also comes with an option to use `fetch` rather than `axios` in case you want to use this in something like a Chrome Extension. You would just need to swap the commented lines in `main.js`.
