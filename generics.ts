// here are example of generics in typescript
// most people find it  most complicated thing to learn in typescript


//This one is not a good example to understand generics in typescript
// but this one is a easy to understand

//suppose if we have to write a function that accept string as input and
// log that string and also return that string so we can write it like this
function logString(arg: string){
    console.log(arg)
    return arg
}

// Now our reqirement gets changed now we want to accept a number
// and do the same thing log and return it
function logNumber(arg: number){
    console.log(arg)
    return arg
}

//now again our requirement gets changes now we want to accept a array
// log and return it

function logArray(args : any[]){
    console.log(args);
    return args
}

//if you cleary see we are just repeating ourself we need to create  a
// new function for every return type. But it does not meet the criteria
//of reusability and in programming there is a rule that do not repeat yourself

// so here comes generics with whom we can make reuable func.

function logAnyting<T>( args :T) : T {
    console.log(args)
    return  args
}
// so this  function is applicable for above three function now we do no need
// to create different-different function for every return type

logAnyting('hello') // it can be used with a number
logAnyting([2,3,4]) // also with a array
logAnyting(1) // also with a number


//Here are few more example

interface HasAge {
    age : number
}

// function getOldest(peoples : HasAge[]):HasAge{
//     return peoples.sort((a ,b) => b.age - a.age)[0]
// }

const people = [
    {
        age : 30
    },
    {
        age : 40
    }
    ,
    {
        age : 20
    }
]

// getOldest(people)


// Above example  is working fine but if i want to access some  other properties as well then
interface  Player {
  name : string,
  age : number
}

const players : Player[] = [
    {
        age : 30,
        name : 'jake'
    },
    {
        age : 40,
        name : 'askiq'
    }
    ,
    {
        age : 20,
        name : 'joe'
    }
]

// getOldest(players)

//here we can  make use of assertion as well
// const player =getOldest(players) as Player
// console.log(player.name) // now name is assecible

//but it is always recommed to use generics so i
// will just comment out above code and write  it its generic implementation




function getOldest<T extends HasAge>(peoples : T[]):T{
    return peoples.sort((a ,b) => b.age - a.age)[0]
}

const player =getOldest(players)
console.log(player.name)  // now we can use both name and age property



// Now we will take a real world example to understand generics
//suppose if we want  to  fetch some data


// i want a function to fetch Post
interface IPost {
    title : string,
    id : number,
    description  : string
}

const fetchPostData  =async (path :string) : Promise<IPost[]>=>{
    const response = await fetch(`https://example.com/${path}`)
    return response.json()
}

(async()=>{
    const response = await fetchPostData('posts')
})()


// now  i want a function to fetch users
interface IUser {
    name : string,
    age : number
}

const fetchUsersData  =async (path :string) : Promise<IUser[]>=>{
    const response = await fetch(`https://example.com/${path}`)
    return response.json()
}

(async()=>{
    const response = await fetchUsersData('posts')
})()


// But if you realized that we are repeating ourself

const fetchData  = async <ResultType>(path :string) : Promise<ResultType[]>=>{
    const response = await fetch(`https://example.com/${path}`)
    return response.json()
}

(async()=>{
    const postResponse = await fetchData<IPost[]>('posts')
    const useResponse = await fetchData<IUser[]>('users')
})()

