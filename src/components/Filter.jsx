import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";
import FormSelect from "./Form/FormSelect";
import { useLoaderData } from "react-router-dom";

const Filter = () => {
  const { params } = useLoaderData();
  const { name, category, price, sort } = params;
  const categories = ["sepatu", "pakaian", "makanan", "elektronik"];
  return (
    <>
      <Form
        method="get"
        className="bg-slate-100 rounded-md px-8 py-4 grid gap-x-4 gap-y-2 grid-cols-2"
      >
        <FormInput
          label="search product"
          name="name"
          type="seach"
          defaultValue={name}
        />
        <FormSelect
          label="select categories"
          name="category"
          list={categories}
          defaultValue={category}
        />
        {/* <FormSelect label="Price" name="price" list={[""]} />
        <FormSelect label="Sort" name="sort" list={[""]} /> */}
        <button type="submit" className=" btn btn-primary">
          Search
        </button>
        <Link to={"/products"} className="btn btn-accent ">
          {" Reset "}
        </Link>
      </Form>
    </>
  );
};

export default Filter;
