import { client } from '@/utils/client';
import React,{useState} from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        eventType:"",
        message:""
    })
    const handleFormData = async () =>{
        const doc = {
            _type: "contact",
            name:formData.name,
            email:formData.email,
            phone:formData.phone,
            eventType:formData.eventType,
            message:formData.message
           
            
          };

    await client.create(doc).then(()=>res.status(201).json('Message Sent'))
  router.push('/')
    }
  return (
    <section id="enquiry" className="booking-section pt-60 pb-50">
    <div className="container">
      <div className="row align-items-xl-center">
        <div className="col-lg-6">
          {/*=== Booking Content Box ===*/}
          <div className="booking-content-box mb-50 wow fadeInLeft">
            <div className="section-title mb-50">
              <span className="sub-title">Fill the Form</span>
              <h2>Book Your Next Event</h2>
            </div>
            <form onSubmit={handleFormData} className="booking-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_group">
                   
                    <input
                    value={formData.name}
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                      type="text"
                      className="form_control datepicker"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                   
                    <input
                     value={formData.email}
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                      type="email"
                      className="form_control datepicker"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                  
                    <input
                    value={formData.phone}
                    onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                      type="number"
                      className="form_control"
                      placeholder="Contact No"
                      name="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                  
                    <input
                    value={formData.eventType}
                    onChange={(e)=>setFormData({...formData,eventType:e.target.value})}
                      type="text"
                      className="form_control"
                      placeholder="Event Type"
                      name="text"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <textarea
                  value={formData.message}
                    onChange={(e)=>setFormData({...formData,message:e.target.value})}
                    name="comments"
                    placeholder="Comments"
                    className="form_control"
                    cols={8}
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12">
                  <div className="form_group">
                    <button type="submit" className="main-btn primary-btn">
                      Submit
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          {/*=== Booking Image Box ===*/}
          <div className="booking-image-box mb-50 ml-lg-45 wow fadeInRight">
            <img
              src="assets/images/contact/contact2.png"
              className="radius-60"
              alt="Contact Image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactForm