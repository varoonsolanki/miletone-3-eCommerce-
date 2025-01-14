import SlugPage from "./slugPage";


const Products = ({ params }: { params: Promise<{ slug: string }> }) => {
  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <SlugPage params={params}/> 
    </section>
  );
};

export default Products;