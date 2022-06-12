function greet(name){
    if (Array.isArray(name) == true){
                return "hello," + name
    }
        else if (name == null){
            return 'hello there!'
        }
        else if (name === name.toUpperCase()){
            return 'HELLO ' + name
        }
        else{
                        return ('hello, '+name)
            }
        }
let people = ['zack', 'john']
let person = ['bob']      
console.log(greet('BOB'));