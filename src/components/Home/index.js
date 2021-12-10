import { Container, CssBaseline, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { userListData } from "../../Store/userlistData";
import Logout from "../Logout";

const Home = (props) => {
    const pageEntries = 10;
    const userListArr = userListData.results;
    const [page, setPage] = useState(0);
    const [entries, setEntries] = useState([]);
    const loader = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }

    useEffect(() => {
        if (page > 0) {
            setTimeout(() => {
                setEntries(s => ([...s, ...userListArr.slice((pageEntries * page) - 10, pageEntries * page)]));
            }, 1000)
        }
    }, [page])

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }

    }, []);

    return (
        <Container component="main" >
            <Container>
                <Typography variant="h2">Home Component</Typography>
                <Logout />
            </Container>
          
            {entries.map((entry, index) => {
                const { name: { first, last }, picture: { thumbnail } } = entry;
                return (<div key={index}>
                    <div>{first}{last}</div>
                    <div><img src={thumbnail} /></div>
                </div>)
            })}
            {
                userListArr.length !== entries.length ? (
                    <div className="loading" ref={loader}>
                        <Typography variant="h6">Load More</Typography>
                    </div>
                ) : ''
            }
        </Container>
    )
}

export default Home;