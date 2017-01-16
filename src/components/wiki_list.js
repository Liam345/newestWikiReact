import React from 'react';
import WikiItem from './wiki_item';

const WikiList = (props)=>{
const disp = props.searchedList.map(function(item)
 {
    return  (
        
        <WikiItem searchedItem={item}
        key={item.timestamp}/>
        
    );
});

return(
    
<div>
{disp}
</div>
);
}

export default WikiList;

