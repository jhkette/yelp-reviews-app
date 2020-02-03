import yelp from "../api/yelp";
import React, {
    useState,
    useEffect
} from "react";

export default () => {


    const [error, setError] = useState("");
    const [results, setresults] = useState([]);

    async function searchApi(term) {
        try {
            const response = await yelp.get("./search", {
                params: {
                    limit: 50,
                    term,
                    location: "san jose"
                }
            });
            setresults(response.data.businesses);
        } catch (e) {
            if (e) {
                setError("Something went wrong");
            }
        }
    }
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, error]
}