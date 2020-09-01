import React from 'react'
import './updateSubs.css'
const updateSubs = () => {
    return (
        <div className="container">
            <div className="help">
                <h4 className="text-secondary text-left">Update from Subscribers</h4>
                <div className="dropdown ddown2">
                    <button className="btn btn-link active text-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" >Option</a>
                        <a className="dropdown-item" >Option2</a>
                        <a className="dropdown-item" >Action</a>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-3 col-lg-2 ">
                    <div className="rounded-circle subs-7">8</div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 rounded-circle">
                    <div className="rounded-circle subs">3</div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 rounded-circle">
                    <div className="rounded-circle subs-9">5</div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 rounded-circle">
                    <div className="rounded-circle subs-7">8</div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 rounded-circle">
                    <div className="rounded-circle subs">3</div>
                </div>

            </div>
            <hr />

        </div>
    )
}

export default updateSubs
