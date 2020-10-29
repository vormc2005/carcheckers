import React from 'react'


const InquiryItem = ({inquiry}) => {

    const {id, name, email, phone, year, make, model, trim, comments, subject} = inquiry


    return (
        <div className="container-fluid">
        <div className="card bg-light col-md-7">
            <div className="row">
                <div className="col-md-4 mt-2" style={{borderRight:"1px solid black"}}>
                <ul >
                    <li>
                      <strong>
                        { name}
                      </strong>
                    </li>
                    <li>
                        {email}
                    </li>
                    <li>
                        {phone}
                    </li>
                    
                </ul>
                </div>
                <div className="col-md-6 mt-2">
                    <div>
                        {subject}
                    </div>
                    <div>
                    {year}{' '}{make}{" "}{model} {' '}{trim}

                    </div>
                    {comments}
                </div>         
            </div>
            <hr/>
                <div className=" row ">
                <div className="btn-group" style={{marginLeft:"auto", marginRight:"auto"}}>
                    <button style={{ width:"10vh" }} className="btn btn-success btn-sm mr-2" >View</button>
                    <button style={{ width:"10vh" }} className="btn btn-dark btn-sm mr-2" >Edit</button>
                    <button style={{ width:"10vh"}} className="btn btn-danger btn-sm mr-2" >Delete</button>
                </div>
                </div>            
        </div>
        </div>
    )
}

export default InquiryItem
