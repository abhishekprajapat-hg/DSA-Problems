// Remove Duplicates from Sorted Array

function removeDuplicate(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

let nums = [1, 2, 3, 3, 4, 4, 5, 5];
console.log(removeDuplicate(nums));
