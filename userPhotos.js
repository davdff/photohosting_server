import { userComments } from "./userComments.js";
const descrArray = ['Сидит важный', 'Это я отдыхаю, сейчас дома уже', 'Что-то', 'Пупупу'];
const userPhotosCount = 25;

function generateId(countId) {
    return parseFloat(countId + 1)
}

function generatePhoto(countPhoto) {
    return `./photos/${countPhoto + 1}.jpg`
}

function getRandomElementFromArray(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand]
}

function generateLikes() {
    const minLikes = 15;
    const maxLikes = 200;
    return parseFloat((Math.random() * (maxLikes - minLikes) + minLikes).toFixed(0))
}

function createPhotos(i) {
    return {
        id: generateId(i),
        url: generatePhoto(i),
        description: getRandomElementFromArray(descrArray),
        likes: generateLikes()
    }
}

const userPhotos = new Array(userPhotosCount).fill(null).map((_, i) => createPhotos(i));

export { userPhotos }