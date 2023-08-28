import { Link } from "react-router-dom";
//import { useState } from "react";
//import { toast } from 'react-toastify';

//import useAuth from "hooks/useAuth";
//import { getNotice, setFavNotice } from "redux/notices/operations";

import css from "./NoticeModal.module.css";
import icon from '../../images/sprite.svg';
//import Modal from "components/Modal";
//import AttentionModal from "components/AttentionModal";


export default function NoticeModal() {
  // { id, isFavorite }
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;
  const isFavorite = true;

  // const { data } = getNotice(id);

 // if (!data) {
  //  return;
  // };

  // const { notice } = data;

  const title = "Sell Cat Felis chaus";
  const imageURL = "https://upload.wikimedia.org/wikipedia/commons/8/82/Jungle_Cat_on_tree_at_Sundarban%2C_West_Bengal%2C_India.jpg";
  const category = "sell";
  const name = "Nick";
  const type = "cat";
  const birthday = "26.09.2018";
  const sex = "male";
  const location = "Kyiv";
  const price = 10;
  const comments = "gggggggggggg";
  const phone = "+380665214154";
  const email = "lili262808@gmail.com";

  //const {
  //  title,
   // imageURL,
  //  category,
  //  name,
   // type,
   // birthday,
  //  sex,
  //  location,
   // price,
  //  comments,
   // owner,
 // } = notice;

 // const { email, phone } = owner;

 const phoneNumber = `tel:${phone}`;
 const emailAddress = `mailto:${email}`;

 // const showPrice = category === 'sell' ? true : false;
  const showPrice = true;

 //const [isAdditionModalOpen, setIsAdditionModalOpen] = useState(false);

  const onFavoriteBtnClick = (id) => {
    if (isLoggedIn) {
      try {
       // setFavNotice(id);
      } catch (error) {
        console.log(error);
      };
    };
  //  setIsAdditionModalOpen(true);
  };

 // const close = () => {
 //   setIsAdditionModalOpen(false);
 // };


  return (
    <>
      <div className={css.container}>
        <div className={css.noticeCard}>
          <label className={css.category}>{category}</label>
          <img alt="notice pet avatar" className={css.photo} src={imageURL} />

          <div className={css.information}>
            <h2 className={css.title}>{title}</h2>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Name:</p>
              <p className={css.value}>{ name }</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Birthday:</p>
              <p className={css.value}>{ birthday}</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Type:</p>
              <p className={css.value}>{ type }</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Place:</p>
              <p className={css.value}>{ location }</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>The sex:</p>
              <p className={css.value}>{sex}</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Email:</p>
              <div className={css.contactWrap}>
                <Link className={css.valueLink} href={emailAddress}>{email}</Link>
              </div>
            </div>
            {phone !== '' && (
              <div className={css.informationItem}>
                <p className={css.informationKey}>Phone:</p>
                <div className={css.contactWrap}>
                  <Link className={css.valueLink} href={phoneNumber}>{phone}</Link>
                </div>
              </div>
            )}
            {showPrice && (
              <div className={css.informationItem}>
                <p className={css.informationKey}>Price:</p>
                <p className={css.value}>{price}</p>
              </div>
            )}
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.commentContainer}>
            <p className={css.commentKey}>Comments:</p>
            {comments}
          </div>

          <div className={css.buttons}>



            {phone === '' ? (
              <Link className={css.contactLink} to={emailAddress}>
                Contact
              </Link>
            ) : (
              <Link className={css.contactLink} to={phoneNumber}>
                Contact
              </Link>
            )}

            <button className={css.favoriteBtn} onClick={() => onFavoriteBtnClick()} isFavorite={isFavorite}>
              {isFavorite ? 'Added to' : 'Add to'}
              <svg className={css.heart} width="24" height="24">
                  <use className={css.iconHeart} href={icon + '#heart'}></use>
              </svg>
            </button>

            </div>
        </div>
      </div>

    { /* isAdditionModalOpen && (
       <Modal isOpen={isAdditionModalOpen} onClose={close}>
         <AttentionModal />
        </Modal>
      )*/}
    </>

  );
};
