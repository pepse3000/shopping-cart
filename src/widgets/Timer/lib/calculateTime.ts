export function calculateTime(time: number) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(time / (1000 * 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return {days, hours, minutes, seconds};
}