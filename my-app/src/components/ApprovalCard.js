import React from 'react'

const ApprovalCard = (props) => {
    return (
        <div>
            <div className="content">{props.children}</div>
            <div className="extra">
                <div>
                    <div>Approval</div>
                    <div>Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard
