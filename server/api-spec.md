# API Specification

## /get_worn_clothes

GET http://jeremymark.ca:3000/get_worn_clothes

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user whose worn clothes are being requested. |

Response Example

```
{
    "status": "success",
    "data": [
        {
            "username": "Jeremy",
            "clothingId": 2,
            "weekWorn": "May Week 1",
            "rating": 4
        },
        {
            "username": "Jeremy",
            "clothingId": 4,
            "weekWorn": "May Week 1",
            "rating": 3
        },
        {
            "username": "Jeremy",
            "clothingId": 6,
            "weekWorn": "May Week 1",
            "rating": 4
        },
        {
            "username": "Jeremy",
            "clothingId": 7,
            "weekWorn": "May Week 2",
            "rating": 1
        },
        {
            "username": "Jeremy",
            "clothingId": 8,
            "weekWorn": "May Week 2",
            "rating": 1
        }
    ]
}
```

## /get_current_week_clothes

GET http://jeremymark.ca:3000/get_current_week_clothes

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user whose current week's clothes are being requested. |

Response Example

```
{
    "status": "success",
    "data": [
        {
            "username": "Jeremy",
            "clothingId": 2,
            "weekWorn": "May Week 1",
            "rating": 4
        },
        {
            "username": "Jeremy",
            "clothingId": 4,
            "weekWorn": "May Week 1",
            "rating": 3
        },
        {
            "username": "Jeremy",
            "clothingId": 6,
            "weekWorn": "May Week 1",
            "rating": 4
        },
        {
            "username": "Jeremy",
            "clothingId": 7,
            "weekWorn": "May Week 2",
            "rating": 1
        },
        {
            "username": "Jeremy",
            "clothingId": 8,
            "weekWorn": "May Week 2",
            "rating": 1
        }
    ]
}
```


## /get_next_week_clothes

GET http://jeremymark.ca:3000/get_next_week_clothes

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user whose next week's clothes are being requested. |

Request Example

```
{
    "status": "success",
    "data": [
        {
            "username": "Jeremy",
            "clothingId": 10,
            "matchPercent": 90
        },
        {
            "username": "Jeremy",
            "clothingId": 11,
            "matchPercent": 80
        }
    ]
}
```

## /reevaluate_next_week_clothes

GET http://jeremymark.ca:3000/reevaluate_next_week_clothes

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user whose next week's clothes are being reevaluated. |
| threshold | int | The threshold for the match percentage. A higher match percentage will mean the clothes will be closest to your style. |

Response Example

```json
{
    "status": "success",
    "data": [
        {
            "username": "Jeremy",
            "clothingId": 5,
            "matchPercent": 55
        }
    ]
}
```

## /clothing

GET http://jeremymark.ca:3000/clothing

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| clothingId | int | The id of the clothing item. |

Response Example

```json
{
    "status": "success",
    "data": {
        "id": 5,
        "owner": "Bob",
        "name": "Grey Suit",
        "colour": "Grey",
        "style": "Formal",
        "size": "L",
        "material": "Wool",
        "imageurl": "https://classy.ca/wp-content/uploads/2022/02/GREY_suit_277-1-6.jpg",
        "styleObj": {
            "vintageLvl": 2,
            "smartCasualLvl": 2,
            "sportyLvl": 1,
            "formalLvl": 3,
            "partyLvl": 2
        }
    }
}
```

## /user

GET http://jeremymark.ca:3000/user

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user. |

Response Example

```json
{
    "status": "success",
    "data": {
        "username": "Jeremy",
        "style": {
            "vintageLvl": 4,
            "smartCasualLvl": 1,
            "sportyLvl": 5,
            "formalLvl": 2,
            "partyLvl": 3
        },
        "subscribed": true
    }
}
```