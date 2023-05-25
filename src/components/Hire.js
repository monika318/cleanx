import React, { useState, useEffect } from 'react'

const Hire = () => {
    const [count, setCount] = useState(1500);

    useEffect(() => {
        // Function to handle page refresh event
        const handleRefresh = () => {

            setTimeout(function () { setCount() }, 1000)
        };
        // Attach the event listener to the 'beforeunload' event
        window.addEventListener('beforeunload', handleRefresh);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('beforeunload', handleRefresh);
        };
    });

    return (
        <div className='hire'>

            <div className='row hirerow'>
                <div className='col-lg-8'>
                    <h6>- Why Choose US</h6>
                    <h2>Why You Should Hire Us</h2>
                    <div className='hiregrid-container'>
                        <div className='gridtext'><h5>Over 28 Years Of Experience</h5><p>Our gutter protection simply works better than any other product.</p></div>
                        <div className='gridtext'><h5>High Quality Equipments</h5> <p>Our gutter protection simply works better than any other product.</p></div>
                        <div className='gridtext'><h5>Work Done Time</h5><p>Our gutter protection simply works better than any other product.</p></div>
                        <div className='gridtext'><h5>Expert Cleaners</h5><p>Our gutter protection simply works better than any other product.</p></div>
                        <span>{count}</span>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <img src='https://designarc.biz/demos/cleanex/assets/images/resource/chooseus-1.jpg' alt='girl'></img>
                </div>

            </div>
        </div>
    )
}

export default Hire
