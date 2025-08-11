export const PlayAudio = (path) => {
    const audio = new Audio(`./sounds/${path}.mp3`)
    audio.play();
}