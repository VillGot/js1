// 1)
let low = 1;
const high = 100;
let flag = 0;

while(low < high){
    for(let i = 2; i <= low/2; i++){
        if(low % i == 0){
            flag = 1
            break
        }
    }
    if(flag == 0){
        console.log(low)
    }
    low++
    flag = 0
}
