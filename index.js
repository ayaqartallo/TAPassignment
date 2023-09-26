function twoSum(nums, target) {
    const length = nums.length;
    const result = [];

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }

    return []; 
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
