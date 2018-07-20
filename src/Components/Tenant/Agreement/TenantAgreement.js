import React from 'react'

export default class TenantAgreement extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                <div className="container"> 
                    {/* Page-Title */}
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                        <h4 className="page-title">Agreement</h4>
                        </div>
                    </div>
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row"> 
                    {/* Right Sidebar */}
                    <div className="col-lg-12">
                        <div className="card-box">
                        <div className="tabs-vertical-env">
                            <div className="row">
                            <div className="col-md-2">
                                <ul className="nav tabs-vertical">
                                {/*   <li class="nav-item"> <a href="#v-saved" class="nav-link agreement-fa active" data-toggle="tab" aria-expanded="false"><i class="icon-folder-alt"></i>&nbsp;&nbsp;Saved</a> </li>
                        <li class="nav-item"> <a href="#v-create" class="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i class="icon-plus"></i>&nbsp;&nbsp;Create</a> </li>*/}
                                <li className="nav-item"> <a href="#v-requested" className="nav-link agreement-fa active" data-toggle="tab" aria-expanded="true"><i className="icon-note" />&nbsp;&nbsp;Requested</a> </li>
                                <li className="nav-item"> <a href="#v-execute" className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-compass" />&nbsp;&nbsp;Execute</a> </li>
                                </ul>
                            </div>
                            <div className="col-md-10">
                                <div className="tab-content">
                                <div className="tab-pane active" id="v-saved">
                                    <div className=" table-responsive">
                                    <table className="table	bdr">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color" /></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color" /></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color" /></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color" /></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color" /></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                <div className="tab-pane" id="v-create">
                                    <div className="bdr">
                                    <form id="default-wizard">
                                        <fieldset title={1}>
                                        <legend>Create</legend>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                            <div className="row m-t-20">
                                                <div className=" col-sm-2">
                                                <label><b>Agreement Title:</b></label>
                                                </div>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12"> 
                                            {/* sample modal content */}
                                            <div className="fixed-action-btn hide-on-large-only"> <a className="btn-floating btn-large teal" onclick="showSideOption()"> <i className="large fi-menu" /> </a> </div>
                                            <div className="custome-temp" id="sideTogle" style={{display: 'none'}}>
                                                <div className="autohide1-scroll" style={{height: 100}}>
                                                <div id="accordion" className="m-b-10">
                                                    <div className="card m-b-5">
                                                    <div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingOne">
                                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Header Section </a> </h5>
                                                    </div>
                                                    <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                                                        <div className="card-block">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                            <label><b>Header Content</b></label>
                                                            <input type="text" className="form-control" maxLength={15} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                            <label><b>Header Image</b></label>
                                                            <input type="file" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                            <label><b>Water Mark Image</b></label>
                                                            <input type="file" className="form-control" />
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="card m-b-5">
                                                    <div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingTwo">
                                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Footer Section </a> </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                        <div className="card-block">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                            <label><b>Footer Content</b></label>
                                                            <textarea className="form-control" maxLength={30} defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="card m-b-5">
                                                    <div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingThree">
                                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Agreement Template </a> </h5>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                        <div className="card-block">
                                                        <div className="add-name"> <a href="#" onclick="demoTemplate()">Template 1</a><br />
                                                            <a href="#" onclick="demoTemplate()">Template 2</a><br />
                                                            <a href="#" onclick="demoTemplate()">Template 3</a> </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="card m-b-5">
                                                    <div className="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFour">
                                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Insert Dynamic Value </a> </h5>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                                                        <div className="card-block">
                                                        <div className="add-name">
                                                            <input type="button" defaultValue="Rent Amount" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Selling Amount" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Deposit Amount" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Owner Full Name" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Agent Full Name" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Tenant Full Name" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Agent Address" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Owner Address" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Tenant Address" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Property Address" onclick="insertComponent(this.value)" />
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="card">
                                                    <div className="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFive">
                                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Insert Components </a> </h5>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                                                        <div className="card-block">
                                                        <div className="add-name">
                                                            <input type="button" defaultValue="Insert Signature Block" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Insert Text Box" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Insert Date Box" onclick="insertComponent(this.value)" />
                                                            <input type="button" defaultValue="Insert Check Box" onclick="insertComponent(this.value)" />
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row m-t-20">
                                            <div className="col-sm-12"> 
                                            {/* <textarea name="editor" id="editor" class="text"></textarea> */}
                                            <textarea name="editor" id="editor" className="tinymce" defaultValue={""} />
                                            </div>
                                        </div>
                                        {/* <p class="stepy-navigator">
                                    <a href="#" class="button-next btn btn-primary waves-effect waves-light" onclick="showContent()">Next <i class="mdi mdi-arrow-right-bold"></i>
                                    </a>
                                </p> */}
                                        </fieldset>
                                        <fieldset title={2}>
                                        <legend>Preview</legend>
                                        <div className="row m-t-20">
                                            <div className="row">
                                            <div className="col-sm-12">
                                                <div id="previewDiv" className="row m-t-20 signature  autohide-scroll" style={{height: 600, width: '100%', padding: 12}}> </div>
                                            </div>
                                            </div>
                                        </div></fieldset>
                                        <fieldset title={3}>
                                        <legend>Save</legend>
                                        <div className="row m-t-20 signature"> </div>
                                        </fieldset>
                                        <button type="submit" className="btn btn-primary stepy-finish">Submit</button>
                                    </form>
                                    </div>
                                </div>
                                <div className="tab-pane active" id="v-requested">
                                    <div className=" table-responsive">
                                    <table className="table bdr">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="View" href="#" className="table-action-btn view-rqu accordion-toggle" data-toggle="collapse" data-target="#collapseOne"><i className="mdi mdi-eye" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className="no-border"><div id="collapseOne" className="collapse in">
                                                <div className="list-box">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                    <p>Property Title Property Title Property Title</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                    <p>10/05/2018</p>
                                                    </div>
                                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a> </div>
                                                </div>
                                                </div>
                                                <div className="list-box">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                    <p>Property Title Property Title Property Title</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                    <p>10/05/2018</p>
                                                    </div>
                                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a> </div>
                                                </div>
                                                </div>
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <td>Property Title Property Title Property Title</td>
                                            <td>10/05/2018</td>
                                            <td><a title="View" href="#" className="table-action-btn view-rqu accordion-toggle" data-toggle="collapse" data-target="#collapseTwo"><i className="mdi mdi-eye" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className="no-border"><div id="collapseTwo" className="collapse in">
                                                <div className="list-box">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                    <p>Property Title Property Title Property Title</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                    <p>10/05/2018</p>
                                                    </div>
                                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a> </div>
                                                </div>
                                                </div>
                                                <div className="list-box">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                    <p>Property Title Property Title Property Title</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                    <p>10/05/2018</p>
                                                    </div>
                                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" /></a> </div>
                                                </div>
                                                </div>
                                            </div></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                        </div>
                    </div>
                    {/* end Col */} 
                    </div>
                    {/* End row */} 
                </div>
                {/* end container */} 
                </div>
                {/* end wrapper */} 
                {/* Footer */}
                <footer className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved </div>
                    </div>
                </div>
                </footer>
                {/* End Footer */}
                <div id="send-msg" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Agreement Title </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="nme" className="control-label">Tenant Name</label>
                            <select className="form-control">
                                <option />
                                <option>Owner</option>
                                <option>Agent</option>
                                <option>Tenant</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="nme" className="control-label">Tenant Name</label>
                            <select className="form-control">
                                <option />
                                <option>Owner</option>
                                <option>Agent</option>
                                <option>Tenant</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label htmlFor="field-7" className="control-label">Description</label>
                            <textarea className="form-control" id="field-7" placeholder defaultValue={""} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light">Send</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* jQuery  */} 
                {/* Tether for Bootstrap */} 
                {/*   */} 
                {/* init */} 
                {/*Form Wizard*/} 
                {/*wizard initialization*/} 
                {/* App js */} 
                {/* Page JS Code */} 
                {/*   */} 
                <div id="agreeTemplate" style={{display: 'none'}}>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style={{fontSize: 24}}>&nbsp;&nbsp;<u><strong>RENTAL AGREEMENT </strong></u></span></p>
                <p contentEditable="false">The Tenant(s) known as ____________________________________, hereby agree to rent the dwelling located at _________ __________________________________________________________________________. The premises are to be occupied by the above named tenants only. Tenant may not sublet premises.</p>
                <p><strong>TERM </strong>The term shall commence on ___________________________, at $____________ per month payable on the _________ of each month in full.</p>
                <p><strong>LATE FEES</strong> In the event rent is not paid by the _______(_5th) day after due date, Tenant agrees to pay a late charge of $_________</p>
                <p><strong>UTILITIES </strong>Tenant shall be responsible for the payment of the following utilities: water, electric, gas, heating fuel, Telephone. <strong>APPLIANCES</strong> Appliances provided in this rental are: stove, refrigerator, dishwasher, washing machine, dryer, ___air conditioner(s), ____________________________. Repairs will be born by said Tenants if damage is due to negligence of Tenants.</p>
                <p><strong>SECURITY </strong>Amount of security deposit is $____________. Security shall be held by Landlord until the time said Tenants have vacated the premises and Landlord has inspected it for damages. Tenant shall not have the right to apply Security Deposit in payment of any rent. Security deposits must be raised proportionately with rent increases.</p>
                <p><strong>INSURANCE </strong>Tenant is responsible for liability/fire insurance coverage on premises. Tenant agrees to obtain a "Renter's Insurance" policy and to provide Owner or agent with a copy of policy within seven (7) days of lease execution.</p>
                <p><strong>NOTICES </strong>Should tenant decide to vacate the premises, a ________ day written notice to the landlord is required. Should landlord decide to have tenants vacated, a ________ day written notice is required. Tenant agrees to allow premises to be shown at any and all reasonable times for re-rental.</p>
                <p><strong>REAL ESTATE COMMISSION</strong> (If applicable) In the event a commission was earned by a real estate broker, Tenant shall not take possession of the premises unless all fees due broker are paid in full as agreed. Commission is payable when this lease is signed by the Tenant(s). It is solely for locating the rental for the Tenant and is not refundable under any circumstances regardless of any disputes or conditions between the Landlord and Tenant before or after occupancy is taken.</p>
                <p><strong>ACKNOWLEDGMENT </strong>Tenants hereby acknowledge that they have read, understand and agree to all parts of this document, and have received a copy.</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong> AMOUNT RECEIVED&nbsp; &nbsp; </strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>BALANCE DUE </strong></p>
                <p><strong>RENT </strong>:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _________________</p>
                <p><strong>SECURITY</strong>:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; __________________</p>
                <p><strong>BROKER'S FEE</strong>:&nbsp; ______________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;___________________</p>
                <p>________________________________________________________________________________________________________ ________________________________________________________________________________________________________ ________________________________________________________________________________________________________</p>
                <p>&nbsp;</p>
                <p><strong>THE UNDERSIGNED TENANT(S) ACKNOWLEDGES RECEIPT OF A COPY HEREOF. </strong></p>
                <p><strong>DATE: </strong>________________________________________________________</p>
                <p><strong>OWNER/AGENT__________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TENANT_______________________________ ADDRESS________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;TENANT ______________________________ PHONE__________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;PHONE________________________________&nbsp;</strong>&nbsp;</p>
                <p>&nbsp;</p>
                <p><u><strong>Basic Rental Agreement Form Tips:</strong></u></p>
                <p><strong>When filling out your LPA form, please take note of the following: </strong></p>
                <ol>
                    <li>To avoid the shifting of lines when you type, don’t forget to activate your “Overtype” feature on your word processing program. This can be done by hitting you “Insert” or “Ins” key on your keyboard. Most programs will show you an “OVR” indicator at the bottom of your window.</li>
                    <li>In MS Word, the document is best viewed in “Print Layout View”.</li>
                    <li>State Specific Lease Inserts: Please Note: Be familiar with state requirements before signing your lease or rental agreement. The LPA Lease is used successfully in all United States and also in many other countries. In the US, some states have limitations on certain lease items. Look up your state requirements on our easy to use State Specific Lease Inserts page (http://www.thelpa.com/lpa/forms/state-lease ) Each state link contains State Specific Lease - Rental Agreement clause inserts concerning notice periods for&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Notice to Terminate Tenancy,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Notice to Pay Rent or Quit (cure default or lease violation),&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Maximum Security Deposit allowed by state,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Late fee and screening fee limitations where applicable They are listed with the corresponding lease clause&nbsp;numbers to make any adjustments quick and easy.</li>
                    <li>Sample Filled in copy: If you’re not sure what to write or type in any of the blanks of the lease, we’ve prepared a sample copy below on the next page.</li>
                    <li>Paper size: The LPA Basic Rental Agreement is a short basic version of a rental agreement for very basic simple agreement. For a more detailed Lease Rental Agreement, please visit our Essential Landlord Forms page a http://www.thelpa.com/lpa/forms.html More helpful information concerning LPA forms is available at FAQ - Forms (http://www.thelpa.com/lpa/faq-forms.html ) Legal Disclaimer The Landlord Protection Agency recommends that you seek legal advice before using any of the material offered on this web site, and makes no guarantee on the effectiveness, compliance with local laws or success of any of the material offered on this web site.</li>
                </ol>
                <p>______________________________________________________<br />
                    Landlord&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date&nbsp;&nbsp;</p>
                <p>______________________________________________________<br />
                    Landlord&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date</p>
                <p>By:____________________________________________________<br />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date</p>
                <p>____________________________________________________________________________<br />
                    Broker's Associate's Printed Name</p>
                <p>____________________________________________________________________________<br />
                    Broker's Printed NameLicense No</p>
                <p>_______________________________________________________<br />
                    Firm Name</p>
                <p>________________________________________________________<br />
                    Tenant&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Date</p>
                <p>
                </p><div className="sig" />
                <br />
                Signature
                <p />
                <p>____________________________________________________________________________<br />
                    TenantDate</p>
                <p>__</p>
                </div>
                {/*- Signature POUP */} 
                {/* <div data-toggle="modal" data-target="#custom-width-modal">Custom width Modal</div> */}
                <link href="assets/signature/jquery.signaturepad.css" rel="stylesheet" />
                {/*  */}
                <div id="custom-width-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog" style={{width: '55%'}}>
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title" id="custom-width-modalLabel">Make Signature</h4>
                    </div>
                    <div className="modal-body">
                        <form method="post" action className="sigPad form-horizontal">
                        <div className="form-group">
                            <label htmlFor="name">Print your name</label>
                            <input type="text" name="name" id="name" className="name form-control" />
                            <p className="typeItDesc">Review your signature</p>
                            <p className="drawItDesc">Draw your signature</p>
                        </div>
                        <div className="form-group">
                            <ul className="sigNav">
                            <li className="typeIt"><a href="#type-it" className="current">Type It</a></li>
                            <li className="drawIt"><a href="#draw-it">Draw It</a></li>
                            {/*  <li class="upload"><input type='file' name='imgInp' id='imgInp' /></li> */}
                            <li className="upload">
                                <div className="fileupload fileupload-new m-0" data-provides="fileupload">
                                <button type="button" className="btn btn-secondary btn-file slt-sig">
                                    <span className="fileupload-new"><i className="fa fa-paper-clip" /> Select file</span>
                                    <input type="file" className="btn-secondary" name="imgInp" id="imgInp" />
                                </button>
                                </div>
                            </li>
                            <li className="clearButton"><a href="#clear">Clear</a></li>
                            </ul>
                            <div className="sig sigWrapper">
                            <div className="typed" id="typedPadId" />
                            <canvas id="signaturePadId" className="pad" width={450} height={65} />
                            <input id="drawId" type="hidden" name="output" className="output form-control" />
                            <input id="placeId" defaultValue type="hidden" name="placeId" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>
                            <input type="checkbox" />
                            I agree with the signature which i create/draw/uploaded for the agreement.</label>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="closeButtonId" lass="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary waves-effect waves-light" onclick="canvasToImg()">Import</button>
                    </div>
                    </div>
                    {/* /.modal-content */} 
                </div>
                {/* /.modal-dialog */} 
                </div>
                {/* /.modal */} 
                {/* EOD Signature POPUP */} 
            </div>
        );
    }
}