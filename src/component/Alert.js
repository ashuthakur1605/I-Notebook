import React from 'react'

function Alert(props) {
    return (
        <div className="alert alert-info" role="alert">
            {props.message}
        </div>
    )
}

export default Alert




// import React from 'react'

// export default function Alert(props) {
//     return (
//         <div class="alert alert-info" role="alert">
//             {props.message}
//         </div>
//     )
// }
