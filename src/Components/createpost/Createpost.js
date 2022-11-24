import React, { useState } from "react";
import "./Createpost.css";
import { FcVideoCall } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { BsEmojiSmile, BsUnlock } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Createpost() {
  const [item, setItem] = useState("");
  const [get, setGet] = useState([]);
  const [show, setShow] = useState();
  const [text1, setText1] = useState();
  const [response, setResponse] = useState();
  const openmodal = () => setShow(true);
  const handleclose = () => setShow(false);
  const handlePost = (e) => {
    setItem(e.target.value);
    console.log(item);
  };
  const navigate = useNavigate();
  setTimeout(() => {
    getPost();
  }, 2000);
  const getPost = () => {
    fetch(
      "https://zn4fin-4000.preview.csb.app/api/post/get-all-posts-user?userId=67",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setResponse(res?.data[0]);

        // console.log(response);

        if (res.success === true) {
          toast.success("hello!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("ivaild data plz try again", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  const mock = () => {
    // e.preventDefault();
    fetch("https://zn4fin-4000.preview.csb.app/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        text: text1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          toast.success("hello !", {
            position: toast.POSITION.TOP_CENTER,
          });

          navigate("/home");
        } else {
          toast.error("ivaild data plz try again", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });

    // setTimeout(() => {
    //   setTokens(" ");
    // }, 3000);
    setGet((olditem) => {
      return [...olditem, item];
    });
    setItem("");
  };
  const deleteuser = (id, userId) => {
    console.log(id, userId);
    fetch(`https://zn4fin-4000.preview.csb.app/api/post/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res?.data[0]);
        console.log(res);
      });
  };

  const updatehandler = (id) => {
    console.log("updateclick");
    fetch("https://zn4fin-4000.preview.csb.app/api/post/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        // text,
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res?.data[0]);
        console.log(res);
      });
  };
  // const updatedonehandlerdummy = () => {
  //   console.log("update done");
  //   fetch("https://zn4fin-4000.preview.csb.app/api/post/update", {
  //     method: "PUT",
  //     headers: {
  //       "content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({
  //       text,
  //       postId,
  //     }),
  //   })
  //     .then(() => res.json())
  //     .then(() => {
  //       setResponse(res?.data[0]);
  //       console.log("its done with new update");
  //     });
  // };
  // const hellotender = () => {
  //   console.log("hello tender update");
  // };

  // function updatehandler() {}
  return (
    <>
      <div className="  mt-4 main  col-md-5">
        <div className="">
          <img
            src="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
            className="img"
          />
          <input
            onClick={openmodal}
            className="inputwidth mx-4 mt-4"
            placeholder="What's on your mind, Rehan?"
          />
          <div className="yes"></div>
        </div>
        <div className="d-flex justify-content-between baap my-4">
          <div className="d-flex">
            <FcVideoCall className="videoicon" />
            <p className="livetext my-1">Live video</p>
          </div>
          <div className="d-flex ">
            <FcGallery className="photoicon" />
            <p className="phototext my-1">Photos/video</p>
          </div>
          <div className="d-flex">
            <BsEmojiSmile className="feelingicon" />
            <p className="feeltext my-1">Feeling/activity</p>
          </div>
        </div>

        <Modal show={show}>
          <p className="fs-4 fw-bold text-center mt-3">Create Post</p>
          <div className="no"></div>
          <Modal.Header closeButton className="xxxx" onClick={handleclose}>
            {/* <input /> */}
            <div className="d-flex">
              <img
                src="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
                className="img"
              />
              <div className="">
                <p className="mx-2 fs-5 fw-bold ">Rehan Khan </p>
                <div className="d-flex  frnd">
                  <FaUserFriends className="fufrnd" />
                  <p className="ptext mx-2">Friends</p>
                  <IoMdArrowDropdown className="teer" />
                </div>
              </div>
            </div>
          </Modal.Header>
          <textarea
            className="txtarea container"
            placeholder="What's on your mind, Rehan?"
            // onChange={handlePost}
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
          <Modal.Footer>
            <Button className="footers" onClick={mock}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="lm">
        <div className="hiiii">
          {response?.map((value, index) => {
            return (
              <div className="xoxo" key={index}>
                {value?.text}
                <div className="sanju">
                  <button onClick={() => deleteuser(value?.id, value?.userId)}>
                    delete
                  </button>
                  <button className="mx-2" onClick={updatehandler}>
                    update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Createpost;
