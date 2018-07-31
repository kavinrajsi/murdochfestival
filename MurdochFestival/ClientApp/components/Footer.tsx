import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const transperth = require('../image/footer/transperth.png');
const hit92 = require('../image/footer/hit-92-9.png');
const pertharena = require('../image/footer/perth-arena.png');
const murdoch = require('../image/footer/murdoch.png');

export class Footer extends React.Component<{}, {cname: string,  cemail: string,  cmessage: string, csubmittedMessage: string, sname: string, semail: string, ssubmittedMessage: string, tname: string, temail: string, tsubmittedMessage: string}> {
    constructor(props:any) {
        super(props);
        this.state = {
            cname: '',
            cemail: '',
            cmessage: '',
            csubmittedMessage: '',
            sname: '',
            semail: '',
            ssubmittedMessage: '',
            tname: '',
            temail: '',
            tsubmittedMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleContactUsSubmit = this.handleContactUsSubmit.bind(this);
        this.handleSubscribeSubmit = this.handleSubscribeSubmit.bind(this);
        this.handleTicketSubmit = this.handleTicketSubmit.bind(this);
        this.handleSubmitResponse = this.handleSubmitResponse.bind(this);
      }

      handleChange(event:any) {
        this.setState({ [event.target.name]: event.target.value });
        //console.log(event.target.name + ": " + event.target.value);
      }

      handleContactUsSubmit(event:any) {

        const url = "/api/FormData/ContactUsSubmit";
        var data = { ContactName: this.state.cname, Email: this.state.cemail, ContactMessage: this.state.cmessage };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' }
          }).then(res => res.json())
          .catch(error => this.handleSubmitResponse('csubmittedMessage', error.message))
          .then(response => this.handleSubmitResponse('csubmittedMessage', response.message));

        //todo: success page/message

        event.preventDefault();
      }

      handleSubscribeSubmit(event:any) {
        const url = "/api/FormData/SubscribeSubmit";
        var data = { ContactName: this.state.sname, Email: this.state.semail};
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' }
          }).then(res => res.json())
          .catch(error => this.handleSubmitResponse('ssubmittedMessage', error.message))
          .then(response => this.handleSubmitResponse('ssubmittedMessage', response.message));

        //todo: success page/message

        event.preventDefault();
      }

      handleTicketSubmit(event:any) {
        const url = "/api/FormData/TicketSubmit";
        var data = { ContactName: this.state.tname, Email: this.state.temail};
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' }
          }).then(res => res.json())
          .catch(error => this.handleSubmitResponse('tsubmittedMessage', error.message))
          .then(response => this.handleSubmitResponse('tsubmittedMessage', response.message));

        //todo: success page/message

        event.preventDefault();
      }

      handleSubmitResponse(responseLabel:any, responseMessage:any) {
        this.setState({ [responseLabel]: responseMessage });
      }

    public render() {
        return <div className='container'>
            <div className='footer--information'>
            <div className='footer--nav'>
                <div className='copyrights--nav'>
                    <a href="#" data-toggle="modal" data-target="#contactus-address">/ Contact</a>
                    <a href="#">/ Terms of Entry</a>
                    <a href="https://policy.murdoch.edu.au/dotNet/documents/?docid=2155&public=true" >/ Privacy Policy</a>
                </div>
                <div className='footer--address'>
                    <address>
                        <span>Perth Arena</span>
                        <span>700 Wellington St, Perth WA 6000</span>
                        <span>(08) 6365 0700</span>
                    </address>
                </div>
            </div>
            <div className='footer--icons'>
                <a href='https://www.transperth.wa.gov.au/' target="_blank"> <img alt='transperth' src={String(transperth)} /> </a>
                <a href='https://www.hit.com.au/perth' target="_blank"> <img alt='hit-92.9' src={String(hit92)} /> </a>
                <a href='http://www.pertharena.com.au/' target="_blank"> <img alt='perth-arena' src={String(pertharena)}  /> </a>
                <a href='http://www.murdoch.edu.au' target="_blank"> <img alt='murdoch' src={String(murdoch)} /> </a>
            </div>
            </div>

<div className="modal fade" id="contactus-address"  role="dialog" aria-labelledby="contactus-address" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        <h4 className="modal-title" id="contactus-address">Contact us</h4>
      </div>
      <div className="modal-body">

            { this.state.csubmittedMessage === '' ?
                      <form onSubmit={this.handleContactUsSubmit} className='modal-form'>
                          <div className='form-group'>
                            <p>Got a question? Enter it below and we'll get back to you ASAP.</p>
                          </div>
                          <div className='form-group'>
                              <label className='lable-form'>Name:</label>
                              <input className='form-control' placeholder='Name' name="cname" value={this.state.cname} onChange={this.handleChange} />
                          </div>
                          <div className='form-group'>
                              <label className='lable-form'>Email:</label>
                              <input className='form-control' placeholder='Email' name="cemail" value={this.state.cemail} onChange={this.handleChange} />
                          </div>
                          <div className='form-group'>
                              <label className='lable-form'>Message:</label>
                              <textarea className='form-control' placeholder='Message' name="cmessage" value={this.state.cmessage} onChange={this.handleChange} />
                          </div>
                          <div className='form-group'>
                              <input className='form-button' type="submit" value="Submit" />
                          </div>
                      </form>
              : <label className="label-thanks">{this.state.csubmittedMessage}</label>
            }

      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="stay-date"  role="dialog" aria-labelledby="stay-date" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        <h4 className="modal-title" id="stay-date">Stay up to date</h4>
      </div>
      <div className="modal-body">
        { this.state.ssubmittedMessage === '' ?
          <form onSubmit={this.handleSubscribeSubmit} className='modal-form formlable-with'>
            <div className='form-group'>
              <p>Keep your finger on the beat – subscribe to all the latest updates on festival times, venue info and everything else you need to know.</p>
            </div>
              <div className='form-group'>
                  <label className='lable-form'>Name</label>
                  <input className='form-control' value={this.state.sname} name='sname' onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                  <label className='lable-form'>Email</label>
                  <input className='form-control' value={this.state.semail} name='semail' onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                  <input className='form-button' type="submit" value="Subscribe" />
              </div>
          </form>
            : <label className="label-thanks">{this.state.ssubmittedMessage}</label>
        }
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="tickets"  role="dialog" aria-labelledby="tickets" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        <h4 className="modal-title" id="tickets">Tickets</h4>
      </div>
      <div className="modal-body">
      { this.state.tsubmittedMessage === '' ?
        <form onSubmit={this.handleTicketSubmit} className='modal-form formlable-with'>
            <div className='form-group'>
              <p>Don't be the last to know – submit your details to get notified as soon as tickets become available!</p>
            </div>
            <div className='form-group'>
                <label className='lable-form'>Name</label>
                <input className='form-control' name="tname" value={this.state.tname} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <label className='lable-form'>Email</label>
                <input className='form-control' name="temail" value={this.state.temail} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <input className='form-button' type="submit" value="Keep me posted" />
            </div>
        </form>
            : <label className="label-thanks">{this.state.tsubmittedMessage}</label>
        }
      </div>
    </div>
  </div>
</div>

        </div>;
    }
}
