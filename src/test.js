import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mail-box">
        <aside className="sm-side">
          <div className="user-head">
            <a className="inbox-avatar" href="javascript:;">
              <img width="64" height="60" src="http://bootsnipp.com/img/avatars/ebeb306fd7ec11ab68cbcaa34282158bd80361a7.jpg" />
            </a>
            <div className="user-name">
              <h5>Alireza Zare</h5>
              <span><a href="#">Info.Ali.Pci@Gmail.com</a></span>
            </div>
            <a className="mail-dropdown pull-right" href="javascript:;">
              <i className="fa fa-chevron-down"></i>
            </a>
          </div>
          <div className="inbox-body">
            <a href="#myModal" data-toggle="modal" title="Compose" className="btn btn-compose">
              Compose
                          </a>
            <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" className="modal fade" style={{display: 'none'}}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                    <h4 className="modal-title">Compose</h4>
                  </div>
                  <div className="modal-body">
                    <form role="form" className="form-horizontal">
                      <div className="form-group">
                        <label className="col-lg-2 control-label">To</label>
                        <div className="col-lg-10">
                          <input type="text" placeholder="" id="inputEmail1" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Cc / Bcc</label>
                        <div className="col-lg-10">
                          <input type="text" placeholder="" id="cc" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Subject</label>
                        <div className="col-lg-10">
                          <input type="text" placeholder="" id="inputPassword1" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Message</label>
                        <div className="col-lg-10">
                          <textarea rows="10" cols="30" className="form-control" id="" name=""></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-10">
                          <span className="btn green fileinput-button">
                            <i className="fa fa-plus fa fa-white"></i>
                            <span>Attachment</span>
                            <input type="file" name="files[]" multiple="" />
                          </span>
                          <button className="btn btn-send" type="submit">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="inbox-nav inbox-divider">
            <li className="active">
              <a href="#"><i className="fa fa-inbox"></i> Inbox <span className="label label-danger pull-right">2</span></a>

            </li>
            <li>
              <a href="#"><i className="fa fa-envelope-o"></i> Sent Mail</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-bookmark-o"></i> Important</a>
            </li>
            <li>
              <a href="#"><i className=" fa fa-external-link"></i> Drafts <span className="label label-info pull-right">30</span></a>
            </li>
            <li>
              <a href="#"><i className=" fa fa-trash-o"></i> Trash</a>
            </li>
          </ul>
          <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
            <li> <h4>Labels</h4> </li>
            <li> <a href="#"> <i className=" fa fa-sign-blank text-danger"></i> Work </a> </li>
            <li> <a href="#"> <i className=" fa fa-sign-blank text-success"></i> Design </a> </li>
            <li> <a href="#"> <i className=" fa fa-sign-blank text-info "></i> Family </a>
            </li><li> <a href="#"> <i className=" fa fa-sign-blank text-warning "></i> Friends </a>
            </li><li> <a href="#"> <i className=" fa fa-sign-blank text-primary "></i> Office </a>
            </li>
          </ul>
          <ul className="nav nav-pills nav-stacked labels-info ">
            <li> <h4>Buddy online</h4> </li>
            <li> <a href="#"> <i className=" fa fa-circle text-success"></i>Alireza Zare <p>I do not think</p></a>  </li>
            <li> <a href="#"> <i className=" fa fa-circle text-danger"></i>Dark Coders<p>Busy with coding</p></a> </li>
            <li> <a href="#"> <i className=" fa fa-circle text-muted "></i>Mentaalist <p>I out of control</p></a>
            </li><li> <a href="#"> <i className=" fa fa-circle text-muted "></i>H3s4m<p>I am not here</p></a>
            </li><li> <a href="#"> <i className=" fa fa-circle text-muted "></i>Dead man<p>I do not think</p></a>
            </li>
          </ul>

          <div className="inbox-body text-center">
            <div className="btn-group">
              <a className="btn mini btn-primary" href="javascript:;">
                <i className="fa fa-plus"></i>
              </a>
            </div>
            <div className="btn-group">
              <a className="btn mini btn-success" href="javascript:;">
                <i className="fa fa-phone"></i>
              </a>
            </div>
            <div className="btn-group">
              <a className="btn mini btn-info" href="javascript:;">
                <i className="fa fa-cog"></i>
              </a>
            </div>
          </div>

        </aside>
        <aside className="lg-side">
          <div className="inbox-head">
            <h3>Inbox</h3>
            <form action="#" className="pull-right position">
              <div className="input-append">
                <input type="text" className="sr-input" placeholder="Search Mail" />
                <button className="btn sr-btn" type="button"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </div>
          <div className="inbox-body">
            <div className="mail-option">
              <div className="chk-all">
                <input type="checkbox" className="mail-checkbox mail-group-checkbox" />
                <div className="btn-group">
                  <a data-toggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                    All
                                         <i className="fa fa-angle-down "></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#"> None</a></li>
                    <li><a href="#"> Read</a></li>
                    <li><a href="#"> Unread</a></li>
                  </ul>
                </div>
              </div>

              <div className="btn-group">
                <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips">
                  <i className=" fa fa-refresh"></i>
                </a>
              </div>
              <div className="btn-group hidden-phone">
                <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                  More
                                     <i className="fa fa-angle-down "></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                  <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                  <li className="divider"></li>
                  <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <a data-toggle="dropdown" href="#" className="btn mini blue">
                  Move to
                                     <i className="fa fa-angle-down "></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                  <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                  <li className="divider"></li>
                  <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                </ul>
              </div>

              <ul className="unstyled inbox-pagination">
                <li><span>1-50 of 234</span></li>
                <li>
                  <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left"></i></a>
                </li>
                <li>
                  <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right"></i></a>
                </li>
              </ul>
            </div>
            <table className="table table-inbox table-hover">
              <tbody>
                <tr className="unread">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message  dont-show">PHPClass</td>
                  <td className="view-message ">Added a new class: Login Class Fast Site</td>
                  <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message  text-right">9:27 AM</td>
                </tr>
                <tr className="unread">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Google Webmaster </td>
                  <td className="view-message">Improve the search presence of WebSite</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 15</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">JW Player</td>
                  <td className="view-message">Last Chance: Upgrade to Pro for </td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 15</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Tim Reid, S P N</td>
                  <td className="view-message">Boost Your Website Traffic</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">April 01</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">Freelancer.com <span className="label label-danger pull-right">urgent</span></td>
                  <td className="view-message">Stop wasting your visitors </td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">May 23</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">WOW Slider </td>
                  <td className="view-message">New WOW Slider v7.8 - 67% off</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">LinkedIn Pulse</td>
                  <td className="view-message">The One Sign Your Co-Worker Will Stab</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">Feb 19</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Drupal Community<span className="label label-success pull-right">megazine</span></td>
                  <td className="view-message view-message">Welcome to the Drupal Community</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 04</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Facebook</td>
                  <td className="view-message view-message">Somebody requested a new password </td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">June 13</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Skype <span className="label label-info pull-right">family</span></td>
                  <td className="view-message view-message">Password successfully changed</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 24</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">Google+</td>
                  <td className="view-message">alireza, do you know</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 09</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="dont-show">Zoosk </td>
                  <td className="view-message">7 new singles we think you'll like</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">May 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">LinkedIn </td>
                  <td className="view-message">Alireza: Nokia Networks, System Group and </td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">February 25</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="dont-show">Facebook</td>
                  <td className="view-message view-message">Your account was recently logged into</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Twitter</td>
                  <td className="view-message">Your Twitter password has been changed</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">April 07</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">InternetSeer Website Monitoring</td>
                  <td className="view-message">http://golddesigner.org/ Performance Report</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">July 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">AddMe.com</td>
                  <td className="view-message">Submit Your Website to the AddMe Business Directory</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">August 10</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Terri Rexer, S P N</td>
                  <td className="view-message view-message">Forget Google AdWords: Un-Limited Clicks fo</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">April 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Bertina </td>
                  <td className="view-message">IMPORTANT: Don't lose your domains!</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">June 16</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">Laura Gaffin, S P N </td>
                  <td className="view-message">Your Website On Google (Higher Rankings Are Better)</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">August 10</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Facebook</td>
                  <td className="view-message view-message">Alireza Zare Login faild</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">feb 14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
      </div>
    );
  }
}

export default App;



.mail-box {
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}
.mail-box aside {
  display: table-cell;
  float: none;
  height: 100%;
  padding: 0;
  vertical-align: top;
}
.mail-box .sm-side {
  background: none repeat scroll 0 0 #e5e8ef;
  border-radius: 4px 0 0 4px;
  width: 25%;
}
.mail-box .lg-side {
  background: none repeat scroll 0 0 #fff;
  border-radius: 0 4px 4px 0;
  width: 75%;
}
.mail-box .sm-side .user-head {
  background: none repeat scroll 0 0 #00a8b3;
  border-radius: 4px 0 0;
  color: #fff;
  min-height: 80px;
  padding: 10px;
}
.user-head .inbox-avatar {
  float: left;
  width: 65px;
}
.user-head .inbox-avatar img {
  border-radius: 4px;
}
.user-head .user-name {
  display: inline-block;
  margin: 0 0 0 10px;
}
.user-head .user-name h5 {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 15px;
}
.user-head .user-name h5 a {
  color: #fff;
}
.user-head .user-name span a {
  color: #87e2e7;
  font-size: 12px;
}
a.mail-dropdown {
  background: none repeat scroll 0 0 #80d3d9;
  border-radius: 2px;
  color: #01a7b3;
  font-size: 10px;
  margin-top: 20px;
  padding: 3px 5px;
}
.inbox-body {
  padding: 20px;
}
.btn-compose {
  background: none repeat scroll 0 0 #ff6c60;
  color: #fff;
  padding: 12px 0;
  text-align: center;
  width: 100%;
}
.btn-compose:hover {
  background: none repeat scroll 0 0 #f5675c;
  color: #fff;
}
ul.inbox-nav {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
}
.inbox-divider {
  border-bottom: 1px solid #d5d8df;
}
ul.inbox-nav li {
  display: inline-block;
  line-height: 45px;
  width: 100%;
}
ul.inbox-nav li a {
  color: #6a6a6a;
  display: inline-block;
  line-height: 45px;
  padding: 0 20px;
  width: 100%;
}
ul.inbox-nav li a:hover, ul.inbox-nav li.active a, ul.inbox-nav li a:focus {
  background: none repeat scroll 0 0 #d5d7de;
  color: #6a6a6a;
}
ul.inbox-nav li a i {
  color: #6a6a6a;
  font-size: 16px;
  padding-right: 10px;
}
ul.inbox-nav li a span.label {
  margin-top: 13px;
}
ul.labels-info li h4 {
  color: #5c5c5e;
  font-size: 13px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  text-transform: uppercase;
}
ul.labels-info li {
  margin: 0;
}
ul.labels-info li a {
  border-radius: 0;
  color: #6a6a6a;
}
ul.labels-info li a:hover, ul.labels-info li a:focus {
  background: none repeat scroll 0 0 #d5d7de;
  color: #6a6a6a;
}
ul.labels-info li a i {
  padding-right: 10px;
}
.nav.nav-pills.nav-stacked.labels-info p {
  color: #9d9f9e;
  font-size: 11px;
  margin-bottom: 0;
  padding: 0 22px;
}
.inbox-head {
  background: none repeat scroll 0 0 #41cac0;
  border-radius: 0 4px 0 0;
  color: #fff;
  min-height: 80px;
  padding: 20px;
}
.inbox-head h3 {
  display: inline-block;
  font-weight: 300;
  margin: 0;
  padding-top: 6px;
}
.inbox-head .sr-input {
  border: medium none;
  border-radius: 4px 0 0 4px;
  box-shadow: none;
  color: #8a8a8a;
  float: left;
  height: 40px;
  padding: 0 10px;
}
.inbox-head .sr-btn {
  background: none repeat scroll 0 0 #00a6b2;
  border: medium none;
  border-radius: 0 4px 4px 0;
  color: #fff;
  height: 40px;
  padding: 0 20px;
}
.table-inbox {
  border: 1px solid #d3d3d3;
  margin-bottom: 0;
}
.table-inbox tr td {
  padding: 12px !important;
}
.table-inbox tr td:hover {
  cursor: pointer;
}
.table-inbox tr td .fa-star.inbox-started, .table-inbox tr td .fa-star:hover {
  color: #f78a09;
}
.table-inbox tr td .fa-star {
  color: #d5d5d5;
}
.table-inbox tr.unread td {
  background: none repeat scroll 0 0 #f7f7f7;
  font-weight: 600;
}
ul.inbox-pagination {
  float: right;
}
ul.inbox-pagination li {
  float: left;
}
.mail-option {
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
}
.mail-option .chk-all, .mail-option .btn-group {
  margin-right: 5px;
}
.mail-option .chk-all, .mail-option .btn-group a.btn {
  background: none repeat scroll 0 0 #fcfcfc;
  border: 1px solid #e7e7e7;
  border-radius: 3px !important;
  color: #afafaf;
  display: inline-block;
  padding: 5px 10px;
}
.inbox-pagination a.np-btn {
  background: none repeat scroll 0 0 #fcfcfc;
  border: 1px solid #e7e7e7;
  border-radius: 3px !important;
  color: #afafaf;
  display: inline-block;
  padding: 5px 15px;
}
.mail-option .chk-all input[type="checkbox"] {
  margin-top: 0;
}
.mail-option .btn-group a.all {
  border: medium none;
  padding: 0;
}
.inbox-pagination a.np-btn {
  margin-left: 5px;
}
.inbox-pagination li span {
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
}
.fileinput-button {
  background: none repeat scroll 0 0 #eeeeee;
  border: 1px solid #e6e6e6;
}
.inbox-body .modal .modal-body input, .inbox-body .modal .modal-body textarea {
  border: 1px solid #e6e6e6;
  box-shadow: none;
}
.btn-send, .btn-send:hover {
  background: none repeat scroll 0 0 #00a8b3;
  color: #fff;
}
.btn-send:hover {
  background: none repeat scroll 0 0 #009da7;
}
.modal-header h4.modal-title {
  font-family: "Open Sans",sans-serif;
  font-weight: 300;
}
.modal-body label {
  font-family: "Open Sans",sans-serif;
  font-weight: 400;
}
.heading-inbox h4 {
  border-bottom: 1px solid #ddd;
  color: #444;
  font-size: 18px;
  margin-top: 20px;
  padding-bottom: 10px;
}
.sender-info {
  margin-bottom: 20px;
}
.sender-info img {
  height: 30px;
  width: 30px;
}
.sender-dropdown {
  background: none repeat scroll 0 0 #eaeaea;
  color: #777;
  font-size: 10px;
  padding: 0 3px;
}
.view-mail a {
  color: #ff6c60;
}
.attachment-mail {
  margin-top: 30px;
}
.attachment-mail ul {
  display: inline-block;
  margin-bottom: 30px;
  width: 100%;
}
.attachment-mail ul li {
  float: left;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 150px;
}
.attachment-mail ul li img {
  width: 100%;
}
.attachment-mail ul li span {
  float: right;
}
.attachment-mail .file-name {
  float: left;
}
.attachment-mail .links {
  display: inline-block;
  width: 100%;
}

.fileinput-button {
  float: left;
  margin-right: 4px;
  overflow: hidden;
  position: relative;
}
.fileinput-button input {
  cursor: pointer;
  direction: ltr;
  font-size: 23px;
  margin: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-300px, 0px) scale(4);
}
.fileupload-buttonbar .btn, .fileupload-buttonbar .toggle {
  margin-bottom: 5px;
}
.files .progress {
  width: 200px;
}
.fileupload-processing .fileupload-loading {
  display: block;
}
* html .fileinput-button {
  line-height: 24px;
  margin: 1px -3px 0 0;
}
* + html .fileinput-button {
  margin: 1px 0 0;
  padding: 2px 15px;
}
@media (max-width: 767px) {
.files .btn span {
  display: none;
}
.files .preview * {
  width: 40px;
}
.files .name * {
  display: inline-block;
  width: 80px;
  word-wrap: break-word;
}
.files .progress {
  width: 20px;
}
.files .delete {
  width: 60px;
}
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
