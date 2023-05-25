import React from 'react'

const Contact = () => {
    return (
        <div className='container Contact'>
            <h6>-contact us-</h6>
            <h2>Get touch with us</h2>
            <div className="row" id='ContactRow'>
                <div className="col-lg-4 col-md-12 col-sm-12 infoCol">
                    <div className='contentBox'>
                        <p>Office Address</p>
                        <p>PO Box 5849 Collins Street West
                            Victoria 9005 Australia</p>
                        <p>Monday - Friday

                            8.00 am - 7.00 pm / Sundays
                            (Closed)</p>

                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 formcol">
                    <form>
                        <div className="Contactgrid">
                            <div className="Contactgrid-item">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="FirstName" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="Contactgrid-item">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="LastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="Contactgrid-item">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="Email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="Contactgrid-item">
                                <div className="form-group">
                                    <input type="number" className="form-control" id="Phone" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="Contactgrid-item span-2">
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                                </div>
                            </div>
                            <div className="Contactgrid-item span-2">
                                <button type="submit" className="btn" style={{ width: '100%', backgroundColor: '#ffc800' }}>Send Message</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
