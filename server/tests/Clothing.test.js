
// tests for /get_worn_clothes
test('get_worn_clothes_username',()=>{
    const url = 'http://jeremymark.ca:3000/get_worn_clothes?username=Jeremy';
    fetch(url)
    .then((response)=>response.json())
    .then((json) => {
        expect(json.data[0].username).toBe("Jeremy");
        expect(json.data[0].clothingId).toBe(2);
        expect(json.data[0].weekWorn).toBe("May Week 1");
        expect(json.data[0].rating).toBe(4);
    })
});

test('get_worn_clothes_username',()=>{
    const axios = require('axios');
    async function getWornClothes() {
        try {
          const response = await axios.get('/get_worn_clothes?username=Jeremy')
          console.log(response);

        //   console.log(json.data[0].username);  
        //   expect(json.data[0].username).toBe("Jeremy");
            
            // expect(json.data[0].clothingId).toBe(2);
            // expect(json.data[0].weekWorn).toBe("May Week 1");
            // expect(json.data[0].rating).toBe(4);
        } catch (error) {
          console.error(error);
        }
      }
      
});
test('get_worn_clothes_username',()=>{
    const axios = require('axios');
    axios({
        method: 'get',
        url: 'http://jeremymark.ca:3000/get_worn_clothes?username=Jeremy',
      })
        .then(function (response) {
            console.log(response.data[0].username);
        });
});
test('get_worn_clothes_rating',()=>{
    const url = 'http://jeremymark.ca:3000/get_worn_clothes?username=Alice';
    fetch(url)
    .then((response)=>response.json())
    .then((json) => {
        expect(json.data[2].rating).toBe(3);
    })
});

test('get_num_worn_clothes',()=>{
    const url = 'http://jeremymark.ca:3000/get_worn_clothes?username=Alice';
    fetch(url)
    .then((response)=>response.json())
    .then((json) => {
        let count = 0;
        for(let i=0;i<json.data.length;i++){
            count++;
        }
        expect(count).toBe(3);
    })
});

//test for /get_current_week_clothes
test('get_current_week_clothes',() =>{
    const url = 'http://jeremymark.ca:3000/get_current_week_clothes?username=Jeremy';
    fetch(url)
    .then((response)=>response.json())
    .then(json =>{
        expect(json.data[0].username).toBe('Jeremy');
        expect(json.data[0].clothingId).toBe(4);
        expect(json.data[0].status).toBe('Preparing');
    });
});

//tests for /get_next_week_clothes
test('get_next_week_clothes_count',()=>{
    const url = 'http://jeremymark.ca:3000/get_next_week_clothes?username=Jeremy';
    fetch(url)
    .then((response)=>response.json())
    .then(json=>{
        for(let i=0; i<json.data.length-1;i++){
            expect(json.data[i].username).toBe('Jeremy');
        }
    })
});


test('get_next_week_clothes',() =>{
    const url = 'http://jeremymark.ca:3000/get_next_week_clothes?username=Bob';
    fetch(url)
    .then((response)=>response.json())
    .then(json =>{
        expect(json.data[1].username).toBe('Bob');
        expect(json.data[1].clothingId).toBe(4);
        expect(json.data[1].matchPercent).toBe(80);
    });
});


//test for /reevaluate_next_week_clothes
test('reevaluate_next_week_clothes',() =>{
    const url = 'http://jeremymark.ca:3000/get_next_week_clothes?username=Bob';
    fetch(url)
    .then((response)=>response.json())
    .then(json =>{
       expect(json.data[0].username).toBe('Bob');
       expect(json.data[0].clothingId).toBe(3);
       expect(json.data[0].matchPercent).toBeGreaterThan(0);
    });
});


//test for /clothing
test('clothing',() =>{
    const url = 'http://jeremymark.ca:3000/clothing?id=5';
    fetch(url)
    .then((response)=>response.json())
    .then(json =>{
       expect(json.data.owner).toBe("Bob");
       expect(json.data.name).toBe("Grey Suit");
       expect(json.data.colour).toBe("Grey");
       expect(json.data.style).toBe("Formal");
       expect(json.data.size).toBe("L");
       expect(json.data.material).toBe("Wool");
       expect(json.data.styleObj.vintageLvl).toBe(2);
       expect(json.data.styleObj.smartCasualLvl).toBe(2);
       expect(json.data.styleObj.sportyLvl).toBe(1);
       expect(json.data.styleObj.formalLvl).toBe(3);
       expect(json.data.styleObj.partyLvl).toBe(2);
    });
});

//test for /user
test('user',()=>{
    const url = 'http://jeremymark.ca:3000/user?username=Jeremy';
    fetch (url)
    .then((response)=>response.json())
    .then(json=>{
        expect(json.status).toBe("success");
        expect(json.data.username).toBe("Jeremy");
        expect(json.data.styleObj.vintageLvl).toBe(4);
        expect(json.data.styleObj.smartCasualLvl).toBe(1);
        expect(json.data.styleObj.sportyLvl).toBe(5);
        expect(json.data.styleObj.formalLvl).toBe(2);
        expect(json.data.styleObj.partyLvl).toBe(3);
        expect(json.data.subscribed).toBe(true);
    });
});

//test for /update_style_object
test('user',()=>{
    const url='http://jeremymark.ca:3000/update_style_object?username=Bob&clothingId=4&rating=80';
    fetch(url)
    .then((response)=>response.json())
    .then(json=>{
        expect(json.status).toBe("success");
        expect(json.data.message).toBe("Clothing piece (id=4 was not worn by this user Bob");
    });
});
