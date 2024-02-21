function AddTodo() {
    return (
        <div className='container text-center'>
            <div className='row st-row'>
                <div className='col-6'>
                    <input type="text" placeholder="Enter todo here" />
                </div>
                <div className='col-4'>
                    <input type="date" id="" />
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-success st-button">
                        add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;