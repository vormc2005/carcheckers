import React from 'react'


const InquiryItem = ({inquiry}) => {

    const {id, name, email, phone, model, trim, comments, subject} = inquiry


    return (
        <div className="container-fluid">
        <div className="card bg-light col-md-8">
            <div className="row">
                <div className="col-md-4 ml-2 mt-2" style={{borderRight:"1px solid black"}}>
                <ul >
                    <li>
                       { name}
                    </li>
                    <li>
                        {email}
                    </li>
                    <li>
                        {phone}
                    </li>
                    <li>
                        {subject}
                    </li>
                </ul>
                </div>
                <div className="col-md-6">
                    {model}
                    {trim}
                    {comments}
                </div>
                
            </div>
                <div className="col-md-12 " style={{textAlign:"center"}}>
                <button className="btn btn-success btn-sm mr-2" >View</button>
                <button className="btn btn-dark btn-sm mr-2" >Edit</button>
                <button className="btn btn-danger btn-sm " >Delete</button>
                </div>
          
            
        </div>
        </div>
    )
}

export default InquiryItem
