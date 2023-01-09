# CascadeAPI
A JavaScript library for the Cascade CMS API. You can find more information about their API here: https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/rest-api/index.html#Operations

Available for Cascade CMS v8.1.1 and later.

## Cascade Documentation
Cascade provides in tandem with the REST API docs listed above, a WSDL operations page. In order to access this you will need to use your organization as a subdomain followed by this url: `cascadecms.com/ws/services/AssetOperationService?wsdl`

Example: `isSandActuallySandy.cascadecms.com/ws/services/AssetOperationService?wsdl`

## Install

This can be used either via NodeJS or Google Apps Script.

### NodeJS

### Google Apps Script
In order to use this library within a Google Apps Script (GAS) project you will need to copy the `CascadeAPI.js` and paste the contents as a new `.gs` file in your project.

By default the library is setup to use NodeJS. After pasting the contents scroll to the bottom of the file and look for the `// For NodeJS` comment. Comment out the `call` function just below it.

Locate the `//   For Apps Script` comment and uncomment the `call` method just below it so that the code is now usable.

## Generaul Usage

To use the library you will instantiate the `CascadeAPI` class and pass it a `config `object. This can be done inline, but it's best to pass it in as a variable.

```js
const cascadeAPI = new CascadeAPI(
    { 
        apiKey: "", 
        url: "https://isSandActuallySandy.cascadecms.com/api/v1/" 
    }
)
```

The `apikey` is generated in your Cascade dashboard. The `url` is `yourOrg.cascadecms.com/api/v1/` (this is the current version as of 1/9/2023).

If you are using this in Google Apps Script the async/await pattern is not used/required. GAS does not follow this pattern.

```js
const cascadeAPI = new CascadeAPI(
    { 
        apiKey: "", 
        url: "https://isSandActuallySandy.cascadecms.com/api/v1/" 
    }
)

const readFiles = async () => {
    const results = await cascadeAPI.read(
        { type: "page", id: "d3631e59ac1easd2434bd70be3fbfe8148abc" }
    )
    //...
}
```