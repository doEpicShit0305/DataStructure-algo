function findmax(nums){
    let max = nums[0]
    for(let i = 0; i<nums.length;i++){
        if(max < nums[i]){
        max = nums[i]
        }    
    }
    return max;
    console.log(max)

}
const test = [1,2,4,5,8]
console.log(findmax(test))