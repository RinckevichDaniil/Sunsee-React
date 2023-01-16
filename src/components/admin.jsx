import { useForm } from "react-hook-form";
import { useState } from "react";
import { RadioGroup, Radio } from "react-radio-group";

export default function Admin() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    const [size, Setsize] = useState([])
  return (
    <form action="post" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter photo url" {...register("text")}/>
      <h3>Description</h3>
      <input type="Enter description" {...register("description")}/>
      <h4>Size</h4>
        <RadioGroup name='size'>
        <Radio value="A0" />A0
        <Radio value="A1" />A1
        <Radio value="A2" />A2
        </RadioGroup>
        <input type="submit" />
    </form>
  );
}
