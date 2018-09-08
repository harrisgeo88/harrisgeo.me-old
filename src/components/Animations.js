import React from 'react'
import posed from 'react-pose';

// export default class Animations extends React.Component {
//     render() {
//         return <div>
// posed.div({
//   left: { x: 100 },
//   right: { x: -100 }
// })
//         </div>
//     }
// }


export default posed.div({
    attention: {
        scale: 1.3,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 0
        }
      }

})