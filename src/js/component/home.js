import React, { useState } from "react";
import List from "./list";

export function Home() {
	const [currentItem, setCurrentItem] = useState();
	const [itemList, setItemList] = useState([]);

	const onChangeHandler = e => {
		//console.log("current value", e.target.value);
		setCurrentItem(e.target.value);
	};

	const addItemToList = e => {
		if (e.key == "Enter" && e.target.value !== "") {
			setItemList([...itemList, { item: currentItem, key: Date.now() }]);
			// me permite limpiar el espacio del input una vez que que doy click al boton
			setCurrentItem("");
			console.log("list item", itemList);
		}
	};
	return (
		<div className="principal">
			<h1>TODOS</h1>
			<h3>Ingrese las tareas por hacer</h3>
			<header className="home-header">
				<div className="wrapper">
					<div className="Input-wrapper">
						<input
							value={currentItem}
							//onkeypress para captar el dato cuando le damos enter a la tecla
							onKeyPress={addItemToList}
							//onchange para actualizar el valor que se va a captar en el todo
							onChange={onChangeHandler}
							tye="text"
							placeholder="¿Que necesita hacer?"
						/>
					</div>
					{/* me da la lista de las tareas por hacer */}
					<List itemList={itemList} setItemList={setItemList} />
				</div>
			</header>
		</div>
	);
}
