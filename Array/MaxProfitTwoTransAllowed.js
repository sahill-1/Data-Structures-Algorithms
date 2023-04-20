
 
// Returns maximum profit with
// two transactions on a given
// list of stock prices, price[0..n-1]
function maxProfit(price, n)
{
     
    // Create profit array and
    // initialize it as 0
    let profit = new Array(n);
    for(let i = 0; i < n; i++)
        profit[i] = 0;
 
    /* Get the maximum profit with
    only one transaction
    allowed. After this loop,
    profit[i] contains maximum
    profit from price[i..n-1]
    using at most one trans. */
    let max_price = price[n - 1];
    for(let i = n - 2; i >= 0; i--)
    {
         
        // max_price has maximum
        // of price[i..n-1]
        if (price[i] > max_price)
            max_price = price[i];
 
        // We can get profit[i] by taking maximum of:
        // a) previous maximum, i.e., profit[i+1]
        // b) profit by buying at price[i] and selling at
        // max_price
        profit[i] = Math.max(profit[i + 1],
                            max_price - price[i]);
    }
 
    // Get the maximum profit with
    // two transactions allowed
    // After this loop, profit[n-1]
    // contains the result
    let min_price = price[0];
    for(let i = 1; i < n; i++)
    {
         
        // min_price is minimum price
        // in price[0..i]
        if (price[i] < min_price)
            min_price = price[i];
 
        // Maximum profit is maximum of:
        // a) previous maximum, i.e., profit[i-1]
        // b) (Buy, Sell) at (min_price, price[i]) and add
        // profit of other trans. stored in profit[i]
        profit[i] = Math.max(profit[i - 1],
                profit[i] + (price[i] - min_price));
    }
    let result = profit[n - 1];
 
    return result;
}
 
// Driver code
let price = [ 2, 30, 15, 10, 8, 25, 80 ];
let n = price.length;
 
console.log("Maximum Profit = " +
               maxProfit(price, n));
 