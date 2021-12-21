import { useRouter } from 'next/router';
import * as React from 'react';

export interface  ProductItemProps {
}

export default function ProductItem (props:  ProductItemProps) {
  const router = useRouter()
  console.log(router.query);
  
  return (
    <div>
      <h1>Detai page</h1>
      <p>Query: {router.query.postid}</p>
    </div>
  );
}
