let arr = ['a', 'b', 'c'];

export let wolfMan = () => {
 
    if(0 in arr){
        console.log('has 0')
    }
    if(9 in arr){
        console.log('has 9')
    }else{
        console.log('No 9!!!')
    }
};
