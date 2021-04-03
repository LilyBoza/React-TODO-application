import React from "react";
import PropTypes from "prop-types";

function List(props) {
	const deleteFromList = key => {
		const newList = props.itemList.filter(itemObj => {
			return itemObj.key !== key;
		});
		props.setItemList(newList);
	};

	//console.log("props", props);
	return (
		<div>
			{props.itemList.map(itemObj => {
				return (
					// retorna las tareas por hacer así la llamada al evento para eliminar un todo
					<div className="window" key={itemObj}>
						<p>{itemObj.item}</p>
						<button onClick={() => deleteFromList(itemObj.key)}>
							x
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default List;

List.propTypes = {
	itemList: PropTypes.string,
	setItemList: PropTypes.array
};
