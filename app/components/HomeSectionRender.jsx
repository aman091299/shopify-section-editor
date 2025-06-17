import Banner from "./banner"
import CategoryGrid from "./categoryGrid";
import ProductSlider from "./productSlider";

const HomeSectionRenderer = ({ section }) => {

 return(
    <div>
    <ProductSlider title={section.title} data={section.data} />
    
      <Banner title={section.title} data={section.data} />
  
     <CategoryGrid title={section.title} data={section.data} />
</div>
)
  
};
export default HomeSectionRenderer;