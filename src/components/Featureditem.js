import React from 'react'

const Featureditem = (props) => {
    // const [title, imgUrl] = props;
    return (
        <div>
            <div class="card" style={{ width: "18rem" }}>
                <img src={props.imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="card-text" style={{ display: "inline" }}>{props.title}</h5>
                        </div>
                        <div class="col-6">
                            <img src="https://designarc.biz/demos/cleanex/assets/images/icons/icon-9.png" alt="arrow" ></img>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Featureditem
