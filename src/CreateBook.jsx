import React, { useState } from 'react'
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';




const CreateBook = ({ editmode, editBook, setbooks, user, seteditmode }) => {


  const formik = useFormik({

    initialValues: {
      Title: user.Title || "",
      Author: user.Author || "",
      Isbn: user.Isbn || "",
      Publication: user.Publication || ""
    },

    validate: values => {
      const errors = {};

      if (!values.Title) {
        errors.Title = "Title is required";
      }

      if (!values.Author) {
        errors.Author = "Author is required";
      }

      if (!values.Isbn) {
        errors.Isbn = "ISBN is required";
      }

      if (!values.Publication) {
        errors.Publication = "Publication Date is required";
      }

      return errors;
    },

    onSubmit: values => {
      if (editmode) {
        setbooks((prevbooks) =>
          prevbooks.map((book) => book.id === user.id
            ? {
              ...book,
              Title: values.Title,
              Author: values.Author,
              Isbn: values.Isbn,
              Publication: values.Publication
            } : book
          )
        )
        values.Title = "";
        values.Author = "";
        values.Isbn = "";
        values.Publication = "";
        alert("successfully updated")
        seteditmode(false)
      }
      else {
        setbooks(preBook => [
          ...preBook,
          {
            id: uuid(),
            Title: values.Title,
            Author: values.Author,
            Isbn: values.Isbn,
            Publication: values.Publication

          }])

          alert("successfully submited")
        values.Author = "";
        values.Title = "";
        values.Publication = "";
        values.Isbn = ""

   
      }
    }



  })




  return (
    <div style={{ marginTop: '40px' }}>
      <form onSubmit={(e) => { formik.handleSubmit(e); formik.setTouched({ Title: true, Author: true, Isbn: true, Publication: true }); }}>
        <label>Title:</label>
        <input
          style={{ marginRight: '15px', borderRadius: '5px' }}
          value={formik.values.Title}
          name='Title'
          onChange={formik.handleChange}
          placeholder='Enter Title'
        ></input>

        {formik.touched.Title && formik.errors.Title && (
          <div style={{ color: 'red' }}>{formik.errors.Title}</div>

        )}

        <label>Author:</label>
        <input
          style={{ marginRight: '34px', borderRadius: '5px', marginBottom: '20px' }}
          placeholder='Enter Author'
          name='Author'
          onChange={formik.handleChange}
          value={formik.values.Author}
        ></input>
        {formik.touched.Author && formik.errors.Author && (
          <div style={{ color: 'red' }}>{formik.errors.Author}</div>
        )}

        <label>ISBN:</label>
        <input
          style={{ marginRight: '20px', borderRadius: '5px' }}
          placeholder='Enter ISBN'
          name='Isbn'
          onChange={formik.handleChange}
          value={formik.values.Isbn}
        ></input>
        {formik.touched.Isbn && formik.errors.Isbn && (
          <div style={{ color: 'red' }}>{formik.errors.Isbn}</div>
        )}<br />

        <label style={{ marginLeft: '-90px' }}>Publication Date:</label>
        <input
          style={{ marginRight: '20px', borderRadius: '5px' }}
          placeholder='Enter Publication Date'
          name='Publication'
          onChange={formik.handleChange}
          value={formik.values.Publication}
        ></input>
        {formik.touched.Publication && formik.errors.Publication && (
          <div style={{ color: 'red' }}>{formik.errors.Publication}</div>
        )}
        <br />
        <br />

        {editmode === false ? (
          <button className='btn btn-success'>Submit</button>
        ) : (
          <>
            <button className='btn btn-success'>Update</button>
          </>
        )}
      </form>
    </div>
  );


}

export default CreateBook