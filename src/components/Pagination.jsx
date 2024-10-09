// export const Pagination = ({prev, next, onPrevius, onNext}) => {
export const Pagination = ({ onPrevius, onNext }) => {
  // const handlePrevius = ()=>{
  //   onPrevius()
  // }
  // const handleNext = ()=>{
  //   onNext()
  // }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link">Previus</button>
        </li>

        <li className="page-item">
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
};

// otra versión
//     <nav>
//       <ul className="pagination justify-content-center">
//         {prev ? (
//           <li className="page-item">
//             <button onClick={handlePrevius} className="page-link">Previus</button>
//           </li>
//          ) :null
//         }

//         {next ? (
//           <li className="page-item">
//             <button onClick={handleNext} className="page-link">Next</button>
//           </li>

//         ): null}
//       </ul>
//     </nav>
//   )
// }
