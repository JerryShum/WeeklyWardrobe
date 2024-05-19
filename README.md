# WeeklyWardrobe

## Hackers

- [JeremyTubongbanua](https://github.com/JeremyTubongbanua)
= [Neh2332](https://github.com/Neh2332)
- [JerryShum](https://github.com/JerryShum)
- [xJoney](https://github.com/xJoney)

## Live Demo

Demo live at [weeklywardrobe.club](http://www.weeklywardrobe.club)

## Description

WeeklyWardrobe is an application product service that helps people explore and mature their fashion needs. The application provides a platform for people to give up their unused clothing and make money from lending it to others to try on. Consumers of the application will pay a subscription fee for access to clothing to try on weekly which arrives right at their doorstep. The application will also provide a recommendation system for users to purchase clothing that matches their style from brand deals.

Overall, the app allows brands, people with unused clothing, and people looking for new clothing to come together and save money. Brands can advertise their clothing to users, users can try on clothing and solidify what clothing they really like. Companies no longer have to suffer from the high costs of returns and users can save money by not having to buy clothing that they don't like.
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

## /update_style_object

GET http://jeremymark.ca:3000/update_style_object

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user. |
| clothingId | int | The clothing id, in order to fetch the styleObject. It is assumed that the user likes this clothingId and will positively impact the user's style object |

Response Example

```json
{
    "status": "success",
    "data": {
        "message": {
            "vintageLvl": 24.999989986419678,
            "smartCasualLvl": 24.999988555908203,
            "sportyLvl": 5,
            "formalLvl": 4.999998569488525,
            "partyLvl": 4.999999046325684
        },
        "update": {}
    }
}
```

## /get_top_products

GET http://jeremymark.ca:3000/get_top_products

Query Body

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The username of the user. |
| threshold | int | The threshold for the match percentage. A higher match percentage will mean the clothes will be closest to your style. |

Response Example

```json
{
    "status": "success",
    "data": [
        {
            "product": {
                "productId": 2,
                "price": 45.99,
                "name": "Green T-Shirt",
                "brandName": "Muji",
                "styleObj": {
                    "vintageLvl": 3,
                    "smartCasualLvl": 1,
                    "sportyLvl": 4,
                    "formalLvl": 1,
                    "partyLvl": 2
                },
                "imageurl": "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            "matchPercent": 80
        },
        {
            "product": {
                "productId": 3,
                "price": 45.99,
                "name": "Nike Air XL",
                "brandName": "Nike",
                "styleObj": {
                    "vintageLvl": 3,
                    "smartCasualLvl": 1,
                    "sportyLvl": 4,
                    "formalLvl": 1,
                    "partyLvl": 2
                },
                "imageurl": "https://images.pexels.com/photos/20066688/pexels-photo-20066688/free-photo-of-nike-air-flight-89-in-a-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            "matchPercent": 80
        },
        {
            "product": {
                "productId": 4,
                "price": 11.99,
                "name": "Naruto White-T",
                "brandName": "Uniqlo",
                "styleObj": {
                    "vintageLvl": 5,
                    "smartCasualLvl": 1,
                    "sportyLvl": 5,
                    "formalLvl": 1,
                    "partyLvl": 2
                },
                "imageurl": "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            "matchPercent": 85
        },
        {
            "product": {
                "productId": 6,
                "price": 12.99,
                "name": "Nirvana",
                "brandName": "Uniqlo",
                "styleObj": {
                    "vintageLvl": 5,
                    "smartCasualLvl": 1,
                    "sportyLvl": 5,
                    "formalLvl": 1,
                    "partyLvl": 2
                },
                "imageurl": "https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            "matchPercent": 85
        }
    ]
}
```
