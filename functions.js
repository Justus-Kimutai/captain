export function capitalize(string){
    return `${string.slice(0,1).toUpperCase()}${string.slice(1,string.length).toLowerCase()}`
}

export function reverseString(string){
    const myString = string.split("")
    const newArr = []
    for(let i=myString.length-1;i>=0;i--){
        // console.log(myString[i]);
        newArr.push(myString[i])
    }
    console.log(newArr.join(""));
    return newArr.join("")
}

export class calc{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    add(){
        return this.num1 + this.num2
    }

    subtract(){ 
        return this.num1 - this.num2
    }

    divide(){
        return this.num1 / this.num2
    }

    multiply(){
        return this.num1 * this.num2
    }

}

function getCipherText(key){

    const plainText = '	.,?!abcdefghijklmnopqrstuvwxyz0123456789'
    const arrText = plainText.split("")
    let ciphtext = []

    for(let i=key;i<= arrText.length;i++){
        ciphtext.push(arrText[i])

    }
    for(let i = 0; i < key;i++){
        ciphtext.push(arrText[i])
    }
    return ciphtext
    
}

function getUserCharacterIndex(string){
    let userStringArr = string.split("")
    const plainText = '	.,?!abcdefghijklmnopqrstuvwxyz0123456789'.split("")
    console.log(plainText);
    const charIndexes = []

    for(let i=0;i<=userStringArr.length;i++){
        if(userStringArr[i] == " "){
            charIndexes.push(0)
        }
        for(let j=0; j <= plainText.length; j++){

            if(userStringArr[i] === plainText[j] && plainText[j]){
                charIndexes.push(j)
            }
        }
    }

    return charIndexes
}

export function caesarCipher(userString,key){
    const stringIndexes = getUserCharacterIndex(userString);
    const cipherText = getCipherText(key)
    const ciphredText = []

    for(let i = 0; i<= stringIndexes.length; i++){
      ciphredText.push(cipherText[stringIndexes[i]])   
        
    }

    return ciphredText.join("").toUpperCase()

}


