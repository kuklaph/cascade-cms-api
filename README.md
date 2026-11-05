# Cascade CMS API Library

A JavaScript client for the Cascade CMS REST API, with a Fetch client and a synchronous Google Apps Script client.

## Upgrading to version 3

Operation names, request shapes, and successful response shapes are unchanged from `2.1.0`. Review these failure-handling changes before upgrading:

- The Fetch client now rejects exhausted timeouts with an `Error` instead of a plain object. It retains `message: "Request timed out"`, `timeout: true`, and `success: false` and adds a stack trace. Use `try/catch` around the awaited operation.
- Apps Script methods now throw on failure instead of logging an error and returning `undefined`. Catch exceptions where your script needs to recover or continue.

See [CHANGELOG.md](CHANGELOG.md) for the full release history and earlier migration notes.

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

Install the Fetch client from npm:

```sh
npm install cascade-cms-api
```

For Google Apps Script, follow the [Apps Script setup](#google-apps-script) below.

## General Usage

### Fetch client

In your project file import the Cascade API.

```js
import { CascadeAPI, Types } from "cascade-cms-api";
```

Create a client with your API key and Cascade CMS API URL:

```js
const cascadeAPI = CascadeAPI({
  apiKey: "",
  url: "https://isSandActuallySandy.cascadecms.com/api/v1/",
});
```

Generate the `apiKey` in your Cascade dashboard. Use your tenant's `/api/v1/` URL, including the trailing slash. Fetch client methods return promises:

```js
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

The Fetch-based client defaults to a `30` second timeout per attempt. To change it, pass milliseconds as the second argument to `CascadeAPI(config, timeout)`. The timeout covers waiting for response headers, not reading or parsing the response body. A timed-out attempt aborts its Fetch request, and the timer is cleared when Fetch settles.

Each operation accepts an optional second argument, `retryOnTimeout`, which defaults to `true` and allows up to three attempts. Pass `false` to make one attempt. Aborting a request does not undo server work; disable retries for writes when repeating the operation would be unsafe.

When timeout attempts are exhausted, the promise rejects with an `Error` whose message is `"Request timed out"`, with `timeout: true` and `success: false`. Catch it with `try/catch` around the awaited operation. Version 3 replaces the previous plain-object timeout rejection with this error instance.

### Google Apps Script

Copy [apps-script/main.js](apps-script/main.js) into a `.gs` file in your Apps Script project. Create the client with `CascadeAPI_` and call its methods synchronously:

```js
const cascadeAPI = CascadeAPI_({
  apiKey: "",
  url: "https://your-tenant.cascadecms.com/api/v1/",
});

const results = cascadeAPI.read({
  identifier: {
    type: "page",
    id: "asset-123",
  },
});
```

Apps Script methods throw on failure. Parsed responses with `timeout: true` allow up to three attempts, waiting one second and then two seconds between attempts. Pass `false` as the operation's second argument to disable retries. Exceptions from `UrlFetchApp.fetch` propagate without retries; verify server state before repeating a failed write.

## Other Resources

**Cascade CMS Tools** \
Check out my other library [cascade-cms-tools](https://github.com/kuklaph/cascade-cms-tools)
