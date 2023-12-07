'use client'

import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number , setNumber] = useState("")
  const [general, setGeneral] = useState("");
  const [tAOne , seTAOne] = useState("")
  const [tATwo , seTATwo] = useState("")
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

  function handleBlur (e) {
    console.log(e);}

  const handleChange = () => {
    if (name !== '' && email !== '' && number !== '' && general !== '' && tAOne !== '' && tATwo !== '') {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormComplete) {
      return;
    }


    setName('');
    setEmail('');
    setNumber('');
    setGeneral('');
    seTAOne('');
    seTATwo('');
    setIsFormComplete(false);
  };

  return (
    <form onSubmit={ handleSubmit} className='mx-64'>
      <input type="text" placeholder="your name" value={name} onChange={(e) => { setName(e.target.value); handleChange(); }} className='bg-slate-100 pl-40 py-0.5 mb-0.5 '/>
      <br />
      <input type="email" placeholder="your email" value={email} onChange={(e) => { setEmail(e.target.value); handleChange(); }} className='bg-slate-100 pl-40 py-0.5 mb-0.5' />
      <br />
      <input type="number" placeholder="your number" value={number} onChange={(e) => { setNumber(e.target.value); handleChange(); }} className='bg-slate-100 pl-40 py-0.5 mb-0.5' />
      <br />

      <div className="dropdown">
        <div onClick={(e) => {setIsActive(!isActive);}} className="dropdown-btn">
          {selected}
          <span
            className={isActive ? <IoIosArrowDown />:<IoIosArrowUp style={{color:'orange'}} />}/>
        </div>
        <div className="dropdown-content" style={{ display: isActive ? "block" : "none" }}>
          <div onClick={(e) => {setIsSelected(e.target.textContent); setIsActive(!isActive);}} className="item">One</div>
          <div className="item" onClick={(e) => {setIsSelected(e.target.textContent); setIsActive(!isActive);}}>Two</div>
          <div className="item" onClick={(e) => {setIsSelected(e.target.textContent); setIsActive(!isActive);}}>Three</div>
        </div>
      </div>
      {/* <div>
      <select required className='bg-slate-100 pl-40 py-0.5 mb-0.5' value={general} onChange={(e) => {setGeneral(e.target.value);}}>
        <option className="name" value="" disabled selected hidden>Your general occupation</option>
        <option value="architect">Architect/Architecture Office</option>
        <option value="constructionCompay">Construction Compay/Real Estate Developer</option>
        <option value="realEstateAgency">Real Estate Agency</option>
        <option value="serviceProvider">Construction or Architectural Material/Service Provider</option>
        <option value="investorOfSpecialPlaces">Investor of Special Places</option>
      </select></div><br/> */}
      <textarea isDisabled
        className='bg-slate-100 pl-40 py-0.5 mb-0.5'
        placeholder="A brief description of your business"
        value={tAOne} onChange={(e) => { seTAOne(e.target.value); handleChange(); }}/><br/>
      <textarea isDisabled
        className='bg-slate-100 pl-40 py-0.5 mb-0.5'
        placeholder="How do you ideally expect us to help"
        value={tATwo} onChange={(e) => { seTATwo(e.target.value); handleChange(); }}/><br/>
      <button className='bg-orange-500 my-5 py-1 px-2 text-white' type="submit" disabled={!isFormComplete}>Submit</button>
    </form>
  );
};

export default ContactForm;

