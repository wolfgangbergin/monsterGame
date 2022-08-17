
let id  = 1
export function* simpleGenerator() {
   while (true){
    yield id    
    id++
   }
 
    return 'banana'
}
