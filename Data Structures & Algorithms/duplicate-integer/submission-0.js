class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set();
        nums.forEach((num) => numSet.add(num))
        return numSet.size != nums.length
    
    }
}
