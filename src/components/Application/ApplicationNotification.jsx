import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";


const ApplicationNotification = ( ) => {
  const [MyNotification, setMyNotification] = useState([]);
  const { isAuthorized , user } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    
      try {
        if (user && user.role === "Job Seeker") {
          axios
            .get("http://localhost:4000/api/v1/application/notification/list", {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res)
              setMyNotification(res.data.app_view);
            });
        }
      } catch (error) {
        
        setMyNotification([]);
      }
    
    
  }, [isAuthorized]);
  if (!isAuthorized || (user && user.role !== "Job Seeker")) {
    navigateTo("/");
  }
 


  return (
    <>
      <section className="my_applications page">
      <div className="container">
        <h1>ALL NOTIFICATION</h1>
        {MyNotification.length <= 0 ? (
            <>
              {" "}
              <h4>No Notification Found</h4>{" "}
            </>
          ) : (
            MyNotification.map((element) => {
              return (
                <div className="job_seeker_card">
                  <div className="detail">
                  <p>
                      <span>Your Application for  {element.role_apply} role view  by recruiter .</span>
                  </p>
                  </div>
                </div>
              );
            })
          )}
      </div>
    </section>
    </>
  );
};

export default ApplicationNotification;