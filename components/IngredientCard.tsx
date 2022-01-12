import {
  collection,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IIngredientFirebase, INewVotes } from "../libs/interfaces";
import { db } from "../utils/firebase";
import IngredientCardFacts from "./IngredientCardFacts";
import MacroDoug from "./MacroDoug";

function IngredientCard({ ingredient }: { ingredient: IIngredientFirebase }) {
  const { data } = useSession();
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const macroData = [
    ingredient.macros.prot,
    ingredient.macros.carb,
    ingredient.macros.fat,
  ];
  const totalVotes = ingredient.upVoted.length - ingredient.downVoted.length;

  useEffect(() => {
    if (!ingredient) return;
    if (ingredient.upVoted.includes(data?.user?.email || "")) {
      setDownVoted(false);
      return setUpVoted(true);
    }
    if (ingredient.downVoted.includes(data?.user?.email || "")) {
      setUpVoted(false);
      return setDownVoted(true);
    }
    setUpVoted(false);
    setDownVoted(false);
  }, [ingredient]);

  const filterVote = (votes: Array<string>) => {
    return votes.filter((mail) => mail !== data?.user?.email);
  };

  const upVote = () => {
    const newEmail = data?.user?.email;
    if (!newEmail) return;
    const updatedEmails = upVoted
      ? filterVote(ingredient.upVoted)
      : [...ingredient.upVoted, newEmail];
    const newVotes = {
      upVoted: updatedEmails,
    };
    updateIngredients(newVotes);
  };

  const downVote = () => {
    console.log(totalVotes);
    if (totalVotes < -3) removeIngredient();
    const newEmail = data?.user?.email;
    if (!newEmail) return;
    const updatedEmails = downVoted
      ? filterVote(ingredient.downVoted)
      : [...ingredient.downVoted, newEmail];
    const newVotes = {
      downVoted: updatedEmails,
    };
    updateIngredients(newVotes);
  };

  const removeIngredient = async () => {
    const ingredientRef = await collection(db, "ingredients");
    const ingredientQuery = query(
      ingredientRef,
      where("name", "==", ingredient.name)
    );
    const ingredientDocs = (await getDocs(ingredientQuery)).docs[0];
    deleteDoc(ingredientDocs.ref);
  };

  const updateIngredients = async (newVotes: INewVotes) => {
    const ingredientRef = await collection(db, "ingredients");
    const ingredientQuery = query(
      ingredientRef,
      where("name", "==", ingredient.name)
    );
    const ingredientDocs = (await getDocs(ingredientQuery)).docs[0];
    updateDoc(ingredientDocs.ref, {
      ...newVotes,
    });
  };

  return (
    <div className="relative h-20 md:h-36 max-w-xl w-[90%] rounded-md shadow-md bg-white leading-3 flex items-center">
      <div className="flex flex-col items-center">
        <div
          className={`${
            upVoted && "upVoted"
          } text-gray-400 cursor-pointer pt-3 px-3`}
          onClick={() => {
            if (downVoted) downVote();
            upVote();
          }}
        >
          <IoIosArrowUp />
        </div>
        {totalVotes}
        <div
          className={`${
            downVoted && "downVoted"
          } text-gray-400 cursor-pointer pb-3 px-3 `}
          onClick={() => {
            if (upVoted) upVote();
            downVote();
          }}
        >
          <IoIosArrowDown />
        </div>
      </div>
      <p className="w-40 leading-5 truncate-2">
      {ingredient.name}

      </p>
      <IngredientCardFacts
        portion={ingredient.portion_size}
        macros={ingredient.macros}
      />
      <MacroDoug data={macroData} />
    </div>
  );
}

export default IngredientCard;
