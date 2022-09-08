import { Paper, MenuItem, Button, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Label from "../../Components/Label";
import Input from "../../Components/Input";
import { DATA } from "../../Store/Province";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
function EditAddresss(props) {
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [contactNumber, setcontactNumber] = useState();
  const [prog, setprog] = useState();
  const [disg, setdisg] = useState();
  const [address, setaddress] = useState();

  const [Pro, setPro] = useState();
  const [dis, setdis] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/address/" + id)
      .then((res) => {
        console.log(res.data.name);
        setname(res.data.name);
        setcontactNumber(res.data.contactNumber);
        setprog(res.data.province);
        setdisg(res.data.district);
        setaddress(res.data.address);
      })
      .catch(() => {});
  }, []);

  const [district, setDistricts] = useState([]);
  const onUpdate = () => {
    const data = {
      name: name,
      province: Pro,
      district: dis,
      address: address,
      contactNumber: contactNumber,
    };

    axios
      .put("http://localhost:5000/address/" + id, { data })
      .then((res) => {
        if (res.data.msg === "Updated") {
          setTimeout(() => {
            toast("succesfully Updated", { type: "success" });
          }, 1000);
          setTimeout(() => {
             navigate("/profile/addressbook");
          }, 3000);
        
        }
      })
      .catch((er) => {
        toast("unable to update", { type: "error" });
      });
  };
  return (
    <>
      <Paper elevation={4}>
        <ToastContainer />
        <Box
          p={3}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px" }}
          pt={5}
          pb={10}
        >
          <Typography
            sx={{
              fontFamily: "open sans",
              fontWeight: "1000",
              color: "#2B4865",

              fontSize: 18,
              my: 1.5,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            Update Address
          </Typography>
          <Box p={1} mt={2} sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Label for="full_name" title="Full Name" />
            <Input
              type="text"
              id="Full_Name"
              size="small"
              autoFocus={true}
              value={name}
              set={setname}
            />
            <Label for="contact_number" title="Contact Number" />
            <Input
              type="text"
              id="contact_number"
              size="small"
              autoFocus={true}
              value={contactNumber}
              set={setcontactNumber}
            />
            {/* province */}
            <Label for="province" title="Province" />
            <Select
              sx={{ mb: 1, color: "#1597BB", fontWeight: "500" }}
              onChange={(event) => {
                setPro(() => {
                  let data = DATA.filter((item, index) => {
                    return item.province === event.target.value;
                  });
                  return data[0].province;
                });
                setDistricts(() => {
                  let data = DATA.filter((item, index) => {
                    return item.province === event.target.value;
                  });
                  return data[0].districts;
                });
              }}
              fullWidth
              required
              size="small"
              color="info"
              id="province"
            >
              {/* <MenuItem value={prog}></MenuItem> */}
              <MenuItem disabled value={prog}>
                <em
                  style={{
                    fontFamily: "open sans",
                    fontWeight: "800",
                    fontSize: 13,
                    color: "#1A374D",
                  }}
                >
                  {prog}
                </em>
              </MenuItem>
              {DATA.map((row, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{
                      fontFamily: "open sans",
                      fontSize: 15,
                      color: "#333",
                    }}
                    value={row.province}
                  >
                    {row.province}
                  </MenuItem>
                );
              })}
            </Select>
            {/* district */}
            <Label for="district" title="District" />
            <Select
              sx={{ mb: 1, color: "#1597BB", fontWeight: "500" }}
              fullWidth
              required
              size="small"
              color="info"
              id="district"
              value={disg}
              onChange={(event) => {
                // setdisError(false);
                setdis(() => {
                  let data = district.filter((item, index) => {
                    if (item === event.target.value) {
                      return item;
                    }
                  });

                  return data[0];
                });
              }}
            >
              <MenuItem disabled value={disg}>
                <em
                  style={{
                    fontFamily: "open sans",
                    fontWeight: "800",
                    fontSize: 13,
                    color: "#1A374D",
                  }}
                >
                  {disg}
                </em>
              </MenuItem>
              {district.map((row, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{
                      fontFamily: "open sans",
                      fontSize: 15,
                      color: "#333",
                    }}
                    value={row}
                  >
                    {row}
                  </MenuItem>
                );
              })}
            </Select>
            {/* address */}
            <Label for="address" title="Address" />
            <Input
              id="address"
              multiple={true}
              minRows={3}
              maxRows={4}
              type="text"
              size="small"
              autoFocus={true}
              value={address}
              set={setaddress}
            />
            <br />
            <Button
              variant="contained"
              size="small"
              onClick={onUpdate}
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                textTransform: "none",
                letterSpacing: 1.5,
              }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default EditAddresss;
