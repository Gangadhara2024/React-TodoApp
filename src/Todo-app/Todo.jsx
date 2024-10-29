import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./todo.scss";
import TodoLists from "./TodoLists";
import Todoupdate from "./Todoupdate";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const additem = () => {
    const todoarray = {
      id: Date.now(),
      todovalue: input,
      isCompleted: false,
      isEditing: false,
    };
    setTodos((item) => [...item, todoarray]);
    setInput("");
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deletetodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const edittodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, todovalue: newText, isEditing: !item.isEditing }
          : item
      )
    );
  };
  return (
    <div className="todomain">
      <Input
        type="text"
        placeholder="enter todo"
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="primary" onClick={additem}>
        Add Item
      </Button>
      <div>
        {todos.map((item, idx) =>
          item.isEditing ? (
            <Todoupdate
              key={idx}
              id={item.id}
              todo={item.todovalue}
              isCompleted={item.isCompleted}
              isEditing={item.isEditing}
              updateTodo={updateTodo}
            />
          ) : (
            <TodoLists
              key={idx}
              id={item.id}
              todo={item.todovalue}
              isCompleted={item.isCompleted}
              isEditing={item.isEditing}
              toggle={toggle}
              deletetodo={deletetodo}
              edittodo={edittodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Todo;
