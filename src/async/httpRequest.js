const getUsers = (source,callback)=>{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        // console.log(xhr,xhr.readyState);
        if(xhr.readyState==4 && xhr.status ==200){
            const data = JSON.parse(xhr.responseText);
            callback(undefined,data);

        }else if(xhr.readyState==4){
            console.log('No connection');
            callback('error',undefined);
        }
    });

    xhr.open('GET',source);
    xhr.send();
};


const exampleApi = 'https://jsonplaceholder.typicode.com/users';

getUsers(exampleApi,(err,data)=>{
    if (err) throw err;
    else console.log(data);
});