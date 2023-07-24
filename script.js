function catchErrors(str){
if(typeof str !== 'string'){
    throw new Error('this is not a string');
} else{
    return str
}
}

//console.log(catchErrors('Trying to create an error'))
//console.log(catchErrors(333))


try{
     console.log(catchErrors(30));
    }catch(error){
        console.log(error.name + ' you need real string')
     }

