import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const transperth = require('../image/footer/transperth.png');
const hit92 = require('../image/footer/hit-92-9.png');
const pertharena = require('../image/footer/perth-arena.png');
const murdoch = require('../image/footer/murdoch.png');

export class Footer extends React.Component<{}, {value: string}> {
    constructor(props:any) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event:any) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event:any) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
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
                <a href='#' target="_blank"> <img alt='transperth' src={String(transperth)} /> </a>
                <a href='#' target="_blank"> <img alt='hit-92.9' src={String(hit92)} /> </a>
                <a href='#' target="_blank"> <img alt='perth-arena' src={String(pertharena)}  /> </a>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>

        <form onSubmit={this.handleSubmit} className='modal-form'>
            <div className='form-group'>
                <label className='hidden'>Name:</label>
                <input className='form-control' placeholder='Name' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <label className='hidden'>Email:</label>
                <input className='form-control' placeholder='Email' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <label className='hidden'>Message:</label>
                <textarea className='form-control' placeholder='Message' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <input className='form-button' type="submit" value="Submit" />
            </div>
        </form>

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>

        <form onSubmit={this.handleSubmit} className='modal-form formlable-with'>
            <div className='form-group'>
                <label className='hidden'>Name:</label>
                <input className='form-control' placeholder='Name' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <label className='hidden'>Email:</label>
                <input className='form-control' placeholder='Email' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <input className='form-button' type="submit" value="Subscribe" />
            </div>
        </form>

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>

        <form onSubmit={this.handleSubmit} className='modal-form formlable-with'>
            <div className='form-group'>
                <label className='hidden'>Name:</label>
                <input className='form-control' placeholder='Name' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <label className='hidden'>Email:</label>
                <input className='form-control' placeholder='Email' value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <input className='form-button' type="submit" value="Keeping me posted" />
            </div>
        </form>

      </div>
    </div>
  </div>
</div>

        </div>;
    }
}
