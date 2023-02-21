import React from 'react'

export default function ExpandNavBar({set, content}) {

    function close() {
        if (set) {
            set()
        }
    }

    console.log(content);
    return (
        <div className='expand-nav-bar' onMouseLeave={close}>
            <div className='content'>
            {content && Object.keys(content).map(function (key, index) {
                        if (key !== 'path') {
                            return <div className='list'>
                            <h2>{key}</h2>
                            <ul>
                                {Object.keys(content[key]).map(function (subkey, index){
                                    return <li><a href={content[key][subkey].path}>{subkey}</a></li>
                                })}
                            </ul>
                        </div>
                        }
                    })}
            </div>
        </div>
    )
}
