import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch,useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishList } from "../features/products/productSlice";

const Wishlist = () => {

     const dispatch=useDispatch();
     useEffect(( )=>{
      getWishlistFromDb()
     },[])

     const getWishlistFromDb=()=>{
      dispatch(getUserProductWishlist())
     }


   const wishlist = useSelector((state) => state?.auth?.wistlist?.wishlist);
   const removeFromWishlist=(id)=>{
      dispatch(addToWishList(id))
      setTimeout(() => {
        dispatch(getUserProductWishlist())
      }, 300);
   }
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {
            wishlist?.length === 0 && (
              <div className="text-center fs-4 py-4"> NO Product In WIsh List</div>
            )
          }
         {
          wishlist?.map((element)=>{
            return (
              <div className="col-3" key={element?._id}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={()=>removeFromWishlist(element?._id)}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={element?.images[0]?.url}
                      className="img-fluid w-100 d-block mx-auto"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{element.title}</h5>
                    <h6 className="price">₹ {element.price}</h6>
                  </div>
                </div>
              </div>
            );
          })
         }
          
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
