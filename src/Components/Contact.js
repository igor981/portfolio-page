import React from 'react'
import emailjs from   'emailjs-com';


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o07kpme', 'template_usw12jd', e.target, 'user_tr707TsPXeoFrM2gUPLea')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.mail.value = ''
    e.target.name.value = ''
    e.target.subject.value = ''
    e.target.message.value = ''


  };
  return (
    
    <div className='contact-div' id='contact'>
      <div className='wrapper'>
        <h1 className='contact-title'>Contact</h1>

    <form  className='contact-form' onSubmit={sendEmail}>
      <div className='form-group'>
      <label htmlFor="mail">Email</label>
      <input type="text" className='inp' id="mail" name="mail" placeholder="Email.."/>
      </div>
      <div className='form-group'>
      <label htmlFor="name">Name</label>
      <input type="text" className='inp' id="name" name="name" placeholder="Your name.."/>
      </div>
      <div className='form-group'>
      <label htmlFor="subject">Subject</label>
      <input type="text" className='inp' id="subject" name="subject" placeholder="Subject.."/>
      </div>
      <div className='form-group message-div'>
      <label htmlFor="message">Message</label>
      <textarea type="text" rows='10' className='inp message-box' id="message" name="message" placeholder="Your message here.."/>
      </div>
  
      <button type='submit' className='send-btn'>Send</button>
    </form>
      </div>
</div>
  )
}

export default Contact
