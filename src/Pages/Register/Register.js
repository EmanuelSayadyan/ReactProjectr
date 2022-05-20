import React from "react";
import {useForm} from "react-hook-form"
import Input from "../../Components/Input/input";
import "./Register.css"

const Register = () => {
    const {handleSubmit, control } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="formheader">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="firstName" control={control} type="text" placeholder="first name"/>
                <Input name="lastName" control={control} type="text" placeholder="last name"/>
                <Input name="email" control={control} type="email" placeholder="email"/>
                <Input name="password" control={control} type="password" placeholder="password"/>
                <input type="submit" className="inpsubmit" value={"Submit"}></input>
            </form>
        </div>
    );
}

export default Register;