export function formatNumber(num: number): string {
    const numStr = num.toString();
    let result = '';

    let count = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {
        count++;
        result = numStr[i] + result;
        if (count % 3 === 0 && i !== 0) {
            result = '.' + result;
        }
    }

    return result;
}