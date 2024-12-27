import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from '../pages/Create';
import Update from '../pages/Update';
import Delete from '../pages/Delete';
import List from '../pages/List';
import ListEmail from '../pages/ListEmail';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/delete" element={<Delete />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/listEmail" element={<ListEmail />} />
        </Routes>
    )
}