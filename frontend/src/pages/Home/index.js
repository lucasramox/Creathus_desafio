import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from "../../components/Pagination";
import Posts from "../../components/PostApi";



export default function Home(){

  const [digimons, setDigimons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(21);
  localStorage.clear();

  useEffect(() => {
      axios.post('http://localhost:3333/digimons',{
        digimons:digimons
      }).then((response) => {
        setDigimons(response.data);
      })
       
  }, []); 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = digimons.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);


    return(
       <div>
            <Posts posts={currentPosts} />
            <br></br>
            <div className="d-flex justify-content-center">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={digimons.length}
                    paginate={paginatePage}
                />
            </div>
        </div >
    );
}