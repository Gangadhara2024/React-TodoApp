import { Button, Input } from "antd";

const TodoLists = ({
  id,
  todo,
  isCompleted,
  isEditing,
  toggle,
  deletetodo,
  edittodo,
}) => {
  return (
    <div className="todolist">
      <Input type="checkbox" onClick={() => toggle(id)} />
      <p className={isCompleted ? "line" : ""}>{todo} </p>
      <div>
        <Button onClick={() => deletetodo(id)}>Delete</Button>
        <Button onClick={() => edittodo(id)}>Edit</Button>
      </div>
    </div>
  );
};

export default TodoLists;
