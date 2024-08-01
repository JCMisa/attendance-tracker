import React from "react";

const StudentLayout = ({ children }) => {
    return (
        <div>
            <div className="p-5">{children}</div>
        </div>
    )
};

export default StudentLayout;