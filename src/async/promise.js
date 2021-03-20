// const pullData = ()=>{
//     return new Promise((resolve, reject) => {
//         resolve('data')
//         reject('error')
//     });
// }
// pullData().then((data)=>{
//     console.log(data)
// }).catch((err)=>{console.log(err);})

const getUsers = (source)=>{
    return new Promise((resolve, reject) => {
        
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener('readystatechange',()=>{
            // console.log(xhr,xhr.readyState);
            if(xhr.readyState==4 && xhr.status ==200){
                const data = JSON.parse(xhr.responseText);
                resolve(data)
    
            }else if(xhr.readyState==4){
                reject('no connection')
            }
        });
    
        xhr.open('GET',source);
        xhr.send();
    });

};


const exampleApi = 'https://jsonplaceholder.typicode.com/users';

getUsers(exampleApi).then((data)=>{
    console.log(data)
}).catch((err)=> console.log(err));