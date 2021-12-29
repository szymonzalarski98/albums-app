import React from "react";
import { Details as DetailsComponent } from "../components";

export const Details = ({ route }) => <DetailsComponent {...route.params} />;