import React, { useState } from 'react'

const TextExpander = ({
  collapsedNumWords=10,
  expandButtonText="Show more",
  collapseButtonText="Show less",
  buttonColor="blue",
  expanded = false,
  className,
  children
}) => {

  const [showMore,setShowMore] = useState(expanded)
  const fullTextArr = children.split(" ");
  const lessTextArr = fullTextArr.slice(0,collapsedNumWords);

  const style = {
    color:buttonColor,
    backgroundColor:"transparent",
    border:"none",
    cursor:"pointer",
    marginLeft:"5px"
  }

  return (
    <div className={className}>
      
      <p>
        {showMore?fullTextArr.join(" ") : lessTextArr.join(" ")+"..."}
        <button style={style} onClick={()=>setShowMore(prev=>!prev)}>
                {showMore?collapseButtonText:expandButtonText}
        </button>
      </p>
    </div>
  )
}

export default TextExpander;
