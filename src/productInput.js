import React from "react";
import firebase from './firebase'

export const productInput = ({ product }) => {
  const [name, setName] = React.useState(product.name);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('Products').doc(product.id).set({...product, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('Products').doc(product.id).delete()
  }

  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Updat</button>
      <button onClick={onDelete}>Delet</button>
    </>
  );
};