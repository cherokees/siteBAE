import React, { useState } from 'react'

export function Items({ children }) {
    const childrenArray = React.Children.toArray(children)
    const [current, setCurrent] = useState(childrenArray[0].key)
    const newChildren = childrenArray.map(child => {
        return React.cloneElement(child, { selected: child.key === current })
    })

    return (
        <div>
            {childrenArray.map(child => (
                <button onClick={() => setCurrent(child.key)} key={child.key}>{child.props.title}</button>
            ))}
            <div>{newChildren}</div>
        </div>
    )
}

export function Item({ children, selected }) {
    return <div hidden={!selected}>
        {children}
    </div>;
}