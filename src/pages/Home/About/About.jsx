
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-[#FFF]">
            <div className="hero-content gap-20  flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={person} className=" h-full rounded-lg shadow-2xl " />
                    <img src={parts} className="  lg:w-1/2 md:w-1/2 lg:h-3/4 absolute top-52 mr-5 border-8 border-white  -right-24 rounded-lg shadow-2xl" />
                </div>
                <div className="space-y-5 ml-10 w-1/2">
                    <h1 className="text-3xl font-bold text-[#FF3811]">About Us</h1>
                    <h1 className="text-5xl font-bold ">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn  bg-[#FF3811] mr-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;