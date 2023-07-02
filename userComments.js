const messagesArray = ['Все відмінно!', 'Загалом все непогано. Але не всі.', 'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.', 'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.', 'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.', 'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?']
const namesArray = ['Алексей', 'Елена', 'Иван', 'Мария', 'Николай', 'Ольга', 'Петр', 'София', 'Андрей', 'Анна']
const commentsCount = 100;

function createCommentId() {
    const generatedCommentsId = []
    const minId = 1;
    const maxId = 999;
    const randomId = parseFloat((Math.random() * (maxId - minId) + minId).toFixed(0));
    while (generatedCommentsId.includes(randomId)) {
        randomId = (Math.random() * (maxId - minId) + minId).toFixed(0);
    }
    generatedCommentsId.push(randomId);

    return randomId;
}

function getRandomElementFromArray(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand]
}

function generateAvatar() {
    const minNum = 1;
    const maxNum = 6;
    const randomNum = parseFloat(Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum).toFixed(0))
    return `img/avatar-${randomNum}.svg`
}


function createComment() {
    return {
        id: createCommentId(),
        avatar: generateAvatar(),
        message: getRandomElementFromArray(messagesArray),
        name: getRandomElementFromArray(namesArray)
    }
}

export const userComments = new Array(commentsCount).fill(null).map((el, i) => createComment());
