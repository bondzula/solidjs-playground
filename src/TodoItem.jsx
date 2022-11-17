function TodoItem({ item }) {
    return (
        <div>
            <input type="checkbox" value={item.done}></input>
            <span>{item.label}</span>
        </div>
    )
}

export default TodoItem;