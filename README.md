# rule-validation-api

A simple rule validation API

### Endpoints

##### GET /

- Returns Personal Data information:

```
{
  "message": "Personal data fetched successfully",
  "status": "success",
  "data": {
    "name": "Tobechukwu Obitube",
    "github": "@tobechukwuobitube",
    "email": "fortispotens@gmail.com",
    "mobile": "+2348153694769",
    "twitter": "@thinkaswe"
  }
}
```

##### POST /validate-rule

- Sample Input

```
{
    "rule": {
      "field": "missions",
      "condition": "gt",
      "condition_value": 44
    },
    "data": {
      "name": "James Holden",
      "crew": "Rocinante",
      "age": 34,
      "position": "Captain",
      "missions": 4444
    }
  }

```

- Returns sample output:

```
{
  "message": "field missions failed validation.",
  "status": "error",
  "data": {
    "validation": {
      "error": true,
      "field": "missions",
      "field_value": 4444,
      "condition": "gt",
      "condition_value": 44
    }
  }
}
```

### Live URL

- https://rule-validation-tobe.herokuapp.com/
