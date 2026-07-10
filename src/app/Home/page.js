import BestSellersSection from "./BestSellersSection";
import DealsOfferBanner from "./DealsOfferBanner";
import Herosection from "./Herosection";
import NewsletterSection from "./Newsletter";
import ProductGridSection from "./Productgrid";
import ProductSlider from "./ProductSlider";
import ShopByCategory from "./ShopByCategoryCards";
import TrendingProductsSection from "./TrendingProductSlider";

export default function HomePage() {
  return (
    <div>
      <Herosection />
      <ProductGridSection />
      <ProductSlider />
      <TrendingProductsSection />
      {/* <DealsOfferBanner /> */}
        <ShopByCategory />
        <BestSellersSection />
        <NewsletterSection />


    </div>
  );
}