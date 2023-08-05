import React, { useState } from 'react'

export default function ShowTrailer(props) {
    let [state, setState] = useState({
        trailer: false,
        url: ''
    })
    let { url } = props
    const handleTrailer = () => {
        function getId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);

            return (match && match[2].length === 11)
                ? match[2]
                : null;
        }
        const videoId = getId(url);

        setState(item => ({
            trailer: true,
            url: videoId
        }))
    }
    return (
        <>
            <button onClick={handleTrailer} className='btn-trailer'>
                <i class="fa-brands fa-youtube pr-2"></i>Trailer
            </button>
            <div
                onClick={() => { setState(false) }}
                className='trailer'
                style={state.trailer ? { display: 'flex' } : { display: 'none' }}>
                <iframe src={`//www.youtube.com/embed/${state.url}`}></iframe>
                <img
                    onClick={() => { setState(false) }}
                    className='close'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyw-m2xFFInjxm3hA6e-SGP4eG1P9kNmILVN9aRgkPp7u6cBm5peFUIqfMAMGSbmKY3M&usqp=CAU' alt='' />
            </div>
        </>

    )
}
