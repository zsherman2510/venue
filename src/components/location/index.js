import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693.6047081049774!2d-110.97512516024429!3d32.21795500532673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d670de192264fd%3A0x6d21704396556f42!2sTucson+Convention+Center!5e0!3m2!1sen!2sus!4v1556475177154!5m2!1sen!2sus"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        title="tucson convention center"
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
