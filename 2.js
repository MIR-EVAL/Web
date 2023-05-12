const username = prompt('Введите имя: ').toLowerCase();
function greeting(name){
    console.log(`Привет, ${username}`);
}
greeting(username);