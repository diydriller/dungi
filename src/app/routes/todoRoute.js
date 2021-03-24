module.exports = function(app){
    const todo = require('../controllers/todoController');
    const {verify} = require('../../../config/middlewares');

    app.post('/room/:roomId/todo/day',verify,todo.createDayTodo);
    app.post('/room/:roomId/todo/days',verify,todo.createDaysTodo);

    app.get('/room/:roomId/todo/day',verify,todo.getDayTodo);
    app.get('/room/:roomId/todo/days',verify,todo.getDaysTodo);

    app.put('/room/:roomId/todo/day',verify,todo.updateDayTodo);
    app.put('/room/:roomId/todo/days',verify,todo.updateDaysTodo);

    app.delete('/room/:roomId/todo/:todoId/day',verify,todo.deleteDayTodo);
    app.delete('/room/:roomId/todo/:todoId/days',verify,todo.deleteDaysTodo);

    app.delete('/room/:roomId/todo/day',verify,todo.deleteAllDayTodo);
    app.delete('/room/:roomId/todo/days',verify,todo.deleteAllDaysTodo);


    app.get('/room/:roomId/todo/day/search',verify,todo.getDaySearch);
    app.get('/room/:roomId/todo/days/search',verify,todo.getDaysSearch);

    app.get('/room/:roomId/todo/day/calendar',verify,todo.getDateSearch);
};