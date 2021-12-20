import React from 'react'
import './FillProductList.css'

const FillProductList = () => {
    return (
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="tile">
                    <div class="wrapper">
                        <div class="header">Product Title</div>

                        <div class="banner-img">
                            <img src="http://via.placeholder.com/640x360" alt="Image 1" />
                        </div>

                        <div class="dates">
                            <div class="start">
                                <strong>Starting Price</strong> 250$
                                <span></span>
                            </div>
                            <div class="ends">
                                <strong>Ending Price</strong> 500$
                            </div>
                        </div>

                        <div class="stats">

                            <div>
                                <strong>OFFERS</strong> 3098
                            </div>

                            <div>
                                <strong>Gold Membership</strong> 562
                            </div>

                            <div>
                                <strong>Normal Users</strong> 182
                            </div>

                        </div>

                        <div class="stats">

                            <div>
                                <strong>INVITED</strong> 3098
                            </div>

                            <div>
                                <strong>JOINED</strong> 562
                            </div>

                            <div>
                                <strong>DECLINED</strong> 182
                            </div>

                        </div>

                        <div class="stats">

                            <div>
                                <strong>INVITED</strong> 3098
                            </div>

                            <div>
                                <strong>JOINED</strong> 562
                            </div>

                            <div>
                                <strong>DECLINED</strong> 182
                            </div>

                        </div>

                        <div class="footer">
                            <a href="#" class="Cbtn Cbtn-primary">Add</a>
                            <a href="#" class="Cbtn Cbtn-danger">Delete</a>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
            </div>
    )
}

export default FillProductList
