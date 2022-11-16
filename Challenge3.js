
let keySearch="location"
let secondKey = "district"
let str = `{"return":
                     {
                       "age": [{"dipak": 34}],
                       "location": [{"country": "India"}],
                       "location": [{"district": "Satara"}],
                       "Address": [{"Pune": "Katraj"}]
                     }
                    }`;
    
    
        let js_object = JSON.parse(str);
        let js_object_return = js_object.return;
        Object.keys(js_object_return).forEach(function(key) {
            if (key == keySearch) {
                if(typeof js_object_return[key][0][secondKey] == "undefined") {
                        console.log("No key found")
                }
                else {
                console.log(js_object_return[key][0][secondKey]);
                }
            } else {
                //do nothing
            }
        });
       