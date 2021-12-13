const MainWrapper = props => {
  return ( 
    <div className="h-screen bg-gray-800 -z-1">
       {props.children} 
    </div>
   );
}
 
export default MainWrapper;