/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser");
const express = require("express");

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "gameDb";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "id";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/items";
const UNAUTH = "UNAUTH";
const hashKeyPath = "/:" + partitionKeyName;
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : "";

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
};

/********************************
 * HTTP Get method for list objects *
 ********************************/

app.get(path, function (req, res) {
  let queryParams = {
    TableName: tableName,
    Limit: 1000,
  };

  dynamodb.scan(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      res.json(data.Items);
    }
  });
});
