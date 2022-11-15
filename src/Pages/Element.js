import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { db } from "../Firebase/FirebaseStore";
import { PokeContext } from "../Store/store";
import classes from "./Element.module.css";
const Element = ({ pokeData, loading }) => {
  const [likes, setLikes] = useState([]);
  const [query, setQuery] = useState("");
// updating states on adding particular id into like array which is stored in firebase
// and this query is used for searching aur we can say filter the pokemons by their name only
  const ctx = useContext(PokeContext);
   ctx.setLikedPokimons(likes)
  ctx.setAllPokisData(pokeData)
  useEffect(() => {
    getLikedPokemon("player")
      .then((arr) => {
        setLikes(arr);
      })
      .catch((error) => {
        console.log("firebase fetching error", error);
      });
  }, []);

  // in this function we are getting data from firebase and returning entire stored array if we have data otherwise just empty array
  // this firebase buildin way to get data through getDocs
  const getLikedPokemon = async () => {
    const res = await getDoc(doc(db, "Pokemons","player" ));
  
    return res.data() ? res.data().Likes : [];
  };
 
  // in this i get the data as well update
  // if we have same id again then this will delete the existing id 
  // and print the remaining entire data
  //if id is not matched within the array we add the id into that array, using spread operation to adding previous state too.
  const likedPokiDataHandler = async (poki) => {
    const res = await getDoc(doc(db, "Pokemons", "player"));
   
    if (res.data()) {
      const likes = res.data().Likes;
      
      let likesCopy = [...likes];
      if (likesCopy.includes(poki.id)) {
        likesCopy = likesCopy.filter((item) => item !== poki.id);
        setDoc(
          doc(db, "Pokemons", "player"),
          { Likes: [...likesCopy] },
          { merge: true }
        );
        setLikes(likesCopy);
      } else {
        setDoc(
          doc(db, "Pokemons", "player"),
          { Likes: [...likesCopy, poki.id] },
          { merge: true }
        );
        setLikes([...likesCopy, poki.id]);
      }
    } else {
      await setDoc(doc(db, "Pokemons", "player"), {
        Likes: [poki.id],
      });
    }
  };
  // using this boolean logic by finding the same index we are changing thie heart icon
  const getLikesStatus = (id) => {
    const index = likes.findIndex((item) => item == id);
    return index >= 0 ? true : false;
  };
  // this function storing the latest state/value from search input
  const searchHandler = (event) => {
    setQuery(event.target.value);
  };
  let filterItems = [...pokeData];
  // if we have data the comparing the every alphbet to check matched values
  if (query.length > 0) {
    filterItems = [...pokeData];

    filterItems = filterItems.filter((e) => e.name.includes(query));
  }
  
  return (
    <>
      <input
        type="search"
        placeholder="Search your Pokemon"
        value={query}
        onChange={searchHandler}
        className={classes.search}
      />
     
      <div className={classes.element}>
        {loading ? (
          <h1>Loading ....</h1>
        ) : (
          filterItems.map((item, i) => {
            return (
              <div key={i} onClick={() => ctx.setMyData(item)}>
                <Card style={{ width: "16rem" }}>
                  <button
                    className={classes.btn}
                    onClick={() => likedPokiDataHandler(item)}
                  >
                    {getLikesStatus(item.id) ? (
                      <AiFillHeart style={{ color: "red" }} />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                  <Card.Img variant="top" src={item.sprites.front_default} />
                  <Card.Body>
                  <Card.Title>
                      {item.id}
                    </Card.Title>
                    <Card.Title>
                     {item.name}
                    </Card.Title>

                    <Card.Text>Some quick example text</Card.Text>
                    <Link to="/pokidetail">
                      <Button variant="primary">View in Detail</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Element;
