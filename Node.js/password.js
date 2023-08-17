
var generator = require('generate-password');

function password(len,num){

    console.log(
        generator.generate({
            length: 6,
            numbers: true
        })
    );

}

password(6,true);