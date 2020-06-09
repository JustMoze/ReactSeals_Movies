export function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
        ? minutes + 1 + ':00'
        : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
export function calculateWidth(currentMillis, durationMillis) {
    var width = Math.round((currentMillis / durationMillis) * 100);
    return width;
}

export function sliceEmail(email) {
    var index = email.indexOf('@');
    return email.slice(0, index);
}
