import React from 'react';
import { toast } from 'react-toastify';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const sizeOptions = [
  { value: 'select', label: 'Select', disabled: true},
  { value: 'UK 8', label: 'UK 8'},
  { value: 'UK 9', label: 'UK 9'},
  { value: 'UK 10', label: 'UK 10'},
  { value: 'UK 11', label: 'UK 11'},
  { value: 'UK 12', label: 'UK 12'},
  { value: 'UK 13', label: 'UK 13'},
];

const widthOptions = [
  { value: 'select', label: 'Select', disabled: true},
  { value: 'Narrow', label: 'Narrow'},
  { value: 'Standard', label: 'Standard'},
  { value: 'E Fit', label: 'E Fit'},
  { value: 'EE Fit', label: 'EE Fit'},
  { value: 'EEE Fit', label: 'EEE Fit'},
  { value: 'Not listed', label: 'Not listed'},
];


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      selectedSize: null,
      selectedWidth: null,
      gdrp: false
    };
    this.showNotification = this.showNotification.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "mokkah-contact", ...this.state })
    })
      .then(() => this.showNotification(false))
      .catch(error => this.showNotification(error));

    this.clearForm();
    e.preventDefault();
  };

  clearForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      selectedSize: null,
      selectedWidth: null,
      gdrp: false
    })
  }

  showNotification(error) {
    console.log('yo');
    if(!error) {
      console.log('yoo 2');

      toast("Thanks for reaching out, we'll be in touch soon!", {type: toast.TYPE.SUCCESS});
    } else {
      toast("Whoops, looks like something went wrong, please try again.", {type: toast.TYPE.ERROR});
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOptions = (options) => {
     if(options.sizeOptions) {
      const selectedSize = options;
      this.setState({ selectedSize});
    } else if (options.widthOptions) {
      const selectedWidth = options;
      this.setState({ selectedWidth});
    }
  }

  handleSizeOptions = (e) => {
    this.setState({selectedSize: e.target.value});
  }

  handleWidthOptions = (e) => {
    this.setState({selectedWidth: e.target.value});
  }

  checkGDRP = () => {
    this.setState({
      gdrp: !this.state.gdrp,
    });
  }


  render() {
    const { name, email, message, selectedSize, selectedWidth, gdrp } = this.state;
    let currentSize = selectedSize || 'select';
    let currentWidth = selectedWidth || 'select';

    return (
      <section>
        <form
          name="mokkah-contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input required type="text" name="name" id="name"  value={name} onChange={this.handleChange}/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input required type="text" name="email" id="email"  value={email} onChange={this.handleChange}/>
            </div>
            <div className="field half">
              <label htmlFor="size">Shoe Size</label>
              <select name="size" id="size-select" value={currentSize} defaultValue={'select'} onChange={this.handleSizeOptions}>
                {sizeOptions.map(size =>
                  <option key={size.value} value={size.value} disabled={size.disabled}>{size.label}</option>
                )}
              </select>
            </div>
            <div className="field half">
              <label htmlFor="width">Shoe Width</label>
              <select name="width" id="width-select" value={currentWidth} defaultValue={'select'} onChange={this.handleWidthOptions}>
                {widthOptions.map(width =>
                  <option key={width.value} value={width.value} disabled={width.disabled}>{width.label}</option>
                )}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5"  value={message} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="field">
            <input required type="checkbox" id="gdrp" name="gdrp" checked={gdrp} onChange={this.checkGDRP}/>
            <label htmlFor="gdrp"><span>GDPR Agreement: </span>I consent for this website to store the information I've submitted in order for me to be contacted regarding focus groups (to give feedback on designs) and product launch.</label>
          </div>
          <ul className="actions">
            <li>
              <button type="submit" className="button submit" >Send Message</button>
            </li>
          </ul>
          <input type="hidden" name="form-name" value="mokkah-contact" />
        </form>
      </section>
    )
  }

}

export default ContactForm;

