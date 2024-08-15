import React from 'react';
import TittleCard from './../ui/TittleCard';

const Loaction = () => {
    return (
        <div className="font-kalpurush font-normal">
        <TittleCard title={"যোগাযোগের নির্দেশিকা"}/>
        <div className='shadow-md rounded-md'>
        <iframe className='rounded-b-md' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.5601516268725!2d90.374405!3d23.77873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b333e68691%3A0xe4072bba66628b11!2sDepartment%20of%20Information%20and%20Communication%20Technology!5e0!3m2!1sen!2sus!4v1723733289584!5m2!1sen!2sus"
         width="100%" height="450"  ></iframe>
        </div>
    </div>
    );
};

export default Loaction;