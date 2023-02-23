import "../style/ListTask.css"

function ListTask() {
    return (
        <div id="task-main">
            <div className = "task-items">
            <input type="radio" /> Clean up bedroom
            </div>
            <div className = "task-items">
                <input type="radio" /> Buy some milk
            </div>
            <div className = "task-items">
            <input type="radio" /> Jogging
            </div>
            <div className = "task-items">
            <input type="radio" /> Learn React
            </div>
            <div className = "task-items">
            <input type="radio" /> Doing Exercise
            </div>
        </div>
    )
}

export default ListTask;