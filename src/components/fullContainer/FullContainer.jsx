import "./FullContainer.css"
import "./mobile.css"

function FullContainer({content}) {
  return <div className="full-container">
    {content}
    {/* <Marketplace/> */}
    {/* <ProductView product={products['p1']}/> */}
    {/* <BagView items={products}/> */}
  </div>;
}

export default FullContainer;
