function solution(price) {
    let a = price;
    
    if (500000 <= price) {
        return Math.floor(a * 0.80);
    } else if (300000 <= price ) {
        return Math.floor(a * 0.90);
    } else if (100000 <= price) {
        let d = Math.floor(a * 0.95);
        console.log(d)
        return d;
    } else {
        return a
    }
}


// 하나씩 생각해보자.
// 1. price가 옷 가격이고 이 가격의 크기에 따라 할인률이 들어간다.
// 2. 10만원에서 5% 할인한 가격을 어떻게 구하지? 100,000 * 0.95
// 3. 그러면 각 금액으로 보면 어떻게 해야하지? if eles if문으로 가야겠다. 마지막은 else로 가고
// 4. 중간에 30만원은 어떻게 보지? 조건문을 한번 잘 봐야겠다.
// 가격이 10 이상이면 즉 가격이 10만원보다 크거나 같으면
// price >= 100000

