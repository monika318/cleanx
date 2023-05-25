import React from 'react';
import Featureditem from './Featureditem'

const Featured = () => {
    const features = [
        {
            "title": "Window Cleaning",
            "img": "https://designarc.biz/demos/cleanex/assets/images/service/service-1.jpg"
        },
        {
            "title": "Window Cleaning",
            "img": "https://designarc.biz/demos/cleanex/assets/images/service/service-3.jpg"
        },
        {
            "title": "Carpet Cleaning",
            "img": "https://designarc.biz/demos/cleanex/assets/images/service/service-2.jpg"
        }
    ]

    return (
        <>
            <div className='container Featured-section'>
                <h4>Cleanex Featured Services</h4>

                <div className="row">
                    {features.map((element) => {
                        return (
                            <div div className="col-md-4 my-5" key={element.github} >
                                <Featureditem title={element.title} imgUrl={element.img} ></Featureditem>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default Featured
