const Embed = () => {
  return (
    <div className="w-full flex flex-col  px-20 mb-12">
      <p className="text-3xl text-black text-center my-8">
        Click the map & find us
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.0267148974913!2d47.86994547604026!3d41.00278847135132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzEwLjAiTiA0N8KwNTInMjEuMSJF!5e0!3m2!1sen!2saz!4v1720550257659!5m2!1sen!2saz"
        className=" w-full h-[600px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Embed;
