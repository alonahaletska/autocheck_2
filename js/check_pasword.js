//Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение
//с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

function checkPassword(password) {
  const ADMIN_PASSWORD = "grthytjytj";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}
