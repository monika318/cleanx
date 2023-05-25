import React from 'react'

const Project = () => {
    const imgs = [
        {
            "img": "https://designarc.biz/demos/cleanex/assets/images/project/project-1.jpg",
            "alt": "Image1"
        },
        {
            "img": "https://designarc.biz/demos/cleanex/assets/images/project/project-2.jpg",
            "alt": "Image1"
        },
        {
            "img": "https://designarc.biz/demos/cleanex/assets/images/project/project-3.jpg",
            "alt": "Image1"
        },
        {
            "img": "https://designarc.biz/demos/cleanex/assets/images/project/project-4.jpg",
            "alt": "Image1"
        },
        {
            "img": "https://designarc.biz/demos/cleanex/assets/images/project/project-5.jpg",
            "alt": "Image1"
        },
        {
            "img": "https://designarc.biz/demos/cleanex/assets/images/project/project-6.jpg",
            "alt": "Image1"
        }
    ]
    return (
        <div className='Project'>
            <h6>-our work-</h6>
            <h2>Latest Projects</h2>
            <div className='row Projectrow'>
                {imgs.map((element) => {
                    return (
                        <div className='col-lg-3 col-md-6 col-sm-12 projectitem' key={element.alt} >
                            <img className='projectimage' src={element.img} alt={element.alt}></img>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Project
