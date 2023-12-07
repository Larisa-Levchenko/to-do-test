# to-do-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

Приложение для учета задач
Работает с открытым апи https://dummyjson.com/

При старте ПО получаем список задач и пользователей
Выводим карточку пользователя и его задачи (показываю только пользователей у которых есть задачи)
Возможности:
- Просмотр задач
- Создание новой задачи для конкретного пользователя, реализована возможность выбора пользователя (только Администратор)
- Редактирования статуса задач, статусы: новая задача/ готовая задач (только Администратор)
- Удаление задач (только Администратор)
- Разграничение прав (Администратор, Пользователь)
