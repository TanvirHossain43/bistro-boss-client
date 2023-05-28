import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle 
            heading={"Featured Item"}
            subHeading={"check it out"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-4">
                    <p>Aut 20,2029</p>
                    <p className="uppercase">Where can i get  some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda explicabo adipisci repellendus minus nobis ipsum veritatis, amet quaerat itaque corrupti ipsa ab laudantium dolore, eveniet aspernatur, est voluptatum. Adipisci impedit beatae quasi animi quos repellendus nostrum voluptatem maiores autem culpa sint quisquam natus, distinctio, voluptas numquam cumque et non itaque!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;