import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Poster/Poster.js";
import CardHeader from "../../components/Poster/PosterHeader.js";
import CardAvatar from "../../components/Poster/PosterAvatar.js";
import CardBody from "../../components/Poster/PosterBody.js";
import CardFooter from "../../components/Poster/PosterFooter.js";
import avatar from "../../assets/img/faces/marc.jpg";
import axios from "axios";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const useStyles = makeStyles(styles);
const API_URL = "http://localhost:8080/persons";

export default function PersonProfile() {
  const classes = useStyles();
  const [person, setPerson] =useState(
    {
      name : "John",
      surname : "Doe",
      birthday : "1955-05-19T15:16:20.201Z",
      phoneNumber : "+555 (555) 555-5555",
      email : "john@doe.com",
      photo : [ 
          1, 
          1, 
          1
      ],
      signature : [ 
          1
      ],
      address : {
          country : "Congo",
          city : "Chicagp",
          street : "5th street",
          buildingNumber : "160",
          apartmentNumber : "76"
      },
      gender : "MALE",
  });
  const handleSubmit = (event) => {
  event.preventDefault();   
  console.log(person)
   axios.post(API_URL,person)
        .then((response) => {
          console.log("Response: "+response.data)
       })
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create Person</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, name: event.target.value})}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Surname"
                    id="surname"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, surname: event.target.value})}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Birthday"
                    id="birthday"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, birthday: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Phone number"
                    id="phone-number"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, phoneNumber: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, email: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Photo"
                    id="photo"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, photo: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Signature"
                    id="signature"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, signature: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Gender"
                    id="gender"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setPerson({...person, gender: event.target.value})}
                  />
                </GridItem>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
                    <Card>
                      <CardHeader color="rose">
                        <h4 className={classes.cardTitleWhite}>Address</h4>
                      </CardHeader>
                      <CardBody>
                       <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Country"
                                id="country"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setPerson({...person, address: { ...person.address, country: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="City"
                                id="city"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setPerson({...person, address: { ...person.address, city: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Street"
                                id="street"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setPerson({...person, address: { ...person.address, street: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Building number"
                                id="building-number"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setPerson({...person, address: { ...person.address, buildingNumber: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Apartment number"
                                id="apartment-number"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setPerson({...person, address: { ...person.address, apartmentNumber: event.target.value } })}   
                              />
                            </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Card>
                  </GridItem>
              </GridContainer>
            </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleSubmit}>Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}