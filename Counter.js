
import React, { useState, useEffect } from 'react'/* state tanımla bunun için react altında ki {useState} import et */

function Counter() {
  const [count, setCount] = useState(0);/* statin ismi (hangi isimle kullanılacak,bunu hangi fonksiyonla tetiklenecek ,ve başlangıç değerini belirt) */
  const [amount, setAmount] = useState(1);
  /* useEffect(() => {
    console.log("Bir state değişti");
  }) 
  useEffect(() => {
    console.log("component mount edildi");
  }, [])//component ilk kez mount edildiğinde doma mound edildiği anda durumu yakala ilk parametre fonk ikinci par array

  useEffect(() => {
    console.log("count state değişti");
  }, [count])//array içine count yaz

  useEffect(() => {
    console.log("amount state değişti");
  }, [amount])*/
  useEffect(() => {
    let interval = setInterval(() => { console.log("interval"); setCount((prev) => prev + 1); }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={()=>setCount(count+amount)}>Arttır</button> */}
      <button onClick={() => setCount(prev => prev + amount)}>Arttır</button>
      <hr />
      <div>Arttırma : +{amount}</div>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  )
}

export default Counter;