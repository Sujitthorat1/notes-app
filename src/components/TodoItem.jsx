function TodoItem({ todoName,todoDate}) {
    // let todoName = "Add items";
    // let todoDate = "11/01/2024";
    return (
        <div className="container" >
            <div className='row st-row'>
                <div className='col-6'>
                    {todoName}
                </div>
                <div className='col-4'>
                    {todoDate}
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-danger  st-button">Delete
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TodoItem;