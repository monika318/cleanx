import React from 'react'

const TopHeader = () => {
    return (
        <>
            <div className=' HeaderContainer'>
                <div className="row">
                    <div className="col-lg-3">
                        Welcome to Cleaning of Losangle City
                    </div>
                    <div className="col-lg-3">
                        <img className='HeaderLogo' src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-1.png" alt='call' />Call for help: <span className='HeaderSpan'><a href='https://designarc.biz/demos/cleanex/tel:18004567890'>(+1800) 456 7890 </a></span>
                    </div>
                    <div className="col-lg-3">
                        <img className='HeaderLogo' src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-1.png" alt='mail'></img>Mail to us: <span className='HeaderSpan'><a href="mailto:info@cleanex.com">info@cleanex.com</a></span>
                    </div>
                    <div className="col-lg-3">
                        <div><span><i class="fa-brands fa-facebook-f" ></i></span><span><i class="fa-brands fa-twitter"></i></span><span><i class="fa-brands fa-linkedin-in" ></i></span><span><i class="fa-brands fa-instagram"></i></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader
