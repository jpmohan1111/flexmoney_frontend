import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import urldata from "../../../urldata";

const ContactUsFormList = (props) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);

    let url = new URL(urldata + "admin/getContactFormList");
    axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        const list = response.data.data.reverse();
        setList(list);
        setLoading(false);
      })
      .catch((error) => {
        //alert("Something Went Wrong");
      });
  }, []);
  return (
    <>
      <MaterialTable
        title="Contact Us Form"
        columns={[
          {
            title: "Date",
            field: "date",
          },
          {
            title: "Time",
            field: "time",
          },

          {
            title: "Name",
            field: "name",
          },
          {
            title: "Email Id",
            field: "emailId",
          },

          {
            title: "Phone Number",
            field: "phoneNumber",
          },

          {
            title: "Who are you",
            field: "whoareyou",
          },

          {
            title: "Company Name",
            field: "companyName",
          },
          { title: "Subject", field: "subject" },
          { title: "Message", field: "message" },
        ]}
        data={list}
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
        }}
      />
    </>
  );
};

export default ContactUsFormList;
