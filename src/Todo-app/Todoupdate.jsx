import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";

const Todoupdate = ({ id, todo, updateTodo }) => {
  const [update, setUpdate] = useState(todo);
  console.log(todo);

  return (
    <div className="todomain">
      <Input
        type="text"
        placeholder="edit todo"
        required
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
      />
      <Button type="primary" onClick={() => updateTodo(id, update)}>
        update todo
      </Button>
    </div>
  );
};

export default Todoupdate;
