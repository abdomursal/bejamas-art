import Header from "src/components/sections/Header";
import FeaturedProduct from "src/components/sections/FeaturedProduct";
import Products from "src/components/sections/Products";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getCart } from "src/lib/data";
import { useEffect } from "react";
import { storePage, storeCount } from "src/store/paginationReducer";
import { storeData, featuredProduct } from "src/store/productsReducer";
import dynamic from "next/dynamic";

const ModalCart = dynamic(() => import("src/components/ui/ModalCart"), {
  ssr: false,
});

function IndexPage({ products, cart, page, count }) {
  const state = useSelector((state: any) => state.product);

  const modal = useSelector((state: any) => state.modal.modalCart);
  const cartItem = useSelector((state: any) => state.cart.cart);
  const featuredProductState = useSelector(
    (state: any) => state.product.featuredProduct
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeData(products));
    dispatch(storePage(page));
    dispatch(storeCount(count));
    dispatch(featuredProduct(products));
  }, []);


  return (
    <>
      {modal && <ModalCart items={cartItem} />}

      <Header />
      {/* <FeaturedProduct/> */}

      <Products />
    </>
  );
}

export async function getServerSideProps(context) {
  const products = getProducts(1);
  return {
    props: {
      page: products.page,
      count: products.count,
      products: products.data,
    },
  };
}

export default IndexPage;
