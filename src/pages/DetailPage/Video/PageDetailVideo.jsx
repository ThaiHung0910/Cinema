import { Modal } from "antd";
import React, { useState } from "react";
import { linkPressPlayVideo } from "../../../assets/img/js/img";

export default function PageDetailVideo({ dataTrailer }) {
  const [open, setOpen] = useState(false);


  let extractVideoId = (url) => {
    if (!url?.includes("youtube.com")) {
      return null;
    }
  
    // Trích xuất VIDEO_ID từ URL
    const match = url.match(/[?&]v=([^&]+)/);
    const videoId = match && match[1];
  
    return videoId || null;
  }

  const videoId = extractVideoId(dataTrailer);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div
        onClick={() => setOpen(true)}
        className="w-14 h-14 hover:w-20 hover:h-20 duration-150 cursor-pointer"
      >
        <img className="w-full h-full" src={linkPressPlayVideo} alt="" />
      </div>
      {open ? (
        <Modal
          styles={{content: { padding: "0px" }}}
          footer={null}
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={900}
        >
          <iframe
            title="map"
            width={"100%"}
            height={window.innerWidth < 768 ? 250 : 500}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}
