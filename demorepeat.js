function countdown(number) {
    if (number >= 10) {
        console.log("Done");
        return;
    }
    console.log(number);
    countdown(number + 1);
}
countdown(5);
