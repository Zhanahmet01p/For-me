import React from 'react';

function Nav({navigations}) {

    const array = [1,2,3,4,5,6,7,8,9,10,]

    const result = array.reduce((a,b) => a+b, 0)
    console.log(result)
    return (
        <React.Fragment>
            {navigations.length > 0 && (
                <ul className="flex gap-[30px]">
                    {
                        navigations.map((navigation) => (
                            <li key={navigation.id}>{navigation.name}</li>
                        ))
                    }
                </ul>

            )}

        </React.Fragment>
    )
}

export default Nav