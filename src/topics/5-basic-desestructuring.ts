
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Rock DJ",
    details: {
        author: "Maroon Five",
        year: 2001
    }
}

console.log('audioPlayer', audioPlayer)

console.log('Song', audioPlayer.song)

const {
        song:anotherSong,
        songDuration,
        details: {author}
      } = audioPlayer
      //desestruccturacion de author solo
      // const{details:{author}} = audioPlayer
console.log('Song desestructurado', anotherSong)
console.log('Duration desestructurado', songDuration)
console.log("author desestructurado", author)

//* Desestructuracion de Arreglos

const [p1, p2, p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];


console.log('personaje 3', p3)


export {}