import * as React from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

export class SubscribeForm extends React.Component<{}, {sname: string, semail: string, ssubmittedMessage: string, isChecked: boolean}> {
  constructor(props:any) {
    super(props);
    this.state = {
      sname: '',
      semail: '',
      ssubmittedMessage: '',
      isChecked:true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubscribeSubmit = this.handleSubscribeSubmit.bind(this);
    this.handleSubmitResponse = this.handleSubmitResponse.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(){
    this.setState({ isChecked: !(this.state.isChecked) });
  }

  handleChange(event:any) {
    this.setState({ [event.target.name]: event.target.value });
    //console.log(event.target.name + ": " + event.target.value);
  }

  handleSubmitResponse(responseLabel:any, responseMessage:any) {
    this.setState({ [responseLabel]: responseMessage });
  }

  handleSubscribeSubmit(event:any) {

    if (!this.getFormIsValid()) {
      event.preventDefault();
      return;
    }

    const url = "/api/FormData/SubscribeSubmit";
    var data = { ContactName: this.state.sname, Email: this.state.semail};
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{ 'Content-Type': 'application/json' }
      }).then(res => res.json())
      .catch(error => this.handleSubmitResponse('ssubmittedMessage', error.message))
      .then(response => this.handleSubmitResponse('ssubmittedMessage', response.message));

    event.preventDefault();
  }

  getSnameValidationState() {
    const length = this.state.sname.length;
    if (length > 3 && length < 200) return 'success';
    else if (length <= 3) return 'error';
    return null;
  }

  getSEmailValidationState() {
    const length = this.state.semail.length;
    if (length > 3 && length < 200) return 'success';
    else if (length <= 3) return 'error';
    return null;
  }

  getFormIsValid() {
    if (this.getSnameValidationState() === 'error' ||
      this.getSEmailValidationState() === 'error' || !this.state.isChecked) {
      return false;
    }
    return true;
  }

    public render() {
        return <div className="modal fade" id="stay-date"  role="dialog" aria-labelledby="stay-date" aria-hidden="true">
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

            <FormGroup controlId="snameText" validationState={this.getSnameValidationState()}>                        
              <FormControl type="text" name="sname" value={this.state.sname} placeholder="Name" onChange={this.handleChange} />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="semailText" validationState={this.getSEmailValidationState()}>                        
              <FormControl type="email" name="semail" value={this.state.semail} placeholder="Email" onChange={this.handleChange} />
              <FormControl.Feedback />
            </FormGroup>

            <div className='form-group'>
              <label className="checkboxs">I would like to receive more information about Sound On Festival, and I have read, understand and accept the <a href="https://goto.murdoch.edu.au/Privacy" target="_blank" >privacy policy</a>.
                <input type="checkbox" defaultChecked = {this.state.isChecked} onChange = {this.handleChecked} />
                <span className="checkmark"></span>
              </label>
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
</div>;
    }
}
