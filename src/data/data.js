const personalData = {
    "name": "Tobechukwu Obitube",
    "github": "@tobechukwuobitube",
    "email": "fortispotens@gmail.com",
    "mobile": "+2348153694769",
    "twitter": "@thinkaswe"
  }

  const validateRuleSampleData = {
    "rule": {
      "field": "missions",
      "condition": "gte",
      "condition_value": 30
    },
    "data": {
      "name": "James Holden",
      "crew": "Rocinante",
      "age": 34,
      "position": "Captain",
      "missions": 45
    }
}
  
const dataWithEqualEvaluationRule = {
  "rule": {
    "field": "missions",
    "condition": "eq",
    "condition_value": 30
  },
  "data": {
    "name": "James Holden",
    "crew": "Rocinante",
    "age": 34,
    "position": "Captain",
    "missions": 30
  }
}

  export {personalData, validateRuleSampleData, dataWithEqualEvaluationRule}