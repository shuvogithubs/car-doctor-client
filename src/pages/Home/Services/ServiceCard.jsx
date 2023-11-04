

const ServiceCard = ({service}) => {
    const {title,img,price}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-center">
    <h2 className="card-title">{title}</h2>
    <p className="text-[#FF3811] font-bold">Price: ${price}</p>
    <div className="card-actions">
    <a  href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;