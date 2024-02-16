"use strict"
//Лучшее время для покупки акций

let prices1 = [7, 1, 5, 3, 6, 4] // цена акций в каждый день

const maxProfit = (prices) => {
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] >  prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
}

maxProfit(prices1)