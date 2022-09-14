import { Paper, MenuItem, Button, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Label from "../../Components/Label";
import Input from "../../Components/Input";
import { DATA } from "../../Store/Province";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
function EditAddresss(props) {
  const idd = localStorage.getItem("id");
  console.log("local storage");
  console.log(idd);

  const navigate = useNavigate();
  const [name, setname] = useState();
  const [contactNumber, setcontactNumber] = useState();
  const [prog, setprog] = useState();
  const [disg, setdisg] = useState();
  const [address, setaddress] = useState();

  const [nameError, setNameError] = useState(false);
  const [ContactnumberError, setContactnumberError] = useState(false);
  const [AddressesError, setAddressesError] = useState(false);
  // const [ProError, setProError] = useState(false);

  const [Pro, setPro] = useState();
  const [dis, setdis] = useState([]);
  // const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/address/" + idd)
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
    console.log(contactNumber.length);
    setNameError(false);
    setContactnumberError(false);
    setAddressesError(false);
    // setProError(false);
    // setdisError(false);
    if (!name.trim()) {
      toast("Invalid Name", { type: "error" });
      return setNameError(true);
    }
    if (!contactNumber.trim()) {
      toast("Invalid Contactnumber ", { type: "error" });
      return setContactnumberError(true);
    }
    if (!(contactNumber.length == 10)) {
      toast("Phone number should be 10 digit ", { type: "error" });
      return setContactnumberError(true);
    }

    if (!address.trim()) {
      toast("Invalid Address", { type: "error" });
      return setAddressesError(true);
    }

    const data = {
      name: name,
      province: Pro,
      district: dis,
      address: address,
      contactNumber: contactNumber,
    };
    console.log(data);

    axios
      .put("http://localhost:5000/address/" + idd, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === "Updated") {
          setTimeout(() => {
            toast("Succesfully Updated", { type: "success" });
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
              textAlign: "center",
              fontFamily: "open sans",
              fontWeight: "1000",
              color: "#2B4865",
              letterSpacing: -0.9,
              fontSize: 20,
              my: 1.5,
            }}
          >
            Update Address
          </Typography>
          <Box p={1} mt={2} sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Label for="full_name" title="Full Name" />
            <Input
              error={nameError}
              type="text"
              id="Full_Name"
              size="small"
              autoFocus={true}
              value={name}
              set={setname}
            />
            <Label for="contact_number" title="Contact Number" />
            <Input
              error={ContactnumberError}
              type="number"
              id="contact_number"
              size="small"
              autoFocus={true}
              value={contactNumber}
              set={setcontactNumber}
            />
            {/* province */}
            <Label for="province" title="Province" />
            <Select
              // error={ProError}
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
              value={prog}
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
              error={AddressesError}
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
