import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Link} from "react-router-dom";
import ProductService from "./ProductService";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

function Shop () {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let productService;
        productService = new ProductService();
        productService.getItems().then(data => setItems(data.data));
    },[]);

    return (
        <div className="container">
            <h1>Shopping List</h1>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th colSpan="1">Key</th>
                        <th colSpan="1">Name</th>
                        <th colSpan="1">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`shop/${item.id}`}>{item.name}</Link></td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
    // return (
    //     <Card>
    //         <DataTable value={items}>
    //             <Column field="id" header="Key"></Column>
    //             <Column field="name" header="Name"></Column>
    //             <Column field="description" header="Description"></Column>
    //             <Column field="gameType" header="Type"></Column>
    //         </DataTable>
    //     </Card>
    // );
}

export default Shop;
