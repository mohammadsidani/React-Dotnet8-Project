export function getCookie(key: string) {
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)"); //this will fetch for the cookie using regex
    return b ? b.pop() : "";
}

export function currencyFormat(amount: number) {
    return '$' + (amount/100).toFixed(2);
}