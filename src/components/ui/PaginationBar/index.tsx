import React from "react";
import Image from "next/image";
import style from "./PaginationBar.module.css";
import { changePage , storeCount} from "src/store/paginationReducer";
import { getProducts } from 'src/lib/data'
import {storeData } from "src/store/productsReducer";
import { useAppDispatch, useAppSelector } from "src/store/hooks";


const PaginationBar = () => {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.pagination.activePage);
  const pages = useAppSelector((state) => state.pagination.pages);
  const count = useAppSelector((state) => state.pagination.count);

  const getData = (page: number)=>{
    const products = getProducts(page);
    dispatch(storeData(products.data))
    dispatch(storeCount(products.count))
    dispatch(changePage(products.page))
  }

  const nextPageHandler = () => {
    const newPage = currPage +1  
    getData(newPage)
  };
  const prevPageHandler = () => {
    const newPage = currPage -1  
    getData(newPage)
  };
  const onClickPage = (page) => { 
    getData(page)
  };

  return (
    <div className={style.container}>
      {currPage !== 1 && (
        <div className={style.arrowWrapper} onClick={() => prevPageHandler()}>
          <Image src="/images/arrow_left.png" height={16} width={8} />
        </div>
      )}
      {pages.map((page : number, index : number) => {
        return (
          <div
            key={index}
            onClick={() => onClickPage(page)}
            className={style.pageNumber}
            style={{ color: currPage == index + 1 ? "black" : "#B4B4B4" }}
          >
            <a>{page}</a>
          </div>
        );
      })}
      {currPage !== count && (
        <div
          className={style.arrowWrapper}
          onClick={() => nextPageHandler()}
        >
          <Image src="/images/arrow_right.png" height={16} width={8} />
        </div>
      )}
    </div>
  );
};

export default PaginationBar;
