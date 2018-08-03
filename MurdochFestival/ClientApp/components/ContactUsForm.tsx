import * as React from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

export class ContactUsForm extends React.Component<{}, {cname: string,  cemail: string,  cmessage: string, csubmittedMessage: string}> {
  constructor(props:any) {
    super(props);
    this.state = {
      cname: '',
      cemail: '',
      cmessage: '',
      csubmittedMessage: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleContactUsSubmit = this.handleContactUsSubmit.bind(this);
    this.handleSubmitResponse = this.handleSubmitResponse.bind(this);
  }

  handleChange(event:any) {
    this.setState({ [event.target.name]: event.target.value });
    //console.log(event.target.name + ": " + event.target.value);
  }

  handleSubmitResponse(responseLabel:any, responseMessage:any) {
    this.setState({ [responseLabel]: responseMessage });
  }

  handleContactUsSubmit(event:any) {

    if (!this.getFormIsValid()) {
      event.preventDefault();
      return;
    }

    const url = "/api/FormData/ContactUsSubmit";
    var data = { ContactName: this.state.cname, Email: this.state.cemail, ContactMessage: this.state.cmessage };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{ 'Content-Type': 'application/json' }
      }).then(res => res.json())
      .catch(error => this.handleSubmitResponse('csubmittedMessage', error.message))
      .then(response => this.handleSubmitResponse('csubmittedMessage', response.message));

    event.preventDefault();
  }

  getCnameValidationState() {
    const length = this.state.cname.length;
    if (length > 3 && length < 200) return 'success';
    else if (length <= 3) return 'error';
    return null;
  }

  getCEmailValidationState() {
    const length = this.state.cemail.length;
    if (length > 3 && length < 200) return 'success';
    else if (length <= 3) return 'error';
    return null;
  }

  getCMessageValidationState() {
    const length = this.state.cmessage.length;
    if (length > 3 && length < 2000) return 'success';
    else if (length <= 3) return 'error';
    return null;
  }

  getFormIsValid() {
    if (this.getCnameValidationState() === 'error' ||
      this.getCEmailValidationState() === 'error' ||
      this.getCMessageValidationState() === 'error') {
      return false;
    }
    return true;
  }

    public render() {
        return <div className="modal fade" id="contactus-address"  role="dialog" aria-labelledby="contactus-address" aria-hidden="true">
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
                            <p>Please read the info section on this website before sending an enquiry.</p>
                          </div>

                          <FormGroup controlId="cnameText" validationState={this.getCnameValidationState()}>                        
                            <FormControl type="text" name="cname" value={this.state.cname} placeholder="Name" onChange={this.handleChange} />
                            <FormControl.Feedback />
                          </FormGroup>

                          <FormGroup controlId="cemailText" validationState={this.getCEmailValidationState()}>                        
                            <FormControl type="email" name="cemail" value={this.state.cemail} placeholder="Email" onChange={this.handleChange} />
                            <FormControl.Feedback />
                          </FormGroup>

                          <FormGroup controlId="cmessageText" validationState={this.getCMessageValidationState()}>                        
                            <FormControl componentClass="textarea" name="cmessage" value={this.state.cmessage} placeholder="Message" onChange={this.handleChange} />
                            <FormControl.Feedback />
                          </FormGroup>

                          <div className='form-group'>
                              <input className='form-button' type="submit" value="Submit" />
                          </div>
                      </form>
              : <label className="label-thanks">{this.state.csubmittedMessage}</label>
            }

      </div>
    </div>
  </div>
</div>;
    }
}
