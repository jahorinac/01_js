import config from './config.js';

function sayHi(language, name){
    if(language == "en" || language == 'sr'){
        console.log(`${config[language]} ${name}`)
    }else{
        console.log("Hola " + name);
    }
}

export default sayHi;