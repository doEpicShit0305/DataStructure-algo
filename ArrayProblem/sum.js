function sum(nums){
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum = sum+ nums[i];
    }
    return sum;
}
let nums = [1,3,2,4,5];
console.log(sum(nums)
)