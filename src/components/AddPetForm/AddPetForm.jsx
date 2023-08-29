import {
    FormikStepper,
    FormikStep,
    InputField,
    // CheckBoxField,
    RadioField,  
  } from "formik-stepper";
  
   import * as Yup from "yup";
   import { addNotice } from "redux/notices/operations";
import { useDispatch } from 'react-redux';
import { useRef} from 'react';
import { useLocation } from 'react-router-dom';
 
  // import "formik-stepper/dist/style.css";
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import "./AddPetForm.css";
import { RadioButton, BackLink } from "./AddPetForm.styled";

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Enter a name'),
    // date: Yup.date().required('Required').format('DD-MM-YYYY', true),
    date: Yup.date().typeError('The value must be a date (DD-MM-YYYY)')
      .required('Enter a date of birth'),
    type: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Enter a type'),
    title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Enter a type name pet'),
    location: Yup.string().required('Enter a location'),
    price: Yup.number().integer().min(1).required('Enter the price'),
    comments: Yup.string().max(120, 'Too Long!'),
   
  });
    

export default function AddPetForm() {
    
  const dispatch = useDispatch(); 
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
    
  
     const onSubmit = (values) => {
      console.log("values", values);
      
      const { name, category, date, type, title, location, sex, price, comments = "" } = values;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("date", date);
      formData.append("type", type);
      formData.append("title", title);
      formData.append("location", location);
      formData.append("sex", sex);
      formData.append("price", price);
      formData.append("comments", comments);

      dispatch(addNotice(formData));
    };
  
  return (
    <FormikStepper
      /// Accept all Formik props
      onSubmit={onSubmit} /// onSubmit Function
      initialValues={{
        // Choose option
        category: "sell",
        //Personal details
        name: "",
        date: "",
        type: "",
        title: "",
        //  More info
        sex: "male",
        location: "",
        price: 0,
        comments: "",

      }}
      validationSchema={validationSchema}
      withStepperLine /// false as default and If it is false, it hides stepper line
      nextButton={{ label: "Next" }}
      prevButton={{ label: "Back", style: { color: "#54ADFF", background: "transparent"  }  }}  
      submitButton={{ label: "Done"}}
      >
        {/*  First Step */}
        <FormikStep
          label="Choose option" /// The text label of Step
          labelColor="#00C3AD" /// css-colors => #fff
          circleColor="#00C3AD" /// css-colors => #fff
        >
            <RadioField 
            name="category"
            labelColor="#000"
            options={[
              { label: "your pet", value: "your-pet" },
              { label: "sell", value: "sell" },
              { label: "lost/found", value: "lost-found" },
              { label: "in good hands", value: "in-good-hands" }
              
            ]}
          />
          
        </FormikStep>
        {/* Second Step */}
        <FormikStep label="Personal details" circleColor="#54ADFF">
        {/* for category !== your pet */}
        {/* {false && */}
          <InputField
            name="title"
            label="Title of add"
            placeholder="Type name pet"
            type="text"
          />
        {/* // } */}
        
          {/* for all category */}
        <InputField
            name="name"
            label="Pet’s name"
            type="text"
            placeholder="Type name pet" 
          />
          <InputField
            name="date"
            label="Date of birth"
            placeholder="Type date of birth"
            type="text"
          />
          <InputField
            name="type"
            label="Type"
            placeholder="Type of pet"
            type="text"
          />   
      </FormikStep>
           {/* Third Step */}
      <FormikStep label="More info" circleColor="#CCE4FB"> 
          {/* for caterory = your pet */}
          <div>
          <RadioField
            name="sex"
            labelColor="#000"
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" }              
            ]}
            />
            
          </div>
          <div>
          <InputField
            name="location"
            label="Location"
            placeholder="Type of location"
            type="text"
            // style={{ width: "98%" }}
            /> 
             {/* for category !== selll */}
            <InputField
            name="price"
            label="Price"
            placeholder="Type of price"
            type="text"
            />
            <InputField
            name="comments"
            label="Comments"
            placeholder="Type of pet"
            type="text"
            />
          </div>
                
        </FormikStep>
    
        
      </FormikStepper>
    );
  };
  

