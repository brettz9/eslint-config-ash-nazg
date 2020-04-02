"use strict";
module.exports = {
  rules: {
    "no-unsanitized/property": [
      "error",
      {},
      {
        "innerHTML": {},
        "outerHTML": {}
      }
    ],
    "no-unsanitized/method": [
      "error",
      {},
      {
        "insertAdjacentHTML": {
          "properties": [
            1
          ]
        },
        "write": {
          "objectMatches": [
            "document"
          ],
          "properties": [
            0
          ]
        },
        "writeln": {
          "objectMatches": [
            "document"
          ],
          "properties": [
            0
          ]
        }
      }
    ]
  }
};
