import { useEffect } from "react";
import { firebaseDb } from "./FirebaseInitializer";
import { getDocs, collection, doc, query, getDoc, where, addDoc } from "firebase/firestore";

export const baseUrl = "/img/"
//used in Home.js
export const GetProductsInfo = (setState) => {
    const querySnapshot = collection(firebaseDb, "products");
    getDocs(querySnapshot).then((res) => {
        const data = res.docs.map((product) => {
            return { id: product.id, ...product.data() }
        })
        setState(data)
        console.log(data())
        console.log(data)
    }).catch(err => console.log(err))
}


export const GetFbQuery = (setState, id) => {
    const queryDoc = doc(firebaseDb, "products", id)
    useEffect(() => {
        getDoc(queryDoc).then(res => {
            setState(res.data())
        }).catch(err => console.log(err))
    })
}

export const GetProductsCategory = (category, setState) => {
    const categoryCollection = collection(firebaseDb, "products");
    const queryFiltered = query(categoryCollection, where("category", "==", category))

    useEffect(() => {
        ProductsCategory()
    }, [category])

    const ProductsCategory = () => {
        category
            ? getDocs(queryFiltered).then((res) => {
                const data = res.docs.map((product) => {
                    return { id: product.id, ...product.data() }

                })
                setState(data)
            }).catch(err => console.log(err))

            : getDocs(categoryCollection).then((res) => {
                const data = res.docs.map((product) => {
                    return { id: product.id, ...product.data() }
                })
                setState(data)
            })
    }
}

export const CreateOrder = (state) => {
    const ordersCollection = collection(firebaseDb, "orders")
    addDoc(ordersCollection, state)
        .then(({ id }) => {
            alert("muchas gracias por tu compra, tu número de orden es: " + id);
        }).catch((err) => {
            alert("compra no finalizada, intenta de nuevo");
            console.log(err)
        })
}