import React from 'react'
import PackageList from './PackageList'

const List = ({list}) => {

const elements = list.map(element => 
    <PackageList isPacked={element.isPacked} name={element.name} className={element.className}/>
    )

    return (
        <div className="list">
           {elements}
        </div>

    )
    }
    
    export default List