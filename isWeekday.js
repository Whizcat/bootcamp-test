function isWeekday(malanga){
    const themDays=["Monday", "Tuesday","Wednesday","Thursday","Friday"]
    return themDays.includes(malanga)
}

console.log(isWeekday("Tuesday"))