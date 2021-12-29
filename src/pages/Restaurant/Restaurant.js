import React from 'react';
import './Restaurant.scss';

export default function Restaurant(props) {
  const { Res_id, Res_img, Res_name, Rates, Reviews } = props;
  //여기는 componet가 구성되어있는 곳
  console.log(props);
  return (
    <>
      <div className="List_Container">
        <div className="List_Img">
          <img key={Res_id} alt="Res_image" src={Res_img} />
        </div>
        <div className="List_Main">
          <h3>{Res_name}</h3>
          <div className="Res_info">
            <span>{Rates}</span> <span>{Reviews}</span>
          </div>
        </div>
      </div>
    </>
  );
}
