const fetch = require('node-fetch');

const getUsers = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');  //wait fetch process

    if(res.status!=200){
        throw new error('error');
    };
    const data = await res.json();
    return data
};

getUsers()
.then((data)=>console.log(data))
.catch((err)=>{throw err});
