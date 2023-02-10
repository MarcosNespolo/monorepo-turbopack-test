export default function getRandomPosition(width: number, height: number) {
    return {
        top: Math.floor(Math.random() * height).toString() + 'px',
        left: Math.floor(Math.random() * width).toString() + 'px'
    }
}