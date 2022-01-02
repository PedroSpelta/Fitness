import { addDoc, collection } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { db } from "../utils/firebase";

function IngredientForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("Genérico");
  const [portion, setPortion] = useState(0);
  const [carb, setCarb] = useState(0);
  const [prot, setProt] = useState(0);
  const [fat, setFat] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [sodium, setSodium] = useState(0);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ingColl = collection(db, "ingredients");
    addDoc(ingColl, {
      name,
      macros: { carb, fat, fiber, prot, sodium },
      portion_size: portion,
    });
    console.log("teste");
  };

  return (
    <div className="border p-10 max-w-2xl w-[80%] mt-10">
      <p className="text-center text-2xl font-bold mb-10">Ingrediente</p>
      <div className="w-full border-b border-gray-400 h-2 mb-5"></div>
      <form className="flex flex-wrap justify-center gap-5">
        <div>
          <p>Nome:</p>
          <input
            type="text"
            className="bg-gray-200 rounded-lg p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Marca:</p>
          <input
            type="text"
            className="bg-gray-200 rounded-lg p-1"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div>
          <p>Porção (g):</p>
          <input
            type="number"
            className="bg-gray-200 rounded-lg p-1"
            value={portion.toString()}
            onChange={(e) => setPortion(Number(e.target.value))}
          />
        </div>
        <div className="w-full border-b border-gray-400 h-2"></div>
        <div>
          <p>Carboidratos (g):</p>
          <input
            type="number"
            className="bg-gray-200 rounded-lg p-1"
            value={carb.toString()}
            onChange={(e) => setCarb(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Proteinas (g):</p>
          <input
            type="number"
            className="bg-gray-200 rounded-lg p-1"
            value={prot.toString()}
            onChange={(e) => setProt(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Gorduras (g)</p>
          <input
            type="number"
            className="bg-gray-200 rounded-lg p-1"
            value={fat.toString()}
            onChange={(e) => setFat(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Fibras (g)</p>
          <input
            type="number"
            className="bg-gray-200 rounded-lg p-1"
            value={fiber.toString()}
            onChange={(e) => setFiber(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Sódio (mg)</p>
          <input
            type="number"
            className="bg-gray-200 rounded-lg p-1"
            value={sodium.toString()}
            onChange={(e) => setSodium(Number(e.target.value))}
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            onClick={(e) => onSubmit(e)}
            className="border rounded-lg border-gray-600 text-center text-gray-600 p-1.5 addMealBtn cursor-pointer"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default IngredientForm;
