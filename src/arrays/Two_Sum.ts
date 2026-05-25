/**
 * Problem: Two Sum
 *
 * Link:
 * https://leetcode.com/problems/two-sum/
 *
 * Approach:
 * Use hashmap to store previously visited numbers
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}