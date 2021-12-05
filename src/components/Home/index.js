import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect, useRef } from "react";
import { userListData } from "../../Store/userlistData";

const Home = ({ isAuthenticated, logout }) => {
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
            setTimeout(()=>{
                setEntries(s => ([...s, ...userListArr.slice((pageEntries * page) - 10, pageEntries * page)]));
            },1000)
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
        <div>
            Home Component
            {isAuthenticated ? <Button onClick={logout}>Logout</Button> : ''}
            {entries.map(entry => {
                const { name: { first, last }, picture: { thumbnail } } = entry;
                return (<div>
                    <div>{first}{last}</div>
                    <div><img src={thumbnail} /></div>
                </div>)
            })}
            {
                userListArr.length !== entries.length ? (
                    <div className="loading" ref={loader}>
                        <h2>Load More</h2>
                    </div>
                ) : ''
            }


        </div>
    )
}

export default Home;