Today's exercise.

Create a DELETE_TODO_ERROR action type.
Create a deleteTodoById action creator inside of the 'actions/todos' folder.
This function will look every similar to the updateTodoCompletedById action creator.
It's only going to take an ID.
When this function gets called, it should delete a todo by id.
It should also fetch all of the users todos from the database.
It should update the todos state inside of the store with all of the todos.


Import and Attach this action creator to the UserTodoList container.


Pass this action creator down as a prop to the DeleteModal.


add an onClick handler to the button inside of the DeleteModal.
This should be our action creator. Make sure to pass the ID as an argument to the action creator 
(make sure it's a reference to the function and dont invoke right away).

