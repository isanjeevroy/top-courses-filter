import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let setCategory = props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div>
            {
                filterData.map((data) => {
                    return (<button className='mx-2 px-2 rounded-sm bg-slate-600' key={data.id}
                    onClick={()=>filterHandler(data.title)}
                    >{data.title}</button>)
                })
            }
        </div>
    )
}

export default Filter