import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <div className='row about'>
                <div className="col-lg-6">
                    <img src="https://designarc.biz/demos/cleanex/assets/images/resource/about-1.png" alt="about"></img>
                </div>
                <div className="col-lg-6">
                    <h6>---- about cleanmax company</h6>
                    <h2>We are best company in cleaning</h2>
                    <div className='text'>
                        <h3>Release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</h3>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                        <div className='grid-container'>
                            <div className='gridtext'><img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-10.png" alt="img1"></img>100% Satisfaction</div>
                            <div className='gridtext'><img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-10.png" alt="img1"></img>Annual Pass Programs</div>
                            <div className='gridtext'><img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-10.png" alt="img1"></img>Flexible and Cost-Effective</div>
                            <div className='gridtext'><img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-10.png" alt="img1"></img>Trained Emploies</div>
                        </div>
                        <button className="AboutButton">Read More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
