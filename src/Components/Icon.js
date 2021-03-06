import React from 'react'

//Icons import
import { FaPen, FaTimes, FaRegCircle } from 'react-icons/fa'

const Icons = ({ name }) => {
    if (name === 'circle') {
        return <FaRegCircle />
    } else if (name === 'cross') {
        return <FaTimes />
    } else {
        return <FaPen />
    }
}

export default Icons


// import React from 'react'

// import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'

// const Icon = ({ name }) => {
//     switch (name) {
//         case "cross":
//             return <FaTimes />
//         case "circle":
//             return <FaRegCircle />

//         case "empty":
//             return ""
//     }
// }

// export default Icon;