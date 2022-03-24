import Header from "src/components/sections/Header";
import FeaturedProduct from "src/components/sections/FeaturedProduct";
import Products from "src/components/sections/Products";
import { getProducts } from "src/lib/data";
import { useEffect } from "react";
import { storePage, storeCount } from "src/store/paginationReducer";
import { storeData, featuredProduct } from "src/store/productsReducer";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

const ModalCart = dynamic(() => import("src/components/ui/ModalCart"), {
  ssr: false,
});
const ModalFilter = dynamic(() => import("src/components/ui/ModalFilter"), {
  ssr: false,
});

function IndexPage({ products, cart, page, count }) {
  const state = useAppSelector((state) => state.product);

  const modalCart = useAppSelector((state) => state.modal.modalCart);
  const modalFilter = useAppSelector((state) => state.modal.modalFilter);

  const cartItem = useAppSelector((state) => state.cart.cart);

  const featuredProductState = useAppSelector(
    (state) => state.product.featuredProduct
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(storeData(products));
    dispatch(storePage(page));
    dispatch(storeCount(count));
    dispatch(featuredProduct(products));
  }, []);
  
  return (
    <>
    <link rel="shortcut icon" href="favicon/favicon.ico"/>
      {modalCart && <ModalCart items={cartItem} />}
      <Header />
      <FeaturedProduct/>
      {modalFilter && <ModalFilter />}
      <Products isOpenModal={modalFilter}/>
    </>
  );
}

export async function getServerSideProps() {
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
