function getTodo(id) {
  const thePromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      const todo = {
        id, // id:id

        title: `Todo id : ${id}`,
        done: true,
      };
      resolve(todo);
    }, 1000);
  });
  return thePromise;
}

// getTodo(1)
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   });

// const pTodo1 = getTodo(1)
// const pTodo2 = getTodo(2)
// const pTodo3 = getTodo(3)
// const pTodo4 = getTodo(4)

// Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then(arr => console.log(arr))

// Promise.race([pTodo1,pTodo2,pTodo3,pTodo4]).then(t => console.log(t))


async function main(){
    const todo1 = await getTodo(1)
    console.log(todo1)
    const todo2 = await getTodo(2)
    console.log(todo2)
    const todo3 = await getTodo(3)
    console.log(todo3)
    const todo4 = await getTodo(4)
    console.log(todo4)

}

main()


