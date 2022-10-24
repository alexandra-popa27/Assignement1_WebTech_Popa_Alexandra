const input='The dog is walking fast'
const dictionary=['walking','fast']

function hash(input,dictionary){
    if(typeof(input)!='string') throw new Error('Input shoud be a string')
    for(i=0;i<dictionary.length;i++){
        if(typeof(dictionary[i])!='string') throw new Error('Invalid dictionary format')
        var word=''
        for(j=0;j<dictionary[i].length;j++){
            if(j==0||j==dictionary[i].length-1) word+=dictionary[i][j]
            else word+='#'
        }
        input=input.replace(dictionary[i],word)
    }
    console.log(input)
}

hash(input,dictionary)