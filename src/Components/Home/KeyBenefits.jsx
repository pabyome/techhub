
import image1 from "../../assets/keyBenefitsData/image (1).png";
import image2 from "../../assets/keyBenefitsData/image (2).png";
import image3 from "../../assets/keyBenefitsData/image (3).png";
import image4 from "../../assets/keyBenefitsData/image (4).png";

const keyBenefitsData = [
  {
    img: image4,
    title: "Certification Excellence",
    info: "Propel your career forward by not just completing a course but by becoming certified. At Fountain TechHub, we don't just offer certificates; we provide a stamp of excellence, recognized by industries worldwide.",
    bgColor: "bg-[#ffffffff]",
  },
  {
    img: image1,
    title: "Master Fundamentals",
    info: "Dive deep into our comprehensive curriculum tailored to master the fundamentals of your chosen learning track. Unlock a robust understanding that goes beyond basics, setting you on a path to true expertise.",
    bgColor: "bg-[#A0A0C8]",
  },
  {
    img: image2,
    title: "Experienced Instructors",
    info: "Elevate your learning experience with guidance from industry-seasoned instructors. Our tutors are not just educators; they're accomplished professionals, bringing real-world insights and practical knowledge to every lesson, ensuring you learn from the best in the field.",
    bgColor: "bg-[#d9e3d1]",
  },
  {
    img: image3,
    title: "Real-World Projects",
    info: "Immerse yourself in our dynamic learning environment that goes beyond theory. Our curriculum is enriched with real-world projects, offering hands-on experience to bridge the gap between knowledge and practical application. Get ready to apply what you learn in a real professional setting.",
    bgColor: "bg-[#eec728]",
  },

];

const KeyBenefits = () => {
  return (
    <div className="max-xl:px-5 py-12 max-w-[1440px] mx-auto text-center">
      <h1 className="text-center text-2xl lg:text-[40px] lg:leading-[48px] font-bold ">
          Why You Should Enroll Today
      </h1>
      <p>
      We offer a comprehensive curriculum that teaches you everything you need
      to know about your chosen learning track. At Fountain TechHub we understand
      that the best way to learn is by doing. Our learning methods are;
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
      {keyBenefitsData.map((item, index) => {
        return (
        <div
          className={`${item.bgColor} w-full px-2 py-4 rounded-2xl shadow`}
          key={index}
        >
          <div className=" w-fit mx-auto">
          <img src={item.img} alt={item.title} loading="lazy" />
          </div>
          <div>
          <h2 className="text-2xl font-normal  leading-loose">
            {item.title}
          </h2>
          <p>{item.info}</p>
          </div>
        </div>
        );
      })}
      </div>
    </div>
    );
};

export default KeyBenefits;
