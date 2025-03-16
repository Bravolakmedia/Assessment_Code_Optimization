// Problem: It takes n steps to reach the top of a staircase. One can either climb 1 or 2 steps at a time.In how many distinct ways can one climb to the top?
// Solution Algorithm:
// Dynamic programing using the bottom-up approach
// I used dp[1] and dp[2] arrays to store climbing with one step and 2 steps respectively.
// The arrays array filled by iteration.


function climbStairs(n) {
    if (n === 1) return 1;
    
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Example 
console.log(climbStairs(5)); // Output: 8
