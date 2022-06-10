let str = 'My name is Sambhav'
str[0] = 'm'// doewsn't work because strings are immutable
console.log(str)// My name is Sambhav

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str)
console.log(str[1].toUpperCase())
console.log(str)

let index = str.indexOf('a',5)
console.log(index)

let lastindex = str.lastIndexOf('a',11)
console.log(lastindex)

console.log(str.includes('Sambhav',5))//true

console.log('Sambhav'.startsWith('am'))
console.log('Sambhav'.endsWith('bhav'))


let string = "Sambhav"

console.log(string.slice(1,4))//Samb
console.log(string.slice(1))//ambhav
console.log(string.slice(-5,-2))//mbh
console.log(string.substring(1,4))//amb
console.log(string.substring(-4,3))// negative is treated as 0
console.log(string.substring(4,1))//amb
console.log(string.slice(4,1))// ""
console.log(string.substr(0,4))//Samb
console.log(string.substr(-4,2))//bh

function truncate(str,len){
    if(str.length<=len){
        return str
    }else{
        let str2 = ""
       
        str2+=str.slice(0,len-1)+"..."
        return str2
    }
}

console.log(truncate(`What I'd like to tell on this topic is:`, 20))